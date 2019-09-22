const moment = require('moment');
moment.locale('es');

/**
 * Returns today's string with the format DD/MM/YYYY
 * () -> '22/09/2019'
 */
function getToday(){
    return moment().format('DD/MM/YYYY');
}

/**
 * Turns a datetime into its written day equivalent 
 * Ej. (22/09/2019) -> 'Domingo 22'
 */
function getDay(datetime){
    const dayMoment = moment(datetime);
    const dayString =  dayMoment.format('dddd D');
    const capital = dayString[0].toUpperCase();
    return `${capital}${dayString.substring(1, dayString.length)}`;
}

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
function getTime(datetime){
    const dayMoment = moment(datetime);
    return dayMoment.format('h:mm A');
}

/**
 * Returns a string representing how long ago
 * Ej. (time - min * 60) -> 'Hace una hora' 
 */
function getTimeAgo(from) {
    const time = moment(from);
    return time.from(moment.now());
} 

/**
 * Rounds the datetime given to start of the day 
 * Ej. (22/09/2019 03:00 PM) -> '22/09/2019 00:00 AM'
 */
function getStart(datetime) {
    const time = moment(datetime);
    return time.startOf('day').valueOf(); 
}

export { getToday, getDay, getMinutes, getTime, getTimeAgo, getStart }