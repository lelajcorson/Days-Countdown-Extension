if(typeof(document) !== "undefined"){
    function show(){
        var text2 = document.getElementById("text2");
        text2.style.display = "block";
        console.log("Hiiiii");
    }
    
    let btn = document.getElementById("testButton");
    
    btn.addEventListener("click", show);
}

