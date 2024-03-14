import Panel from './Panel.jsx';



function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
}


let currentPerson;

function Profile({ person }) {

  currentPerson = person;
  return (
    <Panel>
      <Header person = {person} />
      <Avatar person = {person} />
    </Panel>
  )
}

function Header({person}) {
  return <h1>{person.name}</h1>;
}

function Avatar({person}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}



export default function Person() {
    return (
        
      <>
        <Profile person={{
          imageId: 'lrWQx8l',
          name: 'Subrahmanyan Chandrasekhar',
        }} />
        <Profile person={{
          imageId: 'MK3eW3A',
          name: 'Creola Katherine Johnson',
        }} />
      </>
    )
  }
  