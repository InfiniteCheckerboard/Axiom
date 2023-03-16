(function() {
	/* INCLUDEFILE regexp.js */
	/* INCLUDEFILE helper.js */
	/* INCLUDEFILE render.js */
	// Retrieve and store the story data element.
	let storyData = document.querySelector("tw-storydata");
	let startNode = storyData.attributes["startnode"].value;
	let startPassage = getPassageById(startNode)
	displayPassage(startPassage);
})()
