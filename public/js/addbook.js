function showFiles() {
    let inputField = document.getElementById("input");
    let file = inputField.files;
    let fileReader = new FileReader;
    fileReader.onload = function(event) {
        let fileContent = fileReader.result;
        $("#preview").attr("src", '${imageURL}');
    }
    fileReader.readAsDataURL(file[0]);

}