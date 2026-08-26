# Austin & Austin — live Squarespace copy extract

- **Live site:** https://www.lawaustinandaustin.com/
- **Fetched:** 2026-08-26 (PT)
- **Method:** `curl` with `User-Agent: Mozilla` (WebFetch 500s on this host)
- **Scope:** INCLUDE pages + 15 blog posts from `/workspace/austin-sitemap-locs.txt`, plus the live homepage
- **Rule:** verbatim body only; do not invent email, form, hours, or CalBar numbers
- **Researcher agent `1e95c8d7-1af7-4e39-b830-23dd95c339e8`:** 26 Aug post-by-post extract was started (task “AAA blog extract and remake gaps”) and interrupted by a host restart; transcript is not a complete cited extract. This file is live-verified.

## Method

- Main copy is taken from `#page` / `.body.entry-content` HTML blocks.
- Skipped: Squarespace nav, footer, share/like buttons, leftover embed errors, sidebar “Serving San Diego…” chrome.
- Sitewide disclaimer is quoted once below. The live footer writes “Carmel Ranch”; that is flagged and corrected here to Carmel Mountain Ranch (only in this disclaimer block).
- Lists (`<ol>` / `<ul>`) are kept. Typos in body copy are flagged, not silently rewritten.
- **Blog HTML source:** this-run live recurl of `/blog*` returned HTTP 429 after leftover + page fetches. Post and blog-index bodies are from same-day live curl HTML saved at 22:14–22:16 UTC (3:14–3:16 PM PT) on 2026-08-26 under `/tmp/austin-live/`. Those files contain full Squarespace markup (`entry-content`, published dates). A this-run recurl of the 2022-03-03 post also returned 429 (1470-byte error page).

## Dropped leftover URLs

(Confirmed against the on-disk include/drop list. Status checked live where noted.)


| URL | HTTP | Title | Why dropped |
|---|---|---|---|
| https://www.lawaustinandaustin.com/contact-1 | 200 | Contact Austin & Austin — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/home-1 | 200 | Home Austin & Austin — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/julia-austin-solaegui-esq-1 | 200 | Julia Austin Solaegui, Esq. — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/albert-john-austin-esq-1 | 200 | Albert John Austin, Esq. — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/estate-planning-1 | 200 | Estate Planning Austin & Austin — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/personal-injury-1 | 200 | Personal Injury Austin & Austin — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/corporate-business-law-1 | 200 | Corporate & Business Law Austin & Austin — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/criminal-law-1 | 200 | Criminal Law Austin & Austin — AUSTIN & AUSTIN | leftover -1 generation; criminal leftover / 404 current |
| https://www.lawaustinandaustin.com/criminal-law | 404 | AUSTIN & AUSTIN | criminal leftover / 404 current |
| https://www.lawaustinandaustin.com/blog/2015/7/8/1qcekjmdn0ugn5j979t87uswak6ehn | 200 | — AUSTIN & AUSTIN | empty embed |
| https://www.lawaustinandaustin.com/attorneys-1 | 200 | Albert John Austin, Esq. — AUSTIN & AUSTIN | leftover -1 generation |
| https://www.lawaustinandaustin.com/practice-areas-1 | 200 | Estate Planning Austin & Austin — AUSTIN & AUSTIN | leftover -1 generation |

- All `/blog/tag/*` tag index pages: dropped (Squarespace tag chrome, not unique practice copy).
- Footer leftover folder URLs `/attorneys-1` and `/practice-areas-1` are not in the INCLUDE list; treated as leftover chrome.

## Sitewide chrome (quoted once; skipped on individual pages)

**Footer addresses (live):**

275 E. Douglas Ave., Ste. 103, El Cajon, CA 92020

713 D Street, Ramona, CA 92065

(619) 588-2828

**Disclaimer — live wording:**

The information on this website is for general information purposes only and should not be taken as legal advice for any individual case or situation. The information on this website and receipt or viewing of this information is not intended to create, nor does it constitute an attorney-client relationship. We are licensed to practice law in the State of California serving San Diego County, East County San Diego, Imperial County, San Bernardino County, Los Angeles County and Orange County, and locally, the cities of San Diego, Chula Vista, Ramona, Julian, Alpine, Bonita, La Mesa, Lemon Grove, Santee, Lakeside, Vista, El Cajon, Poway, Carmel Ranch, and Rancho Bernardo.

**Disclaimer — as we already use (Carmel Ranch → Carmel Mountain Ranch):**

The information on this website is for general information purposes only and should not be taken as legal advice for any individual case or situation. The information on this website and receipt or viewing of this information is not intended to create, nor does it constitute an attorney-client relationship. We are licensed to practice law in the State of California serving San Diego County, East County San Diego, Imperial County, San Bernardino County, Los Angeles County and Orange County, and locally, the cities of San Diego, Chula Vista, Ramona, Julian, Alpine, Bonita, La Mesa, Lemon Grove, Santee, Lakeside, Vista, El Cajon, Poway, Carmel Mountain Ranch, and Rancho Bernardo.

**Flag:** live footer writes “Carmel Ranch”.

**Blog sidebar chrome (skipped on posts):** “Serving San Diego County for Over Thirty Years” plus the home-page dedication paragraph.

No public email, contact form, office hours, or CalBar numbers appear in the live page bodies fetched for this extract.

## Pages

### AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/
- **HTTP:** 200 this run
- **Title:** AUSTIN & AUSTIN
- **H1:** Serving San Diego County For Over 30 Years
- **Note:** Live homepage (site root). Not on the INCLUDE path list; included as current published home.

**Body (verbatim):**

Serving San Diego County For Over 30 Years

Established in 1983, the law firm of Austin & Austin, Attorneys at Law has been helping people with their legal problems for over thirty years. We are dedicated to solving our clients' legal problems and protecting their rights. At Austin & Austin, Attorneys at Law we provide legal advice, legal services, and litigation to ensure that our clients have been properly represented in all State and Federal Courts of California. To discuss how we can help solve your legal problems call us at (619) 588-2828.

Practice Areas

- Estate Planning: Wills, Trusts, Power of Attorney, Advance Health Care Directives
- Probate, Trust Administration, Accounting
- Personal Injury: Accidents, Insurance, Wrongful Death Claims
- Corporate & Business Law: Formation, Contracts, Litigation, Dissolution

Offices

We serve clients from all over California. Our offices are in San Diego with two convenient locations in El Cajon and Ramona. If needed, we will travel to meet you.

---

### Estate Planning Austin & Austin — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/estate-planning
- **HTTP:** 200 this run
- **Title:** Estate Planning Austin & Austin — AUSTIN & AUSTIN
- **H1:** ESTATE PLANNING • WILLS • TRUSTS • DURABLE POWER OF ATTORNEY FOR FINANCES • ADVANCE HEALTH CARE DIRECTIVES

**Body (verbatim):**

ESTATE PLANNING • WILLS • TRUSTS • DURABLE POWER OF ATTORNEY FOR FINANCES • ADVANCE HEALTH CARE DIRECTIVES

The law firm of Austin & Austin has been helping people with their legal problems for over 30 years. We are experienced in estate planning, trusts, wills and probate. We draft and review immediately effective and springing Durable Powers of Attorney for finances and for health care, as well as Advance Medical Directives.  We draft and review wills, trusts for individuals and married couples, special needs trusts, charitable gift trusts, and educational trusts.  Austin & Austin is experienced in trust administrations, asset transfers, distribution of assets, accountings, as well as litigation and court proceedings involving wills, trusts and probate.  We have lectured in estate planning to church groups and schools.

WILLS

A will is an expression of your intent, which informs your heirs and the court how you wish your estate (property) distributed.  A will is generally filed with the court after your death.  A will identifies your spouse and children.  A will can include a guardian for your minor children.  We are experienced in drafting wills to fit our clients’ needs.

TRUSTS (Also known as LIVING TRUSTS)

A trust avoids probate when the trustor transfers his/her property to the trust.  A revocable trust avoids the publicity and cost of probate and will keep your distributions private.

WHO ARE THE PARTIES TO THE TRUST?

1. The creator of the trust, often referred to as the trustor or settlor.
2. The manager of the trust, referred to as the trustee (you and your spouse).
3. The beneficiary of the trust. This is the person (or persons) for whom the trust is established, i.e. you (or you and your spouse) during your lifetime, then your children, grandchildren, other relatives, charities.

REVOCABLE OR IRREVOCABLE?

A trust may be either revocable or irrevocable.  Revocable means you can cancel or alter its terms.  Irrevocable means you cannot change it once it is created.

Trusts are commonly referred to as the: A-B Trust; Disclaimer Trust; Marital Deduction Trust; Grantor’s Trust; Marital & Residuary Trust; or Inter Vivos Trust.  We also draft Special Needs Trusts for children or adults with mental or physical disabilities.

Whatever your goals, we will draft the appropriate trust for you and your family.

WHAT IF I ALREADY HAVE A TRUST?

If you already have a trust, ask yourself several questions:

1. Does it need to be updated?
2. Have you funded your trust?
3. Have your circumstances changed?
4. Have the laws changed?
5. Do you still wish the same distribution and successor trustees?

DURABLE POWER OF ATTORNEY FOR FINANCES

The purpose of a Durable Power of Attorney for finances is to give full legal authority to your named agent (attorney-in-fact), to manage your assets (property) when you are unable to, or when you wish another to manage your financial affairs.  Should you become incapacitated, your attorney-in-fact will use this document to manage your financial affairs.

ADVANCE HEALTH CARE DIRECTIVE

(Also known as a “Power of Attorney for Health Care” or “Living Will”)

The purpose of an Advance Health Care Directive is to give full legal authority to another to manage your health care decisions when you are incapacitated and unable to speak for yourself.  Should you become incapacitated, your agent will use this document to manage your health care.  A nomination of conservatorship is included in our Advance Health Care Directive.  An Advance Health Care Directive also gives legal evidence to your family and physician of your decisions concerning life support.

We invite you to CALL OUR OFFICE AT 619-588-2828 to discuss your estate planning needs.

---

### Probate & Trust Administration — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/probate-trust-administration
- **HTTP:** 200 this run
- **Title:** Probate & Trust Administration — AUSTIN & AUSTIN
- **H1:** PROBATE • TRUST ADMINISTRATION

**Body (verbatim):**

PROBATE • TRUST ADMINISTRATION

PROBATE

Probate is a court proceeding in which the court oversees the transfer of your property (assets) to your heirs, after your death.  If you die with a will (“testate”), the court will make sure your intentions are carried out.  If you do not have a will (“intestate”), the California Probate Code determines how your assets will be distributed. Everyone should have either a will or trust. This allows for your intentions concerning the distribution of your assets to be known.  Our goal at Austin & Austin is to ensure a smooth and efficient transition through the court Probate process. We are well versed in all Probate Court procedures, the administration with and without a will, will contest, accounting, defending wills, representing Executors or Administrators and beneficiaries.

TRUST ADMINISTRATION UPON DEATH OF THE TRUSTOR(S)

In addition to drafting trusts, our office represents clients in the following areas: administration of their trust when the first spouse dies and when both spouses die, contested trust matters, litigation against and in defense of trustees, drafting accountings, challenging accountings, trust contest, distribution issues and conduct of the trustee. We are experienced in all forms of trust litigation and petitions concerning trust administrations.

We invite you to CALL OUR OFFICE AT 619-588-2828 to discuss your probate or trust administration.

---

### Personal Injury Austin & Austin — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/personal-injury
- **HTTP:** 200 this run
- **Title:** Personal Injury Austin & Austin — AUSTIN & AUSTIN
- **H1:** PERSONAL INJURY • INSURANCE COVERAGE • LIFE INSURANCE CLAIMS
- **Flag:** TYPO/WRAP as written: fee line breaks as 'For Personal Injury … Cases' with a large space

**Body (verbatim):**

PERSONAL INJURY • INSURANCE COVERAGE • LIFE INSURANCE CLAIMS

We handle automobile and motorcycle accidents, insurance claims, life insurance claims, coverage issues, wrongful death claims, and child injuries.

Whether it is negotiating with the insurance company or filing and taking your matter to trial, we are here to help.

After a traumatic event or accident, it is important that you speak with an attorney to protect your rights and seek just compensation for your loss, whether it is the loss of property, or physical injury to you or your family.

            *No Up-Front Fees For Personal Injury Cases*

            *Free Consultation For Personal Injury Cases*

            *No Charge Until We Win Your Case For Personal Injury                        Cases*

            *Home and Hospital Visits For Personal Injury Cases*

We answer all your questions and are with you every step of the way.

We invite you to CALL OUR OFFICE AT 619-588-2828 to discuss your case.

---

### Corporate & Business Law Austin & Austin — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/corporate-business-law
- **HTTP:** 200 this run
- **Title:** Corporate & Business Law Austin & Austin — AUSTIN & AUSTIN
- **H1:** CORPORATION • LIMITED LIABILITY COMPANIES • BUSINESS LAW

**Body (verbatim):**

CORPORATION • LIMITED LIABILITY COMPANIES • BUSINESS LAW

We form both “C” and Subchapter “S” corporations, prepare documents for the issuance of stock, annual meetings of shareholders and directors, draft shareholder agreements, buy-sell agreements, corporate minutes, and notices to the shareholders and the State of California from the beginning of the business and annually thereafter, and dissolution or wind-down of the corporation.

Our Services Include:

- Litigation Matters
- Business Contracts
- Employee Matters
- Share Transfers
- Corporate Formation
- Sale of Shareholder and Corporate Assets
- Corporate Dissolution
- Shareholder Meetings
- Shareholder Agreements
- Updating Corporate Books

We have years of experience preparing corporate documents and advising our clients concerning their business and corporate needs.

We invite you to CALL OUR OFFICE AT 619-588-2828 to discuss your business concerns.

---

### Albert John Austin, Esq. — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/albert-john-austin-esq
- **HTTP:** 200 this run
- **Title:** Albert John Austin, Esq. — AUSTIN & AUSTIN
- **H1:** Albert John Austin, Esq.

**Body (verbatim):**

Albert John Austin, Esq.

- California Western School of Law
- San Diego State University

Albert John Austin, Esq. is a founding member of Austin & Austin, Attorneys at Law. A graduate of San Diego State University and California Western School of Law, Mr. Austin has been practicing law for over 30 years. As a general practitioner he can help you with any legal issue that might arise. Over the years Mr. Austin has been a member of the San Diego Trial Lawyer Association, American Bar Association, Judge Pro Tempore in the El Cajon Municipal Court, San Diego County Bar Association, Foothill Bar Association, and holds the office of notary public.  Mr. Austin has appeared in both State and Federal Courts throughout California.

---

### Julia Austin Solaegui, Esq. — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/julia-austin-solaegui-esq
- **HTTP:** 200 this run
- **Title:** Julia Austin Solaegui, Esq. — AUSTIN & AUSTIN
- **H1:** Julia Austin Solaegui, Esq.

**Body (verbatim):**

Julia Austin Solaegui, Esq.

- California Western School of Law
- University of California, Santa Barbara

Julia Austin Solaegui, Esq. is a graduate of the University of California at Santa Barbara and California Western School of Law. Her practice focuses on estate planning. She is a notary public, member of the San Diego County Bar Association, American Bar Association, Trust & Estates Section of the California State Bar, Foothill Bar Association, and the Probate Attorneys of San Diego.

---

### Contact Austin & Austin — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/contact
- **HTTP:** 200 this run
- **Title:** Contact Austin & Austin — AUSTIN & AUSTIN
- **H1:** _(none; first heading is H2: El Cajon Office)_
- **Note:** No public email, contact form, or hours on this page.

**Body (verbatim):**

El Cajon Office

275 E. Douglas Ave., Ste. 103, El Cajon, CA 92020

Ramona Office

713 D Street, Ramona, CA 92065

Tele. (619) 588-2828

---

### Blog — AUSTIN & AUSTIN

- **URL:** https://www.lawaustinandaustin.com/blog
- **HTTP:** same-day earlier curl 200 (22:14 UTC / 3:14 PM PT); this-run recurl HTTP 429
- **Title:** Blog — AUSTIN & AUSTIN
- **H1:** _(none)_
- **Note:** Blog index listing. Full post bodies are in the Blog posts section.

**Body (verbatim):**

Index listings as published on `/blog` (10 posts; older pagination at `/blog?offset=1439569355473`):

Index HTML includes excerpt blocks for items 1–3, 5, and 10 only; items 4 and 6–9 are title/author/date on the index (full bodies are in the post section). Older page (`/blog?offset=1439569355473`) was HTTP 429 this run; the five older posts are extracted from their permalinks below.

1. **WHAT HAPPENS IF I PASS AWAY & MY CHILDREN ARE MINORS?**
   - URL: https://www.lawaustinandaustin.com/blog/2022/3/3/what-happens-if-i-pass-away-amp-my-children-are-minors
   - Julia Solaegui — March 3, 2022 (`2022-03-03`)
   > Your children will go to a guardian. A guardian is an adult who will take care of your children when they are minors, under the age of majority, when both their parents are deceased.  If you do not nominate a person, the Probate court will appoint someone to be the guardian of your children and their estate.  A nomination of a guardian can be named in your Last Will and Testament or in a separate document so the Probate court is aware of your choices.
   > 
   > There are two (2) types of guardians: guardian of the person and a guardian of the estate. They can be the same person or different people. You determine who will be in charge of your child and their estate. The Probate court will grant the guardianship according to your wishes or according to the laws of the state of California if your wishes are unknown.
   > 
   > Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

2. **DOES A TRUST AVOID PROBATE ON OUT-OF-STATE REALTY?**
   - URL: https://www.lawaustinandaustin.com/blog/2022/2/24/does-a-trust-avoid-probate-on-out-of-state-realty
   - Julia Solaegui — February 24, 2022 (`2022-02-24`)
   > Yes. You can avoid probate on out-of-state realty by transferring those properties into your California trust. For example, if you own land in Arizona and New York, you can avoid probate in both Arizona and New York by transferring these out-of-state assets into your California trust.
   > 
   > Each state has their own laws regarding transferring property into and out of trust. You may need to consult an attorney in the state where you own real property to determine the best course of action.
   > 
   > Please feel free to set up a conference with us to discuss your estate planning needs regarding your assets in and outside the state of California.
   > 
   > Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted or reviewed.

3. **WHAT IS GOING TO HAPPEN TO MY PETS WHEN I PASS AWAY?**
   - URL: https://www.lawaustinandaustin.com/blog/2022/2/17/what-is-going-to-happen-to-my-pets-when-i-pass-away
   - Julia Solaegui — February 17, 2022 (`2022-02-17`)
   > Pets are often considered family members and it is important to think about what happens when you are no longer able to care for them. In order to make sure that your pets are properly cared for, determine what you want for your pets and who will care for them. Talk to family members and friends to see if someone is willing to adopt your pets after your passing. You can also consider setting up a Pet Sub Trust for your animal. A Pet Sub Trust is a trust that is created upon your passing to provide funding for the care of your pet. For questions, additional information, or professional assistance please feel free to call us at (619) 588-2828.
   > 
   > Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

4. **I WANT TO CHANGE MY TRUST. CAN I DO THAT?**
   - URL: https://www.lawaustinandaustin.com/blog/2016/10/20/i-want-to-change-my-trust-can-i-do-that
   - Austin & Austin — February 10, 2022 (`2022-02-10`)

5. **WHAT HAPPENS TO MY PROPERTY IF I DIE WITHOUT A WILL OR A TRUST?**
   - URL: https://www.lawaustinandaustin.com/blog/2022/2/10/what-happens-to-my-property-if-i-die-without-a-will-or-a-trust
   - Austin & Austin — February 10, 2022 (`2022-02-10`)
   > If you die without a will and/or trust, a probate would need to be opened if your estate’s assets are over a certain dollar amount without a beneficiary named on those assets. Your estate’s assets include all of your personal and real property.
   > 
   > California law will determine where your estate assets will go upon your passing. It is best to create a will and/or trust to express your intentions for how you want your property to be distributed.
   > 
   > Our office can help you with a probate, trust administration, drafting a will and/or trust. Please feel free to call us at (619) 588-2828.
   > 
   > Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

6. **I HAVE HEARD OF THE TERMS SETTLOR, TRUSTEE, & BENEFICIARY. WHAT DO THEY MEAN?**
   - URL: https://www.lawaustinandaustin.com/blog/2016/10/20/i-have-heard-of-the-terms-settlor-trustee-beneficiary-what-do-they-mean
   - Austin & Austin — October 20, 2016 (`2016-10-20`)

7. **MY CHILDREN ARE YOUNG, I DON’T WANT THEM TO HAVE AN OUTRIGHT DISTRIBUTION OF MY TRUST ESTATE WHEN I PASS AWAY, WHAT CAN I DO?**
   - URL: https://www.lawaustinandaustin.com/blog/2016/2/3/my-children-are-young-i-dont-want-them-to-have-an-outright-distribution-of-my-trust-estate-when-i-pass-away-what-can-i-do
   - Austin & Austin — February 3, 2016 (`2016-02-03`)

8. **WHAT IS AN ADVANCE HEALTH CARE DIRECTIVE? DO I NEED ONE?**
   - URL: https://www.lawaustinandaustin.com/blog/2015/10/22/what-is-an-advance-health-care-directive-do-i-need-one
   - Austin & Austin — November 4, 2015 (`2015-11-04`)

9. **WHAT IS A UNIFORM STATUTORY FORM POWER OF ATTORNEY?**
   - URL: https://www.lawaustinandaustin.com/blog/2015/10/22/what-is-a-uniform-statutory-form-power-of-attorney
   - Austin & Austin — November 2, 2015 (`2015-11-02`)

10. **I AM MOVING OUT-OF-STATE. DOES MY ESTATE PLAN WORK IN MY NEW HOME STATE?**
   - URL: https://www.lawaustinandaustin.com/blog/2015/8/12/i-am-moving-out-of-state-does-my-estate-plan-work-in-my-new-home-state
   - Austin & Austin — August 14, 2015 (`2015-08-14`)


---

## Blog posts

### WHAT HAPPENS IF I PASS AWAY & MY CHILDREN ARE MINORS?

- **URL:** https://www.lawaustinandaustin.com/blog/2022/3/3/what-happens-if-i-pass-away-amp-my-children-are-minors
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHAT HAPPENS IF I PASS AWAY & MY CHILDREN ARE MINORS? — AUSTIN & AUSTIN
- **H1:** WHAT HAPPENS IF I PASS AWAY & MY CHILDREN ARE MINORS?
- **Author:** Julia Solaegui
- **Date:** March 3, 2022 (`2022-03-03`)
- **Tags:** Probate, Guardianship, Last Will and Testament

**Body (verbatim):**

Your children will go to a guardian. A guardian is an adult who will take care of your children when they are minors, under the age of majority, when both their parents are deceased.  If you do not nominate a person, the Probate court will appoint someone to be the guardian of your children and their estate.  A nomination of a guardian can be named in your Last Will and Testament or in a separate document so the Probate court is aware of your choices.

There are two (2) types of guardians: guardian of the person and a guardian of the estate. They can be the same person or different people. You determine who will be in charge of your child and their estate. The Probate court will grant the guardianship according to your wishes or according to the laws of the state of California if your wishes are unknown.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

---

### DOES A TRUST AVOID PROBATE ON OUT-OF-STATE REALTY?

- **URL:** https://www.lawaustinandaustin.com/blog/2022/2/24/does-a-trust-avoid-probate-on-out-of-state-realty
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** DOES A TRUST AVOID PROBATE ON OUT-OF-STATE REALTY? — AUSTIN & AUSTIN
- **H1:** DOES A TRUST AVOID PROBATE ON OUT-OF-STATE REALTY?
- **Author:** Julia Solaegui
- **Date:** February 24, 2022 (`2022-02-24`)
- **Tags:** Probate, Real Property, Estate Plan, Trust

**Body (verbatim):**

Yes. You can avoid probate on out-of-state realty by transferring those properties into your California trust. For example, if you own land in Arizona and New York, you can avoid probate in both Arizona and New York by transferring these out-of-state assets into your California trust.

Each state has their own laws regarding transferring property into and out of trust. You may need to consult an attorney in the state where you own real property to determine the best course of action.

Please feel free to set up a conference with us to discuss your estate planning needs regarding your assets in and outside the state of California.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted or reviewed.

---

### WHAT IS GOING TO HAPPEN TO MY PETS WHEN I PASS AWAY?

- **URL:** https://www.lawaustinandaustin.com/blog/2022/2/17/what-is-going-to-happen-to-my-pets-when-i-pass-away
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHAT IS GOING TO HAPPEN TO MY PETS WHEN I PASS AWAY? — AUSTIN & AUSTIN
- **H1:** WHAT IS GOING TO HAPPEN TO MY PETS WHEN I PASS AWAY?
- **Author:** Julia Solaegui
- **Date:** February 17, 2022 (`2022-02-17`)
- **Tags:** Pets, Trust, Will, Animal

**Body (verbatim):**

Pets are often considered family members and it is important to think about what happens when you are no longer able to care for them. In order to make sure that your pets are properly cared for, determine what you want for your pets and who will care for them. Talk to family members and friends to see if someone is willing to adopt your pets after your passing. You can also consider setting up a Pet Sub Trust for your animal. A Pet Sub Trust is a trust that is created upon your passing to provide funding for the care of your pet. For questions, additional information, or professional assistance please feel free to call us at (619) 588-2828.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

---

### I WANT TO CHANGE MY TRUST. CAN I DO THAT?

- **URL:** https://www.lawaustinandaustin.com/blog/2016/10/20/i-want-to-change-my-trust-can-i-do-that
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** I WANT TO CHANGE MY TRUST. CAN I DO THAT? — AUSTIN & AUSTIN
- **H1:** I WANT TO CHANGE MY TRUST. CAN I DO THAT?
- **Author:** Austin & Austin
- **Date:** February 10, 2022 (`2022-02-10`)
- **Tags:** Estate Plan, Trust
- **Flag:** URL slug is 2016/10/20; on-page published date is February 10, 2022
- **Flag:** TYPO as written: "Irrevocable trust generally cannot" (singular "trust")

**Body (verbatim):**

It depends on your trust. Revocable living trusts can be changed, modified, or amended at any time during the Settlor’s lifetime subject to the terms of the trust. Irrevocable trust generally cannot be modified or changed, but there are some exceptions. To determine if you can change your trust and what type of trust you have please call us at (619) 588-2828.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

---

### WHAT HAPPENS TO MY PROPERTY IF I DIE WITHOUT A WILL OR A TRUST?

- **URL:** https://www.lawaustinandaustin.com/blog/2022/2/10/what-happens-to-my-property-if-i-die-without-a-will-or-a-trust
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHAT HAPPENS TO MY PROPERTY IF I DIE WITHOUT A WILL OR A TRUST? — AUSTIN & AUSTIN
- **H1:** WHAT HAPPENS TO MY PROPERTY IF I DIE WITHOUT A WILL OR A TRUST?
- **Author:** Austin & Austin
- **Date:** February 10, 2022 (`2022-02-10`)
- **Tags:** Probate, Will, Trust, Trust Administration

**Body (verbatim):**

If you die without a will and/or trust, a probate would need to be opened if your estate’s assets are over a certain dollar amount without a beneficiary named on those assets. Your estate’s assets include all of your personal and real property.

California law will determine where your estate assets will go upon your passing. It is best to create a will and/or trust to express your intentions for how you want your property to be distributed.

Our office can help you with a probate, trust administration, drafting a will and/or trust. Please feel free to call us at (619) 588-2828.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

---

### I HAVE HEARD OF THE TERMS SETTLOR, TRUSTEE, & BENEFICIARY. WHAT DO THEY MEAN?

- **URL:** https://www.lawaustinandaustin.com/blog/2016/10/20/i-have-heard-of-the-terms-settlor-trustee-beneficiary-what-do-they-mean
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** I HAVE HEARD OF THE TERMS SETTLOR, TRUSTEE, & BENEFICIARY. WHAT DO THEY MEAN? — AUSTIN & AUSTIN
- **H1:** I HAVE HEARD OF THE TERMS SETTLOR, TRUSTEE, & BENEFICIARY. WHAT DO THEY MEAN?
- **Author:** Austin & Austin
- **Date:** October 20, 2016 (`2016-10-20`)
- **Tags:** Estate Plan, Trust, Trust Administration, Trust Litigation
- **Flag:** TYPO as written: "the person for whom the trust is established for" (extra "for")

**Body (verbatim):**

A Settlor, Trustor, or Grantor all mean the person who creates the trust.

A Trustee is the person who manages the trust.

A Beneficiary is the person who receives the benefit of the trust, this is the person for whom the trust is established for.

You or you and your spouse can be all three: Settlor, Trustee, and Beneficiary of the trust. You and your spouse can be both the Settlors, Trustees (managers), and Beneficiaries of your trust. If you are single, you alone could be the Settlor, Trustee (manager), and beneficiary of your trust.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

---

### MY CHILDREN ARE YOUNG, I DON’T WANT THEM TO HAVE AN OUTRIGHT DISTRIBUTION OF MY TRUST ESTATE WHEN I PASS AWAY, WHAT CAN I DO?

- **URL:** https://www.lawaustinandaustin.com/blog/2016/2/3/my-children-are-young-i-dont-want-them-to-have-an-outright-distribution-of-my-trust-estate-when-i-pass-away-what-can-i-do
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** MY CHILDREN ARE YOUNG, I DON’T WANT THEM TO HAVE AN OUTRIGHT DISTRIBUTION OF MY TRUST ESTATE WHEN I PASS AWAY, WHAT CAN I DO? — AUSTIN & AUSTIN
- **H1:** MY CHILDREN ARE YOUNG, I DON’T WANT THEM TO HAVE AN OUTRIGHT DISTRIBUTION OF MY TRUST ESTATE WHEN I PASS AWAY, WHAT CAN I DO?
- **Author:** Austin & Austin
- **Date:** February 3, 2016 (`2016-02-03`)
- **Tags:** Estate Plan, Trust, Trust Administration
- **Flag:** TYPO as written: "what expenses you wish to paid for" (missing "be")
- **Flag:** TYPO as written: "Please give us a call us at"

**Body (verbatim):**

Periodic Distribution

You can delay distribution until your children reach a certain age. You can have periodic distributions during your children’s lives at specific ages or one payment to your children when they reach a certain age.

Educational Trust

Many parents create an educational trust on their passing. An educational trust will place your children’s share of your estate into a trust to be used for their education. Your children’s educational expenses could be paid for from this trust. Education expenses can include: books, fees, transportation costs, tuition, and living expenses. You can determine what expenses you wish to paid for regarding your children. When your children turn a certain age, they would receive any remaining balance from their share of the educational trust, as you decide.

If you delay distribution to your beneficiaries, there will be administration expenses for the length of time the trust is open.

If you have questions regarding what is best for you or for your family we would be happy to help you. Please give us a call us at (619) 588-2828.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

---

### WHAT IS AN ADVANCE HEALTH CARE DIRECTIVE? DO I NEED ONE?

- **URL:** https://www.lawaustinandaustin.com/blog/2015/10/22/what-is-an-advance-health-care-directive-do-i-need-one
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHAT IS AN ADVANCE HEALTH CARE DIRECTIVE? DO I NEED ONE? — AUSTIN & AUSTIN
- **H1:** WHAT IS AN ADVANCE HEALTH CARE DIRECTIVE? DO I NEED ONE?
- **Author:** Austin & Austin
- **Date:** November 4, 2015 (`2015-11-04`)
- **Tags:** Advance Health Care Directive
- **Flag:** URL slug is 2015/10/22; on-page published date is November 4, 2015

**Body (verbatim):**

An Advance Health Care Directive, sometimes called a Living Will, allows your Agent to make health care decisions for you if you cannot make those decisions yourself. Your Agent is the person you nominate to make health care related decisions for you. This document gives legal notice of your decisions regarding health care to your health care providers. Your Agent will be able to accept or refuse medical treatment, have access to your medical records, make decisions about donating your organs, authorizing an autopsy, and funeral arrangements, if any, as you direct.

For more information about Advance Health Care Directives call us at (619) 588-2828.

Note: The above is general information and you should consult with an attorney to answer your personal questions.

---

### WHAT IS A UNIFORM STATUTORY FORM POWER OF ATTORNEY?

- **URL:** https://www.lawaustinandaustin.com/blog/2015/10/22/what-is-a-uniform-statutory-form-power-of-attorney
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHAT IS A UNIFORM STATUTORY FORM POWER OF ATTORNEY? — AUSTIN & AUSTIN
- **H1:** WHAT IS A UNIFORM STATUTORY FORM POWER OF ATTORNEY?
- **Author:** Austin & Austin
- **Date:** November 2, 2015 (`2015-11-02`)
- **Tags:** Power of Attorney
- **Flag:** URL slug is 2015/10/22; on-page published date is November 2, 2015

**Body (verbatim):**

This is a Power of Attorney set out in California law that allows your Agent to make financial decisions on your behalf. Your Agent is the person you nominate to make financial decisions for you. The purpose of the Power of Attorney is to give full legal authority to your named Agent to manage your property when you are unable to or when you wish another to manage your financial affairs.  Should you become incapacitated, your Agent will use this document to manage your financial affairs.

Note: The above is general information and you should consult with an attorney to answer your personal questions.

---

### I AM MOVING OUT-OF-STATE. DOES MY ESTATE PLAN WORK IN MY NEW HOME STATE?

- **URL:** https://www.lawaustinandaustin.com/blog/2015/8/12/i-am-moving-out-of-state-does-my-estate-plan-work-in-my-new-home-state
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** I AM MOVING OUT-OF-STATE. DOES MY ESTATE PLAN WORK IN MY NEW HOME STATE? — AUSTIN & AUSTIN
- **H1:** I AM MOVING OUT-OF-STATE. DOES MY ESTATE PLAN WORK IN MY NEW HOME STATE?
- **Author:** Austin & Austin
- **Date:** August 14, 2015 (`2015-08-14`)
- **Tags:** Estate Plan
- **Flag:** URL slug is 2015/8/12; on-page published date is August 14, 2015

**Body (verbatim):**

Every state has their own laws. It is best to have an Attorney in your new home state look at your estate plan to make sure it complies with the laws of that state. That being said, your estate plan should have no problems being accepted to express your intentions and letting your wishes be known in whatever state you are in.

Note: The above is general information and you should consult with an attorney to answer your personal questions.

---

### IF I SET UP A TRUST, IS A WILL ALSO REQUIRED?

- **URL:** https://www.lawaustinandaustin.com/blog/2015/8/12/if-i-set-up-a-trust-is-a-will-also-required
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** IF I SET UP A TRUST, IS A WILL ALSO REQUIRED? — AUSTIN & AUSTIN
- **H1:** IF I SET UP A TRUST, IS A WILL ALSO REQUIRED?
- **Author:** Austin & Austin
- **Date:** August 12, 2015 (`2015-08-12`)
- **Tags:** Trust, Will

**Body (verbatim):**

Yes.  A will should be drafted in conjunction with your trust.  The will acts as a safety net.  If you forget to transfer your assets into your trust, then your will picks up those assets at the time of your death and transfers them into your trust allowing those assets to be distributed pursuant to the terms of your trust. A will drafted with a trust is called a pour-over-will. Assets you forget to place in your trust can pour from your will into your trust. Sometimes assets not transferred into your trust may require a Probate to be transferred into your trust, depending on their value.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.

---

### WHY IS IT IMPORTANT TO TRANSFER ASSETS INTO A TRUST?

- **URL:** https://www.lawaustinandaustin.com/blog/2015/7/21/why-is-it-important-to-transfer-assets-into-a-trust
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHY IS IT IMPORTANT TO TRANSFER ASSETS INTO A TRUST? — AUSTIN & AUSTIN
- **H1:** WHY IS IT IMPORTANT TO TRANSFER ASSETS INTO A TRUST?
- **Author:** Austin & Austin
- **Date:** July 21, 2015 (`2015-07-21`)
- **Tags:** Trust, Trust Assets, Avoid Probate

**Body (verbatim):**

The assets you transfer to the trust will avoid probate. This saves time, money, and achieves privacy for your estate.  Assets are transferred into the trust by changing title from you individually to you as trustee of your trust.  It is not sufficient to just list assets on the schedule or exhibit attached to the trust.  You need to change title to your assets from you individually to you as trustee of your trust.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted.  Please feel free to give us a call at (619) 588-2828.

---

### WHAT IS TRUST ADMINISTRATION?

- **URL:** https://www.lawaustinandaustin.com/blog/2015/7/8/what-is-trust-administration
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHAT IS TRUST ADMINISTRATION? — AUSTIN & AUSTIN
- **H1:** WHAT IS TRUST ADMINISTRATION?
- **Author:** Austin & Austin
- **Date:** July 8, 2015 (`2015-07-08`)
- **Tags:** Trust Administration, Trust Litigation, Trust

**Body (verbatim):**

Trust administration is when the terms of the trust are carried out after the death of the trustor(s) by the successor trustee named in the trust. Trust administration, generally, takes place outside of the California court system.  There are notices the successor trustee is required to give to the beneficiaries, heirs, creditors, interested parties, and appropriate government agencies.  Generally the successor trustee collects trust assets,  pays debts, appraises trust assets, provides an accounting, files the necessary tax filing for the trustor(s) and trust, pays administrative costs (trustee and attorney fees), and distributes the remaining trust assets to the beneficiaries.

Along the way unexpected issues can arise in trust administration which require court involvement.  These issues often concern trust property, trustee(s), creditors, beneficiaries, distribution, and accounting.  If litigation or court proceedings are required, we can represent you in court.  We are here to help.  We have helped our clients with trust administration and litigation for many years.

Please feel free to give us a call at (619) 588-2828 if you need a trust administration, you are a trustee or beneficiary of a trust, or you have questions about a trust administration.

Note: The above is general information and you should consult with our office to answer your questions concerning a particular trust, the administration of a trust, to create a trust or review your estate plan.

---

### WHAT HAPPENS TO MY PROPERTY IF I DIE WITHOUT A WILL OR A TRUST?

- **URL:** https://www.lawaustinandaustin.com/blog/2015/7/7/what-happens-to-my-property-if-i-die-without-a-will-or-a-trust-2
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** WHAT HAPPENS TO MY PROPERTY IF I DIE WITHOUT A WILL OR A TRUST? — AUSTIN & AUSTIN
- **H1:** WHAT HAPPENS TO MY PROPERTY IF I DIE WITHOUT A WILL OR A TRUST?
- **Author:** Austin & Austin
- **Date:** June 16, 2015 (`2015-06-16`)
- **Tags:** Intestate, Will, Trust
- **Flag:** URL slug is 2015/7/7; on-page published date is June 16, 2015
- **Note:** 2015 intestacy URL. Included only if body is real and distinct from 2022/2/10 — see comparison below.

**Body (verbatim):**

The court determines where your property goes as set out in California law. If you want your estate to go to a certain person(s), it is best to create a will and/or trust. Wills and trusts express your intentions for how you want your property to be distributed. We would be happy to speak to you about a will or trust to make sure that your intentions concerning your property are carried out.

Note: The above is general information and you should consult with an attorney to answer your personal questions and to have your estate plan drafted. Please feel free to give us a call at (619) 588-2828.

---

### A BRIEF CHECKLIST FOR SURVIVORS WHEN DEATH OCCURS

- **URL:** https://www.lawaustinandaustin.com/blog/2015/5/15/a-brief-checklist-for-survivors-when-death-occurs
- **HTTP:** same-day earlier curl 200 (22:14–22:16 UTC / 3:14–3:16 PM PT); this-run recurl HTTP 429
- **Title:** A BRIEF CHECKLIST FOR SURVIVORS WHEN DEATH OCCURS — AUSTIN & AUSTIN
- **H1:** A BRIEF CHECKLIST FOR SURVIVORS WHEN DEATH OCCURS
- **Author:** Austin & Austin
- **Date:** May 15, 2015 (`2015-05-15`)
- **Tags:** Papers to Collect, Checklist for Survivors

**Body (verbatim):**

The death of a spouse, parent, or loved one is a very difficult time.  Important financial decisions must be made during this period of grief and emotional readjustments. This brief checklist was developed to give you an overview of many details which must be attended to, whether or not any prior arrangements were made. For questions, additional information, or professional assistance please feel free to call us at (619) 588-2828.

COLLECT ALL THE PAPERS

Locate the will and/or trust.

Order copies of the death certificate.

Locate all insurance policies and annuities.

Locate all certificates, titles, deeds, monthly financial statements, and papers to decedent’s property.

Create a complete list of real estate and personal property of the deceased.

Locate the last two years income tax returns.

Check safe deposit boxes.*

Request Military Service Record, DD Form 214.

GENERAL FINANCES

Locate and create an accurate record of bills, expenses, and debts that need to be paid.

Keep an accurate record of all payments made on behalf of the deceased.

Make sure insurance policies are kept up to date.

REVIEW THE WILL AND/OR TRUST

Carefully read the will and/or trust. Arrange for an appointment with an attorney to review the will and/or trust to determine if a probate or trust administration is needed.

Determine if all assets are in the trust.

Retain or meet with an attorney regarding estate matters.

NOTIFY

Notify Social Security, Medi-Cal, Medicare, Insurance Agencies, Veteran’s Administration, and other agencies as appropriate.

ASSETS

Determine value of each asset on the date of death.

Get written evaluations of real property.

Review the ownership of all financial accounts.

TAXES

Arrange for final income tax returns. Determine if federal estate taxes and state estate taxes will need to be filed.

Retain or meet with your accountant or CPA regarding taxes and accounting matters.

GENERAL

Arrange for care of dependents or pets.

Have the Post Office hold mail.

Cancel or rearrange home deliveries.

Prepare and arrange obituary.

Find perishable property (food, plants, etc.), arrange for care or disposal.

IMPORTANT ADDITIONAL PAPERWORK

Certain agencies may ask you for additional paperwork to prove relations or to verify information. It is beneficial to collect the following:

Social Security numbers of the deceased, spouse, and dependent children.

Copies of marriage certificates and prenuptial agreements.

Copies of birth certificates for dependent children.

* A Safe Deposit Box can only be accessed by someone other than the deceased under guidelines set out in the Probate Code. Surviving co-owners access the box with caution. DO NOT open the safe deposit box if the will or trust might be challenged. Consult an attorney for more details.

Note: The above is general information and you should consult with an attorney to answer your personal questions. Please feel free to call us to set up an appointment (619) 588-2828.

---

## 2015/7/7 intestacy vs 2022/2/10

- Bodies are **distinct**.
- **Decision:** INCLUDE the 2015/7/7 URL. It is a real earlier post (on-page date June 16, 2015; URL slug 2015/7/7) with different wording from the 2022/2/10 rewrite.
- 2015 version tells the reader the court follows California law and invites a will/trust consult.
- 2022 version adds the probate-threshold / beneficiary-designation point and offers probate + trust administration + drafting.

## Counts

- **Pages extracted:** 9 (8 INCLUDE pages including `/blog`, plus live homepage)
- **Blog posts extracted:** 15
- **This-run live fetch failures:** `/blog` and all 15 post URLs HTTP 429 after leftover/page fetches. Bodies recovered from same-day live HTML (22:14–22:16 UTC / 3:14–3:16 PM PT). A later recurl of the 2022-03-03 post was still 429.
- **Dropped leftovers:** see table above. Empty embed `/blog/2015/7/8/1qcekjmdn0ugn5j979t87uswak6ehn` confirmed (title “— AUSTIN & AUSTIN”, no post body). `/criminal-law` 404. All `-1` leftovers HTTP 200.

## Typo inventory (as written; not rewritten)

- Sitewide footer: “Carmel Ranch” (Carmel Mountain Ranch). Disclaimer block above uses the corrected form only there.
- Personal Injury fee line: large space before the wrapped word “Cases”.
- Blog 2016/2/3: “what expenses you wish to paid for”; “Please give us a call us at”.
- Blog 2016/10/20 settlor: “the person for whom the trust is established for”.
- Blog 2016/10/20 change-trust: “Irrevocable trust generally cannot”.
- Several posts: URL date slug does not match the on-page `<time class="published">` (flagged on those posts).
