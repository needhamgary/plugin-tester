import { commandModule, CommandType } from "@sern/handler";
import { publish } from "../plugins/publish";
import { requirePermissions } from "../plugins/requirePermissions";
import {
	ActionRowBuilder,
	ComponentType,
	ModalBuilder,
	ModalSubmitInteraction,
	CommandInteraction,
	TextInputStyle,
	TextInputBuilder
} from "discord.js";

export default commandModule({
	type: CommandType.Slash,
	description: "ping the bot",
	plugins: [
		publish(),
		requirePermissions<CommandType.Slash>("bot", ["ManageChannels"])
	],
	execute: async (ctx) => {
		await ctx.reply("thank you");
	}
});
