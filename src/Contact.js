import React from "react";
import "./styles/Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="ContactBanner">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/06/07/34/iphone-2589909__340.jpg"
          alt=""
        />
      </div>
      <div className="contact-address">
        <h1>Contact us</h1>
        <p>The Clapp App DMCC</p>
        <p>Warehouse eighteen, Al Serkal Avenue</p>
        <p>Dubai, United Arab Emirates</p>
        <p>Email: info@theclappapp.com</p>
        <p>Phone: +971 4 396 3437</p>
      </div>
      <div className="message">
        <h1>Drop us a Message</h1>
      </div>
      <div className="form">
        <div className="form-Name">
          <label>
            FullName <span>*</span>
          </label>
          <br />
          <input type="text" />
        </div>
        <div className="form-Phone">
          <label>
            Phone<span>*</span>
          </label>
          <br />
          <input type="number" />
        </div>
      </div>
      <div className="form">
        <div className="form-email">
          <label>
            Email<span>*</span>
          </label>
          <br />
          <input type="email" />
        </div>
        <div className="form-subject">
          <label>
            Subject<span></span>
          </label>
          <br />
          <input type="text" />
        </div>
      </div>
      <div className="typo">
        <label className="typo-label" htmlFor="leave us a message">
          Leave us a message
        </label>
        <input className="typo-input" type="text" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
