// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",()=>{
    const takeoffButton=document.getElementById("takeoff");
    const flightstatus = document.getElementById("flightStatus");
    const spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    let rockXPosition =0;
    let rockYPosition =0;
    takeoffButton.addEventListener("click",()=>{
        const shouldtakeoff=confirm("Confirm that the shuttle is ready for takeoff");
        if(shouldtakeoff){
            flightstatus.innerHTML = "Shuttle in flight";
            spaceShuttleHeight.innerHTML=10000;
            shuttleBackground.style.backgroundColor="blue";
        }
    });

     const landButton=document.getElementById("landing");
     landButton.addEventListener("click",()=>{
        alert("The shuttle is landing. Landing gear engaged");
        flightstatus.innerHTML =  "The shuttle has landed";
       reset();

     });
         
    const  abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener("click",()=>{
       const abortMission = confirm("Confirm that you want to abort the mission");
       if(abortMission){
        flightstatus.innerHTML =  "Mission aborted"
         reset();
       }
    });
    let height =0 ;
    const bckGroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
    const upButton =document.getElementById("up");
    upButton.addEventListener("click",()=>{
        if(height<250000){
        height +=10000;
        
        spaceShuttleHeight.innerHTML=height;
        rockYPosition+=10;
        rocket.style.marginBottom=rockYPosition+"px";
        }
    })
    const downButton =document.getElementById("down");
    downButton.addEventListener("click",()=>{
        if(height>0){
        height-=10000;
        spaceShuttleHeight.innerHTML=height;
        
        rockYPosition-=10;
        rocket.style.marginBottom=rockYPosition+"px";
        }
    })
    const rightButton =document.getElementById("right");
    rightButton.addEventListener("click",()=>{
       if(rockYPosition < (bckGroundWidth/2 - 40)){
        rockXPosition+=10;
        rocket.style.marginLeft=rockXPosition+"px";
       }

    })
    const leftButton =document.getElementById("left");
    leftButton.addEventListener("click",()=>{
        if(rockXPosition > - (bckGroundWidth/2 -40)){
        rockXPosition-=10;
        rocket.style.marginLeft=rockXPosition+"px";
        }
    })

function  reset(){
    rockYPosition=0;
    rockXPosition=0;
    shuttleBackground.style.backgroundColor="green";
        spaceShuttleHeight.innerHTML=0;
        rocket.style.marginBottom=rockYPosition+"px";
        rocket.style.marginLeft=rockXPosition+"px";
}   

});