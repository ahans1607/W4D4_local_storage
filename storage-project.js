const NUMBERS = [0,1,2,3,4,5,6,7,8,9];
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

  // const removeItem = () => {

  // };

});


let storeItems = function(event){
  let myItem = document.getElementById("items");
  let myQty = document.getElementById("quantity")

  localStorage.setItem(myItem.value, myQty.value);
  showCart(myItem);
}

let removeItems = function (){

}

let showCart = function (item){
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
            if (item.value === keys[i]){
                //then update the Qty
                let myQty = parseInt(localStorage.getItem(keys[i]));
                let theStringINeedToParse = document.getElementById(keys[i]).innerText
                myQty += parseInt(parseMyString(theStringINeedToParse));
                document.getElementById(keys[i]).innerText = keys[i] + " " + myQty
            }


      } else {
        //Otherwise create thing
        let myNewItem = document.createElement("p")
        myNewItem.innerText = keys[i] + " " + values[i];
        myNewItem.id = keys[i]
        document.getElementById('shopping-cart').append(myNewItem);

        //Also make a remove button for the thing
            // <button> my new buutton</button>
            let newButton = document.createElement("button");

            newButton.addEventListener('click', function (event){
                console.log("I clicked ", event.target);
                localStorage.removeItem(keys[i]);
            })
            myNewItem.appendChild(newButton);

        }
  }
}
let parseMyString = function(string){
  let result = []
  for (let i = 0; i < NUMBERS.length; i++){
    let number = NUMBERS[i]
    // console.log(number)
      for (let j = 0; j < string.length; j++){
        // console.log(string[j])
        if(string[j] === number.toString()){
          result.push(string[j])
        }
      }
  }
  return result.join("")
}
