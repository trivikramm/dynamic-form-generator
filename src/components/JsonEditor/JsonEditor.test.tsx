import { render } from '@testing-library/react';
import { JsonEditor } from './JsonEditor';

describe('JsonEditor', () => {
  it('renders editor component', () => {
    render(
      <JsonEditor 
        value="{}" 
        onChange={() => {}} 
      />
    );
  });
});

export {};