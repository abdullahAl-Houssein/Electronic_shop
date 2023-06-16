function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const productList = document.getElementById('product-list');
  
        if (productList) {
          posts.slice(0, 8).forEach(post => {
            const item = document.createElement('div');
            item.className = 'popular-products-item';
  
            // Load image from API
            fetch(`https://jsonplaceholder.typicode.com/photos/${post.id}`)
              .then(response => response.json())
              .then(photo => {
                const imageUrl = photo.url;
  
                item.innerHTML = `
                  <div class="popular-products-image">
                      <a href="./Products/ProductDetails.html?productId=${post.id}" class="property-link" data-tooltip="Product Show">
                          <img src="${imageUrl}" alt="">
                      </a>
                  </div>
                  <div class="popular-products-body">
                      <h4>${post.title}</h4>
                      <div class="price">
                          <label>${post.body}</label>
                      </div>
                  </div>
                `;
                productList.appendChild(item);
              })
              .catch(error => {
                console.error('Error fetching photo:', error);
              });
          });
        } else {
          console.error('Element with id "product-list" not found.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  