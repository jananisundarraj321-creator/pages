

function About() {

  const details = [
    "Student Friendly Platform",
    "Easy Access to Information",
    "Learning New Technologies",
    "Developing Technical Skills"
  ];

  return (
    <div className="about">

      <h1>About Us</h1>

      <p className="about-intro">
        Welcome to Our Website!
      </p>

      <h2>Who We Are</h2>

      <p>
        We are a student-focused platform designed
        to make learning simple and interesting.
        Our website helps students explore knowledge
        and develop new skills.
      </p>

      <h2>Our Mission</h2>

      <p>
        Our mission is to provide useful information
        and encourage students to achieve their goals.
      </p>

      <h2>Why Choose Us?</h2>

      <div className="about-list">
        {details.map((item, index) => (
          <div className="about-card" key={index}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>

      <h2>Our Vision</h2>

      <p>
        To create a better learning environment
        where every student can learn, grow and succeed.
      </p>

    </div>
  );
}

export default About;
