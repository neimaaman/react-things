export default function Story({ stories }) {
    // Check if the "Create Story" placeholder already exists in the array
    const createStoryExists = [...stories, {
      id: 'create', 
      lable: "create Story"}, 
]; 

    return (
      <ul>
        {createStoryExists.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
  }


 