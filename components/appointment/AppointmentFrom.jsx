'use client';
import React, { useState, useEffect } from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Button } from '@nextui-org/react';
import { send } from 'emailjs-com';
import Swal from 'sweetalert2';
import CardMotion from '../motion/CardMotion';
import Image from 'next/image';

const AppointmentFrom = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Validate the form and set errors
    const errors = validate(emailForm);
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      send(
        'service_21srltl',
        'template_regri0n',
        emailForm,
        'QQbwIXKpnJegjLF_x',
      )
        .then((response) => {
          setLoading(false); // Stop loading
          Swal.fire({
            icon: 'success',
            text: 'Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.',
            confirmButtonColor: '#131b2a',
          }).then(() => {
            setEmailForm({
              name: '',
              phone: '',
              email: '',
              message: '',
            });
          });
        })
        .catch((err) => {
          console.log('err', err);
          Swal.fire({
            icon: 'error',
            text: 'Something went wrong!',
          }).then(() => {
            setEmailForm({
              name: '',
              phone: '',
              email: '',
              message: '',
            });
            setLoading(false); // Stop loading
          });
        });
    } else {
      setLoading(false); // Stop loading
    }
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
                src={'/assets/appointment.png'}
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
              If you have any questions about legal guidance on immigration
              matters, feel free to ask. Our dedicated team is here to assist
              you.
            </p>
            <form className='w-full' onSubmit={handleSubmit}>
              <div class='mb-6 w-full'>
                <input
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5'
                  placeholder='Your name'
                  required
                  type='text'
                  name='name'
                  value={emailForm.name}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      name: event.target.value,
                    });
                  }}
                />
                <span className='text-orange-600'>{formErrors.name}</span>
              </div>

              <div class='mb-6'>
                <input
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5'
                  placeholder="What's your email"
                  required
                  type='email'
                  name='email'
                  value={emailForm.email}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      email: event.target.value,
                    });
                  }}
                />
                <span className='text-orange-600'>{formErrors.email}</span>
              </div>

              <div class='mb-6'>
                <input
                  id='phone'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5'
                  placeholder="What's your phone"
                  required
                  type='tel'
                  name='phone'
                  value={emailForm.phone}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      phone: event.target.value,
                    });
                  }}
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
                  value={emailForm.message}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      message: event.target.value,
                    });
                  }}
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
