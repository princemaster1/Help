module.exports = {
	name: "scriptbot",
	alias: ["script", "sc", "scbot"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await conn.sendMessage(
			msg.from,
			{
				image: { url: config.thumb },
				footer: config.namebot,
				// Gausah di ubah kontol najis modal copas sana sini ubah source cih
				caption: `Bot Script Below\nFollow fork and give star lol...`,
				templateButtons: [
					{ urlButton: { displayText: "Bot Codes", url: "https://github.com/Fortunatusmokaya/Help" } },
				],
			},
			{ quoted: msg }
		);
	},
};
