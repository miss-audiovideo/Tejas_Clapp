import React from "react";
import "./styles/Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="ContactBanner">
        <img
          src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="contact-address">
        <h1>Contact us</h1>
        <p>The Influenzers App </p>
        <p></p>
        <p>Valletta, Malta</p>
        <p>Email: abc@abc.com</p>
        <p>Phone: +000 0 000 0000</p>
      </div>
    </div>
    <div class="col-sm">
   {/*  <div class="responsive-map"></div>*/}
    </div>
   
  </div>
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
