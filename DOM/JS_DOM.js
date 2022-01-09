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

// ==================JavaScripts Events ======================

const userList=document.querySelector(".userList")
const form1=document.querySelector(".form1");
const input_box=document.querySelector(".list_input");
const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const form_add=document.querySelector(".form_add")
const createForm=document.querySelector(".createForm")

// using click event we add a li into ul from form value submit
btn1.addEventListener('click', function(){
const add_li=document.createElement('li');
const addText=document.createTextNode(input_box.value);
add_li.appendChild(addText);
userList.appendChild(add_li);
})
// using click event add a BUTTON into div 
btn2.addEventListener('click', function(){
    const add_btn=document.createElement("BUTTON");
    add_btn.innerHTML="Remove Me";
    userList.appendChild(add_btn);
})

// using cleck event create a form and create input field into a form 

createForm.addEventListener('click', function(){
    const create_form=document.createElement('FORM');
    create_form.setAttribute('id', 'myform');
    form_add.appendChild(create_form);
    
    const create_input=document.createElement("INPUT");
    create_input.setAttribute("type", "text");
    add=document.getElementById("myform");
    add.appendChild(create_input);

})

