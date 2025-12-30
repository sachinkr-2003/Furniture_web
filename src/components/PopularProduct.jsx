import React from 'react';

const PopularProduct = () => {
  const products = [
    {
      id: 1,
      name: "Nordic Chair",
      description: "Elegant Scandinavian design meets modern comfort. Perfect for contemporary living spaces with its clean lines and premium materials.",
      image: "/assets/images/product-1.png"
    },
    {
      id: 2,
      name: "Kruzo Aero Chair",
      description: "Ergonomic excellence with breathable mesh design. Ideal for office spaces and home workstations requiring long-term comfort.",
      image: "/assets/images/product-2.png"
    },
    {
      id: 3,
      name: "Ergonomic Chair",
      description: "Advanced lumbar support with adjustable features. Designed for professionals who prioritize health and productivity.",
      image: "/assets/images/product-3.png"
    }
  ];

  return (
    <div className="popular-product">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product.image} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;