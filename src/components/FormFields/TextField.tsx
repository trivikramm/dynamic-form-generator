import React from 'react';
import { FormField } from '../../types/schema';
import { UseFormRegister } from 'react-hook-form';
interface TextFieldProps {
  field: FormField;
  register: UseFormRegister<any>;
  error?: any;
}

export const TextField: React.FC<TextFieldProps> = ({ field, register, error }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={field.id}
        {...register(field.id, {
          required: field.required && 'This field is required'
        })}
        placeholder={field.placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};