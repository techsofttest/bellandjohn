# Executive Management

## Purpose

Executives are responsible for handling customer quote requests. Customer emails can be assigned to an executive directly from the Enquiries table, creating a permanent email-to-executive mapping.

All future enquiries from the same email address will automatically inherit the assignment.

---

# Executive Resource

## Menu

```text
CRM
 └── Executives
```

---

# Executive Form

Fields:

```text
Name
Email
Phone
Status (Active / Inactive)
```

Validation:

```text
Email must be unique.
Inactive executives cannot be assigned to new customers.
```

---

# Executive Listing

Columns:

```text
Name
Email
Phone
Assigned Customers
Assigned Enquiries
Open Enquiries
Status
Created Date
```

Example:

| Executive     | Customers | Enquiries | Status |
| ------------- | --------- | --------- | ------ |
| John Smith    | 42        | 128       | Active |
| Sarah Johnson | 31        | 94        | Active |

---

# Executive Detail Page

The Executive detail page should provide a complete overview of all assigned customers and enquiries.

## Executive Information

Display:

```text
Name
Email
Phone
Status

Assigned Customers Count
Assigned Enquiries Count
```

Example:

```text
Name: John Smith
Email: john@example.com
Phone: +91 XXXXX XXXXX

Assigned Customers: 42
Assigned Enquiries: 128
```

---

# Assigned Customer Emails Section

Display a dedicated table showing all customer email assignments belonging to the executive.

## Table Columns

```text
Customer Email
Total Enquiries
Latest Enquiry Date
Assigned Date
Actions
```

Example:

| Customer Email                              | Total Enquiries | Latest Enquiry | Assigned Date |
| ------------------------------------------- | --------------- | -------------- | ------------- |
| [buyer@gmail.com](mailto:buyer@gmail.com)   | 8               | 20-Jun-2026    | 01-Jun-2026   |
| [accounts@abc.com](mailto:accounts@abc.com) | 3               | 18-Jun-2026    | 15-May-2026   |
| [purchase@xyz.com](mailto:purchase@xyz.com) | 12              | 22-Jun-2026    | 10-Apr-2026   |

---

# Customer Assignment Actions

Each assigned email should support:

```text
View Related Enquiries
Reassign Executive
Remove Assignment
```

---

# View Related Enquiries

Clicking an assigned email should display all enquiries associated with that email.

Example:

```text
buyer@gmail.com

Request #101
Request #118
Request #124
Request #155
```

This allows administrators to view the complete customer history from a single location.

---

# Reassign Executive

Allows transferring ownership of a customer email.

Example:

```text
buyer@gmail.com

John Smith
      ↓
Sarah Johnson
```

System Actions:

1. Update email assignment record.
2. Update all existing enquiries linked to that email.
3. Preserve enquiry history.
4. Future enquiries automatically route to the new executive.

---

# Remove Assignment

Allows an administrator to remove ownership of a customer email.

System Actions:

1. Delete email assignment record.
2. Set executive_id to NULL on all related enquiries.
3. Future enquiries from that email become unassigned until reassigned.

Confirmation Required:

```text
Are you sure you want to remove this assignment?

All enquiries linked to this email will become unassigned.
```

---

# Executive Statistics

Display summary cards:

```text
Assigned Customers
Assigned Enquiries
New Enquiries This Month
```

Optional future additions:

```text
Quotes Sent
Won Opportunities
Lost Opportunities
Conversion Rate
```

---

# Search Functionality

Allow administrators to search assigned customers by:

```text
Customer Email
Customer Name
Company Name (if available)
```

---

# Filters

Filters available on Executive detail page:

```text
All Customers
Customers With Recent Activity
Customers With Multiple Enquiries
```

---

# Future Enhancement

Bulk reassignment functionality.

Workflow:

```text
Select Multiple Customer Emails
        ↓
Choose New Executive
        ↓
Update Assignments
        ↓
Update Related Enquiries
```

Use Cases:

* Executive leaves company
* Workload balancing
* Territory changes
* Customer portfolio redistribution
