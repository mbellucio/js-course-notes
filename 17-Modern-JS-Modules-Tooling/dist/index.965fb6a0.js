var budget = [
    {
        value: 250,
        description: "Sold old TV \uD83D\uDCFA",
        user: "jonas"
    },
    {
        value: -45,
        description: "Groceries \uD83E\uDD51",
        user: "jonas"
    },
    {
        value: 3500,
        description: "Monthly salary \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: 300,
        description: "Freelancing \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: -1100,
        description: "New iPhone \uD83D\uDCF1",
        user: "jonas"
    },
    {
        value: -20,
        description: "Candy \uD83C\uDF6D",
        user: "matilda"
    },
    {
        value: -125,
        description: "Toys \uD83D\uDE82",
        user: "matilda"
    },
    {
        value: -1800,
        description: "New Laptop \uD83D\uDCBB",
        user: "jonas"
    }
];
var limits = {
    jonas: 1500,
    matilda: 100
};
var add = function(value, description, user) {
    if (!user) user = "jonas";
    user = user.toLowerCase();
    var lim;
    if (limits[user]) lim = limits[user];
    else lim = 0;
    if (value <= lim) budget.push({
        value: -value,
        description: description,
        user: user
    });
};
add(10, "Pizza \uD83C\uDF55");
add(100, "Going to movies \uD83C\uDF7F", "Matilda");
add(200, "Stuff", "Jay");
console.log(budget);
var check = function() {
    for (var el of budget){
        var lim;
        if (limits[el.user]) lim = limits[el.user];
        else lim = 0;
        if (el.value < -lim) el.flag = "limit";
    }
};
check();
console.log(budget);
var bigExpenses = function(limit) {
    var output = "";
    for (var el of budget)if (el.value <= -limit) output += el.description.slice(-2) + " / "; // Emojis are 2 chars
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};
// ==================== Writing Clean and Modern JS ==================== //
console.log("");
console.log("=====================================");
console.log("==== Writing Clean and Modern JS ====");
console.log("=====================================");

//# sourceMappingURL=index.965fb6a0.js.map
