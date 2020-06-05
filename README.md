# Advanced_functions

1.	Write function "cache":
         let complexFunction = function(arg1, arg2) {
	  return arg1 + arg2;  // just for example (any logic can be here)
 };
 
let cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); 
// complex function should not be invoked again,
                      // instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed,
            // because the method wasn't invoked before with these arguments

2.	Create object ladder with 3 methods “up”, “down” and “showStep”. Also it has property “step”. Step initially equal to 0. It should support chaining calls.
Up/down - increasing/decreasing counter
showStep - showing current step counter with console.log() (ESlint should ignore this line)

 ladder.up().up().down().up().showStep(); // 1+1-1+1 = 2

 3. Write function applyAll(func, arg1, arg2...) which takes function (can be any mathematical operation) and arbitrary number of arguments.
It should call func( write the realization of sum, mul, or any other mathematical functions) with all arguments and return result. Using of call method is mandatory.
Provide two solutions: 
●	using ES6; 
●	not using ES6 (in this case fix ONLY this ESLint errors by special comments)
applyAll(sum, 1, 2, 3); // -> sum(1, 2, 3) = 6
applyAll(mul, 2, 3, 4); // -> mul(2, 3, 4) = 24


