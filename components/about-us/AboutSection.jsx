import Image from 'next/image';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import CardMotion from '../motion/CardMotion';
import { Bitter } from 'next/font/google';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

const bitter = Bitter({ subsets: ['latin'] });

const AboutSection = () => {
  return (
    <div>
      <SectionLayout bg="bg-[url('/assets/about/about-bg-one.jpg')] bg-cover bg-center mt-5">
        <div className='space-y-14'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex-1'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: -100,
                }}
              >
                <div className='mb-[-30px] md:mb-[-55px]'>
                  <Image
                    width={600}
                    height={500}
                    src={'/assets/about/trip.png'}
                    alt='about img'
                  />
                </div>
              </CardMotion>
            </div>
            <div className='flex-1 bg-slate-50 md:bg-transparent md:p-0 p-6'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
              >
                <div className='flex justify-center items-center '>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Hardam Tripathi, Esq.
                    </h2>

                    <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Immigration Lawyer
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 w-full'></hr>
                    <div className='mt-8 flex flex-col md:flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          Email
                        </p>
                        <MdEmail className='w-10 h-10 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          VCard
                        </p>
                        <BsFillPersonVcardFill className='w-9 h-9 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-40 text-md font-medium text-center'>
                          Contact
                        </p>
                        <div className='flex items-center gap-x-5 mt-2'>
                          <FaFacebookF className='text-blue-600 text-2xl' />
                          <BsTwitterX className='text-blue-600 text-2xl' />
                          <FaInstagram className='text-blue-600 text-2xl' />
                          <RiLinkedinFill className='text-blue-600 text-2xl' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className='mt-10'>
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
          >
            ABOUT HARDAM TRIPATHI, ESQ.
          </h2>

          <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
            Top Immigration Lawyer
          </p>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            U.S. Immigration Attorney Hardam Tripathi is a U.S. Immigration and
            Nationality Law Attorney specializing in Business & Investor Based
            Immigration, specifically in Treaty Based Investor Visas (E2),
            Citizenship by Investment (Golden Visas) for U.S. Citizens
            interested in investing in the European Union, and Employment Based
            (EB-2, 3, 4, 5) Visas focusing on commercial real estate
            investments, staffing companies, and franchises. Attorney Tripathi
            zealously advocates for his clients with family-based immigration
            matters related to waivers of inadmissibility, adjustment of status,
            citizenship/naturalization, and visa & green card services.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Prior to launching his own law firm, Tripathi served as a management
            consultant with a Big Four firm, representing clients in matters
            related to strategic risk intelligence & risk management consulting
            in the government and public services space. Tripathi has also
            worked for various other small to mid-size firms in Florida,
            providing regulatory and policy advice to aid clients effectively
            navigate Federal and state government programs. Tripathi’s legal
            education and professional experience with stints at Federal
            agencies and state government, has served as a catalyst to aid
            clients understand the regulations, policies, and procedures related
            to their immigration needs. His knowledge in prior policy
            application and statutory interpretation, contributes to positive
            outcomes for clients.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Tripathi devotes a significant amount of time encouraging best
            practices in the immigration law space and has regularly meets with
            members of Congress to advocate for the authorization of higher
            levels of funding for appropriations related to public health
            initiatives that arise postdisaster in immigrant communities and
            actively lobbies Congress for Immigrant Veterans who are deported
            post-service with Other Than Honorable discharges and for Afghans
            and Ukrainians displaced during geopolitical conflicts. Tripathi
            continues to help clients with their immigration needs so they have
            the confidence to navigate complex global and federal immigration
            laws.
          </p>
          <p className='mb-4 mt-2 text-xl font-bold text-stone-950 text-center md:text-left'>
            Education
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>
              Western Michigan University Cooley Law School, J.D. In Homeland &
              National Security Law,  2017
            </li>
            <li>University Of Florida, M.S. In Pharmaceutical Policy, 2014</li>
            <li>
              University Of South Florida, B.S. In Business
              Management/Marketing, 2012
            </li>
          </ul>
          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Bar Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>Wisconsin</li>
          </ul>

          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Court Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>United States Court Of Appeals For The Seventh Circuit</li>
            <li>
              United States District Court For The Western District Of Wisconsin
            </li>
            <li>
              United States District Court For The Eastern District Of Wisconsin
            </li>
            <li>United States Immigration Courts</li>
            <li>Supreme Court Of Wisconsin</li>
            <li>Red Cliff Band Of Lake Superior Chippewa Tribal Court</li>
          </ul>
        </div>
      </SectionLayout>
      <SectionLayout bg="bg-[url('/assets/about/about-bg-two.jpg')] bg-cover bg-center mt-5">
        <div className='space-y-14'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex-1'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: -100,
                }}
              >
                <div className='mb-[-30px] md:mb-[-55px]'>
                  <Image
                    width={500}
                    height={400}
                    src={'/assets/about/muktapatel.png'}
                    alt='muktapatel'
                  />
                </div>
              </CardMotion>
            </div>
            <div className='flex-1 bg-slate-50 md:bg-transparent md:p-0 p-6'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
              >
                <div className='flex justify-center items-center '>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Mukta Patel
                    </h2>

                    <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Director of Legal Operation
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 w-full'></hr>
                    <div className='mt-8 flex flex-col md:flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          Email
                        </p>
                        <MdEmail className='w-10 h-10 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          VCard
                        </p>
                        <BsFillPersonVcardFill className='w-9 h-9 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-40 text-md font-medium text-center'>
                          Contact
                        </p>
                        <div className='flex items-center gap-x-5 mt-2'>
                          <FaFacebookF className='text-blue-600 text-2xl' />
                          <BsTwitterX className='text-blue-600 text-2xl' />
                          <FaInstagram className='text-blue-600 text-2xl' />
                          <RiLinkedinFill className='text-blue-600 text-2xl' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className='mt-10'>
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
          >
            ABOUT Mukta Patel
          </h2>

          <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
            Director of Legal Operation
          </p>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Mukta Patel was originally a Licensed Attorney in India earning her
            LLB from Sir Maharaja Sayajirao University in Gujarat, India. She
            focused her practice areas on Criminal Defense, Civil Business
            Litigation, and Family Law and practiced complex legal cases for
            half a decade. Since, she has immigrated to these great United
            States of America, focusing on family based immigration matters
            involving processing of Green Cards, Citizenship, and Visa matters
            with respect to the U.S. Department of Homeland Security’s
            Citizenship and Immigration Services and the U.S. Department of
            State’s Bureau of Consular Affairs, respectively.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Attorney Patel currently serves as a Legal Advisor & Senior
            Paralegal at Trip Law, P.A. and has earned her LLM at the Florida
            State University with a specialization in American Law.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Currently Attorney Patel lives in Lakeland with her loving husband
            and two children and is fluent in Gujarati and Hindi. Attorney Patel
            empathizes with the plight of immigrants who struggle to gain legal
            status in the U.S. and spends her spare time advocating for
            immigrant rights in her community.
          </p>
          <p className='mb-4 mt-2 text-xl font-bold text-stone-950 text-center md:text-left'>
            Education
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>
              Florida State University College Of Law, Ll.M. In American Law,
              2018
            </li>
            <li>The Maharaja Sayajirao University, Bachelor Of Law, 2012</li>
          </ul>
          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Bar Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>Bar Council Of India</li>
            <li>Bar Council Of Gujarat</li>
          </ul>

          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Court Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>High Court Of Gujarat</li>
            <li>District Court Of Gujarat</li>
          </ul>
        </div>
      </SectionLayout>
      <SectionLayout bg="bg-[url('/assets/about/about-bg-three.jpg')] bg-cover bg-center mt-5">
        <div className='space-y-14'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex-1'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: -100,
                }}
              >
                <div className='mb-[-30px] md:mb-[-55px]'>
                  <Image
                    width={600}
                    height={400}
                    src={'/assets/about/arjoneel.png'}
                    alt='arjoneel'
                  />
                </div>
              </CardMotion>
            </div>
            <div className='flex-1 bg-slate-50 md:bg-transparent md:p-0 p-6'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
              >
                <div className='flex justify-center items-center '>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Arjo Neel
                    </h2>

                    <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
                      E2 & EB5 Consultant
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 w-full'></hr>
                    <div className='mt-8 flex flex-col md:flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          Email
                        </p>
                        <MdEmail className='w-10 h-10 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          VCard
                        </p>
                        <BsFillPersonVcardFill className='w-9 h-9 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-40 text-md font-medium text-center'>
                          Contact
                        </p>
                        <div className='flex items-center gap-x-5 mt-2'>
                          <FaFacebookF className='text-blue-600 text-2xl' />
                          <BsTwitterX className='text-blue-600 text-2xl' />
                          <FaInstagram className='text-blue-600 text-2xl' />
                          <RiLinkedinFill className='text-blue-600 text-2xl' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className='mt-10'>
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
          >
            ABOUT Arjo Neel
          </h2>

          <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
            E2 & EB5 Consultant
          </p>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Mukta Patel was originally a Licensed Attorney in India earning her
            LLB from Sir Maharaja Sayajirao University in Gujarat, India. She
            focused her practice areas on Criminal Defense, Civil Business
            Litigation, and Family Law and practiced complex legal cases for
            half a decade. Since, she has immigrated to these great United
            States of America, focusing on family based immigration matters
            involving processing of Green Cards, Citizenship, and Visa matters
            with respect to the U.S. Department of Homeland Security’s
            Citizenship and Immigration Services and the U.S. Department of
            State’s Bureau of Consular Affairs, respectively.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Attorney Patel currently serves as a Legal Advisor & Senior
            Paralegal at Trip Law, P.A. and has earned her LLM at the Florida
            State University with a specialization in American Law.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Currently Attorney Patel lives in Lakeland with her loving husband
            and two children and is fluent in Gujarati and Hindi. Attorney Patel
            empathizes with the plight of immigrants who struggle to gain legal
            status in the U.S. and spends her spare time advocating for
            immigrant rights in her community.
          </p>
        </div>
      </SectionLayout>

      <SectionLayout bg="bg-[url('/assets/about/about-bg-four.jpg')] bg-cover bg-center mt-5">
        <div className='space-y-14'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex-1'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: -100,
                }}
              >
                <div className='mb-[-30px] md:mb-[-55px]'>
                  <Image
                    width={600}
                    height={400}
                    src={'/assets/about/Sakawat.png'}
                    alt='Sakawat'
                  />
                </div>
              </CardMotion>
            </div>
            <div className='flex-1 bg-slate-50 md:bg-transparent md:p-0 p-6'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
              >
                <div className='flex justify-center items-center '>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Sakawat Hossain
                    </h2>

                    <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Associate Manager
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 w-full'></hr>
                    <div className='mt-8 flex flex-col md:flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          Email
                        </p>
                        <MdEmail className='w-10 h-10 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          VCard
                        </p>
                        <BsFillPersonVcardFill className='w-9 h-9 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-40 text-md font-medium text-center'>
                          Contact
                        </p>
                        <div className='flex items-center gap-x-5 mt-2'>
                          <FaFacebookF className='text-blue-600 text-2xl' />
                          <BsTwitterX className='text-blue-600 text-2xl' />
                          <FaInstagram className='text-blue-600 text-2xl' />
                          <RiLinkedinFill className='text-blue-600 text-2xl' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className='mt-10'>
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
          >
            ABOUT Sakawat Hossain
          </h2>

          <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
            Associate Manager
          </p>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Mukta Patel was originally a Licensed Attorney in India earning her
            LLB from Sir Maharaja Sayajirao University in Gujarat, India. She
            focused her practice areas on Criminal Defense, Civil Business
            Litigation, and Family Law and practiced complex legal cases for
            half a decade. Since, she has immigrated to these great United
            States of America, focusing on family based immigration matters
            involving processing of Green Cards, Citizenship, and Visa matters
            with respect to the U.S. Department of Homeland Security’s
            Citizenship and Immigration Services and the U.S. Department of
            State’s Bureau of Consular Affairs, respectively.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Attorney Patel currently serves as a Legal Advisor & Senior
            Paralegal at Trip Law, P.A. and has earned her LLM at the Florida
            State University with a specialization in American Law.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Currently Attorney Patel lives in Lakeland with her loving husband
            and two children and is fluent in Gujarati and Hindi. Attorney Patel
            empathizes with the plight of immigrants who struggle to gain legal
            status in the U.S. and spends her spare time advocating for
            immigrant rights in her community.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout bg="bg-[url('/assets/about/about-bg-four.jpg')] bg-cover bg-center mt-5">
        <div className='space-y-14'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex-1'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: -100,
                }}
              >
                <div className='mb-[-30px] md:mb-[-55px]'>
                  <Image
                    width={600}
                    height={400}
                    src={'/assets/about/Abrar.png'}
                    alt='Abrar'
                  />
                </div>
              </CardMotion>
            </div>
            <div className='flex-1 bg-slate-50 md:bg-transparent md:p-0 p-6'>
              <CardMotion
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.1,
                  },
                }}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
              >
                <div className='flex justify-center items-center '>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Abrar Faisaal
                    </h2>

                    <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Associate Paralegal
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 w-full'></hr>
                    <div className='mt-8 flex flex-col md:flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          Email
                        </p>
                        <MdEmail className='w-10 h-10 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-10 text-md font-medium text-center'>
                          VCard
                        </p>
                        <BsFillPersonVcardFill className='w-9 h-9 text-blue-600 mt-2' />
                      </div>
                      <div>
                        <p className='md:ml-40 text-md font-medium text-center'>
                          Contact
                        </p>
                        <div className='flex items-center gap-x-5 mt-2'>
                          <FaFacebookF className='text-blue-600 text-2xl' />
                          <BsTwitterX className='text-blue-600 text-2xl' />
                          <FaInstagram className='text-blue-600 text-2xl' />
                          <RiLinkedinFill className='text-blue-600 text-2xl' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className='mt-10'>
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
          >
            ABOUT Abrar Faisaal
          </h2>

          <p className='mb-4 text-xl font-semibold text-stone-950 text-center md:text-left'>
            ABOUT Abrar Faisaal
          </p>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Mukta Patel was originally a Licensed Attorney in India earning her
            LLB from Sir Maharaja Sayajirao University in Gujarat, India. She
            focused her practice areas on Criminal Defense, Civil Business
            Litigation, and Family Law and practiced complex legal cases for
            half a decade. Since, she has immigrated to these great United
            States of America, focusing on family based immigration matters
            involving processing of Green Cards, Citizenship, and Visa matters
            with respect to the U.S. Department of Homeland Security’s
            Citizenship and Immigration Services and the U.S. Department of
            State’s Bureau of Consular Affairs, respectively.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Attorney Patel currently serves as a Legal Advisor & Senior
            Paralegal at Trip Law, P.A. and has earned her LLM at the Florida
            State University with a specialization in American Law.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Currently Attorney Patel lives in Lakeland with her loving husband
            and two children and is fluent in Gujarati and Hindi. Attorney Patel
            empathizes with the plight of immigrants who struggle to gain legal
            status in the U.S. and spends her spare time advocating for
            immigrant rights in her community.
          </p>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutSection;
