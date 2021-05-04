class Game{
    constructor(){}

getState(){
    var GameStateref=database.ref('GameState');
    GameStateref.on("value",function(data){
        GameState=data.val();
    })
}
 
update(state){
    database.ref('/').update({
        GameState:state
    });
}

start(){
    if(GameState===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}
}