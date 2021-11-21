import React, { useState } from "react";

const ContactMe = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMssg, setClientMssg] = useState("");
  const [mssgSent, setMessageSent] = useState(false);

  const sendToWhatsapp = (event) => {
    event.preventDefault();
    window.open("https://wa.me/212699229443?text=" + clientMssg);
  };
  const write = (e) => {
    setClientMssg(e.target.value);
  };
  function sendMe(e) {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/achrafess1937@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: clientName,
        email: clientEmail,
        message: clientMssg,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessageSent(true);

          setTimeout(() => {
            setMessageSent(false);
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <section className="contact" id="contactMe">
      <h2>
        Contact <span>Me</span>
      </h2>
      <form className={`contactForm `}>
        <input
          type="text"
          placeholder="your name"
          name="name"
          id="name"
          onChange={(e) => setClientName(e.target.value)}
          className={mssgSent && "succefullySent"}
        />
        <input
          type="email"
          placeholder="your email"
          name="email"
          id="email"
          onChange={(e) => setClientEmail(e.target.value)}
          className={mssgSent && "succefullySent"}
        />
        <textarea
          id="mssg"
          name="message"
          id="mssg"
          cols="30"
          rows="10"
          placeholder="your message"
          value={clientMssg}
          onChange={(e) => setClientMssg(e.target.value)}
          className={mssgSent && "succefullySent"}
        ></textarea>
        <div className="flex jc-sb">
          <button type="submit" className="btn" onClick={(e) => sendMe(e)}>
            {mssgSent
              ? "your message was sent succesfuly"
              : "send the mssg to Email"}
          </button>
          <button
            className="btn"
            id="sendToWhatsapp"
            onClick={(e) => sendToWhatsapp(e)}
          >
            send the mssg to whatsapp instead
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
