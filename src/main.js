//add
export function add(a,b){
  return a+b;
}

// sub
export function sub(a,b){
  return a-b;
}

//multiply
export function mul(a,b){
  return a*b;
}

//divide
export function div(a,b){
  return a/b;
}

//isPrime
export function isPrime(num){
  for (let i=2; i<num; i++){
    if(num%i ===0){
      return false
    } else{return true};
  }


}
