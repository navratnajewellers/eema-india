"use client";

import { Table, useMediaQuery } from "rsuite";
import { Cell, HeaderCell } from "rsuite-table";
import Column from "rsuite/esm/Table/TableColumn";

export default function NLTPage() {
  const [isMobile] = useMediaQuery("(max-width: 700px)");

  const data = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  ];

  const NECData = [
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
  ];

  return (
    <section className=" bg-gray-50 py-24 ">
      {/* <div className="p-4">
        <h1 className="text-xl font-bold mb-4">User Table</h1>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className=" flex justify-center items-center ">
        <div>
          <Table
            height={300}
            width={isMobile ? 400 : 770}
            data={NECData}
            bordered
            cellBordered
            autoHeight
          >
            <Column width={150}>
              <HeaderCell>Name</HeaderCell>
              <Cell dataKey="name" />
            </Column>

            <Column width={250}>
              <HeaderCell>Company Name</HeaderCell>
              <Cell dataKey="company_name" />
            </Column>

            <Column width={120}>
              <HeaderCell>Designation</HeaderCell>
              <Cell dataKey="designation" />
            </Column>

            <Column width={250}>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>
          </Table>
        </div>
      </div>
    </section>
  );
}
