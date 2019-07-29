
//finds shortest path to spell a word from an alphabet board of column length = 5 starting at "a"

var alphabetBoardPath = function(target) {
    
    let board = {};
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let string = "";
    let dx = 0;
    let dy = 0;
    currentposition =[0,0];
    
    for(i=0;i<26;i++){
        board[alphabet.substring(i,i+1)]=[Math.floor(i/5),i%5];
    }
  
    for(i=0;i<target.length;i++){
        dx=board[(target.substring(i,i+1))][0]-(currentposition[0]);
        dy=board[(target.substring(i,i+1))][1]-(currentposition[1]);
        if(target.substring(i,i+1)==="z"){
           while(dy<0){
            string=`${string}L`;
            dy++
           }
           while(dx>0){
            string=`${string}D`;
            dx--
           }
        }else{
            while(dx>0){
            string=`${string}D`;
            dx--
           }
            while(dx<0){
            string=`${string}U`;
            dx++
           }
            while(dy>0){
            string=`${string}R`;
            dy--
           }
            while(dy<0){
            string=`${string}L`;
            dy++
           }
        }
        string=`${string}!`;
        currentposition=board[(target.substring(i,i+1))];
    }
    return string;
};