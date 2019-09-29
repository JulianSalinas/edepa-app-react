/**
 * Returns always the same value for a given key
 */
function hash(key){
    let hash = 0, i, chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
        chr   = key.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

/**
 * Returns always the same color for a given key and set of colors 
 */
function colorFor(key, colors){
    const value = Math.abs(hash(key));
    return colors.length > 0 ? colors[value % colors.length] : 0;
}

/**
 * Converts a rgb color to its equivalent in hexadecimal
 * Ej. 'color(21, 32, 43)' => '#15202b'
 */
function rgbToHex(color) {
    const regex = /[0-9]+/g;
    const reducer =(a, b) => a + (b | 256).toString(16).slice(1); 
    return color.match(regex).reduce(reducer, '#');
}

/**
 * Adds or substracts a percentaje of light to the given color
 * Used just by lighten and darken function
 */
function fixLight(color, amount){
    const limit = amount >= 0 ? 255 : 0;
    let cc = parseInt(color, 16) + amount;
    let c = cc > limit ? limit : cc;
    return (c.toString(16).length > 1) ? c.toString(16) : `0${c.toString(16)}`;
};

/**
 * Lighten a hex color according to the given percentage
 */
function lighten(color, amount) {
    color = (color.indexOf('#') >= 0) ? color.substring(1,color.length) : color;
    amount = parseInt((255 * amount) / 100);
    const h = fixLight(color.substring(0,2), amount);
    const e = fixLight(color.substring(2,4), amount);
    const x = fixLight(color.substring(4,6), amount);
    return `#${h}${e}${x}`;
};

/**
 * Darken a hex color according to the given percentage
 */
function darken(color, amount) {
    color = (color.indexOf('#') >= 0) ? color.substring(1,color.length) : color;
    amount = parseInt((255 * amount) / 100) * - 1;
    const h = fixLight(color.substring(0,2), amount);
    const e = fixLight(color.substring(2,4), amount);
    const x = fixLight(color.substring(4,6), amount);
    return `#${h}${e}${x}`;
};

/**
 * Creates a gradient with two hex colors
 */
function gradient(top, bottom){
    return `linear-gradient(to bottom right, ${top}, ${bottom})`;
}

export { rgbToHex, colorFor, lighten, darken, gradient };
