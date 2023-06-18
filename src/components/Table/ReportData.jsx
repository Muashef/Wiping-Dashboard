import React from "react";
import { useTable, usePagination } from "react-table";
import "tailwindcss/tailwind.css";

const ReportData = () => {
  const data = React.useMemo(
    () => [
      {
        id: 2,
        email: "Davidadeleke007@gmail.com",
        reason: "Fake profile",
        country: "Germany",
        status: "Active",
      },
      {
        id: 1,
        email: "Davidadeleke007@gmail.com",
        reason: "Scam",
        country: "Italy",
        status: "Deactivated",
      },
      {
        id: 7,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 4,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 9,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 2,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 8,
        email: "Davidadeleke007@gmail.com",
        reason: "Fake profile",
        country: "Germany",
        status: "Active",
      },
      {
        id: 5,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 1,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 2,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
     
      {
        id: 6,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 8,
        email: "Davidadeleke007@gmail.com",
        reason: "Fake profile",
        country: "Germany",
        status: "Active",
      },
      {
        id: 6,
        email: "Davidadeleke007@gmail.com",
        reason: "Not interested",
        country: "Nigeria",
        status: "Suspended",
      },
      {
        id: 1,
        email: "Davidadeleke007@gmail.com",
        reason: "Scam",
        country: "Italy",
        status: "Deactivated",
      },
      {
        id: 8,
        email: "Davidadeleke007@gmail.com",
        reason: "Fake profile",
        country: "Germany",
        status: "Active",
      },

    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ row }) => (
            <div className=" whitespace-nowrap flex items-center">
                 <span className="mr-24">{row.original.email}</span>
                <div
                    className={`flex items-center ${
                    row.original.id === 2 ||
                    row.original.id === 1 ||
                    row.original.id === 5
                        ? "bg-[#2F80ED] py-1 px-2 text-white rounded-full"
                        : "bg-[#E23A45] py-1 px-2 text-white rounded-full"
                    }`}
                >
                    <span >{row.original.id}</span>
                </div>
               
            </div>
          ),
      },
      {
        Header: "Reason",
        accessor: "reason",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
            <span
            className={`${
                value === 'Active' ? 'bg-[#2F80ED] text-sm py-2 px-6 rounded-md text-white cursor-pointer' : (value === 'Deactivated' ? 'bg-[#E23A45] text-sm py-2 px-1 rounded-md text-white' : 'bg-[#B6B6B6] text-sm py-2 px-2 rounded-md text-white')
              }`}
            >
              {value}
            </span>
          ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="container mx-auto my-8 min-h-screen">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200"
      >
        <thead className="">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-base font-bold text-[#BDBDBD] tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y ">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const cellProps = cell.getCellProps();
                  let cellClassName = "px-6 py-4 whitespace-nowrap text-[#757575] font-semibold";
                //   if (cell.column.id === "email") {
                //     cellClassName += " bg-blue-100";
                //   } else if (cell.column.id === "reason") {
                //     cellClassName += " bg-blue-100";
                //   } else if (cell.column.id === "country") {
                //     cellClassName += " bg-red-100";
                //   } else if (cell.column.id === "status") {
                //     cellClassName += " bg-red-100";
                //   }
                  return (
                    <td 
                      {...cellProps} className={cellClassName}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-2">
        <button
          className="px-4 py-2 bg-blue-500 text-[#BDBDBD] text-sm rounded focus:outline-none"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <div>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-[#BDBDBD] text-sm rounded focus:outline-none"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReportData;