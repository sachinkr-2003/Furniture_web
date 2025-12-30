import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "First Time Home Owner Ideas",
      image: "/assets/images/post-1.jpg",
      author: "Kristin Watson",
      date: "Dec 19, 2021"
    },
    {
      id: 2,
      title: "How To Keep Your Furniture Clean",
      image: "/assets/images/post-2.jpg",
      author: "Robert Fox",
      date: "Dec 15, 2021"
    },
    {
      id: 3,
      title: "Small Space Furniture Apartment Ideas",
      image: "/assets/images/post-3.jpg",
      author: "Kristin Watson",
      date: "Dec 12, 2021"
    }
  ];

  return (
    <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="#" className="more">View All Posts</a>
          </div>
        </div>

        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={post.image} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">{post.title}</a></h3>
                  <div className="meta">
                    <span>by <a href="#">{post.author}</a></span> 
                    <span>on <a href="#">{post.date}</a></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;