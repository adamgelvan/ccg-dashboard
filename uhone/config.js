/* ============================================================================
   CCG PLAYBOOK — CONTENT CONFIG
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to change what agents see.
   It is plain JavaScript, so it works on GitHub Pages AND from a local file.

   HOW TO EDIT
     1. Find the section you want (links, products, scripts, contacts...).
     2. Copy an existing entry, change the text, keep the commas and quotes.
     3. Save, commit. The page picks it up on the next refresh.

   RULES OF THUMB
     - Every quote mark and comma matters. If the page shows a red error bar,
       you probably deleted one. Undo and try again.
     - url: ""  (empty) makes the card show "Needs a link" instead of breaking.
       Use that for internal tools until you have the real URL.
     - verify: true  puts an amber "verify" chip on a fact that can go stale.
     - Bump meta.updated whenever you change something.
   ========================================================================== */

window.CCG_HUB = {

  /* ---------------------------------------------------------------- meta -- */
  meta: {
    version: "1.0.0",
    updated: "2026-09-04",
    owner: "Adam Gelvan",
    // Link agents can click to suggest a change. Leave "" to hide the button.
    suggestEmail: "adamgelvaninsurance@gmail.com",
    // "Edit this page" link for admins. Points at this file on GitHub.
    editUrl: "https://github.com/adamgelvan/ccg-dashboard/edit/main/uhone/config.js",
    // Live sales feed shared with The Command. Leave "" to hide the pulse strip.
    pulseUrl: "https://ccg-sales-feed.adamgelvaninsurance.workers.dev/pulse"
  },

  /* --------------------------------------------------------- floor status --
     Support lines whose hours we show as "open now" / "closed" in ET.
     days: 0=Sun 1=Mon ... 6=Sat.  Times are 24h Eastern.
     ------------------------------------------------------------------------ */
  deskHours: [
    {
      name: "UHOne Broker Services",
      phone: "800-474-4467",
      windows: [
        { days: [1, 2, 3, 4], from: "08:00", to: "18:00" },
        { days: [5], from: "09:00", to: "17:00" }
      ],
      note: "Appointments, portal access, commissions"
    },
    {
      name: "UHOne Customer Service",
      phone: "800-657-8205",
      windows: [{ days: [1, 2, 3, 4, 5], from: "08:00", to: "18:00" }],
      note: "Give this number to clients"
    }
  ],

  /* ------------------------------------------------------- quick actions --
     The six things an agent reaches for on a live call. Keep this to six.
     key: the single keyboard letter that opens it.
     ------------------------------------------------------------------------ */
  quickActions: [
    {
      key: "Q",
      label: "Quote & Apply",
      sub: "eStore",
      url: "https://www.uhone.com/broker/main/default.aspx",
      auth: true,
      hint: "Sign in, then Quoting and Applications → Instant Quote",
      icon: "bolt"
    },
    {
      key: "B",
      label: "My Business",
      sub: "Pending & issued",
      url: "https://www.uhone.com/broker/MyBusiness/HarkenSummary.aspx",
      auth: true,
      hint: "Track submitted, pending and issued applications",
      icon: "clipboard"
    },
    {
      key: "D",
      label: "Find a Doctor",
      sub: "Network check",
      url: "https://www.uhone.com/resources/find-a-doctor",
      hint: "Check the caller's doctor or dentist before you quote",
      icon: "stethoscope"
    },
    {
      key: "M",
      label: "Commissions",
      sub: "Statements",
      url: "https://www.uhone.com/broker/Commissions/ViewCommissionsStatement.aspx",
      auth: true,
      hint: "View, print and download current and past statements",
      icon: "dollar"
    },
    {
      key: "A",
      label: "ACA Referral",
      sub: "Subsidy-eligible caller",
      url: "",
      hint: "Point this at the agency's ACA referral form or partner",
      icon: "share"
    },
    {
      key: "S",
      label: "Broker Services",
      sub: "800-474-4467",
      url: "tel:8004744467",
      hint: "Mon–Thu 8–6 ET, Fri 9–5 ET",
      icon: "phone"
    }
  ],

  /* ------------------------------------------------------- announcements --
     Newest first. Past `expires` disappears on its own, so the board never
     goes stale. level: "info" | "important" | "urgent".
     ------------------------------------------------------------------------ */
  announcements: [
    {
      date: "2026-09-04",
      level: "important",
      title: "The Playbook replaces the old links page",
      body: "Same address, new page. Press / to search everything, star the links you use, and tell Adam what is missing or wrong.",
      link: ""
    },
    {
      date: "2026-09-04",
      level: "urgent",
      title: "Confirm short term medical terms in the quoting tool",
      body: "Federal rules on short term duration changed twice in 2024 and 2025 and enforcement is paused. Do not quote a term length from memory. Pull it live in the eStore for the caller's state.",
      link: "https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/affordable-care-act/for-employers-and-advisers/short-term-limited-duration-insurance/stldi-statement-08-07-2025"
    },
    {
      date: "2026-09-04",
      level: "info",
      title: "Internal tool links are blank on purpose",
      body: "Cards marked “Needs a link” are waiting on the real URL for our CRM, dialer, HR and IT tools. Send them over and they go live.",
      link: ""
    }
  ],

  /* ------------------------------------------------------------- sections --
     The link library. Each section is a group of cards.
     link fields:
       label       what the card says
       url         "" shows a "Needs a link" card instead
       desc        one line, keep it under about 90 characters
       keywords    extra words search should match
       auth        true if it needs a carrier or company login
       badge       small text chip, e.g. "PDF" or "Verify"
       verify      true adds an amber chip meaning "confirm before relying on it"
     ------------------------------------------------------------------------ */
  sections: [
    {
      id: "sell",
      title: "Sell",
      blurb: "Quoting, applications and the tools that move a call to a close.",
      icon: "bolt",
      links: [
        {
          label: "UHOne Broker Portal",
          url: "https://www.uhone.com/broker/main/default.aspx",
          desc: "The eStore: quote, submit and track business. Sign in with One Healthcare ID.",
          keywords: "estore login portal golden rule broker home instant quote",
          auth: true
        },
        {
          label: "Broker Portal (new host)",
          url: "https://broker.uhone.com/",
          desc: "Re-platformed broker portal on its own hostname. Same sign-in.",
          keywords: "estore alternate login broker.uhone",
          auth: true
        },
        {
          label: "One Healthcare ID help",
          url: "https://identity.onehealthcareid.com/",
          desc: "Create an ID, recover a username, reset a password or fix multi-factor.",
          keywords: "password reset locked out login problem optum id mfa"
        },
        {
          label: "My Business",
          url: "https://www.uhone.com/broker/MyBusiness/HarkenSummary.aspx",
          desc: "Book of business: what is submitted, pending and issued.",
          keywords: "application status pending book of business harken",
          auth: true
        },
        {
          label: "Product Finder",
          url: "https://www.uhone.com/product-finder",
          desc: "Filter UHOne products by state and need. Good for a fast triage.",
          keywords: "which product state availability finder"
        },
        {
          label: "Decision Tree",
          url: "https://www.uhone.com/resources/decision-tree",
          desc: "Walks a shopper between short term, TriTerm, supplemental and ACA.",
          keywords: "talk track triage which plan choosing"
        },
        {
          label: "Find a Doctor or Dentist",
          url: "https://www.uhone.com/resources/find-a-doctor",
          desc: "Network lookup before you quote. Medical, dental and vision networks differ.",
          keywords: "provider network in network doctor dentist lookup"
        },
        {
          label: "Broker Forms",
          url: "https://www.uhone.com/broker/GetAppointed/BrokerForms.aspx",
          desc: "Appointment paperwork, direct deposit and other broker forms.",
          keywords: "paperwork direct deposit appointment form",
          auth: true
        }
      ]
    },

    {
      id: "client",
      title: "Client service",
      blurb: "What the caller needs after the sale, and what you read them during it.",
      icon: "lifebuoy",
      links: [
        {
          label: "UHC Member Hub",
          url: "https://www.uhcmemberhub.com/",
          desc: "Where members go for ID cards, claims and billing. Support 800-815-8535.",
          keywords: "member portal id card claims billing login client",
          auth: true
        },
        {
          label: "MyUHOne (legacy member sign-in)",
          url: "https://www.myuhone.com/",
          desc: "Older member sign-in still referenced on some policy paperwork.",
          keywords: "legacy member login old portal",
          auth: true,
          verify: true
        },
        {
          label: "Contact Customer Service",
          url: "https://www.uhone.com/about-us/contact-us",
          desc: "Client-facing service and claims page. Phone 800-657-8205, Mon–Fri 8–6 ET.",
          keywords: "phone number claims service hours client"
        },
        {
          label: "Summary of Benefits and Coverage",
          url: "https://www.uhone.com/resources/summary-benefits-coverage",
          desc: "Look up the SBC for a plan when a caller asks what is actually covered.",
          keywords: "sbc benefits document coverage summary"
        },
        {
          label: "Exclusions and limitations",
          url: "https://www.uhone.com/about-us/legal/exclusions-limitations",
          desc: "The legal page behind every “is that covered?” question.",
          keywords: "not covered pre-existing exclusion limitation legal"
        },
        {
          label: "Prescription drug coverage",
          url: "https://www.uhone.com/resources/prescription-drug-coverage",
          desc: "How Rx works across the UHOne line. Read before promising drug coverage.",
          keywords: "rx prescription drug pharmacy medication"
        },
        {
          label: "Optum Perks",
          url: "https://perks.optum.com/",
          desc: "Free Rx discount pricing by drug and ZIP. Useful when Rx benefits are thin.",
          keywords: "discount card drug price cheap medication pharmacy"
        },
        {
          label: "GoodRx",
          url: "https://www.goodrx.com/",
          desc: "Second opinion on cash drug prices when a caller balks at a plan's Rx.",
          keywords: "drug price coupon pharmacy comparison"
        },
        {
          label: "Fixed indemnity claim form",
          url: "https://www.uhone.com/ContentManagement/FileAttachment.ashx?FilePath=/HPG+Claim+Form_44809-X201608.pdf",
          desc: "Health ProtectorGuard claim form for a member who needs to file.",
          keywords: "claim form hpg indemnity file a claim pdf",
          badge: "PDF",
          verify: true
        }
      ]
    },

    {
      id: "products",
      title: "Product library",
      blurb: "Consumer pages and brochures. Brochures are versioned, so check the portal for the newest.",
      icon: "book",
      links: [
        {
          label: "Short Term Medical",
          url: "https://www.uhone.com/health-insurance/short-term-health-insurance",
          desc: "Product overview and plan lineup for short term medical.",
          keywords: "stm short term temporary gap coverage"
        },
        {
          label: "Short Term brochure",
          url: "https://www.uhone.com/api/supplysystem/?FileName=46998P-G202509.pdf",
          desc: "Form 46998P, September 2025 revision.",
          keywords: "stm brochure pdf 46998P",
          badge: "PDF"
        },
        {
          label: "TriTerm Medical",
          url: "https://www.uhone.com/health-insurance/triterm-medical-insurance",
          desc: "Nearly three years of coverage on one application. Coverage can start in five days.",
          keywords: "triterm three year extended short term"
        },
        {
          label: "TriTerm brochure",
          url: "https://www.uhone.com/api/supplysystem/?FileName=45747C1-G202008.pdf",
          desc: "Form 45747C1. Older revision, confirm against the portal.",
          keywords: "triterm brochure pdf",
          badge: "PDF",
          verify: true
        },
        {
          label: "Health ProtectorGuard",
          url: "https://www.uhone.com/health-insurance/supplemental/hospital-and-doctor-insurance",
          desc: "Fixed indemnity. Pays set cash amounts per service, not a share of the bill.",
          keywords: "hpg fixed indemnity hospital doctor cash benefit"
        },
        {
          label: "Guard plans brochure",
          url: "https://www.uhone.com/api/supplysystem/?FileName=52002-G202506.pdf",
          desc: "Form 52002, June 2025. The current Guard fixed benefit lineup.",
          keywords: "hpg guard brochure pdf 52002",
          badge: "PDF"
        },
        {
          label: "Dental",
          url: "https://www.uhone.com/health-insurance/supplemental/dental-insurance",
          desc: "Primary, Premier and Essential families of individual dental plans.",
          keywords: "dental teeth cleaning crown ppo"
        },
        {
          label: "Dental Primary brochure",
          url: "https://www.uhone.com/api/supplysystem/?FileName=45585B-G202108.pdf",
          desc: "Form 45585B. Primary plan family.",
          keywords: "dental primary brochure pdf",
          badge: "PDF"
        },
        {
          label: "Dental Premier brochure",
          url: "https://www.uhone.com/api/supplysystem/?FileName=45586B-G202106.pdf",
          desc: "Form 45586B. Premier plan family.",
          keywords: "dental premier brochure pdf",
          badge: "PDF"
        },
        {
          label: "Vision",
          url: "https://www.uhone.com/plans/vision/vision-plan-a",
          desc: "Plan A is glasses or contacts. Plan B is glasses and contacts.",
          keywords: "vision eye glasses contacts exam"
        },
        {
          label: "Accident",
          url: "https://www.uhone.com/health-insurance/supplemental/accidental-injury-insurance",
          desc: "Accident SafeGuard plans A through C, plus the Accident ProGuard bundle.",
          keywords: "accident injury safeguard proguard"
        },
        {
          label: "Critical Illness",
          url: "https://www.uhone.com/health-insurance/supplemental/critical-illness-insurance",
          desc: "CriticalGuard pays a lump sum on first diagnosis of a covered condition.",
          keywords: "critical illness cancer heart stroke criticalguard lump sum"
        },
        {
          label: "Hospital indemnity",
          url: "https://www.uhone.com/plans/supplemental-indemnity/hospital-safeguard-gi-plan-750",
          desc: "Hospital SafeGuard GI pays a flat daily amount. Guaranteed issue tiers exist.",
          keywords: "hospital safeguard gi guaranteed issue per day confinement"
        },
        {
          label: "Term Life",
          url: "https://www.uhone.com/health-insurance/supplemental/term-life-insurance",
          desc: "Term Life SafeGuard in 10 or 20 year level terms, optional critical illness rider.",
          keywords: "life insurance term safeguard rider"
        },
        {
          label: "Supplemental hub",
          url: "https://www.uhone.com/health-insurance/supplemental",
          desc: "Index of every supplemental line in one place.",
          keywords: "supplemental ancillary index all products"
        }
      ]
    },

    {
      id: "training",
      title: "Training",
      blurb: "Carrier product training. Everything here needs your broker sign-in.",
      icon: "play",
      links: [
        {
          label: "Product & Training Videos",
          url: "https://www.uhone.com/broker/ToolsAndTraining/ProductTrainingVideos.aspx",
          desc: "Short on-demand videos. Some can be sent straight to a client.",
          keywords: "video training on demand product learn",
          auth: true
        },
        {
          label: "Health Webinars On Demand",
          url: "https://www.uhone.com/broker/toolsandtraining/healthwebinarsondemand.aspx",
          desc: "Recorded webinar library, any time of day.",
          keywords: "webinar recorded training on demand",
          auth: true
        },
        {
          label: "Short Term & Ancillary Resources",
          url: "https://www.uhone.com/broker/ToolsAndTraining/ShortTermAncillaryResources.aspx",
          desc: "Brochures, applications and sales tips for short term and every ancillary line.",
          keywords: "resource center sales tips brochures ancillary",
          auth: true
        },
        {
          label: "Short Term Medical training",
          url: "https://www.uhone.com/Broker/ToolsAndTraining/productStm.aspx",
          desc: "Broker product page for short term, including the state availability grid.",
          keywords: "stm training state grid availability",
          auth: true
        },
        {
          label: "Health ProtectorGuard training",
          url: "https://www.uhone.com/broker/ToolsAndTraining/productHealthProtectorGuard.aspx",
          desc: "Broker product page for the fixed indemnity line.",
          keywords: "hpg training fixed indemnity broker page",
          auth: true
        },
        {
          label: "Dental training",
          url: "https://www.uhone.com/broker/ToolsAndTraining/productDental.aspx",
          desc: "Broker product page for the dental line.",
          keywords: "dental training broker page",
          auth: true
        },
        {
          label: "Vision training",
          url: "https://www.uhone.com/Broker/ToolsAndTraining/productVision.aspx",
          desc: "Broker product page for the vision line.",
          keywords: "vision training broker page",
          auth: true
        },
        {
          label: "Accident training",
          url: "https://www.uhone.com/broker/ToolsAndTraining/ProductAccident.aspx",
          desc: "Broker product page for accident products.",
          keywords: "accident training broker page proguard safeguard",
          auth: true
        },
        {
          label: "New agent walkthrough",
          url: "https://blog.enrollinsurance.com/2025/03/a-step-by-step-guide-to-access-and-use-the-uhone-broker-portal/",
          desc: "Outside step-by-step guide to the broker portal. Handy on day one.",
          keywords: "how to use portal guide new hire walkthrough estore"
        }
      ]
    },

    {
      id: "money",
      title: "Getting paid",
      blurb: "Commissions, direct deposit and staying appointed.",
      icon: "dollar",
      links: [
        {
          label: "View commission statements",
          url: "https://www.uhone.com/broker/Commissions/ViewCommissionsStatement.aspx",
          desc: "Current and past statements to view, print or download.",
          keywords: "commission statement pay paid money download",
          auth: true
        },
        {
          label: "Licensing and Commissions",
          url: "https://www.uhone.com/broker/commissions/",
          desc: "The commissions section of the portal, including direct deposit setup.",
          keywords: "direct deposit licensing commission section",
          auth: true
        },
        {
          label: "Get appointed",
          url: "https://www.uhone.com/broker/getappointed/index.aspx",
          desc: "Online contracting. Pick states, pay non-resident fees, sign the agreement.",
          keywords: "contracting appointment new state license add state"
        },
        {
          label: "Broker registration",
          url: "https://www.uhone.com/broker/main/registration.aspx",
          desc: "First-time portal account. Your NPN is your broker ID.",
          keywords: "register new account npn sign up first time"
        },
        {
          label: "Commission questions",
          url: "mailto:commissions@uhone.com",
          desc: "Email the commissions team. Statements pay weekly by direct deposit.",
          keywords: "email commissions missing payment question"
        },
        {
          label: "Agency comp grid",
          url: "",
          desc: "Our own commission schedule. Adam to add the link.",
          keywords: "comp grid commission schedule internal pay rate"
        }
      ]
    },

    {
      id: "aca",
      title: "ACA & referrals",
      blurb: "Nothing UHOne sells is ACA coverage. When the caller needs it, hand them off cleanly.",
      icon: "share",
      links: [
        {
          label: "Internal ACA referral",
          url: "",
          desc: "Where a subsidy-eligible caller goes. Adam to add the form or partner link.",
          keywords: "referral form aca handoff transfer partner internal"
        },
        {
          label: "See plans and prices",
          url: "https://www.healthcare.gov/see-plans/",
          desc: "Window-shop marketplace plans and subsidized premiums with no account.",
          keywords: "healthcare.gov marketplace window shop premium subsidy"
        },
        {
          label: "KFF subsidy calculator",
          url: "https://www.kff.org/interactive/subsidy-calculator/",
          desc: "Estimate a premium tax credit by income, age, household and ZIP.",
          keywords: "subsidy tax credit estimate calculator income"
        },
        {
          label: "Special enrollment periods",
          url: "https://www.healthcare.gov/coverage-outside-open-enrollment/special-enrollment-period/",
          desc: "Which life events open a 60 day window outside open enrollment.",
          keywords: "sep qualifying life event lost coverage moved married birth"
        },
        {
          label: "CMS agent and broker resources",
          url: "https://www.cms.gov/marketplace/agents-brokers/resources",
          desc: "Registration, annual training and help desks for marketplace business.",
          keywords: "cms ffm registration mlms training marketplace certified"
        },
        {
          label: "CMS Enterprise Portal",
          url: "https://portal.cms.gov",
          desc: "Where the annual marketplace training and identity proofing live.",
          keywords: "mlms training portal ffm identity proofing certification",
          auth: true
        },
        {
          label: "HealthSherpa",
          url: "https://www.healthsherpa.com/sessions/new",
          desc: "Enhanced direct enrollment for marketplace plans. Agent support 888-684-1373.",
          keywords: "ede enroll marketplace aca sherpa",
          auth: true
        },
        {
          label: "Medicare Plan Finder",
          url: "https://www.medicare.gov/plan-compare/",
          desc: "For the caller who turns out to be 65 or older.",
          keywords: "medicare 65 advantage part d medigap refer senior"
        }
      ]
    },

    {
      id: "license",
      title: "License & compliance",
      blurb: "Keep yourself sellable and the call clean.",
      icon: "shield",
      links: [
        {
          label: "NIPR Licensing Center",
          url: "https://nipr.com/licensing-center",
          desc: "Apply for and renew resident and non-resident licenses in every state.",
          keywords: "nipr license renew apply non-resident state",
          auth: true
        },
        {
          label: "Look up your NPN",
          url: "https://npn-lookup.app.nipr.com/npn-lookup/PacNpnSearch.htm",
          desc: "Find your national producer number. You need it for portal registration.",
          keywords: "npn national producer number lookup find my"
        },
        {
          label: "Check application status",
          url: "https://nipr.com/licensing-center/apply-for-a-license/check-your-insurance-application-status",
          desc: "Where a pending license or renewal actually stands.",
          keywords: "license application status pending renewal waiting"
        },
        {
          label: "CE transcript",
          url: "https://nipr.com/licensing-center/continuing-education-transcripts",
          desc: "Confirm your continuing education credits before a renewal deadline.",
          keywords: "ce credits transcript continuing education renewal"
        },
        {
          label: "Verify a license",
          url: "https://nipr.com/licensing/verify-existing-licenses",
          desc: "Producer database report of every license and appointment you hold.",
          keywords: "pdb producer database verify license appointment report"
        },
        {
          label: "Sircon",
          url: "https://www.sircon.com/",
          desc: "The other licensing portal. Some states and carriers prefer it.",
          keywords: "sircon vertafore license renew alternative",
          auth: true
        },
        {
          label: "State insurance departments",
          url: "https://content.naic.org/state-insurance-departments",
          desc: "Contact and lookup for every state department of insurance.",
          keywords: "doi state department insurance regulator complaint lookup"
        },
        {
          label: "Life & health CE",
          url: "https://www.webce.com/insurance-ce/life-and-health-ce",
          desc: "State-approved continuing education courses for our license type.",
          keywords: "ce course credits webce life health continuing education"
        },
        {
          label: "Telemarketing Sales Rule",
          url: "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule",
          desc: "Do Not Call rules, the 8am to 9pm window and consent exceptions.",
          keywords: "dnc do not call tcpa telemarketing rules consent hours",
          verify: true
        },
        {
          label: "FCC telemarketing rules",
          url: "https://www.fcc.gov/general/telemarketing",
          desc: "Consent, autodialers and caller ID. Rules here move, so check the date.",
          keywords: "tcpa fcc consent robocall autodialer caller id",
          verify: true
        },
        {
          label: "HIPAA privacy summary",
          url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html",
          desc: "What counts as protected health information and how to handle it.",
          keywords: "hipaa privacy phi protected health information security",
          verify: true
        },
        {
          label: "Errors & omissions",
          url: "https://www.napa-benefits.org/insurance/errors-and-omissions-eando-insurance",
          desc: "E&O coverage for life and health agents. Carriers ask for the certificate.",
          keywords: "eo errors omissions insurance certificate coverage agent",
          verify: true
        }
      ]
    },

    {
      id: "internal",
      title: "Our floor",
      blurb: "CCG boards and internal systems.",
      icon: "grid",
      links: [
        {
          label: "CCG HQ",
          url: "../",
          desc: "The operations hub with every board in one place.",
          keywords: "hq hub home dashboard main",
          sameTab: true
        },
        {
          label: "The Octagon",
          url: "https://adamgelvan.github.io/octagon-leaderboard/",
          desc: "Fight-night leaderboard for the office TV.",
          keywords: "leaderboard octagon tv board standings contest"
        },
        {
          label: "The War Room",
          url: "https://adamgelvan.github.io/octagon-leaderboard/warroom/",
          desc: "Weekly battle grid: every agent, every day, premium and deals.",
          keywords: "war room weekly stats grid premium deals"
        },
        {
          label: "The Command",
          url: "../command/",
          desc: "Live call funnel: calls, presentations, quotes and closes.",
          keywords: "command funnel calls analytics live pipeline"
        },
        {
          label: "CPA & ROI",
          url: "https://ccg-cpa.adamgelvaninsurance.workers.dev/",
          desc: "Spend, sales, cost per acquisition and ROI by campaign.",
          keywords: "cpa roi spend marketing cost acquisition",
          auth: true
        },
        {
          label: "CRM",
          url: "",
          desc: "Our customer system. Adam to add the link.",
          keywords: "crm customer records leads pipeline internal"
        },
        {
          label: "Dialer / phone system",
          url: "",
          desc: "Softphone or dialer login. Adam to add the link.",
          keywords: "dialer phone softphone voip extension internal"
        },
        {
          label: "Scripts document",
          url: "",
          desc: "The full script doc, if we keep one outside this page.",
          keywords: "scripts document google doc talk track internal"
        },
        {
          label: "Time off & HR",
          url: "",
          desc: "Payroll, PTO requests and HR forms. Adam to add the link.",
          keywords: "hr pto time off payroll vacation benefits internal"
        },
        {
          label: "IT help",
          url: "",
          desc: "Where to report a broken headset, laptop or login. Adam to add the link.",
          keywords: "it help desk ticket support broken computer internal"
        }
      ]
    }
  ],

  /* ------------------------------------------------------------ products --
     Cheat sheets. facts[] are short lines an agent can read at a glance.
     Anything that can drift carries verify: true.
     ------------------------------------------------------------------------ */
  products: [
    {
      name: "Short Term Medical",
      short: "STM",
      pitch: "Temporary major-medical-style coverage for a gap, priced low because it is underwritten.",
      fits: "Between jobs, waiting on employer coverage, missed open enrollment, healthy and under 65.",
      underwritten: true,
      facts: [
        { t: "Term length", v: "Varies by state and changed twice in the last two years. Pull it live in the eStore.", verify: true },
        { t: "Renewal", v: "Not guaranteed renewable. A new term usually means a new application and a new deductible." },
        { t: "Pre-existing", v: "Generally excluded. Look-back is 6 or 12 months depending on the state brochure.", verify: true },
        { t: "Structure", v: "Deductible, coinsurance and out-of-pocket max, with a lifetime maximum per person." },
        { t: "Effective date", v: "Apply any day. Coverage can start as soon as the next day, subject to underwriting." }
      ],
      watch: "No maternity, no mental health or substance use, little or no preventive care, and Rx varies by tier.",
      links: [
        { label: "Product page", url: "https://www.uhone.com/health-insurance/short-term-health-insurance" },
        { label: "Brochure", url: "https://www.uhone.com/api/supplysystem/?FileName=46998P-G202509.pdf" },
        { label: "Broker training", url: "https://www.uhone.com/Broker/ToolsAndTraining/productStm.aspx", auth: true }
      ]
    },
    {
      name: "TriTerm Medical",
      short: "TriTerm",
      pitch: "Three back-to-back terms on one application, so nearly three years without re-applying.",
      fits: "Healthy applicants who need more than a few months and want to stop re-underwriting every year.",
      underwritten: true,
      facts: [
        { t: "Length", v: "Three consecutive 12-month terms less one day, close to 36 months total." },
        { t: "Ages", v: "Primary applicant 19 to 63. Coverage ends at 65.", verify: true },
        { t: "Pre-existing", v: "Some eligible services are covered only after 12 months on the plan.", verify: true },
        { t: "Preventive", v: "Limited benefit after a six month wait in the first year.", verify: true },
        { t: "Start date", v: "Coverage can begin within five days of an approved application." }
      ],
      watch: "Still not minimum essential coverage. Plan availability varies by state.",
      links: [
        { label: "Product page", url: "https://www.uhone.com/health-insurance/triterm-medical-insurance" },
        { label: "Brochure", url: "https://www.uhone.com/api/supplysystem/?FileName=45747C1-G202008.pdf" },
        { label: "Pros and cons", url: "https://www.uhone.com/health-and-wellness/health-insurance/the-pros-and-cons-of-triterm-medical-insurance" }
      ]
    },
    {
      name: "Health ProtectorGuard",
      short: "HPG",
      pitch: "Fixed indemnity. Pays a set cash amount per covered service no matter what the bill says.",
      fits: "Someone with a high deductible plan who wants cash back, or a budget buyer who understands the trade.",
      underwritten: true,
      facts: [
        { t: "How it pays", v: "A stated dollar amount per service. No deductible, no coinsurance, no copay." },
        { t: "Network", v: "Not required, but Choice Plus providers cost the member less." },
        { t: "Renewable", v: "Through age 65.", verify: true },
        { t: "Waiting period", v: "Office and urgent care visit benefits follow a short illness waiting period.", verify: true },
        { t: "Tiers", v: "Choice and Select families, plus the newer Guard plans in the 2025 brochure." }
      ],
      watch: "Say the disclosure out loud. This is a supplement, not health insurance, and it does not cover essential health benefits.",
      links: [
        { label: "Product page", url: "https://www.uhone.com/health-insurance/supplemental/hospital-and-doctor-insurance" },
        { label: "Guard brochure", url: "https://www.uhone.com/api/supplysystem/?FileName=52002-G202506.pdf" },
        { label: "How fixed indemnity works", url: "https://www.uhone.com/resources/articles/hospital-and-doctor/how-fixed-indemnity-insurance-works" }
      ]
    },
    {
      name: "Hospital SafeGuard",
      short: "Hospital",
      pitch: "A flat cash amount for every day in the hospital, with guaranteed issue tiers that ask no health questions.",
      fits: "Callers who cannot pass underwriting, or anyone pairing daily cash with a high deductible plan.",
      underwritten: false,
      facts: [
        { t: "Two versions", v: "Underwritten Hospital SafeGuard, and Hospital SafeGuard GI with no health questions." },
        { t: "GI tiers", v: "Daily benefit tiers around $500, $750 and $1,000.", verify: true },
        { t: "Ages", v: "Roughly 18 to 64 plus eligible dependents, renewable to 65.", verify: true },
        { t: "Pairs with", v: "Health ProtectorGuard, to cover both the doctor side and the hospital day." }
      ],
      watch: "Limited benefit supplement. Never present it as a substitute for major medical.",
      links: [
        { label: "GI Plan 750", url: "https://www.uhone.com/plans/supplemental-indemnity/hospital-safeguard-gi-plan-750" },
        { label: "GI brochure", url: "https://www.uhone.com/api/supplysystem/?FileName=47684B-G202112.pdf" }
      ]
    },
    {
      name: "Accident",
      short: "Accident",
      pitch: "Cash for treating an accidental injury, paid on top of whatever else the caller has.",
      fits: "Active families, kids in sports, trades and gig workers, and anyone with a big deductible to absorb.",
      underwritten: false,
      facts: [
        { t: "SafeGuard", v: "Plans A through C. Initial doctor visit benefit runs about $150 on A and $300 on C.", verify: true },
        { t: "ProGuard", v: "A three in one: accident expense, critical illness and accidental death benefit." },
        { t: "ProGuard limits", v: "Accident expense of $5,000 or $10,000 a year, critical illness $10,000 to $50,000.", verify: true },
        { t: "Age 65", v: "The critical illness piece of ProGuard reduces by half at 65.", verify: true }
      ],
      watch: "Pays for accidents only. An illness claim goes nowhere.",
      links: [
        { label: "Product page", url: "https://www.uhone.com/health-insurance/supplemental/accidental-injury-insurance" },
        { label: "ProGuard brochure", url: "https://www.uhone.com/api/supplysystem/?FileName=45397B-G202310.pdf" }
      ]
    },
    {
      name: "CriticalGuard",
      short: "Critical",
      pitch: "A lump sum in cash on the first diagnosis of a covered condition. The client spends it on anything.",
      fits: "Family history worries, sole earners, and anyone whose savings would not survive a diagnosis.",
      underwritten: false,
      facts: [
        { t: "Guaranteed issue", v: "A $5,000 tier for ages 18 to 74 and a $10,000 tier for 18 to 64, no health questions.", verify: true },
        { t: "Higher amounts", v: "Underwritten benefit amounts run much higher.", verify: true },
        { t: "Waiting period", v: "About 30 days from the effective date before benefits are payable.", verify: true },
        { t: "Pre-existing", v: "Conditions treated in the 12 months before enrollment are excluded for the first year.", verify: true }
      ],
      watch: "It pays on diagnosis of listed conditions only. Read the condition list, do not paraphrase it.",
      links: [
        { label: "Product page", url: "https://www.uhone.com/health-insurance/supplemental/critical-illness-insurance" },
        { label: "Brochure", url: "https://www.uhone.com/api/supplysystem/?FileName=49836-G202402.pdf" }
      ]
    },
    {
      name: "Dental",
      short: "Dental",
      pitch: "Individual dental PPO plans from a budget tier up to plans that cover implants and braces.",
      fits: "Almost every caller. It is the easiest second product on the call.",
      underwritten: false,
      facts: [
        { t: "Families", v: "Primary is the budget tier. Premier pays more. Essential sits in the middle." },
        { t: "Preventive", v: "Covered at 100% with no deductible and no waiting period." },
        { t: "Basic work", v: "Fillings and simple extractions typically after a six month wait.", verify: true },
        { t: "Major work", v: "Crowns, root canals and bridges typically after twelve months.", verify: true },
        { t: "Deductible", v: "Around $50 per person a year on basic and major, capped per family.", verify: true }
      ],
      watch: "Waiting periods are the number one dental complaint. Say them before the client finds them.",
      links: [
        { label: "Product page", url: "https://www.uhone.com/health-insurance/supplemental/dental-insurance" },
        { label: "Waiting periods explainer", url: "https://www.uhone.com/health-and-wellness/supplemental-insurance/what-is-a-waiting-period-and-why-might-it-affect-your-dental-coverage" }
      ]
    },
    {
      name: "Vision",
      short: "Vision",
      pitch: "Exam, frames and lenses on a simple two plan menu. No waiting periods.",
      fits: "Anyone buying dental. It rides along on the same application.",
      underwritten: false,
      facts: [
        { t: "Plan A", v: "Glasses or contacts." },
        { t: "Plan B", v: "Glasses and contacts." },
        { t: "In network", v: "Around a $10 exam copay and a $150 frame allowance.", verify: true },
        { t: "Waiting", v: "None, and all ages are eligible." }
      ],
      watch: "Allowances vary by state, so quote from the tool rather than memory.",
      links: [
        { label: "Plan A", url: "https://www.uhone.com/plans/vision/vision-plan-a" },
        { label: "Plan B", url: "https://www.uhone.com/plans/vision/vision-plan-b" }
      ]
    },
    {
      name: "Term Life",
      short: "Life",
      pitch: "Level term life for 10 or 20 years, with an optional critical illness rider.",
      fits: "Anyone with a mortgage, kids, or a spouse who would feel the loss of their income.",
      underwritten: true,
      facts: [
        { t: "Terms", v: "10 or 20 year level terms." },
        { t: "After the term", v: "Coverage can continue year to year to 75 without new evidence, at rising premiums.", verify: true },
        { t: "Rider", v: "A critical illness rider can pay a cash benefit on a qualifying diagnosis." },
        { t: "Face amounts", v: "Confirm the available range in the quoting tool.", verify: true }
      ],
      watch: "Availability and issue ages vary by state.",
      links: [
        { label: "Product page", url: "https://www.uhone.com/health-insurance/supplemental/term-life-insurance" }
      ]
    }
  ],

  /* -------------------------------------------------------------- scripts --
     kind: "say" renders as a quotable block with a copy button.
           "note" renders as guidance.
           "disclosure" renders in the compliance style, read it as written.
     ------------------------------------------------------------------------ */
  scripts: [
    {
      title: "Opening the call",
      tags: "open greeting intro first",
      lines: [
        { kind: "say", text: "Thanks for calling Coverage Care Group, this is [name] on a recorded line. Who do I have the pleasure of speaking with today?" },
        { kind: "note", text: "Get the name, the state and the reason they called before anything else. State drives which products you can even quote." }
      ]
    },
    {
      title: "Discovery in four questions",
      tags: "discovery qualify questions needs",
      lines: [
        { kind: "say", text: "What's going on with your coverage right now, are you between plans or looking to replace something?" },
        { kind: "say", text: "Who are we looking to cover, just yourself or the family too?" },
        { kind: "say", text: "Is anyone on any regular medications or seen a specialist in the last year?" },
        { kind: "say", text: "And roughly what does the household bring in for the year before taxes?" },
        { kind: "note", text: "The last two decide the call. Medications and specialists point at underwriting risk. Income decides whether they belong on the marketplace instead." }
      ]
    },
    {
      title: "When they should go to the marketplace",
      tags: "aca subsidy referral marketplace transfer pre-existing",
      lines: [
        { kind: "note", text: "Refer when income makes them subsidy-eligible, when a pre-existing condition needs coverage now, or when they need maternity or mental health care." },
        { kind: "say", text: "Based on what you've told me, you'd likely qualify for help paying for a full major medical plan, and that's going to serve you better than anything I can sell you today. Let me get you to the right place for that." },
        { kind: "note", text: "Log it as an ACA referral. That number is tracked separately and it matters." }
      ]
    },
    {
      title: "Short term versus a full plan",
      tags: "objection stm aca difference compare explain",
      lines: [
        { kind: "say", text: "The difference is what happens with anything you've already been treated for. A short term plan is medically underwritten, so it covers new things that come up, not conditions you already have. That's the trade for the lower premium." },
        { kind: "note", text: "Never call it comprehensive, full coverage, or Obamacare-equivalent. It is not." }
      ]
    },
    {
      title: "Explaining fixed indemnity honestly",
      tags: "hpg indemnity explain cash benefit objection",
      lines: [
        { kind: "say", text: "This one works differently. It pays you a set amount for each service, say a fixed amount for a doctor visit or for each day in the hospital, no matter what the bill is. You get the cash, and you decide where it goes." },
        { kind: "note", text: "Then say what it does not do, before they ask. Set the expectation on the call, not at claim time." }
      ]
    },
    {
      title: "Price objection",
      tags: "objection price expensive cost afford too much",
      lines: [
        { kind: "say", text: "I hear you. Let me ask it this way: what number were you hoping to be at? I'd rather show you what fits your budget than talk you into something you cancel in two months." },
        { kind: "note", text: "Then take benefits off, not honesty. Lowering the plan is fine. Overstating what the cheap plan covers is not." }
      ]
    },
    {
      title: "Let me think about it",
      tags: "objection think about it stall callback spouse",
      lines: [
        { kind: "say", text: "Completely fair. Just so I know I explained it well, what part are you not sure about, the price or what it actually covers?" },
        { kind: "note", text: "The answer tells you which objection you are really handling. Book a specific callback time, in their time zone, not just some day." }
      ]
    },
    {
      title: "I need to ask my spouse",
      tags: "objection spouse partner decision maker",
      lines: [
        { kind: "say", text: "Makes sense, it affects both of you. Is he or she around now? I'd rather answer the questions directly than have you play telephone with the details." }
      ]
    },
    {
      title: "Required disclosure: short term and TriTerm",
      tags: "disclosure compliance stm triterm aca mec required",
      lines: [
        { kind: "disclosure", text: "This is not Minimum Essential Coverage as defined in the Affordable Care Act and may not cover all Essential Health Benefits in your state. This plan is medically underwritten and generally does not cover pre-existing conditions." },
        { kind: "note", text: "Compliance check: confirm this wording against the current UHOne producer guide and your state brochure before it goes on the floor." }
      ]
    },
    {
      title: "Required disclosure: fixed indemnity",
      tags: "disclosure compliance hpg indemnity required hospital",
      lines: [
        { kind: "disclosure", text: "This fixed benefit indemnity insurance product is a supplement to health insurance and is not a substitute for the minimum essential coverage required by the Affordable Care Act. It pays benefits in a stated amount regardless of the actual expenses incurred." },
        { kind: "note", text: "Compliance check: confirm this wording against the current UHOne producer guide and your state brochure before it goes on the floor." }
      ]
    },
    {
      title: "Closing and setting up the application",
      tags: "close application submit enroll payment effective date",
      lines: [
        { kind: "say", text: "Here's what happens next. I'll take the application with you right now, it takes about ten minutes, and I'll tell you the exact date your coverage starts before we submit anything." },
        { kind: "note", text: "Read the effective date back to them. Most cancellations start as a surprise about when coverage began." }
      ]
    }
  ],

  /* ------------------------------------------------------------- contacts -- */
  contacts: [
    { name: "UHOne Broker Services", group: "Carrier", phone: "800-474-4467", hours: "Mon–Thu 8–6 ET, Fri 9–5 ET", note: "Appointments, portal access, commissions" },
    { name: "UHOne Customer Service", group: "Carrier", phone: "800-657-8205", hours: "Mon–Fri 8–6 ET", note: "Give this to clients for service and claims" },
    { name: "UHC Member Hub support", group: "Carrier", phone: "800-815-8535", hours: "Mon–Fri 8–6 ET", note: "Member portal, ID cards, billing" },
    { name: "UHOne Commissions", group: "Carrier", email: "commissions@uhone.com", note: "Direct deposit forms and pay questions" },
    { name: "HealthSherpa agent support", group: "Partner", phone: "888-684-1373", note: "Marketplace enrollment platform" },
    { name: "Medicare", group: "Partner", phone: "800-633-4227", hours: "24 hours", note: "For callers who turn out to be 65 or older" },
    { name: "Sales floor manager", group: "Internal", phone: "", note: "Adam to add" },
    { name: "IT / headset problems", group: "Internal", phone: "", note: "Adam to add" }
  ],

  /* ----------------------------------------------------------- onboarding --
     New hire checklist. Progress is saved in the agent's own browser.
     ------------------------------------------------------------------------ */
  onboarding: [
    { stage: "Day one", label: "Find your NPN", url: "https://npn-lookup.app.nipr.com/npn-lookup/PacNpnSearch.htm" },
    { stage: "Day one", label: "Register for the broker portal with your NPN", url: "https://www.uhone.com/broker/main/registration.aspx" },
    { stage: "Day one", label: "Set up your One Healthcare ID and multi-factor", url: "https://identity.onehealthcareid.com/" },
    { stage: "Day one", label: "Read the two required disclosures out loud until they sound natural", url: "" },
    { stage: "Week one", label: "Complete contracting for every state you will sell", url: "https://www.uhone.com/broker/getappointed/index.aspx" },
    { stage: "Week one", label: "Submit your direct deposit form to commissions", url: "mailto:commissions@uhone.com" },
    { stage: "Week one", label: "Watch the short term and ancillary product videos", url: "https://www.uhone.com/broker/ToolsAndTraining/ProductTrainingVideos.aspx" },
    { stage: "Week one", label: "Run three practice quotes in the eStore", url: "https://www.uhone.com/broker/main/default.aspx" },
    { stage: "First 30", label: "Learn the ACA referral rule cold: who gets handed off and why", url: "" },
    { stage: "First 30", label: "Confirm your E&O certificate is on file", url: "" },
    { stage: "First 30", label: "Take one full call using only this page for reference", url: "" }
  ],


  /* ------------------------------------------------------------ glossary --
     The words that fly past a new hire in their first week.
     ------------------------------------------------------------------------ */
  glossary: [
    { term: "STM / STLDI", def: "Short-term, limited-duration insurance. Temporary, underwritten medical coverage exempt from ACA market rules." },
    { term: "TriTerm", def: "UHOne's extended short term product: three consecutive 12-month terms minus a day on one application." },
    { term: "MEC", def: "Minimum Essential Coverage — the ACA's definition of qualifying coverage. None of our UHOne products are MEC." },
    { term: "EHB", def: "Essential Health Benefits — the ten categories ACA plans must cover. Non-ACA plans may exclude some or all." },
    { term: "Fixed indemnity", def: "Pays a set dollar amount per covered service or day regardless of the bill. An excepted benefit, not health insurance." },
    { term: "HPG", def: "Health ProtectorGuard — UHOne's fixed indemnity product line (Choice / Select / Guard plans)." },
    { term: "GI", def: "Guaranteed issue — no health questions (e.g., Hospital SafeGuard GI, CriticalGuard GI tiers)." },
    { term: "Pre-existing condition", def: "A condition treated or advised within the look-back window (6 or 12 months by state) before the effective date. Generally excluded on STM/TriTerm." },
    { term: "Look-back", def: "The period before the effective date the carrier examines for pre-existing conditions." },
    { term: "Underwriting", def: "The carrier's review of health answers before issuing. Simplified issue = few questions; GI = none." },
    { term: "ACA / Marketplace / FFM", def: "Affordable Care Act coverage sold on HealthCare.gov (the Federally Facilitated Marketplace) or a state exchange." },
    { term: "OEP", def: "Open Enrollment Period for ACA plans. Opens Nov 1 each year; the end date varies by marketplace and rule year." },
    { term: "SEP / QLE", def: "Special Enrollment Period triggered by a Qualifying Life Event (loss of coverage, move, marriage, birth); usually a 60-day window." },
    { term: "FPL", def: "Federal Poverty Level. 2026: $15,960 single, $33,000 family of four. Subsidy eligibility is a percentage of FPL." },
    { term: "APTC", def: "Advance Premium Tax Credit — the ACA subsidy paid to the carrier monthly." },
    { term: "NPN", def: "National Producer Number — your unique ID across carriers; doubles as your UHOne Broker ID." },
    { term: "One Healthcare ID", def: "The single sign-on ID (formerly Optum ID) used for the UHOne broker portal." },
    { term: "eStore", def: "UHOne's quoting and e-application tool inside the broker portal (Quoting and Applications → Instant Quote)." },
    { term: "AD&D", def: "Accidental Death & Dismemberment benefit included in accident plans." },
    { term: "R&C", def: "Reasonable & customary — the allowed charge used to pay out-of-network claims (e.g., Premier Elite dental)." },
    { term: "Rider", def: "An add-on to a base policy, e.g., a vision rider on dental or a critical illness rider on term life." },
    { term: "EBR", def: "Established Business Relationship — a TSR exception that allows certain calls to existing customers." },
    { term: "TSR / DNC / TCPA", def: "FTC Telemarketing Sales Rule, the National Do Not Call Registry, and the FCC's Telephone Consumer Protection Act." },
    { term: "PHI", def: "Protected Health Information — health details tied to an identifiable person." }
  ],

  /* ---------------------------------------------------- subsidy screening --
     Federal poverty guideline used by the ACA screening tool.
     Update these two numbers each January from the ASPE page.
     ------------------------------------------------------------------------ */
  fpl: {
    year: 2026,
    base: 15960,
    perPerson: 5680,
    source: "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines",
    verify: true
  }
};
