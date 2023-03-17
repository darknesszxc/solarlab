function productLoad(name) {
  fotos = new Array();
  fotos[0] = "./pic/car.jpg";
  fotos[1] = "./pic/product.png";
  fotos[2] = "./pic/car.jpg";
  fotos[3] = "./pic/product.png";
  for (var i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = fotos[i];
    img.height = "240";
    img.width = "306";
    img.id = "imgid";
    img.className = i;

    var paragraph = document.createElement("P");
    if (i % 2 == 0) {
      var text = document.createTextNode("Наушники AirPods 2 ");
    } else {
      var text = document.createTextNode("Машина Toyota Mark 2 ");
    }
    paragraph.appendChild(text);

    var paragraph2 = document.createElement("P");
    var text2 = document.createTextNode("20 000 $");
    paragraph2.appendChild(text2);

    var paragraph3 = document.createElement("P");
    var text3 = document.createTextNode("Севастополь,улица Меньшикова");
    paragraph3.appendChild(text3);

    var paragraph4 = document.createElement("P");
    var text4 = document.createTextNode("Сегодня 13:07");
    paragraph4.appendChild(text4);

    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";

    container.appendChild(img);
    container.appendChild(paragraph);
    container.appendChild(paragraph2);
    container.appendChild(paragraph3);
    container.appendChild(paragraph4);

    paragraph.className = "main-text-product";
    paragraph2.className = "style-cost";
    paragraph3.className = "second-text-product";
    paragraph4.className = "second-text-product";
    let container2 = container;

    document.getElementById(name).appendChild(container);
  }
}
productLoad("string-pic1");
productLoad("string-pic2");
productLoad("string-pic3");
productLoad("string-pic4");