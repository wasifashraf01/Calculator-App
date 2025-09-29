function getNumber(n){
    var result = document.getElementById("myInput");
    result.value += n; 
}


function clearAll() {
    var clear = document.getElementById("myInput");
    clear.value = "";
}

function del(){
    var delNum = document.getElementById("myInput");
    delNum.value = delNum.value.slice(0, -1);
}

function calculate(){
    var ans = document.getElementById("myInput");
    ans.value = eval(ans.value);
}
