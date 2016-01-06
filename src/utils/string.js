String.prototype.format = function() {
	var self = this,
		formats = self.match(/{(:?\d*)}/g), // an array of formats `{}` found in the string
		counter = 0, // A counter to keep track of what index to replace with
		args = arguments; // Dereferencing arguments for use in the nested code blocks

	if (formats) {
		formats.forEach(function(format) { // We loop through each format expression in the array
			var namedMatch = format.match(/{:(\d+)}/); // Checking if the format is a named replacement (i.e. {:1})

			if (namedMatch) { // If it is a named match, we replace all instances of that in one go.
				var reg = new RegExp(format, 'g');
				if (self.match(reg)) { // If the named match wasn't replaced yet, we replace it
					self = self.replace(reg, args[namedMatch[1]]); // Make the replacement

					/**
					 * The counter is used to make sure we're always replacing in the right order.
					 * String.format() will replace all non-named replacements `{}` with
					 * the first unused string replacement in args.
					 *
					 * Example:
					 * ```
					 * "Hello {}!  My name is {:1}.  I love {}, because I am {:1}. I also like {}.  See you later -{:1}"
					 *	.format('world', 'Kyle', 'candy', 'jazz');
					 * ```
					 *
					 * Flow:
					 * (counter = 0)
					 * First {}    -> 'world'      ( counter = 1 )
					 * All {:1}    -> 'Kyle'       ( counter = 2 )
					 * Second {}   -> 'candy'      ( counter = 3 )
					 * Second {:1} -> not replaced ( counter = 3 )
					 * Final {}    -> 'jazz'       ( counter = 4 )
					 *
					 * As you can see, we maintained the order of replacements for non-named values,
					 * while still replacing with named values
					 */
					counter+= counter > namedMatch[1] ? 0 : 1;
				}
			} else {
				var reg = new RegExp(format); // If it's not a named replacement...
				self = self.replace(reg, args[counter]); // replace it with the next replacement in line
				counter+= 1;
			}
		});
	}

	return self; // return the completed string (this)
};

String.prototype.ucfirst = function () {
	return this.replace(/\w\S*/g, function (text) {
		return text.charAt(0).toUpperCase() + text.substr(1).toLocaleLowerCase();
	});
};

