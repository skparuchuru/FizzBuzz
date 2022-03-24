// FizzBuzz Application for BestBuy 

const array = ["1","3","5"," " ,"15", "A","23"]

for (const element of array) {
    if(element==1){console.log('Divided 1 by 3 Divided 1 by 5')}
    else if(element%3==0 && element%5!=0){console.log('fizz')}
    else if(element%3!=0 &&element%5==0){console.log('buzz')}
    else if(element==" "){console.log('Invalid Item')}
    else if(element%3==0 && element%5==0){console.log('fizz buzz')}
    else if(element == "A"){console.log('Invalid Item')}
    else if(element==23){console.log('Divided 23 by 3 Divided 23 by 5')}
  }