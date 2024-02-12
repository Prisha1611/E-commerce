let contentData = [
  {
    id: 1,
    name: "Product 1",
    brand: "Red mens shirt",
    preview: "img/product1.jpeg",
    price: "50",
    isAccessory: false
  },
  {
    id: 2,
    name: "Product 2",
    brand: "Blue mens shirt",
    preview: "img/product2.jpeg",
    price: "75",
    isAccessory: false
  },
  {
    id: 3,
    name: "Product 3",
    brand: "Yellow Flannel",
    preview: "img/product3.jpeg",
    price: "30",
    isAccessory: true
  },
  {
    id: 4,
    name: "Product 4",
    brand: "Unisex jacket",
    preview: "img/product4.jpeg",
    price: "100",
    isAccessory: false
  }
];

function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.className = "box";
  boxDiv.style.display = "inline-block";
  boxDiv.style.width = "200px";
  boxDiv.style.margin = "10px";
  boxDiv.style.border = "1px solid #ccc";
  boxDiv.style.padding = "10px";
  boxDiv.style.textAlign = "center";

  let boxLink = document.createElement("a");
  boxLink.href = "/contentDetails.html?" + ob.id;
  boxLink.style.textDecoration = "none";
  boxLink.style.color = "#333";

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;
  imgTag.style.maxWidth = "100%";
  imgTag.style.height = "auto";

  let detailsDiv = document.createElement("div");
  detailsDiv.className = "details";
  detailsDiv.style.marginTop = "10px";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);
  h3.style.margin = "5px 0";

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);
  h4.style.margin = "5px 0";

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("Ksh " + ob.price);
  h2.appendChild(h2Text);
  h2.style.margin = "5px 0";
  h2.style.fontSize = "18px";
  h2.style.color = "#ff5733";

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

for (let i = 0; i < contentData.length; i++) {
  if (contentData[i].isAccessory) {
    containerAccessories.appendChild(dynamicClothingSection(contentData[i]));
  } else {
    containerClothing.appendChild(dynamicClothingSection(contentData[i]));
  }
}
