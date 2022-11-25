import { commandModule, CommandType } from "@sern/handler";
import { publish } from "../plugins/publish";
import { requirePermission } from "../plugins/myPermCheck";

export default commandModule({
  type: CommandType.Both,
  plugins: [publish(), requirePermission("user", "ManageChannels")],
  description: "A ping command",
  execute: async (ctx, args) => {
    await ctx.reply("Pong 🏓");
  },
});
