const form = document.querySelector("form");



form.addEventListener("submit", (event) => {
  
  let li = document.createElement("li");
  event.preventDefault();
  const sneakerListing = event.target;
  const sneakerList = document.querySelector("ul");
  const sneakerTitle = document.createElement("h3");
  const sneakerPrice = document.createElement("p");
  const sneakerSize = document.createElement("p");
  const sneakerGender = document.createElement("p");
  const sneakerInstock = document.createElement("button");
  const sneakerImage = document.createElement("img");
  const sneakerRemove = document.createElement("button");

  sneakerImage.append("src=");
  sneakerRemove.append("Remove Item");
  sneakerInstock.append("In Stock")


  sneakerTitle.textContent = sneakerListing.sneakerName.value;
  sneakerPrice.textContent = `Price: $ ${sneakerListing.sneakerPrice.value}`;
  sneakerInstock.textContent = `${sneakerListing.sneakerInstock.value}`;
  sneakerGender.textContent = `US ${sneakerListing.gender.value}`;
  sneakerSize.textContent = `Size: ${sneakerListing.sneakerSize.value}`;
  sneakerImage.src = sneakerListing.imgUrl.value;


  sneakerRemove.addEventListener("click", (event) => {
    document.querySelectorAll("li");
    li.remove();
  });

  sneakerInstock.addEventListener("click", (event) => {
    if(sneakerInstock.textContent == "In stock") {
        sneakerInstock.textContent = "Out of stock"
    } else {
        if(sneakerInstock.textContent == "Out of stock") {
            sneakerInstock.textContent = "In stock"
        }
    }
    });

  li.append(sneakerImage);
  li.append(sneakerTitle);
  li.append(sneakerPrice);
  li.append(sneakerInstock);
  li.append(sneakerGender);
  li.append(sneakerSize);
  li.append(sneakerRemove);

  sneakerList.appendChild(li);
  form.reset();
});
    


