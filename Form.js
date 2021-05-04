class Form{
    constructor(){}
        
   display(){
       var Title=createElement('h2');
       Title.html("Car Racing Game");
       Title.position(130,0);

       var input=createInput("Name");
       var button=createButton("Play");
       var greeting=createElement('h3');

       input.position(130,160);
       button.position(250,200);

       button.mousePressed(function(){

            input.hide();
            button.hide();

        var name=input.value();

        PlayerCount+=1;
        player.update(name);
        player.updateCount(PlayerCount);

        greeting.html("Welcome to the Game "+name);
        greeting.position(130,160);







       })
        











   } 
}