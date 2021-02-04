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

  // console.log(values)
  // console.log(keys);
  //   for (let i = 0; i < keys.length; i++){ 
  //     console.log(localStorage.getItem(keys[i]))

  //   }
    let keys = Object.keys(localStorage);
    let values = Object.values(localStorage);

    for (let i = 0; i < keys.length; i++){
        // if thing is already in the HTML
        if (document.getElementById(keys[i])){
          //then update the Qty
          let myQty = parseInt(localStorage.getItem(keys[i]));
          console.log("Adding " + myQty + " new " + keys[i] + " to the the cart");
          console.log("There is already " + document.getElementById(keys[i]).innerText + " apples in the cart");

          console.log(parseInt(document.getElementById(keys[i]).innerText));

      } else {
        //Otherwise create thing
        let myNewItem = document.createElement("p")
        myNewItem.innerText = keys[i] + " " + values[i];
        myNewItem.id = keys[i]
        document.getElementById('shopping-cart').append(myNewItem);
      }
  }
}
