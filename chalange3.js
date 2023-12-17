let teamDolphin=[96,108,100]
let teamKolas=[110,91,88]
let minimumScore=100;
let averageDolphin=(teamDolphin[0]+teamDolphin[1]+teamDolphin[2])/3
let averageKolas=(teamKolas[0]+teamKolas[1]+teamKolas[2])/3
console.log(averageDolphin)
console.log(averageKolas)
if(averageDolphin>averageKolas && averageDolphin>=minimumScore){
	console.log(`Congratulation Dolphins your score is ${averageDolphin} and you won the trophy`)

}
else if(averageDolphin<averageKolas && averageKolas>=minimumScore){
	console.log(`Congratulation Kolas your score is ${averageKolas} and you won the trophy`)

}
else if(averageDolphin===averageKolas && averageDolphin>=minimumScore){
	console.log(`The match is draw and the average score is${averageDolphin}`)

}
else{
	
	console.log(`To be qualified for trofy or draw you must reach minimum score of ${minimumScore}`)

}

