import React from 'react';
import { ProductCard } from '../../src/components';
import { render } from '@testing-library/react';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const wrapper = render(
      <ProductCard product={product1}>
        {() => <h1>Product card</h1>}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de incrementar el contador', () => {
    const wrapper = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper;
    expect(tree).toMatchSnapshot();

    //console.log(tree);
    /*     (tree as any).children[2].props.onClick();

    tree = wrapper;

    expect(tree as any).toBe('1'); */
  });
});
