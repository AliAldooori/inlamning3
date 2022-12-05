
const canvas = document.getElementById('canvas');
const knob_left = document.getElementById('knob-left');
const knob_right = document.getElementById('knob-right');

const context = canvas.getContext("2d");

 let x = canvas.width / 2
 let y = canvas.height / 2

let left_deg = 0
let right_deg =0

const move_to_posision = (e)=>{

    console.log(e.keyCode);
    // move to the right side ->
    if(e.keyCode === 39){
        x++
        turn_left_knob(1)
        draw()
    }
    
    // move to the left <-
    if(e.keyCode === 37){
        x--
        turn_left_knob(-1)
        draw()
    }
    
    // move up ^
    if(e.keyCode === 38){
        y--
        turn_right_knob(1)
        draw()
    }
    
    // move down v
    if(e.keyCode === 40){
        y++
        turn_right_knob(-1)
        draw()
    }
    
    
    // right + up (ctrl key)
    if(e.ctrlKey && e.keyCode === 39){
        x++
        y--
        turn_right_knob(1)
turn_left_knob(1)
        draw()
    }
    // right + down (alt key)
    if(e.altKey && e.keyCode === 39){
        x++
        y++
        turn_right_knob(1)
turn_left_knob(-1)
        draw()
    }
    // left + down (alt key)
    if(e.altKey && e.keyCode === 37){
        x--
        y++
        turn_right_knob(-1)
turn_left_knob(-1)
        draw()
    }
    // left + up (ctrl key)
    if(e.ctrlKey && e.keyCode === 37){
        x--
        y--
        turn_right_knob(1)
turn_left_knob(-1)
        draw()
    }
    
    // code 32 === space to clear all 
    if(e.keyCode === 32){
        clear()
    }
}

const clear = () =>{
    context.clearRect(0,0,canvas.width, canvas.height)
}

const draw = ()=>{ // function 
    context.beginPath()
    context.lineTo(x, y)
    context.stroke()
    context.lineWidth = 5
    context.lineCap = 'round'
}

const turn_right_knob = (cw)=>{
    if(cw === -1){
        right_deg += 10
    }else
    {
        right_deg -= 10
    }
    knob_right.style.transform = `rotate(${right_deg}deg)`
}
const turn_left_knob = (cw)=>{
    if(cw === -1){
        left_deg += 10
    }else
    {
        left_deg -= 10
    }
    knob_left.style.transform = `rotate(${left_deg}deg)`
}

document.addEventListener('keydown', move_to_posision, false)