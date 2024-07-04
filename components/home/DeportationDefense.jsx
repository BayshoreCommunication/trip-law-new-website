import SectionLayout from '../shared/SectionLayout';
import { Bitter } from 'next/font/google';
import { DoubleDoubleTabSection } from '../shared/DoubleDoubleTabSection';

const bitter = Bitter({ subsets: ['latin'] });

const DeportationDefense = () => {
  const tabsData = {
    top: [
      {
        value: '1',
        label: 'Bond Hearing',
      },
      {
        value: '2',
        label: 'Master Calendar Hearing',
      },
      {
        value: '3',
        label: 'Individual Hearing',
      },
    ],
    bottom: [
      {
        value: '4',
        label: 'Waivers',
      },
    ],

    topMobile: [
      {
        value: '1',
        label: 'Bond Hearing',
      },
      {
        value: '2',
        label: 'Master Calendar Hearing',
      },
    ],
    bottomMobile: [
      {
        value: '3',
        label: 'Individual Hearing',
      },
      {
        value: '4',
        label: 'Waivers',
      },
    ],
    details: [
      {
        value: '1',
        content:
          'A bond hearing is your chance to secure release from detention while awaiting immigration proceedings. Our experienced attorneys will advocate on your behalf, presenting evidence and arguments to show that you are neither a flight risk nor a danger to the community. With a successful bond hearing, you can prepare your defense from outside detention, giving you more time and resources to build a strong case.',
        img: `/assets/home/Deportation-Defense/Bond-Hearing.png`,
        slug: 'bond-hearing',
      },
      {
        value: '2',
        content:
          'The master calendar hearing is the first step in your deportation case after receiving a Notice to Appear (NTA). The immigration judge reviews the charges, and you can respond to the allegations. Our legal team will represent you, protect your rights, and help you understand the charges and possible defenses. We also strategize for the next steps in your case, laying the groundwork for a strong defense.',
        img: `/assets/home/Deportation-Defense/Master-Calendar-Hearing.png`,
        slug: 'master-celender-hearing',
      },
      {
        value: '3',
        content:
          'The individual hearing is a critical stage in your deportation case where the merits of your case are fully examined. This is when you will present your evidence, witness testimonies, and arguments to the judge. Our attorneys will meticulously prepare your case, ensuring all necessary documentation is submitted and your story is clearly communicated. We aim to present a compelling defense to achieve the best possible outcome for you.',
        img: `/assets/home/Deportation-Defense/Individual-Hearing.png`,
        slug: 'individual-hearing',
      },
      {
        value: '4',
        content:
          'Waivers can help overcome barriers to your immigration status, such as inadmissibility or deportation orders. Our skilled team will assist you in applying for various waivers, such as I-601 & I-601A waivers for unlawful presence or I-212 waivers for prior deportations. We will gather and present evidence to demonstrate your eligibility and the hardships you or your family would face if the waiver is not granted.',
        img: `/assets/home/Deportation-Defense/Waiver.png`,
        slug: 'waivers',
      },
    ],
  };

  const tabsDataMobile = {
    top: [
      {
        value: '1',
        label: 'Bond Hearing',
      },
      {
        value: '2',
        label: 'Master Calendar Hearing',
      },
    ],
    bottom: [
      {
        value: '3',
        label: 'Individual Hearing',
      },
      {
        value: '4',
        label: 'Waivers',
      },
    ],
    details: [
      {
        value: '1',
        content:
          'A bond hearing is your chance to secure release from detention while awaiting immigration proceedings. Our experienced attorneys will advocate on your behalf, presenting evidence and arguments to show that you are neither a flight risk nor a danger to the community. With a successful bond hearing, you can prepare your defense from outside detention, giving you more time and resources to build a strong case.',
        img: `/assets/home/Deportation-Defense/Bond-Hearing.png`,
        slug: 'bond-hearing',
      },
      {
        value: '2',
        content:
          'The master calendar hearing is the first step in your deportation case after receiving a Notice to Appear (NTA). The immigration judge reviews the charges, and you can respond to the allegations. Our legal team will represent you, protect your rights, and help you understand the charges and possible defenses. We also strategize for the next steps in your case, laying the groundwork for a strong defense.',
        img: `/assets/home/Deportation-Defense/Master-Calendar-Hearing.png`,
        slug: 'master-celender-hearing',
      },
      {
        value: '3',
        content:
          'The individual hearing is a critical stage in your deportation case where the merits of your case are fully examined. This is when you will present your evidence, witness testimonies, and arguments to the judge. Our attorneys will meticulously prepare your case, ensuring all necessary documentation is submitted and your story is clearly communicated. We aim to present a compelling defense to achieve the best possible outcome for you.',
        img: `/assets/home/Deportation-Defense/Individual-Hearing.png`,
        slug: 'individual-hearing',
      },

      {
        value: '4',
        content:
          'Waivers can help overcome barriers to your immigration status, such as inadmissibility or deportation orders. Our skilled team will assist you in applying for various waivers, such as I-601 waivers for unlawful presence or I-212 waivers for prior deportations. We will gather and present evidence to demonstrate your eligibility and the hardships you or your family would face if the waiver is not granted.',
        img: `/assets/home/Deportation-Defense/Waiver.png`,
        slug: 'waivers',
      },
    ],
  };

  return (
    <SectionLayout bg='bg-white'>
      <h2
        className={`text-stone-950 font-bold text-3xl md:text-4xl mb-3 text-center ${bitter.className}`}
      >
        Deportation Defense
      </h2>
      <div className='flex justify-center'>
        <div className='hidden md:flex w-full flex-col mt-10'>
          <DoubleDoubleTabSection tabsData={tabsData} />
        </div>
        <div className='flex md:hidden w-full flex-col mt-10'>
          <DoubleDoubleTabSection tabsData={tabsDataMobile} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default DeportationDefense;
