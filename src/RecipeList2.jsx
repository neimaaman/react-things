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
  
function Recipe({ id, name, ingredients }) {
    return (
      <div>
        <h2>{name}</h2>
       <ul>
        <li>
         {id}
         {ingredients}
        </li>
       </ul>
      </div>
    );
  }
  
  export default function RecipeList2() {
  
      
        
    const recipee = recipes.map (recipeed => 
      <li key={recipeed.id}>
      
        <b><h2>{recipeed.name}</h2></b>
        
        <ul>
        {recipeed.ingredients.map((ingredient) => (
          <li >{ingredient}</li>
        ))}
      </ul> 
         
      
      </li>)
        
        return (  
       <div> 
            {recipee}
        </div>
    );
  }