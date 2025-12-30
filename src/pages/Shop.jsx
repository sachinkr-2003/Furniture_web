import React from 'react';

const Shop = () => {
  const products = [
    { id: 1, name: "Executive Chair", price: "₹4,200", image: "/assets/images/product-1.png" },
    { id: 2, name: "Ergonomic Office Chair", price: "₹6,500", image: "/assets/images/product-2.png" },
    { id: 3, name: "Comfort Desk Chair", price: "₹3,600", image: "/assets/images/product-3.png" },
    { id: 4, name: "Executive Chair", price: "₹4,200", image: "/assets/images/product-1.png" },
    { id: 5, name: "Ergonomic Office Chair", price: "₹6,500", image: "/assets/images/product-2.png" },
    { id: 6, name: "Comfort Desk Chair", price: "₹3,600", image: "/assets/images/product-3.png" },
    { id: 7, name: "Executive Chair", price: "₹4,200", image: "/assets/images/product-1.png" },
    { id: 8, name: "Ergonomic Office Chair", price: "₹6,500", image: "/assets/images/product-2.png" }
  ];

  return (
    <>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="section-title text-center">Our Products</h2>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <div className="text-center">
                  <img src={product.image} className="img-fluid mb-3" alt={product.name} style={{maxWidth: '200px'}} />
                  <h3 className="h5">{product.name}</h3>
                  <strong className="text-primary">{product.price}</strong>
                  <div className="mt-3">
                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;