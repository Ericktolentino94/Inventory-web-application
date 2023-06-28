const form = document.querySelector("form");




// function generateSneaker(item){
form.addEventListener("submit",(event) => {
    let li = document.createElement("li")
    event.preventDefault();
    let sneakerListing = event.target
    let sneakerList = document.querySelector("ul")
    let sneakerTitle = document.createElement("h3")
    let sneakerPrice = document.createElement("p")
    let sneakerSize = document.createElement("p")
    

    sneakerTitle.textContent = sneakerListing.sneakerName.value
    sneakerPrice.textContent = sneakerListing.sneakerPrice.value
    sneakerSize.textContent = sneakerListing.sneakerSize.value
    // console.log(sneakerList.sneakerSize.value)
    li.append(sneakerTitle)
    li.append(sneakerPrice);
    li.append(sneakerSize);
    
    sneakerList.appendChild(li)
})
form.reset()
// }
