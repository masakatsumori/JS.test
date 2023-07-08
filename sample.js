

//デフォルト引数をいれる
function rollDie (num=6){
    return Math.floor(Math.random() * num)+1;
}


//分割代入

const scores = [1,2,3,4,5,6,7,8,9,10] 
const [gold ,silver , bronze] = scores;
//gold = scores[0] ...1


//OBJECT

const user = {
    email :"morimori@mori",
    Id    :"1",
    pass  :"pass"
}
const {email} = user;
const {email: moriemail} = user
//moriemail で命名可能。

