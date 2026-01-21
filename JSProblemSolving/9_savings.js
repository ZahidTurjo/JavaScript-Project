// var arr=[1000,2000,3000]
// var arr=[1000,2000,2500]
var arr=[900,2700,3400]
living_cost=10000
function savings(arr,living_cost){
    if(living_cost.length>1){
        return "Invalid Input"
    }
    let total=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]>=3000){
            var tax=(arr[i]*0.2)
            total=total+(arr[i]-tax)
        }else{
            total=total+arr[i]
        }
    }
    var savings=total-living_cost
    if(savings<0){
        return 'earn more';
    }else {
        return savings
    }
}
var save=savings(arr,living_cost)
console.log(save)

