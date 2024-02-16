import './App.css';
import { useState } from 'react';
function App() {
  const [posLeft,setPosLeft] = useState(600);
  const [posTop,setPosTop] = useState(350);
  const [yesScale,setYesScale] = useState (1);
  const [text,setText] = useState ('');
  function miscaButon(){
    let newLeft = Math.random() * 650;
    let newTop = Math.random() * 650;
    setPosLeft(newLeft);
    setPosTop(newTop);
    setYesScale(yesScale+0.7)
    setText('');
  }
  const normal = () => {
    setYesScale(1);
    setText('Yippieeeee');
    setPosLeft(600);
    setPosTop(350);
  }

  return (
    <div className="App">
      <br></br>
      <h1 className='text'>Do you want to be my valentine?</h1>
      <div className='poza'><img src="bear.png" className='bear'></img></div>
      <button className='buton1' style={{
        transform: "scale("+ yesScale + ")",
        position:'absolute',
        top: 350,
        left: 333
      }}
      onClick={normal}
      >yes</button>
      <button className='buton2' style={{
        position:'absolute',
        top: posTop,
        left: posLeft
      }}
      onMouseEnter={miscaButon}>no</button>
      <p className='yey'>{text}</p>
    </div>
  );
}

export default App;
