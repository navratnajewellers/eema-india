export default function RefundPolicyPage() {
  return (
    <main className=" py-20 px-7 sm:px-44 space-y-4 text-black [&_p]:text-gray-600 [&_li]:text-gray-600 ">
      <h1 className=" text-3xl sm:text-4xl font-bold text-center ">
        EEMA Refund & Cancellation Policy
      </h1>

      <div className=" space-y-2 mt-20 ">
        <h4 className=" font-semibold text-xl uppercase ">
          Event Registration & Ticketing Terms
        </h4>

        <ul className=" list-decimal pl-9 space-y-4 mt-4 [&_li]:pl-2 ">
          <li>
            <strong>General Policy: </strong>
            At the Event and Entertainment Management Association (EEMA), we are
            committed to upholding transparent and consistent policies to ensure
            clarity for all participants. This policy outlines the terms
            governing cancellations and refunds for event registrations and
            ticket purchases related to EEMA-hosted or EEMA-affiliated events.
          </li>
          <li>
            <strong>No Refund Policy: </strong>
            Unless specifically mentioned, all registrations and ticket
            purchases for EEMA events are non-refundable. Once a registration is
            successfully completed or a ticket is purchased, attendees are not
            entitled to receive a refund in case of cancellation.
          </li>
          <li>
            <strong>Cancellation by Attendee: </strong>
            Cancellations initiated by attendees are not permitted. All sales
            are considered final, and attendees are expected to honor their
            commitment to participate as per the event details at the time of
            registration.
          </li>
          <li>
            <strong>Non-Transferability: </strong>
            Registrations and tickets are non-transferable, unless explicitly
            allowed in the event’s terms and conditions. Transfers to other
            individuals or future events are not permitted by default.
          </li>
          <li>
            <strong>Special Event Exceptions: </strong>
            <p>
              Certain EEMA events may have unique refund or cancellation
              policies, which will be clearly stated on the specific event
              registration or ticketing page. In such cases:
            </p>
            <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
              <li>
                Only those events with explicitly stated refund terms will be
                eligible for cancellations.
              </li>
              <li>
                Digital products or virtual access passes are strictly
                non-refundable.
              </li>
              <li>
                Approved refunds (if any) will be processed to the original
                payment method within 7–10 business days.
              </li>
            </ul>
          </li>

          <li>
            <strong>No-Shows: </strong>
            If an attendee fails to attend an event for any reason—including
            personal emergencies, illness, travel disruptions, or unforeseen
            circumstances—no refund, credit or cancellation will be granted.
          </li>
          <li>
            <strong>Postponements & Rescheduling: </strong>
            <p>If an event is postponed or rescheduled by EEMA:</p>
            <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
              <li>
                Existing registrations/tickets will automatically apply to the
                new date.
              </li>
              <li>
                If the new date is not feasible for the participant, EEMA will
                offer a refund only if stated explicitly in the event terms.
              </li>
            </ul>
          </li>

          <li>
            <strong>Permitted Cancellations (If Applicable): </strong>
            <p>For events where cancellations are explicitly permitted:</p>
            <ul className=" list-disc pl-9 space-y-2 mt-4 [&_li]:pl-2 ">
              <li>
                <strong>Deadline: </strong>Cancellation requests must be made
                within 15 days of registration.
              </li>
              <li>
                No cancellation will be accepted if the request is made within
                45 days of the scheduled event.
              </li>
              <li>
                <strong>Process: </strong>Email your request to{" "}
                <a
                  href="mailto:info@eemaindia.com"
                  className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
                >
                  info@eemaindia.com
                </a>{" "}
                , including full registration details.
              </li>
              <li>
                <strong>Cancellation Charges: </strong>May apply as per terms
                mentioned on the event-specific page, these could include (but
                will not be limited to) taxes, credit card charges and any other
                incidental expenses.
              </li>
            </ul>
          </li>

          <li>
            <strong>Contact Us: </strong>
            For any questions related to this policy, please reach out to us at:{" "}
            <a
              href="mailto:info@eemaindia.com"
              className=" text-orange-400 hover:text-orange-600 font-semibold inline-block "
            >
              info@eemaindia.com
            </a>
          </li>

          <li>
            <strong>Policy Revisions: </strong>EEMA reserves the right to revise
            or update this Refund & Cancellation Policy at any time without
            prior notice. The latest version will always be available on the
            EEMA website and will take effect immediately upon publication.
          </li>
        </ul>
      </div>

      <div className=" space-y-4 mt-16 ">
        <h4 className=" font-semibold text-xl uppercase ">Acknowledgment</h4>
        <p>
          By registering for or purchasing a ticket to an EEMA event, you
          confirm that you have read, understood, and agreed to abide by this
          Refund & Cancellation Policy.
        </p>
      </div>
    </main>
  );
}
