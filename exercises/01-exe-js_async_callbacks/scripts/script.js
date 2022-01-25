//Exercise 1: What is the expected output? And why?

function print() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  console.log(4);
}

print(); 

//OUTPUT: 1
//        4
//        3
//        2

// ------------------------------------------------------------------------


//Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second 
// - For every number divisible by 3 it prints BOOM!!
// - For every number divisible by 5 it prints a BANG!!
// - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 



function blast(){
    let num = 0
    let id = setInterval(() => {
          num++
          if (num % 5 == 0 && num % 3 == 0 ) {
            console.log('BOOM BANG!!')
          }
          else if (num % 5 == 0 ) {
            console.log('BANG!!')
          }
          else if (num % 3 == 0 ) {
            console.log('BOOM!!')
          }
          else {
              console.log(num)
          }
          if (num == 15) {
              clearInterval(id)
          }
    }, 1000)
}

blast()
