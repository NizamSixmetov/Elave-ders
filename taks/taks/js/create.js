const title = document.getElementById("title")
const description = document.getElementById("description")
const brand = document.getElementById("brand")
const category = document.getElementById("category")
const thumbnail = document.getElementById("thumbnail")
const price = document.getElementById("price")
const send_comment_btn = document.querySelector(".send-comment-btn")

send_comment_btn.addEventListener('click',()=>{
  const data ={
    title: title.value,
    description: description.value,
    brand: brand.value,
    category: category.value,
    thumbnail: thumbnail.value,
    price:price.value
  }
  fetch(`http://localhost:3000/products`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .then((data) =>{
    if(data){
      window.location.href="../index.html"
      console.log(data);
    } else(alert(res))
  } ).catch((err) => {
    console.log(err)
  })
})
