/**
 * Create Konami Code Sequence recognition « Up Up Bottom Bottom Left Right Left Right B A » on specific HTMLElement or on global HTMLDocument.
 * @class KonamiCode
 * @version 0.2.0
 * @author {@link http://www.lesieur.name/|Bruno Lesieur}
 * @param {Object|Function} [options]             - Container for all options. If type of `options` is Function, it is executed after Konami Code Sequence has been recognize.
 * @param {Function}        [options.callback]    - If `options` is not a Function, `options.callback` is executed after Konami Code Sequence has been entered.
 * @param {Node}            [options.listener]    - By default it is the HTMLDocument `window.document`. You can pass some HTMLElement like `<input>` (HTMLInputElement) to only recognize Konami Code Sequence from this element.
 * @param {boolean}         [options.debug]       - By default it is set to `false`. When you set this value to `true`, that allows you to see all debug message in the console.
 */
var KonamiCode = function (options) {
	var publics = this,
        privates = {};

    /**
     * Active the listening of Konami Code Sequence.
     * @function enable
     * @memberOf KonamiCode#
     */
    publics.enable = function () {
        privates.listenCodeSequence();
		privates.debug && privates.debug("Listener enabled.");
    };

    /**
     * Unactive the listening of Konami Code Sequence.
     * @function disable
     * @memberOf KonamiCode#
     */
    publics.disable = function () {
        privates.stopCodeSequence();
		privates.debug && privates.debug("Listener disabled.");
    };

    /**
     * Change the listener. The old listener will no longer work. Note: change the listener enable this instance if it is previously `disable()`.
     * @function setListener
     * @memberOf KonamiCode#
     */
    publics.setListener = function (listener) {
    	privates.stopCodeSequence();
		privates.listener = listener || document;
		privates.listenCodeSequence();
		privates.debug && privates.debug("Listener changed.", listener);
    };

     /**
     * Change the Function executed after Konami Code Sequence has been entered.
     * @function setCallback
     * @memberOf KonamiCode#
     */
    publics.setCallback = function (callback) {
    	privates.afterCodeSequenceCallback = (typeof callback === "function" && callback) || privates.defaultCallback;
		privates.debug && privates.debug("Callback changed.", callback);
    };

	privates.keptLastCodeChar = function () {
		if (privates.input.length > privates.konamiCodeChar.length) {
			privates.input = privates.input.substr((privates.input.length - privates.konamiCodeChar.length));
		}
	};

	privates.defaultCallback = function () {
		privates.debug && privates.debug("Konami Code Sequence Entered. There is no action defined.");
	};

	privates.checkIfCodeCharIsValid = function () {
		if (privates.input === privates.konamiCodeChar) {
			privates.afterCodeSequenceCallback();
		}
	};

	privates.codeSequenceEvent = function (event) {
		privates.input += event.keyCode;
		privates.keptLastCodeChar();
		privates.checkIfCodeCharIsValid();
	};

    privates.stopCodeSequence = function () {
        privates.listener.removeEventListener("keydown", privates.codeSequenceEvent);
    };

	privates.listenCodeSequence = function () {
        privates.stopCodeSequence();
		privates.listener.addEventListener("keydown", privates.codeSequenceEvent);
	};

	privates.checkDebugMode = function () {
		if (options && options.debug === true) {
			privates.debug = function (message, obj) {
				console.log(message, obj);
			};
			privates.debug && privates.debug("Debug Mode On.");
		} else {
			privates.debug = false;
		}
	};

	privates.init = function () {
		privates.listener = (options && options.listener) || document;
		privates.input = "";
		privates.konamiCodeChar = "38384040373937396665";

		privates.checkDebugMode();

		privates.afterCodeSequenceCallback =
			(typeof options === "function" && options) ||
			(options && typeof options.callback === "function" && options.callback) ||
			privates.defaultCallback;

		privates.listenCodeSequence();
	};

	privates.init();
};