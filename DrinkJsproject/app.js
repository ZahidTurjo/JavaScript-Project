const defaultDatashow = () => {
    fetchSearchData('a')
}

const fetchSearchData = (input_value) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input_value}`)
        .then(res => res.json())
        .then(data => {
            //  console.log(data.drinks)
            document.getElementById("Not-Found").innerText = ""
            if (!data.drinks) {
                const drink_container = document.getElementById("card-container")
                drink_container.innerHTML=""
                document.getElementById("Not-Found").innerText = "NO Drinks Found!!"
                return
            }
            displayDrinks(data.drinks.slice(0, 8))

        }

        )
}
const search_drinks = () => {
    const input_val = document.getElementById("search_Item").value
    fetchSearchData(input_val)
}

const displayDrinks = (drinks) => {
    const drink_container = document.getElementById("card-container")
    drink_container.innerHTML=""
    drinks.forEach(drink => {
        // console.log(drink)
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src=${drink.
strDrinkThumb
} class="card-img-top" alt="...">
    <div class="card-body text-center">
<h5>${drink.strDrink}</h5>
        <p><b>Category:</b> ${drink.strCategory}</p>
        <p><b>Instructions:</b> ${drink.strInstructions.slice(0, 15)}...</p>
        <button class="btn btn-success btn-sm"
          onclick="addToCart('${drink.strDrinkThumb}','${drink.strDrink}')">Add to Group</button>
        <button class="btn btn-info btn-sm"
          onclick="showDetails('${drink.idDrink}')">Details</button>
    </div>
    </div>
        `
        drink_container.appendChild(div)

    });
}
const addToCart=(img,name)=>{
    // console.log(img,name)
    const total_conatainer_cnt=document.getElementById('count').innerText
    const converted_cnt=parseInt(total_conatainer_cnt)
    if(converted_cnt>=7){
        alert("You can not add More than 7 drinks")
        return
    }

    const cart_container=document.getElementById("cart-container")
    const div=document.createElement('div')
    div.classList.add('d-flex','justify-content-evenly','align-items-center','m-2')
    div.innerHTML=`
    <p class='fs-4'>${name}</p>
    <img src=${img} class="rounded-circle" style=" width: 30px;" alt="Cinque Terre">
    `
    cart_container.appendChild(div)
    update_total()
}
const update_total=()=>{
    const total_conatainer_cnt=document.getElementById('count').innerText
    let converted_cnt=parseInt(total_conatainer_cnt)
    converted_cnt=converted_cnt+1
    if(converted_cnt>7){
        alert("You can not add More than 7 drinks")
        return
    }
    document.getElementById('count').innerText=converted_cnt
}

const showDetails=(id)=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const d=data.drinks[0]
        document.getElementById('modal-title').innerText=d.strDrink
        document.getElementById('modal-body').innerHTML=`
            <img src="${d.strDrinkThumb}" class="img-fluid mb-3">
            <p><b>Category:</b> ${d.strCategory}</p>
            <p><b>Alcoholic:</b> ${d.strAlcoholic}</p>
            <p><b>Glass:</b> ${d.strGlass}</p>
            <p><b>Instructions:</b> ${d.strInstructions}</p>
        `
      new bootstrap.Modal(
        document.getElementById("modal-ok")
      ).show();
    })
}


defaultDatashow()