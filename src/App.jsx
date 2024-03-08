// import Bio from "./Bio";
// import Congratulation from "./Congratulation.jsx";
// import Gallery from "./Gallery";
// import Profile from "./Profile";
// import TodoList from "./ToDoList.jsx";
  // import Profile from "./Avatar";
// import Profile4 from "./Card";
import List from "./Lists";
import DrinkList from "./DrinkList";
import PackingList2 from "./PacketList2";
import PackingList from "./PackingList";
import RecipeList from "./Recipes";
import RecipeList2 from "./RecipeList2";
import Poem from "./Poem";
import Clock from "./Clock";
import Profile from "./BrokenProfile";
import Person from "./BrokenProfile";
import Story from "./Story";



// import GalleryTwo from "./GalleryTwo";
function App() {
  const currentTime = new Date()
  return (
    <>
      <div>
      

        {/* <Gallery/> */}
        {/* <Congrajulation/> */}
        {/* <Profile/> */}
        {/* <Bio/> */}
        {/* <TodoList/> */}
        {/* <GalleryTwo/> */}
        {/* <Profile/> */}
        {/* <Profile4/> */}
        <PackingList/>
        <PackingList2/>
        <DrinkList/>
        <List/>
        <RecipeList/>
        <RecipeList2/>
        <Poem />
        <Clock time={currentTime}/>
        <Person/>
        <Story/>
      </div>
      
       
      
    </>
  )
}

export default App;
