const toggleButton = document.querySelector(".form-check-input");
const basicPrice = document.querySelector(".basicPrice");
const proPrice = document.querySelector(".proPrice");
const masterPrice = document.querySelector(".masterPrice");

toggleButton.addEventListener("click" , (e)=>{

    if (toggleButton.checked) {
        basicPrice.innerHTML = '&dollar;199.99'
        proPrice.innerHTML = '&dollar;249.99'
        masterPrice.innerHTML = '&dollar;399.99'
    }else{
        basicPrice.innerHTML = '&dollar;19.99'
        proPrice.innerHTML = '&dollar;24.99'
        masterPrice.innerHTML = '&dollar;39.99'
    }
    
});
