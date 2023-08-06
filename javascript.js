
function check(){
    var select = document.querySelector('input[name="pair1"]:checked').value;
    if(select == "pair1") { 
        document.getElementById('size_color').style.display = "flex";
        document.getElementById('divpair1').style.borderBottom = "0px solid #FFFFFF";
        console.log("utpal");
     }
    else { 
        console.log("eroor in pair1"); 
    }
}

function checkPair2(){
    var select = document.querySelector('input[name="pair2"]:checked').value;
    if(select == "pair2") { 
        document.getElementById('size_color_pair2').style.display = "flex";
        document.getElementById('Pair2').style.borderBottom = "0px solid #FFFFFF";
        console.log("Pair2");
     }
    else { 
        console.log("error in pair2"); 
    }
}

function checkPair3(){
    var select = document.querySelector('input[name="pair3"]:checked').value;
    if(select == "pair3") { 
        document.getElementById('size_color_pair3').style.display = "flex";
        document.getElementById('Pair3').style.borderBottom = "0px solid #FFFFFF";
        console.log("Pair2");
     }
    else { 
        console.log("error in pair3"); 
    }
}