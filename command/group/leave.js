module.exports = {
  name: "leave",
  use: "leave",
  desc: "The bot will leave the group.",
  category: "group",
  isOwner: false,
  isGroup: true,
  isAdmin: true,
  async run({ msg, conn }, { q }) {
  	await
await conn.sendMessage(msg.from, {text: "Bot is now leaving group... Good bye..👋\nTo add me back use !join <group link>. See Yah
.."})
await require("delay")(5000);
await conn.groupLeave(msg.from)
    },
}
