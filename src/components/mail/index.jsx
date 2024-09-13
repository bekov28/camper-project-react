import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../tabs/style";
import { SendBtn, SendContainer } from "../tabs/style";
import { Alert } from "@mui/material";
import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";

export const EmailComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);

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
          setOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorOpen(true);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
        />
        <textarea name="message" placeholder="Your question" required />
        <input type="submit" value="Send question" className="SendBtn" />
      </form>
      <Snackbar
        variant="soft"
        color="success"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setOpen(false)}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
      >
        Your message was sent successfully.
      </Snackbar>
      <Snackbar
        variant="solid"
        color="danger"
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setErrorOpen(false)}
            size="sm"
            variant="solid"
            color="danger"
          >
            Dismiss
          </Button>
        }
      >
        Your message wasnt sent. Please check again!
      </Snackbar>
    </>
  );
};
