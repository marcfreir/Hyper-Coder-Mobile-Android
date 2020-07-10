//Homeworks
var homeworkHistory = 8.0;
var homeworkMath = 7.0;
var homeworkScience = 10;
var homeworkGeography = 9.5;

var totalHomeworks = 4;

var average = (homeworkHistory + homeworkMath + homeworkScience + homeworkGeography) / totalHomeworks;

console.log(average);

//With object
var homeworks = {history: 8.0, math: 7.0, science: 10, geography: 9.5};
var avg = (homeworks.history + homeworks.math + homeworks.science + homeworks.geography) / totalHomeworks;

console.log(avg);