# KonamiCodeJS #

Fire a JavaScript Event when you enter the « Up Up Bottom Bottom Left Right Left Right B A » Konami Code Sequence with your keyboard. That work also when you do the following touch gesture « Up Up Bottom Bottom Left Right Left Right Tap Tap » with your finger.

-----

**Vous êtes français ? Le README [derrière ce lien](http://blog.lesieur.name/des-easter-eggs-avec-konami-code-js/) vous sera peut-être plus agréable.**





## Basic Usage ##

```js
new KonamiCode(function () {
    // Do something here.
    // This part will be executed if « Up Up Down Down Left Right Left Right B A »
    // is recognised from Keyboard or Touch Gesture.
});
```





## Custom Example ##

In this example, we will authorized only the area of `<article>` to listening Konami Code Sequence and after
fire the Correct Sequence, avoid next Konami Code recognization.

```js
var kc = new KonamiCode({
    listener: document.getElementsByTagName("article")[0]
});

kc.setCallback(function () {
    kc.disable();

    // Do something here.
    // This part will be executed if « Up Up Down Down Left Right Left Right B A »
    // is recognised from Keyboard or Touch Gesture.
});
```





## API Documentation ##

<a name="KonamiCode"></a>

**Version**: 0.8.3

**Author:** [Bruno Lesieur](https://www.lesieur.name/)

* [KonamiCode](#KonamiCode)
    * [new KonamiCode([options])](#new_KonamiCode_new)
    * _instance_
        * [.enable()](#KonamiCode+enable) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.enableKeyboardKeys()](#KonamiCode+enableKeyboardKeys) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.enableTouchGesture()](#KonamiCode+enableTouchGesture) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.disable()](#KonamiCode+disable) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.disabledKeyboardKeys()](#KonamiCode+disabledKeyboardKeys) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.disabledTouchGesture()](#KonamiCode+disabledTouchGesture) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.setListener(listener)](#KonamiCode+setListener) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.setCallback(callback)](#KonamiCode+setCallback) ⇒ <code>[KonamiCode](#KonamiCode)</code>
        * [.setOptions([options])](#KonamiCode+setOptions) ⇒ <code>[KonamiCode](#KonamiCode)</code>
    * _static_
        * [.noConflict()](#KonamiCode.noConflict)
        * [.getNumberOfInstance()](#KonamiCode.getNumberOfInstance) ⇒ <code>number</code>

<a name="new_KonamiCode_new"></a>

### new KonamiCode([options])
Create Konami Code Sequence recognition « Up Up Bottom Bottom Left Right Left Right B A » on specific HTMLElement or on global HTMLDocument.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> &#124; <code>function</code> | Container for all options. If type of `options` is Function, it is executed after Konami Code Sequence has been recognize. |
| [options.callback] | <code>function</code> | If `options` is not a Function, `options.callback` is executed after Konami Code Sequence has been entered. The first parameter provided by the callback is current instance of KonamiCode. |
| [options.listener] | <code>Node</code> | By default it is the HTMLDocument `window.document`. You can pass some HTMLElement like `<input>` (HTMLInputElement) to only recognize Konami Code Sequence from this element. |
| [options.debug] | <code>boolean</code> | By default it is set to `false`. When you set this value to `true`, that allows you to see all debug message in the console. |

<a name="KonamiCode+enable"></a>

### konamiCode.enable() ⇒ <code>[KonamiCode](#KonamiCode)</code>
Active the listening of Konami Code Sequence.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode
<a name="KonamiCode+enableKeyboardKeys"></a>

### konamiCode.enableKeyboardKeys() ⇒ <code>[KonamiCode](#KonamiCode)</code>
Active the listening of Konami Code Sequence for Keyboard Keys.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode
<a name="KonamiCode+enableTouchGesture"></a>

### konamiCode.enableTouchGesture() ⇒ <code>[KonamiCode](#KonamiCode)</code>
Active the listening of Konami Code Sequence for Touch Gesture.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode
<a name="KonamiCode+disable"></a>

### konamiCode.disable() ⇒ <code>[KonamiCode](#KonamiCode)</code>
Unactive the listening of Konami Code Sequence.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode
<a name="KonamiCode+disabledKeyboardKeys"></a>

### konamiCode.disabledKeyboardKeys() ⇒ <code>[KonamiCode](#KonamiCode)</code>
Unactive the listening of Konami Code Sequence for Keyboard Keys.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode
<a name="KonamiCode+disabledTouchGesture"></a>

### konamiCode.disabledTouchGesture() ⇒ <code>[KonamiCode](#KonamiCode)</code>
Unactive the listening of Konami Code Sequence for Touch Gesture.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode
<a name="KonamiCode+setListener"></a>

### konamiCode.setListener(listener) ⇒ <code>[KonamiCode](#KonamiCode)</code>
Change the listener. The old listener will no longer work. Note: change the listener enable this instance if it is previously `disable()`.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>Node</code> | You can pass some HTMLElement like `<input>` (HTMLInputElement) to only recognize Konami Code Sequence from this element. |

<a name="KonamiCode+setCallback"></a>

### konamiCode.setCallback(callback) ⇒ <code>[KonamiCode](#KonamiCode)</code>
Change the Function executed after Konami Code Sequence has been entered.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Function executed after Konami Code Sequence has been entered. The first parameter provided by the callback is current instance of KonamiCode. |

**Example**
```js
new KonamiCode().setCallback(function (konamiCode) {
    konamiCode.disable();
    // Do something here.
});
```
<a name="KonamiCode+setOptions"></a>

### konamiCode.setOptions([options]) ⇒ <code>[KonamiCode](#KonamiCode)</code>
Change options of instance currently existing.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>[KonamiCode](#KonamiCode)</code> - Current instance of KonamiCode

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Container for all options. |
| [options.callback] | <code>function</code> | Function executed after Konami Code Sequence has been entered. The first parameter provided by the callback is current instance of KonamiCode. |
| [options.listener] | <code>Node</code> | By default it is the HTMLDocument `window.document`. You can pass some HTMLElement like `<input>` (HTMLInputElement) to only recognize Konami Code Sequence from this element. |
| [options.debug] | <code>boolean</code> | By default it is set to `false`. When you set this value to `true`, that allows you to see all debug message in the console. |

<a name="KonamiCode.noConflict"></a>

### KonamiCode.noConflict()
If a previous `KonamiCode` variable exist into global environment, you could kept it by changing name of current KonamiCode.
You can also just use that function to change the name of Global « KonamiCode » variable.

**Kind**: static method of <code>[KonamiCode](#KonamiCode)</code>

**Example**
```js
<script src="other/konami-code.js"></script>
<script src="last/konami-code.js"></script>
<script>
    var MyKC = KonamiCode.noConflict();
    console.log(KonamiCode); // Return the other KonamiCode
    console.log(MyKC); // Return your KonamiCode
</script>
```
<a name="KonamiCode.getNumberOfInstance"></a>

### KonamiCode.getNumberOfInstance() ⇒ <code>number</code>
Return the number of time KonamiCode was instanciated.

**Kind**: static method of <code>[KonamiCode](#KonamiCode)</code>

**Returns**: <code>number</code> - Number of KonamiCode instance create from begining.





## Chaining ##

All API instanciated methods return the current instance of `KonamiCode` Object. That allows you to use instance like this.

```js
new KonamiCode()
    .disable()
    .enable()
    .setListener(document.getElementsByTagName("body")[0])
    .setCallback(function (konamiCode) {
        konamiCode.disable();
        // Do something here.
        // This part will be executed if « Up Up Down Down Left Right Left Right B A »
        // is recognised from Keyboard or Touch Gesture.
    });
```





## Debug Mode ##

You can see what step are used with console log message.

```js
new KonamiCode({
    debug: true,
    callback: function (konamiCode) {
        konamiCode.disable();
    }
});
```





## Import JavaScript File ##

### By Direct Download ###

- [https://github.com/MachinisteWeb/konami-code-js/blob/master/src/konami-code.js](https://github.com/MachinisteWeb/konami-code-js/blob/master/src/konami-code.js)



### From NPM ###

```
npm install konami-code-js
```



### From CDN ###

- For development:

```html
<script src="https://rawgit.com/MachinisteWeb/konami-code-js/master/src/konami-code.js"></script>
```

- For production:

```html
<script src="https://cdn.rawgit.com/MachinisteWeb/konami-code-js/master/src/konami-code.js"></script>
```



### With AMD Loader ###

```html
<script src="require.js"></script>
<script>
	requirejs(["konami-code"], function (KonamiCode) {
	    new KonamiCode(function () {
	    	// Do something here.
            // This part will be executed if « Up Up Down Down Left Right Left Right B A »
            // is recognised from Keyboard or Touch Gesture.
	    });
	});
</script>
```



### With CommonJS Loader ###

```js
var KonamiCode = require("konami-code-js");

new KonamiCode(function () {
    // Do something here.
    // This part will be executed if « Up Up Down Down Left Right Left Right B A »
    // is recognised from Keyboard or Touch Gesture.
});
```
