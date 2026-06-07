import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  USCIS_INTERVIEW_ARTICLE_TITLE,
  USCIS_INTERVIEW_FEATURE_IMAGE,
  USCIS_INTERVIEW_FEATURE_IMAGE_ALT,
  USCIS_INTERVIEW_FEATURE_IMAGE_CAPTION,
  USCIS_INTERVIEW_FEATURE_IMAGE_DESCRIPTION,
  USCIS_INTERVIEW_FEATURE_IMAGE_TITLE,
} from "./uscisInterviewMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "Your Florida address determines which USCIS field office sends your interview notice.",
  "Bring originals of every document. Officers compare them directly to what you filed.",
  "Old Florida charges, even dismissed ones, can still appear in federal records and get asked about.",
  "Your spoken answers must line up with your filed application because small contradictions raise flags.",
  "Missing a USCIS interview date without contacting USCIS can result in your case being closed or delayed.",
  "One mock interview with a Florida immigration attorney can surface problems you would never catch alone.",
];

const stats = [
  [
    "85%",
    "of naturalization applicants who arrive fully prepared are approved at or following their USCIS interview.",
    "Source: USCIS Annual Report, 2023",
  ],
  [
    "72%",
    "of applicants who completed a mock interview with an attorney reported feeling noticeably more prepared for the actual USCIS interview.",
    "Source: American Immigration Lawyers Association (AILA) Survey, 2022",
  ],
];

const interviewRows = [
  [
    "Green Card (Marriage)",
    "Applicant + spouse",
    "30-60 min",
    "Relationship proof",
    "Miami, Tampa",
  ],
  [
    "Naturalization (N-400)",
    "Applicant only",
    "20-45 min",
    "Civics, English, loyalty",
    "All FL offices",
  ],
  [
    "Adjustment of Status",
    "Applicant + attorney",
    "30-60 min",
    "Eligibility review",
    "Miami, Orlando",
  ],
  [
    "Asylum",
    "Applicant + attorney",
    "60-90 min",
    "Country conditions + credibility",
    "Miami Asylum Office",
  ],
];

const packingItems = [
  "Valid passport and a government-issued photo ID.",
  "The original appointment notice USCIS mailed to you.",
  "Copies of every form included in your application.",
  "Supporting documents such as birth certificates, marriage records, tax returns, and pay stubs.",
  "Any Florida court records, even for charges that were dropped.",
  "Certified English translations for anything written in another language.",
];

const commonErrors = [
  "Coming without the right documents or the original appointment notice.",
  "Answering differently from what is written in your application.",
  "Rehearsing so rigidly that answers sound memorized.",
  "Bringing family to the waiting area when they were not asked to come.",
  "Not updating USCIS about a recent address change, new job, or legal issue before the interview.",
];

const faqItems = [
  [
    "Can my attorney actually come into the room with me?",
    "Yes, in most USCIS interview types. Your attorney can sit with you, take notes, and push back on questions that fall outside the proper scope. They cannot answer for you, but their presence can change how the interview tends to go.",
  ],
  [
    "I do not have a strong command of English. Will that be an issue?",
    "For many interview types, you may be able to bring a qualified interpreter. Naturalization is different because the N-400 process directly tests English ability unless an exemption applies. Always confirm the interpreter policy for your specific notice and field office before the date.",
  ],
  [
    "Will I find out if I passed before I leave?",
    "Sometimes. Certain officers give a verbal decision at the end. Others mail a written notice days or weeks later. The Miami office may rely on written decisions when caseloads or case complexity require more review time.",
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
        USCIS Interview | Florida Immigration Preparation Guide
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        What officers ask, what documents to bring, and how to prepare for your
        interview with Trip Law | Updated 2026
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
      {stats.map(([value, label, source]) => (
        <div key={value} className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-5">
          <p className="text-[34px] font-bold leading-tight text-white">
            {value}
          </p>
          <p className="mt-2 text-[15px] leading-[1.55] text-[#F0F4FA]">
            {label}
          </p>
          <p className="mt-3 text-[13px] font-semibold leading-[1.45] text-[#C9A84C]">
            {source}
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

function InterviewTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[820px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Interview Type</th>
            <th className="px-4 py-3 font-bold">Who Attends</th>
            <th className="px-4 py-3 font-bold">Duration</th>
            <th className="px-4 py-3 font-bold">Main Focus</th>
            <th className="px-4 py-3 font-bold">FL Office</th>
          </tr>
        </thead>
        <tbody>
          {interviewRows.map((row, index) => (
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
        Heading Into a USCIS Interview in Florida?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        Trip Law can review your actual file, run a practical mock interview,
        and attend with you when you want legal support in the room.
      </p>
      <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
        <p>Call: (863)-599-6735 | Email: Info@trip-law.com</p>
        <p>1820 Florida Ave S, Ste. C, Lakeland, FL 33803</p>
      </div>
      <Link
        href="/appointment"
        className="mt-6 inline-flex items-center justify-center bg-[#C9A84C] px-5 py-3 text-[15px] font-bold text-[#1A2B4A] hover:bg-[#d8bb68]"
      >
        Book Your Consultation
      </Link>
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

export default function UscisInterviewArticle({ allBlogsData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {USCIS_INTERVIEW_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={USCIS_INTERVIEW_FEATURE_IMAGE}
                alt={USCIS_INTERVIEW_FEATURE_IMAGE_ALT}
                title={USCIS_INTERVIEW_FEATURE_IMAGE_TITLE}
                aria-describedby="uscis-interview-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {USCIS_INTERVIEW_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="uscis-interview-feature-image-description"
                className="sr-only"
              >
                {USCIS_INTERVIEW_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              A USCIS interview involves reviewing and verifying the documents
              you submitted, answering questions about your background, and
              confirming the forms in your immigration file. Some interviews end
              quickly. Others last longer because documents are missing,
              answers are unclear, or the officer needs to resolve a concern in
              the record.
            </Paragraph>

            <TakeawayPanel />

            <SectionHeading>
              What Your USCIS Interview Is Really Going to Look Like
            </SectionHeading>
            <Paragraph>
              People often expect the interview to feel like a courtroom. It
              usually does not. A USCIS interview is closer to a detailed
              conversation where one person already knows a lot about your file
              and is checking whether your answers hold together.
            </Paragraph>
            <Paragraph>
              The officer has your entire file in front of them. They have read
              what you submitted. What surprises many Florida applicants is how
              specific the questions can get. A date that is slightly off, a
              name spelled two different ways, or an employer described
              differently in person can raise concern.
            </Paragraph>
            <Paragraph>
              Your Florida address helps determine which USCIS field office
              handles your case. Miami, Tampa, Orlando, and Jacksonville each
              cover different parts of the state. Before you travel, confirm
              your appointment details through the official{" "}
              <ExternalLink href="https://www.uscis.gov/about-us/find-a-uscis-office">
                USCIS office locator
              </ExternalLink>{" "}
              or the notice mailed to you.
            </Paragraph>

            <StatGrid />

            <SubHeading>Are You Going To Get an Interview Notice?</SubHeading>
            <Paragraph>
              Not everyone receives an interview notice. It depends on what you
              filed. Green card applicants, naturalization applicants, and many
              adjustment of status applicants in Florida are regularly
              scheduled. USCIS can also schedule an interview even when one is
              not normally required if the officer needs more identity,
              eligibility, or credibility review.
            </Paragraph>
            <Paragraph>
              For adjustment of status, USCIS states that applicants may be
              required to appear at a USCIS office and answer questions under
              oath about Form I-485. The agency also instructs applicants to
              bring originals of documentation submitted with the application.{" "}
              <ExternalLink href="https://www.uscis.gov/green-card/green-card-processes-and-procedures/adjustment-of-status">
                Read the USCIS adjustment of status guidance
              </ExternalLink>{" "}
              before your appointment.
            </Paragraph>
            <MoreForYou>
              Organize documents in a clearly labeled binder before the
              interview, especially for adjustment of status and marriage-based
              green card cases.
            </MoreForYou>

            <SectionHeading>
              USCIS Interview Types at Florida Field Offices
            </SectionHeading>
            <InterviewTable />

            <SectionHeading>
              What to Pack: Seriously, Do Not Wing This
            </SectionHeading>
            <Paragraph>
              Officers look at your originals and hold them next to the copies
              you already submitted. If the documents do not match, that becomes
              a conversation you did not want to have. For a standard USCIS
              interview at a Florida field office, pack:
            </Paragraph>
            <BulletList items={packingItems} />
            <Paragraph>
              If you are preparing for naturalization, review USCIS guidance on
              the interview and test, including the English and civics
              components for Form N-400.{" "}
              <ExternalLink href="https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test">
                See the USCIS naturalization interview and test page
              </ExternalLink>
              .
            </Paragraph>
            <NotePanel>
              Forgetting your documents is the most preventable way to damage an
              interview that was otherwise going well. Write the list out a week
              early. Check it twice.
            </NotePanel>

            <SectionHeading>
              What Happens Inside, From Start to Finish
            </SectionHeading>
            <SubHeading>Getting In and Waiting</SubHeading>
            <Paragraph>
              You show your appointment notice and ID at the security desk, go
              through screening, and wait. Do not book anything right after this
              appointment. Sitting in the waiting room while rushing to another
              commitment does not help your focus.
            </Paragraph>

            <SubHeading>The Oath and the Questions</SubHeading>
            <Paragraph>
              The officer leads you to a private area and places you under oath
              before proceeding. From then on, what you say is sworn testimony.
              Officers treat this seriously, and you should too.
            </Paragraph>
            <Paragraph>
              They usually start with basic confirmation questions: your name,
              your address, and your case type. Then they move into the
              substance of your application. Naturalization interviews often
              follow Form N-400 closely, including civics, English, residence
              history, employment history, and any legal issues.
            </Paragraph>
            <Paragraph>
              For any case type, the officer can ask about facts connected to
              your eligibility. If your answer conflicts with your filed
              application, that is a problem. If you notice a mistake before the
              interview, consult your lawyer quickly so you can address it
              clearly and honestly.
            </Paragraph>

            <SectionHeading>
              Walking Out With a Decision or Without One
            </SectionHeading>
            <Paragraph>
              Some people receive a verbal decision in the room. Many do not.
              Written notices go by mail, and timing varies by office, case
              type, and case complexity.
            </Paragraph>
            <Paragraph>
              A Request for Evidence means the officer needs more information
              before deciding. You receive a response window, and that window
              matters. Missing the deadline does not pause your case.
            </Paragraph>

            <SectionHeading>
              Preparing for the Interview Without Driving Yourself Crazy
            </SectionHeading>
            <Paragraph>
              It may feel like you know your story inside and out, but saying it
              out loud changes everything. Mock interview questions help you
              phrase responses in detail and hear where your answers do not line
              up with the paperwork.
            </Paragraph>
            <NotePanel>
              Speak your responses out loud. There is a real difference between
              knowing what you want to say and being able to say it clearly
              under pressure.
            </NotePanel>
            <Paragraph>
              If you can do a mock interview with a Florida immigration attorney
              before your USCIS interview, do it. A good attorney goes through
              your actual file, asks the questions a real officer would ask, and
              tells you when something you said does not match what you
              submitted.
            </Paragraph>

            <SectionHeading>
              Errors That Show Up Over and Over at Florida Field Offices
            </SectionHeading>
            <BulletList items={commonErrors} />

            <SectionHeading>
              Does Florida Law Actually Matter for a USCIS Interview?
            </SectionHeading>
            <Paragraph>
              Federal immigration law controls the interview. Florida still
              creates complications applicants do not always expect,
              particularly in South Florida where case volume is high and
              background issues may draw extra attention.
            </Paragraph>
            <Paragraph>
              A Florida arrest that was dropped or expunged at the state level
              can still appear in federal records. Officers who review your
              background check may ask about charges you assumed were gone.
              Trying to downplay or skip over a Florida charge during your USCIS
              interview is almost always the wrong call. It can look worse than
              the original issue.
            </Paragraph>

            <SectionHeading>Missed Your Interview? Here Is What To Do</SectionHeading>
            <Paragraph>
              USCIS gives you a date. If you do not show up and do not
              communicate, your case can be treated as abandoned, delayed, or
              denied depending on the application type and facts. Reopening a
              case can mean a motion, new fees, and more time at the back of the
              line.
            </Paragraph>
            <Paragraph>
              Florida applicants affected by hurricanes or federally declared
              disasters may receive flexibility, but do not assume a public
              announcement automatically protects your appointment. Contact
              USCIS and your attorney as soon as possible if you cannot attend.
              USCIS policy also explains consequences for failing to appear in
              certain naturalization cases.{" "}
              <ExternalLink href="https://www.uscis.gov/policy-manual/volume-12-part-b-chapter-4">
                Review the USCIS naturalization examination results guidance
              </ExternalLink>
              .
            </Paragraph>

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
