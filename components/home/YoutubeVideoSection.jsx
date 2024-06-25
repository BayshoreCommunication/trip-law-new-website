import React from 'react';
import SectionLayout from '../shared/SectionLayout';

function YoutubeVideoSection() {
  return (
    <SectionLayout img="bg-[url('/assets/home/video-bg.png')] bg-cover bg-top">
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-start gap-16'>
          <div className=''>
            <h2
              className={`text-stone-900 font-bold text-2xl md:text-3xl mt-5 mb-4 text-center md:text-left`}
            >
              Obtain legal status within the United States quickly with proper
              legal representation!
            </h2>

            <ul className='space-y-2 text-slate-900 list-disc list-inside text-md md:text-lg'>
              <li>
                Attorney Hardam Tripathi from Trip Law, P.A. practices U.S
                Immigration & Nationality Law in all 50 states and territories
                in the Union and at Embassies and U.S. Consulates abroad.
              </li>
              <li>Juris Doctorate (Western Michigan University).</li>
              <li>Masters in Policy (University of Florida).</li>
              <li>
                Bachelors in Business Management and Marketing (University of
                South Florida).
              </li>
              <li>
                Practices in Business Immigration, Family Sponsorship, Visas,
                Green Cards, Citizenship, Deportation Defense, and Asylum.
              </li>
              <li>
                Business and Investor Based Immigration, Family Based
                Immigration, and Humanitarian Based Immigration.
              </li>
              <li>
                Federal Agencies Attorney Tripathi served in as a legal
                professional: U.S. Air Force JAG Corps, DEA, ATF, U.S.
                Department of State, U.S. Attorney's Office, Federal Defenders
                Office, State and Local Government, Thirteenth Judicial Circuit
                of Florida, State Attorney’s Office.
              </li>
            </ul>
          </div>

          <div>
            <div className='video-container'>
              <iframe
                src={`https://www.youtube.com/embed/auxTn-pKqO0?si=6w-r-XqRfpJyq7D2`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='YouTube video player'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default YoutubeVideoSection;
