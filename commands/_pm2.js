/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Shadow-Md
 * @author : JoyBoySer <https://github.com/JoyBoySer>
 * @description : Shadow,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const {cmd,tlang} = require('../lib')
cmd({
        pattern: "restart",
        desc: "To restart bot",
        category: "tools",
        filename: __filename
    },
    async(Void, citel,text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            citel.reply('Restarting')
            exec('pm2 restart all')
    }
);
