"use client";

import { Pagination, Table, useMediaQuery } from "rsuite";
import { useEffect, useState } from "react";
import defaultData from "./memberList.json";

const { Column, HeaderCell, Cell } = Table;

export default function MemberListPage() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  //   const [defaultData, setDefaultData] = useState(null);

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 1111px)");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //   useEffect(() => {
  //     const loadData = async () => {
  //       const res = await fetch("./memberList.json");
  //       const data = await res.json();
  //       setDefaultData(data);
  //     };

  //     loadData();
  //   }, []);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = defaultData?.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  if (!mounted) return null;

  if (!defaultData)
    return (
      <div className=" h-screen w-full flex justify-center items-center ">
        <h4 className=" text-4xl font-medium leading-relaxed ">Loading...</h4>
      </div>
    );

  return (
    <>
      <div className=" py-28 px-7 fancy-border text-black  ">
        <section>
          <h2 className=" tracking-tight text-4xl font-bold w-fit mx-auto border-l-4 border-r-4 border-orange-600 px-4 mb-20 ">
            Members List
          </h2>
          <div className=" max-w-6xl [&_.rs-table-row-header]:[&_.rs-table-cell]:!bg-orange-400 [&_.rs-table-row-header]:[&_.rs-table-cell]:text-white [&_.rs-table-row-header]:[&_.rs-table-cell]:font-bold [&_.rs-table-row-header]:[&_.rs-table-cell]:text-[15px] [&_.rs-table-row]:not-odd:[&_.rs-table-cell]:!bg-gray-100 ">
            <Table
              autoHeight
              width={isMobile ? 350 : isTablet ? 650 : 770}
              wordWrap="break-word"
              data={data}
              className=" mx-auto "
            >
              <Column width={50} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column width={120} fixed>
                <HeaderCell>Category</HeaderCell>
                <Cell dataKey="category" />
              </Column>

              <Column width={200}>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={300}>
                <HeaderCell>Company</HeaderCell>
                <Cell dataKey="company" />
              </Column>
              <Column width={100}>
                <HeaderCell>Zone</HeaderCell>
                <Cell dataKey="zone" />
              </Column>
            </Table>
            <div
              style={{ padding: 20 }}
              className=" [&_.rs-pagination-group]:!flex-wrap [&_.rs-pagination-group]:!gap-2.5 "
            >
              <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                maxButtons={5}
                size="xs"
                layout={["total", "-", "limit", "|", "pager", "skip"]}
                total={defaultData.length}
                limitOptions={[10, 30, 50]}
                limit={limit}
                activePage={page}
                onChangePage={setPage}
                onChangeLimit={handleChangeLimit}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
