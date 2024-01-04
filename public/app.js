$(document).ready( () => {
    addButtonEvents()
});

function addButtonEvents() {
    $('#create').on('click', (e) => {
        let name = {'name': $('#Chef-name').val()}
        $.ajax({
            url: '/createUser',
            method: 'POST',
            contentType:'application/json',
            data: JSON.stringify(name),
            success: function(response) {
              console.log(response);
              alert('Success - see console')
            },
            error: function(xhr, status, error) {
              console.error('Error:', status, error);
              console.log(xhr)
            }
        });
    });
    
    $('#read').on('click', (e) => {
        $.ajax({
            url: '/read',
            method: 'GET',
            success: function(response) {
                console.log(response.data)
                alert('Success - data in console');
            },
            error: function(xhr, status, error) {
              console.error('Error:', status, error);
              console.log(xhr)
            }
        });
    });
  
    $('#update').on('click', (e) => {
        $.ajax({
            url: '/updateChefName',
            method: 'PUT',
            contentType:'application/json',
            data: JSON.stringify({ oldName: $('#Chef-name').val(), newName: $('#New-name').val()}),
            success: function(response) {
              alert('Success:', response);
            },
            error: function(xhr, status, error) {
              console.error('Error:', status, error);
              console.log(xhr)
            }
        });
    });
  
    $('#delete').on('click', (e) => {
        $.ajax({
            url: '/delete',
            method: 'DELETE',
            contentType:'application/json',
            data: JSON.stringify({chef: $('#Chef-name').val()}),
            success: function(response) {
              console.log('Success:', response);
            },
            error: function(xhr, status, error) {
              console.error('Error:', status, error);
              console.log(xhr)
            }
        });
    });
}

/* 

$.ajax({
  url: 'your_server_endpoint',   // The URL to which the request is sent
  method: 'GET',                  // The HTTP method (GET, POST, PUT, DELETE, etc.)
  contentType:'application/json' or etc,
  data: { key1: 'value1', key2: 'value2' },  // Data to be sent to the server
  success: function(response) {
    // Function to be called if the request succeeds
    console.log('Success:', response);
  },
  error: function(xhr, status, error) {
    // Function to be called if the request fails
    console.error('Error:', status, error);
  }
});

*/