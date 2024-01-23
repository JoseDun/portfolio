import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import classes from "../../styles/form.module.css";

const Form = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_API
      )
      .then(
        (result) => {
          toast.success("Message Sent", { className: "bg-transparent" });
          setIsDisabled(true);
        },
        (error) => {
          toast.error(`${error.text} ...Error`, {
            className: "bg-transparent",
          });
        }
      );
    form.current.reset();
  };
  setTimeout(function () {
    if (isDisabled) {
      setIsDisabled(false);
    }
  }, 2000);

  return (
    <form className={`${classes.form}`} ref={form} onSubmit={sendEmail}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required name="user_name" />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="You Email Address"
          required
          name="user_email"
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          required
          name="message"
        />
      </div>

      <button className="primary__btn" disabled={isDisabled}>
        Send
      </button>
    </form>
  );
};

export default Form;
