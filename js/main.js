
var productname = document.getElementById("productname")
var productprice = document.getElementById("productprice")
var productcateg = document.getElementById("productcateg")
var productdesc = document.getElementById("productdesc")
var count = document.getElementById("count")
var submit = document.getElementById("submit")
var mood = 'Add product'

var productcontainer;
if(localStorage.getItem("ourproducts")== null){
  productcontainer= []
}else{
  productcontainer=JSON.parse(localStorage.getItem("ourproducts"))
  displayproduct(productcontainer)
}

function addproduct(){
  if(productname.value!=""){
    var product = {
      name : productname.value ,
      price : productprice.value ,
      categ : productcateg.value ,
      desc : productdesc.value ,
      count : count.value
    }
  if(mood=== 'Add product'){
    if(product.count>1){
    for(var i=0 ; i<product.count ; i++)
    productcontainer.push(product)
    }
    else{
      productcontainer.push(product)
    }}
    else{
      productcontainer[index]=product
      mood='Add product'
      submit.innerHTML='Add product'
    }
  }else{
    null
  }
  localStorage.setItem( "ourproducts" ,JSON.stringify(productcontainer))

  displayproduct(productcontainer)
  clear()
}

 function displayproduct(list){
var productlist =""
for(var i = 0 ; i<list.length ; i++){
  productlist +=`<tr>
  <td>${i+1}</td>
  <td>${list[i].name}</td>
  <td>${list[i].price}</td>
  <td>${list[i].categ}</td>
  <td>${list[i].desc}</td>
  <td><button onclick="deleterow(${i})" class="btn btn-danger">Delete</button></td>
  <td><button onclick="edit(${i})" class="btn btn-warning">Edit</button></td>
</tr>
  `
}
document.getElementById("tbody").innerHTML= productlist
 }

function clear(){
  productname.value=""
  productprice.value=""
  productcateg.value=""
  productdesc.value=""
  displayproduct(productcontainer)
}

 function deleteall(){
  productcontainer.splice(0)
  localStorage.setItem( "ourproducts" ,JSON.stringify(productcontainer))
  displayproduct(productcontainer)

 }

 function deleterow(i){
  productcontainer.splice(i,1)
  localStorage.setItem( "ourproducts" ,JSON.stringify(productcontainer))
  displayproduct(productcontainer)
 }

 function edit(i){
  productname.value=productcontainer[i].name
  productprice.value=productcontainer[i].price
  productcateg.value=productcontainer[i].categ
  productdesc.value=productcontainer[i].desc
  submit.innerHTML = 'Update'
  mood = 'Update'
  index=i
 }

 function searchProduct(searchterm){
  var searchresult = []
  for(var i=0; i<productcontainer.length; i++){
    if(productcontainer[i].name.toLowerCase().includes(searchterm.toLowerCase()) == true){
      searchresult.push(productcontainer[i])
    }
  }
  displayproduct(searchresult)
 }























