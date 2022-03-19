export const PostedOnDate = (date) => {
    var initial = date;
    var fromTime = new Date(initial);
    var toTime = new Date();

    var difference = toTime.getTime() - fromTime.getTime();
    var hours = Math.floor(difference / 3600000);

    return hours;
};
