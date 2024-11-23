export interface FormOption {
    value: string;
    label: string;
  }
  
  export interface ValidationRule {
    pattern: string;
    message: string;
  }
  
  export interface FormField {
    id: string;
    type: 'text' | 'email' | 'select' | 'radio' | 'textarea';
    label: string;
    required: boolean;
    placeholder?: string;
    validation?: ValidationRule;
    options?: FormOption[];
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: FormField[];
  }