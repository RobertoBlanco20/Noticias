import React, {useState} from 'react';
import { TfiWorld } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {

    let [open,setOpen]=useState(false);

    return ( 
        <header className="fixed w-full lg:w-11/12 mx-auto p-2">
            
            <nav className="flex mx-6 pt-2 justify-around">

                <h1 className="mr-4 text-3xl font-bold"><span>Noti</span>AR</h1>

                <ul className=" flex cursor-pointer pt-2 mr-20 sm:mr-12 md:mr-24 overflow-x-auto">
                    <li className="px-1 text-slate-400 md:text-white hover:text-red-600">General</li>
                    <li className="px-3 text-slate-400 md:text-white hover:text-red-600">Deportes</li>
                    <li className="px-3 text-slate-400 md:text-white hover:text-red-600">Negocios</li>
                    <li className="px-3 text-slate-400 md:text-white hover:text-red-600">Entretenimiento</li>
                    <li className="px-3 text-slate-400 md:text-white hover:text-red-600">Salud</li>
                    <li className="px-3 text-slate-400 md:text-white hover:text-red-600">Tecnologia</li>
                </ul>

                <div onClick={()=>setOpen(!open)} className='text-md absolute right-6 top-6 cursor-pointer  flex pt-2'>
                    <a href='!#' name={open ? 'close':'menu'}>
                        <TfiWorld />
                    </a>
                    <a href='!#'>
                        <AiFillCaretDown/>
                    </a>

                    <ul className={`pb-12 absolute z-auto right-1 w-auto pl-0 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
                        <li className='border-2 border-white rounded p-2'>Argentina</li>
                        <li className='border-2 border-white rounded p-2 my-1'>España</li>
                        <li className='border-2 border-white rounded p-2'>Uruguay</li>
                    </ul>
                    
                </div>
                
            </nav>
        </header>
        
     );
}
 
export default Header;