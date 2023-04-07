// code your solution here
function saturdayFun (activity = "roller-skate"){
   return (`This Saturday, I want to ${activity}!`);
}
const mondayWork = function(task = "go to the office"){
    return (`This Monday, I will ${task}.`);
}
function wrapAdjective(string="*"){
    return function (value = "special"){
        return (`You are ${string}${value}${string}!`);
    }
}
wrapAdjective("||")("a dedicated programmer!");