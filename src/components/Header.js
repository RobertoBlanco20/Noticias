import React, {useState} from 'react';
import { TfiWorld } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";
import useCategoria from "../hooks/useCategoria"

const Header = () => {

    let [open,setOpen]=useState(false);

    let OPCIONES = [
        {value: 'general', title: 'General'},
        {value: 'sports', title: 'Deportes'},
        {value: 'enterteinment', title: 'Entretenimiento'},
        {value: 'healty', title: 'Salud'},
        {value: 'technology', title: 'Tecnologia'},
        {value: 'business', title: 'Negocios'},
        {value: 'science', title: 'Ciencia'}
    ]

    /* Utilizar el custom state */
    const [ state, Categorias ] = useCategoria('general', OPCIONES)



    return ( 
        <header className="fixed w-full lg:w-11/12 mx-auto p-2">
            
            <nav className="flex mx-6 pt-2 justify-around">

                <h1 className="mr-4 text-3xl font-bold"><span>Noti</span>AR</h1>

                {/* Categorias */}
                <Categorias/>
                

                <div onClick={()=>setOpen(!open)} className='text-md absolute right-6 top-6 cursor-pointer  flex pt-2'>
                    <a href='!#' name={open ? 'close':'menu'}>
                        <TfiWorld />
                    </a>
                    <a href='!#'>
                        <AiFillCaretDown/>
                    </a>

                    <ul className={`pb-12 absolute z-auto right-1 w-auto pl-0 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
                        <li className='border-2 border-white rounded p-2 hover:text-red-500 hover:border-red-500'>Argentina</li>
                        <li className='border-2 border-white rounded p-2 my-1 hover:text-red-500 hover:border-red-500'>España</li>
                        <li className='border-2 border-white rounded p-2 hover:text-red-500 hover:border-red-500'>Uruguay</li>
                    </ul>
                    
                </div>
                
            </nav>
        </header>
        
     );
}
 
export default Header;