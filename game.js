class Game{
    constructor(){

    }

    // to get gameState 
    getstate(){
        var gameref = database.ref('gameState');
        gameref.on("value",(data) =>{
            gameState = data.val();
        });
    }

    // update gameState
    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    start(){
        //0

    }

    playLevel1(){
        //1
    }

    playLevel2(){
        //2
    }

    playLevel3(){
        //3
    }
    
    end(){
        //4
    }
}