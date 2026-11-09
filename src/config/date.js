export default function getDate(_year , _month , _date , _week) {
    let dateObj = new Date();
    let year , month , date;

    if(_week) {
        const currentDate = new Date();
        const tempDate = new Date(currentDate.setDate(currentDate.getDate() - 7));

        year = tempDate.getFullYear();
        month = tempDate.getMonth() + 1;
        date = tempDate.getDate();

    } else {
        year = dateObj.getFullYear();
        month = dateObj.getMonth() + 1;
        date =  dateObj.getDate();

        year = (_year) ? _year : year;
        month = (_month) ? _month : month;
        date = (_date) ? _date : date;
    }

    if(date >= 1 && date <= 9) {
        date = '0' + date;
    }

    const result = `${year}-${month}-${date}`;

    return result;
}