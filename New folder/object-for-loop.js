const bottol = {color : 'yellow',hold:'water',price:50,isCleaned:true};
for(const prop in bottol){
    // to get all the property name only 
    // console.log(prop);
    // to get all the values of property only 
    // console.log(bottol[prop]);
    console.log(prop,bottol[prop]);
}

const keys = Object.keys(bottol);
for(const prop of keys){
    console.log(prop, bottol[prop]);
}
