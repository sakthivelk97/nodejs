
import * as main from "./main.js"

test("adding two numbers",()=>{

 const result =  main.add(2,3);

  expect(result).toBe(5)

})

//sub
test("subtract two numbers", ()=>{
  const result = main.sub(2,1)
  expect(result).toBe(1)
})

//mul
test("multiply two numbers", ()=>{
  const result = main.mul(2,3)
  expect(result).toBe(6)
})

//div
test("divide two numbers", ()=>{
  const result = main.div(4,2)
  expect(result).toBe(2)
})

//isPrime
test("isPrime",()=>{
  const result = main.isPrime(17)
  expect (result).toBe(true)
})