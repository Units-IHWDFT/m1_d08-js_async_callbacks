![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Async & callbacks
# Module 1 - Day 8

## Functions

At the nomenclature level, there are:

- **Nominal functions**: they have declaration and invocation, with high reusability.
  ````javascript
  function sayHi(name){
    console.log(`Hello, ${name}!`)
  }
  ````
- **Anonymous functions**: no declaration, only invocation. Used in a single context.
  ````javascript
  names.forEach(function(elm) => {
     console.log(`Hello, ${elm}!`)
  })
  ````
  
At the structure level, there are: 
- **Function statement**: they have the reserved word `function`, parentheses for their parameters and block:
  ````javascript
  function getTotals(subtotal, tax){
    return subtotal + tax
  }
  ````
- **Arrow function**: they lack the reserved word `function`, the parenthesis in their parameters can be omitted in front of a single parameter, and they have an arrow before the opening of their block (block can be omitted in functions of a single instruction).
  ````javascript
  const getTotals = (subtotal, tax) => subtotal + tax
  ````

Functions can recieve arguments as parameters and return data. It is possible to implement as a last parameter the propagation operator to create an array with the remaining parameters:

  ````javascript
  const getInvoiceTotal = (tax, ...products) => tax + products.reduce((acc, product) => acc + product.price, 0)
  ````
  
## Variable scope

- Variables declared inside a block or function are called **local** or **private**, accessible only within that context.
- Variables declared outside any block or function are called **global** or **public**, accessible from anywhere in the script.

## Main points: async programming

- Javascript is a **single-threaded** language ([single-threaded](1)), so it cannot perform multiple tasks at the same time.
- It is also **synchronous**, since tasks are executed one after the other following the program sequence, where high-cost tasks in terms of time generate natural bottlenecks in the flow.
- Based on this nature, there are several asynchronous resources available to manage scheduled and/or parallel tasks. Among them, we find non-blocking methods such as `.setTimeout()` or `.setInterval()`.

## Main points: callbacks

A **callback** is a function that receives as parameter another function, invoking it inside:
````javascript
function foo = callback => callback()
````

[1]: https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading