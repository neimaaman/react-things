 const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  

  export default function RecipeList() {
    const recipee = recipes.map (recipeed => 
      <li key={recipeed.id}>
      
        <b><h2>{recipeed.name}</h2></b>
        
        <ul>
        {recipeed.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> 
         
      
      </li>)

    return (
      <div>
        <h1>Recipes</h1>
        <h2></h2>
        <ul>{recipee}</ul>
      </div>
    );
    
  }
  