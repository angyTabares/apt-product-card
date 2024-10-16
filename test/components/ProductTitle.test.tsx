import React from 'react';
import { ProductTitle, ProductCard } from '../../src/components';
import { render } from '@testing-library/react';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado ', () => {
    const wrapper = render(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = render(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
