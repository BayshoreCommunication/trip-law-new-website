import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_ARTICLE_DESCRIPTION,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_ARTICLE_TITLE,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_CANONICAL_URL,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_ALT,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_CAPTION,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_DESCRIPTION,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_TITLE,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_DESCRIPTION,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_TITLE,
  PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_SLUG,
} from "./permLaborCertificationExplainedForBeginnersMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const keyPoints = [
  "PERM proves no qualified U.S. worker is available.",
  "Your employer controls the process and cost.",
  "Prevailing wage sets the minimum pay floor.",
  "Recruitment must be real and documented.",
  "Ads and ETA Form 9089 must match exactly.",
  "Audits add months and require full proof.",
  "PERM approval is not the green card.",
];

const permBasedCategories = [
  "EB-2 for advanced degree roles.",
  "EB-3 for professional roles.",
  "EB-3 for skilled worker roles.",
];

const avoidPermCategories = [
  "EB-1A extraordinary ability.",
  "EB-1B outstanding professor or researcher.",
  "EB-1C multinational manager.",
];

const wageLevelRows = [
  ["Level 1", "Entry, supervised work", "High, if duties look senior", "Job duties match junior scope"],
  ["Level 2", "Independent contributor", "Medium, if duties look lead", "Tools, scope, and autonomy"],
  ["Level 3", "Senior, complex duties", "Medium, if wage too low", "Team impact and decision power"],
  ["Level 4", "Lead, expert, or manager", "High, if no leadership shown", "Strategy duties and management"],
];

const auditTriggers = [
  "Requirements seem tailored to you.",
  "Too many special skills listed.",
  "Unclear business need for requirements.",
  "Combination of multiple roles.",
  "Layoffs in related roles at the company.",
  "Foreign language requirement without strong need.",
];

const alignmentChecklist = [
  "Job duties match wage level.",
  "Requirements match industry norms.",
  "Requirements match your pre-hire experience.",
  "Location is accurate for the role.",
  "Ads match the ETA 9089 language.",
];

const faqItems = [
  [
    "What Are The Biggest Mistakes Employers Make In PERM Cases?",
    "Discrepancies create problems. Job advertisements must match core responsibilities and candidate requirements. Minor wording differences trigger official audits. Employers should maintain identical role descriptions, ensuring wage requests match recruitment materials and Form ETA 9089.",
  ],
  [
    "Can I Pay For PERM Recruitment Or Attorney Fees?",
    "Usually no. U.S. labor regulations require employers to pay all PERM costs, including mandatory recruitment ads and PERM legal fees. Sponsored employees may only pay for later-stage filings like the I-485 when eligible.",
  ],
  [
    "How Long Does PERM Labor Certification Take In Real Life?",
    "Timelines vary depending on prevailing wage determination times, mandatory recruitment periods, and DOL processing workloads. Many standard cases take several months, while DOL audits can add additional months.",
  ],
  [
    "Does PERM Approval Give Me Work Authorization Or Status?",
    "No. PERM approval is only a labor certification issued by the Department of Labor. It does not grant nonimmigrant status, lawful permanent residence, or employment authorization.",
  ],
  [
    "What If A U.S. Worker Applies During Recruitment?",
    "Employers must evaluate U.S. job applicants honestly and objectively against the minimum job requirements. Qualified local applicants prevent the employer from proceeding with the PERM filing for that position.",
  ],
  [
    "Can My Job Requirements Include Specific Tools Or Languages?",
    "Yes, but only if they are genuinely necessary for job performance. Rare software requirements or foreign language mandates increase audit risk and require the employer to document business necessity.",
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
        Employment-Based Immigration Law | PERM Labor Certification Guide
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Published September 22, 2026 | Updated September 22, 2026
      </p>
    </div>
  );
}

function KeyPointsPanel() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        Key Takeaways
      </h2>
      <ul className="space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C]">
        {keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="font-bold text-[#C9A84C]">▪</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineFlow() {
  return (
    <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 rounded-r-md">
        <div className="text-[14px] font-bold uppercase tracking-wider text-[#C9A84C]">
          Phase One
        </div>
        <h3 className="mt-1 text-[18px] font-bold text-[#1A2B4A]">
          Prevailing Wage Determination
        </h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-[#2C2C2C]">
          Employers request a minimum pay floor from DOL tied to job level &amp; location.
        </p>
      </div>

      <div className="border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 rounded-r-md">
        <div className="text-[14px] font-bold uppercase tracking-wider text-[#C9A84C]">
          Phase Two
        </div>
        <h3 className="mt-1 text-[18px] font-bold text-[#1A2B4A]">
          Mandatory Recruitment
        </h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-[#2C2C2C]">
          Employers test the U.S. job market with strict, timed, mandatory advertisements.
        </p>
      </div>

      <div className="border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 rounded-r-md">
        <div className="text-[14px] font-bold uppercase tracking-wider text-[#C9A84C]">
          Phase Three
        </div>
        <h3 className="mt-1 text-[18px] font-bold text-[#1A2B4A]">
          Filing ETA 9089 &amp; Waiting
        </h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-[#2C2C2C]">
          Employer files online; DOL certifies, audits, or denies the application.
        </p>
      </div>
    </div>
  );
}

function WageLevelTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[650px] w-full border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Wage Level</th>
            <th className="px-4 py-3 font-bold">Typical Role Fit</th>
            <th className="px-4 py-3 font-bold">Risk If Mismatched</th>
            <th className="px-4 py-3 font-bold">What You Should Check</th>
          </tr>
        </thead>
        <tbody>
          {wageLevelRows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-[#EAF2FB]" : "bg-white"}
            >
              {row.map((cell, cIndex) => (
                <td key={cIndex} className="px-4 py-4 align-top">
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

function MidPageCta1() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 rounded-r-md">
      <h3 className="text-[20px] font-bold text-[#1A2B4A]">
        Need Expert Guidance on Your PERM Application?
      </h3>
      <p className="mt-2 text-[16px] leading-[1.65] text-[#2C2C2C]">
        Navigating prevailing wages, recruitment, and ETA Form 9089 requires precision to avoid costly delays.
      </p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#1A2B4A] text-white px-5 py-2.5 text-[15px] font-bold hover:bg-[#162030] rounded-md transition-colors"
        >
          CONSULT TRIP LAW TODAY →
        </Link>
      </div>
    </div>
  );
}

function ChecklistBox() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 rounded-r-md">
      <h3 className="mb-4 text-[20px] font-bold text-[#1A2B4A]">
        A Simple Alignment Checklist That Prevents Many Problems
      </h3>
      <ChecklistList items={alignmentChecklist} />
    </div>
  );
}

function BottomCta() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white rounded-md">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Ready To Make Your PERM Process Clear And Defensible?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        Trip Law simplifies complex PERM workflows, prevents application errors, and ensures seamless compliance for employers and sponsored workers.
      </p>
      <div className="mt-6">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#C9A84C] px-5 py-3 text-[15px] font-bold text-[#1A2B4A] hover:bg-[#d8bb68] rounded-md transition-colors"
        >
          CONTACT TRIP LAW NOW
        </Link>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>FAQs</SectionHeading>
      <div className="space-y-5 mt-6">
        {faqItems.map(([question, answer]) => (
          <div key={question} className="border-l-4 border-[#C9A84C] pl-5 py-1">
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
    <div className="my-8 border-l-4 border-[#94A3B8] bg-[#F8FAFC] p-5 rounded-r-md">
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
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.trip-law.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.trip-law.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_ARTICLE_TITLE,
          "item": PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_CANONICAL_URL
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_CANONICAL_URL
      },
      "headline": PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_ARTICLE_TITLE,
      "name": `${PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_TITLE} | Trip Law`,
      "description": PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_META_DESCRIPTION,
      "url": PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_CANONICAL_URL,
      "image": `https://www.trip-law.com${PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE}`,
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.trip-law.com/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "PERM Labor Certification",
        "description": "A comprehensive beginner guide to PERM Labor Certification for employment-based green cards in the United States, including DOL prevailing wage determination, mandatory recruitment, ETA Form 9089, audit triggers, and post-approval USCIS I-140 filing."
      },
      "keywords": [
        "PERM Labor Certification",
        "PERM labor certification explained for beginners",
        "employment based green card",
        "EB-2 green card PERM",
        "EB-3 green card PERM",
        "Department of Labor PERM",
        "ETA Form 9089",
        "prevailing wage determination",
        "PERM recruitment steps",
        "PERM audit triggers",
        "employment visa attorney",
        "Trip Law"
      ],
      "author": {
        "@type": "Organization",
        "name": "Trip Law"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Trip Law",
        "url": "https://www.trip-law.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.trip-law.com/assets/site-logo/trip-law-logo.png"
        }
      },
      "datePublished": "2026-09-22",
      "dateModified": "2026-09-22"
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.map(([question, answer]) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    }
  ]
};

export default function PermLaborCertificationExplainedForBeginners({
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
                {PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_ARTICLE_TITLE}
              </h1>

              <figure className="mb-8">
                <Image
                  src={PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE}
                  alt={PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_ALT}
                  title={PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_TITLE}
                  aria-describedby="perm-feature-image-description"
                  width={1000}
                  height={510}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                  {PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_CAPTION}
                </figcaption>
                <p
                  id="perm-feature-image-description"
                  className="sr-only"
                >
                  {PERM_LABOR_CERTIFICATION_EXPLAINED_FOR_BEGINNERS_FEATURE_IMAGE_DESCRIPTION}
                </p>
              </figure>

              <Paragraph>
                The first step toward getting a Green Card (for EB-2 and EB-3 visas) is the PERM Labor Certification, which is a requirement for most employment-based Green Cards. It is administered by the U.S. Department of Labor (DOL) and its primary role is to protect the U.S. workforce. An employer must first convince the government that there are no qualified U.S. workers (citizens or Green Card holders) available to fill the position before they can sponsor a foreign worker.
              </Paragraph>

              <KeyPointsPanel />

              <SectionHeading>
                What PERM Labor Certification Means In Simple Terms
              </SectionHeading>
              <Paragraph>
                PERM is a hiring test plus a filing. Your employer defines a role. The employer sets minimum requirements. The employer requests a government wage. The employer recruits domestic jobseekers. If the search produces no qualified applicants, the employer files ETA Form 9089.
              </Paragraph>
              <Paragraph>
                PERM is handled by the employer. You support it. You do not file it alone. You do not pay required employer costs.
              </Paragraph>

              <SectionHeading>
                Who Needs PERM And Who Usually Does Not Need It
              </SectionHeading>
              <Paragraph>
                Most employment based green card cases in EB-2 and EB-3 need PERM. Many cases in EB-1 do not. Some special categories do not.
              </Paragraph>
              <Paragraph>
                You should ask one direct question early: &quot;Is my category PERM-based?&quot; That answer controls your timeline.
              </Paragraph>

              <SubSectionHeading>Typical PERM Based Categories</SubSectionHeading>
              <Paragraph>These categories often use PERM:</Paragraph>
              <BulletList items={permBasedCategories} />

              <SubSectionHeading>Common Categories That May Avoid PERM</SubSectionHeading>
              <Paragraph>These categories may avoid PERM:</Paragraph>
              <BulletList items={avoidPermCategories} />

              <Paragraph>Your facts control the final category.</Paragraph>

              <SectionHeading>
                The Fastest Way To Understand The Full PERM Timeline
              </SectionHeading>
              <Paragraph>
                PERM has three big phases. It starts with wages. It ends with certification or denial. It often takes many months.
              </Paragraph>

              <TimelineFlow />

              <SubSectionHeading>Phase One Is Prevailing Wage Determination</SubSectionHeading>
              <Paragraph>
                Your employer requests a wage from DOL. This is the minimum pay. It is tied to job level and location.
              </Paragraph>
              <Paragraph>
                Your employer must pay at least this wage. This wage also shapes the job ad wording.
              </Paragraph>

              <SubSectionHeading>Phase Two Is Mandatory Recruitment And The Job Market Test</SubSectionHeading>
              <Paragraph>
                Your employer recruits for the role. Recruitment must follow strict rules. It must be timed right.
              </Paragraph>
              <Paragraph>
                Recruitment tests the labor market. It does not test your performance.
              </Paragraph>

              <SubSectionHeading>Phase Three Is Filing ETA 9089 And Waiting For A Decision</SubSectionHeading>
              <Paragraph>
                Your employer files{" "}
                <ExternalLink href="https://www.dol.gov/agencies/eta/foreign-labor/forms">
                  ETA Form 9089
                </ExternalLink>{" "}
                online. DOL may certify it. The DOL may audit it. DOL may deny it.
              </Paragraph>
              <Paragraph>
                If certified, you move to I-140. Then later, I-485 or consular processing.
              </Paragraph>

              <SectionHeading>
                What Employers Must Prove During PERM Recruitment
              </SectionHeading>
              <Paragraph>
                Your employer must prove a basic point. No able, willing, qualified U.S. worker applied. Or none was available for the role.
              </Paragraph>
              <Paragraph>
                The employer must also prove good faith. The job must be real. Requirements must be normal. Ads must match the filing.
              </Paragraph>
              <Paragraph>
                If DOL thinks requirements were tailored to you, risk rises.
              </Paragraph>

              <SectionHeading>
                What &quot;Prevailing Wage&quot; Really Controls For Your Case
              </SectionHeading>
              <Paragraph>
                Prevailing wage controls pay and compliance. It also controls how the role is described.
              </Paragraph>
              <Paragraph>
                If the wage is high, budgets matter. If the wage is low, level matters. If the location changes, wage changes.
              </Paragraph>

              <SubSectionHeading>Prevailing Wage Levels You Will Hear About</SubSectionHeading>
              <Paragraph>
                DOL wages often map to levels. Many employers speak in four levels. Here is a practical comparison:
              </Paragraph>

              <WageLevelTable />

              <Paragraph>
                Ask your employer for the wage level. Ask if duties match it.
              </Paragraph>

              <SectionHeading>
                What The Required Recruitment Steps Usually Include
              </SectionHeading>
              <Paragraph>
                Recruitment includes required ads. It can also include extra steps. The exact list depends on the role.
              </Paragraph>
              <Paragraph>For many professional roles, employers must place:</Paragraph>
              <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C]">
                <li>Two Sunday newspaper ads, or approved alternatives.</li>
                <li>A 30 day State Workforce Agency job order.</li>
                <li>An internal notice of filing at the worksite.</li>
                <li>Three additional recruitment steps, from an approved DOL list.</li>
              </ul>
              <Paragraph>
                These steps must be documented according to official{" "}
                <ExternalLink href="https://www.dol.gov/agencies/eta/foreign-labor/programs/permanent">
                  U.S. Department of Labor (DOL) PERM guidance
                </ExternalLink>
                . Dates matter. Copies matter.
              </Paragraph>

              <SectionHeading>
                How Employers Decide Job Requirements Without Triggering Red Flags
              </SectionHeading>
              <Paragraph>
                Job requirements must match the real role. They must fit the industry norm. They must not copy your resume.
              </Paragraph>
              <Paragraph>
                Your employer should avoid rare tools such as &quot;must have.&quot; Your employer should avoid too many &quot;musts.&quot; Your employer should avoid combining roles.
              </Paragraph>
              <Paragraph>
                If you change roles inside the company, caution rises. If you were trained on the job, caution rises.
              </Paragraph>

              <SectionHeading>
                What You Should And Should Not Do As The Sponsored Employee
              </SectionHeading>
              <Paragraph>
                You should support accuracy. You should not control recruitment.
              </Paragraph>
              <Paragraph>
                You should confirm your work history facts. You should confirm degree details. You should confirm dates and titles.
              </Paragraph>
              <Paragraph>
                You should not pay recruitment costs. You should not tell the employer who to reject. You should not suggest custom requirements.
              </Paragraph>

              <MidPageCta1 />

              <SectionHeading>
                What Happens After PERM Is Approved
              </SectionHeading>
              <Paragraph>
                After certification, your employer usually files Form{" "}
                <ExternalLink href="https://www.uscis.gov/i-140">
                  I-140 Immigrant Petition for Alien Workers
                </ExternalLink>{" "}
                with USCIS. This proves the company can pay the wage and that you qualify for the position.
              </Paragraph>
              <Paragraph>
                Then you wait for your priority date. When current, you file Form I-485 or go through consular processing under{" "}
                <ExternalLink href="https://www.uscis.gov/working-in-the-united-states">
                  employment-based green card pathways
                </ExternalLink>
                .
              </Paragraph>
              <Paragraph>
                PERM approval does not give status. It is a step. It is not the green card.
              </Paragraph>

              <SectionHeading>
                What Happens If PERM Is Audited Or Denied
              </SectionHeading>
              <Paragraph>
                An audit means the DOL wants proof. It slows the case. It can be random. It can be triggered.
              </Paragraph>
              <Paragraph>
                A denial ends that PERM filing. The employer may refile. The employer may appeal. Timing changes.
              </Paragraph>

              <SubSectionHeading>Common Audit Triggers You Should Know</SubSectionHeading>
              <Paragraph>These issues often trigger audits:</Paragraph>
              <BulletList items={auditTriggers} />
              <Paragraph>If any apply, plan for delay.</Paragraph>

              <SectionHeading>
                Beginner Level: The Minimum You Must Understand Before You Start
              </SectionHeading>
              <Paragraph>
                PERM is employer-led. Requirements must be normal. Recruitment must be real. Ads must match the filing. Your resume must match requirements.
              </Paragraph>
              <Paragraph>
                If you are early in the process, ask these questions now: &quot;What category?&quot; &quot;What requirements?&quot; &quot;What location?&quot; &quot;What wage level?&quot; &quot;What timeline?&quot;
              </Paragraph>

              <SectionHeading>
                Intermediate Level: How To Reduce Delays And Mismatches
              </SectionHeading>
              <Paragraph>
                Delays often come from avoidable mismatches. Fix them early.
              </Paragraph>
              <Paragraph>
                You should align five items before recruitment begins: Job title, duties, location, requirements, and wage level.
              </Paragraph>
              <Paragraph>
                You should also keep a clean record. Save your pay stubs. Save offer letters. Save degree evaluations if needed.
              </Paragraph>

              <ChecklistBox />
              <Paragraph>One mismatch can cause a big delay.</Paragraph>

              <SectionHeading>
                Expert Level: Strategy Topics That Matter In Complex Cases
              </SectionHeading>
              <Paragraph>
                Complex cases need strategy. Multi-location roles add risk. Remote work adds complexity. Promotions can add risk. Mergers add risk.
              </Paragraph>
              <Paragraph>
                If you moved into the role after hire, you may need to prove you met requirements before joining. If experience was gained at the same employer, rules apply.
              </Paragraph>
              <Paragraph>
                You should also watch the timing windows. Recruitment has strict validity periods. Late filing breaks the case.
              </Paragraph>

              <SectionHeading>
                When Remote Work Changes PERM Requirements
              </SectionHeading>
              <Paragraph>
                Remote work can change worksite rules. The location can affect wages. The posting location can change. The notice of filing must be correct.
              </Paragraph>
              <Paragraph>
                Ask: &quot;What is the primary worksite?&quot; Ask: &quot;Is the role hybrid?&quot; Ask: &quot;Will my address be listed?&quot; These details matter.
              </Paragraph>

              <SectionHeading>Conclusion</SectionHeading>
              <Paragraph>
                PERM is a regulated hiring test. The employer defines job requirements. The company obtains the official wage. The employer conducts candidate recruitment. The company submits Form ETA 9089. The employer files Form I-140. The worker completes the final visa stage.
              </Paragraph>
              <Paragraph>
                Trip Law assists your company. We simplify the complex PERM process. Our team builds well-documented immigration cases. Our service prevents costly delays. We eliminate application errors. We provide clear procedural guidance. Our experts guide your team. We manage the entire filing.
              </Paragraph>

              <BottomCta />

              <FaqSection />

              <DisclaimerBox />
            </article>

            <BlogSidebar allBlogsData={allBlogsData} />
          </div>
        </div>
      </section>
    </>
  );
}
