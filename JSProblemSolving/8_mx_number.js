var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let mx_num=numbers[0]
for(var i=1;i<numbers.length;i++){
    if(mx_num<numbers[i]){
        mx_num=numbers[i]
    }
}
console.log(mx_num)