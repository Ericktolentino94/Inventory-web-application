const form = document.querySelector("form");

const li = document.querySelector("li")


const submit = document.querySelector("#submitButton")

form.addEventListener("submit",(event) => {
    event.preventDefault();
    let sneakerListing = event.target
    li.append( sneakerListing.sneakerName.value);
    li.append(sneakerListing.sneakerPrice.value);
    li.append(sneakerListing.size.value);
    
})