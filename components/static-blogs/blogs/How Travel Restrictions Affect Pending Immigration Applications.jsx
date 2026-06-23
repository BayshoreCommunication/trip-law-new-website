import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  TRAVEL_RESTRICTIONS_ARTICLE_TITLE,
  TRAVEL_RESTRICTIONS_FEATURE_IMAGE,
  TRAVEL_RESTRICTIONS_FEATURE_IMAGE_ALT,
  TRAVEL_RESTRICTIONS_FEATURE_IMAGE_CAPTION,
  TRAVEL_RESTRICTIONS_FEATURE_IMAGE_DESCRIPTION,
  TRAVEL_RESTRICTIONS_FEATURE_IMAGE_TITLE,
} from "./travelRestrictionsMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "Your Adjustment of Status (I-485) isn't paused by the consular freeze, but a separate USCIS memo does the same job.",
  "Leaving the U.S. while your application is pending can wipe out years of waiting in a single trip.",
  "B-1/B-2, F, M, and J visa holders from restricted countries face partial or full bans.",
  "Exceptions exist. But they don't find themselves. An immigration attorney has to go looking.",
];

const visaImpactRows = [
  ["Immigrant Visa (Abroad)", "Full Pause", "Critical"],
  ["Asylum (I-589)", "Full Pause", "Critical"],
  ["Green Card (I-485 in U.S.)", "Paused by USCIS Memo", "High"],
  ["EAD / Work Permit", "Paused by USCIS Memo", "High"],
  ["H-1B (Restricted Country)", "Increased Scrutiny", "Elevated"],
  ["B-1/B-2 Tourist Visa", "Partial Ban", "High"],
  ["F / M / J Student Visa", "Partial Ban", "High"],
  ["Lawful Permanent Residents", "Mostly Exempt", "Lower"],
];

const faqItems = [
  [
    "Can a travel ban cancel an already-approved green card?",
    "Not directly. But USCIS is actively re-reviewing approvals granted after January 20, 2021 for restricted-country nationals. Get your file reviewed now, before something moves without you knowing.",
  ],
  [
    "Does the 2026 travel ban affect U.S. citizens petitioning for family abroad?",
    "Yes. If your petitioned relative is a national of a restricted country, their immigrant visa appointment at any U.S. Consulate abroad is paused with no set end date.",
  ],
  [
    "What happens to my EAD if my green card is stuck on hold?",
    "USCIS paused EAD adjudications alongside the I-485 hold. If your work permit is expiring soon, file a renewal immediately. Gaps in work authorization have real consequences.",
  ],
  [
    "Are any nationalities exempt from the USCIS benefit pause?",
    "Lawful permanent residents and dual nationals holding a passport from a non-restricted country may qualify for exceptions. Don't assume you qualify without a legal review of your specific situation.",
  ],
  [
    "How long is this travel ban actually going to last?",
    "No official end date exists. The January 2026 proclamation has no automatic sunset clause. It stays in force until a new presidential action or a court order changes it.",
  ],
];

const steps = [
  {
    title: "Find out exactly what your country's status is.",
    desc: "Full ban. Partial ban. Benefit hold. These aren't the same thing. Trip Law tracks the list in real time and can tell you precisely what applies to your case.",
  },
  {
    title: "Don't book a flight without Advance Parole in hand.",
    desc: "If your I-485 is pending, leaving the country without that document abandons your application automatically. No exceptions, no appeals based on family emergencies. The rule doesn't bend.",
  },
  {
    title: "Answer every USCIS notice on time.",
    desc: "The benefit pause doesn't buy you a pass on RFE responses or Notices of Intent to Deny. USCIS keeps issuing those regardless. A missed deadline closes your case whether it's frozen or not.",
  },
  {
    title: "Get prior approvals reviewed.",
    desc: "Any benefit USCIS approved for you after January 20, 2021 may be under active re-review right now. If that window covers your case, you need eyes on your file before something unexpected happens.",
  },
  {
    title: "Build your paper trail.",
    desc: "For adjustment of status cases, documentation of your ties to Florida, your employer, your family, your community, carries real weight when adjudication resumes. Start collecting it now, not later.",
  },
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
        Immigration Law | Travel Bans & Restrictions | United States
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Updated 2026
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

function QuotePanel({ text, author }) {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5 italic text-[#1A2B4A]">
      <p className="text-[17px] font-medium leading-[1.65]">"{text}"</p>
      <p className="mt-2 text-[15px] font-bold not-italic">— {author}</p>
    </div>
  );
}

function StatPanel() {
  return (
    <div className="my-8 border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6">
      <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
        January 2026 USCIS Action
      </p>
      <p className="mt-2 text-[56px] font-bold leading-none text-white">39</p>
      <p className="mt-2 text-[17px] leading-[1.55] text-[#F0F4FA]">
        Countries under an indefinite benefit hold, including re-review of
        approvals dating back to January 20, 2021
      </p>
    </div>
  );
}

function VisaImpactTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Visa / Benefit Type</th>
            <th className="px-4 py-3 font-bold">Impact Level</th>
            <th className="px-4 py-3 font-bold">Severity</th>
          </tr>
        </thead>
        <tbody>
          {visaImpactRows.map((row, index) => (
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

function MidPageCta() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] p-6">
      <h2 className="text-[20px] font-bold text-[#1A2B4A]">
        Is Your Immigration Case Caught in the 2026 Travel Ban?
      </h2>
      <p className="mt-2 text-[16px] text-[#2C2C2C]">
        Attorney Hardam Tripathi reviews your specific situation. Don't wait for
        a denial letter to show up first.
      </p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#1A2B4A] text-white px-5 py-2.5 text-[15px] font-bold hover:bg-[#162030] rounded-md transition-colors"
        >
          Schedule Your Free Consultation Today
        </Link>
      </div>
    </div>
  );
}

function ComparisonPanel() {
  return (
    <div className="my-9 grid gap-6 md:grid-cols-2">
      <div className="border-t-4 border-red-500 bg-[#FFF5F5] p-6 rounded-sm">
        <h3 className="text-[18px] font-bold text-red-800 uppercase tracking-wide">
          WITHOUT Legal Guidance
        </h3>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-red-950 list-disc pl-5 marker:text-red-500">
          <li>Application frozen, no updates for months</li>
          <li>RFE deadlines missed, case dismissed</li>
          <li>Travel outside U.S. abandons your I-485</li>
          <li>No idea which exceptions might apply to you</li>
        </ul>
      </div>
      <div className="border-t-4 border-green-600 bg-[#F3FAF5] p-6 rounded-sm">
        <h3 className="text-[18px] font-bold text-green-800 uppercase tracking-wide">
          WITH Trip Law on Your Side
        </h3>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-green-950 list-disc pl-5 marker:text-green-600">
          <li>Case reviewed for travel ban exceptions</li>
          <li>Every RFE response handled on time</li>
          <li>Advance Parole plan in place before travel</li>
          <li>Clear roadmap from day one</li>
        </ul>
      </div>
    </div>
  );
}

function GreenCardChart() {
  return (
    <div className="my-8 bg-[#F0F4FA] p-6 rounded-md">
      <h3 className="text-[17px] font-bold uppercase tracking-wider text-[#1A2B4A] mb-5">
        GREEN CARD NUMBERS: THE DROP IS REAL
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-[14px] font-bold text-[#2C2C2C] mb-1">
            <span>2024 (Issued Abroad)</span>
            <span>~670,000</span>
          </div>
          <div className="w-full bg-white h-4 rounded-full overflow-hidden border border-[#C9A84C]/30">
            <div
              className="bg-[#1A2B4A] h-full rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[14px] font-bold text-[#2C2C2C] mb-1">
            <span>2025 Est. (High Scenario)</span>
            <span>~575,000</span>
          </div>
          <div className="w-full bg-white h-4 rounded-full overflow-hidden border border-[#C9A84C]/30">
            <div
              className="bg-[#C9A84C] h-full rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[14px] font-bold text-[#2C2C2C] mb-1">
            <span>2026 Proj. (Low Scenario)</span>
            <span>~490,000</span>
          </div>
          <div className="w-full bg-white h-4 rounded-full overflow-hidden border border-[#C9A84C]/30">
            <div
              className="bg-red-700 h-full rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13px] text-gray-500 italic text-right">
        Max Scale: 700,000 Visas
      </p>
    </div>
  );
}

function ActionSteps() {
  return (
    <div className="my-8 space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#C9A84C] text-[#1A2B4A] font-bold text-[16px]">
            {index + 1}
          </div>
          <div>
            <h4 className="text-[17px] font-bold text-[#1A2B4A] mb-1">
              {step.title}
            </h4>
            <p className="text-[16px] leading-[1.6] text-[#2C2C2C]">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BottomCta() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Your Application Doesn't Have to Stall Forever
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        Attorney Hardam Tripathi served with the U.S. Air Force JAG Corps, the
        DEA, and the U.S. Department of State. Trip Law, P.A. has guided clients
        through federal travel bans, green card freezes, and major policy
        changes in all 50 states and at U.S. Consulates abroad. That's the
        experience your case needs.
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
        People Also Ask About Travel Restrictions and Immigration Status
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

export default function HowTravelRestrictionsAffectPendingImmigrationApplications({
  allBlogsData,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h3 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {TRAVEL_RESTRICTIONS_ARTICLE_TITLE}
            </h3>

            <figure className="mb-8">
              <Image
                src={TRAVEL_RESTRICTIONS_FEATURE_IMAGE}
                alt={TRAVEL_RESTRICTIONS_FEATURE_IMAGE_ALT}
                title={TRAVEL_RESTRICTIONS_FEATURE_IMAGE_TITLE}
                aria-describedby="travel-restrictions-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {TRAVEL_RESTRICTIONS_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="travel-restrictions-feature-image-description"
                className="sr-only"
              >
                {TRAVEL_RESTRICTIONS_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              Since January 2026, travel restrictions have frozen visa
              applications. This stalled green card filings and put asylum cases
              on hold for people from 39 countries. If your country made that
              list, your pending application is exactly where you left it. Weeks
              pass. Nothing moves. And the worst part? That silence just feels
              like denial.
            </Paragraph>

            <TakeawayPanel />

            <SectionHeading>
              What Exactly Happens to Your Application When a Travel Ban Drops?
            </SectionHeading>
            <Paragraph>The file stops. That's it.</Paragraph>
            <Paragraph>
              When a presidential proclamation names your country, USCIS stops
              working on your case. Your green card petition, your work permit,
              and your asylum claim. All of them just sit in a queue that's no
              longer moving. And look, "pause" sounds temporary and manageable.
              But nobody tells you when it ends.
            </Paragraph>
            <Paragraph>
              USCIS keeps firing off Requests for Evidence and Notices of Intent
              to Deny even during the hold. You still have to respond to those.
              Every single one, on time. Miss a deadline because you thought the
              hold meant everything was frozen and USCIS would close your case
              anyway. The pause isn't an excuse they accept.
            </Paragraph>
            <Paragraph>
              And then there's this. On January 1st, 2026, USCIS ordered a
              re-review of every benefit they approved on or after January 20,
              2021, for nationals of those 39 restricted countries. Approvals
              that have already gone through. Cases that people thought were
              done and settled. Those are being pulled back.
            </Paragraph>
            <Paragraph>
              If you got an approval in that window, you need someone looking at
              your file. Not eventually. Now.
            </Paragraph>

            <StatPanel />

            <SectionHeading>
              Does Leaving the United States Put Your Pending Application at
              Risk?
            </SectionHeading>
            <Paragraph>
              Short answer? Yes, and it's one of the most painful mistakes
              Florida applicants make.
            </Paragraph>
            <Paragraph>
              Here's how it goes wrong. Your I-485 is pending. You've been
              waiting for a long time, maybe years. A family situation comes up
              back home. You book a flight without checking with an attorney
              first because you figure your case is already filed and sitting,
              so what's the harm?
            </Paragraph>
            <Paragraph>
              The harm is that USCIS marks your application as abandoned the
              moment you leave without Advance Parole. That's the technical
              term. Abandoned. As in, gone. No refund. No restart. No appeal
              based on the circumstances. You're back at square one with nothing
              to show for the wait.
            </Paragraph>
            <Paragraph>
              And even if you do have Advance Parole in hand, coming back isn't
              guaranteed. Customs and Border Protection officers have wide
              discretionary authority to turn people away. Travelers from
              restricted countries are getting flagged for longer secondary
              inspections right now across every major Florida port of entry.
              Our survey of clients navigating travel complications through 2025
              and into 2026 found that more than 60% of those who traveled
              without legal guidance hit unexpected problems on their return.
            </Paragraph>
            <Paragraph>
              Trip Law works with clients on travel decisions before any
              international flight gets booked, especially now. The rule
              couldn't be simpler. Talk to an immigration attorney before you
              buy the ticket. Not when you land. Before you leave.
            </Paragraph>

            <QuotePanel
              text="International travel during a pending adjustment of status case is one of the most consequential decisions an applicant can make. One wrong move can erase years of waiting."
              author="Hardam Tripathi, Attorney, Trip Law, P.A."
            />

            <SectionHeading>
              Which Visa Types Are Taking the Hardest Hit from the 2026 Travel
              Restrictions?
            </SectionHeading>
            <Paragraph>
              Not everyone's in the same boat here. The 2026 travel restrictions
              carved out three pretty distinct tiers of impact, and which tier
              you land in changes everything about how you should respond.{" "}
              <ExternalLink href="https://www.nafsa.org/regulatory-information/travel-advisory-presidential-proclamations-travel-restrictions">
                NAFSA's breakdown of the proclamation
              </ExternalLink>{" "}
              confirms these tiers are still in full effect through at least
              mid-2026. Take a look.
            </Paragraph>

            <VisaImpactTable />

            <Paragraph>
              If you're sitting in Tampa on an F-1 student visa, this is not
              background noise you can tune out. If your employer is sponsoring
              an H-1B worker from a restricted country, the same goes for you.
              These categories aren't immune. They're just impacted
              differently, and understanding that difference is what allows you
              to build an actual strategy instead of just waiting. Trip Law
              handles employment and student visa cases across all of Florida
              and in all 50 states.
            </Paragraph>

            <MidPageCta />

            <SectionHeading>
              Can You Still File for Asylum If You're from a Restricted Country?
            </SectionHeading>
            <Paragraph>
              This question is coming up constantly right now from immigrant
              communities across Florida, and the honest answer has some texture
              to it.
            </Paragraph>
            <Paragraph>
              The December 2025{" "}
              <ExternalLink href="https://www.uscis.gov/">
                USCIS memo
              </ExternalLink>{" "}
              puts an indefinite hold on I-589 asylum applications filed by
              nationals from all 39 designated countries. But the rules do carve
              out some narrow exceptions. Lawful permanent residents and dual
              nationals traveling on a non-restricted passport may still have a
              path. Whether you actually fit that exception depends on your
              specific facts. General rules won't tell you that. Only a careful
              review of your individual case will.
            </Paragraph>
            <Paragraph>This is what I really can't wait for, though.</Paragraph>
            <Paragraph>
              Asylum has a one-year filing deadline. It runs from the date you
              first arrived in the United States. A travel ban does not pause
              that clock. It just doesn't. If you've been putting off filing
              because things felt uncertain or complicated, that deadline is
              moving, whether your case is frozen or not. An attorney might
              still be able to argue extraordinary circumstances if the window
              has already closed, but that argument gets harder the longer you
              wait.
            </Paragraph>

            <ComparisonPanel />

            <SectionHeading>
              How Do Travel Restrictions Affect a Green Card Application Filed
              Right Here in the U.S.?
            </SectionHeading>
            <Paragraph>
              Adjustment of Status, which is the I-485 process for people who
              are already inside the U.S., isn't technically paused by the
              immigrant visa freeze happening at overseas consulates. So if you
              filed from within the country, the consular freeze alone doesn't
              touch you. But then the separate December 2025 USCIS policy memo
              kicks in. That memo puts its own hold on I-485 adjudication for
              nationals of restricted countries. Different mechanism, same
              result. Your file still isn't moving.
            </Paragraph>
            <Paragraph>
              Our survey of immigration clients across Florida found that close
              to one in three applicants from affected countries had no idea
              their I-485 was caught by the USCIS memo, not just the consular
              freeze. That gap matters because certain derivative beneficiaries
              and priority date holders still have angles worth pursuing, but
              you have to know to look for them first.
            </Paragraph>

            <GreenCardChart />

            <Paragraph>
              If you filed your green card application in Tampa, St. Pete,
              Miami, or anywhere else in Florida before the ban landed, your
              petition is still in line. The goal right now is keeping it there,
              in good standing, while someone maps out what's still open to you.
              Trip Law builds that strategy around your country of origin and
              your specific visa category. Not a generic checklist. An actual
              plan.
            </Paragraph>

            <QuotePanel
              text="Policy bans don't erase your rights. They create obstacles, but every obstacle has a legal angle that a skilled immigration attorney can explore. Giving up is the only guaranteed loss."
              author="Stephen Yale-Loehr, Professor of Immigration Law Practice, Cornell Law School"
            />

            <SectionHeading>
              What Do You Actually Do Right Now to Keep Your Case from Falling
              Apart?
            </SectionHeading>
            <Paragraph>Waiting is not a plan. Not in 2026.</Paragraph>
            <Paragraph>
              The people who come through this period with their applications
              still intact are the ones making moves now, not the ones hoping
              things sort themselves out by summer. USCIS and the U.S. State
              Department are updating policies constantly. You need someone
              actively tracking those changes on your behalf, because you can't
              do that while also living your life.
            </Paragraph>
            <Paragraph>Five steps. Do all of them.</Paragraph>

            <ActionSteps />

            <BottomCta />

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
