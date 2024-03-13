/*..............................................
9. Dado N, escribir el producto desde 1 hasta N.
..............................................*/
num = 0;
function product(n){
    console.log(`Producto de ${n}, desde 1 hasta ${n}` )
    for(i = 1; i <= n; i++){
    num = n * i;
    console.log(num);
}
}
product(6);