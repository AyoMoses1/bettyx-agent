import React from 'react';
import DynamicTable from '../../../common/DynamicTable';
import { Info } from '../../../common/Info';
import { wagerColumns, wagerData as data } from './data';

const Table = () => {
  return (
    <>
      <DynamicTable
        columns={wagerColumns}
        data={data}
        totalCount={data?.length}
        totalPages={0}
        size="sm"
        alignHeader="left"
        alignBody="left"
        variant="striped"
        colorScheme="gray"
      />
      <Info>Past Post:</Info>
    </>
  );
};

export default Table;
