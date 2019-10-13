import moment from 'moment';
import 'moment/locale/es';

/**
 * Returns the difference in minutes between to datetimes 
 * Ej. (time, time + min * 5) -> 5 
 */
function getMinutes(from, to) {
    const millis = Math.abs(from - to);
    const minutes = millis / 60000; // minute
    return Math.round(minutes);
}

/**
 * Returns just the time's string of the day 
 * Ej. (22/09/2019 03:00 PM)  -> '03:00 PM'
 */
function getHour(datetime){
    const dayMoment = datetime ? moment(datetime) : moment();
    return dayMoment.format('h:mm');
}

function getMeridiem(datetime){
    const dayMoment = datetime ? moment(datetime) : moment();
    return dayMoment.format('a');
}

/**
 * Returns just the day's string of the day 
 * Ej. (22/09/2019 03:00 PM)  -> '22'
 */
function getDay(datetime) {
    const dayMoment = datetime ? moment(datetime) : moment();
    return dayMoment.format('dddd');
}

/**
 * Returns just the week day's string of the day 
 * Ej. (22/09/2019 03:00 PM)  -> 'Domingo'
 */
function getWeekDay(datetime) {
    const dayMoment = datetime ? moment(datetime) : moment();
    return dayMoment.format('D');
}

/**
 * Returns just the month's string of the day 
 * Ej. (22/09/2019 03:00 PM)  -> 'Domingo'
 */
function getMonth(datetime) {
    const dayMoment = datetime ? moment(datetime) : moment();
    return dayMoment.format('MMMM');
}

/**
 * Returns just the year's string of the day 
 * Ej. (22/09/2019 03:00 PM)  -> 'Domingo'
 */
function getYear(datetime) {
    const dayMoment = datetime ? moment(datetime) : moment();
    return dayMoment.format('YYYY');
}

/**
 * Returns a string representing how long ago
 * Ej. (time - min * 60) -> 'Hace una hora' 
 */
function getTimeAgo(from) {
    const time = from ? moment(from) : moment();
    return time.from(moment.now());
} 

/**
 * Rounds the datetime given to the start of the day 
 * Ej. (22/09/2019 03:00 PM) -> '22/09/2019 00:00 AM'
 */
function getStart(datetime) {
    const time = datetime === null ? moment() : moment(datetime);
    return time.startOf('day').valueOf(); 
}

/**
 * Rounds the datetime given to the end of the day 
 * Ej. (22/09/2019 03:00 PM) -> '22/09/2019 12:00 PM'
 */
function getEnd(datetime) {
    const time = datetime === null ? moment() : moment(datetime);
    return time.endOf('day').valueOf(); 
}

/**
 * Add an amount of time to the current datetime 
 */
function addTime(datetime, amount, unit='days'){
    return moment(datetime).add(amount, unit).valueOf();
}

function getLapse(from, to) {
    const start = `${getHour(from)} ${getMeridiem(from)}`;
    const end = `${getHour(to)} ${getMeridiem(to)}`;
    return `${start} - ${end}`.toUpperCase();
}

/**
 * Takes a datime and splits it into different components
 * like weekDay, day, month, year 
 */
function timeInfo(datetime) {
    return { 
        weekDay: getWeekDay(datetime),
        day: getDay(datetime),
        month: getMonth(datetime),
        year: getYear(datetime)
    }
}

export { 
    getMinutes,
    getHour,
    getMeridiem,
    getDay,
    getWeekDay,
    getMonth,
    getYear,
    getTimeAgo,
    getStart,
    getEnd,
    addTime,
    getLapse,
    timeInfo
}