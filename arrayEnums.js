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
for (var index = 0; index < addMoreInfo.length; index++) {
    var element = addMoreInfo[index];
    console.log(element);
}
;
//console.log(peopleInfo);
//# sourceMappingURL=arrayEnums.js.map