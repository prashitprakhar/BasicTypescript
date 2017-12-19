console.log("Hello World from VSC!!");

let a:number = 10;

enum generalInfo {
    India, USA, England
    }

let peopleInfo = {
    name: "Prashit",
    age: 26,
    location: "Hyderabad",
    citizen: generalInfo.India
};

let addMoreInfo = [
    {name: "Rahul", age:30, location: "Bangalore", citizen: generalInfo.England},
    {name: "Nilesh", age:26, location: "Pune", citizen: generalInfo.USA},
    {name: "Rahul", location: "Hyderabad", citizen: generalInfo.India}
];

addMoreInfo.push(peopleInfo);

for (let index = 0; index < addMoreInfo.length; index++) {
    const element = addMoreInfo[index];
    console.log(element);
    
};



//console.log(peopleInfo);
