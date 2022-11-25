// @ts-nocheck
/**
 * This is perm check, it allows users to parse the permission you want and let the plugin do the rest. (check user for that perm).
 *
 * @author @NeoYaBoi [<@762918086349029386>]
 * @version 1.0.1
 * @example
 * ```ts
 * import { permCheck } from "../plugins/permCheck";
 * import { commandModule } from "@sern/handler";
 * export default commandModule({
 *  plugins: [ permCheck('permission', 'No permission response') ],
 *  execute: (ctx) => {
 * 		//your code here
 *  }
 * })
 * ```
 */

import { type GuildMember, PermissionResolvable } from "discord.js";
import { client } from '../index';
import { CommandType, EventPlugin, PluginType } from "@sern/handler";
export function botPermCheck(
	perm: PermissionResolvable,
	response: string
): EventPlugin<CommandType.Both> {
	return {
		type: PluginType.Event,
		description: "Checks bot perms",
		async execute(event, controller) {
			const [ctx] = event;
			if (ctx.guild === null) {
				ctx.reply("This command cannot be used here");
				console.warn(
					"PermCheck > A command stopped because we couldn't check a users permissions (was used in dms)"
				); //delete this line if you dont want to be notified when a command is used outside of a guild/server
				return controller.stop();
			}
			let mem = ctx.guild.members.me;
			if (!(mem! as GuildMember).permissions.has(perm)) {
				await ctx.reply(response+`\`${perm}\` permission.`);
				return controller.stop();
			}
			return controller.next();
		},
	};
}