// enter clicked 
const searchBtn =document.getElementById('search-btn');
const foodField =document.getElementById('food-field');
foodField.addEventListener('keypress', function(event){
    // console.log('keypress korci');
    if(event.key == "Enter"){
        // console.log("enter clicked");
        searchBtn.click();
    }
});
// enter clicked 

const loadFood = () =>{
    const foodField = document.getElementById('food-field');
    const foodFieldText = foodField.value;
    // console.log(foodFieldText);
    foodField.value ="";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodFieldText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals));
}
const displayFood = meals =>{
    console.log(meals);
    const searchResult =document.getElementById('search-result');
    // remove previous search 
    searchResult.innerHTML='';
    if(meals == null){
        const h3 = document.createElement('h3');
        h3.innerText = 'No result found';
        h3.style.color = 'pink';
        h3.style.textAlign = 'right';
        searchResult.appendChild(h3);
    }
    else{
        meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick = "loadDetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
        </div>
        `;
        searchResult.appendChild(div); 
        });
    }
    
   
}
const loadDetails = mealId =>{
    console.log(mealId);
}