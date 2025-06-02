import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import EarthCanvas from "../canvas/Earth";
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
  managingDirectors: ["S. Abhinav", "Ramya Sivakumar"],
  executiveOfficer: "S. Sivakumar",
  officeAddress: {
    chennai: "No.35A, Gopathy Villa, Santhome High Road, Mylapore, Chennai - 600004",
    coimbatore: "SF No. 313 & 314, Member Venkatachalam Road, K.K.Pudur, Saibaba Colony, Coimbatore, Tamilnadu - 641038"
  },
  
  email: "avkalpavriksha@gmail.com",
  gstin: "33JBIPS9096E1ZZ"
};

const Contact = () => {
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
      className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-[#7b3f00] w-full xl:w-[69%] rounded-2xl p-10"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Professional Contact Information Section */}
        <div className="mt-8 mb-8 bg-[#a0522d] rounded-lg p-8">
          <h3 className="text-white text-xl font-bold mb-8"></h3>
          <div className="space-y-6">
            <p className="text-white text-lg flex items-center">
              <span className="text-[#f5deb3] font-medium mr-2">Managing Directors :</span>
              <span>
                {contactDetails.managingDirectors.join(", ")}
              </span>
            </p>
            <p className="text-white text-lg flex items-center">
              <span className="text-[#f5deb3] font-medium mr-2">Executive Officer :</span>
              <span>{contactDetails.executiveOfficer}</span>
            </p>
            <div className="text-white flex items-start">
              <span className="text-[#f5deb3] font-medium text-lg mr-2"></span>
              <div className="ml-2 mt-1 space-y-4">
                <div>
                  <span className="text-[#f5deb3] text-base font-medium mr-2">Chennai Branch :</span>
                  <span className="text-white">{contactDetails.officeAddress.chennai}</span>
                </div>
                <div>
                  <span className="text-[#f5deb3] text-base font-medium mr-2">Coimbatore Branch :</span>
                  <span className="text-white">{contactDetails.officeAddress.coimbatore}</span>
                </div>
              </div>
            </div>
            <p className="text-white text-lg flex items-center">
              <span className="text-[#f5deb3] font-medium mr-2"></span>
              <span>{contactDetails.email}</span>
            </p>
            <p className="text-white text-lg flex items-center">
              <span className="text-[#f5deb3] font-medium mr-2">GSTIN :</span>
              <span>{contactDetails.gstin}</span>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex items-center justify-center h-[300px] md:h-[400px] xl:h-[450px] xl:w-[32%] rounded-2xl"
      >
        <div className="w-full flex items-center justify-center">
          <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px]">
            <EarthCanvas scale={0.7} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");