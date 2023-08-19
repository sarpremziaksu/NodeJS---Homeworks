const arguments = process.argv.slice(2);

const pi = 3.14;

function circleArea(r){
    let alan = pi * Math.pow(r,2);
    console.log(`Yarı çapı ${r} olan dairenin alanı ${parseFloat(alan.toFixed(2))} idir.`);
}

function circleCircumference(r){
    let cevre = 2 * pi * r;
    console.log(`Yarı çapı ${r} olan dairenin çevresi ${parseFloat(cevre.toFixed(2))} idir.`) ; 
}


module.exports = {
    circleArea, circleCircumference
}