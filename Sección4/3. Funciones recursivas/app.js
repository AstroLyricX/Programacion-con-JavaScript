// ------ Funciones Recursivas ----

function factorial(n){
    if ((n==0)||(n==1)) {
        return 1;
    }else{
        return(n*factorial(n-1));
    }
}
let n=factorial(4);
console.log(n);


let factorial1 = function(n){
    if ((n==0)||(n==1)) {
        return 1;
    }else{
        return(n*factorial1(n-1));
    }
}
console.log(factorial1(4));


