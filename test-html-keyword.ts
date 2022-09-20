import { Keyword } from './src/@generated/prisma-nestjs-graphql/keyword/keyword.model';
import { KeywordGroup } from './src/@generated/prisma-nestjs-graphql/keyword-group/keyword-group.model';
import { PrismaClient } from '@prisma/client';
import { Telegraf } from 'telegraf';
const prisma = new PrismaClient()
const bot = new Telegraf("5648181374:AAGWBds6q3ltIA021zA5-Qr68rg6YgAiRpM");

async function main() {
    const keywordGroups = await prisma.keywordGroup.findMany({
        where: {
            deletedAt: null
        },
        include: {
            keywords: true
        }
    });
    let i = 0;
    const interval = setInterval(async () => {
        const keyGroup = keywordGroups[i];
        let keywordString = "";
        keyGroup.keywords?.forEach((keyword: Keyword) => {
            keywordString += `${keyword.text} `;
        });
        try {
            await bot.telegram.sendMessage("-694015973", keyGroup.html! + `\n\n Hi <b>This is the correct html for this keyword ${keywordString}</b>`, { parse_mode: "HTML" })            
        } catch (err: any) {
            try {
                console.log(err.message);
                console.log(`The html is send wrongly for the key word: `, keywordString);
                await bot.telegram.sendMessage("-694015973", `Hi <b>This is the wrong html for this keyword ${keywordString}</b>`, {parse_mode: "HTML"})
            } catch(err) {}
        }
        console.log("The html for keyword is sent: ", keywordString);
        i++;
        if (i === keywordGroups.length) {
            clearInterval(interval);
        }
    }, 5000);

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })