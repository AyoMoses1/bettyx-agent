/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Stack, Box, Input, Text } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import initialDates from '../utils/initialDates';

const DateRangePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState(initialDates.startDate);
  const [endDate, setEndDate] = useState(initialDates.endDate);

  useEffect(() => {
    if (startDate && endDate && onChange) {
      onChange({ startDate, endDate });
    }
  }, [startDate, endDate]);

  return (
    <Box>
      <Stack direction="row" alignItems="center">
        <Box>
          <DatePicker
            isClearable
            filterDate={(d) => {
              return new Date() > d;
            }}
            placeholderText="Select Start Date"
            dateFormat="do MMMM yy"
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setStartDate(date ?? initialDates.startDate)}
            customInput={<Input />}
            name="startDate"
          />
        </Box>
        <Text variant="normalBold"> to </Text>
        <Box>
          <DatePicker
            isClearable
            filterDate={(d) => {
              return new Date() > d;
            }}
            placeholderText="Select End Date"
            dateFormat="do MMMM yy"
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={(date) => setEndDate(date ?? initialDates.endDate)}
            customInput={<Input />}
            name="endDate"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default DateRangePicker;
