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
  console.log(myItem.value)

  let myQty = document.getElementById("quantity")
  console.log(myQty.value.toString())

  localStorage.setItem(myItem, myQty);
}
