

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
    id    :"1",
    pass  :"pass"
}
const {email} = user;
const {email: moriemail} = user
//moriemail で命名可能。


//関数

// function set (user){
//     return `${user.id}  ${user.pass}`
// }

// function set (user){
//     const { id , pass} =user;
//     return `${id}  ${pass}`
// }

function set ({ id , pass}){
    return `${id}  ${pass}`
}

//上記3つは全部同じ
