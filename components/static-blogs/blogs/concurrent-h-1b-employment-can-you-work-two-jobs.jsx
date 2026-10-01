import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_ARTICLE_DESCRIPTION,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_ARTICLE_TITLE,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_CANONICAL_URL,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_ALT,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_CAPTION,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_DESCRIPTION,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_TITLE,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_DESCRIPTION,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_TITLE,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_SLUG,
} from "./concurrentH1BEmploymentCanYouWorkTwoJobsMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const keyTakeaways = [
  "Concurrent H-1B is allowed. Each employer must file. You can start only after approval in most cases. Your pay and hours must match filings. Your work must match the role.",
  "Each employer files its own H-1B petition.",
  "Your second job can be part-time.",
  "You must keep the first job active.",
  "You must meet wage rules for both jobs.",
  "You must track hours and locations.",
  "Your I-94 and status must stay valid.",
];

const separateJobRequirements = [
  "Labor Condition Application (LCA)",
  "H-1B petition package",
  "Terms for role, pay, and worksite",
];

const wageRulesFactors = [
  "location",
  "skill level",
  "job code",
  "hours and pay type",
];

const employerDocuments = [
  "offer letter",
  "duties and requirements",
  "pay details and hours",
  "worksite and reporting structure",
  "LCA and posting proof",
  "company support letter",
];

const employeeDocuments = [
  "passport ID page",
  "visa stamp, if any",
  "I-94 record",
  "recent pay stubs from primary job",
  "most recent I-797 approvals",
  "degree and transcripts",
  "resume and experience letters",
];

const comparisonRows = [
  [
    "Is It Legal?",
    "Yes, with two petitions.",
    "Yes, with a new petition.",
    "No, usually violates status.",
  ],
  [
    "How Many Employers?",
    "Two or more.",
    "One at a time.",
    "Any, but unauthorized.",
  ],
  [
    "Can You Work Immediately?",
    "Often wait for approval.",
    "Often can start after filing.",
    "You should not start.",
  ],
  [
    "Risk Level",
    "Medium if managed well.",
    "Medium but common.",
    "High, can cause denial.",
  ],
  [
    "Wage And LCA Needed?",
    "Yes, for each job.",
    "Yes.",
    "No filing, but still illegal.",
  ],
];

const remoteWorkQuestions = [
  "Where will I work most days?",
  "Will I travel to client sites?",
  "Will my home be a worksite?",
  "Will the company file amendments if needed?",
];

const statusRisks = [
  "you start work too early",
  "you work at unfiled locations",
  "your hours do not match LCA terms",
  "your employer underpays",
  "your primary job ends and you do not act",
];

const employerPermissionQuestions = [
  "Does your role include exclusivity clauses?",
  "Does your employer require disclosure?",
  "Are there conflict rules?",
];

const faqItems = [
  [
    "Can You Work Two H-1B Jobs At The Same Time?",
    "Yes. You can work two H-1B jobs. Each employer must file its own H-1B petition. You must follow each role’s pay, hours, and location terms.",
  ],
  [
    "Do You Need A New Lottery Pick For A Second H-1B Job?",
    "Current H-1B status eliminates the lottery requirement. A concurrent petition bypasses new lottery draws. The case requires official USCIS approval.",
  ],
  [
    "Can Your Second H-1B Job Be Part-Time?",
    "Yes. Part-time concurrent H-1B is common. The employer must list hours and pay clearly. The LCA must match the part-time arrangement and location.",
  ],
  [
    "Can You Start The Second Job After Filing But Before Approval?",
    "Workers avoid early start dates. Applicants await official USCIS approval. This delay reduces legal risk. Early employment triggers visa status problems.",
  ],
  [
    "What If Your First H-1B Employer Fires You?",
    "You may stay in status if the second approved H-1B job continues. You must keep working under an active petition. Check your I-94 end date immediately.",
  ],
  [
    "Does Remote Work Change Concurrent H-1B Rules?",
    "Yes. Remote work can change the required LCA location. Your home address may count as a worksite. Multi-state remote work can require more filings.",
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

function SubSectionHeading({ children }) {
  return (
    <h3 className="mb-3 mt-6 text-[20px] font-bold leading-tight text-[#1A2B4A]">
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

function ChecklistList({ items }) {
  return (
    <ul className="mb-4 ml-2 space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="font-bold text-[#C9A84C]">✓</span>
          <span>{item}</span>
        </li>
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
        H-1B Visa Law | Employment Authorization | Concurrent Petitions Guide
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Published September 27, 2026 | Updated September 27, 2026
      </p>
    </div>
  );
}

function KeyTakeawaysPanel() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        Key Takeaways
      </h2>
      <ul className="space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C]">
        {keyTakeaways.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="font-bold text-[#C9A84C]">▪</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenchmarkCards() {
  return (
    <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-r-md border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 text-center">
        <div className="text-[38px] font-extrabold text-[#1A2B4A]">5 to 20</div>
        <div className="mt-1 text-[18px] font-bold text-[#C9A84C]">
          Weekly Hours Benchmark
        </div>
        <p className="mt-2 text-[15px] text-[#2C2C2C]">
          Keeping your secondary H-1B job in this range remains practical, workable, and defensible before USCIS.
        </p>
      </div>
      <div className="rounded-r-md border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 text-center">
        <div className="text-[38px] font-extrabold text-[#1A2B4A]">2 Petitions</div>
        <div className="mt-1 text-[18px] font-bold text-[#C9A84C]">
          Separate Filings Required
        </div>
        <p className="mt-2 text-[15px] text-[#2C2C2C]">
          Each employer must file its own independent LCA and Form I-129 petition with verified wage and worksite terms.
        </p>
      </div>
    </div>
  );
}

function DocumentTable() {
  return (
    <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-r-md border-l-4 border-[#1A2B4A] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="mb-4 text-[18px] font-bold text-[#1A2B4A]">
          Typical Employer Documents
        </h3>
        <ul className="space-y-2.5 text-[15px] leading-[1.6] text-[#2C2C2C]">
          {employerDocuments.map((doc) => (
            <li key={doc} className="flex items-start gap-2.5">
              <span className="font-bold text-[#C9A84C]">✓</span>
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-r-md border-l-4 border-[#C9A84C] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="mb-4 text-[18px] font-bold text-[#1A2B4A]">
          Typical Employee Documents
        </h3>
        <ul className="space-y-2.5 text-[15px] leading-[1.6] text-[#2C2C2C]">
          {employeeDocuments.map((doc) => (
            <li key={doc} className="flex items-start gap-2.5">
              <span className="font-bold text-[#C9A84C]">✓</span>
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WarningBox() {
  return (
    <div className="my-8 rounded-r-md border-l-4 border-[#D97706] bg-[#FFFBEB] p-6">
      <div className="flex items-center gap-2 text-[18px] font-bold text-[#92400E]">
        <span>⚠ Status Protection Warning</span>
      </div>
      <p className="mt-2 text-[16px] leading-[1.65] text-[#78350F]">
        If you start early and USCIS denies it, you can lose status. That risk is real. Why take it? Wait for official approval or file with premium processing to minimize your risk window.
      </p>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="w-full min-w-[650px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Topic</th>
            <th className="px-4 py-3 font-bold">Concurrent H-1B (Two Jobs)</th>
            <th className="px-4 py-3 font-bold">H-1B Transfer (Switch Jobs)</th>
            <th className="px-4 py-3 font-bold">Moonlighting Without Filing</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-[#EAF2FB]" : "bg-white"}
            >
              {row.map((cell, cIndex) => (
                <td
                  key={cIndex}
                  className={`px-4 py-4 align-top ${
                    cIndex === 0 ? "font-bold text-[#1A2B4A]" : ""
                  }`}
                >
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
    <div className="my-8 rounded-r-md border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6">
      <h2 className="text-[20px] font-bold text-[#1A2B4A]">
        Need Expert Guidance on Your Concurrent H-1B Filing?
      </h2>
      <p className="mt-2 text-[16px] leading-[1.65] text-[#2C2C2C]">
        Ensure full compliance and zero status gaps with our specialized legal &amp; document planning.
      </p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center rounded-md bg-[#1A2B4A] px-5 py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-[#162030]"
        >
          Schedule Your Consultation →
        </Link>
      </div>
    </div>
  );
}

function BottomCta() {
  return (
    <div className="my-12 rounded-md bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Ready to Secure Your Concurrent H-1B Status?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        Contact Trip Law today to audit your petition documents and protect your visa future.
      </p>
      <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
        <p>Call (863)-599-6735 | 1820 Florida Ave S, Ste. C, Lakeland, FL 33803</p>
      </div>
      <div className="mt-6">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center rounded-md bg-[#C9A84C] px-5 py-3 text-[15px] font-bold text-[#1A2B4A] transition-colors hover:bg-[#d8bb68]"
        >
          Get in Touch with Trip Law
        </Link>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>FAQs</SectionHeading>
      <div className="mt-6 space-y-5">
        {faqItems.map(([question, answer]) => (
          <div key={question} className="border-l-4 border-[#C9A84C] py-1 pl-5">
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

function DisclaimerBox() {
  return (
    <div className="my-8 rounded-r-md border-l-4 border-[#94A3B8] bg-[#F8FAFC] p-5">
      <h3 className="text-[16px] font-bold text-[#475569]">Disclaimer</h3>
      <p className="mt-1 text-[14px] leading-[1.6] text-[#64748B]">
        This blog is for informational purposes only. If you want to know anything in details, please contact Trip Law.
      </p>
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

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.trip-law.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.trip-law.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_ARTICLE_TITLE,
          item: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_CANONICAL_URL,
      },
      headline: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_ARTICLE_TITLE,
      name: `${CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_TITLE} | Trip Law`,
      description: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_DESCRIPTION,
      url: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_CANONICAL_URL,
      image: `https://www.trip-law.com${CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE}`,
      isPartOf: {
        "@type": "Blog",
        "@id": "https://www.trip-law.com/blog",
      },
      about: {
        "@type": "Thing",
        name: "Concurrent H-1B Employment",
        description:
          "An authoritative overview of concurrent H-1B employment rules, detailing how nonimmigrant visa holders can legally work two jobs simultaneously through separate Form I-129 petitions, LCAs, prevailing wage requirements, and worksite compliance.",
      },
      keywords: [
        "Concurrent H-1B Employment Can You Work Two Jobs",
        "concurrent H-1B employment",
        "can you work two jobs on H-1B",
        "working two jobs on H-1B visa",
        "concurrent H-1B petition",
        "part time concurrent H-1B",
        "second H-1B job rules",
        "concurrent H-1B LCA prevailing wage",
        "H-1B moonlighting rules",
        "H-1B transfer vs concurrent",
        "USCIS concurrent H-1B approval",
        "immigration lawyer H-1B concurrent",
        "Trip Law immigration attorney",
      ],
      author: {
        "@type": "Organization",
        name: "Trip Law",
      },
      publisher: {
        "@type": "Organization",
        name: "Trip Law",
        url: "https://www.trip-law.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.trip-law.com/assets/site-logo/trip-law-logo.png",
        },
      },
      datePublished: "2026-09-27",
      dateModified: "2026-09-27",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function ConcurrentH1BEmploymentCanYouWorkTwoJobs({
  allBlogsData,
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <article className="col-span-2 text-[#2C2C2C]">
              <IntroPanel />

              <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
                {CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_ARTICLE_TITLE}
              </h1>

              <figure className="mb-8">
                <Image
                  src={CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE}
                  alt={CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_ALT}
                  title={CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_TITLE}
                  aria-describedby="concurrent-h1b-feature-image-description"
                  width={1000}
                  height={510}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                  {CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_CAPTION}
                </figcaption>
                <p
                  id="concurrent-h1b-feature-image-description"
                  className="sr-only"
                >
                  {CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_DESCRIPTION}
                </p>
              </figure>

              <Paragraph>
                Yes, you can legally have two jobs on an H-1B visa. But you can’t just get a second job or do freelance work on the side. Your second employer needs to file a special petition with the{" "}
                <ExternalLink href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations">
                  U.S. Citizenship and Immigration Services (USCIS)
                </ExternalLink>{" "}
                known as a concurrent H-1B petition.
              </Paragraph>

              <KeyTakeawaysPanel />

              <SectionHeading>
                What Concurrent H-1B Employment Means In Plain English
              </SectionHeading>
              <Paragraph>
                Concurrent H-1B permits simultaneous employment. You have a primary H-1B job. You add a second H-1B job. The second job can be part-time. It can also be full-time.
              </Paragraph>
              <Paragraph>
                USCIS treats each job as separate. Each job needs its own:
              </Paragraph>
              <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C]">
                {separateJobRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Paragraph>
                Do you need a new cap slot? Usually, no. If you are cap-subject already, the second filing is often cap-exempt for you. It still needs approval.
              </Paragraph>

              <SectionHeading>
                Can You Start The Second Job Right After Filing?
              </SectionHeading>
              <Paragraph>
                Usually, no. You should wait for approval. That is the safer path. “Portability” rules often help job changes. They are less clean for a second job. Many lawyers advise approval first.
              </Paragraph>
              <Paragraph>
                <ExternalLink href="https://www.uscis.gov/forms/all-forms/how-do-i-use-the-premium-processing-service">
                  Premium processing
                </ExternalLink>{" "}
                can reduce wait time. It costs extra. It can be worth it. It reduces your risk window.
              </Paragraph>
              <Paragraph>
                If you start early and USCIS denies it, you can lose status. That risk is real. Why take it?
              </Paragraph>

              <WarningBox />

              <SectionHeading>
                What USCIS Requires For Two H-1B Jobs At The Same Time
              </SectionHeading>
              <Paragraph>
                You must meet all H-1B rules for both jobs. USCIS does not relax standards.
              </Paragraph>

              <SubSectionHeading>
                You Must Have Two Real Specialty Occupation Roles
              </SubSectionHeading>
              <Paragraph>
                Each role must need a related degree. Each role must have clear duties. Each role must match your background.
              </Paragraph>
              <Paragraph>
                If the second job looks generic, it can fail. If it looks like “gig work,” it can fail.
              </Paragraph>

              <SubSectionHeading>
                Each Employer Must Pay The Right Wage
              </SubSectionHeading>
              <Paragraph>
                Each job must meet prevailing wage rules. This is based on:
              </Paragraph>
              <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C]">
                {wageRulesFactors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>
              <Paragraph>
                Part-time roles still need wage compliance. The hourly rate matters. The certified{" "}
                <ExternalLink href="https://flag.dol.gov/programs/lca">
                  Labor Condition Application (LCA)
                </ExternalLink>{" "}
                must match reality.
              </Paragraph>

              <SubSectionHeading>
                Each Employer Must Follow Worksite Rules
              </SubSectionHeading>
              <Paragraph>
                Your work location must match filings. Remote work needs care. Worksite changes can trigger amendments.
              </Paragraph>
              <Paragraph>
                If your second job adds travel, be precise. USCIS likes detail.
              </Paragraph>

              <SectionHeading>
                What The Two Employers File And What You Provide
              </SectionHeading>
              <Paragraph>
                The second employer files a concurrent petition via{" "}
                <ExternalLink href="https://www.uscis.gov/i-129">
                  Form I-129
                </ExternalLink>
                . You provide documents. The employer provides role details.
              </Paragraph>

              <DocumentTable />

              <Paragraph>
                Your pay stubs matter. They show you maintained status. They are often requested.
              </Paragraph>

              <MidPageCta />

              <SectionHeading>
                Comparison Table: Concurrent H-1B Vs H-1B Transfer Vs Moonlighting
              </SectionHeading>
              <Paragraph>
                Below is a clear view. Use it to avoid mistakes.
              </Paragraph>

              <ComparisonTable />

              <SectionHeading>
                How Many Hours Can You Work Across Two H-1B Jobs?
              </SectionHeading>
              <Paragraph>
                There is no fixed USCIS hour cap. That said, you must stay credible. You must perform both roles. You must avoid impossible schedules.
              </Paragraph>
              <Paragraph>
                Here is a practical benchmark. Many workers keep the second job at 5 to 20 hours weekly. That range feels workable. It also looks realistic.
              </Paragraph>
              <Paragraph>
                USCIS may question a schedule that seems unworkable. For example, two “full-time” jobs with heavy onsite time.
              </Paragraph>
              <Paragraph>
                Do you have overlapping meetings? Do you have time logs? Keep proof.
              </Paragraph>

              <BenchmarkCards />

              <SectionHeading>
                Beginner Level: Safe Steps If This Is Your First Concurrent H-1B
              </SectionHeading>
              <Paragraph>
                Start with clarity. First, confirm your primary job is stable. You need valid status. You need recent pay stubs.
              </Paragraph>
              <Paragraph>
                Second, make the second job part-time. This reduces pressure. It also reduces compliance complexity.
              </Paragraph>
              <Paragraph>
                Third, use premium processing if possible. Faster approval means lower risk.
              </Paragraph>
              <Paragraph>
                Fourth, avoid vague job titles. Avoid roles with unclear duties.
              </Paragraph>
              <Paragraph>
                Finally, do not work outside filed terms. That includes location changes.
              </Paragraph>

              <SectionHeading>
                Intermediate Level: How To Handle Remote Work, Multiple Sites, And Hybrid Schedules
              </SectionHeading>
              <Paragraph>
                Remote work is allowed. It still needs correct LCAs. The LCA ties to location. Remote location often counts.
              </Paragraph>
              <Paragraph>
                If you will work from home, that home location matters. If you will work from another state, that matters even more.
              </Paragraph>
              <Paragraph>
                If your second job has multiple client sites, that needs planning. You may need multiple LCAs. You may need short-term placement rules. Your employer should document it.
              </Paragraph>
              <Paragraph>
                Ask these direct questions:
              </Paragraph>
              <BulletList items={remoteWorkQuestions} />

              <SectionHeading>
                Expert Level: How Concurrent H-1B Impacts Extensions, Green Card Steps, And Status Risks
              </SectionHeading>
              <Paragraph>
                Concurrent filings can help your income. They can also create complex records.
              </Paragraph>

              <SubSectionHeading>
                How It Affects H-1B Extensions
              </SubSectionHeading>
              <Paragraph>
                At extension time, USCIS checks maintenance of status. Your pay stubs matter. Your W-2s matter. Gaps can hurt.
              </Paragraph>
              <Paragraph>
                If one job ends, you can still stay. But only if the other job remains valid. You must keep working under an approved petition.
              </Paragraph>

              <SubSectionHeading>
                How It Affects PERM And I-140 Planning
              </SubSectionHeading>
              <Paragraph>
                PERM is employer-driven. Your green card case ties to one employer. Concurrent work does not block PERM. It can raise questions on intent and role focus.
              </Paragraph>
              <Paragraph>
                Upcoming filing deadlines require caution. Workers avoid risky status changes. A pending I-140 demands clean documentation.
              </Paragraph>

              <SubSectionHeading>
                How It Can Create Status Problems
              </SubSectionHeading>
              <Paragraph>
                The biggest risks are simple:
              </Paragraph>
              <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C]">
                {statusRisks.map((risk) => (
                  <li key={risk}>{risk}</li>
                ))}
              </ul>
              <Paragraph>
                If your primary job ends, you need a plan. You may have a grace period. Timelines can vary by case. Confirm fast.
              </Paragraph>

              <SectionHeading>
                What Happens If One Job Ends While The Other Continues?
              </SectionHeading>
              <Paragraph>
                You can often remain in status. The remaining approved job must continue. You must work under it.
              </Paragraph>
              <Paragraph>
                If the job that ends was your “primary,” that label does not control status. Approval does. Active employment does.
              </Paragraph>
              <Paragraph>
                You should also consider timing. If your I-94 end date was tied to one petition, that matters. Check your latest{" "}
                <ExternalLink href="https://i94.cbp.dhs.gov/">
                  I-94 travel record
                </ExternalLink>
                . Check your approval notices.
              </Paragraph>

              <SectionHeading>
                Do You Need Your Current Employer’s Permission?
              </SectionHeading>
              <Paragraph>
                USCIS does not require your first employer’s consent. Your offer letters and filings are separate.
              </Paragraph>
              <Paragraph>
                Your employment contract may restrict outside work. Your company policy may restrict it too. That is a separate risk. Read your agreement.
              </Paragraph>
              <Paragraph>
                And ask yourself:
              </Paragraph>
              <BulletList items={employerPermissionQuestions} />
              <Paragraph>
                Do not assume. Verify.
              </Paragraph>

              <SectionHeading>
                How Taxes Work When You Have Two H-1B Employers
              </SectionHeading>
              <Paragraph>
                You can get two W-2s. That is normal. You may need to adjust withholding. Two jobs can cause under-withholding.
              </Paragraph>
              <Paragraph>
                Here is one simple best practice. Increase withholding on one job. Or use estimated payments if needed. A CPA can help.
              </Paragraph>
              <Paragraph>
                Also track state tax rules. Two worksites can mean multi-state filing.
              </Paragraph>

              <SectionHeading>Conclusion</SectionHeading>
              <Paragraph>
                You can hold two H-1B jobs. Each employer must file. You should wait for approval. You must obey salary regulations. You must follow work hour limits. You must follow location rules.
              </Paragraph>
              <Paragraph>
                Part-time second jobs offer maximum safety. Keep duties clear. Keep worksite details accurate. Keep records.
              </Paragraph>
              <Paragraph>
                If you want a second job, do it clean. At Trip Law, we help you plan the safest path, tighten your documents, and reduce avoidable risk. If you are considering concurrent H-1B work, reach out today. We will help you protect your status and your future.
              </Paragraph>

              <BottomCta />

              <FaqSection />

              <DisclaimerBox />
            </article>

            <aside className="col-span-1">
              <BlogSidebar allBlogsData={allBlogsData} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
