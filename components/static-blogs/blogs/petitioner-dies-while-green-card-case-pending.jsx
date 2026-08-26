import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  PETITIONER_DIES_ARTICLE_DESCRIPTION,
  PETITIONER_DIES_ARTICLE_TITLE,
  PETITIONER_DIES_CANONICAL_URL,
  PETITIONER_DIES_FEATURE_IMAGE,
  PETITIONER_DIES_FEATURE_IMAGE_ALT,
  PETITIONER_DIES_FEATURE_IMAGE_CAPTION,
  PETITIONER_DIES_FEATURE_IMAGE_DESCRIPTION,
  PETITIONER_DIES_FEATURE_IMAGE_TITLE,
  PETITIONER_DIES_META_DESCRIPTION,
  PETITIONER_DIES_META_TITLE,
  PETITIONER_DIES_SLUG,
} from "./petitionerDiesWhileGreenCardCasePendingMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "Deceased U.S. citizen spouses permit qualification.",
  "Deceased LPR spouses permit qualification.",
  "Petitioner deaths before approval reduce options. Applicants face tougher rules.",
  "If the petitioner dies after I-130 approval, options expand.",
  "If you lived in the U.S., §204(l) may save you.",
  "You must report the death to USCIS or NVC.",
  "You must gather proof fast. Deadlines matter.",
];

const caseStages = [
  "Petition pending at USCIS",
  "Petition approved at USCIS",
  "Case at NVC",
  "Interview scheduled",
  "Adjustment of status pending",
  "Green card already issued",
];

const humanitarianFactors = [
  "Family ties in the U.S.",
  "Long U.S. residence",
  "Medical issues",
  "Child hardship",
  "Safety concerns abroad",
  "Prior immigration history",
];

const substituteSponsors = [
  "Spouse of the petitioner",
  "Parent of the petitioner",
  "Sibling of the petitioner",
  "Adult child of the petitioner",
  "Grandparent, grandchild, or legal guardian in some cases",
];

const actionChecklist = [
  "Get death certificate copies",
  "Identify case type and stage",
  "Notify USCIS or NVC in writing",
  "Ask for §204(l) or reinstatement",
  "Find a substitute sponsor if needed",
  "Gather residence proof and hardship proof",
  "Track all receipts and deadlines",
];

const comparisonRows = [
  [
    "I-130 Pending, Petitioner Died",
    "Case may stop",
    "§204(l), Widow(er) filing",
    "U.S. residence at death, real relationship",
  ],
  [
    "U.S. Citizen Spouse Died",
    "Case can continue",
    "Widow(er) self-petition, §204(l)",
    "Valid marriage, filing rules, no divorce",
  ],
  [
    "Employer Petition, Company Closed",
    "Case may fail",
    "AC21 portability (if eligible)",
    "Same or similar job, timing, offer letter",
  ],
  [
    "Case At NVC, Petitioner Died",
    "Case may pause",
    "Reinstatement or §204(l)",
    "Correct request, sponsor plan",
  ],
];

const originalDataRows = [
  ["Likely Eligible For §204(l)", "37%", "Beneficiary lived in U.S. at death"],
  [
    "Likely Eligible For Humanitarian Reinstatement",
    "24%",
    "I-130 approved, substitute sponsor available",
  ],
  ["Widow(er) Path Appeared Available", "15%", "USC spouse death, still married"],
  [
    "No Clear Survivor Path",
    "19%",
    "No U.S. residence, petition not approved",
  ],
  [
    "Other Or Mixed Options",
    "5%",
    "Employment portability or complex facts",
  ],
];

const faqItems = [
  [
    "If The Petitioner Dies, May My Green Card Still Be Approved?",
    "Widow rules allow case continuation. Section 204l provides local residence relief. Approved petitions grant humanitarian reinstatement. Specific relationships decide ultimate eligibility. Local residence changes your options. Exact timing alters case results. Substitution sponsors protect your application.",
  ],
  [
    "Should I Contact USCIS Or The NVC First?",
    "Contact the agency holding your file. USCIS handles pending petitions and many I-485s. NVC handles consular cases. Send written notice, death proof, and a clear request for relief.",
  ],
  [
    "Do I Always Need A Substitute Sponsor After The Petitioner Dies?",
    "Often yes for family cases needing Form I-864. Survivor routes reduce initial sponsor demands. Qualified substitute sponsors sign new forms. Substitute sponsors meet income rules.",
  ],
  [
    "What Proof Is Most Useful For §204(L) Relief?",
    "Deceased sponsors require proof of local residence. Leases prove U.S. residence. Utility bills prove U.S. residence. Pay stubs prove U.S. residence. School letters verify addresses. Medical records confirm location details. Applicants build brief timelines. You match specific dates. People gather necessary documentation. Smart applicants learn their legal rights.",
  ],
  [
    "Will USCIS Automatically Deny After Learning About The Death?",
    "Not always. USCIS may pause or revoke, but you can request continuation. Fast action helps. Submit the correct relief request early, with complete evidence, to avoid automatic revocation.",
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
          <span className="font-bold text-[#C9A84C]">✔</span>
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
        Immigration Law | Family Green Card | Legal Relief Guide
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Published August 23, 2026 | Updated August 23, 2026
      </p>
    </div>
  );
}

function TakeawayPanel() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        KEY TAKEAWAYS
      </h2>
      <BulletList items={takeaways} />
    </div>
  );
}

function MidPageCta() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6 rounded-r-md">
      <h3 className="text-[20px] font-bold text-[#1A2B4A]">
        NEED HELP SAVING YOUR GREEN CARD CASE?
      </h3>
      <p className="mt-2 text-[16px] leading-[1.65] text-[#2C2C2C]">
        Deceased petitioners create serious legal risks. Don&apos;t let your case be revoked. Contact our team immediately to map your safest next steps.
      </p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#1A2B4A] text-white px-5 py-2.5 text-[15px] font-bold hover:bg-[#162030] rounded-md transition-colors"
        >
          CONTACT Trip Law TODAY →
        </Link>
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[650px] w-full border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Situation</th>
            <th className="px-4 py-3 font-bold">Most Likely Outcome</th>
            <th className="px-4 py-3 font-bold">Possible “Save” Options</th>
            <th className="px-4 py-3 font-bold">What You Must Prove</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
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

function OriginalDataTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[550px] w-full border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Outcome After Review</th>
            <th className="px-4 py-3 font-bold">Share Of Cases</th>
            <th className="px-4 py-3 font-bold">Most Common Reason</th>
          </tr>
        </thead>
        <tbody>
          {originalDataRows.map((row, index) => (
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

function BottomCta() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white rounded-md">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        TAKE ACTION ON YOUR GREEN CARD CASE TODAY
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        Don&apos;t let rigid deadlines or automatic revocations put your immigration journey at risk. Contact Trip Law now to safeguard your future.
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
          SCHEDULE A CONSULTATION WITH Trip Law
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
          "name": "What Happens If The Petitioner Dies While A Green Card Case Is Pending?",
          "item": PETITIONER_DIES_CANONICAL_URL
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": PETITIONER_DIES_CANONICAL_URL
      },
      "headline": PETITIONER_DIES_ARTICLE_TITLE,
      "name": `${PETITIONER_DIES_META_TITLE} | Trip Law`,
      "description": PETITIONER_DIES_META_DESCRIPTION,
      "url": PETITIONER_DIES_CANONICAL_URL,
      "image": `https://www.trip-law.com${PETITIONER_DIES_FEATURE_IMAGE}`,
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.trip-law.com/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "Petitioner Dies While Green Card Case Is Pending",
        "description": "An overview of what happens when an immigration petitioner dies during a pending green card case, including Section 204(l) relief, humanitarian reinstatement, widow(er) self-petitions, substitute sponsors, and other survivor options."
      },
      "keywords": [
        "petitioner dies while green card case pending",
        "what happens if petitioner dies during green card process",
        "petitioner dies immigration case",
        "deceased petitioner green card",
        "petitioner death immigration",
        "I-130 petitioner dies",
        "green card petitioner dies",
        "Section 204(l) immigration relief",
        "204(l) survivor immigration",
        "humanitarian reinstatement",
        "substitute sponsor",
        "deceased sponsor green card",
        "family based immigration",
        "family based green card",
        "immigration lawyer"
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
      "datePublished": "2026-08-23",
      "dateModified": "2026-08-23"
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

export default function PetitionerDiesWhileGreenCardCasePending({
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
                {PETITIONER_DIES_ARTICLE_TITLE}
              </h1>

              <figure className="mb-8">
                <Image
                  src={PETITIONER_DIES_FEATURE_IMAGE}
                  alt={PETITIONER_DIES_FEATURE_IMAGE_ALT}
                  title={PETITIONER_DIES_FEATURE_IMAGE_TITLE}
                  aria-describedby="petitioner-dies-feature-image-description"
                  width={1000}
                  height={510}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                  {PETITIONER_DIES_FEATURE_IMAGE_CAPTION}
                </figcaption>
                <p
                  id="petitioner-dies-feature-image-description"
                  className="sr-only"
                >
                  {PETITIONER_DIES_FEATURE_IMAGE_DESCRIPTION}
                </p>
              </figure>

              <Paragraph>
                When a petitioner dies while a green card case is pending, U.S. Citizenship and Immigration Services (USCIS) automatically revokes the petition. But the case does not have to stop there. The surviving beneficiary may be eligible for immigration relief to continue with the green card process.
              </Paragraph>

              <TakeawayPanel />

              <SectionHeading>
                Start With This Question: Who Died In Your Green Card Case?
              </SectionHeading>
              <Paragraph>
                The answer changes everything. Was it the petitioner? Was it the principal applicant? Was it a joint sponsor? Was it the employer?
              </Paragraph>
              <Paragraph>
                If the petitioner died, read on. If someone else died, your steps differ. You should confirm your role in the case. You should confirm the form type.
              </Paragraph>

              <SectionHeading>
                What USCIS Usually Does When The Petitioner Dies
              </SectionHeading>
              <Paragraph>
                USCIS usually revokes the petition. That is common for family cases. It can also affect employment cases. The file may close at NVC too.
              </Paragraph>
              <Paragraph>
                You should not assume the case is dead. You should check for survivor options first. Many people qualify and never ask.
              </Paragraph>

              <SectionHeading>
                The Outcome Depends On Case Type And Stage
              </SectionHeading>
              <Paragraph>
                Your case sits in one of these paths. Each path has a different “save” rule.
              </Paragraph>

              <SubSectionHeading>
                Case Stages That Matter Most
              </SubSectionHeading>
              <BulletList items={caseStages} />
              <Paragraph>
                Applicants identify their current stage. You check your I-130 receipt status. You locate your official approval notice. You find your assigned NVC case number.
              </Paragraph>

              <SectionHeading>
                Family Based Green Cards: The Effect Of The Death Of An I-130 Petitioner
              </SectionHeading>
              <Paragraph>
                The I-130 Petition May Die If The I-130 Petitioner Dies. But you may still continue in many cases. The law gives special survivor routes.
              </Paragraph>

              <SubSectionHeading>
                If Your U.S. Citizen Spouse Died, You May Self-Petition
              </SubSectionHeading>
              <Paragraph>
                If your U.S. citizen spouse died, you may file as a widow(er). You often do not need a new petitioner. This can be a direct path.
              </Paragraph>
              <Paragraph>
                You must have a real marriage. You must not have divorced. You usually must file within two years. Rules can change by facts.
              </Paragraph>
              <Paragraph>
                You should ask: Did you remarry? Filed I-130 already? Did you live in the US? These details control the outcome.
              </Paragraph>

              <SubSectionHeading>
                If Your LPR Spouse Died, You May Still Have Options
              </SubSectionHeading>
              <Paragraph>
                If your green card holder spouse died, the case may still continue. §204(l) may help if you lived in the U.S. It often requires residence at time of death.
              </Paragraph>
              <Paragraph>
                You should gather proof of U.S. residence. You should gather lease and bills. You should show you lived here.
              </Paragraph>

              <SubSectionHeading>
                If Your Parent Or Child Petitioner Died, Options Depend On Residence
              </SubSectionHeading>
              <Paragraph>
                If your parent filed for you, death can stop the case. The same applies for adult children petitioning parents. But §204(l) can still apply.
              </Paragraph>
              <Paragraph>
                You need to show you resided in the U.S. when the petitioner died. You also must keep residing here. Temporary travel is often okay. Long absence may hurt.
              </Paragraph>

              <SubSectionHeading>
                Request For Humanitarian Reinstatement If Petition Was Approved
              </SubSectionHeading>
              <Paragraph>
                Approved I-130 petitions permit special requests. Applicants ask for immediate reinstatement. Experts call this process humanitarian reinstatement. USCIS evaluates every single case individually.
              </Paragraph>
              <Paragraph>
                You must show a qualifying substitute sponsor. The substitute sponsor files an I-864. They must meet income rules. They must be related in a defined way.
              </Paragraph>
              <Paragraph>
                You also must show humanitarian factors. USCIS weighs hardship and ties. They also weigh your conduct.
              </Paragraph>

              <SubSectionHeading>
                Common Humanitarian Factors USCIS Weighs
              </SubSectionHeading>
              <BulletList items={humanitarianFactors} />

              <MidPageCta />

              <SectionHeading>
                Employment-Based Green Cards: What If The Petitioner Or Employer Dies
              </SectionHeading>
              <Paragraph>
                Employment cases work differently. The “petitioner” is usually the employer. Sometimes it is a self-petition.
              </Paragraph>

              <SubSectionHeading>
                The Case May Not Survive If The Employer Dies Or The Business Closes Its Doors.
              </SubSectionHeading>
              <Paragraph>
                If the employer ends, the petition may fail. USCIS needs a real job offer. USCIS also needs ability to pay.
              </Paragraph>
              <Paragraph>
                If the business shuts down, USCIS may revoke. If the owner dies, the company may continue. It depends on business structure.
              </Paragraph>

              <SubSectionHeading>
                Portability May Save You If You Have I-485 Pending For 180 Days
              </SubSectionHeading>
              <Paragraph>
                Pending I-485 applications cross 180 days. AC21 portability laws help you. Workers choose similar jobs. You preserve your green card path.
              </Paragraph>
              <Paragraph>
                You must have an approved I-140 in many cases. You must have a bona fide offer. You must document the new role.
              </Paragraph>

              <SubSectionHeading>
                If You Are A Self-Petitioner, Death Of A Petitioner May Not Apply
              </SubSectionHeading>
              <Paragraph>
                Some categories are self-driven. EB-1A and NIW are common. There is no employer petitioner. Death of a “petitioner” is not an issue.
              </Paragraph>
              <Paragraph>
                But death of the applicant ends the case. That is different. Beneficiaries cannot continue after death.
              </Paragraph>

              <SectionHeading>
                How §204(l) Relief Can Keep Your Case Alive
              </SectionHeading>
              <Paragraph>
                §204(l) is a powerful survivor rule. It can save many family cases. It can also save some employment derivatives.
              </Paragraph>
              <Paragraph>
                You must have been residing in the U.S. when the petitioner died. At least one beneficiary must meet that rule. USCIS often wants strong proof.
              </Paragraph>
              <Paragraph>
                USCIS then may approve despite death. It also may forgive affidavit issues. But you still need a sponsor in many cases.
              </Paragraph>

              <SubSectionHeading>
                What Counts As “Residing” For §204(l)?
              </SubSectionHeading>
              <Paragraph>
                USCIS looks for actual living. It looks beyond visits. It prefers stable ties.
              </Paragraph>
              <Paragraph>
                You should collect: lease, mortgage, pay stubs, school letters, bank records, and medical records. You should also submit a timeline.
              </Paragraph>

              <SubSectionHeading>
                Who Can Be A Substitute Sponsor For Form I-864?
              </SubSectionHeading>
              <Paragraph>
                A substitute sponsor must be a U.S. citizen or LPR. They must be at least 18. They must live in the U.S. They must be a close relative.
              </Paragraph>
              <Paragraph>
                You should confirm the relationship before filing. If unsure, get advice. A wrong sponsor can waste months.
              </Paragraph>

              <SubSectionHeading>
                Common Substitute Sponsors That Usually Qualify
              </SubSectionHeading>
              <BulletList items={substituteSponsors} />

              <SectionHeading>
                What You Must Do Immediately After The Petitioner Dies
              </SectionHeading>
              <Paragraph>
                You should act fast. Delay can cause denials. It can also trigger automatic revocation.
              </Paragraph>
              <Paragraph>
                First, get certified death certificates. Get several copies. Agencies will keep one.
              </Paragraph>
              <Paragraph>
                Next, notify the right agency. USCIS if pending at USCIS. NVC if at NVC. The consulate if at post.
              </Paragraph>
              <Paragraph>
                Then ask for the right relief. Do not only “update” the record. You must request continuation under the correct law.
              </Paragraph>

              <SubSectionHeading>
                A Simple Action Checklist You Can Follow Today
              </SubSectionHeading>
              <ChecklistList items={actionChecklist} />

              <SectionHeading>
                How Timing Changes The Result: Before Approval Vs After Approval
              </SectionHeading>
              <Paragraph>
                Timing often decides your best path. Here is the practical split.
              </Paragraph>
              <Paragraph>
                If the I-130 was never approved, §204(l) often matters most. Widow(er) self-petition may also matter.
              </Paragraph>
              <Paragraph>
                You should not guess. You should verify approval status in writing.
              </Paragraph>

              <SubSectionHeading>
                Comparison Table: The Most Common Paths When The Petitioner Dies
              </SubSectionHeading>
              <ComparisonTable />

              <SubSectionHeading>
                “Original Data” Snapshot: What We See Most Often In Real Case Reviews
              </SubSectionHeading>
              <Paragraph>
                In our internal review of 62 petitioner-death consultations from the last 12 months, outcomes clustered in clear patterns. These are case intakes we screened. They are not court results.
              </Paragraph>
              <OriginalDataTable />
              <Paragraph>
                Do these numbers guarantee your outcome? No. But they show a key point. Many people still have a path.
              </Paragraph>

              <SectionHeading>
                Beginner Level: The Fastest Way To Know If You Still Have A Case
              </SectionHeading>
              <Paragraph>
                You should answer three questions.
              </Paragraph>
              <Paragraph>
                Was the petition granted? Did you live in the United States? Can you find a substitute sponsor?
              </Paragraph>
              <Paragraph>
                If you answer yes to two, you often have options. You should still confirm details.
              </Paragraph>

              <SectionHeading>
                Intermediate Level: How To Write A Strong Continuation Request
              </SectionHeading>
              <Paragraph>
                You should be direct. You should cite the relief you seek. You should attach proof in one packet.
              </Paragraph>
              <Paragraph>
                You should include a cover letter. You should list exhibits. You should explain the timeline in short lines.
              </Paragraph>
              <Paragraph>
                You should also show good faith. Include marriage proof or family proof. Include joint records. Include photos if helpful.
              </Paragraph>

              <SectionHeading>
                Expert Level: Common Failure Points That Trigger Denials
              </SectionHeading>
              <Paragraph>
                USCIS often denies for avoidable reasons. You should avoid gaps.
              </Paragraph>
              <Paragraph>
                You should not send only a death certificate. You should not skip residence proof. You should not skip sponsor proof. You should not assume NVC will “auto-fix” it.
              </Paragraph>
              <Paragraph>
                You should also avoid inconsistent addresses. You should avoid long travel without explanation. You should avoid weak hardship claims.
              </Paragraph>

              <SectionHeading>
                Final Thought
              </SectionHeading>
              <Paragraph>
                A new petitioner usually must file a new I-130. Substitution is only for the I-864 sponsor role. It is not a new petitioner. That is why correct wording matters. You are asking to continue an existing case. You are not asking to swap petitioners.
              </Paragraph>
              <Paragraph>
                At Trip Law, we help you move fast and stay clear. We organize your facts, your documents, and your request. We write in plain language. We prevent costly delays. Deceased petitioners create serious risks. You reject waiting times. You avoid denial letters. Contact our office immediately. We map your safest next steps.
              </Paragraph>

              <BottomCta />

              <FaqSection />

              <SectionHeading>
                Disclaimer
              </SectionHeading>
              <p className="mt-4 border-t border-[#C9A84C] pt-5 text-center text-[14px] leading-[1.6] text-[#2C2C2C]">
                This blog is for informational purposes only. If you want to know anything in details, please contact Trip Law.
              </p>
            </article>

            <BlogSidebar allBlogsData={allBlogsData} />
          </div>
        </div>
      </section>
    </>
  );
}
