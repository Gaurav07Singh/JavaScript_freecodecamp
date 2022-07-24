//document.getElementById("count-el").innerText=5;
//document.getElementById("count-el").style.backgroundColor="red";


// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when thebutton is clicked

let count = 0;

function increment() {
count += 1;
document.getElementById("count-el").innerText=count;

};

function decrement() {
    count -=1;
    document.getElementById("count-el").innerText=count;
}

function reset() {
    count = 0;
    document.getElementById("count-el").innerText=count;
}

