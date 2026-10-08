import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  CIVICS_TEST_FAILURE_ARTICLE_TITLE,
  CIVICS_TEST_FAILURE_FEATURE_IMAGE,
  CIVICS_TEST_FAILURE_FEATURE_IMAGE_ALT,
  CIVICS_TEST_FAILURE_FEATURE_IMAGE_CAPTION,
  CIVICS_TEST_FAILURE_FEATURE_IMAGE_DESCRIPTION,
  CIVICS_TEST_FAILURE_FEATURE_IMAGE_TITLE,
} from "./whatHappensIfYouFailTheCivicsTestMoreThanOnceMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "You generally receive two testing opportunities per Form N-400 application.",
  "USCIS usually schedules reexamination within 60 to 90 days following an initial failure.",
  "USCIS retests only failed testing portions, preserving the sections you passed.",
  "A second failure causes Form N-400 denial.",
  "N-400 submission dates dictate whether you take the 2025/2026 or older civics test version.",
  "Certain filers qualify for special exemptions (such as the 65/20 rule), and some applicants receive testing accommodations.",
];

const testVersionRows = [
  [
    "2025/2026 Format",
    "128 Civics Questions",
    "20 Questions",
    "12 Correct Answers",
  ],
  [
    "Older Format",
    "100 Civics Questions",
    "Up to 10 Questions",
    "6 Correct Answers",
  ],
  [
    "Senior Exemption (65/20)",
    "20 Designated Questions",
    "10 Questions",
    "6 Correct Answers",
  ],
];

const roadmapSteps = [
  "American Government Structure & Constitution",
  "Rights and Responsibilities of Citizens",
  "U.S. History, Geography & National Symbols",
  "Current Political Officials (Elected / Appointed)",
  "Specific Questions Missed on Previous Attempts",
];

const studyAreas = [
  "American government structure",
  "The Constitution",
  "Learn citizen rights",
  "American history",
  "Geography and symbols",
  "Current political officials",
  "Questions you previously missed",
];

const commonMistakes = [
  "Studying without speaking answers aloud.",
  "Ignoring questions about current officials.",
  "Practicing only once or twice.",
  "Memorizing without understanding concepts.",
  "Waiting until the interview date approaches.",
];

const faqItems = [
  [
    "Can I Retake The Civics Test If I Fail Twice?",
    "USCIS grants two testing chances per application. Double failures trigger application rejections. After failing twice, your application may be denied. You may need to explore review options or file a new application.",
  ],
  [
    "How Long Until The Second Civics Test?",
    "USCIS generally schedules the second examination within 60 to 90 days. The agency retests the portion you previously failed. You should use this period for focused preparation.",
  ],
  [
    "Do I Need To Retake English If I Pass It?",
    "USCIS retests only failed components. Officers preserve passed sections. Therefore, passing English while failing civics usually means another civics test.",
  ],
  [
    "Can I Apply Again After N-400 Denial?",
    "Rejected filers may submit fresh petitions. Applicants must fulfill naturalization requirements. Filers must resolve previous denial causes first.",
  ],
  [
    "Does The 2025 Civics Test Apply To Everyone?",
    "No. Filing dates dictate specific civics test versions. The 2025 format contains 128 official questions. Officers present twenty questions during interviews. Candidates need twelve correct answers.",
  ],
  [
    "What Happens If I Miss Six Questions?",
    "Candidates require twelve correct answers. Officers conclude testing after passing scores. Six incorrect answers never cause immediate failure.",
  ],
  [
    "Can I Take The Civics Test In Another Language?",
    "Certain applicants receive native language exemptions. The 65/20 provision permits native language testing for qualifying seniors. Candidates fulfill rigorous requirements.",
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
        Immigration Law | Naturalization &amp; Citizenship | United States
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Published October 7, 2026 | Updated October 7, 2026
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

function RetestWindowBadge() {
  return (
    <div className="my-8 border-l-4 border-[#1A2B4A] bg-[#F0F4FA] px-6 py-6 text-center">
      <p className="text-[28px] font-bold leading-tight text-[#1A2B4A] md:text-[34px]">
        60 TO 90 DAYS
      </p>
      <p className="mt-2 text-[14px] font-semibold uppercase tracking-wider text-[#4A5568] md:text-[15px]">
        Typical USCIS Retest Schedule Window Following Initial Test Failure
      </p>
    </div>
  );
}

function TestVersionTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[700px] w-full border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Test Version</th>
            <th className="px-4 py-3 font-bold">Total Questions</th>
            <th className="px-4 py-3 font-bold">Questions Asked</th>
            <th className="px-4 py-3 font-bold">Passing Score Required</th>
          </tr>
        </thead>
        <tbody>
          {testVersionRows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-[#EAF2FB]" : "bg-white"}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-4 align-top">
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

function MidCtaBanner() {
  return (
    <div className="my-10 bg-[#1A2B4A] px-6 py-8 text-center text-white">
      <h3 className="text-[20px] font-bold uppercase leading-tight text-white md:text-[22px]">
        NEED GUIDANCE ON YOUR NATURALIZATION APPLICATION?
      </h3>
      <p className="mt-2 text-[15px] font-semibold text-[#C9A84C] md:text-[16px]">
        Contact Trip Law Today for Legal &amp; Process Clarity
      </p>
      <div className="mt-5">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-[#C9A84C] px-6 py-2.5 text-[15px] font-bold text-[#1A2B4A] transition-colors hover:bg-[#b5953e]"
        >
          Contact Trip Law
        </Link>
      </div>
    </div>
  );
}

function RoadmapPanel() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-8 py-6">
      <h3 className="mb-4 text-[19px] font-bold leading-tight text-[#1A2B4A]">
        RECOMMENDED PREPARATION ROADMAP:
      </h3>
      <ol className="ml-6 list-decimal space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:font-bold marker:text-[#1A2B4A]">
        {roadmapSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function ClosingCtaBanner() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        READY TO PURSUE YOUR CITIZENSHIP WITH CONFIDENCE?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        Trip Law values simple communication. We simplify complex immigration details,
        prepare applicants with confidence, and clarify every stage of your naturalization
        process so you can move forward without confusion.
      </p>
      <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
        <p>Call (863) 599-6735</p>
        <p>1543 Lakeland Hills Blvd, Ste. 17, Lakeland, FL 33805</p>
        <p>Free Consultation | trip-law.com</p>
      </div>
      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-[#C9A84C] px-6 py-3 text-[16px] font-bold text-[#1A2B4A] transition-colors hover:bg-[#b5953e]"
        >
          Contact Trip Law Today
        </Link>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>Frequently Asked Questions (FAQs)</SectionHeading>
      <div className="mt-6 space-y-6">
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

export default function WhatHappensIfYouFailTheCivicsTestMoreThanOnce({
  allBlogsData,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {CIVICS_TEST_FAILURE_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={CIVICS_TEST_FAILURE_FEATURE_IMAGE}
                alt={CIVICS_TEST_FAILURE_FEATURE_IMAGE_ALT}
                title={CIVICS_TEST_FAILURE_FEATURE_IMAGE_TITLE}
                aria-describedby="civics-test-failure-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {CIVICS_TEST_FAILURE_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="civics-test-failure-feature-image-description"
                className="sr-only"
              >
                {CIVICS_TEST_FAILURE_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              If you do not pass the U.S. civics test (you fail the first time and
              you fail the retest), your{" "}
              <ExternalLink href="https://www.uscis.gov/n-400">
                Form N-400, Application for Naturalisation
              </ExternalLink>
              , will be formally denied. But not passing the test will not affect
              your current lawful permanent resident (Green Card) status and is
              not a basis for deportation. You can apply for citizenship again as
              many times as you want.
            </Paragraph>

            <TakeawayPanel />

            <RetestWindowBadge />

            <SectionHeading>
              What Happens After You Fail The Civics Test Once?
            </SectionHeading>
            <Paragraph>
              USCIS provides a second testing chance. Officers schedule the retest
              within 60 to 90 days. USCIS retests only the portion you failed.
              Therefore, you may not repeat every testing section. For example,
              you may pass English but fail civics. USCIS will generally retest
              civics only.
            </Paragraph>
            <Paragraph>
              USCIS confirms this second testing opportunity. USCIS calls this
              second appointment a reexamination. Applicants must utilize this
              preparation period. Initial failures never cancel applications
              automatically. Filers retain another testing opportunity.
            </Paragraph>

            <SectionHeading>
              What Happens If You Fail The Civics Test Twice?
            </SectionHeading>
            <Paragraph>
              Double test failures cause N-400 rejections. USCIS allows two
              testing attempts. Second failures breach testing requirements.
              USCIS policy mandates application rejection following repeated
              failures. Denials never block future citizenship permanently.
              Applicants retain alternative legal remedies. Individual situations
              dictate optimal strategies. Applicants need qualified immigration
              advice. Never consider your case permanently closed. Study the
              official denial notice carefully.
            </Paragraph>

            <SectionHeading>
              How Many Times Can You Take The Naturalization Test?
            </SectionHeading>
            <Paragraph>
              You generally receive two testing opportunities per N-400
              application. The first opportunity happens during your naturalization
              interview. The second opportunity happens during reexamination.
            </Paragraph>
            <Paragraph>
              The rules apply to the required English and civics portions. Officers
              retest failed sections during second appointments.
            </Paragraph>

            <SectionHeading>
              Which Civics Test Will You Take In 2026?
            </SectionHeading>
            <Paragraph>
              Application dates decide test versions. USCIS designed the new
              civics test. New applicants need this exam. The test includes 128
              questions. Officers ask twenty questions during interviews.
              Applicants must answer twelve questions correctly.
            </Paragraph>
            <Paragraph>
              Earlier submission dates require the previous exam format. That older
              version includes 100 civics questions. USCIS asks up to 10 questions.
              You must answer six correctly. Therefore, check your N-400 filing
              date first. This determines which study materials apply.
            </Paragraph>

            <TestVersionTable />

            <SectionHeading>
              How Does The 2025 Civics Test Work?
            </SectionHeading>
            <Paragraph>
              The 2025 test evaluates American government knowledge. The exam
              examines United States history. The officer asks questions orally.
              You answer the questions verbally.
            </Paragraph>
            <Paragraph>
              Some answers can change over time. Elections and appointments can
              affect certain answers. USCIS advises applicants to provide current
              answers. Applicants check official USCIS updates before interviews.
              Candidates review agency notices.
            </Paragraph>

            <MidCtaBanner />

            <SectionHeading>
              What Happens After USCIS Denies Your N-400?
            </SectionHeading>
            <Paragraph>
              Denials never terminate citizenship efforts permanently. Applicants
              must identify specific denial reasons first. The denial notice
              explains the reason. It can also provide information about
              available review procedures under{" "}
              <ExternalLink href="https://www.uscis.gov/policy-manual/volume-12-part-b-chapter-3">
                USCIS naturalization guidelines
              </ExternalLink>
              .
            </Paragraph>
            <Paragraph>
              Review available options after exam failures. Applicants sometimes
              request official administrative hearings. Eligible filers submit
              fresh N-400 applications. Personal circumstances dictate proper
              choices. Immigration attorneys evaluate legal options. Complex
              eligibility issues require legal counsel.
            </Paragraph>

            <SectionHeading>
              Can You File A New N-400 After Failing Twice?
            </SectionHeading>
            <Paragraph>
              You may be able to file a new N-400 after a denial. However, filing
              again does not automatically guarantee approval. You must still
              satisfy all naturalization requirements.
            </Paragraph>
            <Paragraph>
              You should also understand why you failed. Was the problem
              memorization? Was it nervousness? Did you misunderstand questions?
              Did language difficulties affect your answers?
            </Paragraph>
            <Paragraph>
              Identifying the problem can prevent another failure. A new
              application may also involve another filing fee. Therefore,
              preparation should begin before submitting another application.
            </Paragraph>

            <SectionHeading>
              How Should You Prepare After Failing The Civics Test?
            </SectionHeading>
            <Paragraph>
              The best strategy is targeted preparation. Do not simply reread all
              questions without practice. Start by identifying every question you
              struggled with. Then study those questions repeatedly. Practice
              answering aloud because the civics test is oral.
            </Paragraph>
            <Paragraph>
              You should also practice with someone else. Direct practice partners
              to impersonate USCIS officers. Deliver brief direct answers. Focus on
              understanding the answer. Memorization alone may not always help.
            </Paragraph>
            <Paragraph>
              USCIS provides official study materials. These include the official
              civics questions and answers. USCIS also provides other citizenship
              preparation resources on its{" "}
              <ExternalLink href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test">
                official citizenship study resource center
              </ExternalLink>
              .
            </Paragraph>

            <RoadmapPanel />

            <SubHeading>What Should You Study Before Your Second Test?</SubHeading>
            <Paragraph>
              Create a simple study plan. Applicants study official USCIS
              materials first. Filers avoid unverified web resources.
            </Paragraph>
            <Paragraph>Practice these areas:</Paragraph>
            <BulletList items={studyAreas} />

            <SectionHeading>
              What If You Struggle Because Of A Disability?
            </SectionHeading>
            <Paragraph>
              Some applicants may qualify for testing accommodations. Certain
              applicants may also qualify for medical exceptions. A disability
              accommodation can help eligible applicants participate effectively.
              USCIS accepts accommodation requests for appointments.
            </Paragraph>
            <Paragraph>
              Medical exceptions involve different requirements.{" "}
              <ExternalLink href="https://www.uscis.gov/n-648">
                Form N-648, Medical Certification for Disability Exceptions
              </ExternalLink>
              , may be required for qualifying applicants. You should not assume
              that failing means you simply need more studying. Personal
              circumstances demand distinct solutions. Consult qualified experts
              regarding test-impacting disabilities.
            </Paragraph>

            <SectionHeading>
              Can Older Applicants Receive Special Civics Test Consideration?
            </SectionHeading>
            <Paragraph>
              Certain older candidates obtain special 65/20 provisions. These
              rules accommodate specific age requirements. The policy requires
              permanent residency milestones.
            </Paragraph>
            <Paragraph>
              The 2025 exam format assigns twenty designated questions for
              eligible seniors. Candidates review these selected questions. The
              officer asks 10 questions from those questions. The applicant must
              answer six correctly.
            </Paragraph>
            <Paragraph>
              This rule can significantly reduce the study material. Filers meet
              clear qualification rules. Candidates satisfy requirements. Age
              alone never guarantees qualification.
            </Paragraph>

            <SectionHeading>
              What Are The Biggest Mistakes Applicants Make?
            </SectionHeading>
            <Paragraph>
              Many applicants prepare without understanding their actual test
              requirements. This can waste valuable study time. Some applicants
              also study outdated questions. The 2025 test changed the number of
              questions. Therefore, using the wrong study guide can create
              confusion.
            </Paragraph>
            <Paragraph>Other common mistakes include:</Paragraph>
            <BulletList items={commonMistakes} />
            <Paragraph>
              A structured study plan can reduce these problems.
            </Paragraph>

            <SectionHeading>Conclusion</SectionHeading>
            <Paragraph>
              Civics test failures bring discouragement. Initial failures never
              end citizenship goals. Double failures leave remaining options.
              Applicants must understand individual rights.
            </Paragraph>
            <Paragraph>
              Candidates need precise official requirements. Filers require
              proper study resources. Applicants need clear action plans.
            </Paragraph>
            <Paragraph>
              <Link
                href="/about"
                className="font-semibold text-[#1A2B4A] underline decoration-[#C9A84C] hover:text-[#C9A84C]"
              >
                Trip Law
              </Link>{" "}
              values simple communication. We simplify complex immigration
              details. Our team prepares applicants with confidence. Never allow
              confusion to cause testing setbacks. Trip Law clarifies the
              naturalization process.
            </Paragraph>
            <Paragraph>
              <Link
                href="/contact"
                className="font-semibold text-[#1A2B4A] underline decoration-[#C9A84C] hover:text-[#C9A84C]"
              >
                Contact Trip Law today
              </Link>
              . Pursue your citizenship goals with certainty.
            </Paragraph>

            <ClosingCtaBanner />

            <FaqSection />

            <div className="mt-12 border-t border-[#C9A84C] pt-6">
              <h2 className="mb-2 text-[18px] font-bold text-[#1A2B4A]">
                Disclaimer
              </h2>
              <p className="text-[14px] italic leading-[1.6] text-[#2C2C2C]">
                This blog is for informational purposes only. If you want to know
                anything in details, please{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#1A2B4A] underline decoration-[#C9A84C] hover:text-[#C9A84C]"
                >
                  contact Trip Law
                </Link>
                .
              </p>
            </div>
          </article>

          <BlogSidebar allBlogsData={allBlogsData} />
        </div>
      </div>
    </section>
  );
}
