module.exports = {
  name: "leave",
  use: "leave",
  desc: "The bot will leave the group.",
  category: group,
  isOwner: false,
  isGroup: true,
  isAdmin: true,
  async run({ msg, conn }, { q }) {
  	await conn.groupLeave(msg.from)
    },
}
