import Image from 'next/image';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import CardMotion from '../motion/CardMotion';
import { Bitter } from 'next/font/google';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';

import Link from 'next/link';

const bitter = Bitter({ subsets: ['latin'] });

const AboutSection = () => {
  return (
    <div className='mt-5'>
      {/* Hardam Tripathi, Esq. */}
      <div className=''>
        <div className='relative h-[300px] lg:xl:h-[400px] xl:h-[500px] 2xl:h-[600px] md:overflow-hidden'>
          <Image
            src='/assets/about/triplaw.jpg'
            alt='Hardam Tripathi'
            width={1200}
            height={800}
            priority
            className='w-full'
            rel='preload'
          />

          <div className='flex flex-col md:flex-row gap-8 items-center md:absolute md:inset-0 md:z-20 '>
            <div className='flex-1'></div>
            <div className='flex-1 md:p-0 md:bg-[#f5f7f8b9] items-center h-full z-30'>
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
                <div className='flex justify-start items-center md:pl-16 md:pt-[23%]'>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-2xl md:text-5xl mb-0 md:mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Hardam Tripathi, Esq.
                    </h2>

                    <p className='mb-3 md:mb-4 text-md md:text-xl font-semibold text-stone-950 text-center md:text-left'>
                      U.S. Immigration Attorney
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 md:w-full'></hr>
                    <div className='mt-8 flex flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <Link
                        href={'mailto:info@trip-law.com'}
                        className='flex gap-2 items-center'
                      >
                        <MdEmail className='w-6 h-6 md:w-10 md:h-10 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Email
                        </p>
                      </Link>
                      <Link
                        href={'/assets/vcard-info/hardam-tripathi.vcf'}
                        className='flex gap-2 items-center'
                      >
                        <BsFillPersonVcardFill className='w-5 h-5 md:w-9 md:h-9 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          VCard
                        </p>
                      </Link>
                      <Link
                        href={'https://www.linkedin.com/in/hardamtripathi'}
                        className='flex md:flex-row gap-2 items-center'
                        target='_blank'
                      >
                        <FaLinkedin className='w-5 h-5 md:w-9 md:h-9 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Connect
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </div>
      <SectionLayout>
        <div className=''>
          <h2
            className={`text-stone-950 font-bold text-xl md:text-4xl mb-2 text-center md:text-left ${bitter.className}`}
          >
            ABOUT
          </h2>

          <div className='flex justify-center md:justify-start'>
            <hr class='h-[2px] my-0 bg-red-700 border-0 w-32 mb-6 ' />
          </div>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            USA Immigration Attorney Hardam Tripathi is a USA Immigration and
            Nationality Law Attorney specializing in Business & Investor Based
            Immigration, specifically in Treaty Based Investor Visas (E2),
            Citizenship by Investment (Golden Visas) for USA Citizens interested
            in investing in the European Union, and Employment Based (EB-2, 3,
            4, 5) Visas focusing on commercial real estate investments, staffing
            companies, and franchises. Attorney Tripathi zealously advocates for
            his clients with family-based immigration matters related to waivers
            of inadmissibility, adjustment of status,
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
              Western Michigan University Cooley Law School, J.D., Homeland &
              National Security Law, 2017
            </li>
            <li>University of Florida, M.S. in Pharmaceutical Policy, 2014</li>
            <li>
              University of South Florida, B.S. in Business
              Management/Marketing, 2012
            </li>
          </ul>
          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Bar Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>State Bar of Wisconsin</li>
            <li>District of Columbia Bar</li>
          </ul>

          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Court Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>United States Court of Appeals for the Seventh Circuit</li>
            <li>
              United States District Court for the Western District of Wisconsin
            </li>
            <li>
              United States District Court for the Eastern District of Wisconsin
            </li>
            <li>United States Immigration Courts</li>
            <li>Supreme Court of Wisconsin</li>
            <li>Red Cliff Band of Lake Superior Chippewa Tribal Court</li>
            <li>District of Columbia Court of Appeals</li>
          </ul>
        </div>
      </SectionLayout>
      {/* Mukta Patel */}
      <div className=''>
        <div className='relative h-[300px] lg:xl:h-[400px] xl:h-[500px] 2xl:h-[600px] md:overflow-hidden'>
          <Image
            src='/assets/about/mukta-patel.jpg'
            alt='Mukta Patel'
            width={1200}
            height={800}
            priority
            className='w-full'
            rel='preload'
          />

          <div className='flex flex-col md:flex-row gap-8 items-center md:absolute md:inset-0 md:z-20 '>
            <div className='flex-1'></div>
            <div className='flex-1 md:p-0 md:bg-[#f5f7f8cd] items-center h-full z-30'>
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
                <div className='flex justify-start items-center md:pl-16 md:pt-[23%]'>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-2xl md:text-5xl mb-0 md:mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Mukta Patel
                    </h2>

                    <p className='mb-3 md:mb-4 text-md md:text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Director of Legal Operations
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 w-full'></hr>
                    <div className='mt-8 flex flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <Link
                        href={'mailto:info@trip-law.com'}
                        className='flex gap-2 items-center'
                      >
                        <MdEmail className='w-6 h-6 md:w-10 md:h-10 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Email
                        </p>
                      </Link>
                      <Link
                        href={'/assets/vcard-info/mukta-patel.vcf'}
                        className='flex gap-2 items-center'
                      >
                        <BsFillPersonVcardFill className='w-5 h-5 md:w-9 md:h-9 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          VCard
                        </p>
                      </Link>
                      <Link
                        href={
                          'https://www.linkedin.com/in/mukta-patel-b41067273'
                        }
                        target='_blank'
                        className='flex md:flex-row gap-2 items-center'
                      >
                        <FaLinkedin className='w-5 h-5 md:w-9 md:h-9 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Connect
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </div>
      <SectionLayout>
        <div className=''>
          <h2
            className={`text-stone-950 font-bold text-xl md:text-4xl mb-2 text-center md:text-left ${bitter.className}`}
          >
            ABOUT
          </h2>

          <div className='flex justify-center md:justify-start'>
            <hr class='h-[2px] my-0 bg-red-700 border-0 w-32 mb-6 ' />
          </div>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Mukta Patel was originally a Licensed Attorney in India earning her
            LLB from Sir Maharaja Sayajirao University in Gujarat, India. She
            focused her practice areas on Criminal Defense, Civil Business
            Litigation, and Family Law and practiced complex legal cases for
            half a decade. Since, she has immigrated to these great United
            States of America, focusing on family based immigration matters
            involving processing of Green Cards, Citizenship, and Visa matters
            with respect to the USA Department of Homeland Security’s
            Citizenship and Immigration Services and the USA Department of
            State’s Bureau of Consular Affairs, respectively.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Attorney Patel currently serves as a Legal Advisor & Director at
            Trip Law, P.A. and has earned her LLM at the Florida State
            University with a specialization in American Law.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Currently Attorney Patel lives in Lakeland with her loving husband
            and two children and is fluent in Gujarati and Hindi. Attorney Patel
            empathizes with the plight of immigrants who struggle to gain legal
            status in the USA and spends her spare time advocating for immigrant
            rights in her community.
          </p>
          <p className='mb-4 mt-2 text-xl font-bold text-stone-950 text-center md:text-left'>
            Education
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>
              Florida State University College of Law, LL.M. in American Law,
              2018
            </li>
            <li>The Maharaja Sayajirao University, Bachelor of Law, 2012</li>
          </ul>
          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Bar Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>Bar Council of India</li>
            <li>Bar Council of Gujarat</li>
          </ul>

          <p className='mb-4 mt-6 text-xl font-bold text-stone-950 text-center md:text-left'>
            Court Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>High Court of Gujarat</li>
            <li>District Court of Gujarat</li>
          </ul>
        </div>
      </SectionLayout>
      {/* Arjo Neel */}
      <div className=''>
        <div className='relative h-[300px] lg:xl:h-[400px] xl:h-[500px] 2xl:h-[600px] md:overflow-hidden'>
          <Image
            src='/assets/about/arjo-neel.jpg'
            alt='Arjo Neel'
            width={1200}
            height={800}
            priority
            className='w-full'
            rel='preload'
          />

          <div className='flex flex-col md:flex-row gap-8 items-center md:absolute md:inset-0 md:z-20 '>
            <div className='flex-1'></div>
            <div className='flex-1 md:p-0 md:bg-[#f5f7f8cd] items-center h-full z-30'>
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
                <div className='flex justify-start items-center md:pl-16 md:pt-[23%]'>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-2xl md:text-5xl mb-0 md:mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Arjo Neel
                    </h2>

                    <p className='mb-3 md:mb-4 text-md md:text-xl font-semibold text-stone-950 text-center md:text-left'>
                      E2 & EB5 (Business Immigration Consultant)
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 md:w-full'></hr>
                    <div className='mt-8 flex flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <Link
                        href={'mailto:info@trip-law.com'}
                        className='flex gap-2 items-center'
                      >
                        <MdEmail className='w-6 h-6 md:w-10 md:h-10 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Email
                        </p>
                      </Link>
                      <Link
                        href={'/assets/vcard-info/arjo-neel.vcf'}
                        className='flex gap-2 items-center'
                      >
                        <BsFillPersonVcardFill className='md:w-9 md:h-9 w-5 h-5 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          VCard
                        </p>
                      </Link>
                      <Link
                        href={'https://www.linkedin.com/in/arjoneel'}
                        target='_blank'
                        className='flex md:flex-row gap-2 items-center'
                      >
                        <FaLinkedin className='w-5 h-5 md:w-9 md:h-9 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Connect
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </div>
      <SectionLayout>
        <div className=''>
          <h2
            className={`text-stone-950 font-bold text-2xl md:text-4xl mb-2 text-center md:text-left ${bitter.className}`}
          >
            ABOUT
          </h2>

          <div className='flex justify-center md:justify-start'>
            <hr class='h-[2px] my-0 bg-red-700 border-0 w-32 mb-6 ' />
          </div>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Arjo Neel is a seasoned professional in the field of business
            immigration consulting, with a robust career spanning four years
            marked by exceptional achievements and contributions to the
            industry. Throughout this period, Arjo has leveraged his expertise
            to provide invaluable guidance on numerous immigration projects,
            demonstrating a keen understanding of intricate legal and financial
            requirements.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            During his tenure, Arjo has successfully consulted on and written
            business plans for over 50 projects, focusing primarily on
            investment-based immigration pathways such as the E-2 and EB-5 visa
            programs. His proficiency in navigating complex financial
            landscapes, including managing intricate money trails and
            documentation, has been instrumental in securing successful visa
            applications for his clients.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Arjo Neel's professional portfolio includes collaborations with a
            diverse range of clients, including franchises, startups, and new
            business formations. His adeptness at tailoring business plans to
            meet immigration criteria and ensure viability underscores his
            commitment to facilitating his clients' immigration goals
            effectively.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            In addition to his role as a business plan writer and consultant,
            Arjo has cultivated strong partnerships with immigration attorneys,
            enabling him to stay abreast of legal developments and intricacies
            affecting immigration policies. This collaboration ensures that his
            clients receive comprehensive and up-to-date advice, mitigating
            risks associated with legal complexities.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Arjo Neel's brief yet impactful career in business immigration
            consulting reflects his dedication to excellence, client-centric
            approach, and deep-rooted commitment to facilitating successful
            immigration journeys through sound business strategies. His
            contributions have solidified his reputation as a trusted advisor
            and pivotal figure within the industry, paving the way for continued
            success and innovation in the field of business immigration
            consulting.
          </p>
        </div>
      </SectionLayout>
      {/* Sakawat Hossain */}
      <div className=''>
        <div className='relative h-[300px] lg:xl:h-[400px] xl:h-[500px] 2xl:h-[600px] md:overflow-hidden'>
          <Image
            src='/assets/about/sakawat-hossain.jpg'
            alt='Sakawat Hossain'
            width={1200}
            height={800}
            priority
            className='w-full'
            rel='preload'
          />

          <div className='flex flex-col md:flex-row gap-8 items-center md:absolute md:inset-0 md:z-20 '>
            <div className='flex-1'></div>
            <div className='flex-1 md:p-0 md:bg-[#f5f7f8cd] items-center h-full z-30'>
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
                <div className='flex justify-start items-center md:pl-16 md:pt-[23%]'>
                  <div>
                    <h2
                      className={`text-stone-950 font-bold text-2xl md:text-5xl mb-0 md:mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Sakawat Hossain
                    </h2>

                    <p className='mb-3 md:mb-4 text-md md:text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Senior Associate Case Manager
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 md:w-full'></hr>
                    <div className='mt-8 flex flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <Link
                        href={'mailto:support@trip-law.com'}
                        className='flex gap-2 items-center'
                      >
                        <MdEmail className='w-6 h-6 md:w-10 md:h-10 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Email
                        </p>
                      </Link>
                      <Link
                        href={'tel: +1 863-599-6735'}
                        className='flex gap-2 items-center'
                      >
                        <RiCustomerService2Line className='w-6 h-6 md:w-10 md:h-10 text-blue-600' />

                        <p className='text-md md:text-xl font-semibold text-center'>
                          +1 863-599-6735
                        </p>
                      </Link>
                      {/* <Link
                        href={'/'}
                        className='flex md:flex-row flex-row-reverse gap-3 items-center'
                      >
                        <FaLinkedin className='w-9 h-9 text-blue-600 mt-2' />
                        <p className='text-xl font-semibold text-center'>
                          Connect
                        </p>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </div>
      <SectionLayout>
        <div className=''>
          <h2
            className={`text-stone-950 font-bold text-2xl md:text-4xl mb-4 text-center md:text-left ${bitter.className}`}
          >
            ABOUT
          </h2>

          <div className='flex justify-center md:justify-start'>
            <hr class='h-[2px] my-0 bg-red-700 border-0 w-32 mb-6 ' />
          </div>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            {`Sakawat Hossain is currently in charge of TripLaw, P.A., overseeing the entire lifecycle of legal cases and ensuring their progress. Sakawat Hossain is currently in charge of TripLaw, P.A., overseeing the entire lifecycle of legal cases and ensuring they progress smoothly from initiation to resolution. This includes managing deadlines, tracking case developments, and coordinating with all parties involved. You serve as a primary point of contact for the client, maintaining regular communication to update them on.`}
          </p>
        </div>
      </SectionLayout>
      {/* Abrar Faisaal */}
      <div className='mb-[10%] md:mb-0'>
        <div className='relative h-[300px] lg:xl:h-[400px] xl:h-[500px] 2xl:h-[600px] md:overflow-hidden'>
          <Image
            src='/assets/about/abrar-faisaal.jpg'
            alt='Abrar Faisaal'
            width={1200}
            height={800}
            priority
            className='w-full'
            rel='preload'
          />

          <div className='flex flex-col md:flex-row gap-8 items-center md:absolute md:inset-0 md:z-20 '>
            <div className='flex-1'></div>
            <div className='flex-1 md:p-0 md:bg-[#f5f7f8cd] items-center h-full z-30'>
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
                <div className='flex justify-start items-center md:pl-16 md:pt-[23%]'>
                  <div>
                    {/* <h2
                      className={`text-stone-950 font-bold text-2xl md:text-5xl mb-0 md:mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      Hardam Tripathi, Esq.
                    </h2>

                    <p className='mb-3 md:mb-4 text-md md:text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Immigration Lawyer
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 md:w-full'></hr>
                    <div className='mt-8 flex flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>

                    </div> */}
                    <h2
                      className={`text-stone-950 font-bold text-2xl md:text-5xl mb-0 md:mb-4 text-center md:text-left ${bitter.className}`}
                    >
                      S. M. Faisal Abrar
                    </h2>

                    <p className='mb-3 md:mb-4 text-md md:text-xl font-semibold text-stone-950 text-center md:text-left'>
                      Senior Associate Paralegal
                    </p>
                    <hr class='h-[2px] my-0 bg-red-700 border-0 md:w-full'></hr>
                    <div className='mt-8 flex flex-row items-center md:gap-28 gap-4 justify-center md:justify-start'>
                      <Link
                        href={'mailto:support@trip-law.com'}
                        className='flex gap-2 items-center'
                      >
                        <MdEmail className='w-6 h-6 md:w-10 md:h-10 text-blue-600' />
                        <p className='text-md md:text-xl font-semibold text-center'>
                          Email
                        </p>
                      </Link>
                      <Link
                        href={'tel: +1 8138223542'}
                        className='flex gap-2 items-center'
                      >
                        <RiCustomerService2Line className='w-6 h-6 md:w-10 md:h-10 text-blue-600' />

                        <p className='text-md md:text-xl font-semibold text-center'>
                          +1 8138223542
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </div>
      <SectionLayout>
        <div className=''>
          <h2
            className={`text-stone-950 font-bold text-2xl md:text-4xl mb-2 text-center md:text-left ${bitter.className}`}
          >
            ABOUT
          </h2>

          <div className='flex justify-center md:justify-start'>
            <hr class='h-[2px] my-0 bg-red-700 border-0 w-32 mb-6 ' />
          </div>

          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            S. M. Faisal Abrar, is a practitioner lawyer in Bangladesh Obtained
            his LLB from AMERICAN INTERNATIONAL UNIVERSITY BANGLADESH & LLM from
            NORTH SOUTH UNIVERSITY. He is specialized in Human Rights Law as his
            published documentary about Rohingya Refugees was exhibited at
            University of Barcelona, in Spain.
          </p>
          <p className='mb-4 text-lg text-stone-950 text-center md:text-left'>
            Currently Abrar serves as a Senior Paralegal at Trip Law, P.A. He
            has adequate knowledge on family based immigration matters involving
            processing of Green Cards, Citizenship, and Visa matters with
            respect to the U.S. Department of Homeland Security’s Citizenship
            and Immigration Services and the U.S. Department of State’s Bureau
            of Consular Affairs, respectively.
          </p>
          <p className='mb-4 mt-2 text-xl font-bold text-stone-950 text-center md:text-left'>
            Education
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>
              American International University Bangladesh, Bachelor of Law,
              2021
            </li>
            <li>North South University Bangladesh, LLM, 2023</li>
          </ul>

          <p className='mb-4 mt-2 text-xl font-bold text-stone-950 text-center md:text-left'>
            Court Admissions
          </p>
          <ul className='space-y-1 text-slate-900 list-disc list-inside text-md md:text-lg'>
            <li>Supreme Court of Bangladesh</li>
            <li>Court of Metropolitan Magistrate</li>
          </ul>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutSection;
