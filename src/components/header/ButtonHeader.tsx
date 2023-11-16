import MenuIcon from '@mui/icons-material/Menu';

const ButtonHeader = () =>{
    return (
        <div className='bg-amazon_light text-xs text-gray-100 flex items-center '>
            <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                <MenuIcon />All
             </p>
             <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Todays Deals
             </p>
             <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Customer Service
             </p>
             <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Registry
             </p>
             <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
                Gift Cards
             </p>
             <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
               Sales
             </p>
             <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow cursor-pointer duration-300'>
               Sign Out
             </p>
        </div>
    )
}

export default ButtonHeader