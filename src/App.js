import React,{useEffect,useState} from 'react'
import './App.css';
import Recipe from './components/Recipe';

function App() {

  const APP_ID='36585070';
  const APP_KEY='593d5112519c62154c35e733ce4fa3d2';
  
  const [recipes,setRecipes] = useState([]);
  const [timeoutId,updateTimeoutId] = useState();
  let search="";

  useEffect(async ()=>{
    await getRecipes();
  },[search]);

  const getRecipes = () =>{
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(res=>res.json()).then(data =>setRecipes(data.hits));
    document.querySelector(".search-bar").blur();
  }


  const querySearch = ()=>{
    clearTimeout(timeoutId);
    const timeout = setTimeout(getRecipes,1000);
    updateTimeoutId(timeout);
    
  }

  const updateSearch = (e) =>{
    if(e.target.value.length!==0){
    search = e.target.value;
    querySearch();
  }
  }

  return (
    <div className="App">
    <div className="header">
    <h1 className="heading">Find the best Recipes Here</h1>
    </div>
      <form className="search-form">
        <input type="text" className="search-bar" onChange={updateSearch}/>
      </form>
    <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
