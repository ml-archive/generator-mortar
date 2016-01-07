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
			"buttonName": "Dashboard",
			"href": "/#/"
		},

		{
			"buttonName": "Form Components",
			"href": "",
			"children": [
				{
					"buttonName": "Input",
					"href":       "#/components/input"
				},
				{
					"buttonName": "DropdownSelect",
					"href":       "#/components/dropdown"
				},
			]
		},

		{
			"buttonName": "Visualization Components",
			"href": "",
			"children": [
				{
					"buttonName": "Table",
					"href":       "#/components/table"
				},
			]
		}
	]
};
