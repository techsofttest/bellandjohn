# Country-Specific Featured Products - Implementation Plan

## Overview

The current product catalog supports a single global "Featured Product" flag.

The storefront now supports multiple countries, and featured products must be configurable independently for each country.

Example:

```text
Product A
✓ Featured in Germany
✗ Featured in Austria

Product B
✗ Featured in Germany
✓ Featured in Austria

Product C
✓ Featured in Germany
✓ Featured in Austria
```

This implementation replaces the single featured toggle with a country-based assignment system.

---

# Objectives

## Business Requirements

* Allow products to be featured in one or more countries.
* Support country-specific featured product listings.
* Allow administrators to manage featured countries directly from the Product form.
* Support future addition of new countries without database changes.
* Display featured country assignments in the product listing.

---

# Database Changes

## New Table: product_featured_countries

Create a pivot table to store featured product assignments by country.

### SQL

```sql
CREATE TABLE product_featured_countries (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT UNSIGNED NOT NULL,
    country_id BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,

    UNIQUE KEY uniq_product_country (
        product_id,
        country_id
    ),

    CONSTRAINT fk_pfc_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_pfc_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id)
        ON DELETE CASCADE
);
```

---

# Existing Database Cleanup

The existing column:

```text
featured
```

will become obsolete.

### Options

#### Option A (Recommended)

Keep the column temporarily during deployment.

```text
Migration Phase
```

1. Create pivot table.
2. Migrate existing featured products.
3. Update application code.
4. Remove old column after verification.

#### Option B

Remove immediately if no production data depends on it.

---

# Model Relationships

## Product Model

Add relationship:

```php
public function featuredCountries()
{
    return $this->belongsToMany(
        Country::class,
        'product_featured_countries'
    );
}
```

---

## Country Model

Add relationship:

```php
public function featuredProducts()
{
    return $this->belongsToMany(
        Product::class,
        'product_featured_countries'
    );
}
```

---

# Filament Product Form Changes

## Remove Existing Field

Remove:

```text
Featured Product
```

(Boolean Toggle)

---

## Add Country Assignment Field

Add:

```text
Featured In Countries
```

Use a checkbox list populated from the countries table.

### Example

```text
Featured In Countries

☑ Germany
☐ Austria
```

or

```text
Featured In Countries

☑ Germany
☑ Austria
```

---

## Filament Component

Suggested implementation:

```php
CheckboxList::make('featuredCountries')
    ->relationship('featuredCountries', 'name')
    ->columns(2)
    ->label('Featured In Countries');
```

---

# Product Listing Changes

## Replace Featured Column

Remove:

```text
Featured
Yes / No
```

---

## Add Featured Countries Column

Display assigned countries.

### Example

| Product   | Featured In      |
| --------- | ---------------- |
| Product A | Germany          |
| Product B | Austria          |
| Product C | Germany, Austria |

---

## Suggested Filament Column

```php
TextColumn::make('featuredCountries.name')
    ->badge()
    ->separator(',')
    ->label('Featured In');
```

---

# Product Filters

Add a filter to quickly identify featured products.

## Filter Options

```text
All Products

Featured In Germany

Featured In Austria
```

Future countries should appear automatically.

---

# Frontend Changes

## Country-Specific Featured Products

When displaying featured products, filter by the active country.

### Example

Germany Store

```text
Featured Products

Product A
Product C
```

Austria Store

```text
Featured Products

Product B
Product C
```

---

# Featured Product Query

Example implementation:

```php
$featuredProducts = Product::query()
    ->whereHas('featuredCountries', function ($query) use ($countryId) {
        $query->where('countries.id', $countryId);
    })
    ->get();
```

---

# Admin Workflow

## Product Creation

Administrator creates product.

### Example

```text
Product Name:
Industrial Vacuum Pump

Featured In Countries:

☑ Germany
☐ Austria
```

Product appears only in Germany's featured products section.

---

## Product Update

Administrator edits product.

### Example

```text
☑ Germany
☑ Austria
```

Product now appears in both countries.

---

# Validation Rules

## Rules

* A product may be featured in zero countries.
* A product may be featured in multiple countries.
* Duplicate product-country assignments are not allowed.
* Countries must exist in the countries table.

---

# Future Enhancements

## Sort Order

If featured product ordering becomes necessary, extend the pivot table.

### Additional Column

```sql
ALTER TABLE product_featured_countries
ADD sort_order INT NULL;
```

Example:

| Product   | Country | Sort Order |
| --------- | ------- | ---------- |
| Product A | Germany | 1          |
| Product C | Germany | 2          |
| Product B | Austria | 1          |

This would allow country-specific featured product ordering without further structural changes.

---

# Deliverables

## Database

* Create product_featured_countries pivot table.
* Migrate existing featured data if required.

## Backend

* Add Product ↔ Country featured relationships.
* Replace Featured toggle with country selection.
* Update Product form.
* Update Product table column.
* Add country-based featured filters.

## Frontend

* Load featured products by active country.
* Remove dependency on the old featured flag.

## Future Ready

* Supports unlimited countries.
* Supports products featured in multiple countries.
* Supports future sort ordering.
* No schema changes required when new countries are added.
