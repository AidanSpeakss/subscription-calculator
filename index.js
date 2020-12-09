var subscriptionNames = [];
var subscriptionCosts = [];
var numSubscriptions = -1;
var html = "";

function SubscriptionCalc(){
    document.getElementById("calc").innerHTML = "";
    var num = subscriptionCosts.length - 1;
    var subscriptionTotal = 0;
    while(num > -1){
        subscriptionTotal += Number(subscriptionCosts[num]);
        num--;
    }

    if(!subscriptionTotal || subscriptionTotal.isNaN){
        alert("Total cost could not be calculated, please make sure all of your subscription costs have been entered correctly, and try again.");
        num = -1;
    } else {
        var ul = document.getElementById("calc");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Total per month: $" + subscriptionTotal));
        ul.appendChild(li);

        li = document.createElement("li");
        li.appendChild(document.createTextNode("Total per year: $" + subscriptionTotal * 12));
        ul.appendChild(li);
    }


}

function AddSubscription(){
    var name = prompt("What's the name of the subscription?");
    var cost = prompt("How much does " + name + " cost a month?");
    subscriptionNames.push(name);
    subscriptionCosts.push(cost);
    numSubscriptions++;
    html += '<div class="subscription" id="' + numSubscriptions + '">' + '<textarea onchange="updateSubs(' + numSubscriptions + ' ,\'name\');" class="name">' + name + '</textarea>' + '<textarea onchange="updateSubs(' + numSubscriptions + ',\'cost\');" class="cost">' + cost + '</textarea>';
    document.getElementById("subscriptionArea").innerHTML = html;
}

function updateSubs(index, type){

 if(type == "name"){
     var ele = document.getElementById(index).getElementsByClassName("name")[0];
     subscriptionNames[index] = ele.value;
     ele.innerHTML = '<textarea onchange="updateSubs(' + index + ',' + subscriptionNames[index] + ');" class="name">' + subscriptionNames[index] + '</textarea>';
 }
 if(type == "cost"){
     var ele = document.getElementById(index).getElementsByClassName("cost")[0];
     subscriptionCosts[index] = ele.value;
     ele.innerHTML = '<textarea onchange="updateSubs(' + index + ',' + subscriptionCosts[index] + ');" class="cost">' + subscriptionCosts[index] + '</textarea>';
 }

}


