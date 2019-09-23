function getprice() {
    var g18=0;
    var g21=0;
    var g22=0;
    var g24=0;


    g18 = parseFloat(document.getElementById("g18").value);
    if(g18>0){
        if(g18 >= 63.75){
            g18 = (g18 * 18) / 24 / 40 ; 
            document.getElementById("g18g").style.display = "block";
            document.getElementById("g18v").value = g18;
        }else{
            document.getElementById("g18g").style.display = "block";
            document.getElementById("g18v").value = "لا تجوز الزكاة";
        }
    }
    
    g21 = parseFloat(document.getElementById("g21").value);
    if(g21 > 0){
        if(g21 >= 63.75){
            g21 = (g21 * 21) / 24 / 40 ; 
            document.getElementById("g21g").style.display = "block";
            document.getElementById("g21v").value = g21;
        }else{
            document.getElementById("g21g").style.display = "block";
            document.getElementById("g21v").value = "لا تجوز الزكاة";
        }
    }
    
    g22 = parseFloat(document.getElementById("g22").value);
    if(g22>0){
        if(g22 >= 63.75){
            g22 = (g22 * 22) / 24 / 40 ; 
            document.getElementById("g22g").style.display = "block";
            document.getElementById("g22v").value = g22;
        }else{
            document.getElementById("g22g").style.display = "block";
            document.getElementById("g22v").value = "لا تجوز الزكاة";
        }
    }
    
    g24 = parseFloat(document.getElementById("g24").value);
    if(g24>0){
        if(g24 >= 63.75){
            g24 = (g24 * 24) / 24 / 40 ; 
            document.getElementById("g24g").style.display = "block";
            document.getElementById("g24v").value = g24;
        }else{
            document.getElementById("g24g").style.display = "block";
            document.getElementById("g24v").value = "لا تجوز الزكاة";
        }
    }
    
    
    
    
    
    
    
}