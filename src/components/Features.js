import React from 'react';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="text-center mb-5">Why Learn C++?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="feature-card">
              <h3>🚀 Powerful & Fast</h3>
              <p>C++ is known for its performance and is widely used in game development, systems programming, and more.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-card">
              <h3>🧠 Build Strong Fundamentals</h3>
              <p>Learn core programming concepts like memory management, OOP, and templates.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-card">
              <h3>💻 Real-World Projects</h3>
              <p>Work on practical projects to apply your knowledge and build a portfolio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;