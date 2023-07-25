module.exports = function isWeekday(week){
    return !week.startsWith("S")
    }
    isWeekday('Monday');
    isWeekday('Tuesday');
    isWeekday('Wednesday');
    isWeekday('Thursday');
    isWeekday('friday');
    isWeekday('Saturday');
    isWeekday('Sunday');
    console.log(isWeekday('Monday'));
    console.log(isWeekday('Tuesday'));
    console.log(isWeekday('Wednesday'));
    console.log(isWeekday('Thursday'));
    console.log(isWeekday('Friday'));
    console.log(isWeekday('Saturday'));
    console.log(isWeekday('Sunday'));