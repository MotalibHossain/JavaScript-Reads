// In the first fime to learn js DOM. You need to know about Selectors.
// select id wise 
const heading=document.getElementById("heading2")
heading.style.color='red';

// select class wise
// getElementsByClassName return an array that's why we use a array indexing
const heading3=document.getElementsByClassName("heading3");
heading3[0].style.color='blue';
console.log(heading3)

// select querySelector wise
const x=document.querySelector('.heading1');
x.style.color='blue';

// select querySelector all wise
const heading4=document.querySelector('.heading4');
heading4.style.color='pink';