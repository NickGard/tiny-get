# tiny-get

[![source](https://badgen.net/npm/v/@ngard/tiny-get)](https://www.npmjs.com/package/@ngard/tiny-get)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-get)](https://bundlephobia.com/result?p=@ngard/tiny-get)
[![build status](https://badgen.net/travis/NickGard/tiny-get)](https://travis-ci.org/NickGard/tiny-get)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal-weight utility similar to `lodash.get`. For when every byte counts!

<hr/>

lodash.get [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.get)](https://bundlephobia.com/result?p=lodash.get)
<br/>
tiny-get [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-get)](https://bundlephobia.com/result?p=@ngard/tiny-get)

<hr/>

## Syntax

```js
get(/* root, path [, default] */)
```

## Parameters

`root` - An object or array to traverse
<br/>
`path` - A string of the path, or an array of property names to be traversed
<br/>
`default` - [optional] A value to be returned if the path does not exist or results in an undefined value

## Return

The value found at the path on the root object or array, if it exists. If the path is invalid or results in
an undefined value, then `tiny-get` will return `undefined` or the default value if passed.

## Example

```javascript
import { get } from '@ngard/tiny-get';

const value = get(baseObj, 'really.deep.value', 'defaultValue');
const value = get(baseObj, 'really["deep"].value', 'defaultValue');
const value = get(baseObj, ['really', 'deep', 'value'], 'defaultValue');
```
