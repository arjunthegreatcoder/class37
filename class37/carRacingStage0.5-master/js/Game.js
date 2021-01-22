class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30)
    text("Race Starting At 3 2 1 Go!!", 60, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;

      for(var i in allPlayers){
        if(i==="player"+player.index)
        fill("cyan");
        else 
        fill("green");
        
        display_position += 20;
        textSize(20);
        text(allPlayers[i].name + " : "+ allPlayers[i].distance, 120, display_position);
      }

    }
if(keyDown (UP_ARROW)&&player.index !==null){
  player.distance+=2;
  player.update();
  }
}
}