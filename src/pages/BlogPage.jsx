import React from 'react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "First Time Home Owner Ideas",
      image: "/assets/images/post-1.jpg",
      author: "Kristin Watson",
      date: "Dec 19, 2021",
      excerpt: "Essential furniture tips for new homeowners. Learn how to choose the right pieces that combine style, functionality, and budget-friendly options."
    },
    {
      id: 2,
      title: "How To Keep Your Furniture Clean",
      image: "/assets/images/post-2.jpg",
      author: "Robert Fox",
      date: "Dec 15, 2021",
      excerpt: "Professional cleaning tips to maintain your furniture's beauty and extend its lifespan. From leather care to fabric protection methods."
    },
    {
      id: 3,
      title: "Small Space Furniture Apartment Ideas",
      image: "/assets/images/post-3.jpg",
      author: "Kristin Watson",
      date: "Dec 12, 2021",
      excerpt: "Maximize your small apartment with smart furniture choices. Space-saving solutions and multi-functional pieces for modern living."
    },
    {
      id: 4,
      title: "Interior Design Tips for Modern Homes",
      image: "/assets/images/post-1.jpg",
      author: "John Doe",
      date: "Dec 10, 2021",
      excerpt: "Transform your home with contemporary design principles. Color schemes, furniture placement, and lighting ideas for modern interiors."
    },
    {
      id: 5,
      title: "Choosing the Right Furniture Colors",
      image: "/assets/images/post-2.jpg",
      author: "Jane Smith",
      date: "Dec 8, 2021",
      excerpt: "Master the art of color coordination in furniture selection. How to match pieces with your existing decor and create harmony."
    },
    {
      id: 6,
      title: "Sustainable Furniture Options",
      image: "/assets/images/post-3.jpg",
      author: "Mike Johnson",
      date: "Dec 5, 2021",
      excerpt: "Eco-friendly furniture choices for conscious consumers. Sustainable materials, ethical manufacturing, and environmental impact considerations."
    }
  ];

  return (
    <>
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="section-title text-center">Our Blog</h2>
            </div>
          </div>
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="text-center">
                  <img src={post.image} alt="Image" className="img-fluid mb-3" style={{maxWidth: '100%', height: '200px', objectFit: 'cover'}} />
                  <h3 className="h5">{post.title}</h3>
                  <div className="text-muted mb-2">
                    <small>by {post.author} on {post.date}</small>
                  </div>
                  <p className="text-muted">{post.excerpt}</p>
                  <a href="#" className="btn btn-primary btn-sm">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;