const productsEl = document.querySelector(".products");


function renderProducts() {
  products.forEach((product) => {
    
    productsEl.innerHTML += 
      `
           
                   <article class="item">
            <img src="${product.image}" alt="meuble">
      <div class="sub-item">
       <h3>"${product.title}"</h3>
            <p>"${product.info}"</p>
      </div>
            
       <button type="button" class="button button5"><a href=""${product.link}""><b>Show</b></a>
</button>     
</article>
        `
      
      ;
  });
  
}
renderProducts();
