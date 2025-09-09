// "use client";

// import { useEffect, useState } from "react";

// export default function VATPage() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <>
//       <section
//         id="value-added-tieup"
//         className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
//       >
//         <h2 className=" text-black font-bold text-3xl md:text-4xl tracking-tight text-center my-20 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
//           Value Added Tieup
//         </h2>

//         <div className=" space-y-24 ">
//           <section>
//             <div className=" px-6 sm:px-12 ">
//               <h2 className="text-xl md:text-2xl font-semibold text-black mb-9 border-l-4 border-orange-600 pl-4 ">
//                 EEMA Book Design
//               </h2>
//             </div>

//             <div className="flex justify-center px-6 sm:px-12 ">
//               {isClient && (
//                 <iframe
//                   // src="/jury/eemax-2024-jury.pdf#toolbar=0"
//                   src="/documents/knowledge-center/tie-up/eema book design New.pdf"
//                   width="100%"
//                   height="800"
//                   className="w-full max-w-5xl border rounded-xl shadow-lg"
//                 />
//               )}
//             </div>
//           </section>

//           <section>
//             <div className=" px-6 sm:px-12 ">
//               <h2 className="text-xl md:text-2xl font-semibold text-black mb-9 border-l-4 border-orange-600 pl-4">
//                 Member Benefits - new member kit
//               </h2>
//             </div>

//             <div className="flex justify-center px-6 sm:px-12 ">
//               {isClient && (
//                 <iframe
//                   // src="/jury/eemax-2024-jury.pdf#toolbar=0"
//                   src="/documents/knowledge-center/tie-up/Member Benefits - new member kit.pdf"
//                   width="100%"
//                   height="800"
//                   className="w-full max-w-5xl border rounded-xl shadow-lg"
//                 />
//               )}
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { FileText, Eye, Download } from "lucide-react"; // nice icons
import Link from "next/link";

const pdfs = [
  {
    title: "EEMA Book Design",
    file: "/documents/knowledge-center/tie-up/eema book design New.pdf",
  },
  {
    title: "Member Benefits - New Member Kit",
    file: "/documents/knowledge-center/tie-up/Member Benefits - new member kit.pdf",
  },
];

export default function VATPage() {
  return (
    <section
      id="value-added-tieup"
      className="bg-gray-50 text-black px-7 sm:px-24 relative py-11"
    >
      <h2 className="text-black font-bold text-3xl md:text-4xl tracking-tight text-center my-20 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
        Value Added Tieup
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 max-w-5xl mx-auto">
        {pdfs.map((doc, index) => (
          <div
            key={index}
            className="border rounded-2xl bg-white shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <FileText className="w-14 h-14 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-black mb-4">
              {doc.title}
            </h3>
            <div className="flex gap-4">
              {/* View PDF */}
              <Link
                href={doc.file}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
              >
                <Eye className="w-4 h-4" />
                View
              </Link>
              {/* Download PDF */}
              <Link
                href={doc.file}
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-50 transition"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
