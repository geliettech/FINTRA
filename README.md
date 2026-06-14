# PENDA - Finance Management App

A modern SaaS finance management application that helps users track income, expenses, savings, investments, and budgets with smart analytics, financial insights, and subscription-based features.

---

# 🚀 Tech Stack

* React (Frontend)
* Firebase Authentication /React-hook-form / zod / Sonner (Auth & validation)
* Firestore (Database)
* Firebase Storage (Avatar uploads)
* React Router (Navigation)
* Recharts / Chart.js (Data visualization)
* Context API / Zustand (State management)
* Firebase Security Rules (secure database)
* OpenAI API (Financial Insights Engine)
* Jest (testing)

---

# 🏠 App Structure

```
/landing
/auth
/dashboard
```
---

# 🔐 Authentication Flow

## 1. Register

Users create an account with:

* Full Name
* Email
* Password

### Features

* Email/password signup
* Google OAuth signup
* Email verification

### Firebase Methods

* `createUserWithEmailAndPassword`
* `signUpWithPopup (Google)`
* `sendEmailVerification`

---

## 2. Login

* Email/Password SignIn
* Google Sign-In

### Firebase Methods

* `signInWithEmailAndPassword`

---

## 3. Forgot Password

* Email input
* Reset link sent via Firebase

### Firebase Method

* `sendPasswordResetEmail`

---

## 4. Auth Guard

* Protect `/dashboard`
* Redirect unauthenticated users to `/auth`
* Persist session on refresh

---

# 🌐 Landing Page Flow

### Sections

* Hero Section
* Features Overview
* How it works
* Pricing Plans
* CTA (Get Started / Login)
* Footer

---

# 📊 Dashboard Flow

After login → `/dashboard`

---

## 🧭 Dashboard Layout

### Sidebar Navigation

* Overview
* Transactions
* Budgets
* Recurring *(Premium)*
* Analytics
* Reports
* Settings
* Logout

---

### Top Bar

* Welcome message 👋
* Search (transactions, budgets, categories)
* Notifications 🔔
* Profile dropdown (avatar + name)

---

# 📈 Dashboard Modules

---

## 1. Overview (Home Dashboard)

### Displays

* Total Balance
* Income
* Expenses
* Savings
* Investments

### Charts

* Income vs Expenses
* Category breakdown

### Recent Activity

* Latest transactions
* Budget alerts

---

## 2. Transactions

### Features

* Add / Edit / Delete transactions
* Filter by date
* Filter by category

### Categories

* Income
* Expenses (Needs)
* Bills
* Savings
* Investments

### Data Model

```ts
{
  id: string;
  userId: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: Timestamp;
  description?: string;
}
```

---

## 3. Budgets

### Features

* Create budget per category
* Track spending
* Progress indicators
* Overspending alerts

### Example

* Food budget: ₦30,000
* Spent: ₦20,000
* Remaining: ₦10,000

### Data Model

```ts
{
  id: string;
  userId: string;
  category: string;
  limit: number;
  spent: number;
  period: "weekly" | "monthly";
}
```

---

## 4. Recurring (Premium)

### Features

* Add recurring income/expense
* Frequency:

  * Daily
  * Weekly
  * Monthly
  * Yearly
* Pause / Edit / Delete

### Examples

* Salary (Monthly)
* Rent (Monthly)
* Netflix (Monthly)

---

## 5. Analytics

### Insights

* Category trends
* Monthly comparison
* Spending behavior patterns
* Predictions (Pro/Premium)

### Charts

* Expense breakdown
* Income trends
* Savings growth

---

## 6. Reports

### Features

* Monthly reports
* Quarterly reports
* Yearly reports (Premium)

### Export Limits

* Free: 1 export/month
* Pro: 4 exports/month
* Premium: Unlimited

### Formats

* PDF
* CSV
* Excel

---

## 7. Settings

### Profile

* Update name
* Update email
* Upload avatar

### Preferences

* Currency selection
* Theme (Light/Dark)
* Notifications

### Security

* Change password
* Logout all devices

---

# 💳 Subscription Plans

---

## 🆓 Free Plan

* Basic dashboard
* Transactions
* Budgets
* 4 currencies
* 1 report export/month
* Limited ai financial insights

---

## ⭐ Pro Plan

* Unlimited ai financial insights
* 8 currencies
* 4 report exports/month
* Category trends
* Spending predictions
* Monthly comparisons

---

## 👑 Premium Plan

* Everything in Pro
* Unlimited currencies
* Unlimited exports
* Recurring transactions
* Automation features
* Yearly analytics
* Advanced predictions

---



# ⚡ Performance & Engineering Improvements

* Pagination for transactions
* Lazy-loaded dashboard modules
* Memoization (useMemo, React.memo)
* Debounced search
* Skeleton loaders
* Empty states

---

# 🧪 Testing

*

Tools:

* Jest - React Testing Library

---
