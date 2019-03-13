/**
 * Module to do operations related with dates
 */
const LocalDateTime = require('js-joda').LocalDateTime;
const DateTimeFormatter = require('js-joda').DateTimeFormatter; 

export function getCurrentDateString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern('dd/MM/yyyy'))
}

export function getCurrentTimeString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern('hh:m:ss'))
}