

class Game{
    constructor(){
       
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                //player.changeGameState();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();
//fix this
                Player.getPlayerInfo();
                //Player.changeGameState();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       //add code to display the player's name on the respective basket.
                       fill("red");
                       textSize(35);
                         text(allPlayers[plr].name,x-20,y+25);
                         var drefp1 =allPlayers.player1.score;

                         var drefp2 = allPlayers.player2.score;
                         fill(255);
                         textSize(35);
                         text("Player1's score : "+drefp1,150,30);
                         text("Player2's score : "+drefp2,150,70);
                         /*fill("white");
                     text("Your score : "+allPlayers.player1.score,150,30);
                      text("Opponent's score : "+allPlayers.player2.score,200,70);*/
                     }
                    }

                     /*else if(index = player2.index) {
                        fill("red");
                        textSize(35);
                          text(allPlayers[plr].name,x-20,y+25)
                          fill("white")
                      text("Your score : "+allPlayers.player2.score,150,30);
                       text("Opponent's score : "+allPlayers.player1.score,200,70);
                     }*/
                    
                     //displaying player score
                     
/*if(allPlayers[plr].name === database.ref('players/player1/name')) {
    fill("white");
    textSize(35);
                     text("Your score : "+allPlayers.player1.score,150,30);
                      text("Opponent's score : "+allPlayers.player2.score,200,70);
}
                    

else if(allPlayers[plr].name === database.ref('players/player2/name')) {
    fill("white");
    textSize(35);
                     text("Your score : "+allPlayers.player2.score,150,30);
                      text("Opponent's score : "+allPlayers.player1.score,200,70);
}*/
                 



                 

                 
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 30
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null ) {
                    player.distance += 30
                    player.update();
                }

                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.distance += 30
                    player.update();
                }

                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.distance -= 30
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(players)) {
                            fruitGroup.get(i).destroy();
                         
                            player.score = player.score+1;
                            database.ref('/').update({
                                'players/player1/score' : allPlayers.player1.score
                                
                            });
        
                        database.ref('/').update({
                            'players/player2/score' : allPlayers.player2.score
                            
                            }); 
                           
                        }
                        
                    }
                    
                    
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}
