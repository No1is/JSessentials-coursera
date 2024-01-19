let userRole = "admin";

let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "limited access granted";
} else {
    accessLevel = "no access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "welcome, admin";
    } else {
        userMessage = "welcome, user";
    }
}else {
    userMessage = "please log in to access the system";
}

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "administrator";
        break;
    case "subscriber":
        userCategory = "subscriber";
        break;
    default:
        userCategory = "unknown";
}

console.log("user category:", userCategory);
