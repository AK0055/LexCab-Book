var tl = new TimelineMax({}),
    density = 30,
		speed = 1,
    rocket = document.getElementById("rocket");
        fly();
        clear();
        seedsmoke();
        seedsmokeback();
        seedwind();
        animflame();
    
function setdefaultplace()
{  
        TweenMax.set(rocket, {y:510, opacity:1})
      }
function thrill(){
  TweenMax.to(rocket, 0.05, {
    y:'+=4',
    x:'+=4',
    repeat:-1,
    yoyo:true
  })}
function fly(){
  setdefaultplace(),
  thrill(),
  TweenMax.to(rocket, 1, {y:0});
  }
function seedsmoke() {
  var i, size = (8+ Math.random()),  time = (1* Math.random()), delay = (0.1 + Math.random()), size3=(0);
  for (i = 0; i < 25; i++)
  {  $("<div/>", {id:"smokefront"+i}).addClass("smokefront").appendTo("#smokefrontplace");
  if (i<14) {size3=(i+1 + Math.random())} else {size3=(25-i + Math.random())}
  TweenMax.to(("#smokefront"+i),(size3+2)/16,{scaleX:size3, scaleY:size3, opacity:0,  repeat:-1, repeatDelay:0.1, ease:Linear.easeNone} )

}; }
function seedsmokeback() {
  var i, size = (8+ Math.random()),  time = (1* Math.random()), delay = (0.1 + Math.random()), size3=(0);
  for (i = 0; i < 10; i++)
  {  $("<div/>", {id:"smokeback"+i}).addClass("smokeback").appendTo("#smokebackplace");
  if (i<5) {size3=(i+2 + Math.random())*2} else {size3=(10-i + Math.random())*2}
  TweenMax.set ((".smokeback"), {opacity:0.4})
  TweenMax.to(("#smokeback"+i),(size3+2)/2,{scaleX:size3, scaleY:size3, opacity:0,  repeat:-1, repeatDelay:0.1, ease:Linear.easeNone} )

}; }
function seedwind(){
  var i;
  for (i = 0; i < 8; i++)
  {  $("<div/>", {id:"wind"+i,style:"margin-left=20px"}).addClass("wind").appendTo("#windplace");
    TweenMax.from(("#wind"+i),0.5,{y:-500-((5+Math.random())*2),  scaleY:10-(Math.random()*120), opacity:.4,  repeat:-1, repeatDelay:(0.1+Math.random())/2, ease:Linear.easeNone} )
  };

  }
function clear (){
  $( ".smokefront,.smokeback,.wind").remove();
  }

function animflame(){
TweenMax.to((".cls-3"),0.2,{y:80,opacity:1, repeat:-1, repeatDelay:0.1, ease:Linear.easeNone})
TweenMax.to((".cls-1"),0.2,{fill:"rgb(248,143,7)",opacity:1, repeat:-1, repeatDelay:0.1, ease:Power3.easeOut,yoyo:true})
}