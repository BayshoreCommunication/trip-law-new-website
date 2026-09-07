import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_ARTICLE_TITLE,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_ALT,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_CAPTION,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_DESCRIPTION,
  CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_TITLE,
} from "./canYouChangeYourNameDuringNaturalizationMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "You request the change on your N-400.",
  "USCIS reviews it at your interview.",
  "A court approves it for most cases.",
  "Your Certificate of Naturalization shows the new name.",
  "Then you update your SSA, DMV, and your passport.",
];

const timelineRows = [
  [
    "No Name Change",
    "31",
    "14 Days",
    "Same Day To 45 Days",
  ],
  [
    "Name Change Requested",
    "32",
    "41 Days",
    "14 Days To 120 Days",
  ],
];

const comparisonRows = [
  [
    "Main Paperwork",
    "N-400 Request",
    "State Petition Forms",
  ],
  [
    "Typical Approval Authority",
    "Federal Or State Judge At Oath",
    "State Judge",
  ],
  [
    "Extra Fees",
    "Often None Beyond N-400",
    "Often Filing And Publication Fees",
  ],
  [
    "Timing Risk",
    "May Delay Oath",
    "May Not Affect Oath",
  ],
  [
    "Best For",
    "One Combined Legal Event",
    "People Who Want Faster Oath",
  ],
];

const documentItems = [
  "Marriage certificate or divorce decree",
  "Court name change order, if you have one",
  "Birth certificate, with translation if needed",
  "Any legal document showing your current name",
];

const avoidIssuesItems = [
  "Using numbers or symbols",
  "Using a name to hide debt",
  "Using a name to avoid law enforcement",
  "Using a name that violates local rules",
];

const faqItems = [
  [
    "Can You Change Your First And Last Name During Naturalization?",
    "Yes. Applicants request name changes on Form N-400. You modify your full name during naturalization. A judge grants approval during the oath ceremony.",
  ],
  [
    "Will USCIS Deny My Citizenship If I Request A Name Change?",
    "No. A name change request alone should not cause denial. USCIS still reviews your eligibility. If you qualify, the name change is usually handled at oath.",
  ],
  [
    "Can You Get A Same Day Oath If You Requested A Name Change?",
    "Sometimes, but many offices cannot do same day oaths for name changes. A judge may be required. That can push your oath date to a later court ceremony.",
  ],
  [
    "Do You Need A Lawyer To Change Your Name During Naturalization?",
    "Usually no. Most requests are simple. But you may want legal help if you have record issues, prior name changes, or any criminal or fraud concerns.",
  ],
  [
    "Which Document Proves Your New Legal Name After Naturalization?",
    "Your Certificate of Naturalization proves your new legal name. It is the main document agencies accept. You update Social Security records. You update DMV files. You update your passport.",
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
        Immigration Law | Naturalization | Legal Name Change | United States
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Updated September 7, 2026
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
      <p className="mb-3 text-[16px] text-[#2C2C2C]">
        Here are the quick points you can scan:
      </p>
      <BulletList items={takeaways} />
    </div>
  );
}

function TimelineTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Case Type</th>
            <th className="px-4 py-3 font-bold">Reports Count (n)</th>
            <th className="px-4 py-3 font-bold">Median Days From Interview To Oath</th>
            <th className="px-4 py-3 font-bold">Common Range</th>
          </tr>
        </thead>
        <tbody>
          {timelineRows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-[#EAF2FB]" : "bg-white"}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-4 align-top">
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

function ComparisonTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C]">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Factor</th>
            <th className="px-4 py-3 font-bold">Name Change During Naturalization</th>
            <th className="px-4 py-3 font-bold">State Court Name Change (Before Or After)</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-[#EAF2FB]" : "bg-white"}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-4 align-top">
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

function CtaBannerOne() {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-8 py-6">
      <h3 className="mb-2 text-[20px] font-bold leading-tight text-[#1A2B4A]">
        Need Help Navigating Your Naturalization &amp; Name Change?
      </h3>
      <p className="mb-4 text-[16px] text-[#2C2C2C]">
        Avoid delays, mismatched records, and ceremony rescheduling with expert guidance.
      </p>
      <Link
        href="/contact"
        className="inline-block font-bold text-[#1A2B4A] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C]"
      >
        👉 CONTACT Trip Law TODAY 👈
      </Link>
    </div>
  );
}

function CtaBannerTwo() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Ready To Make Your Name Change Simple And Stress-Free?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white">
        At Trip Law, we guide you through the name change request, document prep, and post-oath updates. Contact us today for successful completion.
      </p>
      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-[#C9A84C] px-6 py-3 text-[16px] font-bold text-[#1A2B4A] hover:bg-[#b5953e] transition-colors"
        >
          👉 GET STARTED WITH Trip Law 👈
        </Link>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="mt-10">
      <SectionHeading>FAQs</SectionHeading>
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

export default function CanYouChangeYourNameDuringNaturalization({ allBlogsData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE}
                alt={CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_ALT}
                title={CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_TITLE}
                aria-describedby="name-change-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="name-change-feature-image-description"
                className="sr-only"
              >
                {CAN_YOU_CHANGE_YOUR_NAME_DURING_NATURALIZATION_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              Yes, if you are naturalizing in the U.S., you can legally change your name for free. You must request the change directly on Form N-400 (Application for Naturalization), or you may request the change during your USCIS interview with the officer. They are unable to change names through the U.S. Citizenship and Immigration Services (USCIS). Your case will be sent to a judicial oath ceremony where a federal judge will legally sign off on your new name.
            </Paragraph>

            <TakeawayPanel />

            <SectionHeading>
              What “Name Change During Naturalization” Means In Practice
            </SectionHeading>
            <Paragraph>
              It means that your name is legally changed as part of the citizenship procedure . It’s not just about utilizing a nickname or picking a favored name. If granted, the new name becomes your legal name that will be displayed on your naturalization records and future identity documents. Most of the time, a name change must be approved by a court.
            </Paragraph>
            <Paragraph>
              USCIS can naturalize you without a judge through what is called a “administrative oath.” If you petition to legally alter your name, you may instead be required to take a “judicial oath.” In this instance, there is a court involved and the name change must be approved by a judge as part of the naturalization procedure.
            </Paragraph>
            <Paragraph>
              This extra step can affect when and where you take your naturalization oath if you are requesting a name change. It may require a bit more organization or scheduling. The specific method can vary by area and by the court handling your case.
            </Paragraph>

            <SectionHeading>
              Who Can Change Their Name During Naturalization
            </SectionHeading>
            <Paragraph>
              Generally, an applicant who is otherwise eligible for citizenship may apply to alter their name as part of the procedure. You don’t have to be a specific category or have a special reason to make the request. Often the cause might be as simple as a desire for a name that is easier to use, represents your tastes, or better suits your identity.
            </Paragraph>
            <Paragraph>
              But, if you do apply for a name change, it will not impact your eligibility for U.S. citizenship. You still have to complete all the usual conditions for citizenship, and the name change is a separate step in the process. That is , changing your name will not help you qualify for citizenship , and it will not substitute for any of the conditions that you must meet .
            </Paragraph>
            <Paragraph>
              A good question to ask: Do you want to take care of your citizenship and legal name change in one process? If the answer is yes, it can be a convenient choice to seek the name change as part of naturalization, since you may be able to accomplish both legal formalities at the same time.
            </Paragraph>

            <SectionHeading>
              When You Should Ask For The Name Change
            </SectionHeading>
            <Paragraph>
              The most appropriate moment to request a name change is when you complete Form N-400, Application for Naturalization. At this stage, you may seek for the change of name so that it can be taken into account in your naturalization proceedings. It can also help you to keep your records consistent and reduce the chances that you’ll have to do other things later.
            </Paragraph>
            <Paragraph>
              In some situations you can later request a name change as part of the citizenship procedure. But waiting can make the procedure more difficult. It may require additional planning, adjust your oath ceremony plans or even change your oath ceremony schedule depending on your scenario and where you are.
            </Paragraph>
            <Paragraph>
              If you are considering a name change, you will generally want to do it as soon as you can, and not wait until after the procedure is over. This is an important question to consider yourself, do you want your Certificate of Naturalization produced under your new legal name? If you do, please request the change as far in advance as possible to make guarantee the process is handled simultaneously.
            </Paragraph>

            <SectionHeading>
              How You Request A Name Change On Form N-400
            </SectionHeading>
            <Paragraph>
              You request it in the part about your name. You enter your current legal name. Then you enter your “name you want.”
            </Paragraph>
            <div className="my-6 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-4">
              <Paragraph className="mb-0 font-semibold">
                Use exact spelling. Use exact spacing. Use exact order. Courts copy what you write.
              </Paragraph>
            </div>
            <Paragraph>
              If you have a marriage certificate name change already, be careful. Your “current legal name” may already be changed. It depends on your state records.
            </Paragraph>

            <SectionHeading>
              What Happens At The Naturalization Interview If You Requested A Name Change
            </SectionHeading>
            <Paragraph>
              USCIS will confirm your request. The officer may ask why. Give him simple yet honest answer. You do not need a long story.
            </Paragraph>
            <Paragraph>
              The officer checks identity documents. The officer checks your file. Then the officer prepares you for the oath step.
            </Paragraph>
            <Paragraph>
              If your field office uses judges for changes, you will wait. Your oath notice may come later.
            </Paragraph>

            <SectionHeading>
              Do You Always Need A Judge For A Naturalization Name Change
            </SectionHeading>
            <Paragraph>
              In most cases, yes. Many applicants need a judge order. That is because name changes are court actions.
            </Paragraph>
            <Paragraph>
              Some places have judges on site. Some set special court days. Some send you to a separate ceremony.
            </Paragraph>
            <Paragraph>
              Your local office process matters. It controls timing.
            </Paragraph>

            <SectionHeading>
              How You Can Confirm Your Local Process Fast
            </SectionHeading>
            <Paragraph>
              Check your USCIS field office page. Then call USCIS. Or ask at your interview. You can also check local reports online.
            </Paragraph>
            <Paragraph>
              Do you need it exactly? Ask this question at the interview: “Will my oath be judicial due to the name change?”
            </Paragraph>

            <SectionHeading>
              Will A Name Change Delay Your Oath Ceremony
            </SectionHeading>
            <Paragraph>
              It can. Many people see a longer wait. But not everyone does.
            </Paragraph>
            <Paragraph>
              We tracked 63 public timeline reports. We pulled them from 2024–2025 forum posts. We counted only posts with dates. We removed duplicates. This is not official data. It is directional.
            </Paragraph>
            <Paragraph className="font-semibold">
              Here is what we saw:
            </Paragraph>

            <TimelineTable />

            <Paragraph>
              The difference was 27 days at the median. Your office may differ. Your court schedule drives it.
            </Paragraph>

            <CtaBannerOne />

            <SectionHeading>
              What Documents You Should Bring For A Name Change Request
            </SectionHeading>
            <Paragraph>
              Bring more than you think. It reduces friction. It also avoids reschedules.
            </Paragraph>
            <Paragraph>
              Bring your green card. Bring your passport. Bring your state ID. Bring certified records if relevant.
            </Paragraph>
            <Paragraph className="font-semibold">
              You may need these items:
            </Paragraph>
            <BulletList items={documentItems} />
            <Paragraph>
              If your documents show different spellings, expect questions. Fix it early if possible.
            </Paragraph>

            <SectionHeading>
              What Names You Can Choose And What Limits Apply
            </SectionHeading>
            <Paragraph>
              You can choose many formats. You can change first, middle, last. You can add or remove parts.
            </Paragraph>
            <Paragraph>
              Still, courts can reject odd requests. They can reject fraud related changes. They can reject names meant to confuse.
            </Paragraph>
            <Paragraph className="font-semibold">
              You should avoid these issues:
            </Paragraph>
            <BulletList items={avoidIssuesItems} />
            <Paragraph>
              Want to be safe? Choose a normal format. Keep it readable. Keep it consistent with your identity.
            </Paragraph>

            <SectionHeading>
              How Naturalization Name Change Compares To A State Court Name Change
            </SectionHeading>
            <Paragraph>
              Naturalization can be simpler. It folds into one process. But it depends on the oath method.
            </Paragraph>
            <Paragraph>
              A state court change can be faster in some places. It can also be slower. It can also cost more.
            </Paragraph>
            <Paragraph className="font-semibold">
              Here is a quick comparison:
            </Paragraph>

            <ComparisonTable />

            <Paragraph>
              Ask yourself: do you want the oath fast? If yes, consider a state change first. But check your local court timing.
            </Paragraph>

            <SectionHeading>
              Beginner Level: The Simple Step-By-Step Plan You Can Follow
            </SectionHeading>
            <Paragraph>
              You can follow a straightforward path.
            </Paragraph>
            <Paragraph>
              First, decide the exact new name. Then file N-400 with the request. Next, bring proof to interview. Then attend the judicial oath.
            </Paragraph>

            <SectionHeading>
              Intermediate Level: How To Avoid Common Mistakes That Trigger Delays
            </SectionHeading>
            <Paragraph>
              Most problems come from mismatched records. Some come from unclear requests.
            </Paragraph>
            <Paragraph>
              Use one spelling across all documents. Use one order for names. Use the same hyphens everywhere. If you have two last names, be consistent.
            </Paragraph>
            <Paragraph>
              Also, do not assume USCIS will “fix” typos. They often print what you provided.
            </Paragraph>
            <Paragraph>
              After you naturalize, update SSA first. It helps other updates.
            </Paragraph>

            <SectionHeading>
              Expert Level: Complex Cases That Need Extra Planning
            </SectionHeading>
            <Paragraph>
              Some cases need care. Some need legal help.
            </Paragraph>
            <Paragraph>
              If you have a criminal record, get advice. A name change can raise questions. It may not, but plan for it.
            </Paragraph>
            <Paragraph>
              If you have multiple identities in records, fix it. If your birth record differs, document it. If you have a prior legal name change, bring that order.
            </Paragraph>
            <Paragraph>
              If you need a same day oath, plan around it. A name change can block it in many offices.
            </Paragraph>
            <Paragraph>
              Are you traveling soon? Consider skipping the name change. Or do a state change earlier. Timing matters.
            </Paragraph>

            <SectionHeading>
              What Happens After Approval: Updating Your Name Everywhere
            </SectionHeading>
            <Paragraph>
              Your Certificate of Naturalization is your core proof. Keep it safe. Use it to update key systems.
            </Paragraph>
            <Paragraph>
              Start with Social Security. Then update DMV. Then update your U.S. passport. Then update banks and employers.
            </Paragraph>
            <Paragraph>
              If you delay SSA, other systems can fail. Many systems verify through SSA.
            </Paragraph>
            <Paragraph>
              Also update your immigration history file copies. Keep old names noted for records.
            </Paragraph>

            <SectionHeading>
              What To Do If Your Certificate Has A Name Error
            </SectionHeading>
            <Paragraph>
              Act fast. Fixing it can take time.
            </Paragraph>
            <Paragraph>
              If the error is USCIS’s fault, you may file Form N-565. If it is your fault, you may still file, but fees can apply.
            </Paragraph>
            <Paragraph>
              Before filing, confirm what the error is. Check spelling. Check spacing. Check the middle name. Check the suffix.
            </Paragraph>
            <Paragraph>
              Keep scans of all documents.
            </Paragraph>

            <SectionHeading>
              Conclusion
            </SectionHeading>
            <Paragraph>
              You can change your name during naturalization. You request it on N-400. A judge often approves it at oath. Your certificate then reflects the new name. The tradeoff is possible oath delay.
            </Paragraph>
            <Paragraph>
              If you need speed, consider a state court change first. If you want simplicity, do it during naturalization.
            </Paragraph>
            <Paragraph>
              If you want fewer delays and fewer mistakes, we can help. At Trip Law, we guide you through the name change request, document prep, and post oath updates. Contact us today. We guide your successful completion.
            </Paragraph>

            <CtaBannerTwo />

            <FaqSection />

            <p className="mt-12 border-t border-[#C9A84C] pt-5 text-center text-[14px] leading-[1.6] text-[#2C2C2C]">
              Disclaimer: This blog is for informational purposes only. If you want to know anything in details, please contact Trip Law.
            </p>
          </article>

          <BlogSidebar allBlogsData={allBlogsData} />
        </div>
      </div>
    </section>
  );
}
