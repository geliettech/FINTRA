# FINTRA - Finance Management App

A modern SaaS finance management application that helps users track income, expenses, savings, investments, and budgets with smart analytics, financial insights, subscription-based features, and AI-powered recommendations.

---

# 🚀 Tech Stack

## Frontend

- React
- React Router
- Zustand + context (State Management)
- React Hook Form
- Zod
- Sonner

## Backend & Database

- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Security Rules

## Data Visualization

- Recharts

## AI Integration

- OpenAI API (Financial Insights Engine)

## Performance & Quality

- Suspense
- Jest
- Code Splitting
- Lazy Loaded Routes
- React.memo
- useMemo
- useCallback
- Debounced Search
- Skeleton Loaders
- Pagination
- Empty States
- Error Boundaries
- Optimized Firestore Queries
- Caching & Memoization
- Responsive Design
- Accessibility (WCAG)

## DevOps

- GitHub Actions CI/CD
- Vercel Hosting

## Progressive Web App

- PWA Support
- Service Workers
- Offline Caching
---


# 📁 App Structure

```txt
src/
├── app/
├── routes/
├── pages/
│   ├── landing/
│   ├── auth/
│   └── dashboard/
├── components/
│   ├── ui/
│   ├── charts/
│   ├── forms/
│   └── layout/
├── hooks/
├── services/
├── store/
├── context/
├── schemas/
├── utils/
├── firebase/
├── assets/
└── tests/
```

---

# 🔄 GitHub Actions CI/CD Pipeline

## Automated Workflow

- Install Dependencies
- Run ESLint
- Run Unit Tests
- Build Application
- Deploy to Vercel
- Pull Request Validation

---

# 📱 Progressive Web App (PWA)

## Features

- Installable on Mobile & Desktop
- Offline Access
- Service Worker Caching
- Splash Screen
- App Icons
- Background Sync
- Push Notifications

---

# 🌐 Landing Page Flow

## Header

- Logo
- Features
- Pricing
- FAQ
- Login
- Start Free

## Hero Section

- Product Overview
- Call-To-Action Buttons

## Features Overview

- Expense Tracking
- Budget Management
- Analytics
- Financial Predictions
- AI Assistant

## Pricing Plans

- Free
- Pro
- Premium

## FAQ

Frequently Asked Questions

## CTA Section

Start Managing Your Finances Today

## Footer

- About
- Contact
- Privacy Policy
- Terms & Conditions
- Social Links

---

# 🔐 Authentication Flow

## Register

### User Inputs

- Full Name
- Email
- Password
- Confirm Password

### Sign-Up Methods

- Email & Password
- Google Authentication

### Firebase Methods

- createUserWithEmailAndPassword()
- signInWithPopup()
- sendEmailVerification()

### Features

- Email Verification Popup
- Form Validation
- Password Strength Indicator

---

## Login

### Login Methods

- Email & Password
- Google Authentication

### Firebase Methods

- signInWithEmailAndPassword()
- signInWithPopup()

---

## Forgot Password

### Flow

- Enter Email
- Receive Reset Link
- Create New Password
- Confirm New Password

### Firebase Method

- sendPasswordResetEmail()

---

## Auth Guard

### Protected Routes

- /dashboard

### Features

- Email Verification Check
- Session Persistence
- Auto Redirect
- Protected Navigation

---

# 📊 Dashboard Flow

After successful authentication and email verification:

```txt
/auth → /dashboard
```

---

# 🧭 Dashboard Layout

## Sidebar Navigation

- Overview
- Transactions
- Budgets
- Recurring
- Analytics
- Reports
- Settings
- Logout

---

## Top Navigation

- Welcome Message
- Global Search
- Notifications
- User Profile Dropdown

---

## AI Financial Assistant

### Features

- Chat-Based Financial Assistant
- Spending Analysis
- Budget Recommendations
- Savings Suggestions
- Investment Insights
- Unusual Spending Detection
- Personalized Financial Tips
- Analytics Explanation
- Financial Predictions

---

# 📈 Dashboard Modules

---

# 1. Overview

## Financial Summary Cards

- Total Balance
- Monthly Income
- Monthly Expenses
- Monthly Savings
- Monthly Investments
- Net Worth
- Savings Rate
- Financial Health Score

---

## Charts

### Category Breakdown

- Pie Chart

### Finance Type Breakdown

- Bar Chart

---

## Recent Activity

- Recent Transactions
- Budget Alerts
- Upcoming Recurring Payments

---

# 2. Transactions

## Features

### Create Transaction

### Filters

- By Type
- By Category
- By Date

### Search

- Search Transactions

### Transaction History Table

| Date | Description | Category| Type | Amount | Actions(edit/delete) |

---

# 3. Budgets

## Features

### Budget Creation

Create Budget Per Category

### Budget Card

- Category Name
- Budget Amount
- Amount Spent
- Remaining Amount
- Progress Indicator

### Alerts

- Overspending Alert
- Budget Limit Warning

### Additional Features
- Recommended Budget Suggestions

---

# 4. Recurring Transactions

## Features

### Create upcoming Recurring Transaction

### Active Recurring Table
| Date | Description | Category | Type | Amount | Frequency

### Upcoming Recurring cards
| Date | Description | Category | Type | Amount | Frequency | action(pause/resume, delete) |

---

# 5. Analytics

## Filters

- From Date
- To Date

---

## Analytics Components

### Charts

- Category Breakdown (Pie Chart)
- Finance Type Breakdown (Bar Chart)
- Income vs Expense Comparison
- Savings Growth
- Investment Growth

### Tables

- Budget Analytics
- Expense Trends
- Income Trends

### Insights

- Spending Heatmap
- Top Spending Categories
- Cash Flow Analysis
- Unusual Spending Alerts
- Budget Warnings
- Financial Predictions

---

# 6. Reports

## Export Formats selection 
- PDF (.pdf)
- Excel (.xlsx)
- CSV (.csv)
## Download Report
## Download History

---

# 7. Settings

## Profile

- Update Name
- Update Email
- Upload Avatar

---

## Preferences

- Currency Selection
- Notification Preferences
- Theme Selection (Light/Dark Mode)

---

## Security

- Change Password
- Logout All Devices
- Delete Account

---

# 💳 Subscription Plans

---

# 🆓 Free Plan

### Limits

- 20 Transactions
- 8 Budgets
- 2 Supported Currencies
- 4 Recurring Transactions Per Month
- 90 Days Analytics History
- 1 Report Export Per Month
- 3 Financial Predictions Per Month

---

# ⭐ Pro Plan — ₦600/Month

### Limits

- 120 Transactions
- 20 Budgets
- 3 Supported Currencies
- 8 Recurring Transactions Per Month
- 366 Days Analytics History
- 4 Report Exports Per Month
- 8 Financial Predictions Per Month

---

# 👑 Premium Plan — ₦1,000/Month

### Limits

- Unlimited Transactions
- Unlimited Budgets
- 8 Supported Currencies
- Unlimited Recurring Transactions
- Unlimited Analytics History
- Unlimited Report Exports
- Unlimited Financial Predictions

---

# 📢 Notifications

## System Notifications

- Budget Alerts
- Overspending Alerts
- Upcoming Recurring Payments
- Subscription Expiry Alerts
- Report Generation Alerts

---

# 📊 Monitoring & Analytics

## Application Monitoring

- Firebase Analytics
- Error Tracking
- User Activity Tracking
- Performance Monitoring

---

# 🔒 Security Check

- Firebase Security Rules
- Protected Routes
- Email Verification
- Environment Variables Protection
- Input Sanitization
- Secure API Calls
- Session Persistence
- Logout From All Devices

---

# 🧪 Testing

## Unit Testing (Jest)

### Authentication

- Login
- Register
- Password Reset

### Validation

- Form Validation
- Zod Schemas

### Business Logic

- Budget Calculations
- Savings Calculations
- Financial Predictions

---

## Component Testing

- Dashboard Cards
- Charts
- Forms
- Tables

---

## Integration Testing

- Authentication Flow
- Transaction Creation
- Budget Creation
- Report Generation

---

# 🎯 Project Goal

FINTRA helps users understand their financial health, manage spending, track savings, monitor investments, create budgets, receive AI-driven insights, and make smarter financial decisions through a secure and scalable SaaS platform.
