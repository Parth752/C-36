class Player{
    constructor(){}
        
    getCount(){
        var PlayerCountref=database.ref('Player Count');
        PlayerCountref.on("value", function(data){
            PlayerCount=data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            PlayerCount:count
        });
    }
    
    update(name){
        var PlayerIndex="player"+PlayerCount;
        database.ref(PlayerIndex).set({
            name:name
        });
    }
}