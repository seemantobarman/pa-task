import moment from "moment";

export const PostedOnDate = (date) => {
    // const formatedDate = date.split("T");

    // var a = moment(formatedDate, "YYYY/M/D");
    // var today = moment();
    // var b = moment(today, "M/D/YYYY");
    // var diffDays = b.diff(a, "days");

    var _initial = date;
    var fromTime = new Date(_initial);
    var toTime = new Date();

    var differenceTravel = toTime.getTime() - fromTime.getTime();
    var hours = Math.floor(differenceTravel / 3600000);

    return hours;
};
