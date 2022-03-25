/*                           °#O°
                            o#@@@o
                           o@####@o
                          *@#@@@##@*
 *o°..                    ###@@@@###                    .°°**
 .o@@@#OOo*°.            .##@@@@@@##.            .°*oO##@@#o
    *#@@@@@@##o*°         ###@@@@###         .*oO#@@@@@@#*
      .o##@@@@@@@#O*.     *@#@@@##@*     .*O#@@@@@@@@#o.
         .*O#@@@@@@@#O*.   o######o   .*O@@@@@@@@#O*.
             .°oO#@@@@@@o.  o@@@@*  .o@@@@@@#Oo°.
                  ..°*oO##o  °OO°  o##Oo*°..
.°*oOO###########OOooo*°°..        ..°°**ooOO###########OOo*°.
  ..°°***ooooOOooooo****°.          .°****oooooOOoooo***°°..
                 .°*ooOoo°.        .°oOOoo*°.
             °oO##Ooo°.                .°ooO##Oo°
    __________  ________________  ____  __  ___   ___   ______
   / ____/ __ \/ ____/ ____/ __ \/ __ \/  |/  /  |__ \ / ____/
  / /_  / /_/ / __/ / __/ / / / / / / / /|_/ /   __/ //___ \
 / __/ / _, _/ /___/ /___/ /_/ / /_/ / /  / /   / __/____/ /
/_/   /_/ |_/_____/_____/_____/\____/_/  /_/   /____/_____/
      Copyright © 2022 Freedom 25 - All Rights Reserved    */

import { Client } from "discord.js";
import {Commands} from "../Commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands)

        client.user.setActivity('for /help', { type: 'WATCHING' })
        console.log(`${client.user.username} is online`);
    });
};