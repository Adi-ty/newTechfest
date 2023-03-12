import React from "react";
import "../../styles/contact.css";

function Page() {
  return (
    <>
      <div className="contact_us_6">
        <div className="responsive-container-block container">
          <form
            action="https://formspree.io/f/xbjeybwb"
            method="POST"
            className="form-box"
          >
            <div className="container-block form-wrapper">
              <div className="mob-text">
                <p className="text-blk contactus-head">Get in Touch</p>
                <p className="text-blk contactus-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  diam lectus sapien.
                </p>
              </div>
              <div className="responsive-container-block" id="i2cbk">
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i10mt-3"
                >
                  <p className="text-blk input-title">NAME</p>
                  <input
                    className="input"
                    id="ijowk-3"
                    name="name"
                    placeholder="Please enter first name"
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="ip1yp"
                >
                  <p className="text-blk input-title">EMAIL</p>
                  <input
                    className="input"
                    id="ipmgh-3"
                    name="email"
                    placeholder="Please enter email"
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="ih9wi"
                >
                  <p className="text-blk input-title">PHONE NUMBER</p>
                  <input
                    className="input"
                    id="imgis-3"
                    name="PhoneNumber"
                    placeholder="Please enter phone number"
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i634i-3"
                >
                  <p className="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND ?
                  </p>
                  <textarea
                    name="message"
                    className="textinput"
                    id="i5vyy-3"
                    placeholder="Please enter your message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                Submit
              </button>
            </div>
          </form>
          <div
            className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12"
            id="i772w"
          >
            <div className="map-part">
              <p
                className="text-blk map-contactus-head"
                id="w-c-s-fc_p-1-dm-id"
              >
                Reach us at
              </p>
              <p className="text-blk map-contactus-subhead">
                Guru Gobind Singh Indraprastha University - East Delhi Campus
                133, Patel St, Vishwas Nagar Extension, Vishwas Nagar, Shahdara,
                Delhi, 110032
              </p>
              <div className="social-media-links mob">
                <a
                  className="social-icon-link"
                  href="https://twitter.com/GGSIPU_EDC"
                  id="ix94i-2-2"
                >
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  />
                </a>
                <a
                  className="social-icon-link"
                  href="https://www.instagram.com/elysian.edc/"
                  id="itixd"
                >
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  />
                </a>
                <a
                  className="social-icon-link"
                  href="https://www.linkedin.com/in/ggsipuedc/"
                  id="izxvt"
                >
                  <img
                    className="link-img image-block"
                    src="https://www.freepnglogos.com/uploads/linkedin-social-media-logo-7.png"
                  />
                </a>
              </div>
              <div class="map-box">
                <iframe
                  style={{ filter: "invert(90%) hue-rotate(180deg)" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.828908855609!2d77.300448!3d28.664841100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2d97ff9653%3A0xa236359e084edd43!2sGuru%20Gobind%20Singh%20Indraprastha%20University-%20East%20Delhi%20Campus!5e0!3m2!1sen!2sin!4v1678177978121!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
