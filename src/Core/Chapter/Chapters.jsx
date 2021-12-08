import React from 'react'
import Chaptername from '../Chaptername/Chaptername'
import Searchbar from '../SearchBar/Searchbar'
import { Ul } from './Chapter.style'

const Chapters = ({chaptername}) => {
    console.log(Object.values(chaptername))
    return (
        <>
        <Searchbar/>
        <Ul>
        {Object.values(chaptername).map((item,idx)=><Chaptername name={item.name} chapter={Object.keys(chaptername)[idx]}/>)}

        </Ul>
        </>
    )
}

export default Chapters
