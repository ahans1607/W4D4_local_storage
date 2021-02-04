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
}

let showCart = function (event){
    let myItem = document.getElementById("items");
    let myQty = document.getElementById("quantity")
    console.log(localStorage.getItem(myItem.value));


}