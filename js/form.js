//later, add a rounded rectangle as reset button using p5 only

/*follow like this :
fill("red");
rect(0.2, 20, 100, 55, 21);
textSize(20);
fill(0,0,255);
stroke(0);
strokeWeight(1);
text("Reset", 22.5,55);

LINK : https://p5js.org/reference/#/p5/rect 

*/

class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(700, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(860,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(1330,200);
        this.button.style('width', '100px');
        this.button.style('height', '40px');
        this.button.style('opacity',0.7);
        this.button.style('background', 'blue');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background',x);
        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(700,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            player.updateCount(0);
            player.update();
            x = 'blue';
            
            //if below 2 lines don't work, comment them and uncomment the line database.ref('players').remove();
            var playerDataRef = database.ref('players');
            playerDataRef.remove();
            game.update(0);
            //database.ref('players').remove();
            
        });

    }
}