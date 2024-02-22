"use client";
import React, { useState, useEffect } from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import MotionEffect from "../motion/MotionEffect";
import axios from "axios";

const ContactSection = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    massage: "",
  };

  const [contactInfo, setContactInfo] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(contactInfo));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(contactInfo);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.massage) {
      errors.massage = "Question is required!";
    }
    return errors;
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(
        "https://backend-bayshore.vercel.app/user/messages",
        postData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <SectionLayout bg="bg-black">
      <MotionEffect effect="fade-up" duration="2000">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col p-4 bg-[#FFFFFF]">
            <Image
              width={150}
              height={150}
              src={"/assets/contact/contact-icon.svg"}
              alt="about img"
              className="mx-auto lg:mt-32"
            />
            <h1 className="mb-4 text-4xl font-black tracking-normal text-center text-black">
              Contact Us for a appointment and get a consultation
            </h1>
          </div>
          <div className="flex flex-col bg-[#6B6B6B] col-span-1 lg:col-span-2 p-6 lg:p-16">
            <form className="w-full" onSubmit={handleSubmit}>
              <MotionEffect effect="fade-up" duration="2000">
                <div class="mb-6 w-full">
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="Your name"
                    required
                    name="name"
                    id="name"
                    value={contactInfo.name}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">{formErrors.name}</span>
                </div>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <div class="mb-6">
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="What's your email"
                    required
                    name="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">{formErrors.email}</span>
                </div>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <div class="mb-6">
                  <input
                    type="phone"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="What's your phone"
                    required
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">{formErrors.phone}</span>
                </div>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <div class="mb-6">
                  <textarea
                    rows={4}
                    id="massage"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5"
                    placeholder="Your question....."
                    required
                    name="massage"
                    value={contactInfo.massage}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">{formErrors.massage}</span>
                </div>
              </MotionEffect>

              <MotionEffect effect="fade-up" duration="2000">
                <button
                  type="submit"
                  class="text-white bg-[#F3AA4E] hover:bg-[#d28d38] focus:ring-4 focus:outline-none focus:ring-[#F3AA4E] font-medium rounded-full text-2xl w-full px-5 py-4 text-center"
                >
                  Send Message
                </button>
              </MotionEffect>
            </form>
          </div>
        </div>
      </MotionEffect>
    </SectionLayout>
  );
};

export default ContactSection;
