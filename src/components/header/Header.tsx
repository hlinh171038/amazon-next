import Image from 'next/image'
import logo from '../../images/amazon-logo.png'
import { FaBeer } from "react-icons/fa";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import cartIcon from '../../images/amazon-cart.png'

const Header = () =>{
    return (
        <div className='w-full h-15 bg-amazon_blue text-lightText sticky z-50 top-0 '>
           <div className='h-full w-full inline-flex items-center justify-between gap-1 mdl:gap-3 px-2'>
            {/* logo */}
            <div className='border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center p-2'>
                 <Image src={logo} alt="logo Img" className="object-cover w-28 mt-1"/>
            </div>
            {/* deliverry */}
            <div className='text-xs text-gray-100 border border-transparent hover:border-white cursor-pointer duration-300  items-center px-2 hidden xl:inline-flex gap-1'>
                <div><LocationOnIcon/></div>
                <div>
                    <p className=''>Deliverry to</p>
                    <p className ="font-bold uppercase">USA</p>
                </div>
            </div>
            {/* search bar */}
            <div className='flex-1 h-10 hidden md:inline-flex items-center justify-center relative'>
                <input className="w-full h-full rounded px-2 placeholder:text-sm outline-none focus-visible:border-amazon_yellow " type="text" placeholder='Search next_amazon product' />
               <span className="w-12 h-full bg-amazon_yellow flex items-center justify-center absolute right-0 rounded">
                <SearchIcon/>
               </span>
            </div>
            {/* sign In */}
            <div className='border border-transparent hover:border-white cursor-pointer duration-300  px-2 text-xs text-gray-100'>
                <p className=' '>Hello, Sign In</p>
                <p className='font-bold'>
                    Account & Lists {""}
                    <span>
                        <ArrowDropDownIcon/>
                    </span>
                </p>
            </div>
            {/* favorite */}
            <div className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
                <p>Marked</p>
                <p className='font-bold'> & Favorite</p>
            </div>
            {/* cart */}
            <div className ="text-xs text-gray-100 relative flex  px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
                <Image
                    className='w-auto object-cover h-8'
                    src={cartIcon}
                    alt='Cart Icon'
                />
                <p className='text-xs text-white mt-3'>Cart</p>
                <p className='absolute top-0 left-6 text-amazon_yellow text-xs'>0</p>
            </div>
           </div>
        </div>
    )
}

export default Header