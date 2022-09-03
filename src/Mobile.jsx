import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Mobile() {
    const [search,setSearch]=useSearchParams();
    const checkValue = search.get('filter') === 'active';
    console.log(checkValue);
  return (
    <div>
        <button onClick={()=>setSearch({filter: 'active'})}>Show Mobile Under 50K</button>
        <button onClick={()=> setSearch('')}>Show HighEnd Mobiles</button>
        <h2>SAMSUNG SMARTPHONES</h2>
{
    checkValue===true? <div>
<li>
Qmobile
</li>
<li>Item</li>
<li>Infinix</li>

    </div>
    :
    <div>
        <li>
            SAMSUNG S20+
        </li>
        <li>SAMSUNG NOTE 22</li>
        <li>
            Glaxy Fold
        </li>
    </div>

}
       
        
    </div>
  )
}

export default Mobile

{/* 



     */}