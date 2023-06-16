document.querySelector('.add-product-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var productName = document.getElementById('product-name').value;
  var productDescription = document.getElementById('product-description').value;
  var img = document.getElementById('product-image').value;
  var data = {
    title: productName,
    body: productDescription,
    
    userId: 1 
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else if (response.status === 400) {
      throw new Error('Bad request. Please check your input.');
    } else if (response.status === 401) {
      throw new Error('Unauthorized. Access denied.');
    } else if (response.status === 404) {
      throw new Error('Not found. The specified endpoint does not exist.');
    } else if (response.status === 500) {
      throw new Error('Internal server error. Please try again later.');
    } else {
      throw new Error('An error occurred while adding the product. Status code: ' + response.status);
    }
  })
  .then(function(jsonData) {
    alert('Product added successfully.')
  })
  .catch(function(error) {
    alert(error.message);
  });
  document.getElementById('product-name').value = '';
  document.getElementById('product-description').value = '';
  document.getElementById('product-image').value = '';
});
