# 🌐 msgconsumer-ui — Angular Frontend for MQ Consumer

This Angular project is the frontend interface for the backend application [`msgconsumer`](https://github.com/softpartner2023/msgconsumer). It allows users to display JMS messages received via IBM MQ and manage associated partners. The UI is built with Angular 17+ and Angular Material for a modern and responsive experience.

---

## ✅ Main Features

- 📩 Display of received JMS messages
- 🔍 View message details in a modal pop-up
- 👤 Partner management (add, delete, list)
- 🔗 Message-to-partner association via alias
- 🎨 Modern UI with Angular Material

---

## 🚀 Getting Started

### 1. Requirements

- Node.js (version 18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
- Running backend (`msgconsumer`) at `http://localhost:8080`

### 2. Clone the repository

```bash
git clone https://github.com/softpartner2023/msgconsumer-ui.git
cd msgconsumer-ui

### 3. Install dependencies
npm install

### 4. Start the development server
ng serve

### 5. Testing the Application
Send a JMS message using a producer (see backend README)
Add a new partner using the UI (+ Add Partner)
Check message-partner association by alias
Delete a partner from the list

### 6. Potential Improvements
Add unit tests for components
Add pagination and filtering for messages
Improve form validations with error messages

