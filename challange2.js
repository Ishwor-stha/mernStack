let johnHeight=1.76,
johnWeight=85,
markHeight=1.88,
markWeight=95
let johnBmi=johnWeight/(johnHeight**2),
markBmi=markWeight/(markHeight**2)
let markHigherBMI=(markBmi>johnBmi)?`Mark's BMI ${markBmi} is higher than John's ${johnBmi}! `:`John's ${johnBmi} is higher than Marks's ${markBmi}!  `
 console.log(markHigherBMI)
