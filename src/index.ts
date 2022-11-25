import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { Sern } from '@sern/handler';

export const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent, //Make sure this is enabled for text commands!
	],
});
//View docs for all options
Sern.init({
	client,
	commands: 'dist/commands',
	events: 'dist/events',
});

client.login(process.env.TOKEN);
