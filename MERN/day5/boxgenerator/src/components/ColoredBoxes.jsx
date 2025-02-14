import React from 'react'

const ColoredBoxes = (props) => {
    const { boxes } = props
    console.log(boxes);
    
  return (
    <div className=' flex gap-3'>
          {boxes.length == 0 ? (
              <p>no boxes yet</p>
          ) : (
                  boxes.map((b, index) => (
                <div className=' w-10 h-10' key={index} style={{backgroundColor:b}}>
                      
                  </div>
            ) )
                  
        )}
    </div>
  )
}

export default ColoredBoxes
