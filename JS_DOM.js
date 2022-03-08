// In the first fime to learn js DOM. You need to know about Selectors.
// select id wise 
// const heading=document.getElementById("heading2")
// heading.style.color='#786a6c';

// select class wise
// getElementsByClassName return an array that's why we use a array indexing
// const heading3=document.getElementsByClassName("heading3");
// heading3[0].style.color='black';
// console.log(heading3)

// select querySelector wise
// const x=document.querySelector('.heading1');
// x.style.color='black';

// select querySelector all wise
// const heading4=document.querySelector('.heading4');
// heading4.style.color='#815d63';

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
})

createForm.addEventListener('click', function(){
    const create_input=document.createElement("INPUT");
    create_input.setAttribute("type", "text");
    create_input.setAttribute('class', 'form-control mb-3');
    add=document.getElementById("myform");
    add.appendChild(create_input);
})

//====================Keyup events=====================
const form2=document.querySelector('.form')
const typeup=document.getElementById('heading4')

form1.addEventListener('keyup', function(e){
    e.preventDefault()
    typeup.innerText=e.target.value
})


//====================Template strings==================== 
let company='Travnet Tech';
let name=`This is our ${company}`;
const template_string= document.querySelector('.template_string');

// template_string.innerHTML=name;

//============== Append a html from using jquery==============
$(document).ready(function(){
    
    let btn_number=0
    $('#plus').click(function(){
        // Increase the button number value and add class name  
        btn_number++
        $('#btn-1').addClass("{btn_number}")
        $('#btn-1').value=btn_number

        // --------------create from --------------
        $('.form1').append(`<div><form action="#">
        <div class="row">
            <div class="col-lg-10 col-md-9 col-sm-12">
                <div class="mb-3">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" >
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-12 ">
                <div class="mb-3">
                    <label for=""></label>
                    <input type="submit" value="Btn-${btn_number}" id="btn-${btn_number}" class="form-control p-1">
                </div>
            </div>
        </div>
    </form></div>`)
    })

    // --------------Remove from --------------
    $('#minus').click(function(){
        $('.form1').children("div:last").remove()
    })
})



//============== Append a html from using JavaScript==============
let form=document.querySelector('.form2');
let form_main=document.querySelector('.form_main');
let plus1=document.querySelector('#plus1');
let minus1=document.querySelector('#minus1');

let btn_number=0
function createForm1(){
    btn_number++ // when i create a form then btn-number are increase

    form.insertAdjacentHTML("beforeend",`<div id="form-${btn_number}"><form action="#">
    <div class="row">
        <div class="col-lg-10 col-md-9 col-sm-12">
            <div class="mb-3">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" >
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 ">
            <div class="mb-3">
                <label for=""></label>
                <input onclick="removeForm()" type="submit" value="btn-${btn_number}" id="btn-${btn_number}" class="form-control p-1">
            </div>
        </div>
    </div>
</form></div>`)
};
//============== Remove Form==============
function removeForm(){
    btn_number //whwn i create form then the form or button number increase
    Btn=`form-${btn_number}`
    let button_num=document.getElementById(Btn)
    button_num.remove()
    btn_number-- 
};
//==============Go to top using javascript==============
const go_to_top=document.getElementById('go_to_top')
window.onscroll = function() {Go_to_top()};

function Go_to_top(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        go_to_top.style.display = "block";
    }else{
        go_to_top.style.display = "none";
    }
}

go_to_top.addEventListener('click',function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})


//======================================================
                //JavaScript Arrow Function
// =====================================================
//JavaScript Arrow Function
let summation=(...arguments)=>{
    let sum=0
    for(let i in arguments){
        sum=sum+arguments[i];
        // console.log(sum)
    }
    console.log(sum);
};
summation(10,20,30)

showloading=()=>{
    $(".button-1").attr('disabled', 'disabled');
}
GetDataFormApi=(callback)=>{
    console.log("1.Pulling data")
    setTimeout(()=>{
        console.log("2.Finish data getting")
        callback()
    }, 3000)
}
removeloading=()=>{
    $(".button-1").removeAttr('disabled');
}
$(".button-1").click(function(){
    showloading()
    GetDataFormApi(removeloading)
})
