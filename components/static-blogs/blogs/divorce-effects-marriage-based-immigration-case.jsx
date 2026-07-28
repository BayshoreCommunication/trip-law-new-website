import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import {
  DIVORCE_EFFECTS_ARTICLE_TITLE,
  DIVORCE_EFFECTS_FEATURE_IMAGE,
  DIVORCE_EFFECTS_FEATURE_IMAGE_ALT,
  DIVORCE_EFFECTS_FEATURE_IMAGE_CAPTION,
  DIVORCE_EFFECTS_FEATURE_IMAGE_DESCRIPTION,
  DIVORCE_EFFECTS_FEATURE_IMAGE_TITLE,
} from "./divorceEffectsMeta";
import { getPublishedBlogsWithStatic } from "./staticBlogs";

const takeaways = [
  "Filing I-130 and divorce happen before approval. The petition dies with the marriage.",
  "Conditional green card holders who divorce must file Form I-751 with a waiver.",
  "USCIS scrutinizes the original marriage heavily after a divorce is filed.",
  "2026 state enforcement trends present additional challenges for immigrants from Florida.",
  "Getting in touch with an immigration attorney sooner is always beneficial when it comes to preserving your immigration status.",
];

const stats = [
  [
    "~40%",
    "of conditional green card holders are divorced before the 2-year mark",
  ],
  [
    "90 Days",
    "window to file I-751 waiver after conditional status ends",
  ],
  [
    "2026",
    "The level of enforcement in Florida is at a 15-year high.",
  ],
];

const statusRows = [
  [
    "Divorce before I-130 approval",
    "Petition terminated",
    "None without remarriage or new basis",
  ],
  [
    "Divorce during adjustment of status",
    "USCIS may deny I-485",
    "Consult attorney immediately",
  ],
  [
    "Divorce with 2-yr conditional GC",
    "Conditional status at risk",
    "File I-751 with waiver",
  ],
  [
    "Divorce after 10-yr green card",
    "Generally stable",
    "Monitor for fraud investigations",
  ],
  [
    "Divorce pending naturalization",
    "Disrupts eligibility timeline",
    "May need to wait 5-year track",
  ],
];

const checkListItems = [
  "Joint financial documents indicating joint bank account and common expenditure.",
  "Documents proving joint cohabitation, such as lease or mortgage agreements, and utility bills.",
  "Communication documents that prove continuous relationship.",
  "Children, if any, and birth certificates naming both spouses.",
  "Affidavits from credible witnesses who can speak to the couple's life together.",
];

const immediateChecklist = [
  "Contact an immigration attorney before filing anything yourself.",
  "Gather every document from your marriage, financial records, communications, lease history.",
  "Do not attend any USCIS interview or respond to RFEs without counsel.",
  "Determine where you are in the process and what form governs your next move.",
  "If removal of conditions is due, get the waiver filed before the deadline.",
];

const faqItems = [
  [
    "Can a prenuptial agreement impact my marriage based immigration case?",
    "No, USCIS will not disapprove of the application based on the existence of a prenuptial agreement. However, investigators will have to verify if the marriage was not made solely for business purposes.",
  ],
  [
    "Is the waiver applicable if the divorce was caused by domestic abuse?",
    "Not always, you can try to obtain a VAWA self-petition rather than a 751 waiver. The VAWA allows one to file for their green card independently.",
  ],
  [
    "How long would it take to process a 751 waiver?",
    "Up to 12 or 24 months. You will get a receipt notice for the waiver that will stay in effect during the time that your case is under processing.",
  ],
  [
    "Is it possible to remarry and then apply for another green card immediately following a divorce?",
    "Yes. You can legally start a new marriage based process once your previous divorce decree is officially signed by a judge. You will need to show that your first marriage was entered in good faith.",
  ],
  [
    "Does my divorce attorney need to coordinate with my immigration attorney?",
    "Yes. Settlement in a divorce case can influence your case, so your immigration lawyer must review the divorce decree first.",
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
      className={`mb-4 text-[16px] leading-[1.65] text-[#2C2C2C] text-justify ${className}`}
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
    <ul className="mb-4 ml-8 list-disc space-y-2 text-[16px] leading-[1.65] text-[#2C2C2C] marker:text-[#C9A84C] text-justify">
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

function InternalLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-semibold text-[#1A2B4A] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C]"
    >
      {children}
    </Link>
  );
}

function IntroPanel() {
  return (
    <div className="mb-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5">
      <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1A2B4A]">
        Marriage-Based Immigration | Divorce Impact Guide
      </p>
      <p className="text-[17px] font-semibold leading-[1.55] text-[#1A2B4A]">
        Hardam Tripathi | TripLaw | Published July 28, 2026 | Updated July 28, 2026
      </p>
    </div>
  );
}

function TakeawayPanel() {
  return (
    <div className="my-8 bg-[#F0F4FA] px-8 py-6">
      <h2 className="mb-4 text-[22px] font-bold leading-tight text-[#1A2B4A]">
        Main Takeaways
      </h2>
      <BulletList items={takeaways} />
    </div>
  );
}

function StatGrid() {
  return (
    <div className="my-9 grid gap-4 md:grid-cols-3">
      {stats.map(([value, label]) => (
        <div key={value} className="border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-5 text-center">
          <p className="text-[32px] font-bold leading-tight text-[#C9A84C]">
            {value}
          </p>
          <p className="mt-2 text-[14px] leading-[1.55] text-[#F0F4FA]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

function QuotePanel({ text, author }) {
  return (
    <div className="my-8 border-l-4 border-[#C9A84C] bg-[#F0F4FA] px-6 py-5 italic text-[#1A2B4A]">
      <p className="text-[17px] font-medium leading-[1.65] text-justify">&quot;{text}&quot;</p>
      <p className="mt-2 text-[15px] font-bold not-italic">— {author}</p>
    </div>
  );
}

function MidPageCta({ heading, subtext, buttonText }) {
  return (
    <div className="my-8 border-t-4 border-[#C9A84C] bg-[#1A2B4A] p-6 text-white text-center rounded-sm">
      <h2 className="text-[22px] font-bold text-[#C9A84C]">{heading}</h2>
      <p className="mt-2 text-[16px] text-white">{subtext}</p>
      <div className="mt-4">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A2B4A] px-5 py-2.5 text-[15px] font-bold hover:bg-[#d8bb68] rounded-md transition-colors"
        >
          {buttonText || "Schedule a Free Consultation"}
        </Link>
      </div>
    </div>
  );
}

function StatusTable() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="min-w-[760px] border-separate border-spacing-0 text-left text-[15px] text-[#2C2C2C] border border-[#C9A84C]/30 rounded-md overflow-hidden">
        <thead className="bg-[#1A2B4A] text-white">
          <tr>
            <th className="px-4 py-3 font-bold">Situation</th>
            <th className="px-4 py-3 font-bold">Impact on Status</th>
            <th className="px-4 py-3 font-bold">Path Forward</th>
          </tr>
        </thead>
        <tbody>
          {statusRows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-[#F0F4FA]" : "bg-white"}
            >
              <td className="px-4 py-4 font-bold text-[#1A2B4A] border-b border-gray-100">{row[0]}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row[1]}</td>
              <td className="px-4 py-4 border-b border-gray-100">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CaseSurveyPanel() {
  return (
    <div className="my-7 border-l-4 border-[#C9A84C] bg-[#FFF9E7] px-6 py-5">
      <h3 className="mb-2 text-[18px] font-bold leading-tight text-[#1A2B4A]">
        What Trip Law Cases Show
      </h3>
      <Paragraph className="mb-3 text-justify">
        Our survey of marriage-based immigration cases involving divorce shows a consistent pattern. Clients who entered the original process with strong documentation had substantially higher success rates on I-751 waivers. Roughly 7 out of 10 waiver denials involved couples who had minimal joint financial records during the marriage. The divorce itself was rarely the deciding factor. The paper trail was.
      </Paragraph>
      <Paragraph className="mb-0 text-justify">
        Attorney Tripathi also notes that many Lakeland and Tampa Bay area clients come in after receiving a Request for Evidence with almost no documentation from their marriage years. Building that record retroactively is possible. It takes skill. It takes time. And it takes knowing what USCIS actually weights.
      </Paragraph>
    </div>
  );
}

function CtaPanel() {
  return (
    <div className="my-12 bg-[#1A2B4A] px-6 py-10 text-center text-white">
      <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#C9A84C]">
        Facing a Divorce During Your Immigration Process in Florida?
      </h2>
      <p className="mx-auto max-w-3xl text-[16px] leading-[1.65] text-white text-justify">
        TripLaw helps Florida immigrants protect their green card status, request I-751 waivers, and address USCIS scrutiny with experienced legal representation across Lakeland, Tampa, Orlando, and statewide.
      </p>
      <div className="mt-5 space-y-1 text-[16px] leading-[1.65] text-white">
        <p>Call: (863)-599-6735 | Email: Info@trip-law.com</p>
        <p>1820 Florida Ave S, Ste. C, Lakeland, FL 33803</p>
      </div>
      <div className="mt-6">
        <Link
          href="/appointment"
          className="inline-flex items-center justify-center bg-[#C9A84C] px-5 py-3 text-[15px] font-bold text-[#1A2B4A] hover:bg-[#d8bb68] rounded-md transition-colors"
        >
          Book a Free Consultation Now
        </Link>
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

export default function DivorceEffectsMarriageBasedImmigrationCaseArticle({
  allBlogsData,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <article className="col-span-2 text-[#2C2C2C]">
            <IntroPanel />

            <h1 className="mb-8 max-w-3xl border-b-2 border-[#C9A84C] pb-5 text-[34px] font-bold leading-tight text-[#1A2B4A] md:text-[42px]">
              {DIVORCE_EFFECTS_ARTICLE_TITLE}
            </h1>

            <figure className="mb-8">
              <Image
                src={DIVORCE_EFFECTS_FEATURE_IMAGE}
                alt={DIVORCE_EFFECTS_FEATURE_IMAGE_ALT}
                title={DIVORCE_EFFECTS_FEATURE_IMAGE_TITLE}
                aria-describedby="divorce-effects-feature-image-description"
                width={1000}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-[14px] italic leading-[1.55] text-[#2C2C2C]">
                {DIVORCE_EFFECTS_FEATURE_IMAGE_CAPTION}
              </figcaption>
              <p
                id="divorce-effects-feature-image-description"
                className="sr-only"
              >
                {DIVORCE_EFFECTS_FEATURE_IMAGE_DESCRIPTION}
              </p>
            </figure>

            <Paragraph>
              Divorce can end or severely damage your marriage-based green card case. Whether it kills your status depends on where you are in the process. Before a green card is approved, divorce almost always terminates the petition. After approval of a conditional green card, divorce complicates your path but does not make it impossible.
            </Paragraph>

            <TakeawayPanel />
            <StatGrid />

            <SectionHeading>
              What If You Get Divorced Before Green Card Application Approval?
            </SectionHeading>
            <Paragraph>
              In the case of a marriage green card petition, USCIS should always feel confident in the legitimacy of your marriage from the start to finish of the process. The moment the marriage legally ends, the underlying basis for your petition disappears. There is no grace period. There is no pause button.
            </Paragraph>
            <Paragraph>
              Under{" "}
              <ExternalLink href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1151&num=0&edition=prelim">
                INA Section 201(b)(2)(A)(i)
              </ExternalLink>
              , immediate relative status through marriage to a U.S. citizen is contingent on that marriage remaining valid. If you are a spouse of a lawful permanent resident in a preference category, same rule applies.
            </Paragraph>
            <Paragraph>
              What most people get wrong is thinking that a long separation but no final divorce protects them. It does not. USCIS can and does ask about the current status of your marriage at interviews. Lying there is a federal offense. Being honest kills your case. Neither is good without a legal strategy in place.
            </Paragraph>

            <SectionHeading>
              Does Divorce Automatically Void Conditional Green Card in Florida?
            </SectionHeading>
            <Paragraph>
              Not automatically. But it puts you on a clock. In case you have a conditional green card valid for two years and you get divorced before its expiration date, you are not yet in trouble. It is narrower, and it requires real documentation.
            </Paragraph>
            <Paragraph>
              You must file{" "}
              <ExternalLink href="https://www.uscis.gov/i-751">
                Form I-751
              </ExternalLink>{" "}
              and request a waiver of the joint filing requirement. USCIS allows this specifically for situations where the marriage was entered in good faith but ended in divorce.
            </Paragraph>
            <Paragraph>
              This is where most people stumble. They think the divorce is the problem. It is not. The problem is proving the marriage was real. USCIS will comb through everything: joint bank accounts, lease agreements, photos, tax returns, social media, sworn affidavits from people who knew you as a couple. They are looking for signs that the marriage existed on paper only.
            </Paragraph>
            <Paragraph>
              Florida immigrants have an added layer of pressure. The state has seen aggressive interior enforcement actions throughout 2025 and 2026. Staying in conditional status without a resolution is not a passive situation. It creates vulnerability.
            </Paragraph>

            <QuotePanel
              text="A divorce does not erase a genuine marriage from USCIS's perspective. What matters is the evidence you brought into that relationship from day one. Couples who document their lives together give themselves options even when things fall apart."
              author="Hardam Tripathi, Esq., Trip Law, P.A."
            />

            <MidPageCta
              heading="Your Status Is Not Over. Your Next Step Is."
              subtext="Attorney Hardam Tripathi handles complex post-divorce immigration cases across Florida."
              buttonText="Book a Free Consultation Now"
            />

            <SectionHeading>
              Can USCIS Remove Conditional Permanent Residency After Divorce?
            </SectionHeading>
            <Paragraph>
              Yes. If you were granted conditional permanent residency but you didn’t remove the conditions in the required time frame, the USCIS can terminate your status. Even 10 years' conditional residency may be revoked if USCIS believes that there is marriage fraud in your application.
            </Paragraph>
            <Paragraph>
              Marriage fraud is a federal offense under{" "}
              <ExternalLink href="https://www.law.cornell.edu/uscode/text/8/1325">
                8 U.S.C. §1325(c)
              </ExternalLink>
              . The penalties include removal, bars on future immigration benefits, and criminal prosecution. A divorce alone does not trigger this. A fraudulent marriage does.
            </Paragraph>
            <Paragraph>
              What matters here is intent. If you married legitimately and the relationship failed, that is life. USCIS understands that. If you married for papers, they know that too. The difference shows up in your paper trail, in your interview answers, and in how you respond when the pressure is on.
            </Paragraph>

            <StatusTable />

            <SectionHeading>
              What Will USCIS Check After a Divorce in a Marriage-Based Process?
            </SectionHeading>
            <Paragraph>
              They don’t want to catch you out. They are looking for consistency. Your story at the original interview must match your story now. Your documents must match each other. Your timeline must make sense.
            </Paragraph>
            <Paragraph>
              In practice, USCIS investigators review these specific categories after a divorce is flagged in a marriage-based case.
            </Paragraph>
            <BulletList items={checkListItems} />
            <Paragraph>
              People who worked with green card through marriage attorneys from the start are in a better position here. They already have a documented case file. They know what evidence exists. They can respond to a USCIS request for evidence quickly and accurately.
            </Paragraph>

            <CaseSurveyPanel />

            <SectionHeading>
              Divorce Changes the Process of Becoming a Citizen After Getting a Green Card Through Marriage
            </SectionHeading>
            <Paragraph>
              Well, it makes it take much longer. The standard naturalization timeline for a spouse of a U.S. citizen is three years from the date of green card approval. Divorce removes the accelerated track.
            </Paragraph>
            <Paragraph>
              According to the requirements of naturalization laid down by USCIS, for the three-year process, the marriage needs to remain valid and the couple continue to cohabit. Divorce breaks both conditions. You revert to the five-year track for most applicants.
            </Paragraph>
            <Paragraph>
              For conditional green card holders who divorce, the clock does not even start on naturalization until the conditions are properly removed. The I-751 waiver process can take a year or more. Factor that in before assuming citizenship is around the corner.
            </Paragraph>
            <Paragraph>
              If you have a conditional green card and want to understand your full timeline, the{" "}
              <InternalLink href="/services/waivers">
                waivers service page at Trip Law
              </InternalLink>{" "}
              walks through how these removal-of-conditions cases are built and what realistic timelines look like in 2026.
            </Paragraph>

            <SectionHeading>
              What Should a Divorced Immigrant Do Right Now in Florida?
            </SectionHeading>
            <Paragraph>
              Move fast. That is the single most actionable thing. Every day without legal representation is a day where USCIS deadlines can slip or decisions can calcify against you.
            </Paragraph>
            <Paragraph>
              Florida's immigration climate in 2026 is not neutral ground. The state has active enforcement operations, and people sitting in unresolved conditional status are more exposed than they realize. The window to act is rarely as long as people assume.
            </Paragraph>
            <Paragraph>
              Here’s the immediate checklist -
            </Paragraph>
            <BulletList items={immediateChecklist} />
            <Paragraph>
              The deportation defense team at Trip Law handles cases where conditional status has lapsed or is under challenge. That is a very different situation from a proactive I-751 waiver. Getting ahead of it makes all the difference.
            </Paragraph>

            <MidPageCta
              heading="Talk to an Immigration Attorney Today"
              subtext="Trip Law handles green card divorce cases across all of Florida. Free consultation available."
              buttonText="Schedule Your Free Consultation"
            />

            <FaqSection />
            <CtaPanel />

            <p className="mt-12 border-t border-[#C9A84C] pt-5 text-center text-[14px] leading-[1.6] text-[#2C2C2C] text-justify">
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
