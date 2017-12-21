console.log("Hello World from VSC!!");
var a = 10;
var generalInfo;
(function (generalInfo) {
    generalInfo[generalInfo["India"] = 0] = "India";
    generalInfo[generalInfo["USA"] = 1] = "USA";
    generalInfo[generalInfo["England"] = 2] = "England";
})(generalInfo || (generalInfo = {}));
var peopleInfo = {
    name: "Prashit",
    age: 26,
    location: "Hyderabad",
    citizen: generalInfo.India
};
var addMoreInfo = [
    { name: "Rahul", age: 30, location: "Bangalore", citizen: generalInfo.England },
    { name: "Nilesh", age: 26, location: "Pune", citizen: generalInfo.USA },
    { name: "Rahul", location: "Hyderabad", citizen: generalInfo.India }
];
addMoreInfo.push(peopleInfo);
/*
for (let index = 0; index < addMoreInfo.length; index++) {
    const element = addMoreInfo[index];
    console.log(element);
    
}; */
function peopleInformation(info) {
    info.forEach(function (element) {
        console.log("Name is" + element.name + " Age is : " + element.age);
    });
}
;
peopleInformation(peopleInfo);
//console.log(peopleInfo);
//# sourceMappingURL=arrayEnums.js.map