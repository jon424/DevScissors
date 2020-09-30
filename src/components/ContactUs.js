import React from 'react';
import emailjs from 'emailjs';
// import { Modal } from 'semantic-ui';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_00cptw4', e.target, 'user_4SDhL8sGHeP6cYzUfXJ7p')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
<div>
    <div class="ui basic modal">
  <div class="ui icon header">
    <i class="archive icon"></i>
    Archive Old Messages
  </div>
  <div class="content">
    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
  </div>
  <div class="actions">
    <div class="ui red basic cancel inverted button">
      <i class="remove icon"></i>
      No
    </div>
    <div class="ui green ok inverted button">
      <i class="checkmark icon"></i>
      Yes
    </div>
  </div>
</div>



    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}