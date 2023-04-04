import { render } from '@testing-library/react';

import ProductApp from './product-app';

describe('ProductApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductApp />);
    expect(baseElement).toBeTruthy();
  });
});
