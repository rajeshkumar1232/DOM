var form = document.getElementById('addForm');
var itemList = document.querySelector('item');
var filter = document.getElementById('filter');

//form submit
form.addEventListener('submit' , addItem);

//delete event
items.addEventListener('click' , removeItem);

//filter event
filter.addEventListener('keyup' , filterItem );


//Add Item
function addItem(e){
    e.preventDefault();

    //get Input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    //add Class
    li.className = 'list-group-item';
    //console.log(li);
    li.appendChild(document.createTextNode(newItem));

    //Creating delete button
    var deleteBtn = document.createElement('button');
    // add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    //append to li
    li.appendChild(deleteBtn);
    items.appendChild(li);
}

function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        items.removeChild(li);
    }
   }
}

function filterItem(e){
    //conver to lower case
    var text = e.target.value.toLowerCase();
    var item = items.getElementsByTagName('li');
    Array.from(item).forEach(function(itm){
        var itmname = itm.firstChild.textContent;
        if(itmname.toLowerCase().indexOf(text) != -1){
            itm.style.display = 'block';
        } else {
            itm.style.display = 'none';
        }
    });
}