
import React, {ReactElement} from 'react';
import Footer from "./Footer"
import ButtonHeader from "./header/ButtonHeader"
import Header from "./header/Header"


interface Props{
    children:ReactElement
}
const RootLayOut = ({children}:Props)=>{
    return (
        <>
            <Header/>
            <ButtonHeader/>
            {children}
            <Footer/>
        </>
    )
}

export default RootLayOut