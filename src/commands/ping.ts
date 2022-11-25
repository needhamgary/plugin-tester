import { commandModule, CommandType } from "@sern/handler";
import { publish } from "../plugins/publish";
import { requirePermission } from "../plugins/myPermCheck";
import {
  ActionRowBuilder,
  ComponentType,
  ModalBuilder,
  ModalSubmitInteraction,
  CommandInteraction,
  TextInputStyle,
  TextInputBuilder,
} from "discord.js";

export default commandModule({
  type: CommandType.MenuUser,
  plugins: [publish(), requirePermission("bot", "ManageChannels")],
  execute: async (ctx) => {
    await ctx.reply("thank you");
  },
});
