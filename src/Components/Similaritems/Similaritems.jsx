import React from 'react';


export default function Similaritems() {


  const similarProducts = [
    { id: 1, name: 'Comfortable Soft Chair', price: '$40.00', imageUrl: 'comfortable_soft_chair.jpg' },
    { id: 2, name: 'Comfortable Soft Chair', price: '$40.00', imageUrl: 'comfortable_soft_chair2.jpg' },
    { id: 3, name: 'New Soft Chair', price: '$20.00', imageUrl: 'new_soft_chair.jpg' },
    { id: 4, name: 'Modern Soft Chair', price: '$40.00', imageUrl: 'modern_soft_chair.jpg' },
  ];
  

  return <>
  <section className="similar-items">
      <h2>Similar Items</h2>
      <div className="products">
        {similarProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  </>
}
