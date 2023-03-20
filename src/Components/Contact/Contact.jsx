import React from "react";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-3 contact-left">
                <div className="contact-left-content">
                  <div className="contact-left-item  mb-5">
                    <div className="icon">
                      <img src="./images/Icon/location.svg" alt="icon" />
                    </div>
                    <h4>Address</h4>
                    <span>Address line 1</span>
                    <span>Address line 2</span>
                  </div>
                  <div className="contact-left-item mb-5">
                    <div className="icon">
                      <img src="./images/Icon/Phone.svg" alt="icon" />
                    </div>
                    <h4>Address</h4>
                    <span>Address line 1</span>
                    <span>Address line 2</span>
                  </div>
                  <div className="contact-left-item">
                    <div className="icon">
                      <img src="./images/Icon/Address.svg" alt="icon" />
                    </div>
                    <h4>Address</h4>
                    <span>Address line 1</span>
                    <span>Address line 2</span>
                  </div>
                </div>
              </div>
              <div className="col-8 contact-right">
                <div className="contact-right-content">
                  <h3>Send us a message</h3>
                  <p>
                    Get in touch with regarding any questions. Based on the type of your
                    <br /> inquiry a support staff will reach out to you.{" "}
                  </p>

                  <form action="" className="contact-list">
                    <div className="col w-100 mb-4">
                      <input type="name" className="form-control" placeholder="Enter your name" id="inputName" />
                    </div>
                    <div className="col w-100 mb-4">
                      <input type="email" className="form-control" placeholder="Enter your email" id="inputEmail" />
                    </div>
                    <div className="col w-100 mb-4">
                      <textarea
                        className="form-control"
                        placeholder="Enter your message"
                        id="floatingTextarea2"
                        rows="5"
                      />
                    </div>
                    <div className="contact-btn">
                      <button className="btn-full smc-btn primary">Send Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
