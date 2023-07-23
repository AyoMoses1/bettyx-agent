import moment from 'moment';

const initialDates = {
    startDate : new Date(moment().subtract(30, 'days').format('MM/DD/YYYY')),
    endDate: new Date(moment().format('MM/DD/YYYY')),
}

export default initialDates;