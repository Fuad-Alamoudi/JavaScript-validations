var na=document.getElementById("name");

function myFunction() {
    if(na.value.length <= 3 || na.value.length >= 10 ) {
        let text = "It must be more than three and less than ten characters";
        document.getElementById("alert").innerHTML = text;
        return false;       
    }
}
