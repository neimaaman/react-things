export default function Clock({ time }) {
    const hours = time.getHours();
    
    const showTime = hours >= 0 && hours <= 6;

  const nightTime ={
    backgroundColor: 'black',
    color: 'white'
  };

  const dayTime = {
    backgroundColor: 'white',
    color: 'black'
  }

  const currentTime = new Date();
    return (

      <h1 id="time" style={showTime ? nightTime : dayTime}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  