import { render, screen } from '@testing-library/react';
import { FormPreview } from './FormPreview';

const mockSchema = {
  formTitle: "Test Form",
  formDescription: "Test Description",
  fields: []
};

describe('FormPreview', () => {
  it('renders form title and description', () => {
    render(<FormPreview schema={mockSchema} />);
    expect(screen.getByText('Test Form')).toBeInTheDocument();
  });
});

export {};