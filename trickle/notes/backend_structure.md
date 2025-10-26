# TaskGoose Backend Structure

## Database Collections

### 1. Users
Stores user registration and profile information
- FullName, Email, PhoneNumber
- Role (Smart Tasker, GoosePro, Goosepreneur, GooseShopper)
- ServiceInterest (array of services)

### 2. Tasks
Stores all task booking submissions
- TaskTitle, TaskDescription, Category
- SpecificService, TaskSize, Complexity
- PreferredDate, PreferredTime, TaskLocation
- TaskStatus (Pending, In Progress, Completed)
- CreatedBy information

### 3. Quotes
Stores quote requests and responses
- TaskId, TaskCategory
- QuotedAmount, Status

### 4. Service Categories
Reference table for available services
- ServiceName, ServiceDescription
- CTAText, Status (Active/Coming Soon)

## Booking Flow

1. **Step 1**: Greeting + Category Selection
2. **Step 2**: Specific Service Selection
3. **Step 3**: Task Details Form
4. **Confirmation**: Success message with quote timeline

## Coming Soon Features
- Goose Shopper (Marketplace)
- Goosepreneur (Vendor Dashboard)
- Payment Integration

## GooseMarket Structure (Coming Soon)

### Vendors (Goosepreneurs)
- Name, StoreName, ProductCategory
- Description, Images, Contact
- VerificationStatus

### Products
- ProductName, Category, Price
- VendorId, StockStatus, Description
- Images

### Orders
- BuyerId, ProductId, Quantity
- OrderDate, Status, TotalAmount
