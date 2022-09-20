import { PrismaClient } from '@prisma/client';
import { Telegraf } from 'telegraf';
const prisma = new PrismaClient()
const bot = new Telegraf("5648181374:AAGWBds6q3ltIA021zA5-Qr68rg6YgAiRpM");

async function main() {
    const products = await prisma.product.findMany({
        where: {
            deletedAt: null
        }
    });
    let i = 0;
    const interval = setInterval(async () => {
        const product = products[i];
        try {
            await bot.telegram.sendMessage("-694015973", product.text + `\n\n Hi <b>This is the correct html for this product ${product.title}</b>`, { parse_mode: "HTML" })            
        } catch (err: any) {
            try {
                console.log(err.message);
                console.log(`The html is send wrongly for the product: `, product.title);
                await bot.telegram.sendMessage("-694015973", `Hi <b>This is the wrong html for this product ${product.title}</b>`, {parse_mode: "HTML"})
            } catch(err) {}
        }
        console.log("The html for product is sent: ", product.title);
        i++;
        if (i === products.length) {
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