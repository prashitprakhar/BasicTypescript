enum locationDetail {
    India, USA, UK
}

interface employeeDetails{
    name:string;
    age:number;
    location:locationDetail;
};


let employees: employeeDetails[] = [
    {name: "Rahul", age: 24, location: locationDetail.India},
    {name: "Prashit", age: 26, location:locationDetail.India},
    {name: "Mukesh", age: 28, location:locationDetail.UK},
    {name: "Ramesh", age: 23, location:locationDetail.USA}
];
/*
let moreEmployees: employeeDetails[] = [
    {name: "Prashit", age: 26, location:locationDetail.India},
    {name: "Mukesh", age: 28, location:locationDetail.UK},
    {name: "Ramesh", age: 23, location:locationDetail.USA}
];
*/
//moreEmployees.push(employees);

//console.log(employees.age);



function employeeInfo(employeeInfos: employeeDetails[]){
    employeeInfos.forEach(element => {
        //return "Name : "+element.name+". Age is : "+element.age+". Location is : "+element.location;    
        console.log("Name : "+element.name+". Age is : "+element.age+". Location is : "+element.location);    
    });
    
};

//console.log(employeeInfo(employees));
employeeInfo(employees)