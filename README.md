# Contextual Evaluation
Contextual-eval is a tiny JavaScript function in evaluating your expression with specified your own context.

## Syntax
JavaScript comes with `eval` function to evaluate any expression. But unfortunately, you cannot specify the context in the evaluation.
````javascript
eval(string);
````
contextual-eval in short `ceval` is able to specify your own context by passing an extra argument.
````javascript
ceval(string, context);
````

## Usages
````javascript
var value = ceval('x + y', {x: 1, y: 2});

````
`Result`: `value = 3`

## License
Contextual-eval is released under [MIT License](http://en.wikipedia.org/wiki/MIT_License).
