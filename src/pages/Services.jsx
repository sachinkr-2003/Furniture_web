import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "/assets/images/truck.svg",
      title: "Fast & Free Shipping",
      description: "Get your furniture delivered quickly and safely to your doorstep at no extra cost. We ensure timely delivery nationwide."
    },
    {
      icon: "/assets/images/bag.svg",
      title: "Easy to Shop",
      description: "Browse our extensive collection online with detailed product information and high-quality images for easy selection."
    },
    {
      icon: "/assets/images/support.svg",
      title: "24/7 Support",
      description: "Our dedicated customer service team is available round the clock to assist you with any queries or concerns."
    },
    {
      icon: "/assets/images/return.svg",
      title: "Hassle Free Returns",
      description: "Not satisfied with your purchase? Return it within 30 days with our simple and hassle-free return policy."
    }
  ];

  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="section-title text-center">Our Services</h2>
            </div>
          </div>
          <div className="row my-5">
            {services.map((service, index) => (
              <div key={index} className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="text-center">
                  <div className="mb-3">
                    <img src={service.icon} alt="Image" className="img-fluid" style={{maxWidth: '60px'}} />
                  </div>
                  <h3 className="h5">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;