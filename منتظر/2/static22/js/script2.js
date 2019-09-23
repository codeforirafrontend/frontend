function getprice() {
    var gs=0;
    var gm=0;
    gs = parseFloat(document.getElementById("gs").value);
    gm = parseFloat(document.getElementById("gm").value);
    var x = gs * gm / 40 ;
    if((gs*4.25) >= 446.25 && gm > 0){
        document.getElementById("g18g").style.display = "block";
        document.getElementById("g18v").value = x;
    }else{
        document.getElementById("g18g").style.display = "block";
        document.getElementById("g18v").value = "لا تجوز الزكاة";
    }
}