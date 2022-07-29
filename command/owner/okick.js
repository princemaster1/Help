module.exports = {
	name: "wasted",
	use: "<tag>",
	category: "group",
	desc: "owner can kick members group",
	wait: true,
	isGroup: true,
	isBotAdmin: true,
        isOwner: true,
        noPrefix: true,
	isAdmin: false,
	isSpam: true,
	async run({ msg, conn }, { q, prefix }) {
		let participant = msg.mentions[0]
			? msg.mentions[0]
			: msg.quoted
			? msg.quoted.sender
			: q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
		await conn
			.groupParticipantsUpdate(msg.from, [participant], "remove")
			.then((res) => msg.reply("Mahn... He/She does not make sense... 👣 "))
			.catch((err) => msg.reply(err));
	},
};
