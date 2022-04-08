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
