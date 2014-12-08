/**
 * Contextual-Evaluation
 * (c) 2014 Felix Lau
 * contextual-eval may be freely distributed under the MIT license.
 */
if(typeof ceval !== 'function') {
	/**
	 * Contextual Evaluation.
	 * @param {string} scripts 
	 * @param {object} context
	 * @returns {any} evaluated result
	 */
	ceval = function(scripts, context) {
		if(context === null || context === undefined) {
			eval(scripts);
		}
		else {
			return new Function(Object.keys(context).join(','), 'return (' + scripts + ')').apply(context, Object.values(context));
		}
	};
}

// Polyfills
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if(!Object.keys) {
	Object.keys = (function() {
		'use strict';
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;

		return function(obj) {
			if(typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [], prop, i;

			for(prop in obj) {
				if(hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if(hasDontEnumBug) {
				for(i = 0; i < dontEnumsLength; i++) {
					if(hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}());
};

if(!Object.values) {
	Object.values = function(obj) {
		'use strict';
		var keys = Object.keys(obj);
		var len = keys.length;
		var values = new Array(len);
		for(var i = 0; i < len; i++) {
			values[i] = obj[keys[i]];
		}
		return values;
	};
};

