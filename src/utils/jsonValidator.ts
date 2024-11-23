import { FormSchema } from '../types/schema';

export const validateSchema = (schema: any): schema is FormSchema => {
  if (!schema.formTitle || typeof schema.formTitle !== 'string') return false;
  if (!schema.formDescription || typeof schema.formDescription !== 'string') return false;
  if (!Array.isArray(schema.fields)) return false;

  return schema.fields.every((field: any) => {
    if (!field.id || typeof field.id !== 'string') return false;
    if (!['text', 'email', 'select', 'radio', 'textarea'].includes(field.type)) return false;
    if (!field.label || typeof field.label !== 'string') return false;
    if (typeof field.required !== 'boolean') return false;

    if (['select', 'radio'].includes(field.type)) {
      if (!Array.isArray(field.options)) return false;
      return field.options.every((option: any) => 
        option.value && typeof option.value === 'string' &&
        option.label && typeof option.label === 'string'
      );
    }

    return true;
  });
};