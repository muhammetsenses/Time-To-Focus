
function myFunction(){
    let number = parseInt(document.getElementById("focusNumber").innerHTML);
    document.getElementById("focusNumber").innerHTML = ++number;
   


    if(number === 5){
        alert("Ders Çalışmaya Başladığından beri 5 kere telefona baktın. Kahve içmeye ihtiyacın olabilir.");
    }else if(number ===10){
        alert("Ders Çalışmaya Başladığından beri 10 kere telefona baktın. Biraz motivasyon videosu izlemeye ne dersin.");
        document.getElementById("movie").style.display="block";
    }else if(number === 15) {
        audioRelax.play();
        relaxButton.className = "fa-solid fa-pause icon-feature";
        alert("Biraz sakin bir müzik dinlemeye ne dersin");
    }else if(number <=16 ){
        audioRelax.pause();
        relaxButton.className = "fa-solid fa-dove icon-feature" ;
    }else if(number ===20){
        audioEnergetic.play();
        energeticButton.className = "fa-solid fa-pause icon-feature";
        alert("Biraz enerji dolu bir şarkı dinlesek fena olmaz.");
    }else if(number <=21){
        audioEnergetic.pause();
        energeticButton.className = "fa-solid fa-bolt icon-feature" ;
    }else if(number >=25){
        gameOver.play();
        alert("Uyku vaktin gelmiş olabilir.")
    }
}

let audioRelax = document.getElementById("relaxAudio");
let relaxButton = document.getElementById("relaxButton");
let audioEnergetic = document.getElementById("energeticAudio");
let energeticButton = document.getElementById("energeticButton");
let gameOver = document.getElementById("gameOver");


relaxButton.addEventListener("click", function(){
    if (audioRelax.paused) {
        audioRelax.play();
        relaxButton.className = "fa-solid fa-pause icon-feature";
    }else {
        audioRelax.pause();
        relaxButton.className = "fa-solid fa-dove icon-feature" ;
    }
} )

energeticButton.addEventListener("click",function(){
    if (audioEnergetic.paused){
        audioEnergetic.play();
        energeticButton.className = "fa-solid fa-pause icon-feature";
    }else{
        audioEnergetic.pause();
        energeticButton.className = "fa-solid fa-bolt icon-feature" ;
    }
})


   
        

        


    


    









