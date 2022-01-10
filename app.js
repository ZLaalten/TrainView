function loader(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("demo").innerHTML = xhttp.responseText;
            var responseText = xhttp.responseText;
            const resp = JSON.parse(responseText);
            console.log(resp);
            // document.getElementById("demo").innerHTML = resp;
        }
    };
    xhttp.open("GET", "https://training-box-apis.herokuapp.com/all_image_path", true);
    xhttp.send();
}
