# Dynamic Form Generator

## Overview

Dynamic Form Generator is a React application that allows users to generate dynamic forms based on a JSON schema. The application features a split-screen interface with a JSON editor on the left and a real-time form preview on the right. The form supports various field types, validation, and responsive design.

## Features

- **Real-time JSON Editor**: Edit JSON schema with syntax highlighting and validation.
- **Dynamic Form Preview**: See the form update in real-time as you edit the JSON schema.
- **Field Types Supported**: Text, Email, Select, Radio, Textarea.
- **Validation**: Proper validation messages for required fields and custom validation rules.
- **Responsive Design**: Mobile-friendly layout that stacks the editor and preview on smaller screens.
- **Form Submission**: Submit form data to `console.log()` and display a success message.

## Technologies Used

- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form**
- **Monaco Editor**
- **Jest** for unit testing
- **Playwright** for E2E testing

## Folder Structure
```
dynamic-form-generator/
├── src/
│   ├── components/
│   │   ├── FormFields/
│   │   │   ├── EmailField.tsx
│   │   │   ├── RadioField.tsx
│   │   │   ├── SelectField.tsx
│   │   │   ├── TextareaField.tsx
│   │   │   ├── TextField.tsx
│   │   │   └── index.ts
│   │   ├── FormPreview/
│   │   │   └── FormPreview.tsx
│   │   └── JsonEditor/
│   │       └── JsonEditor.tsx
│   ├── types/
│   │   └── schema.ts
│   ├── utils/
│   │   ├── formGenerator.ts
│   │   └── jsonValidator.ts
│   ├── tests/
│   │   ├── e2e/
│   │   │   └── form.spec.ts
│   │   └── setup/
│   │       └── setupTests.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── jest.config.js
├── playwright.config.ts
├── .env
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dynamic-form-generator.git
   cd dynamic-form-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Local Development Guide

1. **Running the Application**
   ```bash
   npm start
   ```
   Open http://localhost:3000 in your browser

2. **Running Tests**

   - **Unit Tests:**
     ```bash
     npm test
     ```

   - **End-to-End Tests:**
     ```bash
     npm run test:e2e
     ```

### Deployment

Deploy the application using Vercel or Netlify. Follow their respective documentation for deployment instructions.

### Example JSON Schema
```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    },
    {
      "id": "industry",
      "type": "radio",
      "label": "Industry",
      "required": true,
      "options": [
        { "value": "tech", "label": "Technology" },
        { "value": "healthcare", "label": "Healthcare" },
        { "value": "finance", "label": "Finance" },
        { "value": "retail", "label": "Retail" },
        { "value": "other", "label": "Other" }
      ]
    },
    {
      "id": "timeline",
      "type": "select",
      "label": "Project Timeline",
      "required": true,
      "options": [
        { "value": "immediate", "label": "Immediate (within 1 month)" },
        { "value": "short", "label": "Short-term (1-3 months)" },
        { "value": "medium", "label": "Medium-term (3-6 months)" },
        { "value": "long", "label": "Long-term (6+ months)" }
      ]
    },
    {
      "id": "comments",
      "type": "textarea",
      "label": "Additional Comments",
      "required": false,
      "placeholder": "Any other details you'd like to share..."
    }
  ]
}
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

MIT License

### Created By
- **Name:** TrivikramMajjari
- **Created:** 2024-11-23
- **GitHub:** [TrivikramMajjari](https://github.com/TrivikramMajjari)

---

This version of the README has proper Markdown formatting with working bold text (using `**text**`), proper code blocks (using triple backticks), and consistent heading levels. The folder structure is also properly formatted as a code block for better readability.
