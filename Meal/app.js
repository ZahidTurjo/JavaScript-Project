const search_meals=()=>{
   const input_val=document.getElementById("search_Item").value
    // console.log(input_val)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input_val}`)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("Not-Found").innerText=""
        if(!data.meals){
            document.getElementById("Not-Found").innerText = "NO Drinks Found!!"
            document.getElementById("card-container").innerHTML=""
            return
        }
        displayDrinks(data.meals)
    })
    document.getElementById("search_Item").value=""

}
const displayDrinks=(meals)=>{
    document.getElementById("card-container").innerHTML=""
    meals.forEach(meal => {
        document.getElementById("details-conatiner").innerHTML=""
        // console.log(meal)
        const card_container=document.getElementById("card-container")
        const div=document.createElement('div')
        div.classList.add('col-md-3')
        div.innerHTML=`
    <div onclick="ShowDetails('${meal.strMealThumb}','${meal.strCategory}','${meal.strMeal}','${meal.strArea}')" class="card" style="width: 18rem;">
    <img src=${meal.strMealThumb} class="card-img-top" alt="...">
    <div class="card-body">
        <p class="text-center fs-2 fw-bold">${meal.strMeal}</p>
    </div>
    </div>
        `
        card_container.appendChild(div)
    });
}

const ShowDetails=(img,category,name,area)=>{
    document.getElementById("details-conatiner").innerHTML=""
    const details_container=document.getElementById("details-conatiner")
    const div=document.createElement('div')
    div.innerHTML=`
        <div onclick="deletedetails()" class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
           <button type="button" class="text-end fw-bold text-danger btn-close">
    </button>
    <img src=${img} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Category:</b>${category}</li>
        <li class="list-group-item"><b>Area:</b>${area}</li>
    </ul>

    </div>
    `
    details_container.appendChild(div)
}
const deletedetails=()=>{
    document.getElementById("details-conatiner").innerHTML=""
}