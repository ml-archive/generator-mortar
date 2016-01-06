/**
 * General CMS configuration
 *
 * @type {{baseUrl: string}}
 */
module.exports = {
	base: require('./base-config'),

	header: {
		title: 'Admin UI',
		homepage: 'http://www.fuzzproductions.com',
		buttons: []
	},

	login: {
		authType: 'username',
		validator: /.*/
	},

	navbar: [
		{
			"buttonName": "Sessions",
			"href":       "#/sessions"
		}
	]
};
