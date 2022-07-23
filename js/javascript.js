//set opacity range default value


//access all id
let lg=document.getElementById("logo");
let vc=document.getElementById("video_choose");
let sv=document.getElementById("set_video");
let pl=document.getElementById("pls");
let myid=document.getElementById("myvideo");
let myid1=document.getElementById("myvideo1");

let prog=document.getElementById("bk_progress");
let prog1=document.getElementById("giveme");

let f=document.getElementById("forwords");
let bf=document.getElementById("backforwords");
let gps=document.getElementById("gpsp");

let bfs=document.getElementById("backfast");
let fv=document.getElementById("fast");

let screen=document.getElementById("fullscr");
let mnbox=document.getElementById("mainbox");



//center logo code
var a="upload";
lg.onclick=function(){
	if(a=="upload"){
		console.log("hello");
	vc.style.opacity="1";
	vc.style.marginLeft="21%";
	lg.style.transform="rotate3d(10, 47, 0, 55deg)";	
	a="notupload";
	}else{
		vc.style.opacity="0";
	vc.style.marginLeft="0%";
	lg.style.transform="none";
	a="upload";
	}
}
vc.onclick=function(){
	pl.style.display="flex";
	pl.style.zIndex="1";
}

//Playlist code
var b="show";

function playlist(){
	if(b=="show"){
		
	
	//lg.style.display="none";
	pl.style.display="flex";
	myid1.style.filter="blur(5px)";
	lg.style.zIndex="0";
	b="notshow";
	
	}else{
		
	//lg.style.display="flex";
	console.log("no");
	pl.style.display="none";
	myid1.style.filter="none";
	b="show";	
	
	}
}



function playvideos(){
	lg.style.display="none";
	pl.style.display="none";
	
	
	myid1.style.filter="none";
	//dura()
	b="show";
}



function playvideos1(){
	lg.style.display="none";
	pl.style.display="none";
	myid1.innerHTML=video_source1;
	
	myid1.style.filter="none";
	//dura()
	b="show";
	
}


//About codeo

var abouts=document.getElementById("about");
var sett=document.getElementById("settings");
	var key1=0;
sett.onclick=function(){
			   if(key1==0){
					abouts.style.display="grid"; 
					key1=1					
			   }   else{
					abouts.style.display="none"; 
					key1=0					
			   }
}
	


setInterval(()=>{
	
	var hor=document.getElementById("lfhr");
	var miin=document.getElementById("lfmin");
	var seec=document.getElementById("lfsec");
	
	let cutime=myid.currentTime;
	
	let scx=Math.floor(cutime);
	let minsq=Math.floor(cutime/60);
	
	let totalsec=minsq*60;
	let yuo=Math.floor(cutime-totalsec);
	
	if(yuo<10){
			 seec.innerHTML="0"+yuo;
			 
	}else{
		seec.innerHTML=yuo;
	}
	  if(minsq<10){
			  miin.innerHTML="0"+minsq;
	  }else{
		  miin.innerHTML=minsq;
	  }
	
	
	
	
});



 /*
function dura(){

	var op=Math.floor(myid.duration/60);
	var fg=op*60;
	
		document.getElementById("min").innerHTML=op;
	document.getElementById("sec").innerHTML=Math.floor(Math.floor(myid.duration-fg));


	
}
	 */
var c="pause";
function play_video(){




	if(c=="play"){
		document.getElementById("cn").innerHTML="<i class='fa-solid fa-pause'></i>";
		myid.play();
			prog.style.width=myid.currentTime*100/myid.duration;
		c="pause";
	}else{
	document.getElementById("cn").innerHTML="<i class='fa-solid fa-play'></i>";	
	myid.pause();
	c="play";
	}
	
}

setInterval(()=>{
prog.style.width=myid.currentTime*100/myid.duration+"%";
})

prog1.onclick=function(e){
	prog.style.width=e.offsetX*100/prog1.offsetWidth+"%";
	myid.currentTime=myid.duration*e.offsetX*100/prog1.offsetWidth/100;
	
}




f.onclick=function(){
	myid.currentTime=myid.currentTime+10;
	
}


bf.onclick=function(){
	myid.currentTime=myid.currentTime-10;
	
}
gps.onclick=function(){
	myid.currentTime=0;
	
}

document.getElementById("bps").value="0";
function volumefun(value){
myid.volume=value/100;

}
var videospeed=1;
bfs.onclick=function(){
	
	if(videospeed==1){
		myid.playbackRate=0.75;
		videospeed=0.75;
	}else if(videospeed==0.75){
		myid.playbackRate=0.5;
		videospeed=0.5;
		
	}else if(videospeed==1.25){
		myid.playbackRate=1;
		videospeed=1;
		
	}else if(videospeed==1.5){
		myid.playbackRate=1.25;
		videospeed=1.25;
	}else{
		console.log("back limit 0.5")
	}
	console.log("yes this is work")
}

var videofast=1;
fv.onclick=function(){
	if(videospeed==0.75){
		myid.playbackRate=1;
		videospeed=1;
	}else if(videospeed==0.5){
		myid.playbackRate=0.75;
		videospeed=0.75;
		
	}else if(videospeed==1){
		myid.playbackRate=1.25;
		videospeed=1.25;
	}else if(videospeed==1.25){
		myid.playbackRate=1.5;
		videospeed=1.5;
	}else{
		console.log("fast limit 1.5")
	}
	console.log("yes this is work 2")
}
var psp=0;
screen.onclick=function(){
	if(psp==0){
		mnbox.requestFullscreen();
		psp=1;
	}else{
		document.exitFullscreen();
		psp=0;
	}
	
	console.log("work");
	
}

document.getElementById("bps").value="100";
function city(cityvalue){
	mnbox.style.opacity=1*cityvalue/100;
	console.log(1*cityvalue/100)
}

var flt=document.getElementById("filter");
var boxflts=document.getElementById("boxflt");

var qq=0
flt.onclick=function(){
	if(qq==0){
		boxflts.style.display="flex";
		qq=1
	}else{
		boxflts.style.display="none";
		qq=0
	}
	
	console.log("yes this filter is work")
}

var p1=document.getElementById("ft1");
var p2=document.getElementById("ft2");
var p3=document.getElementById("ft3");
var p4=document.getElementById("ft4");
var p5=document.getElementById("ft5");
var p6=document.getElementById("ft6");

p1.onclick=function(){
	myid.style.filter="grayscale(1)";
	console.log("p1 work")
	
}
p2.onclick=function(){
	myid.style.filter="brightness(2)";
	console.log("p2 work")
	
}
p3.onclick=function(){
	myid.style.filter="sepia(1)";
	console.log("p3 work")
	
}
p4.onclick=function(){
	myid.style.filter="invert(1)";
	console.log("p4 work")
	
}
p5.onclick=function(){
	myid.style.filter="drop-shadow(0px 2px 18px red)";
	console.log("p5 work")
	
}
p6.onclick=function(){
	myid.style.filter="none";
	console.log("p5 work")
	
}

var urls=document.getElementById("urllink");
var urlvideos=document.getElementById("urlvideo");
var key=0
urllink.onclick=function(){
	if(key==0){
		urlvideos.style.display="flex";
		key=1
	} else{
		urlvideos.style.display="none";
		key=0
	}
	
}

var aaaps=document.getElementById("bhanu").textContent;
if(aaaps=="hello"){
lg.style.zIndex="-1";	
document.getElementById("cn").innerHTML="<i class='fa-solid fa-pause'></i>";
}
var but=document.getElementById("tackcam");
but.onclick=function(){

html2canvas(myid).then(canvas => {
	
    //document.getElementById("myid1").appendChild(canvas);
	let up=canvas.toDataURL("image/png");
	let cp=document.createElement("a");
	cp.setAttribute("href",up);
	cp.setAttribute("download","GomPhoto.png");
	cp.click();
	cp.remove();
	
	/*let cvs=document.querySelector("canvas");
	let ats=document.getElementById("at");
	ats.href=cvs.toDataURL();
	ats.download="bhanu.png";*/
	
});
	
}

setInterval(()=>{
	   	var video=document.getElementById("myvideo");
		
		
	   	var mt=document.getElementById("min");
	   	var sc=document.getElementById("sec");
		
		var mnts=Math.floor(video.duration/60);
		var mnts1=mnts*60;
		var total=Math.floor(video.duration-mnts1);
		
		if (mnts!=null){
			  if(mnts<10){
				   mt.innerHTML="0"+mnts;
			  }else{
				  mt.innerHTML=mnts;
			  }
			
			if(total<10){
				sc.innerHTML="0"+total;
		}else{
			   sc.innerHTML=total;
		}
			
			
			
			//clearInterval(id)
			
		}else{
			console.log("ffff");
		}

   });


