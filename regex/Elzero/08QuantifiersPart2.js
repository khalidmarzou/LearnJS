/*
    Regular Expression

    Quantifies
    n{x} => Number of
    n{x,y} => Range
    n{x,} => At least x
*/

let serials = "S100S S3000S S50000S S950000S";

// Practice :
console.log(serials.match(/S\d{3}S/gi)); // S[Three Numbers]S
console.log(serials.match(/S\d{4,5}S/gi)); // S[four or five Numbers]S
console.log(serials.match(/S\d{4,}S/gi)); // S[At least Four Numbers]S
