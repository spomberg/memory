import './Start.scss';

export default function Start() {
  return (
    <div className='start'>
      <h1>memory</h1>
      <div className='game-settings'>
        <div>
          <span>Select Theme</span>
          <div className='buttons-line'>
            <button>Numbers</button> 
            <button>Icons</button>
          </div>
        </div>
        <div>
          <span>Number of Players</span>
          <div className='buttons-line'>
            <button>1</button> 
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
        <div>
          <span>Grid Size</span>
          <div className='buttons-line'>
            <button>4x4</button> 
            <button>6x6</button>
          </div>
        </div>
        <button className='start-button'>Start Game</button>
      </div>
    </div>
  )
}
