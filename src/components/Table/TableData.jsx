import React from 'react';
import { useTable, usePagination } from 'react-table';

const TableData = () => {
  const data = React.useMemo(
    () => [
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Premium',
        country: 'Germany',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Premium',
        country: 'Italy',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Egypt',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Premium',
        country: 'France',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Free',
        country: 'Canada',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Poland',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Free',
        country: 'Nigeria',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Netherland',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Premium',
        country: 'Ireland',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Wales',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Free',
        country: 'Nigeria',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Wales',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Free',
        country: 'Canada',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Netherland',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Free',
        country: 'Canada',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Free',
        country: 'Canada',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Egypt',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Plus',
        country: 'Guinea',
        status: 'Active',
      },
      {
        email: 'Davidadeleke007@gmail.com',
        subscription: 'Wiping Premium',
        country: 'France',
        status: 'Active',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Subscription Type',
        accessor: 'subscription',
        Cell: ({ value }) => (
          <span
            className={`${
              value === 'Wiping Free' ? 'text-[#757575] font-bold text-base' : 'text-[#2F80ED] font-bold text-base'
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Status',
        accessor: 'status',
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
    <div className="container mx-auto px-4 py-6">
      <table className="table-auto w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                className="py-4 px-4 border-b border-[#BDBDBD] cursor-pointer text-[#BDBDBD] text-base text-left"
                  {...column.getHeaderProps()}
                  key={column.id}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...getTableBodyProps()} key={i}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="py-3 px-4 border-b border-[#BDBDBD] text-[#757575] font-semibold"
                      {...cell.getCellProps()}
                      key={cell.column.id}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-4">
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

export default TableData;