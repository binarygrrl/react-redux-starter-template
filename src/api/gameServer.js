const IntelislotsAPI = {
	apiBody: (data) => {
		return JSON_.stringify({
			data: {
				attributes: data
			}
		});
	},

	authenticate: (creds) => {
		return this.create('user_token', { auth: creds }).then(({ jwt }) => {
			AuthHelper.setAuthToken(jwt);
			return jwt;
		});
	},
	register: (data) => {
		return this.create('user', data);
	},
	resetPassword: (data) => {
		return this.update('passwords/reset', data);
	},
	getMenu: (data) => {},
	initializeGame: (data) => {},
	updateBalance: (data) => {},
	requestBalance: (user) => {},
	playStatus: (user) => {},
	finalizeGame: (data) => {},
	loadGame: (game) => {},
	getSessionID: (data) => {},
	closeSession: (sessionID) => {}
};
