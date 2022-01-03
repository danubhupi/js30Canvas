const canvas=document.getElementById('draw');
const ctx=canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

ctx.width=window.innerWidth;
ctx.height=window.innerHeight;
//ctx.strokeStyle="green";
 ctx.lineWidth=100;
 ctx.lineCap="round";
 ctx.lineJoin='round';

 let drawing=false;
 let lastX=0;
 let lastY=0;
 let hue=0;
 let s=70;
 let l=30;
 let direction=false;


 draw=(e)=>{
    if(!drawing)return;
     console.log(e);
     ctx.strokeStyle=`hsl(${hue},${s}%,${l}%)`;
    // ctx.strokeStyle=`hsl(${hue},100%,70%)`;

     ctx.beginPath();
     ctx.moveTo(lastX,lastY);
     ctx.lineTo(e.offsetX,e.offsetY);
     ctx.stroke();
     [lastX,lastY]=[e.offsetX,e.offsetY];

     if(hue>360){
         hue=0;
     }
     if(s>99){s=Math.random()*100;}
     if(l>80){l=Math.random()*100;}
     if(ctx.lineWidth>100 || ctx.lineWidth<10){
         direction=!direction;
     }
     if(!direction)
     {ctx.lineWidth++;
    }else{ctx.lineWidth--;} 
     hue++;
     s++;
     l++;

 }

 canvas.addEventListener('mousemove',draw);
 canvas.addEventListener('mousedown',(e)=>{
     drawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
 })
 canvas.addEventListener('mouseup',()=>{
     drawing=false;
 })
 canvas.addEventListener('mouseout',()=>{
    drawing=false;
})