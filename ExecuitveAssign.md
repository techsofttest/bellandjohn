# Revised Executive Assignment Architecture

## Assignment Method

Executive assignment will not be managed through a separate Company Assignment module.

Instead, assignments will be performed directly from the Enquiries table within Filament.

When an administrator assigns an executive to an enquiry, the system will create a permanent mapping between:

```text
Customer Email
        ↓
Assigned Executive
```

Example:

```text
procurement@gmail.com
        ↓
John Smith
```

All future quote requests submitted using the same email address will automatically be assigned to the same executive.

---

# Database Changes

## Table: executives

Stores sales executives.

```sql
CREATE TABLE executives (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50) NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);
```

---

## Table: enquiry_executive_assignments

Stores the permanent email-to-executive mapping.

```sql
CREATE TABLE enquiry_executive_assignments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL UNIQUE,
    executive_id BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,

    CONSTRAINT fk_assignment_exec
        FOREIGN KEY (executive_id)
        REFERENCES executives(id)
        ON DELETE CASCADE
);
```

---

# Executive Management

## Filament Resource

Menu:

```text
CRM
 └── Executives
```

Fields:

```text
Name
Email
Phone
Status
```

Table:

```text
Name
Email
Phone
Status
Total Assigned Customers
```

---

# Enquiries Table Enhancements

## New Column

Add an "Executive" column.

Examples:

```text
John Smith
Sarah Johnson
Unassigned
```

Display:

```text
[John Smith]
```

or

```text
[Unassigned]
```

with badge styling.

---

# Assignment Action

Each enquiry row will include:

```text
Assign Executive
```

action.

Implementation:

```text
Row Action
    ↓
Open Modal
    ↓
Select Executive
    ↓
Save
```

---

# Assignment Modal

Fields:

```text
Customer Email (readonly)

Executive
    Dropdown of active executives

Apply To Existing Requests
    Yes (default)
```

Buttons:

```text
Cancel
Assign
```

---

# Assignment Logic

When assignment is saved:

1. Create/update record in:

```text
enquiry_executive_assignments
```

2. Find all enquiries matching the same email.

```php
Enquiry::where('email', $email)
```

3. Update all matching enquiries.

```php
executive_id = selected_executive
```

Result:

```text
Request #101
Request #105
Request #118
```

all show:

```text
John Smith
```

immediately.

---

# Automatic Assignment For Future Requests

When a new quote request is submitted:

```php
$assignment = EnquiryExecutiveAssignment::where(
    'customer_email',
    $request->email
)->first();
```

If found:

```php
$enquiry->executive_id =
    $assignment->executive_id;
```

before saving.

This ensures all future requests inherit the assignment automatically.

---

# Email Notifications

## Unassigned Request

Send notification to:

```text
Admin Only
```

---

## Assigned Request

Send notification to:

```text
Admin
Assigned Executive
```

---

# Enquiries Filters

Add filters:

```text
All
Assigned
Unassigned
```

and

```text
Executive
 ├── John Smith
 ├── Sarah Johnson
 └── etc
```

---

# Dashboard Statistics

Add widgets:

```text
Unassigned Enquiries
```

```text
Enquiries Per Executive
```

```text
Recently Assigned Customers
```

---

# Benefits

* No company management screen required.
* Works with Gmail, Outlook and personal email addresses.
* Assignment is done where staff actually work (Enquiries screen).
* Existing and future enquiries stay synchronized.
* Minimal database complexity.
* Easy to expand into a CRM later.
