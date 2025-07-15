"use client";

import { motion } from "framer-motion";
import { Image } from "rsuite";

export default function EemaAwardsProcess({ setActiveSection }) {
  return (
    <motion.section
      id="award-process"
      className=" "
      onViewportEnter={() => setActiveSection("award-process")}
    >
      <Image
        src="https://www.eemaindia.com/eemaxglobal/images/award-process-guidelines.jpg"
        alt="award-process-entry-fees"
      />

      <div className=" py-11  px-7 md:px-12 leading-relaxed text-black ">
        <h2 className=" text-2xl md:text-4xl font-bold w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
          EEMAX GLOBAL Awards evaluation process
        </h2>

        <div className=" space-y-2 mt-16 ">
          <h4 className=" font-semibold text-xl uppercase ">Who can apply?</h4>
          <p className=" text-gray-600 ">
            EEMAX Global Awards 2025 are open for all experiential projects and
            stakeholders in the event and entertainment management industry.
          </p>
          <p className=" text-gray-600 ">
            <strong>Note:</strong> All EEMA members must have cleared their dues
            till March 31, 2026 to be eligible for EEMA member rates. In case
            the dues are not cleared till March 31, 2026, they will not be
            eligible for EEMA member rates and shall pay non-EEMA member rates.
          </p>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            How to register?
          </h4>

          <ul className=" list-decimal pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              The participants can register themselves by clicking on ‘Apply
              now’ on Link to be updated website or visit{" "}
              <a
                href="https://eemax.eemaindia.com/register"
                className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
              >
                EEMAX Global 2025
              </a>
            </li>
            <li>
              After clicking on Apply now, the participants will be redirected
              to the registration page
            </li>
            <li>
              The participant needs to select if they are an EEMA member or a
              non-EEMA member
            </li>
            <li>
              In case the participant selects ‘<strong>EEMA Member</strong>’,
              then the participant must select the name of the company from the
              drop down and provide details such as name, email ID, phone number
            </li>
            <li>
              In case the participant selects ‘<strong>Non Member</strong>’ then
              the participant will be required to fill the details to proceed
              further
            </li>
            <li>
              The participant must set a password during the registration
              process
            </li>
            <li>
              The participants must acknowledge the{" "}
              <a
                href="/eemaxglobal/terms-and-conditions"
                className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
              >
                T&Cs
              </a>
            </li>
          </ul>
        </div>

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            How to submit the nomination?
          </h4>

          <p className=" text-gray-600 font-medium ">
            After successfully completing the registration process, the
            participant can login in using the registered email ID and password
            to commence the nomination process. After login, the participant
            will have an option to select the segment(s) and category(s) of
            their choice (option to choose multiple categories is available)
          </p>
          <p className=" text-gray-600 font-medium ">
            After selecting the segment(s) and the category(s) of their choice,
            the participant will have to fill the application form.
          </p>
          <p className=" text-gray-600 font-medium ">
            There are 4 sections to complete the application form:
          </p>

          <ol className=" list-decimal pl-9 space-y-6 mt-4 [&_li]:pl-2 ">
            <li>
              <p className=" font-medium ">
                Participant Details: In this section, the participant needs to
                fill the following details:
              </p>
              <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
                <li>Mobile Number</li>
                <li>Email Id</li>
                <li>Incorporation Date of the Agency</li>
                <li>Name of Agency / Organization</li>
                <li>Name of Agency / Organization (Secondary Agency)</li>
                <li>Contact Person Name</li>
                <li>
                  If the participant is an EEMA member, then they must confirm
                  if their dues have been cleared.
                </li>
                <li>Designation</li>
              </ul>
            </li>

            <li>
              <p className=" font-medium ">
                Case study: This section consists of the following questions:
              </p>
              <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
                <li>
                  <strong>Name of the event/ campaign</strong>
                </li>
                <li>
                  <strong>Date:</strong> Start date and end date of the event
                </li>
                <li>
                  <strong>Event Location:</strong> Country & City(s) held in
                </li>
                <li>
                  <strong>Brief:</strong> Explain the brief / objective of the
                  event, mention the target audience and the ask from the client
                </li>
                <li>
                  <strong>Concept:</strong> Strategy / USP / Solution to the
                  client ask
                </li>
                <li>
                  <strong>Execution:</strong> Detailed Execution of the concept
                  / strategy and on ground implementation of the event /
                  activation
                </li>
                <li>
                  <strong>Results:</strong> What was the impact of the event and
                  provide quantifiable results achieved
                </li>
              </ul>
              <p className=" mt-4 ">
                A crisp and to-the-point write-up is required for evaluation. It
                is mandatory to answer all the questions in this section, and
                the answers must be in English.
              </p>
            </li>

            <li>
              <p className=" font-medium ">
                Supportings: In this section, the participant must upload the
                below files to support their nomination.
              </p>
              <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
                <li>
                  <strong>Story Board:</strong> it is mandatory to attach a
                  story board which consists of pictures and details capturing
                  the key highlights of the nominated event/campaign. The format
                  of story board must be JPEG / PDF (A3 Size soft copy), and the
                  size of the file must be less than 15 MB
                </li>
                <li>
                  Audio Video file (AV): the AV must highlight key aspects of
                  the event/campaign. The length of the AV must be less than 3
                  minutes, and size must be 300 MB.
                </li>
              </ul>

              <p className=" mt-7 ">Note:</p>
              <ul
                className=" pl-9 space-y-2 mt-2 [&_li]:pl-2 "
                style={{ listStyleType: "lower-roman" }}
              >
                <li>
                  For categories in which the submission of AV is optional, we
                  would encourage the participant to submit an AV for the jury
                  to understand the entry better
                </li>
                <li>
                  AV must reflect and support the details provided in the
                  nomination form and storyboard
                </li>
                <li>
                  Agency branding should NOT be present in the case study, story
                  board or in the AV
                </li>
                <li>
                  Any mention or indication of agency branding, or
                  identification could lead to disqualification of the entry
                </li>
              </ul>
            </li>

            <li>
              <p className=" font-medium ">
                Client Details: In this section, the participants are required
                to submit the following details of their client:
              </p>
              <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
                <li>Client Organization name</li>
                <li>Name of the client (person)</li>
                <li>Client parent company name (if applicable)</li>
                <li>Designation</li>
                <li>Official Email ID</li>
                <li>Mobile number</li>
              </ul>
            </li>

            <p className=" font-medium ">
              <strong>Declaration:</strong> Participants should accept the
              declaration stating that the information provided in the
              application form is correct, accurate, and pertains to their
              business.
            </p>
          </ol>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">Payment</h4>

          <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              After completing the form, participants must proceed with payment
              to finalize submission. Submission will not be possible until
              payment is made
            </li>
            <li>
              To make the payment, participants need to click on the &quot;Go to
              Cart&quot; option. In the cart, they can review their nominations
              submitted by segment and category, along with the corresponding
              fees
            </li>
            <li>
              Participants can choose to make individual payment for each entry
              or bundle them together for multiple entries. They also have the
              option to save entries for later and come back to make the payment
              or submit all entries in the cart and make the payment together.
            </li>
            <li>
              Next, they should click on &quot;Payment&quot; and choose their
              preferred mode of payment to complete the transaction.
            </li>
            <li>
              Once payment details are submitted and the payment is successfully
              received, the payment gateway status will change from
              &quot;Awaiting Confirmation&quot; to &quot;Payment
              Successful.&quot; Additionally, participants will receive a
              confirmation email to their registered email address.
            </li>
            <li>
              If participants have any queries regarding the payment details,
              they can contact us at{" "}
              <a
                href="mailto:eemax@eemaindia.com"
                className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
              >
                eemax@eemaindia.com
              </a>
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">Please note:</h4>

          <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              Please ensure you complete all details in the form and proceed
              with payment at your earliest convenience to prevent any possible
              complications
            </li>
            <li>
              Failure to submit the entry fee before the specified deadline will
              result in automatic disqualification.
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            What is the client approval process?
          </h4>

          <ul className=" list-decimal pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              An approval from the client is required to confirm that the
              participant was associated with the nominated event/ campaign.
            </li>
            <li>
              Once the participant submits the application form consisting of
              the above 4 sections, an automated mail will be sent to the
              client’s official email ID for confirmation
            </li>
            <li>
              A copy of the client approval mail will be sent on the registered
              email ID of the participant for reference
            </li>
            <li>
              The mail will consist of the case study section along with the
              supportings submitted by the participant
            </li>
            <li>
              At the bottom of the mail, the client will have an option to
              approve/ reject the nominated event/ campaign
            </li>
            <li>
              The client has the authority to click on approve and provide their
              confirmation for the nominated event/ campaign
            </li>
            <li>
              However, if the client rejects the nominated event/ campaign then
              that nomination will be disqualified
            </li>
            <li>
              A mail will be sent to the participant once the client approves/
              rejects their nomination
            </li>
            <li>
              Participants are advised to inform their clients beforehand about
              the receipt of this mail so that they reply at the earliest
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            How to submit/ save the nomination as draft?
          </h4>

          <p>
            Once the participant has filled in all the details and uploaded the
            necessary supportings, they can either save the entry as draft or
            submit their nomination. If the participant saves the nomination as
            draft, then can edit / modify the details and supportings. However,
            once the nomination is submitted, the details and supportings cannot
            be edited/ modified
          </p>
          <p>
            Once the participant clicks on the <strong>SUBMIT</strong> button, a
            page will appear mentioning that their application has been
            submitted successfully. A reference number will also be mentioned
            which shall be used for any communication.
          </p>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            What is the eligibility Criteria?
          </h4>

          <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              Events / campaigns must be commercially launched between April 01,
              2024, to March 31, 2025, or a major part of the campaign must fall
              in the above-mentioned period
            </li>
            <li>
              The participating organization must have at least 1 complete year
              of office and business operations as on March 31, 2025
            </li>
            <li>
              Participant can apply only once for an event / campaign in a
              category; however, they can nominate the same event/ campaign in
              multiple categories
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">Note</h4>

          <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              The Awards management may modify the eligibility criteria from
              time to time with retrospective effect, without prior written
              notification
            </li>
            <li>
              All entries must align with the selected category and meet the
              criteria outlined in category definitions mentioned on the
              official website. Entries that are irrelevant or incorrectly
              categorized may be disqualified.
            </li>
            <li>
              All photos, videos, and supporting materials must directly pertain
              to the event or work described in the entry form.
            </li>
            <li>
              Submitting misleading, unrelated, or inaccurate content may result
              in disqualification.
            </li>
            <li>
              At any time, if any information provided by a participant is found
              to be incorrect/false in any manner, then the nomination will be
              disqualified from the awards
            </li>
            <li>
              After the conclusion of the award ceremony, if any information
              provided by a participant is found to be incorrect/false in any
              manner, then the nomination will be liable to return the award
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            Who are the process advisors and their role?
          </h4>

          <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              Ernst and Young LLP (EY) has been appointed as the “Process
              Advisors” for the awards.
            </li>
            <li>
              The jury evaluation and winner determination process will be
              independently managed by EY. Based on the eligibility criteria, EY
              will share the qualified entries with the jury for evaluation.
            </li>
            <li>
              An independent jury panel will be invited to complete the
              evaluation process. The jury will consist of eminent leaders/
              personalities from the industry. EY will tabulate the scores
              provided by the jury to determine the winners and will be held in
              confidence till the awards ceremony. There can be up to 3 winners
              in each category i.e., Gold, Silver, and Bronze.
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            When is the last day to submit the nomination?
          </h4>

          <p className=" text-red-400 ">
            The last date to submit your nomination will be{" "}
            <strong>Sunday, July 6, 2025</strong>. We strongly encourage
            participants to submit their nominations before the last date to
            ensure their entries are received and considered in a timely manner.
          </p>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            What is the nomination fee?
          </h4>

          <p>Entry Fee for Awards are as follows:</p>
          <p>Rs. 8500 + GST per entry for EEMA Members with all dues paid</p>
          <p>
            Rs. 10,000 + GST per entry for Non EEMA members (or EEMA member with
            unpaid dues)
          </p>

          <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              Payment for all nominations must be made online through the portal
            </li>
            <li>
              A payment receipt will be generated and emailed on your registered
              email ID based on your invoice amount
            </li>
            <li>
              If you are applying in multiple categories, you can make an
              aggregate payment for multiple nominations
            </li>
            <li>
              Once the payment has been completed, the fee becomes
              non-refundable.
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">Guidelines</h4>

          <ul className=" list-decimal pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
            <li>
              The nominated events must have been held between April 01, 2024 to
              March 31, 2025
            </li>
            <li>
              If a company is filling a nomination in multiple categories,
              kindly ensure that the information and supportings provided must
              be category specific
            </li>
            <li>
              The form consists of 4 sections: Participant details, questions to
              be answered, supporting material (pictures, video, testimonial,
              etc.) and client approval
            </li>
            <li>
              All questions must be answered and incomplete forms will lead to
              disqualification. A crisp and to-the-point write-up is required
              for evaluation. All the salient points related to the selected
              category should be covered in the nomination. Writeups should not
              exceed 700 words & should preferably be filled in bullet points
            </li>
            <li>
              <p>Supporting Material: </p>
              <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
                <li>
                  <strong>Video:</strong> Duration should not exceed 3 minutes,
                  must be less than 300 MB and must be in MP4 format
                </li>
                <li>
                  <strong>Storyboard:</strong> Format: JPEG / PDF ; Max A3 Size,
                  Size of the file must be less than 15 MB
                </li>
                <li>
                  <strong>Video file (AV):</strong> the Video must highlight key
                  aspects of the location (Must be less than 3 mins)
                </li>
              </ul>
            </li>

            <li>
              <p>Kindly ensure the following</p>
              <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
                <li>
                  Name, logo or any kind of branding of your organization must
                  not be present in the answers, pictures, customer testimonial
                  or in the video for all categories except for specific
                  categories as mentioned in the form
                </li>
                <li>
                  Attachments can be pictures/collage, must be relevant to the
                  category and must be for the nominated event
                </li>
              </ul>
            </li>

            <li>Lion Box / DropBox/ WeTransfer links will not be accepted.</li>
            <li>Settings of Google Drive links need to be made public.</li>
            <li>
              Based on the eligibility criteria, the qualified entries will be
              shared with the jury for evaluation
            </li>
            <li>
              Award Management holds the right to disqualify any application
              that does not meet the eligibility criteria without assigning any
              reason whatsoever.
            </li>
            <li>
              Information provided by the Participant will be confidential and
              will be used only for the limited purpose of evaluating the entry
              to these Awards
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            Whom to contact?
          </h4>

          <p>
            Participants can also drop us an email at{" "}
            <a
              href="mailto:eemax@eemaindia.com"
              className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
            >
              eemax@eemaindia.com
            </a>{" "}
            for any doubts which are unclear as to the terms or any element of
            the Awards or have any queries/concerns pertaining to the Awards.
          </p>
          <p>
            The awards management shall endeavour to the best of its ability to
            respond thereto.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
