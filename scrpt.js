function fn(){
    var d_1=document.getElementById("fid1");
    var d_2=document.getElementById("fid2");
    var d_3=document.getElementById("fid3");

    if(d_1.value==""){
        alert("firstname should be filled.");
    }
    if(d_2.value==""){
        alert("secondname should be filled.");

    }
    if(d_3.value==""){
        alert("This cannot be empty.");
    }
}