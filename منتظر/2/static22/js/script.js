function getprice() {

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