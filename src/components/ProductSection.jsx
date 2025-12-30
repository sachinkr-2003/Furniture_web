import React from 'react';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Nordic Chair",
      price: "$50.00",
      image: "/assets/images/product-1.png"
    },
    {
      id: 2,
      name: "Kruzo Aero Chair",
      price: "$78.00",
      image: "/assets/images/product-2.png"
    },
    {
      id: 3,
      name: "Ergonomic Chair",
      price: "$43.00",
      image: "/assets/images/product-3.png"
    }
  ];

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">Every piece in our collection is handpicked for quality and durability. We use premium materials and expert craftsmanship to create furniture that lasts for generations.</p>
            <p><a href="/shop" className="btn">Explore</a></p>
          </div>

          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/cart">
                <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                <h3 className="product-title">{product.name}</h3>
                <strong className="product-price">{product.price}</strong>
                <span className="icon-cross">
                  <img src="/assets/images/cross.svg" className="img-fluid" alt="Add to cart" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;