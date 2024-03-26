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
import LightSwitch from "./LightSwitch";
import ColorSwitch from "./colorSwitch";
import Gallery from "./GalleryThree";
import Form from "./Form";
import FeedbackFormTwo from "./FeedbackFormTwo";
import Canvas from "./Canvas.jsx";
import Canvas2 from "./Canvas2.jsx";
import ShoppingCart from "./Products.jsx";
import ShoppingCart2 from "./Product2.jsx";
import TaskApp from "./IntialTodos.jsx";
import TaskApp2 from "./TaskApp.jsx";



// import GalleryTwo from "./GalleryTwo";
function App() {
  const currentTime = new Date()
  let [stories, setStories] = useState([...initialStories]);
  let time = useTime();

  if (stories.lenght > 100) {
    stories.lenght = 100;
  }
  return (
    <>
      <div>
      style={{
                width: "100%",
                height: "100%",
                textAlign: "center"
            }}
        
            <h2>It is {time.toLocaleTimeString()} now.</h2>
            <StoryTray stories={stories} setStories={() => console.log("hello")} />
            <StoryTray stories={stories} setStories= {setStories}/>
            {/*<StoryTray stories={stories} setStories={()=> {}}/>*/}

        
      

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
        <LightSwitch/>
        <ColorSwitch/>
        <Gallery/>
        <Form/>
        <FeedbackFormTwo/>
        <Canvas />
        <Canvas2 />
        <ShoppingCart />
        <ShoppingCart2 />
        <TaskApp />
        <TaskApp2 />
      </div>
      
       
      
    </>
  )
}

export default App;
