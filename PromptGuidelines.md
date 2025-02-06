# Stark Vision Prompt Writing Guidelines

This guide outlines best practices for writing effective prompts when using Stark Vision for mobile test automation.

## Core Commands and Prompt Patterns

### 1. Click/Tap Actions

Basic pattern: `Click on [element description]`

Examples:
```
Click on search field
Click on the FreshMenu restaurant
Click on Add item
```

Tips:
- Be specific about the element you want to click
- Use exact text when available
- For multiple similar elements, add context (e.g., "Click on Add button below Pizza")
- Include location context when needed (e.g., "Click on search icon in navbar")

### 2. Text Input

Basic pattern: `Enter [value] in/into [field description]`

Examples:
```
Enter "Fresh Menu" into Search text field
Enter "HSR Layout" in the Drop location field
```

Tips:
- Always wrap the input text in quotes
- Be specific about which input field to use
- Include context if multiple similar fields exist

### 3. Gestures

Stark Vision supports various gesture types for interacting with mobile applications.

#### A. Scrolling
Basic patterns:
```javascript
// Simple scroll
await ai('Scroll up until you see "Add" text');
await ai('Scroll down until you see "Payment Methods"');

// Scroll with distance
await ai('Scroll up by 50%');
await ai('Scroll down by 75%');

// Scroll in container
await ai('Scroll up in "Menu Items" list until you see "Desserts"');
await ai('Scroll down in product carousel until you see "Last Item"');
```

Configuration:
```javascript
{
  maxScrolls: 5,      // Maximum scroll attempts (default: 3)
  scrollSize: "SMALL" // SMALL: 20%, MEDIUM: 50%, LARGE: 80% of screen
}
```

Tips:
- Use smaller scrolls for dense content
- Increase maxScrolls for long lists
- Reference container elements for precise scrolling
- Include visual markers in scroll targets

#### B. Swipe - COMING SOON!!!
Basic patterns:
```javascript
// Directional swipe
await ai('Swipe left on "Product Card"');
await ai('Swipe right on order item');

// Swipe with context
await ai('Swipe left on first order in list');
await ai('Swipe right on notification below "Today"');

// Swipe to delete
await ai('Swipe left to delete "Cart Item"');
await ai('Swipe to remove address');
```

Configuration Options:
```javascript
{
  // For scrolling/swiping
  maxScrolls: number,         // Maximum attempts
  scrollSize: "SMALL" | "MEDIUM" | "LARGE",  // Gesture distance
  
  // Common options
  elementVisibleCheck: boolean,  // Verify element before gesture
  saveToCache: boolean,          // Cache element location
}
```

Best Practices:

1. **Scroll Performance**
   - Use smaller scroll sizes for precise navigation
   - Increase maxScrolls for longer content
   - Reference container elements when possible
   - Disable elementVisibleCheck after scrolls

2. **Gesture Precision**
   - Include clear source and target elements
   - Reference nearby elements for context
   - Use visual attributes to disambiguate
   - Specify containers for scoped gestures

3. **Error Handling**
   ```javascript
   // Retry with different scroll size
   try {
     await ai('Scroll up until you see "Add"', { scrollSize: "SMALL" });
   } catch {
     await ai('Scroll up until you see "Add"', { scrollSize: "LARGE" });
   }
   
   // Verify before gesture
   const visible = await aiGetInfo('Can you see "Drag Handle"?');
   if (visible.conditionSatisfied) {
     await ai('Drag "Item" to "New Position"');
   }
   ```

### 4. Verification/Assertions

Stark Vision supports various types of assertions to verify UI elements and states. Use `aiGetInfo()` for more descriptive assertions.

#### A. Basic Element Presence
```javascript
// Basic presence check
await aiGetInfo('Can you see "Add to Cart" button?');

// With context
await aiGetInfo('Can you see checkout button below total price?');

// Multiple elements
await aiGetInfo('Can you see both minus and plus buttons next to quantity?');
```

#### B. Element State Verification
```javascript
// Enabled/Disabled states
await aiGetInfo('Is the checkout button enabled? Return as boolean'); -> This will return boolean value.
await aiGetInfo('Is the payment button disabled?');

// Selected/Checked states
await aiGetInfo('Is the terms checkbox checked?');
await aiGetInfo('Is dark mode toggle selected?');

// Element properties
await aiGetInfo('Is the continue button in blue color?');
await aiGetInfo('Is the error message in red text?');
```

#### C. Text Content Verification
```javascript
// Exact text matching
await aiGetInfo('Does the total price show "$49.99"?');
await aiGetInfo('Is the error message exactly "Please enter valid email"?');

// Partial text matching
await aiGetInfo('Does the product description contain "organic"?');
await aiGetInfo('Does the header include user email address?');
```

#### D. Position/Layout Assertions
```javascript
// Relative positioning
await aiGetInfo('Is the search bar above the product list?');
await aiGetInfo('Is the total price displayed at bottom of cart?');

// Alignment checks
await aiGetInfo('Is the logo centered in header?');
await aiGetInfo('Are all product cards aligned in grid?');
```

#### E. Complex State Verification
```javascript
// Multiple conditions
await aiGetInfo('Is the order button enabled and showing "Place Order"?');
await aiGetInfo('Are all required fields marked with red asterisk?');

// Dynamic content
await aiGetInfo('Are there exactly 5 items in the cart?');
await aiGetInfo('Is the first restaurant showing "40 mins" delivery time?');
```

#### F. Visibility/Display Verification
```javascript
// Element visibility
await aiGetInfo('Is the loading spinner visible?');
await aiGetInfo('Is the error message hidden?');

// Partial visibility
await aiGetInfo('Is the entire product image visible without scrolling?');
await aiGetInfo('Is the bottom navigation bar fully visible?');
```

#### Response Format
```javascript
{
  conditionSatisfied: boolean,  // True if assertion passes
  explanation: string          // Detailed explanation of verification
}
```
#### G. Verification - Returns true or false
```javascript
// Element visibility
await ai('Verify the loading spinner visible?');
await ai('Verify the error message hidden?');
```
#### Best Practices for Assertions

1. **Be Specific**
   - Use exact text in quotes when verifying content
   - Include relevant context and location
   - Specify states clearly (enabled/disabled, checked/unchecked)

2. **Element Context**
   - Reference nearby stable elements
   - Use multiple reference points for complex layouts
   - Include visual attributes when helpful

3. **Verification Strategy**
   - Start with simple presence checks
   - Build up to complex state verification
   - Combine multiple conditions when needed
   - Use appropriate wait times before assertions

4. **Common Patterns**
   ```javascript
   // Wait and verify
   await driver.pause(2000);
   const result = await aiGetInfo('Can you see success message?');
   
   // Check and act
   const {conditionSatisfied} = await aiGetInfo('Is login button enabled?');
   if (conditionSatisfied) {
     await ai('Click on login button');
   }
   
   // Verify after action
   await ai('Click on sort button');
   const sorted = await aiGetInfo('Are items sorted by price?');
   ```

### 5. Clear/Delete Actions

Basic pattern: `Clear the [field description]`

Examples:
```
Clear the search field
Clear the text admin in the search field
```

### 6. Back Navigation

Basic pattern: `Click on the device back button`

Example:
```
Click on the device back button
```

## Element Identification Strategies

### 1. Proximity-Based Location

Use these patterns to identify elements based on their location relative to other elements:

- **Near**: `Click on search icon near shopping cart`
- **Next to**: `Click on add button next to Margherita Pizza`
- **Below**: `Click on price text below product image`
- **Above**: `Click on menu icon above product list`
- **Between**: `Click on quantity field between minus and plus buttons`

Tips:
- Always reference unique, stable elements
- Use multiple proximity indicators for complex layouts
- Combine with visual attributes when helpful

### 2. Visual Attributes

Identify elements using their visual characteristics:

- **Color**: `Click on blue Continue button`
- **Size**: `Click on large Play button`
- **Shape**: `Click on circular Add button`
- **Icons**: 
  - Common icons: `Click on shopping cart icon`
  - Descriptive icons: `Click on heart icon next to favorite items`
  - System icons: `Click on back arrow icon in top left`

### 3. Dealing with Similar Elements

When multiple similar elements exist, use these strategies:

1. **Ordinal Position**:
   ```
   Click on first Add button
   Click on second restaurant in the list
   Click on last Save button
   ```

2. **Contextual Reference**:
   ```
   Click on Add button below Pizza description
   Click on price text next to product name
   Click on quantity field between - and + buttons
   ```

3. **Unique Attributes**:
   ```
   Click on blue Order Now button
   Click on large Play icon in center
   Click on circular Profile button in header
   ```

4. **Combined Strategy**:
   ```
   Click on first blue Add button below product image
   Click on heart icon next to second restaurant
   Click on Edit button near bottom of product details
   ```

## Best Practices

1. **Element Description**
   - Use exact text when available
   - Include contextual information
   - Specify location (top, bottom, below, next to)
   - Reference nearby unique elements

2. **Command Structure**
   - Keep instructions clear and concise
   - Use consistent terminology
   - Include necessary context
   - Avoid ambiguous descriptions

3. **Configuration Options**
   ```javascript
   {
     elementVisibleCheck: boolean,  // Check element visibility before action
     saveToCache: boolean,          // Cache element location
     maxScrolls: number,            // Maximum scroll attempts
     scrollSize: "SMALL" | "MEDIUM" | "LARGE"  // Scroll distance
   }
   ```

4. **Performance Optimization**
   - Disable elementVisibleCheck after scroll operations
   - Use saveToCache: false after scroll actions
   - Adjust maxScrolls based on content length
   - Choose appropriate scrollSize for content density

## Common Scenarios and Examples

### Complex Navigation
```javascript
// Navigate to specific restaurant
await ai("Click on search field");
await ai('Enter "Fresh Menu" into Search text field');
await ai("Click the FreshMenu restaurant", { saveToCache: false });

// Scroll and add item
await ai('Scroll up until you see the "Add" text', {
  maxScrolls: 9,
  scrollSize: "MEDIUM"
});
await ai("Click on Add", {
  elementVisibleCheck: false,
  saveToCache: false
});
```

### Form Filling
```javascript
// Fill address form
await ai("Click on 'Where are you going?'");
await ai("Enter 'HSR Layout' in the Drop location field");
await ai("Click on the 'Heart icon of HSR Layout Police Station below Select on Map'");

// Verify entry
const response = await aiGetInfo("Can you see 'HSR Layout Police Station below Add to favourites'?");
```

### List Navigation
```javascript
// Scroll through list
await ai("Scroll up until you see 'Made in India'", { maxScrolls: 5 });
await ai("Scroll down until you see 'Address List'", { 
  maxScrolls: 5,
  scrollSize: "SMALL"
});
```
