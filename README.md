


parametric
==========

Pseudo method overloading for JavaScript.

## Usage

<!--

You can use parametric in a couple different ways.

### First Method

-->

Call `parametric.overload` inside a function that will have more than one parameter signature.

For example, suppose you'd like to make a function called `myFunction` that can
receive different arguments based on what you want it to do. Let's say you'd
like myFunction to be called with three arguments:

```javascript
myFunction("some string", 4.5, function() {
    // ...
});
```

or with just two arguments:

```javascript
myFunction("another string", function() { // notice the number argument was dropped.
    // ...
});
```

You can use parametric to set rules for the arguments that can be passed to your function. Call parametric inside your function like this:

```javascript
var parametric = require('parametric');

function myFunction( /*parameters are not needed here*/ ) {
    return parametric.overload(arguments,
        [
            ["", 0, function(){}], // signature of a function that takes a string, number, and function as arguments.
            ["", function(){}] // signature of a function that takes a string and function as arguments.
        ],
        [
            function(stringVar, someNumber, callback){ /*... do something here ...*/ },
            function(stringVar, callback){ /*... do something here ...*/ }
        ]
    );
}

// called with three args:
myFunction('hello', 3.14159, function(){console.log('awesome')});
// called with two args:
myFunction('hello', function(){console.log('awesome, but I want some pie.')});
```

The first argument passable to parametric is always the javascript built-in `arguments`, which contains the
arguments that eventually get passed to your function.

The second argument to parametric is an array of signatures accepted by your
function where each signature is an array of javascript literals that represent
a possible combination of data types accepted by your function. In the above
example, `myFunction` can accept an argument list consisting of a string, a
number, and a function, or it can accept an argument list consisting of a
string and a function.

The last argument to parametric is an array of functions that correspond to the
array of signatures in the first argument. In the above example, when
`myFunction` is called, parametric matches up the arguments passed to
`myFunction` with a signature in the array of signatures, and will call the
corresponding function from the array of functions. Just make sure the order of
the functions is in the same order as the signatures.

If the arguments don't match a signature, nothing gets executed, and a message is console.logged.

Lastly, be sure to return the value returned from parametric.overload() as the return value for your function (notice the `return` in the first line of `myFunction` in the above example).

<!--

### Second Method

Note: This method is not implemented yet. Only the first method works for now.

The second way to use parametric is more similar to traditional method overloading:

```javascript
var parametric = require('parametric');

var myFunction;

parametric.overload(myFunction, ["", "", 1], function(stringOne, stringTwo, number) {
    // do stuff with the three arguments.
});
parametric.overload(myFunction, ["", 1], function(stringOne, number) {
    // do stuff with the two arguments.
});
```

-->

### Contributing

Any suggestions, pull requests, patches, etc., are most welcome!
