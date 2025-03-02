import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type Props = {};

const ContactMe = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio",
        "template_0xdiby9",
        form.current,
        "LJ2tmRAE4H8BfsKr4"
      )
      .then(
        (result) => {
          form.current;
          toast.success(
            "Thank you for contacting me! I will get back to you soon 👋"
          );
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  };

  const nameInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const subjectInputRef: any = useRef();
  const messageInputRef: any = useRef();
  const focusInput = (inputRef: any) => {
    inputRef.current.focus();
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-28 ">
        <h4 className="text-2xl md:text-4xl font-semibold text-center cursor-default">
          I got just what you need.{" "}
          <span className="text-[#F7AB0A] cursor-default">Lets Talk</span>
        </h4>

        <div className="space-y-3 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">0335286360</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Thủ Đức, Hồ Chí Minh</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">tranhieuglpk@gmail.com</p>
          </div>
        </div>

        {/* <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col  space-y-2 w-fit  mx-auto "
        >
          <motion.div
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex space-x-1 sm:space-x-2 sm:justify-between  "
          >
            <input
              placeholder="Name"
              className="contactInput "
              type="text"
              style={{ width: "50%" }}
              name="name"
              required
              ref={nameInputRef}
              onClick={() => focusInput(nameInputRef)}
             
            />
            <input
              placeholder="Email"
              className="contactInput "
              type="email"
              style={{ width: "50%" }}
              name="email"
              required
              ref={emailInputRef}
              onClick={() => focusInput(emailInputRef)}
            />
          </motion.div>
          <motion.input
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            required
            ref={subjectInputRef}
            onClick={() => focusInput(subjectInputRef)}
          />
          <motion.textarea
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            placeholder="Message"
            className="contactInput"
            name="message"
            required
            ref={messageInputRef}
            onClick={() => focusInput(messageInputRef)}
          />
          <motion.button
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold transition duration-200  ease-in-out hover:drop-shadow-[0_0px_4px_#F7AB0A]"
          >
            Submit
          </motion.button>
        </form> */}
      </div>
    </div>
  );
};

export default ContactMe;
