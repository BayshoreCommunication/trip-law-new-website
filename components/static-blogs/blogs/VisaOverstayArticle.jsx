import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  VISA_OVERSTAY_FEATURE_IMAGE,
  VISA_OVERSTAY_FEATURE_IMAGE_ALT,
  VISA_OVERSTAY_TITLE,
} from "./visaOverstayMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const penaltyRows = [
  ["Up to 180 days", "No bar triggered", "N/A", "Flexible options available"],
  [
    "181 days to 1 year",
    "3-Year Bar",
    "Upon departure",
    "I-601A waiver required",
  ],
  [
    "More than 1 year",
    "10-Year Bar",
    "Upon departure",
    "I-601A waiver required",
  ],
];

const postDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

function Paragraph({ children }) {
  return (
    <p className="mb-4 text-[16px] leading-[1.65] text-[#2C2C2C]">{children}</p>
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

function SourceBlock({ children, source }) {
  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-5">
      <p className="max-w-2xl text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        {children}
      </p>
      <p className="mt-2 text-[15px] leading-[1.55] text-[#2C2C2C]">
        Source: {source}
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

export default function VisaOverstayArticle({ allBlogsData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {VISA_OVERSTAY_TITLE}
            </h1>

            <Image
              src={VISA_OVERSTAY_FEATURE_IMAGE}
              alt={VISA_OVERSTAY_FEATURE_IMAGE_ALT}
              width={1000}
              height={510}
              priority
              className="mb-8 h-auto w-full object-cover"
            />

            <Paragraph>
              The United States remains a beacon of hope for families across the
              globe. Building a life here requires immense sacrifice and
              dedication. However, that sense of security feels fragile when
              legal authorization ends unexpectedly. TripLaw understands the
              stress a calendar date causes for parents and spouses.
            </Paragraph>
            <Paragraph>
              An honest mistake should not destroy a hard-earned future. The
              practice focuses on finding paths forward with dignity. This
              resource provides steps on how to fix US visa overstay 2026 so
              families can protect their dreams.
            </Paragraph>

            <SectionHeading>
              1) Identify the Correct Deadline for Your Stay
            </SectionHeading>
            <Paragraph>
              A person must first understand which document truly controls their
              legal status. Many people look at the expiration date on the
              physical visa inside their passport. This is a very common error.
              A distinction between I-94 expiration and visa stamps exists for
              every traveler.
            </Paragraph>
            <Paragraph>
              The visa is simply a document that allows a request for entry at
              the border. The I-94 record is the actual permit that tells a
              visitor how long they can remain in the country. To resolve your
              expired American status in 2026, check digital records on the
              official Customs and Border Protection website immediately.
            </Paragraph>

            <SubHeading>Verify the I-94 Record</SubHeading>
            <Paragraph>
              Every traveler has a digital record of arrival and departure. This
              information is accessible online within seconds. The record shows
              the exact date a person must leave the country. Print this
              document and keep it with a passport.
            </Paragraph>
            <Paragraph>
              However, if the date has already passed, we look at the record to
              see if the government made a mistake. Sometimes an officer enters
              the wrong year or month. Correcting these clerical errors ensures
              status remains valid.
            </Paragraph>

            <SubHeading>Note the Difference from a Visa Stamp</SubHeading>
            <Paragraph>
              The sticker in a passport only allows travel to a port of entry.
              It does not grant the right to stay for that entire duration. Many
              people confuse these two dates and end up in a difficult
              situation. Education helps ensure deadlines are never missed.
            </Paragraph>
            <Paragraph>
              However, if a stay lasts too long, action must be quick. Legal
              options depend on how many days passed since that I-94 date. A
              breakdown of the timeline finds the best path to address your
              unlawful presence in 2026 safely.
            </Paragraph>

            <SourceBlock source="U.S. Department of Homeland Security (DHS)">
              Over 427,000 individuals were identified as suspected in-country
              overstays in the most recent fiscal year reports.
            </SourceBlock>

            <SectionHeading>2) Immediate Impact of a Late Stay</SectionHeading>
            <Paragraph>
              When a person stays past their authorized time, their visa becomes
              void automatically. This happens under Section 222(g) of the
              Immigration and Nationality Act. No one can use that visa to enter
              the country ever again.
            </Paragraph>
            <Paragraph>
              It is important to explain the consequences of a late departure
              because this is a major legal line. If a person leaves the country
              after being here illegally for more than 6 months, the law
              triggers a bar on their return. This bar prevents a comeback for
              three years. Action is required to remedy a visa expiration in
              2026 before penalties accumulate.
            </Paragraph>

            <SubHeading>Assess the 180 Day Risk</SubHeading>
            <Paragraph>
              Staying six months past a deadline is a critical turning point.
              The government views this as a serious violation of the law. If a
              person reaches this mark, they face a mandatory three-year ban
              upon departure.
            </Paragraph>
            <Paragraph>
              Trip Law aims to file before a client reaches this critical
              milestone. However, if the stay has already exceeded 180 days,
              waiver options become the priority. We handle these strict
              timelines to protect your ability to return.
            </Paragraph>
            <Paragraph>
              If a stay results in a court date, you must know: Can You Reopen
              an Immigration Case After a Removal Order? Your 2026 Resource
              provides the necessary answers.
            </Paragraph>

            <SectionHeading>
              3) The Three and Ten Year Bar System
            </SectionHeading>
            <Paragraph>
              U.S. immigration law applies strict penalties based on how long a
              person stays after their authorized period.
            </Paragraph>
            <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C]">
              <li>
                If you overstay more than 180 days, you may face a 3-year ban
                once you leave the United States
              </li>
              <li>
                If you overstay more than 1 year, the penalty increases to a
                10-year ban
              </li>
            </ul>
            <Paragraph>
              These bans begin only after departure, however they can block your
              ability to return for years.
            </Paragraph>
            <Paragraph>
              Longer overstays create more serious consequences. A short delay
              may still allow more flexible solutions, however extended unlawful
              presence often requires a waiver to return legally. If you know
              your timeline, you can take the right action. Early action can
              help you avoid harsher penalties and keep more legal options open.
            </Paragraph>

            <div className="my-9 overflow-x-auto">
              <table className="min-w-[720px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
                <thead className="bg-[#1A2B4A] text-white">
                  <tr>
                    <th className="px-4 py-3 font-bold">Overstay Duration</th>
                    <th className="px-4 py-3 font-bold">Penalty / Bar</th>
                    <th className="px-4 py-3 font-bold">When Bar Starts</th>
                    <th className="px-4 py-3 font-bold">Waiver Option</th>
                  </tr>
                </thead>
                <tbody>
                  {penaltyRows.map((row, index) => (
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

            <SourceBlock source="American Immigration Council">
              Thousands of families face separation each year due to rigid
              time-based penalties and bars to admissibility.
            </SourceBlock>

            <SectionHeading>4) Solution Through Family Ties</SectionHeading>
            <Paragraph>
              The most common way to resolve this issue is through a close
              family member. If a person is the spouse or child of a United
              States citizen, a path to a green card may exist. This practice
              often handles marriage-based petitions for clients.
            </Paragraph>
            <Paragraph>
              This process allows a person to get legal status without leaving
              the country. This is a huge benefit because it stops the bars from
              ever starting. Evidence must show that the marriage is real and
              based on love. This is a primary way to start the I-601A waiver
              process 2026 journey.
            </Paragraph>

            <SubHeading>Apply for Marriage-Based Relief</SubHeading>
            <Paragraph>
              A genuine marriage to a citizen provides a strong legal shield.
              The law allows immediate relatives to fix their status even if
              they stayed too long. We help prepare for the interview where a
              couple must prove their relationship.
            </Paragraph>
            <Paragraph>
              This involves showing a shared life together. However, a person
              must have entered the country legally for this to work. TripLaw
              reviews entry records to make sure clients qualify for this
              specific benefit.
            </Paragraph>

            <SectionHeading>5) Provisional Waiver Process</SectionHeading>
            <Paragraph>
              If a person does not qualify for an immediate adjustment, a
              special waiver may be necessary. The I-601A provisional waiver is
              a powerful tool for many families. Success rates for these cases
              remain strong for prepared applications. Recent data from the U.S.
              Citizenship and Immigration Services shows consistently high
              approval rates for well-documented provisional waiver filings.
            </Paragraph>

            <SourceBlock source="U.S. Citizenship and Immigration Services (USCIS)">
              Approval rates for I-601A provisional unlawful presence waivers
              have reached approximately 89% in recent USCIS reporting periods.
            </SourceBlock>

            <Paragraph>
              This waiver asks the government to forgive the stay before a
              person goes to an interview abroad. It gives a sense of safety
              that did not exist before. A client can wait for the result while
              staying here with loved ones. This step is important for an
              adjustment of status 2026 plan.
            </Paragraph>

            <SubHeading>Request Forgiveness for Unlawful Time</SubHeading>
            <Paragraph>
              The waiver process allows a person to admit the mistake and ask
              for a second chance. We build a case that shows why a client
              deserves to stay. This involves proving that a departure would
              hurt the family.
            </Paragraph>
            <Paragraph>
              However, very specific legal standards must be met to win.
              Evidence from a person's life supports the claim. High success
              rates come from paying attention to every detail. No one stops
              until the best possible case is built.
            </Paragraph>

            <SourceBlock source="American Immigration Lawyers Association (AILA)">
              Well-prepared hardship waiver cases show success rates as high as
              85%, with thorough documentation being the single most important
              factor.
            </SourceBlock>

            <SectionHeading>
              6) Extreme Hardship Proof for the Government
            </SectionHeading>
            <Paragraph>
              The center of a good waiver case is the idea of hardship. The
              government needs to see more than the normal sadness of being away
              from a loved one. We help our clients plan for these requirements.
            </Paragraph>
            <Paragraph>
              This might include a spouse who has a serious medical condition
              and needs help. It could also include a parent who depends on a
              client for financial support. Every part of a person's life is
              examined to find these facts. This allows us to fix your legal
              standing 2026 through strong evidence.
            </Paragraph>
            <Paragraph>
              When you keep a case on file, it provides a real sense of
              progress. It demonstrates to the government that you intend to
              follow the rules and fix your status correctly. If you want to
              understand how high-level appeals work, look into The Role of the
              BIA and Federal Courts in Deportation Cases. Success in visa
              overstay recovery 2026 often comes down to simple patience.
            </Paragraph>

            <SubHeading>Complete the Consular Interview</SubHeading>
            <Paragraph>
              The last hurdle is usually a trip to the embassy in a home
              country. This is where a person shows the officer an approved
              waiver. However, this interview can be scary without preparation.
              TripLaw conducts practice interviews to build confidence. Every
              client carries the right documents in their hand.
            </Paragraph>
            <Paragraph>
              We stay in touch even while a person is abroad, so no one feels
              unsupported during this stage. If you want to better understand
              how appeals and higher review processes work, see our article on
              the role of the BIA and federal courts in deportation cases. The
              goal is always a smooth interview and a fast return home to
              family.
            </Paragraph>

            {/* <div className="my-10 bg-[#F0F4FA] px-6 py-5 text-[16px] leading-[1.65] text-[#2C2C2C]">
              <p>
                <span className="font-bold text-[#1A2B4A]">Meta Title:</span> U.S. Visa Overstay, Risks and Solutions
              </p>
              <p>
                <span className="font-bold text-[#1A2B4A]">Meta Description:</span> Find out what happens after a U.S. visa
                overstay and explore ways to fix it, including waivers and family based options.
              </p>
            </div> */}

            <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
              <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
                Secure Your Future After Visa Overstay with TripLaw
              </h2>
              <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
                Do not let your future be decided by a mistake on a calendar.
                TripLaw is ready to help you navigate the complexities of the
                immigration system and protect your family. Contact us now for a
                consultation:
              </p>
              <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
                <p>Phone: (863) 599-6735</p>
                <p>Email: info@trip-law.com</p>
                <p>Website: trip-law.com</p>
                <p>Address: 1820 Florida Ave S, Ste. C, Lakeland, FL 33803</p>
              </div>
            </div>

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
