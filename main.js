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
    let sneakerGender = document.createElement("p")
    let sneakerInstock = document.createElement("p")
    let sneakerImage = document.createElement("img")

    sneakerImage.append("src=")
    console.log(sneakerImage)

    sneakerTitle.textContent = sneakerListing.sneakerName.value
    sneakerPrice.textContent = `Price: $ ${sneakerListing.sneakerPrice.value}`
    sneakerInstock.textContent = `In Stock: ${sneakerListing.sneakerInstock.value}`
    sneakerGender.textContent = `US ${sneakerListing.gender.value}`
    sneakerSize.textContent = `Size: ${sneakerListing.sneakerSize.value}`
    sneakerImage.src = sneakerListing.imgUrl.value

    
    li.append(sneakerTitle);
    li.append(sneakerPrice);
    li.append(sneakerInstock);
    li.append(sneakerGender);
    li.append(sneakerSize);
    li.append(sneakerImage)
    
    sneakerList.appendChild(li)
})
form.reset()
// }
