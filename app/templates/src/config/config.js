/**
 * General CMS configuration
 *
 * @type {{baseUrl: string}}
 */
module.exports = {
	base: require('./base-config'),

	header: {
		title    : 'Admin UI',
		homepage : 'http://www.fuzzproductions.com',
		buttons  : []
	},

	login: {
		authType  : 'username',
		validator : /.*/
	},

	navbar: [
		{
			"buttonName" : "Dashboard",
			"href"       : "/#/"
		},

		{
			"buttonName" : "Additional Page",
			"href"       : "",
			"children"   : [
				{
					"buttonName" : "Page",
					"href"       : "#/page/"
				}
			]
		}
	]
};
