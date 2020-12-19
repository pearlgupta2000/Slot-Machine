
let val1=document.getElementById('value1')
let val2=document.getElementById('value2')
let val3=document.getElementById('value3')
let score_val=document.getElementById('score_val')
let inpSpeed=document.getElementById('inpSpeed')
let s_btn=$('#start')
let stop_btn=$('#stop')

let values=['😡','😭','😛','😁','🎅','🤣','😎','🤢' ]

function getRandomVal(){
    return values[Math.floor(Math.random() * 8)]
}

let animation;
function updateAnimation(newSpeed){
    if(animation) clearInterval(animation)

    animation=setInterval(()=>{
        val1.innerText=getRandomVal()
        val2.innerText=getRandomVal()
        val3.innerText=getRandomVal()
    },(1000/newSpeed))
}

inpSpeed.onchange = function(ev){
    // console.log("changed" , ev.target.value)

    // document.documentElement ==> this is :root of css
    document.documentElement.style.setProperty('--speed',ev.target.value)
    updateAnimation(ev.target.value)
}

s_btn.click(()=>{
    score_val.innerText=""
    let val=getComputedStyle(document.body).getPropertyValue('--speed');
    if(val1.style.animationIterationCount=="0"){
        val1.style.animationIterationCount="infinite"
        val2.style.animationIterationCount="infinite"
        val3.style.animationIterationCount="infinite"
    }
    updateAnimation(val)
})

stop_btn.click(()=>{
    if(animation) clearInterval(animation)
    let v1=val1.innerText
    let v2=val2.innerText
    let v3=val3.innerText
    
    val1.style.animationIterationCount="0"
    val2.style.animationIterationCount="0"
    val3.style.animationIterationCount="0"

    if(v1==v2 && v2==v3){
        score_val.innerHTML="<b>YOU WIN</b>"
    }
    else{
        score_val.innerHTML="<b>YOU LOST</b>"
    }

})