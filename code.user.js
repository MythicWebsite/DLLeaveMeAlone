// ==UserScript==
// @name         Ignore Duel Links Adblock Prompt
// @license      GNU
// @namespace    https://github.com/MythicWebsite
// @homepageURL  https://github.com/MythicWebsite/DLLeaveMeAlone
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.duellinksmeta.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duellinksmeta.com
// @downloadURL  https://raw.githubusercontent.com/MythicWebsite/DLLeaveMeAlonemaster/code.user.js
// @updateURL    https://raw.githubusercontent.com/MythicWebsite/DLLeaveMeAlone/master/code.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const targetNode = document.body;
    const config = { childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Elements have changed
                var element = document.getElementsByClassName("modal svelte-aeftzs is-active top");
                console.log(element.length);
                if (element.length > 0){
                    console.log('Found it');
                    element[0].remove()
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();
