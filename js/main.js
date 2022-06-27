// js normal expression
var report1 = function (val) {
    console.log(val);
}
// js constructor
var report2 = new Function("val", "console.log(val)");

report1("expression");
report2("constructor");

// report1 using as object
report1.userName = "Aman";
var report3 = report1;
report3.showUserName = function () {
    console.log(this.userName);
}
report3.showUserName();
report1.showUserName();