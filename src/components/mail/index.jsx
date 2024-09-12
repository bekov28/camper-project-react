import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../tabs/style";
import { SendBtn, SendContainer } from "../tabs/style";

export const EmailComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mrbbnj9", "template_ugplk9l", form.current, {
        publicKey: "NaLzH2NMYiLPH7I-X",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your name" />
      <input type="email" name="user_email" placeholder="Your email" />
      <textarea name="message" placeholder="Your question" />
      <input type="submit" value="Send question" className="SendBtn" />
    </form>
  );
};
