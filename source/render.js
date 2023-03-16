/* INCLUDEFILE macros.js */

function renderPassage(passage) {
	let passageElem = document.createElement("tw-passage");
	passageElem.innerHTML = passage.innerHTML;
	return passageElem;
}

function createHyperlinks(passageText) {
	// All Hyperlinks are in the [[link]] form:
	//   [[destination]] or [[display|destination]]
	// Additionally, links can have a {macro} inserted between the initial [[ or the closing ]].
	// Macros inserted before the link occur before being sent there, macros placed after the link occur after.
	let linkRegex=insertInto(/\[(?:%1)?\[(.*)\](?:%1)?\]/g, macroRegex);
	return passageText.replace(linkRegex, (match, macroPre, link, macroPost) => {
		let display = link;
		let linkBar = 
	});
}

function gotoPassage(passage, sender) {
	document.querySelector("tw-passage").remove();
	document.body.appendChild(renderPassage(passage));
}
