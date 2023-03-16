function insertInto(reciever) {
	let validInsertRegExp = /(?<!\\)(%[1-9][0-9]*)%?/g
	let recPattern = reciever.source.replace(validInsertRegexp, (match, index) => {
		let idx = parseInt(index.substring(1));
		if (isNaN(idx)) return match;
		return arguments[idx].source;
	});
	return new RegExp(recPattern, reciever.flags)
}
