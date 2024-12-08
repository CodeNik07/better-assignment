# React Authentication Forms Assignment

This repository contains the code for a React application with **Sign Up** and **Login** forms, built as part of the assessment for Better Software. The project uses **Formik** for form handling and validation, follows **TypeScript** conventions, and adheres to clean coding principles and good UX practices.

---

## 1. How to Run the Project

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn as a package manager

### Steps to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/CodeNik07/better-assignment.git
   cd better-assignment
2. **Install Dependencies:**:
   ```bash
   npm install
3. **Start the Development Server:**:
   ```bash
   npm run dev

## 2.Design Choices Made
### Form Handling
- Formik: Used for managing form state and validation because it simplifies handling complex forms with minimal boilerplate code.
- Yup: Utilized for schema-based form validation to ensure robust and reusable validation rules.

### User Experience (UX)
- Password Strength Indicator: Provides a visual indicator of password security in the Sign Up form to enhance user confidence and guide better password creation.
- Success Messages: Clear and simple success messages (e.g., "Sign Up Successful") to confirm actions to users.
- Toggle Between Forms: A seamless toggle between Sign Up and Login forms for better navigation.

### Accessibility
- Proper use of semantic HTML elements (<form>, <label>, <button>).
- ARIA roles and labels are added to improve screen reader compatibility.
- Forms and toggles are keyboard-navigable.

## 3. Assumptions and Limitations
### Assumptions
- Users will have JavaScript enabled in their browsers.
- Local storage is used for the "Remember Me" functionality, assuming the browser supports it.
- Password strength levels are determined by simple rules and may not reflect the complexity required for production-grade applications.

### Limitations
- No backend integration: All submissions are simulated with a delay for demonstration purposes.
- Limited password strength validation: The password strength indicator is for demonstration and doesn't include advanced checks like common password lists or entropy calculations.
- Accessibility could be further enhanced by adding live regions for real-time feedback on user actions.
