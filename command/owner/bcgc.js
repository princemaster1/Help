module.exports = {
	name: "broadcastgroup",
	alias: ["bcgc"],
	desc: "Send Broadcast To Groups",
	use: "<text>",
	category: "private",
	isOwner: true,
	query: "Where is the text for bc",
	async run({ msg, conn }, { q }) {
		let getGroups = await conn.groupFetchAllParticipating();
		let groups = Object.entries(getGroups)
			.slice(0)
			.map((entry) => entry[1]);
		let anu = groups.map((v) => v.id);
		for (let i of anu) {
			await require("delay")(3000);
			await conn.sendMessage(i, { text: q + "\n\n*Dreaded Bot*" });
		}
		await msg.reply("Success");
	},
};
