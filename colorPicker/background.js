function Color()
{
    let r = document.getElementById("redRange").value;
    let g = document.getElementById("greenRange").value;
    let b = document.getElementById("blueRange").value;
    let boxRGB= document.getElementById("inner_cont");
    boxRGB.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    var txt= document.getElementById("rgb_txt");
    txt.innerHTML="RGB("+r+","+g+","+b+")";
}

