import React from 'react'

function MainBody() {
  return (
    <div className='containerMain'>
      <div className='body_top'>
        <div>
            <div className='body_sign'>
               <div className='indicateImg'>
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path opacity="0.504557" fill-rule="evenodd" clip-rule="evenodd" d="M0.04039 4.19464C0.014163 4.13343 0 4.06766 0 3.99987C0 3.93259 0.014163 3.86682 0.04039 3.80561C0.0671415 3.74389 0.105433 3.68824 0.15369 3.6422L3.7767 0.147975C3.98179 -0.0493249 4.3133 -0.0493249 4.5184 0.147975C4.72349 0.34578 4.72349 0.666013 4.5184 0.863313L1.79078 3.49398H13.4755C13.7655 3.49398 14 3.72062 14 3.99987C14 4.27963 13.7655 4.50577 13.4755 4.50577H1.79078L4.5184 7.13643C4.72349 7.33424 4.72349 7.65447 4.5184 7.85177C4.41611 7.95093 4.28183 8 4.14755 8C4.01326 8 3.87898 7.95093 3.7767 7.85177L0.15369 4.35805C0.105433 4.31151 0.0671415 4.25636 0.04039 4.19464Z" fill="black"/>
</svg>
                </div>  
                <div>Back to blog</div>
            </div>
            <div className='body_headerImg'>
            <img src="https://i.ibb.co/xS5bWfz/Bitmap.png" alt="img_1" />
            </div>
        </div>
        <div className='body_top_Side'>
            <div>
                <input type="text" name="" id=""placeholder='Search' />
            </div>
            <div className='body_top_Side2' >
               <p>Categories</p> 
               <div className='side2'>
                <p>Principes</p>
                <p>7</p>
               </div>
               <hr className='break_hr'/>
               <div className='side2 side3'>
                <p>Nullam</p>
                <p>42</p>
               </div>
               <hr className='break_hr'/>
               <div className='side2 side3'>
                <p>Quaerendum</p>
                <p>73</p>
               </div>
               <hr className='break_hr'/>
               <div className='side2 side3'>
                <p>Deterruisset</p>
                <p>9</p>
               </div>
               <hr className='break_hr'/>
               <div className='side2 side3'>
                <p>Erroribus</p>
                <p>20</p>
               </div>
               <hr className='break_hr'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody
