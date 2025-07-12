import Link from "next/link"; // For client-side navigation

export default function MembershipCard({
  tierName,
  price,
  description,
  benefits,
  linkHref,
  setIsOpen,
  setOpenCategory,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center max-w-sm w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl my-20">
      {/* Tier Name */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        {tierName}
      </h3>

      {/* Price */}
      <p className="text-2xl font-extrabold text-orange-600 mb-6">
        {price}
        <span className=" text-sm ">joining</span>
      </p>

      {/* Short Description */}
      <p className="text-gray-600 mb-6 flex-grow">
        {" "}
        {/* flex-grow to push button to bottom */}
        {description}
      </p>

      {/* Benefits List */}
      <ul className="text-gray-700 text-left w-full mb-8 space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start text-lg">
            {/* Checkmark Icon (optional, but highly recommended for visual appeal) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Call to Action Button */}
      <div className="mt-auto w-full">
        {" "}
        {/* mt-auto pushes the button to the bottom */}
        {/* <Link
          href={linkHref}
          className="inline-block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
        >
          VIEW ALL MEMBERSHIPS
        </Link> */}
        <button
          onClick={() => {
            setIsOpen(true);
            setOpenCategory(linkHref);
          }}
          className="inline-block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md cursor-pointer "
        >
          VIEW ALL ENTITLEMENTS
        </button>
      </div>
    </div>
  );
}
