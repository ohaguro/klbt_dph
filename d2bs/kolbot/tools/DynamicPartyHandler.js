/**
 * @filename DynamicPartyHandler.js
 * @author Nero
 * @desc handles bot behaviour in game when players join
 */

function main() {
    include("common/Config.js");

    var coreTeamCount = 0, fullGame = 8;
    /*
    While the follower_bot is in game, he check if Game is full:
    Case 1: Game is full, one follower_bot leaves the game, waits for the next free game.
    Case 2: Game is not full, keep staying in game. Everything goes like before.
     */
    //if bot is leader, disable this part
    if (config.Regulate_party == true) {
        delay(1000);
            while (me.inGame == true) {
                    delay(500);
                    if (Misc.getPlayerCount() == fullGame) {
                        print('leaving game for human players...');
                        me.quitGame();
                    }
            }
    }
}