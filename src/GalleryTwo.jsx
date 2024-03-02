// import { GetImageUrl } from './Utils.jsx';


function ProfileTwo ({name,profession,awards,discovered,imageId}) {
    const imageUrl= GetImageUrl(imageId);
            return (
        <div>
            <h2>{name}</h2>
            <img
                className="avatar"
                src={imageUrl}
                alt={name}
                width={70}
                height={70}
                />
            <p><b>Profession:</b>
                {profession}</p>
            <p>
                <b>Awards:</b>
                {awards} 
            </p>
            
                <b>Discovered: </b><br />
                {discovered}
            
        </div>
            )

}

export default function GalleryTwo() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <ProfileTwo
        
        name="Maria Skłodowska-Curie" 
        className="avatar"
        imageId={'szV5sdG'}
        profession='Physicist, Chemist'
        discovered= {'polonium (chemical element)'}
        awards= {[
            <div>

            <p>'Nobel Prize in Physics',</p>   
            <p>'Nobel Prize in Chemistry',</p>
            <p>'Davy Medal',</p> 
            <p>'Matteucci Medal'</p>
            
            </div>
        
        ]}
            

        
            
        />

          <ProfileTwo
            name="Katsuko Saruhashi"
            className="avatar"
            imageId={'YfeOqp2'}
            profession="Geochemist"
            awards= {['Miyake Prize for Geochemistry',]}
            discovered="Methodologist"

         /> 
        
      
    </div>
  );
} 
