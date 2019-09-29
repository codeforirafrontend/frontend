function getprice_f() {

    var tbk_kg=0;
    var tbk_price=0;
    tbk_kg = parseFloat(document.getElementById("tbk-kg").value);
    tbk_price = parseFloat(document.getElementById("tbk-price").value);
    if(tbk_kg > 0)
    {
        if(tbk_kg<847)
        {
            document.getElementById("tbk").style.display = "block";
            document.getElementById("tbkv").value = "لا تجوز الزكاة";
        }else{
            var x = (tbk_kg * tbk_price);
            document.getElementById("tbk").style.display = "block";
            document.getElementById("tbkv").value = x * 0.05;
        }
    }
   
    var tbbk_kg=0;
    var tbbk_price=0;
    tbbk_kg = parseFloat(document.getElementById("tbbk-kg").value);
    tbbk_price = parseFloat(document.getElementById("tbbk-price").value);
    if(tbbk_kg > 0){
        if(tbbk_kg<847)
        {
            document.getElementById("tbbk").style.display = "block";
            document.getElementById("tbbkv").value = "لا تجوز الزكاة";
        }else{
            var x = (tbbk_kg * tbbk_price);
            document.getElementById("tbbk").style.display = "block";
            document.getElementById("tbbkv").value = x * 0.1;
        }
    }

    var tm_kg=0;
    var tm_price=0;
    tm_kg = parseFloat(document.getElementById("tm-kg").value);
    tm_price = parseFloat(document.getElementById("tm-price").value);
    if(tm_kg > 0){
        if(tm_kg<847)
        {
            document.getElementById("tm").style.display = "block";
            document.getElementById("tmv").value = "لا تجوز الزكاة";
        }else{
            var x = (tm_kg * tm_price);
            document.getElementById("tm").style.display = "block";
            document.getElementById("tmv").value = x * 0.075;
        }
    }
    
}

function getprice_g() {
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

function getprice_s() {
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