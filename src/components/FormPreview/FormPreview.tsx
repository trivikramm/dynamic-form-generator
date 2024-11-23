import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema } from '../../types/schema';
import { TextField, EmailField, SelectField, RadioField, TextareaField } from '../FormFields';

interface FormPreviewProps {
  schema: FormSchema;
}

export const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{schema.formTitle}</h1>
      <p className="text-gray-600 mb-6">{schema.formDescription}</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {schema.fields.map((field) => {
          const props = {
            key: field.id,
            field,
            register,
            error: errors[field.id]
          };

          switch (field.type) {
            case 'text':
              return <TextField {...props} />;
            case 'email':
              return <EmailField {...props} />;
            case 'select':
              return <SelectField {...props} />;
            case 'radio':
              return <RadioField {...props} />;
            case 'textarea':
              return <TextareaField {...props} />;
            default:
              return null;
          }
        })}
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};