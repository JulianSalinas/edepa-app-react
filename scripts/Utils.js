import latin from './Latin';

/**
 * Replaces ticks and not unrecognizable characters for 
 * the most similar characters we have.
 * Ej. 
 */
function normalize(string) {
    const regex = /[^A-Za-z0-9]/g;
    string.replace(regex, i=> latin[i] || i)
}

/**
 * Turns the first letter of each word into uppercase 
 * 'julian salinas rojas' -> 'Julian Salinas Rojas'
 */
function capitalize(string) {
    if (string === null || string === '') return string;
    const regex = /(?:^|\s)\S/g;
    const upper = i =>  i.toUpperCase();
    return string ? string.replace(regex, upper) : null;
}

/**
 * Truncates the size of a string, adds '...' at the end 
 * if the string was truncated
 */
function truncate(string, size){
    if (string === null || string === '') return string;
    const length = string.length;
    const truncated = length <= size ? string : string.substring(0, size) + '...';
    return truncated;
}

/**
 * Returns the first two initials from a name or just the
 * first one if it is just the stack name 
 * Ej. 'Julian Salinas Rojas' -> JS
 */
function initials(string){
    if (string === null || string === '') return '#';
    if (string.length === 1) return string.toUpperCase();
    const x = string.match(/\b\w/g) || [];
    return (x.length === 1 ? x[0] : x.length > 1 ? x[0] + x[1]: '#').toUpperCase();
}

/**
 * Reorders a list according to a property of each item 
 * Ej. orderBy(rawData, 'id')
 */
function orderBy(data, prop, desc){
    const factor = desc ? 1 : - 1;
    const order = (a, b) => a < b ? -factor : a > b ? factor : 0
    data.sort((a, b) => order(a[prop], b[prop]));
    return data;
}

/**
 * Used by groupBy to split the groups according to its key function
 */
function reduceBy(groups, item, key) {
    groups[key] ? groups[key].data.push(item): 
    groups[key] = { title: key, data: [item] };
    return groups;
};

/**
 * Split the data into different groups according to a 
 * property of each item. This key is a function that reckons
 * which part of the prop must be used. 
 * Ej. groupBy(data, prop, (item, prop) => item[prop][0], true)
 */
function groupBy(data, prop, key, desc=true) {
    if (key === null) key = (item, prop) => item[prop];
    const reducer = (groups, item) => reduceBy(groups, item, key(item, prop));
    const grouped = data.reduce(reducer, []);
    const listed = Object.values(grouped);
    return orderBy(listed, 'group', desc);
}

export { normalize, capitalize, truncate, initials, orderBy, groupBy };

