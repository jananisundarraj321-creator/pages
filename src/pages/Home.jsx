
function Home() {

  const features = [
    "Easy Learning",
    "New Technologies",
    "Skill Development"
  ];

  return (
    <div className="home">

      <h1>Welcome to My Website</h1>

      <p className="intro">
        Learn, Explore and Grow with Us!
      </p>

      <h2>About Our Website</h2>

      <p>
        This website is created to help students
        learn new things, improve their skills
        and explore different technologies.
      </p>

      <h2>Our Features</h2>

      <div className="features">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item}</h3>
            <p>Explore and improve your knowledge.</p>
          </div>
        ))}
      </div>

      <h2>Start Your Learning Journey Today!</h2>

      <p>Thank you for visiting our website.</p>

    </div>
  );
}

export default Home;
