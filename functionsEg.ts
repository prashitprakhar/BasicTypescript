//Anonymous Functions
let fullName = function(fname:string, lname:string){
    console.log("Full Name is "+fname+" "+lname);
}

fullName("Prashit", "Prakhar");

//Lambda or Arrow Functions

let address = (sno:number, apptName:string)=>{console.log("Street No. is :"+sno+" & Appartment name is : "+apptName);}

address(24, "Regent Park");