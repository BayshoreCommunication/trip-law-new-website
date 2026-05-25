import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  ADMIN_PROCESSING_ARTICLE_TITLE,
  ADMIN_PROCESSING_FEATURE_IMAGE,
  ADMIN_PROCESSING_FEATURE_IMAGE_ALT,
  ADMIN_PROCESSING_FEATURE_IMAGE_CAPTION,
  ADMIN_PROCESSING_FEATURE_IMAGE_DESCRIPTION,
  ADMIN_PROCESSING_FEATURE_IMAGE_TITLE,
} from "./administrativeProcessingMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "Administrative processing is not a visa denial. It is a deeper review phase after your interview.",
  "Most cases resolve within 60 days. Acting too early on inquiries can hurt your progress.",
  "Monitor your CEAC status weekly and look for a change in the Last Update Date.",
  "Submit any requested documents the same day to avoid adding weeks to your timeline.",
  "A Congressional Inquiry or Writ of Mandamus can force action if your case is stuck for months.",
  "An immigration attorney can identify document gaps before they become a denial reason.",
];

const stats = [
  [
    "60 Days",
    "Typical resolution window for most administrative processing cases",
  ],
  [
    "1+ Year",
    "Maximum wait time in complex security review cases with no fixed legal limit",
  ],
];

const challengeRows = [
  [
    "Missing/Incomplete Documents",
    "Stops entire case; officer requests additional materials",
    "Submit exactly what is requested the same day",
  ],
  [
    "Security or Background Flags",
    "Requires manual clearance from agencies in D.C.",
    "Wait for inter-agency review; attorney review helps",
  ],
  [
    "Administrative Backlogs",
    "Case buried in high-volume queue",
    "Submit status inquiry after the 60-day mark",
  ],
  [
    "Prior Visa History Issues",
    "Past Section 214(b) refusal triggers deeper review",
    "Prepare consistent documentation across all filings",
  ],
  [
    "System Errors or Mismatches",
    "Technical glitches delay adjudication without notice",
    "Monitor CEAC status weekly for Last Update Date change",
  ],
  [
    "No Clear Timeline",
    "Prolonged anxiety; no guidance from consulate",
    "Professional status inquiry email after 60 days",
  ],
];

const documentChecks = [
  "Security background checks across several federal databases.",
  "Name verification to avoid confusion with watchlisted individuals.",
  "Employment verification, especially for all technical work visas.",
  "Education and credentials validation for specialized professional roles.",
  "Immigration history review, including past refusals or overstays.",
  "Document authenticity checks, including financial and civil records.",
];

const approvalSigns = [
  'CEAC Status changes to the word "Issued."',
  "You receive a direct email from the consulate.",
  "Your passport is requested for the visa stamp.",
  "You see tracking updates from the courier service.",
];

const preventionTips = [
  "Double-check your DS-160 Form for complete accuracy.",
  "Ensure your I-797 Approval Notice has no errors.",
  "Keep employment details consistent across all legal forms.",
  "Provide a clear employment verification letter from HR.",
  "Include a detailed client contract if you are consulting.",
  "Always bring extra supporting evidence to your interview.",
  "Bring certified translations for all non-English documents.",
  "Disclose your full immigration history very honestly today.",
  "Prepare clear answers for every possible interview question.",
];

const faqItems = [
  [
    "Can a visa be rejected after administrative processing?",
    "Yes, the officer can still deny the visa. The review process leads to a final decision.",
  ],
  [
    "What is the longest administrative processing can take?",
    "There is no fixed legal limit for this. Some cases extend over a year for security.",
  ],
  [
    "Should I contact the embassy about my 221g?",
    "Yes, but wait for the 60-day mark first. Earlier inquiries rarely yield any helpful information today.",
  ],
  [
    "What are the chances of approval after 221g?",
    "Many cases are approved after the checks finish. This is likely if no eligibility issues exist.",
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
      className="font-semibold text-[#1A2B4A] underline decoration-[#C9A84C] decoration-2 underline-offset-4"
    >
      {children}
    </a>
  );
}

function IntroPanel() {
  return (
    <div className="mb-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5">
      <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1A2B4A]">
        Consular Processing | Administrative Review Guide
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        What to do after a 221(g), CEAC delay, or stalled visa case | TripLaw |
        Updated 2026
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
    <div className="my-9 grid gap-4 md:grid-cols-2">
      {stats.map(([value, label]) => (
        <div key={value} className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-5">
          <p className="text-[32px] font-bold leading-tight text-white">
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

function NotePanel({ children }) {
  return (
    <div className="my-7 border-l-4 border-[#C9A84C] bg-[#FFF9E7] px-6 py-5">
      <p className="text-[16px] font-semibold leading-[1.65] text-[#1A2B4A]">
        {children}
      </p>
    </div>
  );
}

function ChallengeTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Challenge</th>
            <th className="px-4 py-3 font-bold">Impact</th>
            <th className="px-4 py-3 font-bold">What To Do</th>
          </tr>
        </thead>
        <tbody>
          {challengeRows.map((row, index) => (
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

function CtaPanel() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Is Your Visa Case Stuck in Administrative Processing?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        TripLaw helps Florida applicants identify document gaps, communicate
        with consulates, and push for decisions when timelines become
        unreasonable.
      </p>
      <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
        <p>Call: (863)-599-6735 | Email: Info@trip-law.com</p>
        <p>1820 Florida Ave S, Ste. C, Lakeland, FL 33803</p>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
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

export default function AdministrativeProcessingArticle({ allBlogsData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {ADMIN_PROCESSING_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={ADMIN_PROCESSING_FEATURE_IMAGE}
                alt={ADMIN_PROCESSING_FEATURE_IMAGE_ALT}
                title={ADMIN_PROCESSING_FEATURE_IMAGE_TITLE}
                aria-describedby="administrative-processing-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {ADMIN_PROCESSING_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="administrative-processing-feature-image-description"
                className="sr-only"
              >
                {ADMIN_PROCESSING_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              Administrative processing is a temporary review phase that follows
              your visa interview. It is not a denial. Most cases resolve within
              60 days. You can monitor your CEAC status, submit requested
              documents promptly, and escalate if the wait extends beyond six
              months.
            </Paragraph>

            <TakeawayPanel />
            <StatGrid />

            <Paragraph>
              Many people who want a visa have to deal with a visa delay every
              year. This happens even when documents look perfect. The truth is
              simple for everyone. Administrative processing is not a denial.
              However, it can feel like a nightmare. Here is what is really
              happening behind the scenes, and what you should do next.
            </Paragraph>

            <SectionHeading>
              What Usually Happens During Administrative Processing?
            </SectionHeading>
            <Paragraph>
              Administrative processing begins right after your high-stakes
              interview. This occurs when the Consular Officer cannot make an
              immediate decision. Your file moves into a deeper adjudication
              phase.
            </Paragraph>

            <SubHeading>What They Check During Administrative Processing</SubHeading>
            <Paragraph>
              During this stage, multiple government agencies may review your
              case. The{" "}
              <ExternalLink href="https://travel.state.gov/">
                Department of State
              </ExternalLink>{" "}
              leads this complex effort. The{" "}
              <ExternalLink href="https://www.dhs.gov/">
                Department of Homeland Security
              </ExternalLink>{" "}
              often joins the review. These checks often include:
            </Paragraph>
            <BulletList items={documentChecks} />
            <Paragraph>
              A small job detail error can cause a long visa delay. Your case
              might undergo a sensitive technology review if applicable. This is
              common for the TAL, or Technology Alert List, categories.
            </Paragraph>

            <SectionHeading>What Are Common Administrative Challenges?</SectionHeading>
            <Paragraph>
              Beyond the paperwork, several common roadblocks can keep your
              application from reaching the finish line. But before that, you
              need to understand what a 221(g) white paper means.
            </Paragraph>
            <NotePanel>
              A 221(g) notice is often called a white paper. This paper means
              your visa is temporarily refused. Under INA Section 221(g), the
              officer needs more information or further adjudication of your
              facts. It is not a final denial of your dream. Think of it as a
              temporary pause.
            </NotePanel>

            <ChallengeTable />

            <SubHeading>1. Missing or Incomplete Documents</SubHeading>
            <Paragraph>
              Even one missing signature can stop your whole case. This includes
              outdated police certificates or missing employer letters. You must
              provide exactly what the officer requests. Failure to do so leads
              to more delays.
            </Paragraph>

            <SubHeading>2. Security or Background Flags</SubHeading>
            <Paragraph>
              Applicants with common names face extra scrutiny today. Those in
              high-tech fields often trigger additional security checks. These
              flags require manual clearance from agencies in D.C. This process
              is rarely fast for any applicant.
            </Paragraph>

            <SubHeading>3. No Clear Timeline or Updates</SubHeading>
            <Paragraph>
              Consulates do not provide a countdown for your visa. Many
              applicants feel ignored during this silent waiting period. You
              might see no changes for several months. This lack of transparency
              causes high levels of anxiety.
            </Paragraph>

            <SubHeading>4. Administrative Backlogs</SubHeading>
            <Paragraph>
              High application volumes often overwhelm the local consular staff.
              Staffing issues at the embassy can delay your decision. These
              backlogs have increased significantly in recent years. Your case
              is simply one in a large pile.
            </Paragraph>

            <SubHeading>5. Prior Visa History Issues</SubHeading>
            <Paragraph>
              A past Section 214(b) refusal can cause current delays. This
              relates to proving your non-immigrant intent to stay. The officer
              may want to re-examine your past files. Inconsistencies between
              applications are a massive red flag.
            </Paragraph>

            <SubHeading>6. System Errors and Mismatches</SubHeading>
            <Paragraph>
              Internal system errors or database mismatches can delay cases.
              These technical glitches are never explained to the applicant.
              They happen more often than the government likes to admit. Some
              may confuse this with Section 214(b) issues. That section relates
              to immigrant intent specifically.
            </Paragraph>

            <MoreForYou>
              What Happens If You Miss Your USCIS Biometrics Appointment?
            </MoreForYou>

            <SectionHeading>
              What Steps To Take If Immigration Application Is Stuck in
              Administrative Processing
            </SectionHeading>
            <Paragraph>
              Taking a proactive approach is the best way to regain control over
              your timeline. You do not have to sit in silence. There are ways
              to push back. Here is what actually works for most people:
            </Paragraph>

            <SubHeading>1. Wait the Initial 60 Days</SubHeading>
            <Paragraph>
              Most cases resolve within this two-month window. Acting too early
              can actually hurt your progress. The embassy usually ignores
              inquiries sent before 60 days. Give the adjudication process some
              time to work.
            </Paragraph>

            <SubHeading>2. Monitor Your CEAC Status Regularly</SubHeading>
            <Paragraph>
              Perform a{" "}
              <ExternalLink href="https://ceac.state.gov/CEACStatTracker/Status.aspx">
                Consular Electronic Application Center status check
              </ExternalLink>{" "}
              weekly. Look for the "Last Update Date" to change. Use your
              unique Case Number to log in. This shows someone is actually
              touching your file. A change in date is a very good sign.
            </Paragraph>

            <SubHeading>3. Submit Requested Documents Immediately</SubHeading>
            <Paragraph>
              Upload or mail your missing papers the same day. Even a small
              delay on your end adds weeks. Ensure every document is a clear and
              high-quality copy. This keeps the officer from asking for it
              again.
            </Paragraph>

            <SubHeading>4. Send a Professional Status Inquiry Email</SubHeading>
            <Paragraph>
              Wait until the 60-day mark has passed first. Draft a polite status
              inquiry to the specific consulate. Keep your message short and
              provide all the facts. Do not complain about the long wait time.
              Be professional to get a professional response.
            </Paragraph>
            <NotePanel>
              Must include these 3 things: case number, full name, interview
              date, and the consulate location.
            </NotePanel>

            <SubHeading>5. Review Your Case With an Immigration Attorney</SubHeading>
            <Paragraph>
              A lawyer can find hidden gaps in your file. They check for
              inconsistencies that you might have missed. Professional help
              ensures your response is legally sound. This can prevent a simple
              mistake from becoming a denial.
            </Paragraph>

            <SubHeading>6. Consider Heavy Escalation Options</SubHeading>
            <Paragraph>
              If your case is stuck for six months, escalate. A Congressional
              Inquiry is facilitated by a U.S. Senator. This forces the embassy
              to provide a formal update. It often restarts a file that was
              forgotten. If stuck over a year, consider a Writ of Mandamus. This
              Writ of Mandamus compels the government to decide.
            </Paragraph>
            <NotePanel>
              A document audit after the interview is vital. Review your own
              submission to find potential errors. You can fix them before the
              consulate flags them.
            </NotePanel>

            <MoreForYou>
              Can You Reopen an Immigration Case After a Removal Order?
            </MoreForYou>

            <SectionHeading>
              How Long Does It Take For A CEAC To Change To Approved Once
              Administrative Processing Is Complete?
            </SectionHeading>
            <Paragraph>
              Once processing finishes, the status often changes quickly. Many
              cases move from Administrative Processing to Issued status fast.
              This usually happens within a few business days. Some may take 1
              to 2 weeks total. Final checks might still be pending in the
              background.
            </Paragraph>
            <Paragraph>
              If your application needs to be checked by the FBI, the embassy
              cannot give you a visa until they get the okay from the FBI. The
              consul has to wait for the FBI to finish checking your
              application. This can make the whole process take a lot longer.
            </Paragraph>
            <NotePanel>
              Your status may fluctuate between "Refused" and "Administrative
              Processing." This ping-pong effect indicates the officer has new
              information but needs a final check before issuing your visa.
              Additionally, embassies in politically tense regions may halt
              status updates for months for high-level reviews, regardless of
              your background or document completeness.
            </NotePanel>

            <SectionHeading>How Do I Know If My 221g Is Approved?</SectionHeading>
            <Paragraph>
              Spotting the right signals will tell you exactly when your wait is
              finally coming to an end. But first, know why 221(g) takes so
              long.
            </Paragraph>
            <Paragraph>
              These delays happen because of inter-agency review. Your case
              moves across multiple systems and agencies. Each step depends on
              security clearance timelines. It also depends on external document
              verification results. This process is not centralized in one
              office.
            </Paragraph>
            <Paragraph>You will know through these specific signs:</Paragraph>
            <BulletList items={approvalSigns} />
            <Paragraph>
              Did you receive Yellow, Blue, or Pink slips? These colors indicate
              what the officer needed from you. If your status says "Refused,"
              do not panic yet. A CEAC Status "Refused" does not always mean
              denial. It often means the case is still in processing.
            </Paragraph>

            <SectionHeading>
              Preventative Tips To Not Occurring This Again
            </SectionHeading>
            <Paragraph>
              To reduce future administrative processing delays, follow these
              simple steps before your next immigration or visa interview.
            </Paragraph>
            <BulletList items={preventionTips} />

            <FaqSection />
            <CtaPanel />

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
