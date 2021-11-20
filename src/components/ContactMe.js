import React from "react";

const ContactMe = () => {
  const sendToWhatsapp = (event) => {
    event.preventDefault();
    window.open("https://wa.me/212699229443");
  };
  return (
    <section className="contact" id="contactMe">
      <h2>
        Contact <span>Me</span>
      </h2>
      <form
        className="contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="text" placeholder="your name" name="name" id="name" />
        <input type="email" placeholder="your email" name="email" id="email" />
        <textarea
          id="mssg"
          name="message"
          id="mssg"
          cols="30"
          rows="10"
          placeholder="your message"
        ></textarea>
        <div className="flex jc-sb">
          <button type="submit" className="btn">
            Send to email
          </button>
          <button
            className="btn"
            id="sendToWhatsapp"
            onClick={(e) => sendToWhatsapp(e)}
          >
            message me on whatsapp
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
