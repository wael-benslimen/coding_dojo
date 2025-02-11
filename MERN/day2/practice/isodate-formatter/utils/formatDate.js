import Dayjs from "dayjs";

const FormatDate = (isodate) => {
    const date = Dayjs(isodate);

    return date.format('YYYY-MM-DD');

}
// console.log(FormatDate('2007-04-21T09:40:26+0000'));

const months = (isodate) => {
    const date = Dayjs(isodate);
    let months = date.format('MM')


    return months + ' months ago';

}

// console.log(months('2007-04-21T09:40:26+0000'));



const monthsAndDays = (isodate) => {
    const date = new Date(isodate);
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// console.log(monthsAndDays('2007-04-21T09:40:26+0000'));

const newFormat = (isodate) => {
    const date = new Date(isodate);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// console.log(newFormat('2007-04-21T09:40:26+0000'));

export { FormatDate, monthsAndDays, newFormat, months }