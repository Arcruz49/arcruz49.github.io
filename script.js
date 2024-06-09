function yes(){
    document.getElementById("container").style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("cat").classList.remove("hidden");
    var audio = document.getElementById("audio");
    audio.play();
}

function no(){
    document.getElementById("container").style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("ryan").classList.remove("hidden");
}