var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const new_num=new Set()
for(var i=0;i<numbers.length;i++){
    new_num.add(numbers[i])
}
console.log(new_num)