document.addEventListener("DOMContentLoaded", function(event){
    console.log("loaded");
    document.getElementById("fileUpload").addEventListener("input", function(e) {
        var fReader = new FileReader();
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event) {
            var img = document.getElementById("img-render");
            img.src = event.target.result;
        }
    })
});


