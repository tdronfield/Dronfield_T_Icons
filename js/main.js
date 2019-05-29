(() => {
    //stub
    //
    console.log('fired!');
    //variables
    let allBackgrounds = document.querySelectorAll(".iconContainer"),
        allImages = document.querySelectorAll(".iconContainer img");

    // functions
    function colourChange(){
      
    }


    //Event Listeners
    allBackgrounds.forEach(item=> {
                  item.addEventListener("mouseover", colourChange);
    allImages.forEach(item=> {
                  item.addEventListener("hover", colourChange);


})
