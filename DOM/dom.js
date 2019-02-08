//console.dir(document);
//-------------------------------------------------------------------Examine the document
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.forms[0]);

//-------------------------------------------------------------------get element by ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'this';
// headerTitle.innerText = 'gudbye';
// headerTitle.innerHTML = '<h3> this is test</h3>'
// console.log(headerTitle.textContent);

//-------------------------------------------------------------------getelement by Classs name
// var item = document.getElementsByClassName('list-group-item');
// console.log(item);

//-------------------------------------------------------------------Query Selector (for id)
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

//-------------------------------------------------------------------Query Selector All
// var title = document.querySelectorAll('.title');
// console.log(title);

//-------------------------------------------------------------------Event

//var button = document.getElementById('button').addEventListener('click' , buttonClick);
// // function buttonClick(){
// //     //console.log("hi");
// //     document.getElementById('header-title').textContent = 'changed';
// //     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// // }
//  function buttonClick(e){
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.classname);
//     // console.log(e.target.classList);
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
    
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// //button.addEventListener('click' , runEvent);
// //button.addEventListener('dblclick' , runEvent);
// //button.addEventListener('mousedown' , runEvent);
// //button.addEventListener('mouseup' , runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE : '+e.type);
// }
//var box = document.getElementById('box');
//box.addEventListener('mouseleave' , runEvent);
//box.addEventListener('mouseenter' , runEvent);
//box.addEventListener('mousemove' , runEvent);

// function runEvent(e){
//      console.log('EVENT TYPE : '+e.type);
//      output.innerHTML = '<h3>MouseX : '+e.offsetX+'</h3><h3>MouseY : '+e.offsetY+'</h3>';
//      box.style.backgroundColor = 'red';
//  }

// var itemInput = document.querySelector('input[type="Text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

//itemInput.addEventListener('keydown' , runEvent);
//itemInput.addEventListener('keyup' , runEvent);
//itemInput.addEventListener('keypress' , runEvent);

//itemInput.addEventListener('focus' , runEvent);
//itemInput.addEventListener('blur' , runEvent);

// itemInput.addEventListener('cut' , runEvent);
// itemInput.addEventListener('paste' , runEvent);
// itemInput.addEventListener('input' , runEvent);

// select.addEventListener('change' , runEvent);


// function runEvent(e){
//     console.log('EVENT TYPE : '+e.type);
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
// }



//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------