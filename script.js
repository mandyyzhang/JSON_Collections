let resturantsElement = document.getElementById('resturants');
let dessertElement = document.getElementById('dessert');

//-----------------------------------------------------------------------------
let allRestaurants = [
  {
    "name" : "Gyu-Kaku Japanese BBQ",
    "picture" : "Gyu-Kaku.jpg",
    "location": "https://www.google.com/maps/place/Gyu-Kaku+Japanese+BBQ/@40.7581905,-73.8297312,17z/data=!4m12!1m6!3m5!1s0x89c26011fef54e19:0xa0a12dbd84f6cae6!2sGyu-Kaku+Japanese+BBQ!8m2!3d40.7581905!4d-73.8297312!3m4!1s0x89c26011fef54e19:0xa0a12dbd84f6cae6!8m2!3d40.7581905!4d-73.8297312",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Happy Lamb Hot Pot",
    "picture" : "LittleSheep.jpg",
    "location": "https://www.google.com/maps/place/Happy+Lamb+Hot+Pot,+Flushing+%E5%BF%AB%E4%B9%90%E5%B0%8F%E7%BE%8A/@40.762194,-73.8311837,17z/data=!3m1!4b1!4m5!3m4!1s0x89c260100dd5c2af:0x2952f57b3c7438c8!8m2!3d40.762194!4d-73.828995",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰✰"
  },
  {
    "name" : "PappaRich Flushing",
    "picture" : "PappaRich.jpg",
    "location": "https://www.google.com/maps/place/PappaRich+Flushing/@40.7594391,-73.8345657,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2600e66ce62d9:0x95938be887c8ee7a!8m2!3d40.7594391!4d-73.832377",
    "type" : "main",
    "rating" : "Review: ✰✰✰"
  },
  {
    "name" : "BCD Tofu House",
    "picture" : "BCD.jpg",
    "location": "https://www.google.com/maps/place/BCD+Tofu+House/@40.7475106,-73.9882514,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a8fb73f6dd:0xf6e5befab6a237be!8m2!3d40.7475106!4d-73.9860627",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Ajisen Ramen",
    "picture" : "Ajisen.jpg",
    "location": "https://www.google.com/maps/place/Ajisen+Ramen+(Chinatown+)/@40.71414,-74.0007947,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a26ed785af1:0xf49cc3b69abb0172!8m2!3d40.71414!4d-73.998606",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "miss KOREA BBQ",
    "picture" : "missKOREA.jpeg",
    "location": "https://www.google.com/maps/place/miss+KOREA+BBQ/@40.7473149,-73.9886655,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a8f0e6dff7:0xf690d3dfef37dcf!8m2!3d40.7473149!4d-73.9864768",
    "type" : "main",
    "rating" : "Review: ✰✰✰"
  },
  {
    "name" : "Udon West",
    "picture" : "Udon.jpg",
    "location": "https://www.google.com/maps/place/Udon+St+Marks/@40.7293784,-73.9912634,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2599b8652d36f:0xbbe7a366054cb16b!8m2!3d40.7293784!4d-73.9890747",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "The cast iron pot 3",
    "picture" : "castIron.jpg",
    "location": "https://www.google.com/maps/place/The+cast+iron+pot+3/@40.7642162,-73.8093978,16.11z/data=!4m5!3m4!1s0x89c261f476cb2935:0x8d76f1fca716de53!8m2!3d40.7633759!4d-73.8075025",
    "type" : "main",
    "rating" : "Review: ✰✰✰"
  },
  {
    "name" : "Five Senses",
    "picture" : "FiveSenses.jpg",
    "location": "https://www.google.com/maps/place/Five+Senses+(Koreatown)/@40.747715,-73.9882447,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a8f8eed3d5:0xf6d2708ec3f5b2f9!8m2!3d40.747715!4d-73.986056",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Kimoto",
    "picture" : "Kimoto.jpeg",
    "location": "https://www.google.com/maps/place/Kimoto+Rooftop+Restaurant+%26+Garden+Lounge/@40.6914297,-73.9867158,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a4b674907a7:0xd745952551acc0dc!8m2!3d40.6914297!4d-73.9845271",
    "type" : "main",
    "rating" : "Review: ✰✰"
  },
  {
    "name" : "The Coop",
    "picture" : "Coop.jpeg",
    "location": "https://www.google.com/maps/place/The+COOP+Restaurant+%26+Bar+:+Best+Korean+Fried+Chicken/@40.759182,-73.8347568,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2600e42a04d4d:0x9457134918bf391f!8m2!3d40.759182!4d-73.8325681",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "99 Favor Taste",
    "picture" : "99.jpg",
    "location": "https://www.google.com/maps/place/99+Favor+Taste/@40.7615838,-73.8338867,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2600fb8d80793:0xef5b6bf8d1e18a2c!8m2!3d40.7615838!4d-73.831698",
    "type" : "main",
    "rating" : "Review: ✰✰"
  },
  {
    "name" : "Jjang Cooks",
    "picture" : "Jjang.jpeg",
    "location": "https://www.google.com/maps/place/Jjang+Cooks/@40.7603313,-73.8298026,17z/data=!3m1!4b1!4m5!3m4!1s0x89c26010537d1b85:0x181df3b5e3fb5f5d!8m2!3d40.7603313!4d-73.8276139",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Tofu Tofu",
    "picture" : "tofu.jpg",
    "location": "https://www.google.com/maps/place/Tofu+Tofu/@40.7176645,-73.9977478,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259881b592a87:0x130569d42ea4430e!8m2!3d40.7176645!4d-73.9955591",
    "type" : "main",
    "rating" : "Review: ✰✰✰✰✰"
  },
  {
    "name" : "Laoma Malatang",
    "picture" : "Laoma.jpg",
    "location": "https://www.google.com/maps/place/Laoma+Malatang/@40.7593211,-73.8312415,17z/data=!3m1!4b1!4m5!3m4!1s0x89c26011c3e3023f:0x4a4b877e39aa8caf!8m2!3d40.7593211!4d-73.8290528",
    "type" : "main",
    "rating" : "Review: ✰✰✰"
  },
  {
    "name" : "Mango Mango Dessert",
    "picture" : "Mango.jpeg",
    "location": "https://www.google.com/maps/place/Mango+Mango+Dessert/@40.7603288,-73.831405,17z/data=!3m1!4b1!4m5!3m4!1s0x89c26010332a5abd:0x4e4a5cc577af4a01!8m2!3d40.7603288!4d-73.8292163",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Prince Tea House",
    "picture" : "Prince.jpg",
    "location": "https://www.google.com/maps/place/Prince+Tea+House/@40.7191644,-73.9970042,16.53z/data=!4m5!3m4!1s0x89c259ec9415e72d:0x6217554308abbde9!8m2!3d40.7190154!4d-73.9949034",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Black Tap",
    "picture" : "BlackTap.jpg",
    "location": "https://www.google.com/maps/place/Black+Tap/@40.7635483,-73.9819514,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258f9cbc9ec63:0x4993a4d346f54e60!8m2!3d40.7635483!4d-73.9797627",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰"
  },
  {
    "name" : "Amorino Greenwich Village",
    "picture" : "Amorino.jpg",
    "location": "https://www.google.com/maps/place/Amorino+Greenwich+Village/@40.732905,-73.9960739,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25999e89bb8f7:0x9e7969c334cd78ae!8m2!3d40.732905!4d-73.9938852",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰"
  },
  {
    "name" : "Spot Dessert Bar",
    "picture" : "Spot.jpg",
    "location": "https://www.google.com/maps/place/Spot+Dessert+Bar/@40.7591025,-73.8344346,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2600e68d4a9ef:0xddeb1b3b405506a3!8m2!3d40.7591025!4d-73.8322459",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Sugar Factory",
    "picture" : "Sugar.jpeg",
    "location": "https://www.google.com/maps/place/Sugar+Factory+American+Brasserie/@40.7386207,-74.0080938,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259c0082485ad:0x908ebea45c3a4547!8m2!3d40.7386207!4d-74.0059051",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰"
  },
  {
    "name" : "10Below Ice Cream",
    "picture" : "10below.jpeg",
    "location": "https://www.google.com/maps/place/10Below+Ice+Cream/@40.7349161,-74.0072282,14z/data=!4m8!1m2!2m1!1s10Below+Ice+Cream!3m4!1s0x89c259ae5ebd4ac9:0xd72a1f4417b4fd86!8m2!3d40.7499828!4d-73.9921393",
    "type" : "dessert",
    "rating" : "Review: ✰✰"
  },
  {
    "name" : "520 Desserts",
    "picture" : "520.jpg",
    "location": "https://www.google.com/maps/place/520+iF+Cha+Dessert+Bar/@40.761058,-73.8353637,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2600f008b55e5:0x8df0d2f2eee87971!8m2!3d40.761058!4d-73.833175",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰✰"
  },
  {
    "name" : "Grace Street",
    "picture" : "Grace.jpg",
    "location": "https://www.google.com/maps/place/Grace+Street+Coffee+%26+Desserts/@40.7477172,-73.9887189,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a8e1682bf5:0xea388e8841a2955e!8m2!3d40.7477172!4d-73.9865302",
    "type" : "dessert",
    "rating" : "Review: ✰✰✰✰"
  },

];
//-----------------------------------------------------------------------------
for (var i = 0; i < allRestaurants.length; i++) {
  createElementProper(allRestaurants[i]);
}
//-----------------------------------------------------------------------------
function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let googleMap = document.createElement("A");
  googleMap.href = incomingJSON['location'];
  newContentElement.appendChild(googleMap);

  let newContentName = document.createElement("H2");
  newContentName.classList.add("placeName");
  newContentName.innerText = incomingJSON['name'];
  googleMap.appendChild(newContentName);

  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = incomingJSON['picture'];
  newContentElement.appendChild(newImage);

  let newText = document.createElement("H4");
  newText.classList.add("placeRating");
  newText.innerText = incomingJSON['rating'];
  newContentElement.appendChild(newText);

  if (incomingJSON['type'] == 'main'){
    resturantsElement.appendChild(newContentElement);
  }
  else{
    dessertElement.appendChild(newContentElement);
  }


};
