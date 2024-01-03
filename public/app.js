$(document).ready( () => {
    addButtonEvents()
});

function addButtonEvents() {
    $('#create').on('click', (e) => {
        let name = {'name': 'Chef ' + getRandomName(5)}
        $.ajax({
            url: '/createUser',
            method: 'POST',
            contentType:'application/json',
            data: JSON.stringify(name),
            success: function(response) {
              console.log(name.name + ' added to the database');
              alert('Success - see console')
            },
            error: function(xhr, status, error) {
              console.error('Error:', status, error);
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
            }
        });
    });
  
    $('#update').on('click', (e) => {
        $.ajax({
            url: '/update',
            method: 'PUT',
            data: { key1: 'value1', key2: 'value2' },
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
            data: { key1: 'value1', key2: 'value2' },
            success: function(response) {
              alert('Success:', response);
            },
            error: function(xhr, status, error) {
              console.error('Error:', status, error);
            }
        });
    });
}

function getRandomName(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomName = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomName += characters.charAt(randomIndex);
    }

    return randomName;
}

/* 

$.ajax({
  url: 'your_server_endpoint',   // The URL to which the request is sent
  method: 'GET',                  // The HTTP method (GET, POST, PUT, DELETE, etc.)
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