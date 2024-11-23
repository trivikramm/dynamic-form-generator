import React, { useState } from 'react';
import { JsonEditor } from './components/JsonEditor/JsonEditor';
import { FormPreview } from './components/FormPreview/FormPreview';
import { FormSchema } from './types/schema';
import { validateSchema } from './utils/jsonValidator';

const defaultSchema: FormSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "you@example.com",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address"
      }
    },
    {
      id: "companySize",
      type: "select",
      label: "Company Size",
      required: true,
      options: [
        { value: "1-50", label: "1-50 employees" },
        { value: "51-200", label: "51-200 employees" },
        { value: "201-1000", label: "201-1000 employees" },
        { value: "1000+", label: "1000+ employees" }
      ]
    },
    {
      id: "industry",
      type: "radio",
      label: "Industry",
      required: true,
      options: [
        { value: "tech", label: "Technology" },
        { value: "healthcare", label: "Healthcare" },
        { value: "finance", label: "Finance" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" }
      ]
    },
    {
      id: "timeline",
      type: "select",
      label: "Project Timeline",
      required: true,
      options: [
        { value: "immediate", label: "Immediate (within 1 month)" },
        { value: "short", label: "Short-term (1-3 months)" },
        { value: "medium", label: "Medium-term (3-6 months)" },
        { value: "long", label: "Long-term (6+ months)" }
      ]
    },
    {
      id: "comments",
      type: "textarea",
      label: "Additional Comments",
      required: false,
      placeholder: "Any other details you'd like to share..."
    }
  ]
};

export const App: React.FC = () => {
  const [jsonValue, setJsonValue] = useState(JSON.stringify(defaultSchema, null, 2));
  const [schema, setSchema] = useState<FormSchema>(defaultSchema);
  const [error, setError] = useState<string>();

  const handleJsonChange = (value: string) => {
    setJsonValue(value);
    try {
      const parsed = JSON.parse(value);
      if (validateSchema(parsed)) {
        setSchema(parsed);
        setError(undefined);
      } else {
        setError('Invalid form schema structure');
      }
    } catch (e) {
      setError('Invalid JSON syntax');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Form Schema Editor</h2>
            <JsonEditor value={jsonValue} onChange={handleJsonChange} error={error} />
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <FormPreview schema={schema} />
          </div>
        </div>
      </div>
    </div>
  );
};