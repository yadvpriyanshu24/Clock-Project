let hr=document.getElementById('hours');
let min=document.getElementById('mins');
let sec=document.getElementById('secs');

function displaytime(){
    let date=new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    //use formula to rotate the hours , mins and secs clock

    let hrotation=30*hh + mm/2;
    let mrotation=6*mm;
    let srotation=6*ss;

    //this will use the style which has implemented in the code
    hr.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
}

setInterval(displaytime , 1000) // this setinterval display function - displaytime every 1000 mili seconds