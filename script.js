var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

menubtn.onclick = function(){
    if(sideNav.style.right == "-120px" ){
        sideNav.style.right = "0";
        menu.src = "close.png"
    }
    else{
        sideNav.style.right = "-120px";
        menu.src = "menu.png"
    }
}

var tl = gsap.timeline({scrollTrigger:{
trigger: ".banner",
start: "50% 50%",
end: "150% 50%",
scrub: "true",
markers:true,



}})
tl.to(".top",{
    y: "-20px"
},"a")
tl.to(".top",{
    y: "-20px"
},"a")
tl.to(".top",{
    y: "-20px"
},"a")

tl.from(".logo",{
    y: "-60px"
},"a")
tl.from("#menubtn",{
    y: "-60px"
},"a")