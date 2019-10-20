
//myHeading.textContent = "hello world";
//alert("Hello there")
// document.querySelector('html').onclick = function() {
//     alert('noo, dont poke meh ples');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/1.jpeg') {
        myImage.setAttribute('src', 'images/2.jpeg');
    }
    else {
        myImage.setAttribute('src', 'images/1.jpeg');
    }
}

let myHeading = document.querySelector('h1');

let myButton = document.querySelector('button');

function setUserName() {
     let myName = prompt('Ples enter name');
     if(!myName || myName === null) {
         setUserName();
     }
     else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ' + myName;
     }
     
}


if(!localStorage.getItem('name')) {
    
    setUserName();

} else {
    
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 
    myHeading.textContent = 'Hello ' + storedName;
}




myButton.onclick = function() {
    setUserName();
}