import { commandModule, CommandType } from "@sern/handler";
import { publish } from "../plugins/publish";
import { permCheck } from "../plugins/myPermCheck";

export default commandModule({
  type: CommandType.Both,
  plugins: [
    publish(),
    permCheck(
      "bot",
      "ManageChannels",
      `I cannot use this command. Please give me required permissions.`
    ),
  ],
  description: "A ping command",
  execute: async (ctx, args) => {
    await ctx.reply("Pong 🏓");
  },
});
