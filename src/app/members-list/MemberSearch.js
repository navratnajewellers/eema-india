// "use client";

// import { useState } from "react";
// import defaultData from "./memberList.json";

// export default function MemberSearch() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter data
//   const filtered = defaultData
//     .filter((member) => {
//       if (!selectedCategory) return false;
//       return member.category === selectedCategory;
//     })
//     .filter((member) => {
//       if (!searchTerm) return true;
//       return (
//         member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         member.company.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     })
//     .slice(0, 6);

//   // Unique categories for dropdown
//   const categories = [...new Set(defaultData.map((m) => m.category))];

//   // Reset function
//   const handleReset = () => {
//     setSelectedCategory("");
//     setSearchTerm("");
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg my-24">
//       <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
//         Search EEMA Members
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
//         {/* Category dropdown */}
//         <select
//           className="border border-gray-300 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
//           value={selectedCategory}
//           onChange={(e) => {
//             setSelectedCategory(e.target.value);
//             setSearchTerm(""); // reset search on category change
//           }}
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         {/* Search input (only after category selected) */}
//         {selectedCategory && (
//           <input
//             type="text"
//             placeholder="Search by name or company..."
//             className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         )}

//         {/* Reset button */}
//         <button
//           onClick={handleReset}
//           className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Results */}
//       {selectedCategory ? (
//         filtered.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map((member) => (
//               <div
//                 key={member.id}
//                 className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
//               >
//                 <div className="p-5">
//                   {/* Name */}
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">
//                     {member.name}
//                   </h3>

//                   {/* Company */}
//                   <p className="text-sm text-gray-700 font-medium mb-3">
//                     {member.company}
//                   </p>

//                   {/* Footer info */}
//                   <div className="flex justify-between items-center text-xs">
//                     <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold">
//                       {member.category}
//                     </span>
//                     <span className="text-gray-500 font-medium">
//                       {member.zone}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center">
//             No results found for your search.
//           </p>
//         )
//       ) : (
//         <p className="text-gray-500 text-center">
//           Please select a category to begin.
//         </p>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import defaultData from "./memberList.json";

export default function MemberSearch() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered results (not sliced yet)
  const filtered = defaultData
    .filter((member) => {
      if (!selectedCategory) return false;
      return member.category === selectedCategory;
    })
    .filter((member) => {
      if (!searchTerm) return true;
      return (
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  // Unique categories for dropdown
  const categories = [...new Set(defaultData.map((m) => m.category))];

  // Reset function
  const handleReset = () => {
    setSelectedCategory("");
    setSearchTerm("");
  };

  // Show only first 5, and replace 6th with special card
  const displayResults = filtered.length > 6 ? filtered.slice(0, 5) : filtered;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg my-24">
      <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
        Search EEMA Members
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
        {/* Category dropdown */}
        <select
          className="border border-gray-300 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSearchTerm(""); // reset search on category change
          }}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Search input (only after category selected) */}
        {selectedCategory && (
          <input
            type="text"
            placeholder="Search by name or company..."
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}

        {/* Reset button */}
        <button
          onClick={handleReset}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {selectedCategory ? (
        filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First 5 results */}
            {displayResults.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="p-5">
                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>

                  {/* Company */}
                  <p className="text-sm text-gray-700 font-medium mb-3">
                    {member.company}
                  </p>

                  {/* Footer info */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold">
                      {member.category}
                    </span>
                    <span className="text-gray-500 font-medium">
                      {member.zone}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Special 6th card */}
            {filtered.length > 6 && (
              <div className="flex items-center justify-center bg-orange-50 border border-orange-200 rounded-2xl shadow-sm p-5 text-center text-orange-700 font-semibold">
                Showing top 5 results. Refine your search to see more.
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No results found for your search.
          </p>
        )
      ) : (
        <p className="text-gray-500 text-center">
          Please select a category to begin.
        </p>
      )}
    </div>
  );
}
