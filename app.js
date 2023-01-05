function noob(params) {

    let diceRotation = document.getElementById('dice');
    diceRotation.classList.add('animation');

    setTimeout(() => {
        let x=Math.floor(Math.random()*6);
        document.getElementById('number').innerHTML=x;

    diceRotation.classList.remove('animation');
        
        
    },2600);
    
   
   
}