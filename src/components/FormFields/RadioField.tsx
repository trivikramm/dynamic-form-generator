import React from 'react';
import { FormField } from '../../types/schema';
import { UseFormRegister } from 'react-hook-form';

interface RadioFieldProps {
  field: FormField;
  register: UseFormRegister<any>;
  error?: any;
}

export const RadioField: React.FC<RadioFieldProps> = ({ field, register, error }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <div className="space-y-2">
        {field.options?.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${field.id}-${option.value}`}
              value={option.value}
              {...register(field.id, {
                required: field.required && 'This field is required'
              })}
              className="mr-2"
            />
            <label htmlFor={`${field.id}-${option.value}`} className="text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};