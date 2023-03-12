const filterItem = document.querySelector(".items");
const filterImg = document.querySelector(".itemBox");

window.onload = ()=>{
    filterItem.onclick =(selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAtribute("data-name");
            filterImg.forEach((image) => {
                let filterImages = image.getAtribute("data-name");
                if((filterImages == filterName) || filterName == "todos"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show")
                }
            });
        }
    }
}