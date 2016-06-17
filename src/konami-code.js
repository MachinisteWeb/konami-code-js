/**
 * Fire a JavaScript Event when you enter the Up Up Bottom Bottom Left Right Left Right B A Konami Code.
 * @class KonamiCode
 * @version 0.1.0
 * @author {@link http://www.lesieur.name/|Bruno Lesieur}
 * @param {Object}      [options]          - Container for all options. If type of `options` is Function, is executed after Konami Code has been entered.
 * @param {Function}    [options.callback] - If `options` is not a Function, is executed after Konami Code has been entered.
 * @param {Node}        [options.sender]   - By default it's the HTMLDocument `window.document`. You can pass some HTMLElement like `<input>` (HTMLInputElement) to only listen capture of code in this element.
 */
var KonamiCode = function (options) {
	var privates = {};

	privates.sender = (options && options.sender) || document;
	privates.input = "";
	privates.konamiCodeChar = "38384040373937396665";

	privates.afterCodeSequenceCallback =
		(typeof options === "function" && options) ||
		(options && typeof options.callback === "function" && options.callback) ||
		function () { console.log("There are no action defined."); };

	privates.keptLastCodeChar = function () {
		if (privates.input.length > privates.konamiCodeChar.length) {
			privates.input = privates.input.substr((privates.input.length - privates.konamiCodeChar.length));
		}
	};

	privates.checkIfCodeCharIsValid = function () {
		if (privates.input === privates.konamiCodeChar) {
			privates.afterCodeSequenceCallback();
		}
	};

	privates.listeningCodeSequence = function () {
		privates.sender.addEventListener("keydown", function (event) {
			privates.input += event.keyCode;
			privates.keptLastCodeChar();
			privates.checkIfCodeCharIsValid();
		});
	};

	privates.init = function () {
		privates.listeningCodeSequence();
	};

	privates.init();
};