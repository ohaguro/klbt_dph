/**
 * @filename DynamicPartyHandler.js
 * @author Nero
 * @desc handles bot behaviour in game when players join
 */

function main() {
    include("OOG.js");
    include("json2.js");
    include("common/Config.js");

    print('�c2DynamicPartyHandler loaded');
    // load custom config constants
    Config.init(true);

    /*
    While the follower_bot is in game, he check if Game is full:
    Case 1: Game is full, one follower_bot leaves the game, waits for the next free game.
    Case 2: Game is not full, keep staying in game. Everything goes like before.
     */
    //if bot is leader, disable this part

    if (Config.RegulateParty == true) {
        delay(2000);
            while (me.ingame == true) {
                    delay(5000);
                    if (Misc.getPlayerCount() >= Config.BotFullGame) {
                        print('leaving game for human players...');
                        me.quit();
                    }
            }
    }
}