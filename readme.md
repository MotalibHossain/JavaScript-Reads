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
    - [x] Asynchronous callback.
    - [x] callback pattern.
    - [x] Clouser.
    - [ ] Hosting.
    - [x] Passing function.
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
# JavaScript Notes
## Syntax
### == vs ===
* == only compares values
* === compares values + type

Example:

```
console.log(false == '0')
console.log(false === '0')
```

Output
```
true
false
```

### NaN

NaN is returned for math operations with non-numeric operands or division by zero. 

Testing for NaN:

Pre-ECMA6:
```
value !== value
```
ECMA6:
```
Number.isNaN()
```
### Scope

Lexical:

```
var downloadManager = {
  initialize: function() {
    var _this = this; // Set up `_this` for lexical access
    $('.downloadLink').on('click', function () {
      _this.startDownload();
    });
  },
  startDownload: function(){
    this.thinking = true;
    // request the file from the server and bind more callbacks for when it returns success or failure
  }
  //...
};
```

Bound:

```
var downloadManager = {
  initialize: function() {
    $('.downloadLink').on('click', function () {
      this.startDownload();
    }.bind(this)); // create a function object bound to `this`
  }
//...
```

### Closure

Inner function which can acccess variables in the outer (enclosing) function’s scope chain. The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.
```
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = 'a';
  
  (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);
    
  })(456);
})(123);
```

Output

```
outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz
```

### Objects in JS

## Important points
### null is an object
```null``` is an object so ```(typeof bar === "object")``` evaluates to ```true```
### Accidental globals
```function () { var a = b = 3; }``` has b as a global variable and a as a local.  To have both as local ```function () { var a = 3; var b = a; }```.  In ECMAScript5 ```use strict``` mode, the js engine would throw b is undefined if you tried to execute ```use strict; function () { var a = b = 3; }```.
### this and closures
In the inner function call / closure, this.foo is undefined and self.foo === "bar" because it no longer refers to myObject.

```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```
### wrapping scripts with function / closure
It is popular to wrap scripts with a function call which creates a closure around the code.  This creates a separate namespace for the code so there aren't clashes between object and function names in different libraries.  For example this is used for jQuery like this:

```(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);```
### use strict mode of ECMAScript5
"use strict" is used in javascript to:
* Makes debugging easier - it makes code errors that would have been ignored before throw errors.
* Prevents accidental global variables - it disallows variable declarations without "var".  Usually when you declare a variable without using var it makes it a global variable.
* Eliminates this coercion - Without use strict, when ```this``` is ```null``` or ```undefined``` then the interpreter would be coerced to the global object.  In strict mode, referring to null or undefined ```this``` throws an error.
* Makes eval() safer - In non-strict mode, eval variables are created in the containing scope.  In non-strict mode, variables won't get attached to the global scope. For example:
  
  ```
  var x = 17;
  var evalX = eval("'use strict'; var x = 42; x");
  console.assert(x === 17);
  console.assert(evalX === 42);
  ```
* Throws error on invalid usage of delete - delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object.  In non-strict mode it fails silently.

### JS Numbers
The output of the code below is unpredictable
```
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```
That is because all numbers in javascript are treated with floating point precision.
### Testing if number is an Integer
You can test if a number is an integer with this function.  ^ is operator for XOR and only works on signed 32-bit integers in two complement format.
```
function isInteger(x) { return (x^0) === x; } 
```
The following solution would also work, although not as elegant as the one above:
```
function isInteger(x) { return Math.round(x) === x; }
```
### How to write a method that adds numbers such that you can call it both of these ways sum(2,3) or sum(2)(3)
Answer 1
```
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
```
Answer 2
```
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
```
### Variable

```
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```
Outputs
```
array 1: length=5 last=j,o,n,e,s
array 2: length=5 last=j,o,n,e,s
```
arr2 is just a reference to arr1 and array.push(['j','o','n','e','s']) adds the array ['j','o','n','e','s'] as a single item to the end of the array.

### Addition and Subtraction

```
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
```

Output:

```
"122"
"32"
"02"
"112"
"NaN2"
NaN
```

### Avoiding stack overflow

```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```

Use setTimeout
```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
```

### 

```
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```

Output
```
5
5
5
5
5
```

This can be fixed by using a closure:
```
for (var i = 0; i < 5; i++) {
  (function(x) {
    setTimeout(function() { console.log(x); }, x * 1000 );
  })(i);
}
```

### || and &&

```
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```

Output:

```
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
```

### Associative array keys

```
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```

Output:

```
456
```

Object properties are stringified so both b and c are "[object Object]"

### Function context

```
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```

Output

```
undefined
John Doe
```

Solution

```
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
```

#Resource:

+ [Events and own custom function](https://stackoverflow.com/questions/18562616/date-range-picker-how-to-fire-an-event-on-entering-a-date)
+ [Property List:](https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery)



+ [Events and own custom function](https://stackoverflow.com/questions/18562616date-range-picker-how-to-fire-an-event-on-entering-a-date)
+ [Property List](https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery)

+ [Events and own custom function](https://stackoverflow.com/questions/18562616/date-range-picker-how-to-fire-an-event-on-entering-a-date)
    + [Property List](https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery)


+ [Events and own custom function](https://stackoverflow.com/questions/18562616/date-range-picker-how-to-fire-an-event-on-entering-a-date)
+ [Property List](https://www.codegrepper.com/code-examples/whatever/get+value+daterangepicker+when+load+in+jquery)
