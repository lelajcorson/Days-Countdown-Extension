var btn = document.getElementById("testButton");

function show(){
    var text2 = document.getElementById("text2");
    text2.style.display = "block";
    console.log("Hiiiii");
}

btn.addEventListener("click", show);
