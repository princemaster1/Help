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
await conn.sendMessage(msg.from, {text: "Good bye...👋 To add me back use *!join <group link>*"})
await require("delay")(3000);
await conn.groupLeave(msg.from)
    },
}
