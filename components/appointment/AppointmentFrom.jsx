'use client';
import React, { useState, useEffect } from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Button } from '@nextui-org/react';
import axios from 'axios';
import CardMotion from '../motion/CardMotion';
import Image from 'next/image';

const AppointmentFrom = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const [loading, setLoading] = useState(false);
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

  const handlePostRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://backend-Trip Law.vercel.app/user/messages',
        contactInfo,
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handlePostRequest();
      setContactInfo(initialValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = 'Name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    }
    if (!values.message) {
      errors.message = 'Question is required!';
    }
    return errors;
  };

  return (
    <SectionLayout bg='bg-white'>
      <CardMotion
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.1,
          },
        }}
        initial={{
          opacity: 0,
          y: 100,
        }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-x-10 gap-x-0 items-center'>
          <div className='space-y-4'>
            <div className='flex justify-center'>
              <Image
                width={550}
                height={400}
                src={'/assets/appointment.jpg'}
                alt='appointment'
              />
            </div>
          </div>
          <div className='flex flex-col mt-12 md:mt-0 bg-slate-200 p-8'>
            <h2
              className={`text-stone-950 font-bold text-2xl mt-5 mb-1 text-left `}
            >
              HAVE QUESTIONS? GET IN TOUCH
            </h2>
            <p className='text-md text-stone-950 text-left mb-4'>
              Demo Digital Xperience Group (DXG), a pioneering division of WLJ
              Consulting, is a premier partner.
            </p>
            <form className='w-full' onSubmit={handleSubmit}>
              <div class='mb-6 w-full'>
                <input
                  type='text'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5'
                  placeholder='Your name'
                  required
                  name='name'
                  id='name'
                  value={contactInfo.name}
                  onChange={handleChange}
                />
                <span className='text-orange-600'>{formErrors.name}</span>
              </div>

              <div class='mb-6'>
                <input
                  type='email'
                  id='email'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5'
                  placeholder="What's your email"
                  required
                  name='email'
                  value={contactInfo.email}
                  onChange={handleChange}
                />
                <span className='text-orange-600'>{formErrors.email}</span>
              </div>

              <div class='mb-6'>
                <input
                  type='phone'
                  id='phone'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5'
                  placeholder="What's your phone"
                  required
                  name='phone'
                  value={contactInfo.phone}
                  onChange={handleChange}
                />
                <span className='text-orange-600'>{formErrors.phone}</span>
              </div>

              <div class='mb-6'>
                <textarea
                  rows={4}
                  id='message'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5'
                  placeholder='Your question.....'
                  required
                  name='message'
                  value={contactInfo.message}
                  onChange={handleChange}
                />
                <span className='text-orange-600'>{formErrors.message}</span>
              </div>

              {loading ? (
                <Button
                  isLoading
                  className='text-white bg-[#1B2639] text-xl w-full px-5 py-3 text-center'
                  radius='sm'
                  size='lg'
                >
                  Sending
                </Button>
              ) : (
                <Button
                  className='text-white bg-[#1B2639] text-xl w-full px-5 py-3 text-center'
                  radius='sm'
                  size='lg'
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              )}
            </form>
          </div>
        </div>
      </CardMotion>
    </SectionLayout>
  );
};

export default AppointmentFrom;
