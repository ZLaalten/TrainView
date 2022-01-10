function loader(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var responseText = xhttp.responseText;
            const resp = JSON.parse(responseText);
            console.log(resp.array);
            var imgLinkArr = resp.array.reverse();
            $.each(imgLinkArr , function(index, item) { 
                console.log("URL: " + item.url);
                createCard(item.url, item.photo_details);
            });
        }
    };
    xhttp.open("GET", "https://training-box-apis.herokuapp.com/all_image_path", true);
    xhttp.send();
}

function createCard(url, name) {
    console.log('inside createCard');
    
    var elm = '<div class="card m-4"> <div class="card-body"> <a target="_blank" href="'+url+'">'+name+'</a></div></div>';
    $("#imgCard").append($(elm));
}