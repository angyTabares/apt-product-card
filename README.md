# DD-Product-Card

Este es un paquete de pruebas de despliegue de npm

### Angy Tabares

## Ejemplo

```
import { ProductCard,ProductImage,ProductTitle,ProductButtons} from 'do-product-card
```

````
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
      ```
````
