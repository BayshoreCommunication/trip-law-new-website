import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  ENTREPRENEUR_ARTICLE_TITLE,
  ENTREPRENEUR_FEATURE_IMAGE,
  ENTREPRENEUR_FEATURE_IMAGE_ALT,
  ENTREPRENEUR_FEATURE_IMAGE_CAPTION,
  ENTREPRENEUR_FEATURE_IMAGE_DESCRIPTION,
  ENTREPRENEUR_FEATURE_IMAGE_TITLE,
} from "./entrepreneurVisaMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "No E-2 treaty? You still have 6 strong alternative pathways to U.S. residency.",
  "EB-2 NIW lets you self-petition for a green card with no employer sponsor needed.",
  "O-1A is the go-to for high-growth tech founders with media coverage or VC funding.",
  "L-1A works if you already run a business abroad and want to expand into the U.S.",
  "EB-5 requires $800K-$1.05M investment and creation of 10 full-time jobs.",
  "IER (International Entrepreneur Rule) is a lesser-known temporary parole option for qualifying startup founders.",
  "Documentation quality is the single biggest factor separating approvals from denials.",
];

const stats = [
  ["6 Pathways", "for non-treaty entrepreneurs"],
  ["$800,000", "minimum EB-5 investment (TEA)"],
  ["No Lottery", "EB-2 NIW & O-1A have no cap"],
];

const comparisonRows = [
  ["EB-2 NIW", "Advanced-degree founders", "National importance + merit", "Direct"],
  ["O-1A", "High-growth startup founders", "3 of 8 evidence criteria", "Bridge"],
  [
    "L-1A",
    "Existing foreign businesses",
    "1 yr abroad + corp. relationship",
    "via EB-1C",
  ],
  ["EB-5", "Wealthy investors", "$800K-$1.05M + 10 jobs", "Direct"],
  [
    "IER",
    "Early-stage startup founders",
    "10% ownership + VC funding",
    "Temporary",
  ],
  [
    "H-1B",
    "Degree-holding professionals",
    "Bachelor's + prevailing wage",
    "Bridge",
  ],
];

const limitations = [
  "O-1A requires strong documentation of recognition, not just business success",
  "EB-2 NIW demands clear evidence of national importance and long-term impact",
  "L-1A requires maintaining active foreign business operations continuously",
  "EB-5 involves financial risk and strict job creation compliance",
  "International Entrepreneur Rule provides only temporary authorization",
  "H-1B remains subject to lottery selection and annual caps",
];

const services = [
  "Case evaluation based on your background and business model",
  "Full preparation and submission of immigration petitions",
  "Structuring evidence for stronger adjudication outcomes",
];

const faqItems = [
  [
    "How do I get a green card from investing?",
    "Use the EB-5 program by investing $800,000 into projects. You must create 10 jobs for U.S. workers.",
  ],
  [
    "Who has to pay a large H-1B fee?",
    "Employers usually cover filing and legal expenses for staff. Fees vary based on company size and law changes.",
  ],
  [
    "Can I live anywhere in the U.S. with EB-5?",
    "Yes. Permanent residents may live and work anywhere in the United States.",
  ],
  [
    "Which US visa is hardest to get?",
    "O-1A and EB-1A visas are difficult. It requires high-level evidence of your extraordinary ability status.",
  ],
  [
    "Which country gives immigration the easiest?",
    "Countries like Canada and Portugal offer simpler immigration systems. However, U.S. opportunities remain stronger for entrepreneurs.",
  ],
  [
    "What countries will pay US citizens to move?",
    "Some European and Asian countries offer incentives for remote workers and entrepreneurs.",
  ],
  [
    "Who has to pay $100,000 for an H-1B visa?",
    "There is no fixed $100,000 fee requirement under current immigration regulations.",
  ],
  [
    "How hard is it to get an E-2 visa?",
    "It depends on nationality, investment strength, and business viability.",
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

function IntroPanel() {
  return (
    <div className="mb-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5">
      <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1A2B4A]">
        Business Immigration | Entrepreneur Visa Guide
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Strategic pathways for global founders | TripLaw | Updated 2026
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

function StatGrid() {
  return (
    <div className="my-9 grid gap-4 md:grid-cols-3">
      {stats.map(([value, label]) => (
        <div key={value} className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-5">
          <p className="text-[28px] font-bold leading-tight text-white">
            {value}
          </p>
          <p className="mt-2 text-[15px] leading-[1.55] text-[#F0F4FA]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

function MoreForYou({ children }) {
  return (
    <div className="my-7 bg-[#F0F4FA] px-6 py-4">
      <p className="text-[16px] font-semibold leading-[1.6] text-[#1A2B4A]">
        More for you: {children}
      </p>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Visa / Program</th>
            <th className="px-4 py-3 font-bold">Best For</th>
            <th className="px-4 py-3 font-bold">Key Requirement</th>
            <th className="px-4 py-3 font-bold">Green Card?</th>
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

function ServicePanel() {
  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        If You Want to Apply, TripLaw Can Do That
      </h2>
      <Paragraph>
        This is where most entrepreneurs lose time and momentum. They choose a
        visa category, however struggle with legal requirements and filings.
        Mistakes in documentation often result in delays or denials. The
        immigration process involves more than submitting forms. It requires
        strategy, positioning, and compliance with federal regulations.
      </Paragraph>
      <Paragraph>
        TripLaw helps entrepreneurs across Lakeland, Florida, and surrounding
        regions. We guide founders through business immigration with clear legal
        direction.
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
        People Also Ask About US Entrepreneur Immigration
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

export default function UsImmigrationOptionsEntrepreneur({ allBlogsData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {ENTREPRENEUR_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={ENTREPRENEUR_FEATURE_IMAGE}
                alt={ENTREPRENEUR_FEATURE_IMAGE_ALT}
                title={ENTREPRENEUR_FEATURE_IMAGE_TITLE}
                aria-describedby="entrepreneur-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {ENTREPRENEUR_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="entrepreneur-feature-image-description"
                className="sr-only"
              >
                {ENTREPRENEUR_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              Entrepreneurs who do not have an E-2 treaty country can seek U.S.
              immigration through the O-1A visa for extraordinary ability, the
              L-1 visa for intracompany transfers, the EB-5 immigrant investor
              visa, or the International Entrepreneur Rule (IER). These can be
              for business operations, expansion, or investment-based residency,
              often with no nationality restrictions.
            </Paragraph>

            <TakeawayPanel />
            <StatGrid />

            <SectionHeading>
              The E-2 Limitation Where Nationality Matters
            </SectionHeading>
            <Paragraph>
              Everyone keeps hyping the E-2 treaty investor path lately. This
              person comes from a Treaty Country with trade deals. They invest
              substantial capital into a real U.S. business.
            </Paragraph>
            <Paragraph>
              Imagine a UK citizen opening a franchise in Lakeland. They spend
              $120,000 and manage the daily operations. This is not a marginal
              enterprise for personal support. That investor gets permission to
              live in the U.S. Their spouse can also apply for work
              authorization. The visa stays active as long as the company runs.
            </Paragraph>
            <Paragraph>
              It sounds ideal for non-treaty nation entrepreneurs at first.
              However, the limitation gets ignored by most casual blogs. It is
              not available to every global business owner. If you are from
              India or Brazil, you do not qualify.
            </Paragraph>
            <Paragraph>
              The Treaty of Commerce and Navigation is quite exclusive. An
              at-risk investment is required for every adjudication process. A
              tech founder in China needs a different strategy. No treaty means
              the E-2 is a dead end. Smarter strategies do not depend on treaty
              status at all.
            </Paragraph>

            <MoreForYou>
              How Much Money Do I Need to Invest for an E2 Visa?
            </MoreForYou>

            <SectionHeading>
              US Immigration Visa Options for Non-Citizens
            </SectionHeading>
            <Paragraph>
              So what happens when E-2 is not an option? Entrepreneurs shift
              strategy and use more flexible immigration pathways. Many of these
              options align better with long-term business and residency goals.
            </Paragraph>

            <SubHeading>1. Self-Petition EB-2 NIW: No Employer Required</SubHeading>
            <Paragraph>
              EB-2 NIW allows you to self-petition for a green card. You do not
              need a boss to sponsor you. This follows the legal Dhanasar
              framework for high success. Your work must have national
              importance and merit. An advanced degree professional can skip the
              labor cert.
            </Paragraph>
            <Paragraph>
              Imagine in South Florida, a project aligns perfectly with U.S.
              national interests. You must show you can advance your specific
              project. A strong business plan is a direct path to permanent
              residency status. You maintain professional autonomy while
              building your American dream.
            </Paragraph>

            <SubHeading>
              2. Extraordinary Ability O-1A: For High-Growth Tech Founders
            </SubHeading>
            <Paragraph>
              The O-1A is a favorite for startup founders today. It targets
              individuals with truly extraordinary ability and talent.
            </Paragraph>
            <Paragraph>
              If you raised funding, this might work for you. You need proof of
              national or international recognition. Evidence includes media
              coverage, awards, or venture capital funding. The O-1A requires 3
              of 8 criteria for approval.
            </Paragraph>
            <Paragraph>
              This visa offers a 15-day premium processing option now. It has no
              nationality restrictions for global entrepreneurs. Many founders
              use this as a bridge to residency. It is fast, flexible, and
              carries high prestige.
            </Paragraph>

            <SubHeading>
              3. Intracompany Transfer Corporate Expansion via the L-1A Visa
            </SubHeading>
            <Paragraph>
              The L-1A visa is perfect for established foreign companies. You
              must already run a business outside the U.S. Through an
              intracompany transfer, you move to America.
            </Paragraph>
            <Paragraph>
              Your foreign company transfers you to launch a branch. This works
              for founders, executives, or senior managers. You must meet a
              qualifying corporate relationship first. The U.S. company can be a
              subsidiary vs. affiliate.
            </Paragraph>
            <Paragraph>
              You need to be in a management position and have spent at least
              one year working outside the country in the past three years. This
              visa is open to founders of any nationality. Can even lead to a
              green card through EB-1C status. Places like Tampa in Florida have
              a strong market for business expansion.
            </Paragraph>

            <SubHeading>
              4. Immigrant Investor The EB-5 Pathway For Direct Investment
            </SubHeading>
            <Paragraph>
              The EB-5 Immigrant Investor Program is the direct route. You put
              capital into a U.S. commercial enterprise.
            </Paragraph>
            <Paragraph>
              You must create at least 10 full-time jobs. The investment for
              EB-5 is $800,000 in a TEA (Targeted Employment Area). Otherwise,
              the standard investment is currently $1,050,000. You must prove
              the funds were obtained lawfully.
            </Paragraph>
            <Paragraph>
              This leads to conditional permanent residence for two years. A
              Regional Center vs. Direct Investment choice is available. You
              file an I-526 petition to start the process. This carries some
              capital risk but offers a green card. It is the most certain path
              for wealthy families. You can live anywhere in the United States
              legally.
            </Paragraph>

            <MoreForYou>
              EB-5 Investor Visa Updates - Minimum Investment and Processing
              Time in 2026
            </MoreForYou>

            <SubHeading>
              5. Startup Parole International Entrepreneur Rule (IER)
            </SubHeading>
            <Paragraph>
              The International Entrepreneur Rule flies under the radar. It is a
              federal regulation, not a traditional visa. IER allows founders to
              stay in the U.S. temporarily.
            </Paragraph>
            <Paragraph>
              You must have 10% ownership in a startup. The startup must show
              high growth potential today. You need over $264,147 from qualified
              U.S. investors. Or you can show $105,659 in government grants.
            </Paragraph>
            <Paragraph>
              This is an entrepreneur parole status for founders. It is a great
              backup when visas fail. Your spouse can also apply for work
              authorization here. Many use it to grow enough for O-1A. It is a
              flexible tool for the tech industry.
            </Paragraph>

            <SubHeading>
              6. Specialty Occupation H-1B Visa for Specialty Occupations
            </SubHeading>
            <Paragraph>
              The H-1B for founders is used very strategically now. It requires
              a bachelor's degree or higher education level. Your job must match
              your specific academic field.
            </Paragraph>
            <Paragraph>
              A founder can set up a board for sponsorship. This creates a valid
              employer-employee relationship for the law. You must pay the
              government-mandated prevailing wage amount.
            </Paragraph>
            <Paragraph>
              In 2026, the lottery weighted selection is very competitive. There
              is an annual cap on H-1B visa numbers. However, it remains a
              viable path for many professionals. You can eventually transition
              this into a green card. It requires a patient strategy and careful
              legal filing.
            </Paragraph>

            <SectionHeading>Quick Comparison: Which Path Fits You?</SectionHeading>
            <ComparisonTable />

            <SectionHeading>
              Are There Any Limitations For Applying These Options?
            </SectionHeading>
            <Paragraph>
              Every path has hurdles you must clear carefully. Here's what
              entrepreneurs often discover during the process.
            </Paragraph>
            <BulletList items={limitations} />
            <Paragraph>
              Another major issue is documentation quality. Immigration officers
              review detailed records, not general statements or claims.
              Processing times also vary significantly between categories. Some
              approvals take weeks, while others extend beyond one year.
            </Paragraph>

            <ServicePanel />

            <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
              <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
                Ready to Build Your U.S. Business Without an E-2?
              </h2>
              <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
                TripLaw helps entrepreneurs across Lakeland, Florida find the
                right immigration path. We evaluate your background, prepare
                your petition, and position your case for the strongest outcome.
              </p>
              <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
                <p>Call (863) 599-6735</p>
                <p>154 Lakeland Hills Blvd, Lakeland, FL</p>
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
