import SectionLayout from '../shared/SectionLayout';
import { Bitter } from 'next/font/google';
import { SingleTabSection } from '../shared/SingleTabSection';
import { TripleTabSection } from '../shared/TripleTabSection';

const bitter = Bitter({ subsets: ['latin'] });

const FamilyBasedImmigration = () => {
  let tabsData = [
    {
      value: '1',
      label: `<p>Green Card </br>Through Marriage</p>`,
      slug: 'green-card-through-marriage',
      content:
        'If you are married to a U.S.A citizen or green card holder, you will get the opportunity to get a green card through marriage. We can help secure your future in the U.S.A by providing necessary support. Our immigration experts and independent attorneys will guide you to complete all the required forms and collect the necessary documents. We will review your application to ensure everything is correct.',
      img: `/assets/home/Family-Based-Immigration/green-card-through-marriage.png`,
    },
    {
      value: '2',
      label: `<p>Green Card Through</br>Immediate Relative</p>`,
      slug: 'green-card-through-immediate-relative',
      content:
        'Obtain a permanent residency taking sponsorship from your immediate relatives. Learn about the legal challenges you are going to face during your immigration journey. We can help you apply for an immigration program according to family preferences. Our experienced attorneys will help you meet the eligibility criteria and complete the application process correctly. We can guide you in navigating the complexities during your entire green card processing journey.',
      img: `/assets/home/Family-Based-Immigration/green-card-lmmediate-relative's.png`,
    },
    {
      value: '3',
      label: `<p>Green Card Through </br>Consular Processing</p>`,
      slug: 'green-card-through-consular-processing',
      content:
        'Consular Processing is a quicker and more straightforward option than Adjustment of Status. If you are currently living outside the U.S.A, need a direct work permit, or want to make a fresh start, green card consular processing would be a good option. So, get ready to start your green card journey with our expert guidance. We’ll simplify your application process offering step-by-step assistance to ensure you avoid common mistakes.',
      img: `/assets/home/Family-Based-Immigration/Green-Card-Through-Consular-Processing.png`,
    },
  ];

  let tabsDataForMobileView = [
    {
      top: [
        {
          value: '1',
          label: `<p>Green Card Through Marriage</p>`,
        },
      ],
      middle: [
        {
          value: '2',
          label: `<p>Green Card Through Immediate Relative</p>`,
        },
      ],
      bottom: [
        {
          value: '3',
          label: `<p>Green Card Through Consular Processing</p>`,
        },
      ],
      details: [
        {
          value: '1',
          label: `<p>Green Card Through Marriage</p>`,
          slug: 'green-card-through-marriage',
          content:
            'Are you married to a U.S.A citizen or lawful permanent resident and dreaming of building a life together in the United States? Obtaining a green card through marriage can be a complex and emotionally charged process. We understand the challenges you face and are dedicated to providing comprehensive legal guidance throughout your journey',
          img: `/assets/home/Family-Based-Immigration/green-card-through-marriage.png`,
        },
        {
          value: '2',
          label: `<p>Green Card Through Immediate Relative</p>`,
          slug: 'green-card-through-immediate-relative',
          content:
            "If you're eager to reunite with your loved ones who are already U.S.A citizens, getting a green card through a close family member can be quite tricky due to all the rules and challenges involved. But don't sweat it – we've got your back. We'll walk you through the whole process, making sure you've got everything you need to make your dream of permanent residency in the U.S.A a reality",
          img: `/assets/home/Family-Based-Immigration/green-card-lmmediate-relative's.png`,
        },
        {
          value: '3',
          label: `<p>Green Card Through Consular Processing</p>`,
          slug: 'green-card-through-consular-processing',
          content:
            "Are you all set to start the process for getting your permanent residency in the U.S.A, but you're currently living outside the country? Going through Consular Processing for a Green Card can be your ticket to making that dream a reality. It can be a bit tricky to figure out all the ins and outs, but don't worry! We're here to give you expert advice and full support to make sure everything goes smoothly and you can make that transition successfully.",
          img: `/assets/home/Family-Based-Immigration/Green-Card-Through-Consular-Processing.png`,
        },
      ],
    },
  ];

  return (
    <SectionLayout bg='bg-white'>
      <h2
        className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Family-Based Immigration:
      </h2>
      <div className='flex justify-center'>
        <div className='flex-col hidden w-full mt-10 md:flex'>
          <SingleTabSection tabsData={tabsData} />
        </div>
        <div className='flex flex-col w-full mt-10 md:hidden'>
          <TripleTabSection tabsData={tabsDataForMobileView} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default FamilyBasedImmigration;
