import React from 'react';
import { ProductCard, ProductImage } from '../../src/components';
import { render } from '@testing-library/react';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la imagen ', () => {
    const wrapper = render(<ProductImage img="./coffee-mug.png" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = render(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
