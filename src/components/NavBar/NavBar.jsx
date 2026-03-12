import "./NavBar.css"
import DropDown from "./DropDown/DropDown"
import { Link } from "react-router-dom";
import { microsoftItems, Objetivo } from "./Conteudo";
function NavBar() {

   

    return (
        <nav className="flex-row bg-white dark:bg-gray-800 flex  justify-around items-center p-10 border-solid border-b-2 border-black shadow-x1 ">
            <>
                <Link to="/" className="text-8x1 text-gray-800 dark:text-white text-8x1" >Logo</Link>
                <div className="flex items-center relative inline-blcok gap-4 ">
                    <DropDown text="Objetivo" items={Objetivo}/>
                    
                </div>
            </>
        </nav>
    )
}

export default NavBar