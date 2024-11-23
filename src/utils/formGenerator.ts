import { FormSchema } from '../types/schema';

export const generateDefaultSchema = (): FormSchema => ({
  formTitle: "New Form",
  formDescription: "Please fill out this form",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name"
    }
  ]
});