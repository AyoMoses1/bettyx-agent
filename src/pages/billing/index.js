import React from 'react';
import DynamicTable from '../../common/DynamicTable';
import {
  Box,
  Select
} from '@chakra-ui/react';
import { billingColumns } from './components/helpers';
import { data } from './components/data';
import { Info } from './../../common/Info';
import { PageScaffold } from '../../common/PageScaffold';

const index = () => {
  return (
    <>
      <PageScaffold title="Billing">
        <Info>
          Current Balance:
          <span
            style={{
              color: 'green',
              fontWeight: 'bold',
              fontSize: '700',
              marginLeft: '10px',
            }}
          >
            $24.00
          </span>
          <Box ml="auto" bg="blue" color="white">
            <Select placeholder="Select Days"  border="none" color="white">
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
              <option value="120">120 days</option>
            </Select>
          </Box>
        </Info>
        <DynamicTable
          columns={billingColumns}
          data={data}
          totalCount={data?.length}
          totalPages={0}
          size="sm"
          alignHeader="left"
          alignBody="left"
          variant="striped"
          colorScheme="gray"
        />
      </PageScaffold>
    </>
  );
};

export default index;
