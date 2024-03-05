
import { people } from './Data.jsx';


function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

export default function List() {

  // const che = people.filter( person => person.profession === 'chemist')
  
  const chemists = people.filter(person => 
    person.profession === 'chemist');
  
    console.log(chemists)
  const chemislistItems = chemists.map(person => 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );


  

  const nonChemist = people.filter(person => 
    person.profession !== 'chemist');
    console.log(nonChemist)

  const nonChemistlist = nonChemist.map(person => 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>

    
  );

  
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{chemislistItems}</ul>
    

      <h2>NON CHEMIST</h2>

      <ul>{ nonChemistlist }</ul>


    </article>
  );
  
  

 
}


