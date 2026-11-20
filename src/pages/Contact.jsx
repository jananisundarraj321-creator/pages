

function Contact() {

  const details = [
    "Email: example@gmail.com",
    "Phone: 9876543210",
    "Location: Chennai, Tamil Nadu"
  ];

  return (
    <div className="contact">

      <h1>Contact Us</h1>

      <p className="contact-intro">
        We'd love to hear from you!
      </p>

      <h2>Get In Touch</h2>

      <p>
        If you have any questions or suggestions,
        feel free to contact us.
      </p>

      <div className="contact-details">
        {details.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <h2>Send Us a Message</h2>

      <form className="contact-form">

        <input type="text" placeholder="Enter Your Name" />

        <input type="email" placeholder="Enter Your Email" />

        <textarea placeholder="Enter Your Message"></textarea>

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}

export default Contact;
