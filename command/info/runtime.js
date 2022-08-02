const { convertTime } = require("../../lib");

module.exports = {
	name: "runtime",
        alias: "alive"
	category: "info",
	type: "changelog",
	desc: "check time run  bot",
	isSpam: true,
	async run({ msg, conn }, { map }) {
		bot has been alive and running for await msg.reply(convertTime(map.uptime.getTime()));
	},
};
