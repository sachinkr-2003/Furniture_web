import React from 'react';

const WhyChooseUs = () => {
  const features = [
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
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>We are committed to providing exceptional furniture and outstanding customer service. Our focus on quality, convenience, and customer satisfaction sets us apart from the competition.</p>

            <div className="row my-5">
              {features.map((feature, index) => (
                <div key={index} className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={feature.icon} alt="Image" className="img-fluid" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img src="/assets/images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;