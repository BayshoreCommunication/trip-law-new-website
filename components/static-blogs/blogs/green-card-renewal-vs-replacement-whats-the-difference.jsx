import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_ARTICLE_TITLE,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_ALT,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_CAPTION,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_DESCRIPTION,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_TITLE,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_DESCRIPTION,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_TITLE,
  GREEN_CARD_RENEWAL_VS_REPLACEMENT_SLUG,
} from "./greenCardRenewalVsReplacementMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "Replacement addresses other card problems.",
  "Both commonly use Form I-90.",
  "Lost cards can require replacement.",
  "Stolen cards can require replacement.",
  "Damaged cards can require replacement.",
  "Legal name changes can require replacement.",
];

const renewalReasons = [
  "Your Green Card is expired.",
  "Your Green Card expires within six months.",
  "Your card will expire soon.",
  "You need updated physical proof of residence.",
];

const renewalDocuments = [
  "Full legal name.",
  "A-Number.",
  "Current address.",
  "Date of birth.",
  "Green Card expiration date.",
];

const checklistItems = [
  "Confirm your filing reason.",
  "Use the current USCIS form.",
  "Review your personal information.",
  "Check current filing fees.",
  "Include required supporting evidence.",
  "Save your receipt notice.",
  "Monitor your case status.",
];

const comparisonRows = [
  [
    "Primary Reason",
    "Card is expiring or already expired",
    "Loss, theft, damage, or legal name/info change",
  ],
  [
    "USCIS Form",
    "Form I-90",
    "Form I-90",
  ],
  [
    "Filing Fee (Online)",
    "$415 (Fee waivers may apply)",
    "$415 (Fee exemptions for DHS error)",
  ],
  [
    "Filing Fee (Paper)",
    "$465",
    "$465",
  ],
  [
    "Impact on Resident Status",
    "Does not terminate permanent status",
    "Does not terminate permanent status",
  ],
];

const faqItems = [
  [
    "Is Green Card Renewal The Same As Replacement?",
    "Both processes differ. Renewal handles expiring cards. Replacement solves other issues. These situations include card loss. These issues include card theft. These problems involve physical damage. These cases involve printed errors.",
  ],
  [
    "What Form Do I Use For Green Card Renewal?",
    "Most permanent residents use Form I-90. USCIS uses this application for renewing regular Permanent Resident Cards. Always review current instructions before filing.",
  ],
  [
    "What Form Do I Use For Green Card Replacement?",
    "Most replacement requests use Form I-90. Your filing reason determines the supporting evidence required. USCIS provides specific instructions for each filing category.",
  ],
  [
    "Can I Replace A Lost Green Card?",
    "Yes. USCIS allows permanent residents to request replacement. A lost Green Card does not automatically end permanent resident status. You should replace the missing document promptly.",
  ],
  [
    "Can I Replace A Stolen Green Card?",
    "Yes. A stolen Green Card can generally be replaced. Form I-90 provides the standard process. Keep records related to the theft when appropriate.",
  ],
  [
    "Can I Replace A Damaged Green Card?",
    "Yes. USCIS allows replacement of damaged cards. Your application should accurately describe the card's condition. Follow current USCIS evidence instructions carefully.",
  ],
  [
    "How Much Does Form I-90 Cost?",
    "USCIS currently lists $415 for online filing. Paper filing currently costs $465. Certain applicants qualify for fee exemptions. Some filers receive fee waivers.",
  ],
  [
    "Does A Green Card Expiration End Permanent Residence?",
    "Generally, no. Card expiration does not automatically terminate permanent resident status. However, you still need valid documentation proving your status.",
  ],
  [
    "Can Conditional Residents Renew Their Green Cards?",
    "Usually, no. Conditional residents follow different procedures. They generally must file Form I-751 or Form I-829. The correct form depends on their conditional status.",
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
        Immigration Law | Permanent Residency | United States
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Published October 21, 2026 | Updated October 21, 2026
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

function ComparisonTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] w-full border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Feature / Aspect</th>
            <th className="px-4 py-3 font-bold">Green Card Renewal</th>
            <th className="px-4 py-3 font-bold">Green Card Replacement</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
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

function MidArticleCta() {
  return (
    <div className="my-10 border border-[#1A365D] bg-[#1A365D] px-6 py-8 text-center text-white">
      <h2 className="text-[20px] font-bold uppercase leading-tight text-white md:text-[22px]">
        Need Assistance Navigating Your Form I-90 Filing?
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-[15px] text-[#E2E8F0] md:text-[16px]">
        Ensure your application is complete and accurate with clear, direct communication support.
      </p>
      <div className="mt-5">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-[#C9A84C] px-6 py-2.5 text-[15px] font-bold text-[#1A2B4A] transition-colors hover:bg-[#b5953e]"
        >
          GET COMMUNICATION SUPPORT NOW
        </Link>
      </div>
    </div>
  );
}

function FinalArticleCta() {
  return (
    <div className="my-10 border border-[#1A365D] bg-[#1A365D] px-6 py-8 text-center text-white">
      <h2 className="text-[20px] font-bold uppercase leading-tight text-white md:text-[22px]">
        Ready to Communicate with Confidence?
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-[15px] text-[#E2E8F0] md:text-[16px]">
        Contact Trip Law today for clear, direct, and accessible solutions.
      </p>
      <div className="mt-5">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-[#C9A84C] px-6 py-2.5 text-[15px] font-bold text-[#1A2B4A] transition-colors hover:bg-[#b5953e]"
        >
          CONNECT WITH Trip Law
        </Link>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>Frequently Asked Questions (FAQs)</SectionHeading>
      <p className="mb-5 text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Common Questions About Green Card Renewal vs Replacement
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

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL}#breadcrumb`,
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
          "name": GREEN_CARD_RENEWAL_VS_REPLACEMENT_ARTICLE_TITLE,
          "item": GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "@id": `${GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL}#blogposting`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL
      },
      "headline": GREEN_CARD_RENEWAL_VS_REPLACEMENT_ARTICLE_TITLE,
      "name": GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_TITLE,
      "description": GREEN_CARD_RENEWAL_VS_REPLACEMENT_META_DESCRIPTION,
      "image": `https://www.trip-law.com${GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE}`,
      "url": GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL,
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.trip-law.com/blog#blog",
        "name": "Trip Law Blog",
        "url": "https://www.trip-law.com/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "Green Card Renewal vs Replacement and Form I-90 Procedures"
      },
      "keywords": [
        "green card renewal vs replacement",
        "Form I-90 replacement",
        "renew green card",
        "replace lost green card",
        "replace stolen green card",
        "USCIS Form I-90",
        "permanent resident card",
        "green card expiration",
        "Form I-90 filing fee",
        "immigration lawyer Lakeland"
      ],
      "author": {
        "@type": "Person",
        "name": "Hardam Tripathi",
        "url": "https://www.trip-law.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Trip Law, P.A.",
        "url": "https://www.trip-law.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.trip-law.com/assets/site-logo/trip-law-logo.png"
        }
      },
      "datePublished": "2026-10-21",
      "dateModified": "2026-10-21",
      "inLanguage": "en-US"
    },
    {
      "@type": "FAQPage",
      "@id": `${GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL}#faq`,
      "url": GREEN_CARD_RENEWAL_VS_REPLACEMENT_CANONICAL_URL,
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

export default function GreenCardRenewalVsReplacementWhatsTheDifference({
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
                {GREEN_CARD_RENEWAL_VS_REPLACEMENT_ARTICLE_TITLE}
              </h1>

              <figure className="mb-8">
                <Image
                  src={GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE}
                  alt={GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_ALT}
                  title={GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_TITLE}
                  aria-describedby="green-card-feature-image-description"
                  width={1000}
                  height={510}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                  {GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_CAPTION}
                </figcaption>
                <p
                  id="green-card-feature-image-description"
                  className="sr-only"
                >
                  {GREEN_CARD_RENEWAL_VS_REPLACEMENT_FEATURE_IMAGE_DESCRIPTION}
                </p>
              </figure>

              <Paragraph>
                The main difference is that a Green Card renewal is the process
                of renewing an existing 10-year Permanent Resident Card that has
                expired or is about to expire, while a Green Card replacement is
                the process of getting a new card because of loss, theft,
                damage, destruction, or error on the previous card or a legal
                name or biographical change.
              </Paragraph>

              <TakeawayPanel />

              <SectionHeading>
                How do renewal and replacement differ?
              </SectionHeading>
              <Paragraph>
                Renewal updates an expiring Green Card. Replacement creates a
                new card for another reason. Both processes generally use{" "}
                <ExternalLink href="https://www.uscis.gov/i-90">
                  Form I-90
                </ExternalLink>
                . A Green Card proves your lawful permanent resident status. The
                physical card also has an expiration date.
              </Paragraph>
              <Paragraph>
                An expired card does not automatically end permanent residence.
                However, you still need valid documentation. You may need a new
                card for employment. You may also need one for travel.
                Replacement is different because expiration is not always
                involved.
              </Paragraph>
              <Paragraph>
                For example, your card may be stolen. You could also damage the
                card accidentally. You might also receive a card with incorrect
                information. USCIS uses Form I-90 for many situations. The
                agency names the form Application to Replace Permanent Resident
                Card.
              </Paragraph>

              <SectionHeading>
                When Should You Renew Your Green Card?
              </SectionHeading>
              <Paragraph>
                You should generally renew when your regular Green Card expires
                soon. USCIS requires Form I-90. You must check your card
                expiration date. You must avoid last minute filing.
              </Paragraph>
              <Paragraph>
                Renewal protects legal status proof. It can also reduce
                problems with employers and travel. Your filing reason should
                accurately describe your situation.
              </Paragraph>
              <Paragraph>You may need renewal when:</Paragraph>
              <BulletList items={renewalReasons} />
              <Paragraph>
                USCIS publishes Form I-90 filing instructions. Applicants must
                review recent instructions before submission.
              </Paragraph>

              <SectionHeading>
                When Do You Need To Replace Your Green Card?
              </SectionHeading>
              <Paragraph>
                Replacement applies when your card needs replacing for another
                reason. Expiration is not necessarily the reason. Common
                replacement situations include loss, theft, and damage. You may
                also need replacement after certain information changes.
              </Paragraph>
              <Paragraph>
                Examples include a legally changed name. Incorrect information
                can also require replacement. USCIS specifically allows Form
                I-90 for these situations. You should describe the reason
                accurately. Your supporting evidence should match that reason.
                For example, name changes require evidence. USCIS specifically
                requests legal name-change evidence.
              </Paragraph>

              <SectionHeading>
                Green Card Renewal Vs. Replacement: A Quick Comparison
              </SectionHeading>
              <Paragraph>
                The biggest difference is your reason for filing. Renewal
                addresses an expiring card. Replacement addresses another card
                problem. The filing fee depends on current USCIS rules. USCIS
                currently lists $415 online. Paper filing currently costs $465.
              </Paragraph>
              <Paragraph>
                Some applicants may qualify for fee exemptions. Certain cases
                can also qualify for fee waivers. Always verify fees before
                filing. USCIS fees can change.
              </Paragraph>

              <ComparisonTable />

              <SectionHeading>
                How Does The Form I-90 Process Work?
              </SectionHeading>
              <Paragraph>
                Form I-90 is the primary application for both situations. You
                must choose the correct reason for filing. The basic process
                usually involves several steps.
              </Paragraph>
              <Paragraph>
                First, identify your Green Card problem. Then select the
                appropriate Form I-90 reason. Next, prepare your supporting
                documents. Review every answer before submitting. You can file
                online when eligible. USCIS accepts paper Form I-90 filings.
              </Paragraph>
              <Paragraph>
                USCIS issues receipt notices after submission. Your receipt
                contains an important case number. You can use that number to
                check your case. USCIS provides online case-status tools for
                applicants. USCIS may request additional evidence. It may also
                schedule biometrics when required.
              </Paragraph>

              <MidArticleCta />

              <SectionHeading>
                Which documents verify card renewal?
              </SectionHeading>
              <Paragraph>
                Renewal requires current Green Card details. Your exact
                evidence depends on your circumstances. Start by gathering your
                existing card information. Make sure your personal details are
                accurate.
              </Paragraph>
              <Paragraph>You should review your:</Paragraph>
              <BulletList items={renewalDocuments} />
              <Paragraph>
                If your name changed, provide legal evidence. USCIS specifically
                instructs applicants to attach name-change evidence. Follow
                current Form I-90 rules. Rules change over time.
              </Paragraph>

              <SectionHeading>
                What Documents Do You Need For Green Card Replacement?
              </SectionHeading>
              <Paragraph>
                Replacement evidence depends on why your card needs replacing.
                USCIS may require different evidence for different situations.
                A damaged card may require evidence showing the damage. A name
                change requires legal documentation.
              </Paragraph>
              <Paragraph>
                Lost or stolen cards create a different situation. You should
                provide the information requested by USCIS. Do not submit
                unnecessary documents. However, never omit required evidence.
                USCIS states that Form I-90 supports multiple replacement
                situations. These include lost and damaged cards.
              </Paragraph>

              <SectionHeading>
                Does Losing Your Green Card Mean Losing Permanent Residence?
              </SectionHeading>
              <Paragraph>
                No, losing your physical card does not automatically end
                permanent residence. The card proves status, but the card
                itself differs from your status. This distinction is extremely
                important.
              </Paragraph>
              <Paragraph>
                A lawful permanent resident remains a permanent resident.
                Losing the physical document does not automatically remove that
                status. However, proving your status can become difficult. You
                may need replacement documentation quickly.
              </Paragraph>
              <Paragraph>
                Therefore, report the problem through the proper USCIS process.
                Apply for replacement when appropriate. Report missing Green
                Cards immediately.
              </Paragraph>

              <SectionHeading>
                What Happens If Your Green Card Is Damaged?
              </SectionHeading>
              <Paragraph>
                Form I-90 replaces damaged Green Cards. The card&apos;s condition
                determines whether replacement is necessary. Damage can make the
                card difficult to read. It can also prevent reliable
                identification. You should avoid altering the card yourself. Do
                not laminate, cut, or modify it.
              </Paragraph>
              <Paragraph>
                Instead, follow USCIS replacement instructions. Keep the
                damaged card if USCIS requests it. Your filing reason should
                accurately describe the damage.
              </Paragraph>

              <SectionHeading>
                What Happens If USCIS Made A Mistake?
              </SectionHeading>
              <Paragraph>
                USCIS errors can sometimes qualify for a replacement without
                the normal fee. The specific error must come from DHS. USCIS
                lists fee exemptions for certain agency errors. This includes
                cards containing incorrect information because of DHS error.
              </Paragraph>
              <Paragraph>
                Review your new card immediately after receiving it. Check every
                important detail. Look at your name and birth date. Check other
                identifying information carefully. Contact USCIS if you discover
                an agency mistake. Few errors qualify for free replacement.
              </Paragraph>

              <SectionHeading>
                How Much Does Green Card Renewal Or Replacement Cost?
              </SectionHeading>
              <Paragraph>
                The current standard Form I-90 fee depends on the filing
                method. USCIS currently lists different online and paper fees.
                As of the current USCIS fee schedule, the standard amounts are:
                USCIS lists these amounts in its current fee schedule.
              </Paragraph>
              <Paragraph>
                Some applicants may qualify for different treatment. USCIS also
                identifies certain $0 filing categories. For example, some DHS
                errors can qualify. Certain other situations may also qualify.
                Check the current fee schedule before paying. Never rely on an
                old fee amount.
              </Paragraph>

              <div className="my-8">
                <p className="mb-3 text-[17px] font-bold text-[#1A2B4A]">
                  Figure 1: Form I-90 Cost Comparison Chart
                </p>
                <div className="overflow-hidden rounded-md border border-[#CBD5E0] bg-[#F8FAFC] p-4">
                  <Image
                    src="/assets/static-blogs/form-i-90-cost-comparison-chart.webp"
                    alt="USCIS Form I-90 Filing Fee Comparison Bar Chart: Online Filing $415 vs Paper Filing $465"
                    title="USCIS Form I-90 Filing Fee Comparison"
                    width={900}
                    height={480}
                    className="mx-auto h-auto w-full max-w-2xl object-contain"
                  />
                  <p className="mt-3 text-center text-[14px] italic text-[#4A5568]">
                    Figure 1: USCIS Form I-90 Filing Fee Comparison between Online Filing ($415) and Paper Filing ($465).
                  </p>
                </div>
              </div>

              <SectionHeading>
                How Long Does Green Card Renewal Or Replacement Take?
              </SectionHeading>
              <Paragraph>
                Processing times can vary significantly between cases. USCIS
                processing data shows substantial yearly changes. USCIS
                reported median Form I-90 wait times. Processing reached 7.9
                months by mid-2026.
              </Paragraph>
              <Paragraph>
                That figure is a historical median. It does not guarantee your
                processing time. Some cases finish faster. Other cases can take
                longer. You should check USCIS processing times directly. Your
                receipt information can help monitor your case.
              </Paragraph>

              <SourceBlock
                source={
                  <ExternalLink href="https://egov.uscis.gov/processing-times/">
                    USCIS Case Processing Times
                  </ExternalLink>
                }
              >
                USCIS historical data indicates median Form I-90 wait times
                hovered around 7.9 months in mid-2026, though individual
                adjudications depend on service center volume and evidence
                review.
              </SourceBlock>

              <SectionHeading>
                Can You Work While Your Green Card Renewal Is Pending?
              </SectionHeading>
              <Paragraph>
                An I-90 filing can provide evidence connected with your pending
                replacement. Your receipt notice can become important
                documentation. USCIS sends receipt notices after accepted
                filings. You should keep every notice safely.
              </Paragraph>
              <Paragraph>
                The specific proof available to you depends on your case. It
                also depends on your existing documents. Do not discard your
                current Green Card after filing. Follow USCIS instructions
                regarding your documents. Provide valid documents for employer
                requests.
              </Paragraph>

              <SectionHeading>
                Can applicants travel during card renewal?
              </SectionHeading>
              <Paragraph>
                Travel requires careful planning when your physical Green Card
                expires. Do not assume a pending I-90 alone solves travel
                issues. Your ability to travel depends on your documents. It
                also depends on your individual immigration circumstances.
              </Paragraph>
              <Paragraph>
                USCIS may provide evidence supporting your permanent resident
                status. Your receipt notice can be important. However, travel
                requirements can involve several factors. Airline requirements
                can also affect your journey. Review USCIS guidance before
                foreign travel.
              </Paragraph>

              <SectionHeading>
                What About Conditional Green Card Holders?
              </SectionHeading>
              <Paragraph>
                Conditional residents have different rules than regular
                permanent residents. Form I-90 does not replace the required
                condition-removal process. Conditional residents usually
                receive two-year cards. Their status requires a separate
                immigration filing.
              </Paragraph>
              <Paragraph>
                USCIS states that conditional residents cannot use I-90. This
                applies when the card expires soon. Marriage-based conditional
                residents generally use{" "}
                <ExternalLink href="https://www.uscis.gov/i-751">
                  Form I-751
                </ExternalLink>
                . Investor-based conditional residents generally use{" "}
                <ExternalLink href="https://www.uscis.gov/i-829">
                  Form I-829
                </ExternalLink>
                . Do not treat a conditional card like a standard Green Card.
              </Paragraph>

              <SectionHeading>
                What Common Mistakes Should You Avoid?
              </SectionHeading>
              <Paragraph>
                Wrong filing choices trigger many Green Card issues. Thorough
                preparation eliminates common delays. Common mistakes include
                choosing the wrong filing reason. Missing supporting evidence
                can also create problems.
              </Paragraph>
              <Paragraph>
                Other mistakes include outdated forms and incorrect fees.
                Applicants must verify their mailing address. USCIS mails
                crucial notices. USCIS delivers important documents.
              </Paragraph>
              <Paragraph>
                Review these details before Form I-90 submission.
              </Paragraph>
              <BulletList items={checklistItems} />
              <Paragraph>
                USCIS publishes official forms online. USCIS shares filing
                instructions online. Applicants must reject unofficial copies.
              </Paragraph>

              <SectionHeading>Conclusion</SectionHeading>
              <Paragraph>
                Immigration paperwork causes stress. Clear communication guides
                applicants.
              </Paragraph>
              <Paragraph>
                At Trip Law, we help make important information easier. We focus
                on clear, direct, and accessible communication.
              </Paragraph>
              <Paragraph>
                We believe people deserve information they can understand. We
                also believe important details should never feel overwhelming.
              </Paragraph>
              <Paragraph>
                If you need reliable communication support, connect with us. We
                are ready to help you communicate with confidence.
              </Paragraph>
              <Paragraph className="font-semibold text-[#1A2B4A]">
                Trip Law , Clear Messages. Better Connections.
              </Paragraph>

              <FinalArticleCta />

              <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
                <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
                  Need Help With Your Green Card Filing or Immigration Status?
                </h2>
                <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
                  Trip Law helps clients across the United States navigate Form
                  I-90 renewals, replacements, and complex immigration
                  procedures with precision and clarity.
                </p>
                <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
                  <p>Call (863) 599-6735</p>
                  <p>1543 Lakeland Hills Blvd, Ste. 17, Lakeland, FL 33805</p>
                  <p>Free Consultation | trip-law.com</p>
                </div>
              </div>

              <FaqSection />

              <div className="mt-12 border-t border-[#C9A84C] pt-6">
                <SectionHeading>Disclaimer</SectionHeading>
                <Paragraph className="text-[14px] italic leading-[1.6] text-[#4A5568]">
                  This blog is for informational purposes only. If you want to
                  know anything in details, please contact Trip Law.
                </Paragraph>
              </div>
            </article>

            <BlogSidebar allBlogsData={allBlogsData} />
          </div>
        </div>
      </section>
    </>
  );
}
