module.exports = (bot) => {
    const { GiveawaysManager } = require('discord-giveaways');
    const manager = new GiveawaysManager(bot, {
        storage: './giveaways.json',
        default: {
            botsCanWin: false,
            embedColor: '#FF0000',
            embedColorEnd: '#000000',
            reaction: '🎉'
        }
    });

    bot.giveawaysManager = manager;

    bot.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
        const prix = giveaway.prize;
        const id = giveaway.messageId;

        console.log(`> ${member.user.tag} est entrée dans le Giveway : ${prix}(${id})`);
    });
    
    bot.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
        const prix = giveaway.prize;
        const id = giveaway.messageId;

        console.log(`> ${member.user.tag} as quitter le Giveway : ${prix}(${id})`);
    });
    
    bot.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
        const Winners = winners.map((member) => member.user.username).join(', ');
        const prix = giveaway.prize;
        const id = giveaway.messageId;

        console.log(`> Giveaway : ${prix}(${id}) fini ! Le gagnant est: ${Winners}`)
    });
}