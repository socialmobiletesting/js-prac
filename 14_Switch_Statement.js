day = "Monday";

switch(day){
    case "Monday":
        console.log("7 am");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("9 am");
        break;
    case "Friday":
        console.log("10 am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("All day");
        break;
    default:
        console.log("No Alarm"); // if day variable value doesn't match any
}