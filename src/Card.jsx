export default function Profile4() {
    return (
      <div>
        <div className="card">

            <h1>Photo</h1>
            <Card>

                <div className="card-content">
                    <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                    />
                    <h1>About</h1>
                        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
                
                </div>
            
            </Card>
        </div>
           
        </div>
    );
  }
  


  function Card ({children}) {

    return (
        <div className="card">
          <div className="card-content">

            {children}
            
            
          </div>
        </div>
      


    );
  }

  function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );

    }


  function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }