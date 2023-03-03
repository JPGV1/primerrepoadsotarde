let producto = prompt("Ingrese el nombre del producto")
if(producto== "vino" || producto== "crema" || producto== "lentejas" || producto== "arroz"){
  console.log ("El producto si se vende en el supermercado")
}else {
    console.log ("Error, el producto no se vende en el supermercado")
}
if(producto== "vino" || producto=="crema"){
    console.log ("El producto si paga IVA")
}
if(producto== "lentejas" || producto== "arroz"){
    console.log("El producto no paga IVA")
}