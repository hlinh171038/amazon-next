import Image from "next/image"
import logo from '../images/amazon-logo.png'

const Footer = ()=>{
    return (
        <div className="w-full h-20 bg-amazon_blue text-gray-300 flex justify-center items-center gap-4">
            <Image src={logo} alt="image logo" className="object-cover w-20"/>
            <p className="text-sm -mt-2">
                All rights reserved {" "}
                <a className="hover:text-white hover:underline decoration-[1px]" href="https://reactbd.com" target="_blank">
                    @reactbd.com
                </a>
            </p>
        </div>
    )
}

export default Footer