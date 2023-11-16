import Image from 'next/image'
import logo from '../../images/amazon-logo.png'

const Header = () =>{
    return (
        <div>
            <Image src={logo} alt="logo Img" className=""/>
        </div>
    )
}

export default Header