let arr = [3, 17, 5, 20, 1, 8, 8, 14, 2, 19, 6, 11, 4, 10, 7, 15, 9, 12, 18, 16]

for (var i=0;i<arr.length;i++){
    for (var j=i+1;j<arr.length;j++){
        var temp=arr[i]
        if(temp>arr[j]){
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}

console.log(arr)