// ==UserScript==
// @name        Twitter short-url remover
// @namespace   twitter-t.co
// @match       *://twitter.com/*
// @match       *://*.twitter.com/*
// @grant       none
// @version     1.0
// @author      Mohamed Elashri
// @description Recovers the original link from twitter t.co urls
// @updateURL   https://raw.githubusercontent.com/MohamedElashri/remove-twitter-url/main/userscript.js
// @downloadURL https://raw.githubusercontent.com/MohamedElashri/remove-twitter-url/main/userscript.js
// @supportURL  https://github.com/MohamedElashri/remove-twitter-url/issues

// ==/UserScript==

function getUrl(e) {
	var target = e.target;
	while ((target.tagName != "A" || !target.href) && target.parentNode) {
		target = target.parentNode;
	}
	if (target.tagName != "A") return;
	if (target.href.startsWith("https://t.co")) {
		let url = '';
		e.preventDefault();
		url = e.target.textContent.replace("…","")
		if(url.startsWith("http")) {
			window.open(url, '_blank');
		} else {
			window.open(target.href, '_blank'); 
		}
	}
}


window.addEventListener("click", getUrl);
