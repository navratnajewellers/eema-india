import { motion } from "framer-motion";

export default function SaAwardsTC({ setActiveSection }) {
  return (
    <motion.section
      id="terms-and-conditions"
      onViewportEnter={() => setActiveSection("terms-and-conditions")}
      className=" text-black "
    >
      <main className=" py-16 text-black px-7 md:px-44 [&_p]:text-gray-600 [&_li]:text-gray-600  ">
        <h2 className=" text-3xl md:text-4xl font-bold leading-relaxed mb-6 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
          Spotlight Awards 2025
        </h2>
        <h5 className=" text-lg font-semibold text-center uppercase ">
          Terms and Conditions
        </h5>

        <div className=" py-7 mt-11 ">
          <h2 className="text-2xl font-bold mb-6 uppercase">Definitions</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="py-3 px-4 text-sm font-semibold text-gray-700 w-1/3">
                    Awards
                  </th>
                  <th className="py-3 px-4 text-sm font-semibold text-gray-700">
                    Spotlight Awards 2025
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                <tr>
                  <td className="py-4 px-4 font-medium">
                    Awards Management/Management
                  </td>
                  <td className="py-4 px-4">
                    Personnel from Event & Entertainment Management Association
                    (EEMA)/ or organizers who are responsible for the overall
                    conduct of the Awards
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Website</td>
                  <td className="py-4 px-4 text-orange-500 underline break-all">
                    <a
                      href="/spotlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotlight awards | EEMA India
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Participant</td>
                  <td className="py-4 px-4">
                    Any person that sends in an application to participate in
                    the Awards as per the terms and conditions, or is nominated
                    by EEMA to participate in the Awards
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Application form</td>
                  <td className="py-4 px-4">
                    The participant must apply online on the above-mentioned
                    website
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">
                    Terms and conditions (“T&C” or “Terms”)
                  </td>
                  <td className="py-4 px-4">
                    The terms governing the Awards, as may be amended from time
                    to time by the awards management
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className=" list-disc pl-9 space-y-4 mt-9 [&_li]:pl-2 leading-relaxed ">
            <li>
              By participating in the Awards, Participant agrees to abide by and
              be bound by these Terms and any amendment thereto
            </li>
            <li>
              These Terms may be modified by Award Management without any prior
              notification. The participant is advised to regularly review these
              Terms on the Website. Participants must clarify with the
              Management in case of any ambiguity or disagreement
            </li>
            <li>
              The decision taken by the Management based upon the observation &
              recommendations of Jury with respect to the
              evaluation/disqualification/qualification/adding nominations/
              recategorization is final and binding on all Participants. No
              claims/queries raised with respect to the same will be entertained
              in this regard
            </li>
            <li>
              If no Participant in a category is found to be satisfying the
              eligibility by the Awards Management, the prize may be cancelled.
              The decision of the Awards management in this regard will be final
              and non-awardable. The Awards management will not entertain any
              queries in this regard
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Eligibility Criteria for participation in the Awards
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              The participant should be 18 years of age to participate in the
              Awards
            </li>
            <li>
              Individual should be an Indian citizen currently residing in
              India, and legally eligible to work in India
            </li>
            <li>
              Participants can submit one event/campaign in multiple categories.
            </li>
            <li>
              The event, or work submitted by the participant must be held
              between April 1, 2024, to March 31, 2025, or a major part of the
              campaign must fall in the above-mentioned period.
            </li>
            <li>
              For nominations in Team Segment Categories (Excellence in Team
              Building MC (Male), Excellence in Team Building MC (Female),
              Excellence in Music Band Performance, and Excellence in Dance Team
              Performance), the participating team must consist of a minimum of
              two members.
            </li>
            <li>
              An organization cannot participate on behalf of its sister units,
              parent organization or other organizations under the parent
              organization.
            </li>
            <li>
              Participation in the awards is subject to defined terms and
              conditions available on the above-mentioned website
            </li>
            <li>
              The Award categories may be changed/modified / split /
              merged/increased or cancelled by the Awards Management and/or Jury
              based on the number of entries received in any category, and the
              quality of the entries. The decision in this regard will be final,
              non-contestable, and binding on all participants. The Awards
              management will not entertain any queries in this regard
            </li>
            <li>
              If at any time, including after the conclusion of the Award
              ceremony, any information provided by any participant, is found to
              be incorrect in any manner, then the participant will be liable to
              be disqualified and / or return the Award
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Category Relevance and Supporting Materials
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              All entries must be relevant to the selected category; irrelevant
              entries may be disqualified.
            </li>
            <li>
              Photos, videos, and other supporting materials must relate to the
              same event or work mentioned in the entry form.
            </li>
            <li>
              Misleading or unrelated content may lead to disqualification.
            </li>
            <li>
              Awards Management reserves the right to verify all submitted
              materials.
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Call for Entries & Participation
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              The call for entries for the Awards will be announced in one or
              more media platforms and / or by direct communication, and that
              shall be construed to be adequate notice for call for entries
            </li>
            <li>
              Participant can apply for the Awards by completing the application
              form online
            </li>
            <li>
              Link to fill the application form will be available on the
              above-mentioned website
            </li>
            <li>
              Participant needs to duly fill all information points on the
              Application Form
            </li>
            <li>
              Participant can have multiple entries in multiple categories
            </li>
            <li>
              The Awards management has the right to reclassify application
              form/forms from one prize category to another, at their discretion
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Submission of Entries- Online
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              Awards Management will not be responsible for application
              form/forms that are damaged / lost due to lack or lapse in any
              communication because of internet failure or any other reasons
            </li>
            <li>
              It is mandatory for all the entries to attach the mandatory
              documents as mentioned in the respective category
            </li>
            <li>
              Participation in the Awards in any manner will be construed as an
              acceptance to the Terms and conditions stated herein
            </li>
            <li>
              Participants can fill the form on the website and submit the
              completed application form online
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Completeness of Entries/ Disqualification
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              All mandatory fields of the application form need to be complete
              in all respects; else it may be disqualified from participation.
            </li>
            <li>Entries will be accepted in English language only</li>
            <li>
              The work submitted by the Participant must be original in nature
            </li>
            <li>
              Management shall have a right to disqualify any Participant in
              case of violation of this term or in case of any third-party claim
              relating to IP infringement or any third party right.
            </li>
            <li>
              No work which is copied / replicated/influenced / redone by an
              existing initiative will be permitted to participate
            </li>
            <li>
              All work submitted by the Participants for the Awards, including
              but not limited to Intellectual Property Rights therein, will be
              owned by the Management
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Client Approval Responsibility
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              It is the sole responsibility of the participant to obtain prior
              written approval from the respective client(s) for any event,
              work, or campaign submitted as part of their entry.
            </li>
            <li>
              By submitting an entry, the participant confirms that all
              necessary client approvals have been obtained.
            </li>
            <li>
              The Awards Management shall assume that client consent has been
              duly secured upon receipt of the application and shall not be held
              responsible for verifying the same.
            </li>
            <li>
              The participant shall be entirely liable for any claims, disputes,
              legal actions, or objections arising from the submission of such
              entries, including but not limited to intellectual property
              infringement, confidentiality breaches, or misrepresentation of
              client consent.
            </li>
            <li>
              In the event of any dispute or claim, the participant agrees to
              indemnify and hold harmless the Awards Management and its
              affiliates from any resulting liability or loss.
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">Timelines</h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              The defined timelines are subject to change based on circumstances
            </li>
            <li>
              Management and its subcontractors shall not be held
              accountable/liable for any disruptions/stoppages/interruptions or
              cancellation of the Awards or its ceremony or any part of its
              processes because of any factors beyond its control
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Additional Information
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              Participants may be contacted for any additional information to
              verify the information provided. Such information sourced from the
              participants will become part of the original application
            </li>
            <li>
              Management has the right to ask for documentary proof of
              information. If such a request is made and the participant does
              not comply within 5 working days from the date the request is
              made, the participant may be disqualified from the awards
            </li>
            <li>
              Management or the team appointed by Management will try to contact
              the Participant on best effort basis by any means deemed
              appropriate.
            </li>
            <li>
              In the event it is not possible to contact any Participant to
              obtain information on them, interview them, etc. such Participant
              may be disqualified from further participation
            </li>
            <li>
              The participant hereby irrevocably authorizes the Management to
              use the data gathered during and/or the Awards in respect of the
              participants. This shall be the property of awards management and
              awards management shall be entitled to use the same in its
              communications including marketing promotions and advertisements
              along with/without awards management’s brand.
            </li>
            <li>
              Management shall not be liable in any manner for any mishap,
              accident, injury, or damages etc. of whatsoever nature, caused to
              the participants during the Awards. Further, Management shall not
              be liable in any manner for any loss, damage, theft, or any other
              mishap caused during the Awards.
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">
            Winner determination
          </h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              An independent jury appointed by the Management will evaluate the
              entries and determine the winners for the Awards.
            </li>
            <li>
              If required, the Participants will be asked to present their work
              to the jury members in a virtual jury round
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">General</h4>

          <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              Participant agrees that the Participant is legally capable of
              entering and, if selected, participating in the Awards and agrees
              to the Terms and that Participant is competent (i.e., Participant
              is of legal age and mental capacity) and eligible to enter into
              this legally binding agreement on Participant&apos;s behalf.
            </li>
            <li>
              Participant understands and agrees that merely participating in
              this Awards does not entitle the Participant to a prize or to any
              other form of consideration.
            </li>
            <li>
              Participant warrants and represents to the Management that all
              information, including any communications, software, photos, text,
              video, graphics, music, sounds, images, and other material
              submitted or recorded in any manner by the Participant or the
              partners of Management, including the Management, for
              consideration for the Awards, are solely owned by the Awards
              Management and do not infringe upon any other individual or
              organizational rights (including, without limitation, intellectual
              property rights). Participant shall be completely responsible for
              handling claims of infringement or alleged infringement by any
              third party and shall indemnify Awards Management entities (in
              India or abroad) and the Awards Management from any claims, costs,
              or damages from infringement or alleged infringement of any
              third-party rights including intellectual property rights or the
              defense of a claim or any costs payable thereof.
            </li>
            <li>
              Participant must enter the Awards at their own will, and the
              Management is not in any way obligated or liable for any loss or
              costs that the Participant may suffer or incur, and nothing is
              payable to the Participants for participating in the Awards or any
              event prior to or following the Awards.
            </li>
            <li>
              Participants, for the purpose of entering the Awards, grant Awards
              Management a royalty-free, irrevocable, worldwide,
              non-transferable, non-exclusive right and license to use and
              display such entry, for participation in the Awards, and any
              intellectual property in relation to and arising out of such
              participation in the Awards and footage thereof, which shall
              include trade publications, press releases, electronic posting to
              the Website, the Awards Management website in any display format
              selected by Awards Management during the Awards or use by Awards
              Management as it deems fit.
            </li>
            <li>
              The Management reserves the right to, at its discretion, withdraw
              or amend or add to the T&C of the Awards at any time, with
              prospective or retrospective effect, and does not take
              responsibility for any loss or damage that any individual or
              organization may suffer as a result of participating or attempting
              to participate in the Awards, the Awards being withdrawn, or its
              Terms amended.
            </li>
            <li>
              Should a participant wish to withdraw from the Awards, kindly
              inform the Management in writing at any time up to one week prior
              to the final awards ceremony. In this case, the nomination fee
              will be non-refundable.
            </li>
            <li>
              All disputes relating to or arising out of the Awards shall be
              subject to the laws of India and shall be subject to the exclusive
              jurisdiction of the courts of competent jurisdiction at Mumbai,
              India.
            </li>
            <li>
              The Participants indemnify Awards Management, its employees,
              officers, contractors, partners, or other persons used by them in
              relation to this Awards and hold them harmless against any loss,
              claim, demands, costs, damages, judgments, expenses, or liability
              (including legal costs) arising out of or in connection with any
              or all claims, that may be brought against the Management by any
              third party in connection with the Participant&apos;s
              participation in or winning the Awards, which is inconsistent with
              any of the warranties and representations made by the
              Participants, or due to breach of these Terms, and shall reimburse
              Awards Management for any loss, costs, expense, or damage to which
              said indemnity applies. Awards Management shall give the
              Participant prompt written notice of any claim or actions covered
              by this indemnity, and the Participant shall have the right, at
              its own expense, to participate in any such action.
            </li>
            <li>
              Decision of Management on all matters is final and binding on all
              Participants and no correspondence will be entertained on the
              same.
            </li>
            <li>
              In the event these Terms do not cover any question or complaint in
              relation to the Awards, the same will be concluded by the Awards
              Management (for all other issues) or an independent body or legal
              team as appointed by the Awards Management and deemed necessary.
            </li>
            <li>
              The Participant agrees to give full consent unconditionally for
              Awards Management to share any information provided by the
              Participant with agencies working with them with regards to the
              program, its recording and broadcasting, and related activities
              including agencies involved with Awards Management.
            </li>
            <li>
              The decision of Awards Management in relation to the
              interpretation of any of these Terms shall be final and binding on
              the participants.
            </li>
            <li>
              If Participants are unclear as to the Terms or any element of the
              Awards or have any queries/concerns pertaining to the Awards, they
              can write in with their questions, concerns, or queries to the
              following email address:{" "}
              <a
                href="mailto:info@eemaindia.com"
                className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
              >
                info@eemaindia.com
              </a>
              . Awards Management shall endeavour to the best of its ability to
              respond thereto.
            </li>
          </ul>
        </div>

        <div className=" space-y-2 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">Website</h4>

          <ul className=" list-decimal pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
            <li>
              The website provides information and acts as the only means to
              enter the Awards.
            </li>
            <li>
              <p>Awards management shall not be responsible for:</p>

              <ul className=" list-disc pl-9 space-y-4 mt-6 [&_li]:pl-2 leading-relaxed ">
                <li>
                  Any delivery, failures relating to the registration or
                  uploading videos/presentations.
                </li>
                <li>
                  Any SPAM generated messages as result of Participant accessing
                  the Website
                </li>
                <li>Awards Management not receiving or rejecting any data</li>
                <li>
                  Any lost, late, or misdirected computer transmission or
                  network, electronic failures of any kind or any failure to
                  receive entries owing to transmission failures or due to any
                  technical reasons
                </li>
                <li>
                  Other conditions/situations or failures beyond its control
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className=" space-y-4 mt-9 ">
          <h4 className=" font-bold text-2xl uppercase ">Disclaimers</h4>

          <p className=" leading-relaxed ">
            Awards management or its subsidiaries or holding entities are not
            liable or responsible for any action or decision was taken by
            Participant or anyone acting on Participant’s behalf or under
            Participant employment or under contract with Participant. Awards
            management shall not be under any obligation to Participant and
            Participant shall have no obligation or rights in relation to the
            Awards and shall have no claims whatsoever against the awards
            management relating to the selection process or the running of the
            Awards
          </p>
          <p className=" leading-relaxed ">
            Management has no obligation to screen the entry material in advance
            and is not responsible for monitoring entries for preventing
            violation of intellectual property ownership rights, or violations
            of any law, rule, or regulation. If the Management is notified of
            submissions or materials that may not conform to the Terms, it may
            investigate the allegation and determine in good faith and in its
            sole discretion whether to eliminate such an entry from
            consideration. The Management has no liability or responsibility to
            Participants or other users of the Microsite for the performance or
            non-performance of such activities.
          </p>
        </div>
      </main>
    </motion.section>
  );
}
