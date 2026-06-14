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
* Firebase Security Rules (authorization)
* OpenAI API (Financial Insights Engine)
* Jest (testing)

---

# 🏠 App Structure

```
/app-|/auth
     |/dashboard
     |page.jsx(landing page)
```
---

# App Workflow 
## 🌐 Landing Page Flow
* Hero Section(including header- logo, features, pricing, FAQ, Login, Start for free)
* Features Overview
* Pricing Plans
* FAQ
* CTA
* Footer

---
## 🔐 Authentication Flow

### 1. Register

Users create an account with:

* Full Name/Email/Password/Confirm password
*Google
* verify email popup

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
* signInWithPopup(Google)

---

## 3. Forgot Password

* Email input
* Reset link sent via Firebase
* change password
* confirm change password 
### Firebase Method

* `sendPasswordResetEmail`

---

## 4. Auth Guard

* Protect `/dashboard and email verification`
* Redirect unauthenticated users to `/auth`
* Persist session on refresh

---



# 📊 Dashboard Flow

After login or email verification → `/dashboard`

---

## 🧭 Dashboard Layout

### Sidebar Navigation

* Overview
* Transactions
* Budgets
* Recurring
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

### Displays finance type

* Total Balance - 0% from last month
* Monthly Income - 0% from last month
* Monthly Expenses(bills & wants) - 70%
* Monthly Savings - 20% of Income
* Monthly Investments - 10% of Income

### Charts

* Category breakdown (pie chart)
* Finance type breakdown(bar chart)

### Recent Activity

* Latest transactions
* Budget alerts

---

## 2. Transactions

### Features

* Add Transactions
* Filter by type
* Filter by date
* Filter by category
* Transactions history(Date, Description, category, type, Amount, Actions(edit, delete, rename))

---

## 3. Budgets

### Features

* Create budget per category
* Category items (category name, budget amount, spent amount(automatic), remaining amount (automatic), progress indicators).
* Over spending budget alert

---

## 4. Recurring 

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
### features
* filter by date (from  to)
* category breakdown (pie chart)
* type breakdown (bar chart)
* expenses trends (table)
* income trends (table)
* savings growth
* Investment growth
* budget and unusual alerts
* Predictions (Pro/Premium)

---

## 6. Reports

### Features
* Filter monthly, Quarterly or yearly.
*Monthly reports (free), Quarterly reports(pro), Yearly reports (Premium)*
* export format drop-down (pdf, excel, cvs)
* Export button
*Free: 1 export/month, Pro: 4 exports/month, Premium: Unlimited*

---

## 7. Settings

### Profile

* Update name
* Update email
* Upload avatar

### Preferences

* Currency selection
* Notifications

### Security

* Change password
* Logout all devices

---

# 💳 Subscription Plans

---

## 🆓 Free Plan
* Transactions
* Budgets
* 4 currencies
* monthly analytics
* 1 report export/month
* unlimited financial insights

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
