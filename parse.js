(function() {
	// Helper Functions
	function getPassageById(pid) {
		return document.querySelector(`[id="${pid}"]`);
	}
	function getPassageByName(pname) {
		return document.querySelector(`[name="${pname}"]`);
	}
	function displayPassage(passage) {}
	// Retrieve and store the story data element.
	let storyData = document.querySelector("tw-storydata");
	let startNode = storyData.attributes["startnode"].value;
	let startPassage = getPassageById(startNode)
	displayPassage(startPassage);
})()
