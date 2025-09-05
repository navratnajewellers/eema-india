import { motion } from "framer-motion";
import { Image } from "rsuite";

export default function SaAwardsProcess({ setActiveSection }) {
  return (
    <motion.section
      id="process-guidelines"
      onViewportEnter={() => setActiveSection("process-guidelines")}
      className=" text-black "
    >
      <Image
        src="/images/spotlightawards/award-process-guidlines.jpg"
        alt="spolight-awards-about"
      />

      <main className=" py-20 px-4 md:px-36 [&_p]:text-gray-600 [&_li]:text-gray-600 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Award <span className="text-yellow-500">Process & Guidelines</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            SPOTLIGHT Awards evaluation process
          </p>
        </motion.div>

        <div className=" space-y-4 mt-16 ">
          <h4 className=" font-semibold text-xl uppercase ">WHO CAN APPLY?</h4>
          <p className=" text-gray-600 ">
            SPOTLIGHT Awards 2025 are open for all pioneers, individuals,
            organizations associates, and new entrants who have
            showcased/performed events in <strong>PAN India</strong> to connect
            and share their experiences
          </p>
          <p className=" text-gray-600 ">
            <strong>
              Note: All EEMA members must have cleared their dues until March
              31, 2025, to be eligible for EEMA member rates. In case the dues
              are not cleared until March 31, 2025, they will not be eligible
              for EEMA member rates and shall pay non-EEMA member rates.
            </strong>
          </p>
        </div>

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            How to register?
          </h4>

          <ul className=" list-decimal pl-9 space-y-4 mt-4 [&_li]:pl-2 ">
            <li>
              The participants can register themselves by clicking on ‘Apply
              now’ on Link to be updated website or visit{" "}
              <a
                href="https://spotlight.eemaindia.com/"
                className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
              >
                https://spotlight.eemaindia.com/
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
                href="/spotlightaward/awards/#terms-and-conditions"
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
                <li>Name of Agency / Organization</li>
                <li>Contact Person Name</li>
                <li>Name of Agency / Organization (Secondary Agency)</li>
                <li>
                  If the participant is an EEMA member, then they must confirm
                  if their dues have been cleared.
                </li>
                <li>Participant Name</li>
                <li>Parent Company</li>
                <li>Designation</li>
                <li>Region / City</li>
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
                  <strong>Brief:</strong> Explain the brief / objective of the
                  event, mention the target audience and the ask from the client
                  (Word Limit- 100 Words)
                </li>
                <li>
                  <strong>Results:</strong> What was the impact of the event and
                  provide a write up (Word Limit- 200 Words)
                </li>
              </ul>
              <p className=" mt-4 ">
                <strong>
                  A crisp and to-the-point write-up is required for evaluation.
                  It is mandatory to answer all the questions in this section,
                  and the answers must be in English.
                </strong>
              </p>
            </li>

            <li>
              <p className=" font-medium ">
                Supportings: In this section, the participant must upload the
                below files to support their nomination.
              </p>
              <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
                <li>
                  <strong>Event Photos:</strong> it is mandatory to upload
                  photographs, which consist of pictures and details capturing
                  the key highlights of the nominated event/campaign. The format
                  of pictures must be JPEG / PDF (A3 Size soft copy), and the
                  size of the file must be less than 15 MB.
                </li>
                <li>
                  <strong>Audio Video file (AV):</strong> the AV must highlight
                  key highlights of the event/campaign. The length of the AV
                  must be less than 3 minutes, the format must be MP4, and the
                  size must be less then 300 MB.
                </li>
                <li>Individual Profile</li>
                <li>Links</li>
                <li>Registration Certificate/Incorporation Certificate</li>
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
                  Agency branding should NOT be present in the case study, Event
                  photos or in the AV
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
                <li>Name of the client</li>
                <li>Designation</li>
                <li>Official Email ID</li>
                <li>Mobile number</li>
                <li>Client Approval (PDF Upload)</li>
              </ul>
            </li>

            <p className=" font-medium ">
              After the participant has filled the application, they will add it
              to the cart to make the payment and complete the process.{" "}
              <strong>
                Please note: the fee is non-refundable once the payment is
                completed.
              </strong>
            </p>
          </ol>
        </div>

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            What is the client approval process?
          </h4>

          <ul className=" list-decimal pl-9 space-y-4 mt-4 [&_li]:pl-2 ">
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

        <div className=" space-y-4 mt-9 ">
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

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            What is the eligibility Criteria?
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-4 [&_li]:pl-2 ">
            <li>
              Events / campaigns must be commercially launched between April 01,
              2024, to March 31, 2025, or a major part of the campaign must fall
              in the above-mentioned period
            </li>
            <li>
              Participant can apply only once for an event / campaign in a
              category; however, they can nominate the same event/ campaign in
              multiple categories
            </li>
          </ul>
        </div>

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">Note</h4>

          <ul className=" list-disc pl-9 space-y-4 mt-4 [&_li]:pl-2 ">
            <li>
              The Awards management may modify the eligibility criteria from
              time to time with retrospective effect, without prior written
              notification
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

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            Who are the process advisors and their role?
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-4 [&_li]:pl-2 ">
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

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            When is the last day to submit the nomination?
          </h4>

          <p className=" text-red-400 ">
            The last date to submit your nomination will be{" "}
            <strong>May 14th, 2025</strong>. We strongly encourage participants
            to submit their nominations before the last date to ensure their
            entries are received and considered on time.
          </p>
        </div>

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            What is the nomination fee?
          </h4>

          <p>Entry Fee for Awards are as follows:</p>
          <p>Rs 3499 per entry for EEMA Members with all dues paid.</p>
          <p>
            Rs 4499 per entry for non-EEMA members (or EEMA members with unpaid
            dues)
          </p>

          <ul className=" list-disc pl-9 space-y-4 mt-4 [&_li]:pl-2 ">
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

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-semibold text-xl uppercase ">
            Whom to contact?
          </h4>

          <p>
            Participants will have WhatsApp support functionality on the website
            and their login dashboard for any doubts that are unclear as to the
            terms or any element of the Awards or have any queries/concerns on
            the Awards. The awards management shall endeavor to the best of its
            ability to respond thereto.
          </p>

          <p>
            <strong>Contact Number: </strong>
            <a
              href="tel:+916358144611"
              className=" text-orange-400 hover:text-orange-600 font-semibold inline-block p-4 "
            >
              +91 6358 144 611
            </a>{" "}
            <a
              href="tel:+916358144614"
              className=" text-orange-400 hover:text-orange-600 font-semibold inline-block p-4 "
            >
              +91 6358 144 614
            </a>
          </p>
        </div>
      </main>
    </motion.section>
  );
}
