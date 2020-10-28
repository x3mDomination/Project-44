class Game {
    constructor(){

    }

    state(){
      database.ref('/gameState').on("value",function(data){
        gameState = data.val();
      })
    }

    async matchPlayers(){
      if(gameState === 0){
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form.display();
      }
    }
}