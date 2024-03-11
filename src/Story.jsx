export default function StoryTray({ stories, setStories }) {
    // Check if the "Create Story" placeholder already exists in the array
    

    return (
        <div>
        <ul>
          {stories.map(story => (
            <li key={story.id}>
              {story.label}
            </li>
          ))}
        </ul>
        <button onClick={
          () => setStories( [ ...stories, { id: math.abs(math.random() *100), label: `${Math.random() * 100} + hello`} ] ) } >
          Add Story 
        </button>

      </div>
    );

  }


//   const createStoryExists = [...stories, {
//     id: 'create', 
//     lable: "create Story"}, 
// ]; 