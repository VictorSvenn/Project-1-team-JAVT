function OpenOnClick1() {
    let x = document.getElementById(document.getElementsByClassName("content-to-show")[0].id);
    let y = document.getElementById("HD1");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "flex";            
            y.style.justifyContent = "flex-end";  
            y.style.transform = "rotate(180deg)"; 
        } else {
        x.style.display = "none";
        y.style.transform = "none"; 
        }
}

function OpenOnClick2() {
    let x = document.getElementById(document.getElementsByClassName("content-to-show")[1].id);
    let y = document.getElementById("HD2");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.transform = "rotate(180deg)";
        } else {
        x.style.display = "none";
        y.style.transform = "none"; 
        }
}

function OpenOnClick3() {
    let x = document.getElementById(document.getElementsByClassName("content-to-show")[2].id);
    let y = document.getElementById("HD3");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.transform = "rotate(180deg)"; 
        } else {
        x.style.display = "none";
        y.style.transform = "none"; 
        }
}

function OpenOnClick4() {
    let x = document.getElementById(document.getElementsByClassName("content-to-show")[3].id);
    let y = document.getElementById("HD4");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "flex";
            y.style.transform = "rotate(180deg)";         

        } else {
        x.style.display = "none";
        y.style.transform = "none"; 
        }
}

function OpenOnClick5() {
    let x = document.getElementById(document.getElementsByClassName("content-to-show")[4].id);
    let y = document.getElementById("HD5");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.transform = "rotate(180deg)"; 
        } else {
        x.style.display = "none";
        y.style.transform = "none"; 
        }
}