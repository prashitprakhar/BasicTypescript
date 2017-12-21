var locationDetail;
(function (locationDetail) {
    locationDetail[locationDetail["India"] = 0] = "India";
    locationDetail[locationDetail["USA"] = 1] = "USA";
    locationDetail[locationDetail["UK"] = 2] = "UK";
})(locationDetail || (locationDetail = {}));
;
var employees = [
    { name: "Rahul", age: 24, location: locationDetail.India },
    { name: "Prashit", age: 26, location: locationDetail.India },
    { name: "Mukesh", age: 28, location: locationDetail.UK },
    { name: "Ramesh", age: 23, location: locationDetail.USA }
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
function employeeInfo(employeeInfos) {
    employeeInfos.forEach(function (element) {
        //return "Name : "+element.name+". Age is : "+element.age+". Location is : "+element.location;    
        console.log("Name : " + element.name + ". Age is : " + element.age + ". Location is : " + element.location);
    });
}
;
//console.log(employeeInfo(employees));
employeeInfo(employees);
//# sourceMappingURL=interfaceEg.js.map