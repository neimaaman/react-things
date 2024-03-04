function Item({ name, importance }) {
    if (importance > 0 )
    return (
      <li className="item">
        {name}  ( <i>importance: {importance} </i> )  
      </li>
    );
  
    return (
      <li className="item">
       {name}
  
      </li>
    )
  }
  
  export default function PackingList2() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            importance={9} 
            name="Space suit" 
          />
          <Item 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  