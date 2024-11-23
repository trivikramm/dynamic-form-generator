import React from 'react';
import { FormField } from '../../types/schema';
import { UseFormRegister } from 'react-hook-form';

interface SelectFieldProps {
  field: FormField;
  register: UseFormRegister<any>;
  error?: any;
}

export const SelectField: React.FC<SelectFieldProps> = ({ field, register, error }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={field.id}
        {...register(field.id, {
          required: field.required && 'This field is required'
        })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an option</option>
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};