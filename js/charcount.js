'use strict';

/**
 * Handle backward compat for stupid IE browsers
 * @source: http://stackoverflow.com/a/25674763/1930236
 */
if (typeof Element.prototype.addEventListener === 'undefined') {
    Element.prototype.addEventListener = function (e, callback) {
        e = 'on' + e;
        return this.attachEvent(e, callback);
    };
}

var textArea = document.getElementById('jm_tc[twitterPostPageDesc]'), textAreaParent = textArea.parentNode,
    textAreaLength = textArea.value.length, maxLength = 200, span = document.createElement('span');

span.id = 'tc-charcount';
span.textContent = textAreaLength + '/' + maxLength;

textAreaParent.appendChild(span);

if (typeof( textArea.addEventListener ) !== 'undefined') {

    textArea.addEventListener("keyup", function (evt) {

        var Length = evt.target.value.length,
            span = document.getElementById('tc-charcount');

        if (Length > 200) {
            span.style.color = '#f00';
        }

        span.textContent = Length + '/' + maxLength;
    }, false);


}

