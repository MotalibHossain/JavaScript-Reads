<center>
<h1>JavaScript Notes</h1>
<hr>
</center>
# Contents:

- [x] Selectors.
- [x] JavaScripts Events.
- [x] JavaScripts ndition.
- [x] JavaScripts functions.
    - [ ] Optional chaining.
    - [ ] Asynchronous callback.
    - [ ] callback pattern.
    - [ ] Clouser.
    - [ ] Hosting.
    - [ ] Passing function.
    - [ ] Defualt parameter.
    - [ ] Implecitt return.
    
- [x] Traversing.
- [x] Create form using click event using Jquery.
- [x] Create form using functional javascript.
- [x] Compleate javascript Crud Operations.
- [x] Compleate Jquery Crud Operations.
- [x] Jquery daterangepicker whole plugin.
- [x] Jquery DataTable plugin.


<center>
<h1>JavaScript ES6 Note</h1>
<hr>
</center>
# ES6 Features

 - Variables creation using "let" and "const"
 - Template Strings
 - Arrow Functions
 - Rest and Spread Operator
 - Destructuring
 - Array functions: find() and findIndex()
 - Classes
 - Promises
 - ES6 Collections
   - Map
   - Set


 All Features Of ES6 are not supported in browsers. 
  - Therefore we use 'Babel'
  - It is a preprocessor of JavaScript
  - It is used to convert ES6 code into a backward compatible version of JavaScript that can be run by browsers.

<strong>Template Strings</strong>
  - It is just a string which allows embedding expressions inside it.
  - To create it we do not need to use single/double quotes. We use '${}' to embed expressions.

Arrow Functions
  - shorter syntax of function expression
  ```js 
  declared like :
    const add=(x, y)=>x+y
  ```

Rest Operator
  - denoted by '(...)'
  - it allows us to represent an indefinite number of arguments as an array

Spread Operator
  - Spread syntax allows arrays and objects to be expanded into
	1) 'elements' in case of 'array'
	2) 'key-value' pairs in case of object  

```js
let summation=(...arguments)=>{
    let sum=0
    for(let i in arguments){
        sum=sum+arguments[i];
        // console.log(sum)
    }
    console.log(sum);
};
summation(10,20,30)
```
Destructuring
  - It allows us to "unpack" arrays or objects into a bunch of variables which make working with them a bit more convenient
```js
Example: 
    array=[10,5,6,8,9,10] 
    Let [“n1”,”n2”,”n3”,”n4”]=array
```

Array Function : map()
  - It iterates the array for us and we can pass a callback function to perform some operation on each array item. 
  - The Updated values can be returned by the callback function to create a new array.

```js
  Syntax: 
    array.map((item)=>{
     		//callback function body
  	})	
```

Array Function : reduce()
  - same as map function but it passes the result of the callback from one iteration to the next one.

```js
  Syntax: array.reduce((accumulator, item)=>{
   	     //callback function body	
  	  }, accumulator_default_value)	 
```
<strong>Array Function : filter()</strong>
  - it iterates through the array to create a new array
  - we can decide which elements should be added in the new array based on some conditions.
```js
  Syntax: array.filter(item=>{
      //return true/false to add/skip the current item
  })
```
<strong>Array Function : find() and findIndex()</strong>
  - 'find()' is used to search for an element in the array that matches the same condition. It returns the first matching element
  - 'findIndex()' method returns the index of the element instead of element itself 

```js
Example: array=[4,5,7,8,9,4,5]
console.log(array.find(x=>x>5)) 
Result=7
console.log(array.findIndex(x=>x>5))
Result=2
```
[Read more....Find() and FindIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Classes in ES6
  - to create object factories we use 'class' keyword	

Inheritance in ES6
  - we use keyword 'extends' to inherit class 

Promise in ES6
```js
  - Syntax: const mPro = new Promise(resolve, resolve)=>{
	    	// promise body
	        // call resolve() when the operation is complete
		// call reject() when the operation is complete
    });
```
  - <p>'then()' method is executed when the resolve() is executed. It receives data passed in the resolve() method as an argument.
  - 'catch()' method is called when the reject() method is executed. It receives the data passed in the reject() method as arguments.</p> 

Callbacks and Promises in ES6
  - when javascript run an asynchronous operation we give the operation a function to call when it is completed. This function is called a Callback function.
  - A 'Promise' is used to handle asynchronous results of an operation. It defers the execution of a code block until an asynchronous request is completed. This way other operations can keep running without interruption.
  - A 'Promise' has 3 states -> 1)Pending 2)Fulfilled, 3)Rejected

<<<<<<< HEAD
#Resource:

+ Events and own custom function: (https://stackoverflow.com/questions/18562616/date-range-picker-how-to-fire-an-event-on-entering-a-date)
+ Property List: (https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery
<<<<<<< HEAD

<<<<<<< HEAD

+ [Events and own custom function] (https://stackoverflow.com/questions/18562616date-range-picker-how-to-fire-an-event-on-entering-a-date)
+ [Property List](Property List:https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery)

=======
+ [Events and own custom function] (https://stackoverflow.com/questions/18562616/date-range-picker-how-to-fire-an-event-on-entering-a-date)
    + [Property List](Property List:https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery)
>>>>>>> 1b999b91dc7127eb272c61d96e5e43001cc4dbb5
>>>>>>> 42f7fa16f390c8351425cb0453641cd77651b2c8
=======
=======

+ [Events and own custom function] (https://stackoverflow.com/questions/18562616/date-range-picker-how-to-fire-an-event-on-entering-a-date)
    + [Property List](Property List:https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery)
>>>>>>> 1b999b91dc7127eb272c61d96e5e43001cc4dbb5
>>>>>>> 42f7fa16f390c8351425cb0453641cd77651b2c8
