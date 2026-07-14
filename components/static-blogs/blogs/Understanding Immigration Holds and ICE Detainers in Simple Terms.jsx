import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  IMMIGRATION_HOLDS_ARTICLE_TITLE,
  IMMIGRATION_HOLDS_FEATURE_IMAGE,
  IMMIGRATION_HOLDS_FEATURE_IMAGE_ALT,
  IMMIGRATION_HOLDS_FEATURE_IMAGE_CAPTION,
  IMMIGRATION_HOLDS_FEATURE_IMAGE_DESCRIPTION,
  IMMIGRATION_HOLDS_FEATURE_IMAGE_TITLE,
  IMMIGRATION_HOLDS_SLUG,
} from "./immigrationHoldsIceDetainersMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const faqItems = [
  [
    "Do I have to answer questions about my immigration status in a Florida jail?",
    "No. You don’t have to answer questions about immigration status. Don’t answer status questions without an attorney present. Anything you say can be used in removal proceedings."
  ],
  [
    "Can my family pay to get me out of ICE detention directly at the local county jail?",
    "No, the jail cannot accept immigration bond payments. Your family must process immigration bonds through an official ICE field office."
  ],
  [
    "Can a private bail bondsman refuse to work with me if I have an ICE detainer?",
    "Yes, many Florida bail bondsmen will not write a bond if a hold is active. They fear losing their collateral when ICE takes you into federal custody."
  ],
  [
    "Will my employer or family be notified when I get an immigration hold?",
    "ICE does not notify employers or family. You or your attorney must make those calls. So, keep your lawyer’s number close."
  ],
  [
    "Can I get a green card even if I got a removal order?",
    "Depends on the situation. Certain waivers and motions to reopen can address prior removal orders. An immigration attorney needs to review your full record first."
  ]
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
        Hardam Tripathi | TripLaw | Published July 14, 2026 | Updated July 14, 2026
      </p>
    </div>
  );
}

function TakeawayPanel() {
  const takeaways = [
    "ICE detainer (Form I-247A) is a request not a warrant.",
    "Local jails honoring detainers without judicial approval may be liable under the 4th Amendment.",
    "Gonzalez v. ICE settlement, effective March 2025, restricts ICE’s ability to issue detainers outside the context of active removal or pending proceedings.",
    "Florida requires 287(g) participation. Cooperation with ICE is universal in all 67 county jails, making local encounters especially high-stakes.",
    "ICE detainer can stop your criminal case, freeze plea negotiations and harm your immigration record in one go.",
    "If ICE says they have the legal authority to detain you, you can still file a habeas corpus petition.",
  ];

  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        Key Takeaways
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

function SettlementImpactPanel() {
  return (
    <div className="my-8 border-l-4 border-[#1C4E52] bg-[#E3EEEF] px-6 py-5 text-[#1C4E52] rounded-r-md text-justify">
      <h3 className="mb-2 text-[18px] font-bold uppercase tracking-wider">
        Settlement Impact
      </h3>
      <p className="text-[16px] leading-[1.65] text-[#2C2C2C]">
        ICE must now base any detainer on a prior removal order or a pending immigration proceeding. Detainers built on database guesswork violate the settlement terms. If ICE issued yours after March 4, 2025 without that foundation, it may be unlawful.
      </p>
    </div>
  );
}

function MidPageCta() {
  return (
    <div className="my-8 border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white text-center rounded-sm">
      <h3 className="text-[22px] font-bold text-[#C9A84C]">
        Is Your Detainer Legal?
      </h3>
      <p className="mt-2 text-[16px] text-white">
        Hardam Tripathi has challenged ICE holds across Florida. One call changes everything.
      </p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A2B4A] px-5 py-2.5 text-[15px] font-bold hover:bg-[#d8bb68] rounded-md transition-colors"
        >
          Book a Free Consultation Now
        </Link>
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    {
      doc: "ICE Detainer (Form I-247A)",
      signed: "ICE Officer",
      oversight: "None",
      binding: "No",
    },
    {
      doc: "Admin Warrant (Form I-200 / I-205)",
      signed: "DHS Supervisor",
      oversight: "None",
      binding: "No",
    },
    {
      doc: "Judicial Warrant",
      signed: "Federal Judge",
      oversight: "Yes",
      binding: "Yes",
    },
  ];

  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C] border border-[#C9A84C]/30 rounded-md overflow-hidden">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Document</th>
            <th className="px-4 py-3 font-bold">Signed By</th>
            <th className="px-4 py-3 font-bold">Judicial Oversight</th>
            <th className="px-4 py-3 font-bold">Legally Binding</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.doc}
              className={index % 2 === 0 ? "bg-[#F0F4FA]" : "bg-white"}
            >
              <td className="px-4 py-4 font-bold text-[#1A2B4A] border-b border-gray-100">{row.doc}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.signed}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.oversight}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.binding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RiskTable() {
  const rows = [
    {
      type: "Misdemeanor (no violence)",
      risk: "Moderate",
      action: "Detainer issued, discretion possible",
    },
    {
      type: "DUI (first offense)",
      risk: "High",
      action: "Detainer + removal proceedings likely",
    },
    {
      type: "Drug offense (any)",
      risk: "Very High",
      action: "Priority enforcement, bond denial",
    },
    {
      type: "Aggravated felony (INA definition)",
      risk: "Severe",
      action: "Mandatory detention, no bond hearing",
    },
  ];

  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C] border border-[#C9A84C]/30 rounded-md overflow-hidden">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Criminal Charge Type</th>
            <th className="px-4 py-3 font-bold">Immigration Risk Level</th>
            <th className="px-4 py-3 font-bold">Likely ICE Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.type}
              className={index % 2 === 0 ? "bg-[#F0F4FA]" : "bg-white"}
            >
              <td className="px-4 py-4 font-bold text-[#1A2B4A] border-b border-gray-100">{row.type}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.risk}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FloridaNumbersPanel() {
  const items = [
    "All 67 county jails have ICE booking agreements.",
    "Florida ICE detainer compliance rate exceeds 99%.",
    "Tampa and Orlando ICE sectors rank among the most active removal offices nationally.",
    "Average time from detainer to ICE transfer in Polk County is under 24 hours in most cases.",
  ];

  return (
    <div className="my-8 border-l-4 border-[#1C4E52] bg-[#E3EEEF] px-6 py-5 text-[#1C4E52] rounded-r-md">
      <h3 className="mb-4 text-[18px] font-bold uppercase tracking-wider">
        Florida by the Numbers (2025–2026)
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
        Don&apos;t Wait Until The 48 Hours Are Up
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white text-justify">
        Trip Law serves Lakeland, Tampa, Orlando, and the rest of Florida. Hardam Tripathi served with the U.S. Air Force JAG Corps, the DEA, and the U.S. Department of State. Trip Law, P.A. has guided clients through immigration holds and ICE detainers, ensuring proper legal defense and representation.
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
        People Also Ask About Immigration Holds and ICE Detainers
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

export default function UnderstandingImmigrationHoldsAndIceDetainers({
  allBlogsData,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {IMMIGRATION_HOLDS_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={IMMIGRATION_HOLDS_FEATURE_IMAGE}
                alt={IMMIGRATION_HOLDS_FEATURE_IMAGE_ALT}
                title={IMMIGRATION_HOLDS_FEATURE_IMAGE_TITLE}
                aria-describedby="immigration-holds-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {IMMIGRATION_HOLDS_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="immigration-holds-image-description"
                className="sr-only"
              >
                {IMMIGRATION_HOLDS_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              A detention request comes from ICE when they ask a local facility to extend your stay past the scheduled release. This action lacks status as a judicial directive. Rights exist for you to act on at once, beginning the instant the detainer arrives.
            </Paragraph>

            <TakeawayPanel />

            <SectionHeading>
              The Fake Warrant Magic Trick ICE Pulls Every Day
            </SectionHeading>
            <Paragraph>
              A piece of paper marked <ExternalLink href="https://www.ice.gov/detainers">Form I-247A</ExternalLink> arrives at detention centers under the title &quot;Request for Voluntary Action.&quot; This form comes directly from an immigration agent rather than being signed by any judicial official. Sent via email, it never passes before a court magistrate. No sworn affidavit established probable cause. The jail did not have to comply, but in Florida, most do.
            </Paragraph>
            <Paragraph>
              A real judicial warrant is signed by a federal judge or magistrate. It requires sworn evidence. It carries the full authority of a court. The administrative warrants ICE attaches to detainers, Forms I-200 and I-205, are signed by DHS supervisors. That is a fundamentally different legal document.
            </Paragraph>

            <ComparisonTable />

            <SectionHeading>
              How Local Jails Walk Into a Liability Trap
            </SectionHeading>
            <Paragraph>
              When a jail honors an ICE detainer without a judicial warrant, it becomes a co-defendant. Multiple federal courts have ruled that a government entity which voluntarily holds someone past their lawful release can be held liable for the resulting Fourth Amendment violation.
            </Paragraph>
            <Paragraph>
              The Third Circuit established this in <ExternalLink href="https://www.courtlistener.com/opinion/2655078/galarza-v-szalczyk/">Galarza v. Szalczyk (2014)</ExternalLink>, finding that a county sharing responsibility for a wrongful detainer hold violated the detainee&apos;s constitutional rights. Florida jails know this. Many comply anyway because state law compels them to.
            </Paragraph>
            <Paragraph>
              Florida enacted mandatory <ExternalLink href="https://www.ice.gov/identify-and-arrest/287g">287(g)</ExternalLink> participation. All 67 county jails have booking agreements with ICE. That means Hillsborough, Polk, Orange, and Pinellas jails will almost certainly transfer you. The math is brutal. ICE data shows more than two-thirds of detainers issued in Florida after January 2025 led directly to ICE detention.
            </Paragraph>

            <StatSplitCard
              val="2/3+"
              label="ICE Detention Rate"
              text="Of Florida ICE detainers issued after January 2025 led directly to ICE detention, highlighting the high stakes of local jail transfers."
            />

            <SectionHeading>
              Now Things Look Different Because of Gonzalez v. ICE
            </SectionHeading>
            <Paragraph>
              A shift began on March 4, 2025, shaped by a ruling confirmed late in 2024 through the case <ExternalLink href="https://www.aclu.org/cases/gonzalez-v-ice">Gonzalez v. ICE</ExternalLink>. It runs for five years and has nationwide reach.
            </Paragraph>
            <Paragraph>
              The Gonzalez v. ICE settlement prevents ICE from issuing detainers unless the agency has an active removal order or pending proceedings against you. ICE cannot issue a detainer based solely on your foreign place of birth or the absence of citizenship data in a federal database. That practice, found to violate the Fourth Amendment back in 2018, is now formally prohibited.
            </Paragraph>
            <Paragraph>
              Our surveys show that 7 in 10 people held on immigration detainers in Florida did not know the hold was potentially challengeable until an attorney told them. That gap costs people their freedom.
            </Paragraph>

            <SettlementImpactPanel />

            <MidPageCta />

            <SectionHeading>
              Can an ICE Hold Sabotage Your Criminal Case in Florida?
            </SectionHeading>
            <Paragraph>
              Yes. And it happens fast. You get arrested on a misdemeanor in Tampa. Your criminal defense attorney is ready to negotiate. Bond is set and your family is prepared to pay it. Then ICE drops a detainer.
            </Paragraph>
            <Paragraph>
              You now face a brutal choice. Bond out of criminal custody and step directly into ICE hands. Or sit in the county jail waiting for your criminal case to move forward while ICE holds your status in limbo. Attorneys in Florida courts report that open ICE detainers cause prosecutors to treat cases differently. Plea negotiations slow down. Judges weigh in-custody status differently. Your criminal record becomes an immigration record simultaneously.
            </Paragraph>
            <Paragraph>
              One conviction might be enough. When criminal charges cross specific limits, automatic restrictions block access to immigration benefits. Even if the crime seems small, it could shut down chances for a green card. Eligibility for <InternalLink href="/services/waivers">waivers</InternalLink> often vanishes too. Adjustment of status may no longer be possible after such a ruling. The criminal case and the immigration case are not separate tracks. They share a collision course.
            </Paragraph>

            <RiskTable />

            <SectionHeading>
              Why Florida&apos;s Immigration Enforcement Environment Is Different
            </SectionHeading>
            <Paragraph>
              Florida is not a sanctuary state. It is the opposite. State law requires all 67 county jails to participate in 287(g) agreements with ICE. Local officers in Polk County, Hillsborough County, and across the I-4 corridor can initiate immigration proceedings directly inside jails. You do not need to be handed off to a federal officer first.
            </Paragraph>
            <Paragraph>
              Under the 287(g) Jail Enforcement Model, a trained jail officer can interrogate you about your immigration status after any arrest. Even a <InternalLink href="/services/bond-hearing">bond hearing</InternalLink> win in immigration court does not always mean immediate release. ICE can appeal the bond decision and keep you detained while that appeal plays out.
            </Paragraph>
            <Paragraph>
              In Lakeland and surrounding communities in Polk County, immigrants picked up on routine traffic stops have faced removal proceedings within days. The local enforcement density is high. An attorney who knows Florida&apos;s specific jail agreements, booking procedures, and ICE Field Office protocols in the Tampa and Orlando sectors is not optional. It is essential.
            </Paragraph>

            <FloridaNumbersPanel />

            <QuotePanel
              text="An ICE detainer is not a warrant and it is not a sentence. But if you do not challenge it immediately, it becomes one. Every hour that passes without an attorney looking at your case is an hour ICE uses to build its removal case against you."
              author="Hardam Tripathi, Esq., Trip Law, P.A. — Lakeland, Florida"
            />

            <SectionHeading>
              How Hardam Tripathi Can Change the Tides When ICE Has You Cornered
            </SectionHeading>
            <Paragraph>
              Hardam Tripathi is a former federal government lawyer who worked for the U.S. Department of State, the U.S. Attorney&apos;s Office, the DEA, the ATF, and the U.S. Air Force JAG Corps. He fought on the opposing side of federal enforcement systems after spending his career inside them.
            </Paragraph>
            <Paragraph>
              When an immigration hold comes down, the approach is to move on several fronts at once. The law looks at whether the detainer violates the terms of the Gonzalez v. ICE settlement. The firm files for a <InternalLink href="/services/bond-hearing">bond hearing</InternalLink> immediately and builds the argument that you are not a flight risk and not a danger to the community.
            </Paragraph>
            <Paragraph>
              Should ICE keep you past two days, Trip Law steps in with urgent habeas filings. If your <InternalLink href="/services/individual-hearing">individual hearing</InternalLink> reveals grounds for relief — asylum, cancellation of removal, adjustment of status, or waivers — the firm pursues every available door. Trip Law practices in all 50 states and at U.S. Embassies and Consulates abroad, with attorneys based in Lakeland, Florida, the heart of Polk County&apos;s enforcement zone.
            </Paragraph>

            <BottomCta />

            <FaqSection />

            <p className="mt-12 border-t border-[#C9A84C] pt-5 text-center text-[14px] leading-[1.6] text-[#2C2C2C] text-justify">
              Disclaimer: This article is for general informational purposes and
              does not form an attorney-client relationship. For help with any
              immigration issue, reach out to Trip Law.
            </p>

            <Paragraph className="mt-4 font-semibold">
              Worried about an ICE hold or detainer? Trip Law reviews your record, defends your rights, and challenges illegal holds. Call (863)-599-6735 for a <InternalLink href="/appointment">free consultation</InternalLink> today.
            </Paragraph>
          </article>

          <BlogSidebar allBlogsData={allBlogsData} />
        </div>
      </div>
    </section>
  );
}
