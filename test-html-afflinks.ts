import { PrismaClient } from '@prisma/client';
import { Telegraf } from 'telegraf';
const prisma = new PrismaClient()
const bot = new Telegraf("5648181374:AAGWBds6q3ltIA021zA5-Qr68rg6YgAiRpM");

async function main() {
    const usefulInformationAffLinks = await prisma.usefulInformationAffLink.findMany({
        where: {
            deletedAt: null
    }
    });
    let i = 0;
    const interval = setInterval(async () => {
        const usefulInformationAffLink = usefulInformationAffLinks[i];
        
        try {
            await bot.telegram.sendMessage("-694015973", usefulInformationAffLink.html + `\n\n Hi <b>This is the correct html for this afflinks name ${usefulInformationAffLink.name}</b>`, { parse_mode: "HTML" })            
        } catch (err: any) {
            try {
                console.log(err.message);
                console.log(`The html is send wrongly for the afflinks name: `, usefulInformationAffLink.html);
                await bot.telegram.sendMessage("-694015973", `Hi <b>This is the wrong html for this afflinks name ${usefulInformationAffLink?.name}</b>`, {parse_mode: "HTML"})
            } catch(err) {}
        }
        console.log("The html for afflinks name is sent: ", usefulInformationAffLink.name);
        i++;
        if (i === usefulInformationAffLinks.length) {
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