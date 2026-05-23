import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  CRIMINAL_CHARGES_ARTICLE_TITLE,
  CRIMINAL_CHARGES_FEATURE_IMAGE,
  CRIMINAL_CHARGES_FEATURE_IMAGE_ALT,
  CRIMINAL_CHARGES_FEATURE_IMAGE_CAPTION,
  CRIMINAL_CHARGES_FEATURE_IMAGE_DESCRIPTION,
  CRIMINAL_CHARGES_FEATURE_IMAGE_TITLE,
} from "./criminalChargesMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "A single criminal charge, even a misdemeanor, can seriously impact a noncitizen's immigration status.",
  "State court dismissals, withheld adjudication, or light sentences may still be treated as convictions under federal immigration law.",
  "Federal aggravated felony rules can be broader and harsher than state criminal labels.",
  "A DUI may not automatically cause deportation, but it can trigger visa revocation, extra scrutiny, or removal risk when other facts are present.",
  "Hiding old arrests or convictions on green card and naturalization applications can create separate fraud and deportation problems.",
  "Waivers of inadmissibility may be available when a qualifying U.S. citizen or lawful permanent resident relative would suffer extreme hardship.",
  "Good Moral Character is usually reviewed across the five years before Form N-400, so timing and preparation matter.",
];

const riskRows = [
  [
    "Dismissed or withheld case",
    "May still count as a conviction for immigration purposes",
    "Review the plea, sentence, and court record before filing any immigration application.",
  ],
  [
    "Aggravated felony",
    "Can trigger detention, removal, and loss of common defenses",
    "Analyze the federal immigration definition, not only the state charge name.",
  ],
  [
    "Crime involving moral turpitude",
    "Can affect admission, re-entry, green cards, and citizenship",
    "Check whether the offense involves fraud, theft, intent, violence, or other aggravating facts.",
  ],
  [
    "DUI arrest or conviction",
    "May cause visa revocation or serious discretionary problems",
    "Look for controlled substances, injuries, child passengers, prior offenses, or probation terms.",
  ],
  [
    "Hidden arrest history",
    "Can create misrepresentation and credibility issues",
    "Disclose accurately and support the case with certified records and rehabilitation evidence.",
  ],
];

const services = [
  "Review criminal court records before immigration filings or travel.",
  "Coordinate with criminal defense counsel before a plea is accepted.",
  "Prepare waiver, green card, and naturalization strategies after an arrest or conviction.",
];

const faqItems = [
  [
    "Can immigration authorities use old criminal charges against me years later?",
    "Yes. Immigration agencies can review past arrests and convictions during visa renewals, green card applications, airport re-entry screenings, and citizenship interviews. Even older cases can become relevant when they appear in a background check.",
  ],
  [
    "Does traveling outside the United States become risky after a criminal charge?",
    "It can. Some noncitizens face problems returning to the U.S. after international travel because border officers reassess admissibility at the port of entry. A state criminal case that seemed resolved may still trigger immigration review.",
  ],
  [
    "Can a plea deal create immigration problems even if it avoids jail time?",
    "Yes. Certain plea agreements carry immigration consequences regardless of jail time. The offense wording, sentence length, and federal classification can all affect whether you can stay in the United States.",
  ],
  [
    "Can I renew my green card with a criminal record?",
    "Possibly, but you should not file blindly. USCIS can review the full criminal history, including dismissed arrests. A legal review helps determine whether a waiver, court document, or rehabilitation evidence is needed.",
  ],
  [
    "Will one DUI make me deportable?",
    "A single simple DUI does not always create deportability by itself, but it can cause visa revocation, travel problems, and discretionary issues. A DUI involving drugs, injury, a child passenger, or prior offenses is much more serious.",
  ],
];

const postDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

function Paragraph({ children, className = "" }) {
  return (
    <p
      className={`mb-4 text-[16px] leading-[1.65] text-[#2C2C2C] ${className}`}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="mb-4 mt-10 border-t-2 border-[#C9A84C] pt-4">
      <h2 className="border-l-4 border-[#C9A84C] pl-4 text-[24px] font-bold leading-tight text-[#1A2B4A]">
        {children}
      </h2>
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="mb-3 mt-7 text-[19px] font-bold leading-tight text-[#1A2B4A]">
      {children}
    </h3>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="font-semibold text-[#1A2B4A] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C]"
    >
      {children}
    </a>
  );
}

function IntroPanel() {
  return (
    <div className="mb-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5">
      <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1A2B4A]">
        Immigration Law | Criminal Defense | United States
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Updated 2026
      </p>
    </div>
  );
}

function TakeawayPanel() {
  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        Key Takeaways
      </h2>
      <BulletList items={takeaways} />
    </div>
  );
}

function SourceBlock({ children, source }) {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-8 py-5">
      <p className="max-w-2xl text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        {children}
      </p>
      <p className="mt-2 text-[15px] leading-[1.55] text-[#2C2C2C]">
        Source: {source}
      </p>
    </div>
  );
}

function RiskTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Criminal Issue</th>
            <th className="px-4 py-3 font-bold">Immigration Risk</th>
            <th className="px-4 py-3 font-bold">Defense Step</th>
          </tr>
        </thead>
        <tbody>
          {riskRows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-[#EAF2FB]" : "bg-white"}
            >
              {row.map((cell) => (
                <td key={cell} className="px-4 py-4 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ServicePanel() {
  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        If Criminal Charges Are Affecting Your Status, TripLaw Can Help
      </h2>
      <Paragraph>
        Criminal immigration problems move fast. A plea in state court, a trip
        abroad, or a rushed immigration application can create consequences that
        last for years. TripLaw reviews both the criminal record and the
        immigration history so the strategy fits the whole case.
      </Paragraph>
      <BulletList items={services} />
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <p className="mb-5 text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        People Also Ask About Criminal Charges and Immigration Status
      </p>
      <div className="space-y-5">
        {faqItems.map(([question, answer]) => (
          <div key={question} className="border-l-4 border-[#C9A84C] pl-5">
            <h3 className="mb-2 text-[18px] font-bold leading-tight text-[#1A2B4A]">
              {question}
            </h3>
            <Paragraph className="mb-0">{answer}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogSidebar({ allBlogsData }) {
  const recentBlogs = getPublishedBlogsWithStatic(allBlogsData);

  return (
    <div className="col-span-2 h-[100%] overflow-x-hidden overflow-y-scroll sm:col-span-1 md:h-[1000px]">
      {recentBlogs.map((blogs, index) => (
        <Link
          className="mb-4 flex items-center gap-6"
          key={index}
          href={`/blog/${blogs?.slug}`}
        >
          <Image
            width={180}
            height={180}
            src={blogs?.featuredImage?.image?.url}
            alt={blogs?.featuredImage?.altText || blogs?.title}
            className="flex-shrink-0 object-cover"
            style={{ objectFit: "cover" }}
          />
          <div>
            <div className="mt-0 text-left text-[0.8rem] italic text-[#2C2C2C] md:text-[.8rem]">
              {postDate(blogs?.createdAt)}
            </div>
            <div className="line-clamp-2 text-left text-md font-bold text-[#1A2B4A]">
              {blogs?.title}
            </div>
            <div className="mb-2 h-6 line-clamp-1 text-[.8rem] font-normal text-[#2C2C2C] md:mb-4">
              {parse(blogs?.body || "")}
            </div>
            <button
              type="button"
              className="me-2 rounded-md bg-[#1A2B4A] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#162030] focus:outline-none md:text-lg"
            >
              Read More
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function HowCriminalChargesCanImpact({ allBlogsData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {CRIMINAL_CHARGES_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={CRIMINAL_CHARGES_FEATURE_IMAGE}
                alt={CRIMINAL_CHARGES_FEATURE_IMAGE_ALT}
                title={CRIMINAL_CHARGES_FEATURE_IMAGE_TITLE}
                aria-describedby="criminal-charges-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {CRIMINAL_CHARGES_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="criminal-charges-feature-image-description"
                className="sr-only"
              >
                {CRIMINAL_CHARGES_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              A criminal charge could jeopardize your legal status in the U.S.
              and may result in deportation, cancellation of your visa, or
              denial of future immigration benefits, including a green card or
              citizenship. The effect depends on the specific crime, the nature
              of the conviction, and how U.S. immigration law classifies the
              offense.
            </Paragraph>
            <Paragraph>
              For noncitizens, the criminal court result is only one part of
              the story. Immigration agencies can review arrests, plea deals,
              probation terms, old cases, and travel history when deciding
              whether someone can stay in the United States or receive a future
              benefit.
            </Paragraph>

            <TakeawayPanel />

            <SectionHeading>
              1. The Conflict Between State Criminal Laws and Federal
              Immigration Policy
            </SectionHeading>
            <Paragraph>
              Criminal courts focus on punishment, rehabilitation, and public
              safety. Federal immigration authorities focus on whether a
              noncitizen should be admitted, allowed to remain, or removed from
              the United States. These two systems often use different legal
              definitions.
            </Paragraph>
            <Paragraph>
              A state judge may give a light sentence for a first offense, or a
              prosecutor may offer a plea that sounds favorable. Immigration law
              can still treat that outcome as a serious problem. A dismissal,
              withheld adjudication, or no-jail sentence may still create an
              immigration conviction if the federal definition is met.
            </Paragraph>

            <SourceBlock
              source={
                <ExternalLink href="https://www.tracreports.org/reports/771/">
                  TRAC Immigration
                </ExternalLink>
              }
            >
              Only about 1.83% of new immigration court filings in early 2026
              were initiated on criminal grounds, showing how federal removal
              cases often turn on immigration-specific rules rather than state
              criminal labels.
            </SourceBlock>

            <Paragraph>
              We review arrest records, statutes, plea language, sentencing
              documents, and immigration history together. That level of detail
              matters because a local plea bargain that seems helpful in
              criminal court can quietly damage visa status, green card
              eligibility, or future citizenship.
            </Paragraph>

            <SubHeading>Aggravated Felony Categories</SubHeading>
            <Paragraph>
              Under federal immigration law, certain offenses receive an
              aggravated felony label even when the state court uses a different
              classification. This designation can lead to mandatory detention,
              removal, and loss of many forms of relief.
            </Paragraph>
            <Paragraph>
              The phrase can be misleading. Some offenses that state law treats
              as misdemeanors may still create aggravated felony consequences if
              the sentence, loss amount, or statutory elements meet the federal
              standard.
            </Paragraph>

            <SubHeading>State Plea Bargain Risks</SubHeading>
            <Paragraph>
              A deal that avoids jail time can still hurt a visa holder. The
              exact wording of the plea, the admitted conduct, and the sentence
              can matter more than the informal name of the charge. Before
              accepting any plea, noncitizens should understand the immigration
              result, not only the criminal sentence.
            </Paragraph>

            <SectionHeading>
              2. Definition and Scope of a Crime of Moral Turpitude
            </SectionHeading>
            <Paragraph>
              One of the most confusing immigration terms is crime involving
              moral turpitude. It does not have one simple definition. Courts
              often describe it as conduct that is inherently base, vile, or
              contrary to accepted moral duties between people.
            </Paragraph>
            <Paragraph>
              Fraud and theft usually fall into this category. Certain assault,
              domestic violence, and intent-based offenses may also qualify.
              This classification can determine whether a visa application,
              adjustment of status case, green card renewal, or naturalization
              application succeeds.
            </Paragraph>

            <SubHeading>Subjective Legal Standards</SubHeading>
            <Paragraph>
              Because moral turpitude is flexible, prosecutors and immigration
              officers can view the same record differently. A careful defense
              challenges overbroad classifications and compares the specific
              statute to prior immigration decisions.
            </Paragraph>

            <SubHeading>Entry and Re-entry Restrictions</SubHeading>
            <Paragraph>
              A conviction for a crime involving moral turpitude can make a
              person inadmissible. That may block a visa renewal, prevent
              re-entry after travel, or create problems with a lawful permanent
              resident application.
            </Paragraph>
            <SourceBlock
              source={
                <ExternalLink href="https://www.uscis.gov/node/73769">
                  USCIS Policy Manual
                </ExternalLink>
              }
            >
              USCIS guidance explains that admissibility is generally required
              for admission, adjustment of status, and many immigration
              benefits.
            </SourceBlock>

            <SectionHeading>
              3. Specific Immigration Consequences of a DUI
            </SectionHeading>
            <Paragraph>
              Many people assume a driving offense is minor. For someone who is
              not a U.S. citizen, a DUI can affect immigration status even when
              it does not automatically lead to deportation by itself. It may
              still cause visa revocation, travel delays, discretionary
              problems, and questions about rehabilitation or good moral
              character.
            </Paragraph>

            <SourceBlock
              source={
                <ExternalLink href="https://www.dhs.gov/news/2025/03/13/ice-arrests-first-50-days-trump-administration">
                  U.S. Department of Homeland Security
                </ExternalLink>
              }
            >
              DHS has reported recent ICE arrest data showing a major share of
              interior arrests involving individuals with either criminal
              convictions or pending criminal charges.
            </SourceBlock>

            <SubHeading>Visa Revocation After Arrest</SubHeading>
            <Paragraph>
              Consulates may revoke visas after a DUI arrest, even before a
              criminal conviction. That does not always mean the person must
              leave immediately, but it can create serious problems for future
              travel, visa renewal, or consular processing.
            </Paragraph>

            <SubHeading>Controlled Substance Violations</SubHeading>
            <Paragraph>
              A DUI involving controlled substances is far more serious than a
              basic alcohol-related charge. Drug-related facts, child
              passengers, injuries, probation violations, or repeat offenses can
              quickly increase the risk of removal proceedings.
            </Paragraph>

            <SectionHeading>
              4. Green Card Renewal with a Criminal Record - Success Steps
            </SectionHeading>
            <Paragraph>
              If you already have a criminal record, you may still have options.
              Many people assume they are stuck forever, but some cases can be
              explained, rehabilitated, waived, or strategically timed.
            </Paragraph>
            <Paragraph>
              Green card renewal with a criminal record is stressful because
              the application requires full disclosure. The government can see
              arrests even if a judge dismissed the case. Certified court
              records, police reports, probation documents, and final
              dispositions often become essential.
            </Paragraph>

            <SubHeading>Disclosure Requirements</SubHeading>
            <Paragraph>
              Hiding a past arrest is often worse than the arrest itself.
              Misrepresentation can become an independent immigration problem.
              A truthful application supported by accurate records gives the
              government a clearer path to understand what happened.
            </Paragraph>

            <SubHeading>Evidence of Rehabilitation</SubHeading>
            <Paragraph>
              Rehabilitation evidence can help show who you are today. Strong
              records may include proof of steady employment, tax compliance,
              treatment completion, community service, letters of support, and
              documentation showing family and community ties.
            </Paragraph>

            <SectionHeading>
              5. Naturalization with a Criminal History - Path to Citizenship
            </SectionHeading>
            <Paragraph>
              The journey toward U.S. citizenship is long and requires careful
              preparation. By the time someone applies for naturalization, the
              government will review immigration history, travel, taxes, family
              obligations, and criminal records.
            </Paragraph>
            <Paragraph>
              If there is a criminal issue, the naturalization process becomes
              more sensitive. USCIS may review whether the applicant was
              properly admitted, whether any inadmissibility grounds exist, and
              whether the person has shown Good Moral Character during the
              statutory period.
            </Paragraph>

            <SubHeading>Eligibility for Waivers</SubHeading>
            <Paragraph>
              When a criminal issue creates inadmissibility, a waiver may be
              available in some cases. Waivers allow the government to overlook
              certain past mistakes when the legal standard is met, often
              including proof that removal would cause extreme hardship to a
              qualifying relative.
            </Paragraph>
            <SourceBlock
              source={
                <ExternalLink href="https://www.uscis.gov/node/73770">
                  USCIS Extreme Hardship Policy
                </ExternalLink>
              }
            >
              USCIS recognizes that waiver decisions require a hardship
              analysis for qualifying relatives and a review of the full facts
              of the case.
            </SourceBlock>

            <SubHeading>Background Check and Good Moral Character</SubHeading>
            <Paragraph>
              Form N-400 requires a deep background review. USCIS can examine
              criminal history, tax compliance, travel, family support, and
              honesty throughout the process. For many applicants, the key
              period is the five years immediately before filing, though older
              conduct may still matter.
            </Paragraph>
            <SourceBlock
              source={
                <ExternalLink href="https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization/i-am-a-lawful-permanent-resident-of-5-years">
                  USCIS Naturalization Eligibility
                </ExternalLink>
              }
            >
              USCIS states that many lawful permanent residents applying under
              the five-year rule must show Good Moral Character for at least
              five years before filing Form N-400.
            </SourceBlock>

            <SectionHeading>
              Quick Risk Comparison for Criminal Immigration Cases
            </SectionHeading>
            <RiskTable />

            <ServicePanel />

            <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
              <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
                Your Status, Your Family, and Your Future Are Worth Defending
              </h2>
              <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
                TripLaw helps clients across the United States understand how
                criminal charges affect immigration status, residency, and
                citizenship. Get legal guidance before a plea, travel decision,
                green card filing, or naturalization application creates avoidable
                risk.
              </p>
              <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
                <p>Call (863) 599-6735</p>
                <p>1543 Lakeland Hills Blvd, Ste. 17, Lakeland, FL 33805</p>
                <p>Free Consultation | trip-law.com</p>
              </div>
            </div>

            <FaqSection />

            <p className="mt-12 border-t border-[#C9A84C] pt-5 text-center text-[14px] leading-[1.6] text-[#2C2C2C]">
              Disclaimer: This article is for general informational purposes and
              does not form an attorney-client relationship. For help with any
              immigration issue, reach out to Trip Law.
            </p>
          </article>

          <BlogSidebar allBlogsData={allBlogsData} />
        </div>
      </div>
    </section>
  );
}
