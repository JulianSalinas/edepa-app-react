let rawData = [
    { name : 'Animals', id : '10'},
    { name : 'Batteries', id : '7'},
    { name : 'Baggage', id : '12' },
    { name : 'Cake', id : '7'},
];

const split = prop => (list, item) => {
    let group = item[prop][0];
    if(!list[group])
        list[group] = {group, children: [item]};
    else
        list[group].children.push(item);
    return list;
};

/**
 * @param prop Prop name to order the data
 * @param data Raw unformatted data
 * @returns {[{ group: string, children: array }]}
 */
export function splitByProp(prop, data){
    const formatted = data.reduce(split(prop), []);
    return Object.values(formatted);
}

// console.log(splitByProp('name', rawData));

const sort = prop => (a, b) => {
    if(a[prop] < b[prop]) { return -1; }
    if(a[prop] > b[prop]) { return 1; }
    return 0;
};

export function sortByProp(prop, data){
    data.sort(sort(prop));
    return data;
}