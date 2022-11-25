import { EventType, eventModule } from "@sern/handler";
import { ActivityType } from "discord.js";
import { client } from "../../index";

export default eventModule({
  type: EventType.Discord,
  name: "ready",
  execute() {
    client.user?.setPresence({
      activities: [{ name: "sern plugins", type: ActivityType.Listening }],
      status: "online",
    });
    console.log(client.user!.tag + "has logged into discord.");
  },
});
