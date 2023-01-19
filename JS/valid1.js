function jfun1(){
    // alert("Javascript loaded successfully")
    var name=frm1.t1.value;
    if(name==""){
        alert("Name Required");
    }
    else{
        var maths = Number(frm1.t2.value);
        var eng = Number(frm1.t3.value);
        var comp = Number(frm1.t4.value);
        var total = maths+eng+comp;
        frm1.total.value = total;
        frm1.per.value = (total/3);
        document.getElementById("max").innerHTML = (Math.max(maths,Math.max(eng,comp)));
        document.getElementById("min").innerHTML = (Math.min(maths,Math.min(eng,comp)));
    }
}