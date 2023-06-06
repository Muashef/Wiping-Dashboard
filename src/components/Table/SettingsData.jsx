import React from 'react';
import { useTable, usePagination } from 'react-table';

const SettingsData = () => {
  const data = React.useMemo(
    () => [
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Super Admin',
        status: 'Active',
      },
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Manager',
        status: 'Active',
      },
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Sales Manager',
        status: 'Inactive',
      },
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Reporting',
        status: 'Active',
      },
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Customer Support',
        status: 'Active',
      },
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Reviewer',
        status: 'Inactive',
      },
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Admin',
        status: 'Active',
      },
      {
        name: 'David Adeleke',
        email: 'Davidadeleke007@gmail.com',
        role: 'Technician',
        status: 'Inctive',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Full Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Role',
        accessor: 'role',
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
    </div>
  );
};

export default SettingsData;