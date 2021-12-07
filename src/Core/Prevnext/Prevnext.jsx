import React from 'react'
import { Prevnextcss } from './Prevnext.style'
import { GrPrevious ,GrFormNext } from 'react-icons/gr';

const Prevnext = () => {
    return (
        <Prevnextcss>
        <div>
            <span><GrPrevious size={20}/></span>
            {/* <span>Previous</span> */}
        </div>
        <div>
            {/* <span>Next</span> */}
            <span><GrFormNext size={35}/></span>

        </div>
        </Prevnextcss>
    )
}

export default Prevnext
