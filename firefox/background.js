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