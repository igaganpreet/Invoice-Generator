const wash=document.getElementById("wash")
const mow=document.getElementById("mow")
const pullWeed=document.getElementById("pull-weed")
const sendInvoice=document.getElementById("send-invoice")

let noteEl=document.getElementById("note-el")
let tasks=document.getElementById("tasks")
let display=[];
let totalCost=document.getElementById("total-cost")

wash.addEventListener("click",function(){
    displayTask({task:"Wash Car",cost:10})
})
mow.addEventListener("click",function(){
    displayTask({task:"Mow Lawn",cost:20})
})
pullWeed.addEventListener("click",function(){
    displayTask({task:"Pull Weeds",cost:30})
})





function render(){
    let renderTask=""   
    if(display!=[]){
        for(let i=0;i<display.length;i++){
            renderTask+=`<div class="listTask"><p class="taskName">${display[i].task}</p><p class="taskCost">$${display[i].cost}</p></div>`
        }
    }
    noteEl.innerText="We accept cash, credit card, or PayPal"
    tasks.innerHTML=renderTask
    totalCost.innerText=`$${calculateTotal()}`
}


function calculateTotal(){
    let total=0;
    for(let i=0;i<display.length;i++){
        total+=display[i].cost
    }
    return total
}


function displayTask(obj){
    let count=0
    for(let i=0;i<display.length;i++){
        if(display[i].task===obj.task || display.length===0){
            count=1
        }
    }
    if(count===0){
        display.push(obj)
        render()
    }
}

sendInvoice.addEventListener("click",function(){
    display=[]
    render()
})