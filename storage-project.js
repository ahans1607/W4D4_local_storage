window.addEventListener("DOMContentLoaded", (event) => {

    // const formFieldItems = document.getElementById('items')
    // console.log('form  = ' + formFieldItems);
    // formFieldItems.addEventListener('click', function (event){
    //     console.log('event = ' + event);
    // })

    let myForm = document.querySelector("form");
    myForm.addEventListener("submit", function(event){
    event.preventDefault();
        storeItems(event);
    });

  // const showCart = () => {

  // };

  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});


let storeItems = function(event){
  let myItem = document.getElementById("items");
  let myQty = document.getElementById("quantity")

  localStorage.setItem(myItem.value, myQty.value);
  showCart();
}

{/* <p>testItem</p> */}

let showCart = function (){
    // let myItem = document.getElementById("items");
    // let myQty = document.getElementById("quantity")
    // console.log(localStorage.getItem(myItem.value));
  let keys = Object.keys(localStorage);
  let values = Object.values(localStorage);
  // console.log(values)
  // console.log(keys);
  //   for (let i = 0; i < keys.length; i++){ 
  //     console.log(localStorage.getItem(keys[i]))

  //   }
  for (let i = 0; i < keys.length; i++){
    let myNewItem = document.createElement("p")
     myNewItem.innerText = keys[i] + " " + values[i];
      myNewItem.id = keys[i]
        document.getElementById('shopping-cart').append(myNewItem);

  }
}
