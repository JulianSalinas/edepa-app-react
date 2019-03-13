function hashCode(key){
    let hash = 0, i, chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
        chr   = key.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

export function hashColor(key, colors){
    const value = Math.abs(hashCode(key));
    return colors.length > 0 ? colors[value % colors.length] : 0;
}