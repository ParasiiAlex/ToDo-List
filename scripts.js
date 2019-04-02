$(document).ready(() => {

    //Append one row
    $('#submit').click( () => {
        $('#list').append(`<li>${$('#input').val()}</li>`);
        $('#input').val('');
        //Make list sortable
        $('#list').sortable();
    })

     //Clear entire list
     $('#clear').click( () => {
        if (confirm('All ToDos will be deleted!\nAre you sure to continue?')){
            $('li').remove();
        }
    })
    
    //Make list sortable
    $('#list').sortable({
        placeholder: 'list-placeholder',
        opacity: 0.8,
        axis: 'y',
    })

    //Variable for deleted element 
    let deleted = '';

    //deleteFirst
    $('#delete').click( () => {
        //$('#list li:first').remove();
        if ($('ul li:eq(0)').text()) {
            deleted = $('ul li:eq(0)').text();
                $('ul li:eq(0)').remove();
        }
    })

    //UnDelete item
    //Insert Before first item
    $('#undelete').click( () => {
        //Check if 'deleted' is not null
        if (deleted) {
            var newItem = document.createElement("li");       // Create a <li> node
            var textnode = document.createTextNode(deleted);  // Create a text node
            newItem.appendChild(textnode);                    // Append the text to <li>
        
            var list = document.getElementById("list");     // Get the <ul> element to insert a new node
            list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>
    
            //Set deleted value to null
            deleted = '';
        }
        
    })

    //Search through list  
    $("#search").on("keyup", () => {
        var value = $(this).val().toLowerCase();
        $("#list li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
})