import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  DENIED_APPLICATIONS_ARTICLE_TITLE,
  DENIED_APPLICATIONS_FEATURE_IMAGE,
  DENIED_APPLICATIONS_FEATURE_IMAGE_ALT,
  DENIED_APPLICATIONS_FEATURE_IMAGE_CAPTION,
  DENIED_APPLICATIONS_FEATURE_IMAGE_DESCRIPTION,
  DENIED_APPLICATIONS_FEATURE_IMAGE_TITLE,
  DENIED_APPLICATIONS_SLUG,
} from "./commonReasonsImmigrationApplicationsGetDeniedMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const faqItems = [
  [
    "Is one mistake going to result in denial?",
    "No, because most mistakes usually result in an RFE, not denial."
  ],
  [
    "Can I resubmit my application immediately after getting a denial?",
    "Yes, re-filing can sometimes be faster than appealing, depending on the reason for denial."
  ],
  [
    "Are all denials from the immigration process eligible for appeal?",
    "No, some kinds of benefits require a motion, not an appeal."
  ],
  [
    "Is there any explanation of why the USCIS denied my application?",
    "Yes, your denial notice will contain the exact reasons for that decision."
  ],
  [
    "Does the NOID mean that the case is denied?",
    "No, you get a fair opportunity to react to the NOID first."
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
        Hardam Tripathi | TripLaw | Published July 8, 2026 | Updated July 8, 2026
      </p>
    </div>
  );
}

function TakeawayPanel() {
  const takeaways = [
    "Missing documents cause more denials than any other single reason.",
    "USCIS denied about 11 percent of all cases in 2025.",
    "A late or incomplete RFE response can end your case fast.",
    "Criminal history almost always needs legal review before you file.",
    "You usually have only 30 days to appeal a denial.",
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

function WarningPanel() {
  return (
    <div className="my-8 border-l-4 border-[#8B2635] bg-[#F8E8EA] px-6 py-5 text-[#8B2635] text-justify rounded-r-md">
      <h3 className="mb-2 text-[18px] font-bold uppercase tracking-wider flex items-center gap-2">
        ⚠️ WATCH OUT
      </h3>
      <p className="text-[16px] font-semibold mb-1">
        Never leave a past arrest off your immigration paperwork.
      </p>
      <p className="text-[15px] leading-[1.6] text-gray-800">
        Misrepresentation can create a permanent bar far worse than the original charge.
      </p>
    </div>
  );
}

function MidPageCta() {
  return (
    <div className="my-8 border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white text-center rounded-sm">
      <h3 className="text-[22px] font-bold text-[#C9A84C]">
        Don&apos;t Let One Missing Document Sink Your Case.
      </h3>
      <p className="mt-2 text-[16px] text-white">
        Trip Law reviews your file before USCIS finds the gaps.
      </p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A2B4A] px-5 py-2.5 text-[15px] font-bold hover:bg-[#d8bb68] rounded-md transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    {
      option: "Motion to reopen",
      req: "New evidence not in the original file",
      use: "Cases with fresh documentation",
    },
    {
      option: "Motion to reconsider",
      req: "Proof USCIS misapplied law or policy",
      use: "Clear legal or factual errors",
    },
    {
      option: "Refiling the case",
      req: "A corrected, stronger application",
      use: "Fixable paperwork or evidence gaps",
    },
    {
      option: "Appeal to AAO",
      req: "Formal review of the denial record",
      use: "Complex eligibility disputes",
    },
  ];

  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C] border border-[#C9A84C]/30 rounded-md overflow-hidden">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Option</th>
            <th className="px-4 py-3 font-bold">What It Requires</th>
            <th className="px-4 py-3 font-bold">Best Used For</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.option}
              className={index % 2 === 0 ? "bg-[#F0F4FA]" : "bg-white"}
            >
              <td className="px-4 py-4 font-bold text-[#1A2B4A] border-b border-gray-100">{row.option}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.req}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChecklistPanel() {
  const items = [
    "Every form field is complete, with no blanks left.",
    "Every signature is in place where required.",
    "Supporting evidence matches every claim made on the forms.",
    "Any criminal history has been reviewed with an attorney.",
    "Your current address is updated with USCIS.",
  ];

  return (
    <div className="my-8 border-l-4 border-[#1C4E52] bg-[#E3EEEF] px-6 py-5 text-[#1C4E52] rounded-r-md">
      <h3 className="mb-4 text-[18px] font-bold uppercase tracking-wider">
        What To Confirm Before You File Anything
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] font-medium leading-relaxed">
            <span className="text-[18px] font-bold leading-none text-[#1C4E52]">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineSteps() {
  const steps = [
    { label: "READ IT", desc: "Read the denial notice fully, twice." },
    { label: "CONFIRM THE CLOCK", desc: "Confirm your exact deadline, usually 30 days." },
    { label: "CHOOSE A PATH", desc: "Decide between a motion, an appeal, or refiling." },
    { label: "GATHER EVIDENCE", desc: "Gather new evidence if you plan to reopen the case." },
    { label: "FILE ON TIME", desc: "File the correct form before the deadline closes." },
  ];

  return (
    <div className="my-8 bg-[#F9F9F9] p-6 border border-gray-200 rounded-md">
      <h3 className="mb-4 text-[20px] font-bold text-[#1A2B4A]">
        What To Do the Moment You Get a Denial Notice
      </h3>
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A84C] text-[#1A2B4A] flex items-center justify-center font-bold text-[14px]">
              {idx + 1}
            </div>
            <div className="text-justify">
              <span className="font-bold text-[#1A2B4A] uppercase text-[15px]">{step.label}: </span>
              <span className="text-[16px] text-[#2C2C2C]">{step.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BottomCta() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Worried Your Application Might Get Denied?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white text-justify">
        Attorney Hardam Tripathi served with the U.S. Air Force JAG Corps, the DEA, and the U.S. Department of State. Trip Law, P.A. has guided clients through visa, residency, and citizenship denials, ensuring proper evidence and swift appeals. Do not navigate this complex process alone.
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
        People Also Ask About Immigration Application Denials
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

export default function CommonReasonsImmigrationApplicationsGetDenied({
  allBlogsData,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {DENIED_APPLICATIONS_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={DENIED_APPLICATIONS_FEATURE_IMAGE}
                alt={DENIED_APPLICATIONS_FEATURE_IMAGE_ALT}
                title={DENIED_APPLICATIONS_FEATURE_IMAGE_TITLE}
                aria-describedby="denied-applications-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {DENIED_APPLICATIONS_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="denied-applications-image-description"
                className="sr-only"
              >
                {DENIED_APPLICATIONS_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph className="text-justify">
              Immigration applications get denied for a few repeat reasons. Missing documents, weak evidence, prior violations, criminal history, and missed deadlines top the list. USCIS denied about 11% of all cases last year. Most of those denials were preventable with better preparation.
            </Paragraph>

            <TakeawayPanel />

            <StatSplitCard
              val="11.1%"
              label="USCIS Denial Rate"
              text="Overall USCIS denial rates climbed to 11.1% by Q4 FY2025, up from 8.6% a decade earlier, per American Immigration Council data."
            />

            <Paragraph className="italic text-[#1A2B4A] font-semibold text-justify">
              Here&apos;s exactly where most applications fall apart and how to fix it.
            </Paragraph>

            <SectionHeading>
              What Are the Most Common Reasons USCIS Denies Applications
            </SectionHeading>
            <Paragraph>
              Most denials trace back to five issues. Missing evidence, eligibility gaps, prior violations, criminal history, and paperwork errors. USCIS adjudicators compare your forms against your supporting evidence. Gaps between the two raise red flags fast. Incomplete forms get rejected before they are even reviewed. A missing signature or blank field is enough.
            </Paragraph>
            <Paragraph>
              Eligibility issues come next on the list. Some applicants file for a category they do not qualify for. A prior overstay or visa violation can block approval entirely, as outlined in the State Department&apos;s <ExternalLink href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html">visa denial grounds</ExternalLink>. Misrepresentation on any form creates a permanent problem.
            </Paragraph>
            <Paragraph>
              Even small inconsistencies between forms raise real concern. Lakeland and Polk County filers see the same scrutiny. Federal rules do not change by zip code. These five issues explain why immigration applications get denied most.
            </Paragraph>

            <QuotePanel
              text="Most denials we review share the same root cause. Thin evidence filed without anyone checking it first."
              author="Hardam Tripathi, Esq., Trip Law, Lakeland FL"
            />

            <SectionHeading>
              Why Does Missing or Incomplete Evidence Lead to a Denial
            </SectionHeading>
            <Paragraph>
              Weak evidence is the single biggest cause of denials. USCIS needs proof, not just a completed form. A relationship case needs more than a marriage certificate. Joint bank accounts, leases, and photos build a real picture. An employment based case needs detailed proof of the job offer. Vague letters from employers rarely satisfy an officer.
            </Paragraph>
            <Paragraph>
              When evidence is thin, USCIS issues a Request for Evidence first. This gives you a real second chance to fix things. Miss that window, and the case usually gets denied outright.
            </Paragraph>
            <Paragraph>
              Save every document related to your case from day one. Bank statements, tax returns, and old emails matter most. Photos without dates or context rarely convince an officer. <ExternalLink href="https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data">USCIS data</ExternalLink> shows RFE volume keeps climbing year over year. USCIS usually gives 30 to 87 days to respond. Treat every RFE like a final deadline, not a suggestion. Officers read inconsistent dates as a credibility problem. A disorganized filing makes a strong case look weak on paper.
            </Paragraph>

            <SectionHeading>
              How Does a Criminal Record Affect Your Immigration Case
            </SectionHeading>
            <Paragraph>
              A criminal record does not automatically end your case. It does require careful legal review before anything gets filed. Some convictions create permanent bars to almost every benefit. Others can be overcome with strong rehabilitation evidence. Our <InternalLink href="/blog/how-criminal-charges-can-impact">criminal charges guide</InternalLink> walks through this in more detail. Even a dismissed or expunged charge can resurface in federal records. USCIS runs its own background check regardless of state outcomes.
            </Paragraph>
            <Paragraph>
              Leaving a charge off your form is a serious mistake. Misrepresentation can create a bar worse than the original charge, a permanent ground spelled out in the State Department&apos;s <ExternalLink href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html">misrepresentation rules</ExternalLink>. Full disclosure, paired with context, almost always works better than silence.
            </Paragraph>
            <Paragraph>
              A <InternalLink href="/services/waivers">waiver</InternalLink> may be available depending on the specific ground involved. A waiver application can take many months to resolve. Start that process early, never after a denial arrives.
            </Paragraph>

            <WarningPanel />

            <SectionHeading>
              What Happens If You Miss a USCIS Deadline or RFE
            </SectionHeading>
            <Paragraph>
              Missing a deadline can end your case without warning. USCIS rarely grants extensions once a deadline has passed.
            </Paragraph>
            <Paragraph>
              A Request for Evidence comes with a strict response window. Respond fully, and respond before the deadline listed on the notice. A late response is treated like no response at all. Some applicants also miss <InternalLink href="/blog/what-to-expect-during-a-uscis-interview-and-how-to-prepare">USCIS interview</InternalLink> notices entirely. An uncollected interview notice does not pause your case. It can lead straight to a denial or an abandonment finding.
            </Paragraph>
            <Paragraph>
              Address changes matter just as much as documents do. USCIS mails notices to whatever address sits on file. Update your address the same week you move, every single time. Florida hurricane disasters can sometimes extend certain deadlines. One missed notice can undo months of careful preparation.
            </Paragraph>

            <StatSplitCard
              val="30 Days"
              label="To Appeal a Denial"
              text="Most Form I-290B motions and appeals must be filed within 30 days of the decision, or 33 days if mailed."
            />

            <MidPageCta />

            <SectionHeading>
              Can a Denied Immigration Application Be Fixed or Appealed
            </SectionHeading>
            <Paragraph>
              Many denials can be appealed or reopened within thirty days. The right path depends on what actually went wrong.
            </Paragraph>
            <Paragraph>
              A motion to reopen works when you have new evidence. A motion to reconsider works when USCIS misapplied the law. Both get filed using <ExternalLink href="https://www.uscis.gov/i-290b">Form I-290B</ExternalLink> in most case types. Naturalization cases use Form N-336 instead of I-290B.
            </Paragraph>
            <Paragraph>
              Some applicants choose to refile instead of appealing. Refiling can move faster than waiting on a motion decision. See the official <ExternalLink href="https://www.uscis.gov/forms/all-forms/questions-and-answers-appeals-and-motions">appeals and motions FAQ</ExternalLink> for how USCIS reviews each option.
            </Paragraph>
            <Paragraph>
              The right choice depends on your specific denial reason. Each option carries its own timeline and evidence rules. Appeals to the AAO can take many months to resolve. This is where comparing your options actually helps.
            </Paragraph>

            <div className="mb-4 mt-10 border-t-2 border-[#C9A84C] pt-4">
              <h3 className="border-l-4 border-[#C9A84C] pl-4 text-[20px] font-bold leading-tight text-[#1A2B4A]">
                Comparing Your Options After a Denial
              </h3>
            </div>
            
            <ComparisonTable />

            <QuotePanel
              text="A clean record on paper does not always mean a clean federal file. Old charges resurface more often than people expect."
              author="Florida Immigration Case Review Specialist"
            />

            <SectionHeading>
              How Does an Immigration Attorney Help You Avoid a Denial
            </SectionHeading>
            <Paragraph>
              An attorney catches gaps before USCIS does. That review alone prevents a large share of avoidable denials. A lawyer reviews your forms against your actual evidence first. They flag missing documents while there is time to fix them. They also flag criminal history before it becomes a surprise.
            </Paragraph>
            <Paragraph>
              An attorney knows which <ExternalLink href="https://www.americanimmigrationcouncil.org/blog/uscis-backlogs-processing-trends-dashboard/">RFEs</ExternalLink> are routine and which signal trouble. Deadlines get tracked on a calendar, not from memory. If a denial happens anyway, an attorney moves fast. That speed often matters more than people realize.
            </Paragraph>
            <Paragraph>
              Trip Law also tracks every form version USCIS updates. Outdated forms get rejected just as fast as missing ones. Many clients call us right after their first RFE. We review every case before USCIS ever sees it. Trip Law has handled cases across Lakeland, Tampa, and Orlando.
            </Paragraph>

            <ChecklistPanel />

            <TimelineSteps />

            <BottomCta />

            <FaqSection />

            <p className="mt-12 border-t border-[#C9A84C] pt-5 text-center text-[14px] leading-[1.6] text-[#2C2C2C] text-justify">
              Disclaimer: This article is for general informational purposes and
              does not form an attorney-client relationship. For help with any
              immigration issue, reach out to Trip Law.
            </p>

            <Paragraph className="mt-4 font-semibold text-justify">
              Worried your case is headed for a denial? Trip Law reviews your forms, evidence, and timeline before you file. Call (863)-599-6735 for a <InternalLink href="/appointment">free consultation</InternalLink> today.
            </Paragraph>
          </article>

          <BlogSidebar allBlogsData={allBlogsData} />
        </div>
      </div>
    </section>
  );
}
