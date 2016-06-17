# KonamiCodeJS #

Fire a JavaScript Event when you enter the « Up Up Bottom Bottom Left Right Left Right B A » Konami Code Sequence.



<a name="KonamiCode"></a>

## API Documentation ##

* [KonamiCode](#KonamiCode)
    * [new KonamiCode([options])](#new_KonamiCode_new)
    * [.enable()](#KonamiCode+enable)
    * [.disable()](#KonamiCode+disable)
    * [.setListener()](#KonamiCode+setListener)
    * [.setCallback()](#KonamiCode+setCallback)

<a name="new_KonamiCode_new"></a>

### new KonamiCode([options])
Create Konami Code Sequence recognition « Up Up Bottom Bottom Left Right Left Right B A » on specific HTMLElement or on global HTMLDocument.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> &#124; <code>function</code> | Container for all options. If type of `options` is Function, it is executed after Konami Code Sequence has been recognize. |
| [options.callback] | <code>function</code> | If `options` is not a Function, `options.callback` is executed after Konami Code Sequence has been entered. |
| [options.listener] | <code>Node</code> | By default it is the HTMLDocument `window.document`. You can pass some HTMLElement like `<input>` (HTMLInputElement) to only recognize Konami Code Sequence from this element. |
| [options.debug] | <code>boolean</code> | By default it is set to `false`. When you set this value to `true`, that allows you to see all debug message in the console. |

<a name="KonamiCode+enable"></a>

### konamiCode.enable()
Active the listening of Konami Code Sequence.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>
<a name="KonamiCode+disable"></a>

### konamiCode.disable()
Unactive the listening of Konami Code Sequence.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>
<a name="KonamiCode+setListener"></a>

### konamiCode.setListener()
Change the listener. The old listener will no longer work. Note: change the listener enable this instance if it is previously `disable()`.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>
<a name="KonamiCode+setCallback"></a>

### konamiCode.setCallback()
Change the Function executed after Konami Code Sequence has been entered.

**Kind**: instance method of <code>[KonamiCode](#KonamiCode)</code>





## Import JavaScript File ##

### From CDN ###

- For development:

```html
<script src="https://rawgit.com/Haeresis/konami-code-js/master/src/konami-code.js"></script>
```

- For production:

```html
<script src="https://cdn.rawgit.com/Haeresis/konami-code-js/master/src/konami-code.js"></script>
```