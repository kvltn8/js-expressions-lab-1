
const day1TempF= 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TemptC = 28;
const day9TempF =  68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day230TempC = 29;
// conversion formulas

const fToC =(f) => (f - 32) * 5/9;
const cToF =(c) => c *9/5 + 32;

//total temperatures in f
const tot_temperature_in_fahrenheit =
day1TempF + cToF(day2TempC) + day3TempF + cToF(day4TempC) + day5TempF + cToF(day6TempC) +
day7TempF + cToF(day8TemptC) + day9TempF + cToF(day10TempC) + day11TempF + cToF(day12TempC) +
 day13TempF + cToF(day14TempC) + day15TempF + cToF(day16TempC) + day17TempF + cToF(day18TempC) +
day19TempF+ cToF(day20TempC) + day21TempF + cToF(day22TempC) + day23TempF + cToF(day24TempC) + 
day25TempF + cToF(day26TempC) + day27TempF + cToF(day28TempC) + day29TempF + cToF(day230TempC);

//total temperatures
const tot_temperature_in_celsius=
    fToC(day1TempF) + day2TempC + fToC(day3TempF) + day4TempC + fToC(day5TempF) + day6TempC +
    fToC(day7TempF) + day8TemptC + fToC(day9TempF) + day10TempC + fToC(day11TempF) + day12TempC +
    fToC(day13TempF) + day14TempC + fToC(day15TempF) + day16TempC + fToC(day17TempF) + day18TempC +
    fToC(day19TempF) + day20TempC + fToC(day21TempF) + day22TempC + fToC(day23TempF) + day24TempC +
    fToC(day25TempF) + day26TempC + fToC(day27TempF) + day28TempC + fToC(day29TempF) + day230TempC;
//averages
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit/30;
const avg_temperature_in_celsius = tot_temperature_in_celsius/30;

console.log(avg_temperature_in_fahrenheit);
console.log(avg_temperature_in_celsius);
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};