/**
 * Module to do operations related with dates
 */
const ZoneId = require('js-joda').ZoneId;
const Instant = require('js-joda').Instant;
const LocalDate = require('js-joda').LocalDate;
const ZoneOffset = require('js-joda').ZoneOffset;
const LocalDateTime = require('js-joda').LocalDateTime;
const DateTimeFormatter = require('js-joda').DateTimeFormatter; 

export function getCurrentDateString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern('dd/MM/yyyy'))
}

export function getDateString(datetime){
    const instant = Instant.ofEpochMilli(datetime);
    const date = LocalDateTime.ofInstant(instant);
    return date.format(DateTimeFormatter.ofPattern('dd/MM/yyyy'))
}

export function getTimeString(datetime){
    const instant = Instant.ofEpochMilli(datetime);
    const date = LocalDateTime.ofInstant(instant);
    return date.format(DateTimeFormatter.ofPattern('h:mm'))
}

export function atStartOfDay(dateTimeInMillis) {
    let instant = Instant.ofEpochMilli(dateTimeInMillis);
    let datetime = LocalDate.ofInstant(instant, ZoneId.UTC);
    let start = datetime.atStartOfDay();
    return start.toInstant(ZoneOffset.UTC).toEpochMilli();
}

export function getDifferenceInMinutes(datetimeX, datetimeY) {
    const differenceMillis = Math.abs(datetimeX - datetimeY);
    const differenceMinutes = differenceMillis / 60000; // minute
    return Math.round(differenceMinutes);
}

// console.log(getDifferenceInMinutes(1544194800000, 1544196600000));