import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  PENDING_CASE_WORK_ARTICLE_TITLE,
  PENDING_CASE_WORK_FEATURE_IMAGE,
  PENDING_CASE_WORK_FEATURE_IMAGE_ALT,
  PENDING_CASE_WORK_FEATURE_IMAGE_CAPTION,
  PENDING_CASE_WORK_FEATURE_IMAGE_DESCRIPTION,
  PENDING_CASE_WORK_FEATURE_IMAGE_TITLE,
  PENDING_CASE_WORK_SLUG,
} from "./whileYourImmigrationCaseIsPendingMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "You need a valid EAD card before starting any job in most pending cases.",
  "Green card and asylum applicants can request work permits through Form I-765.",
  "EAD processing takes approximately 3 to 5 months from USCIS in 2026.",
  "Waiting half a year is required for asylum applicants before they can seek work permission.",
  "Unauthorized employment is a ground of inadmissibility under federal law.",
  "Some people on visas such as H-1B or L-1 can do jobs even without holding an additional EAD.",
];

const caseEligibilityRows = [
  ["Adjustment of Status (I-485)", "Yes", "File I-765 concurrently with I-485"],
  ["Pending Asylum (affirmative)", "Yes, after 180 days", "Must complete the waiting period"],
  ["VAWA Petitioners", "Yes", "Immediate eligibility in most situations"],
  ["U Visa Applicants", "Yes", "A bona fide determination is required first"],
  ["TPS Holders", "Yes", "File alongside the TPS renewal application"],
  ["H-1B / L-1 / O-1 Visa Holders", "No separate EAD needed", "Employer sponsorship covers work rights"],
  ["Removal Defense Only", "Generally no", "Some exceptions may apply on a case-by-case basis"],
];

const eadProcessingTimes = [
  { label: "Concurrent I-485 + I-765", range: "3-5 months", value: 5, color: "#1A2B4A" },
  { label: "Standalone I-765 Filing", range: "4-6 months", value: 6, color: "#C9A84C" },
  { label: "Asylum-Based EAD", range: "5-8 months", value: 8, color: "#1A2B4A" },
  { label: "VAWA / U Visa EAD", range: "4-7 months", value: 7, color: "#C9A84C" },
  { label: "TPS-Based EAD Renewal", range: "2-4 months", value: 4, color: "#2E7D32" },
  { label: "Late / Incomplete Filing", range: "5-10 months", value: 10, color: "#C62828" },
];

const pendingAsylumCases = [
  { region: "Miami-Dade County", estimate: "Approx. 48,000 pending", percentage: "90%", color: "#1A2B4A" },
  { region: "Orlando Metro", estimate: "Approx. 21,000 pending", percentage: "60%", color: "#C9A84C" },
  { region: "Tampa Bay Area", estimate: "Approx. 17,500 pending", percentage: "50%", color: "#1A2B4A" },
  { region: "Lakeland / Polk Co.", estimate: "Approx. 8,200 pending", percentage: "30%", color: "#C9A84C" },
  { region: "Jacksonville Metro", estimate: "Approx. 6,000 pending", percentage: "22%", color: "#2E7D32" },
];

const faqItems = [
  [
    "Can my spouse work if they are listed as a dependent on my pending case?",
    "Yes, in many visa categories. Derivatives can file their own I-765. Eligibility depends on the primary applicant's case type and category."
  ],
  [
    "Does a pending I-485 application automatically allow me to work?",
    "No. You must file Form I-765 separately or concurrently and receive an approved EAD before you start working."
  ],
  [
    "Can I travel internationally while my EAD application is pending?",
    "Not without an Advance Parole document. Leaving the U.S. without one can be treated as abandonment of your pending I-485."
  ],
  [
    "What do I do if I lose my EAD card before it expires?",
    "File Form I-765 again with the replacement category selected. Report the loss to USCIS promptly."
  ],
  [
    "Does an expired EAD still count for I-9 verification with my employer?",
    "Only if you have a valid automatic extension notice and your category qualifies. Your employer must accept it under current USCIS guidance."
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

function InternalLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-semibold text-[#1A2B4A] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C]"
    >
      {children}
    </Link>
  );
}

function IntroPanel() {
  return (
    <div className="mb-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5">
      <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1A2B4A]">
        Immigration Law | Work Authorization | United States
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

function QuotePanel({ text, author }) {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5 italic text-[#1A2B4A]">
      <p className="text-[17px] font-medium leading-[1.65]">"{text}"</p>
      <p className="mt-2 text-[15px] font-bold not-italic">— {author}</p>
    </div>
  );
}

function StatPanel() {
  return (
    <div className="my-8 grid gap-6 md:grid-cols-2">
      <div className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
          EAD Applications Filed Nationally in 2025
        </p>
        <p className="mt-2 text-[48px] font-bold leading-none text-white">1.1M+</p>
        <p className="mt-2 text-[15px] leading-[1.55] text-[#F0F4FA]">
          Filed nationally in 2025. Source: USCIS Annual Data.
        </p>
      </div>
      <div className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
          Florida's Rank for Total EAD Filings
        </p>
        <p className="mt-2 text-[48px] font-bold leading-none text-white">#3</p>
        <p className="mt-2 text-[15px] leading-[1.55] text-[#F0F4FA]">
          Tampa Bay and Central Florida lead the state's filing statistics.
        </p>
      </div>
    </div>
  );
}

function CaseEligibilityTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Case Type</th>
            <th className="px-4 py-3 font-bold">EAD Eligible?</th>
            <th className="px-4 py-3 font-bold">Key Condition / Details</th>
          </tr>
        </thead>
        <tbody>
          {caseEligibilityRows.map((row, index) => (
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

function MidPageCta() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6">
      <h3 className="text-[20px] font-bold text-[#1A2B4A]">
        Your Timeline Matters. Do Not Guess It.
      </h3>
      <p className="mt-2 text-[16px] text-[#2C2C2C]">
        Get professional guidance on your work permit timeline and adjustment of status requirements.
      </p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#1A2B4A] text-white px-5 py-2.5 text-[15px] font-bold hover:bg-[#162030] rounded-md transition-colors"
        >
          Schedule Your Free Consultation Today
        </Link>
      </div>
    </div>
  );
}

function ComparisonPanel() {
  return (
    <div className="my-9 grid gap-6 md:grid-cols-2">
      <div className="border-t-4 border-green-600 bg-[#F3FAF5] p-6 rounded-sm">
        <h3 className="text-[18px] font-bold text-green-800 uppercase tracking-wide">
          Working WITH an EAD
        </h3>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-green-950 list-disc pl-5 marker:text-green-600">
          <li>Completely legal and USCIS-approved employment</li>
          <li>Builds a positive, documented work history in the U.S.</li>
          <li>Keeps adjustment of status or asylum application in good standing</li>
          <li>Provides peace of mind for both you and your employer</li>
        </ul>
      </div>
      <div className="border-t-4 border-red-500 bg-[#FFF5F5] p-6 rounded-sm">
        <h3 className="text-[18px] font-bold text-red-800 uppercase tracking-wide">
          Working WITHOUT Authorization
        </h3>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-red-950 list-disc pl-5 marker:text-red-500">
          <li>Ground of inadmissibility under the Immigration & Nationality Act</li>
          <li>Can lead to immediate denial of green card/asylum application</li>
          <li>Triggers potential removal/deportation proceedings</li>
          <li>Creates a permanent federal record in systems like E-Verify</li>
        </ul>
      </div>
    </div>
  );
}

function EadProcessingTimesChart() {
  return (
    <div className="my-8 bg-[#F0F4FA] p-6 rounded-md">
      <h3 className="text-[17px] font-bold uppercase tracking-wider text-[#1A2B4A] mb-5">
        EAD Processing Time Ranges by Application Type (Months)
      </h3>
      <div className="space-y-4">
        {eadProcessingTimes.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-[14px] font-bold text-[#2C2C2C] mb-1">
              <span>{item.label}</span>
              <span>{item.range}</span>
            </div>
            <div className="w-full bg-white h-4 rounded-full overflow-hidden border border-[#C9A84C]/30">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.value / 10) * 100}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] text-gray-500 italic text-right">
        Max Scale: 10 Months (USCIS 2026 Estimates)
      </p>
    </div>
  );
}

function AsylumCasesChart() {
  return (
    <div className="my-8 bg-[#F0F4FA] p-6 rounded-md">
      <h3 className="text-[17px] font-bold uppercase tracking-wider text-[#1A2B4A] mb-5">
        Florida Pending Asylum Cases by Region (Estimate)
      </h3>
      <div className="space-y-4">
        {pendingAsylumCases.map((item) => (
          <div key={item.region}>
            <div className="flex justify-between text-[14px] font-bold text-[#2C2C2C] mb-1">
              <span>{item.region} ({item.estimate})</span>
              <span>{item.percentage}</span>
            </div>
            <div className="w-full bg-white h-4 rounded-full overflow-hidden border border-[#C9A84C]/30">
              <div
                className="h-full rounded-full"
                style={{
                  width: item.percentage,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] text-gray-500 italic text-right">
        Percentage Scale based on regional density
      </p>
    </div>
  );
}

function RenewalStatHighlight() {
  return (
    <div className="my-8 grid gap-6 md:grid-cols-2">
      <div className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white text-center">
        <p className="text-[56px] font-bold leading-none text-white">540 Days</p>
        <p className="mt-2 text-[15px] font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
          Automatic EAD Extension
        </p>
        <p className="mt-2 text-[14px] text-[#F0F4FA] leading-relaxed">
          For eligible renewal applicants under the 2024 Federal Regulation Update.
        </p>
      </div>
      <div className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white text-center">
        <p className="text-[56px] font-bold leading-none text-white">180 Days</p>
        <p className="mt-2 text-[15px] font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
          Recommended Lead Time
        </p>
        <p className="mt-2 text-[14px] text-[#F0F4FA] leading-relaxed">
          The official USCIS guidance to submit your work permit renewal before expiration.
        </p>
      </div>
    </div>
  );
}

function BottomCta() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Protect Your Right to Work Legally in the United States
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        Attorney Hardam Tripathi served with the U.S. Air Force JAG Corps, the
        DEA, and the U.S. Department of State. Trip Law, P.A. has guided clients
        through work permit eligibility, EAD renewals, and employment-based visa
        applications in all 50 states. Ensure your legal career is protected.
      </p>
      <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
        <p>Call (863) 599-6735 | Free Consultation</p>
        <p>1543 Lakeland Hills Blvd, Ste. 17, Lakeland, FL 33805</p>
      </div>
      <div className="mt-6">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#C9A84C] px-5 py-3 text-[15px] font-bold text-[#1A2B4A] hover:bg-[#d8bb68] rounded-md transition-colors"
        >
          Book Your Consultation
        </Link>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <p className="mb-5 text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        People Also Ask About Work Authorization and Pending Cases
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

export default function WorkInUsWhileImmigrationCasePending({
  allBlogsData,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {PENDING_CASE_WORK_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={PENDING_CASE_WORK_FEATURE_IMAGE}
                alt={PENDING_CASE_WORK_FEATURE_IMAGE_ALT}
                title={PENDING_CASE_WORK_FEATURE_IMAGE_TITLE}
                aria-describedby="work-pending-case-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {PENDING_CASE_WORK_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="work-pending-case-image-description"
                className="sr-only"
              >
                {PENDING_CASE_WORK_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              Yes, it’s possible once you have proper permission. Then you can work in the United States during your immigration process. A valid work permit comes before any job activity. For many, that means submitting Form I-765 to get what's called an EAD (Employment Authorization Document). Whether you qualify directly ties to your current visa category and the application already submitted.
            </Paragraph>

            <TakeawayPanel />

            <SectionHeading>
              What Is an Employment Authorization Document and Who Needs One?
            </SectionHeading>
            <Paragraph>
              An Employment Authorization Document is your official permission to earn a living in the U.S. USCIS issues it after reviewing your Form I-765. Think of it as the legal bridge between your pending case and your paycheck.
            </Paragraph>
            <Paragraph>
              Not everyone needs to file one. If you hold an H-1B, an L-1, or an O-1 visa, your employer-sponsored status already covers your right to work. You operate within the terms of that visa without any extra paperwork from you personally.
            </Paragraph>
            <Paragraph>
              But if you are adjusting status to a green card, waiting on an asylum decision, or in removal defense proceedings, you need that EAD card before your first shift at any job. Florida applicants in Lakeland, Tampa, and across the I-4 corridor sometimes assume a pending case is enough protection. It is not.
            </Paragraph>
            <Paragraph>
              At Trip Law, clients ask this question at their very first consultation more than almost any other. The answer never changes. Get your authorization first. Visit our <InternalLink href="/services">green card services page</InternalLink> if adjustment of status is your path.
            </Paragraph>

            <SectionHeading>
              Not All Pending Immigration Cases Qualify for Work Authorization
            </SectionHeading>
            <Paragraph>
              Not every pending case comes with the right to apply for an EAD. The table below covers the most common case types and their eligibility status.
            </Paragraph>

            <CaseEligibilityTable />

            <Paragraph>
              Adjustment of Status applicants can file Form I-765 at the same time they submit their I-485. USCIS calls this concurrent filing, and it saves meaningful time. VAWA petitioners and U Visa applicants receive faster consideration because of the humanitarian nature of those cases.
            </Paragraph>
            <Paragraph>
              If you are in removal proceedings with no active relief application on file, work authorization is generally off the table. You may take a look at our <InternalLink href="/services">asylum services</InternalLink> or <InternalLink href="/services">H-1B visa guide</InternalLink> to understand where your case fits.
            </Paragraph>

            <StatPanel />

            <SectionHeading>
              How Long Does USCIS Take to Process Your EAD Application in 2026?
            </SectionHeading>
            <Paragraph>
              These days, things move faster than they did during the worst delays back in 2022 and 2023. Most people now can expect USCIS to handle their I-765 within 3 to 5 months. Still, what actually happens hinges on the kind of request you made, which local office manages it, along with whether everything needed came through right away.
            </Paragraph>
            <Paragraph>
              Our survey of pending immigration cases handled at Trip Law shows that clients who submitted a concurrent I-485 and I-765 package received their EAD in an average of 3.2 months when the file was complete. Clients who missed documents or received a Request for evidence waited up to 7 months on average. That gap is months of income your household cannot get back.
            </Paragraph>

            <EadProcessingTimesChart />

            <Paragraph>
              Florida applicants should factor in that the Miami and Orlando USCIS field offices historically run slightly longer than the national average. Plan ahead. Check <ExternalLink href="https://egov.uscis.gov/processing-times/">current USCIS processing time estimates</ExternalLink> before you file.
            </Paragraph>
            <Paragraph>
              <h2>Your timeline matters. Do not guess it.</h2>
            </Paragraph>

            <MidPageCta />

            <SectionHeading>
              The 180-Day Asylum Clock: Working While Seeking Asylum
            </SectionHeading>
            <Paragraph>
              However, a mandatory waiting period applies. Federal law requires you to wait 180 days from the date your asylum application was properly filed before USCIS will even accept your EAD request. That 180-day clock is firm. No exceptions exist under the current policy.
            </Paragraph>
            <Paragraph>
              Right from the start, how you file your asylum request carries weight few consider. Missing pieces might reset deadlines or stall everything. When court handling kicks in instead of USCIS review, procedures adjust a bit - timing changes, too.
            </Paragraph>
            <Paragraph>
              Pending asylum seekers fill Florida in big numbers, more than most places across the nation. Coming mainly from parts of Latin America, the Caribbean, or West Africa, each person faces tight pressure after arrival - especially with children to feed by day 180. Yet trying to earn money before permission arrives risks everything, possibly breaking the chance at safety down the line.
            </Paragraph>
            <Paragraph>
              Learn more about the <InternalLink href="/services">asylum process</InternalLink> at Trip Law and how we protect your timeline.
            </Paragraph>

            <AsylumCasesChart />

            <SectionHeading>
              What Happens If Your EAD Expires Before Your Immigration Case Closes?
            </SectionHeading>
            <Paragraph>
              Around six months before your work permit runs out, USCIS suggests sending in a renewal. Even by 2026, it could take many weeks or longer to get a response. Putting off the paperwork too much, and working becomes risky.
            </Paragraph>
            <Paragraph>
              Most people applying these days get extra time - sometimes as much as 540 days - when waiting for their work permit to renew, thanks to changes made in 2024. Still, only certain types of applications qualify, meaning it pays to check if your situation counts before counting on the added months.
            </Paragraph>
            <Paragraph>
              Gaps in work authorization create real problems fast. Your employer gets nervous. Your income stops. Your housing stability takes a hit. Do not let it reach that point. A review with your attorney well before the expiration date costs far less than a lapse. Our team at Trip Law can also review whether any waivers might strengthen your ongoing case during renewal.
            </Paragraph>

            <RenewalStatHighlight />

            <SectionHeading>
              Working Without Authorization Can Hurt Your Immigration Case
            </SectionHeading>
            <Paragraph>
              The risks are written directly into federal law. Unauthorized employment is a ground of inadmissibility under the Immigration and Nationality Act. It can result in your current application being denied outright. In serious situations, it can trigger removal proceedings that undo years of legal effort.
            </Paragraph>
            <Paragraph>
              USCIS reviews employment history during case adjudication. Florida employers face increasing pressure to comply with E-Verify requirements, which creates a documented employment record. That record can show up in your immigration file. The distance between thinking you are okay and receiving a denial notice can be a matter of months.
            </Paragraph>
            <Paragraph>
              This is not the area where you take a chance. One unauthorized employment decision can close doors that took years to open and cost you thousands of dollars in legal fees to address. If you are unsure whether your current status allows you to work, talk to Trip Law before you accept a single shift.
            </Paragraph>

            <ComparisonPanel />

            <BottomCta />

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
