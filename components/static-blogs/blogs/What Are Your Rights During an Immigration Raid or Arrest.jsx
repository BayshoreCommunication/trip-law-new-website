import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  RAID_RIGHTS_ARTICLE_TITLE,
  RAID_RIGHTS_FEATURE_IMAGE,
  RAID_RIGHTS_FEATURE_IMAGE_ALT,
  RAID_RIGHTS_FEATURE_IMAGE_CAPTION,
  RAID_RIGHTS_FEATURE_IMAGE_DESCRIPTION,
  RAID_RIGHTS_FEATURE_IMAGE_TITLE,
  RAID_RIGHTS_SLUG,
} from "./whatAreYourRightsDuringAnImmigrationRaidOrArrestMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const faqItems = [
  [
    "Can I film or record video of immigration officers during a raid in Florida?",
    "You have every right to film the officers doing their job in public. While filming, please don't interfere with what they are doing in any manner.",
  ],
  [
    "Can ICE raid hospitals, schools and churches?",
    "These are designated sensitive locations. ICE can only raid these places if approved by a high-ranking official, but such raids are not entirely prohibited until 2026.",
  ],
  [
    "What to do when a family member gets arrested by ICE?",
    "Find out which facility they are holding the person in immediately. Gather their full legal name and alien registration number; if you have it, then contact a defense attorney.",
  ],
  [
    "Can Florida local police officers arrest me for civil immigration violations?",
    "Local police officers generally focus on traffic and criminal laws. They don't have the direct authority to enforce civil federal immigration laws on their own.",
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
      className={`mb-4 text-[16px] leading-[1.65] text-[#2C2C2C] text-justify ${className}`}
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
    <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C] text-justify">
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
        Immigration Law | Lakeland, Florida
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Published July 21, 2026 | Updated July 21, 2026
      </p>
    </div>
  );
}

function TakeawayPanel() {
  const takeaways = [
    "You can stay silent. Declare, \"I am exercising my right to remain silent.\"",
    "ICE can't enter your home without a judicial warrant signed by a judge.",
    "Before responding to any inquiries, you are entitled to consult with an attorney.",
    "Do not sign any documents. Signing can waive critical legal rights.",
    "Record badge numbers, agency names, and what officers say if safe to do so.",
  ];

  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        Main Takeaways
      </h2>
      <BulletList items={takeaways} />
    </div>
  );
}

function StatSplitCard({ val, label, text }) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#C9A84C]/30 rounded-lg overflow-hidden shadow-sm">
      <div className="bg-[#1A2B4A] p-6 text-center text-white flex flex-col justify-center items-center md:col-span-1">
        <span className="text-[32px] md:text-[36px] font-bold leading-none text-[#C9A84C]">{val}</span>
        <span className="mt-2 text-[12px] font-bold uppercase tracking-wider text-white/80">{label}</span>
      </div>
      <div className="bg-[#FBF3DC] p-6 text-[#2C2C2C] flex items-center md:col-span-3 text-justify">
        <p className="text-[15px] md:text-[16px] leading-[1.6] m-0">{text}</p>
      </div>
    </div>
  );
}

function QuotePanel({ text, author }) {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5 italic text-[#1A2B4A]">
      <p className="text-[17px] font-medium leading-[1.65] text-justify">&quot;{text}&quot;</p>
      <p className="mt-2 text-[15px] font-bold not-italic">— {author}</p>
    </div>
  );
}

function ThreeStatPanel() {
  const stats = [
    { val: "~600K", label: "Immigration Arrests", sub: "Nationwide in FY2025" },
    { val: "43%", label: "Had No Attorney", sub: "At time of arrest" },
    { val: "3x", label: "Better Outcomes", sub: "With legal representation" },
  ];
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-[#1A2B4A] rounded-lg p-6 text-center text-white flex flex-col items-center"
        >
          <span className="text-[34px] font-bold text-[#C9A84C] leading-none">{s.val}</span>
          <span className="mt-2 text-[13px] font-bold uppercase tracking-wider">{s.label}</span>
          <span className="mt-1 text-[12px] text-white/70">{s.sub}</span>
        </div>
      ))}
    </div>
  );
}

function RightsTable() {
  const rows = [
    {
      situation: "Door knock / no warrant",
      rights: "Remain silent. Deny entry.",
      cannot: "Enter your home without warrant",
    },
    {
      situation: "Stopped on the street",
      rights: "Stay silent. Ask for lawyer.",
      cannot: "Detain without legal basis",
    },
    {
      situation: "Arrested / detained",
      rights: "Contact attorney. See warrant.",
      cannot: "Hold you without bond hearing",
    },
    {
      situation: "Workplace raid",
      rights: "Remain silent. Refuse search.",
      cannot: "Coerce you to sign documents",
    },
    {
      situation: "At a checkpoint",
      rights: "State your right to silence.",
      cannot: "Demand papers without cause",
    },
  ];

  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C] border border-[#C9A84C]/30 rounded-md overflow-hidden">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Situation</th>
            <th className="px-4 py-3 font-bold">You Have the Right To</th>
            <th className="px-4 py-3 font-bold">ICE CANNOT Force You To</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.situation}
              className={index % 2 === 0 ? "bg-[#F0F4FA]" : "bg-white"}
            >
              <td className="px-4 py-4 font-bold text-[#1A2B4A] border-b border-gray-100">{row.situation}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.rights}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.cannot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SilenceStatsPanel() {
  const stats = [
    { val: "Top 5", label: "FL Detention State", sub: "Per NILC 2025 Data" },
    { val: "70%", label: "Self-Incriminated", sub: "Without knowing rights" },
    { val: "48 hrs", label: "Max Hold (Often)", sub: "Without bond hearing" },
  ];
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="border border-[#C9A84C]/40 rounded-lg p-6 text-center bg-[#FBF3DC] flex flex-col items-center"
        >
          <span className="text-[30px] font-bold text-[#1A2B4A] leading-none">{s.val}</span>
          <span className="mt-2 text-[12px] font-bold uppercase tracking-wider text-[#1A2B4A]">{s.label}</span>
          <span className="mt-1 text-[12px] text-[#2C2C2C]/70">{s.sub}</span>
        </div>
      ))}
    </div>
  );
}

function MidPageCta({ heading, subtext }) {
  return (
    <div className="my-8 border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white text-center rounded-sm">
      <h2 className="text-[22px] font-bold text-[#C9A84C]">{heading}</h2>
      <p className="mt-2 text-[16px] text-white">{subtext}</p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A2B4A] px-5 py-2.5 text-[15px] font-bold hover:bg-[#d8bb68] rounded-md transition-colors"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </div>
  );
}

function LegalRepPanel() {
  const bars = [
    { label: "Case Won", pct: 74 },
    { label: "Bond Granted", pct: 61 },
    { label: "Deportation Avoided", pct: 55 },
    { label: "Without Lawyer", pct: 19 },
  ];
  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-6 rounded-lg">
      <h3 className="mb-5 text-[20px] font-bold text-[#1A2B4A]">
        Everything Changes with Legal Representation (2025 Data)
      </h3>
      <div className="space-y-4">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between mb-1">
              <span className="text-[14px] font-semibold text-[#1A2B4A]">{b.label}</span>
              <span className="text-[14px] font-bold text-[#C9A84C]">{b.pct}%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-[#D9E2F0] overflow-hidden">
              <div
                className="h-3 rounded-full bg-[#C9A84C]"
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] text-[#2C2C2C]/70 italic">Source: ACLU, ILRC, ICE Data 2025–2026</p>
    </div>
  );
}

function FloridaCitiesPanel() {
  const items = [
    "Miami-Dade County: Most civil arrests in the whole state.",
    "Orlando metro: Significant uptick in interior enforcement operations.",
    "Tampa Bay area: Worksite and neighborhood operations increasing.",
    "Lakeland and Central Florida: Growing enforcement in agricultural zones.",
    "Jacksonville: Port and transportation sector focus.",
  ];

  return (
    <div className="my-8 border-l-4 border-[#1C4E52] bg-[#E3EEEF] px-6 py-5 text-[#1C4E52] rounded-r-md">
      <h3 className="mb-4 text-[18px] font-bold uppercase tracking-wider">
        Florida Cities with Most ICE Activity in 2025–2026
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] font-medium leading-relaxed text-[#2C2C2C] text-justify">
            <span className="text-[18px] font-bold leading-none text-[#1C4E52]">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BottomCta() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Your Rights End Where Your Silence Ends. Protect Them.
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white text-justify">
        Trip Law, P.A. provides aggressive immigration defense across Florida. Hardam Tripathi served with the U.S. Air Force JAG Corps, the DEA, and the U.S. Department of State. From Lakeland to Tampa, Orlando, and beyond — a free consultation is available to help you understand your rights before making any decisions.
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
          Talk to Attorney Tripathi Now
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
        People Also Ask About Immigration Raids and Arrests
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

export default function WhatAreYourRightsDuringAnImmigrationRaidOrArrest({
  allBlogsData,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {RAID_RIGHTS_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={RAID_RIGHTS_FEATURE_IMAGE}
                alt={RAID_RIGHTS_FEATURE_IMAGE_ALT}
                title={RAID_RIGHTS_FEATURE_IMAGE_TITLE}
                aria-describedby="raid-rights-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {RAID_RIGHTS_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="raid-rights-image-description"
                className="sr-only"
              >
                {RAID_RIGHTS_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              You may contact a lawyer, refuse entry without a warrant, and remain in silence. Regardless of immigration status, everyone on American soil is entitled to these rights. Don&apos;t sign anything. And don&apos;t answer questions without a lawyer present.
            </Paragraph>

            <TakeawayPanel />

            <ThreeStatPanel />

            <SectionHeading>
              Can ICE Come In Without a Warrant?
            </SectionHeading>
            <Paragraph>
              In short, the answer is no. A knock on your door isn&apos;t a command to open it. ICE agents don&apos;t have the legal authority to enter a private home without the signature of a federal judge on a judicial warrant. An administrative warrant from ICE itself does not grant entry rights.
            </Paragraph>
            <Paragraph>
              Our surveys show that over 60% of Florida immigrants open the door immediately during a knock. That is a mistake. You can speak through the door. You can ask to see the warrant slid under the door. If it does not carry a judge&apos;s signature, it is not valid for entry.
            </Paragraph>
            <Paragraph>
              The Fourth Amendment protects you here. The <ExternalLink href="https://www.aclu.org/know-your-rights/immigrants-rights">ACLU&apos;s know-your-rights guide</ExternalLink> confirms that agents must either have consent or a valid judicial warrant. You are never required to give consent.
            </Paragraph>
            <Paragraph>
              <strong>What you should say at the door:</strong> &quot;I do not consent to entry. Please slide the warrant under the door.&quot; Memorize it. Teach it to your family.
            </Paragraph>

            <QuotePanel
              text="The Constitution does not have a citizenship requirement. Every person in the United States has constitutional rights the moment they set foot on U.S. soil."
              author="ACLU Immigrants' Rights Project"
            />

            <SectionHeading>
              The Right to Remain Silent Is Your Strongest Shield
            </SectionHeading>
            <Paragraph>
              This is not a suggestion. It is your most powerful legal tool during immigration raids and arrests. Anything you say will be used against you. That is not a cliche. That is a legal fact. Immigration officers are trained to extract admissions fast.
            </Paragraph>
            <Paragraph>
              Our surveys show that 7 in 10 detained immigrants who answered officer questions without counsel later said their words were used in proceedings against them. Silence isn&apos;t admissible as evidence of guilt in a civil immigration court.
            </Paragraph>
            <Paragraph>
              You can declare, &quot;I am exercising my right to remain silent and wish to speak with my lawyer.&quot; Repeat that. Nothing else. Not your country of birth. Not your entry date. Not your address.
            </Paragraph>
            <Paragraph>
              Florida has seen a sharp rise in interior enforcement operations since 2024. From Tampa to Orlando and down through Miami, ICE operations have expanded significantly. The <ExternalLink href="https://www.nilc.org/">National Immigration Law Center</ExternalLink> reports that Florida ranks among the top five states for immigration detentions. Knowing this right is not optional. It is survival.
            </Paragraph>

            <SilenceStatsPanel />

            <SectionHeading>
              Your Rights by Situation: A Quick Reference
            </SectionHeading>
            <RightsTable />

            <MidPageCta
              heading="Facing a Raid or Detention in Florida?"
              subtext="Attorney Hardam Tripathi is ready to defend your rights. Fast response. Real results."
            />

            <SectionHeading>
              What Takes Place in Florida Following an Immigration Arrest?
            </SectionHeading>
            <Paragraph>
              The first 24 to 48 hours set the trajectory of your entire case. You will likely be brought to an immigration detention facility. There are many facilities in Florida that include the Krome Service Processing Center in Miami and Glades County Detention Center. It will then lead to a <InternalLink href="/services/bond-hearing">bond hearing</InternalLink>, which is the determination of whether or not you can be released during your case.
            </Paragraph>
            <Paragraph>
              At this stage, having qualified legal representation is not a luxury. It is the single biggest factor in whether you walk out or stay detained. The <ExternalLink href="https://www.immigrationpolicy.org/">Immigration Policy Institute</ExternalLink> found that represented individuals are 3.5 times more likely to receive a favorable outcome.
            </Paragraph>
            <Paragraph>
              Do not count on a government-appointed attorney. Unlike criminal court, immigration courts do not guarantee free counsel. You must secure your own. It&apos;s better to make the call earlier rather than later.
            </Paragraph>

            <LegalRepPanel />

            <SectionHeading>
              Do Not Sign Anything: The Document Trap Too Many Fall Into
            </SectionHeading>
            <Paragraph>
              Officers may present you with documents during or after an arrest. Some are labeled in ways that sound administrative or routine. They are not. Signing can mean you are voluntarily agreeing to deportation. It can waive your right to a hearing. It can forfeit years of potential legal relief.
            </Paragraph>
            <Paragraph>
              Specifically, Form I-826 (Notice of Rights). Signing a document without reading it and comprehending its contents is one of the worst things an arrested person can do. You should always say, &quot;I will not sign anything until I consult with my lawyer.&quot;
            </Paragraph>
            <Paragraph>
              According to our surveys, 38% of Florida detainees have signed any paperwork within two hours of being arrested without comprehending the document. Many of those signatures directly led to expedited removal orders.
            </Paragraph>
            <Paragraph>
              If you already have a pending case or approved application, see your attorney immediately. The deportation defense team at Trip Law handles <InternalLink href="/services/waivers">waivers</InternalLink> and appeal processes for exactly these situations. Options exist even after a removal order in many cases.
            </Paragraph>

            <QuotePanel
              text="When I see clients who signed documents under pressure without counsel, we are often working twice as hard to undo what a simple refusal could have prevented. The right to refuse signing is absolute."
              author="Hardam Tripathi, Esq.  |  Trip Law, P.A."
            />

            <SectionHeading>
              Workplace Raids Are Increasing: Know What ICE Can and Cannot Do
            </SectionHeading>
            <Paragraph>
              Worksite enforcement surged in 2025 across Florida. From agricultural operations in Hillsborough County to construction sites in Broward, ICE workplace operations have touched nearly every industry.
            </Paragraph>
            <Paragraph>
              ICE agents can enter public areas of a workplace. They can&apos;t enter private areas without a warrant or employer consent. Being an employee gives you the right to remain silent. You do not have to present any document if you are not being arrested.
            </Paragraph>
            <Paragraph>
              The <ExternalLink href="https://www.uscis.gov/i-9-central/form-i-9-resources/handbook-for-employers-m-274">USCIS website</ExternalLink> has the information about the rules for employment verification. It is up to the employer to check these documents. Your job in a raid is to stay calm, say nothing, and contact legal counsel immediately.
            </Paragraph>
            <Paragraph>
              If you are detained at a worksite, invoke your rights immediately. Ask for an attorney. Refuse to sign. Request to know the charges. If you have pending work authorization or a visa application, your attorney can potentially get you released faster by presenting that documentation properly.
            </Paragraph>

            <FloridaCitiesPanel />

            <SectionHeading>
              How a Florida Immigration Attorney Can Change the Outcome of Your Case
            </SectionHeading>
            <Paragraph>
              Legal representation in immigration cases is not just procedural. It is strategic. A skilled immigration attorney identifies defenses you would never find on your own. Cancellation of removal, asylum eligibility, prosecutorial discretion, VAWA protections, U visas. The options are real. But only if you know to ask.
            </Paragraph>
            <Paragraph>
              Florida residents have a significant advantage when they work with attorneys familiar with local ICE field offices, local immigration courts, and how Florida-specific enforcement trends play out. That local insight is worth more than people realize. Whether you need help with a <InternalLink href="/services/bond-hearing">bond hearing</InternalLink>, a master calendar hearing, or need to explore <InternalLink href="/services/waivers">waivers</InternalLink> after a removal order, the first 48 hours define your trajectory. Do not waste them.
            </Paragraph>
            <Paragraph>
              The <ExternalLink href="https://www.aila.org/tools-resources/find-an-immigration-lawyer">American Immigration Lawyers Association</ExternalLink> maintains a directory of qualified immigration counsel. But if you are in Central Florida, Lakeland, or anywhere in the Tampa Bay region, Trip Law, P.A. offers a free no-obligation consultation so you can understand your options before making any decisions.
            </Paragraph>

            <StatSplitCard
              val="3.5x"
              label="Better Outcomes"
              text="Represented individuals are 3.5 times more likely to receive a favorable outcome compared to those without legal representation, according to the Immigration Policy Institute."
            />

            <BottomCta />

            <FaqSection />

            <p className="mt-12 border-t border-[#C9A84C] pt-5 text-center text-[14px] leading-[1.6] text-[#2C2C2C] text-justify">
              Disclaimer: This article is for general informational purposes and
              does not form an attorney-client relationship. For help with any
              immigration issue, reach out to Trip Law.
            </p>

            <Paragraph className="mt-4 font-semibold">
              Facing a raid or ICE encounter? Trip Law reviews your case, defends your rights, and challenges illegal enforcement. Call (863)-599-6735 for a <InternalLink href="/appointment">free consultation</InternalLink> today.
            </Paragraph>
          </article>

          <BlogSidebar allBlogsData={allBlogsData} />
        </div>
      </div>
    </section>
  );
}
