import React from 'react';
import { TfiWorld } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
    return ( 
        <header className="w-5/6 mx-auto p-2">
            
            <nav className="flex mx-6 pt-2 justify-around">

                <h1 className="text-3xl font-bold"><span>Noti</span>AR</h1>

                <ul className="flex cursor-pointer">
                    <li className="px-4">Últimas</li>
                    <li className="px-4">Deportes</li>
                    <li className="px-4">Políticas</li>
                    <li className="px-4">Sociales</li>
                    <li className="px-4">Farándula</li>
                    <li className="px-4">Policiales</li>
                    <li className="px-4">Científicas</li>
                </ul>

                <div className="w-1/6 flex">
                    <a href='!#'>
                        <TfiWorld />
                    </a>
                    <a href='!#'>
                        <AiFillCaretDown/>
                    </a>

                    <ul>
                        <li>Argentina</li>
                        <li>España</li>
                        <li>Uruguay</li>
                    </ul>
                </div>
                
            </nav>
        </header>
        
     );
}
 
export default Header;