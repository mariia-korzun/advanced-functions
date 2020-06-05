# Advanced_functions

## TASK № 1
### Write function "cache":
```js
let complexFunction = function(arg1, arg2) {
	return arg1 + arg2;  // just for example (any logic can be here)
 };

let cachedFunction = cache(complexFunction);
```
### For example:
```js
cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again,
                      // instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed,
            // because the method wasn't invoked before with these arguments
```
<hr>

## TASK № 2
### Create object ladder with 3 methods “up”, “down” and “showStep”. Also it has property “step”. Step initially equal to 0. It should support chaining calls. Up/down - increasing/decreasing counter, showStep - showing current step counter with console.log()

### For example:
```js
ladder.up().up().down().up().showStep(); // 1+1-1+1 = 2
```
<hr>

## TASK № 3
### Write function applyAll(func, arg1, arg2...) which takes function (sum or mul) and arbitrary number of arguments. It should call func( write the realization of sum, mul) with all arguments and return result. Using of call method is mandatory.

### For example:
```js
applyAll(sum, 1, 2, 3); // -> sum(1, 2, 3) = 6
applyAll(mul, 2, 3, 4); // -> mul(2, 3, 4) = 24
```
<hr>
<hr>

## * Don`t change the given functions naming and don't delete this part of code:
```
module.exports = { cache, ladder, applyAll, sum, mul }
```




