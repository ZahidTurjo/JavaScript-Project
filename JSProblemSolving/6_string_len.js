var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let boro_nam=friends[0]
for(var i=1;i<friends.length;i++){
    if(boro_nam.length<friends[i].length){
        boro_nam=friends[i]
    }
}
console.log(boro_nam)