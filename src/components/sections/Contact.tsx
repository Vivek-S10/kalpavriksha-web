import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

// Professional Contact Details
const contactDetails = {
  managingDirector: "Abhinav S",
  executiveOfficer: "S. Sivakumar",
  officeAddress: {
    chennai: "No. 12, Anna Salai, Mount Road, Chennai, Tamil Nadu - 600002",
    coimbatore: "SF No. 313 & 314, Member Venkatachalam Road, K.K.Pudur, Saibaba Colony, Coimbatore, Tamilnadu - 641038"
  },
  phoneNumber: "+91 98430 44144",
  email: "avkalpavriksha@gmail.com",
  gstin: "33JBIPS9096E1ZZ"
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-[#7b3f00] flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Professional Contact Information Section */}
        <div className="mt-8 mb-8 bg-[#a0522d] rounded-lg p-8">
          <h3 className="text-white text-xl font-bold mb-8">Contact Information</h3>
          
          <div className="space-y-6">
            <p className="text-white text-lg">
              <span className="text-secondary font-medium">Managing Director:</span> {contactDetails.managingDirector}
            </p>
            <p className="text-white text-lg">
              <span className="text-secondary font-medium">Executive Officer:</span> {contactDetails.executiveOfficer}
            </p>
            <div className="text-white">
              <span className="text-secondary font-medium text-lg">Office Address:</span>
              <div className="ml-6 mt-4 space-y-4">
                <div>
                  <span className="text-secondary text-base font-medium">Chennai Branch:</span>
                  <p className="text-white ml-2 mt-1">{contactDetails.officeAddress.chennai}</p>
                </div>
                <div>
                  <span className="text-secondary text-base font-medium">Coimbatore Branch:</span>
                  <p className="text-white ml-2 mt-1">{contactDetails.officeAddress.coimbatore}</p>
                </div>
              </div>
            </div>
            <p className="text-white text-lg">
              <span className="text-secondary font-medium">Phone Number:</span> {contactDetails.phoneNumber}
            </p>
            <p className="text-white text-lg">
              <span className="text-secondary font-medium">Email:</span> {contactDetails.email}
            </p>
            <p className="text-white text-lg">
              <span className="text-secondary font-medium">GSTIN:</span> {contactDetails.gstin}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1 rounded-2xl flex items-center"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");