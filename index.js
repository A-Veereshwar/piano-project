var numberOfKeys = document.querySelectorAll(".key").length;
//Keys on Screen Click
for(var i=0;i<numberOfKeys;i++){
    document.querySelectorAll(".key")[i].addEventListener("click",function()
    {
        var keyAlphaValue = this.innerHTML;
        tuneOutput(keyAlphaValue);
        buttonAnimation(keyAlphaValue);
    })
}
//Keys on KeyBoard Click
document.addEventListener("keypress",function(event){
    var keyPressed = event.key;
    tuneOutput(keyPressed);
    buttonAnimation(keyPressed);
})
//24 different Tune sounds
function tuneOutput(key){
    switch(key){
        case "q":
            var qTune = new Audio("tunes/key01.mp3");
            qTune.play();
            break;

        case "w":
            var wTune = new Audio("tunes/key02.mp3");
            wTune.play();
            break;

        case "e":
            var eTune = new Audio("tunes/key03.mp3");
            eTune.play();
            break;

        case "r":
            var rTune = new Audio("tunes/key04.mp3");
            rTune.play();
            break;

        case "t":
            var tTune = new Audio("tunes/key05.mp3");
            tTune.play();
            break;
        case "u":
            var uTune = new Audio("tunes/key06.mp3");
            uTune.play();
            break;

        case "i":
            var iTune = new Audio("tunes/key07.mp3");
            iTune.play();
            break;

        case "o":
            var oTune = new Audio("tunes/key08.mp3");
            oTune.play();
            break;

        case "p":
            var pTune = new Audio("tunes/key09.mp3");
            pTune.play();
            break;

        case "a":
            var aTune = new Audio("tunes/key10.mp3");
            aTune.play();
            break;

        case "s":
            var sTune = new Audio("tunes/key11.mp3");
            sTune.play();
            break;

        case "d":
            var dTune = new Audio("tunes/key12.mp3");
            dTune.play();
            break;

        case "f":
            var fTune = new Audio("tunes/key13.mp3");
            fTune.play();
            break;

        case "g":
            var gTune = new Audio("tunes/key14.mp3");
            gTune.play();
            break;

        case "h":
            var hTune = new Audio("tunes/key15.mp3");
            hTune.play();
            break;

        case "j":
            var jTune = new Audio("tunes/key16.mp3");
            jTune.play();
            break;

        case "k":
            var kTune = new Audio("tunes/key17.mp3");
            kTune.play();
            break;

        case "l":
            var lTune = new Audio("tunes/key18.mp3");
            lTune.play();
            break;

        case "z":
            var zTune = new Audio("tunes/key19.mp3");
            zTune.play();
            break;

        case "x":
            var xTune = new Audio("tunes/key20.mp3");
            xTune.play();
            break;

        case "c":
            var cTune = new Audio("tunes/key21.mp3");
            cTune.play();
            break;

        case "v":
            var vTune = new Audio("tunes/key22.mp3");
            vTune.play();
            break;

        case "n":
            var nTune = new Audio("tunes/key23.mp3");
            nTune.play();
            break;

        case "m":
            var mTune = new Audio("tunes/key24.mp3");
            mTune.play();
            break;

        default:;
    }
}
function buttonAnimation(key){
    var clickedBtn = document.querySelector("."+key);
    clickedBtn.classList.add("active");

    setTimeout(function(){
        clickedBtn.classList.remove("active");
    },100);
}
