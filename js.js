function upDate(previewPic){
    // Change the background image of the div with id = "image"
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
    
    // Change the text of the div with id = "image"
    document.getElementById("image").innerHTML = previewPic.alt;
    
    // Optional: Log the previewPic information for debugging
    console.log("Image source: " + previewPic.src);
    console.log("Image alt text: " + previewPic.alt);
}

function unDo(){
    // Revert the background image of the div with id = "image" back to the original image
    document.getElementById("image").style.backgroundImage = "url('')";
    
    // Revert the text of the div with id = "image" back to the original text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}