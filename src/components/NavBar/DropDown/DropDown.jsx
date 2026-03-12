import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import './DropDown.css'
function DropDown({text, items}) {
    const [aberto, setAberto] = useState(false)
    const dropDownRef = useRef(null)

    const ApertarDropDown = () => {
        setAberto(!aberto)
    };

    useEffect(() => {
        const ClicouFora = (evento) => {
            if (dropDownRef.current && !dropDownRef.current.contains(evento.target)) {
                setAberto(false)
            }
        };

        document.addEventListener('mousedown', ClicouFora);
        return() => {
            document.removeEventListener('mousedown', ClicouFora)
        }

    }, [dropDownRef])

    return (
        <>
            <div className="relative">
                <button className="text-gray-900 dark:text-white flex items-center gap-1" onClick={ApertarDropDown}>
                    {text}
                    <span>{aberto ? "▲" : "▼"}</span>
                </button>
                {aberto && (
                    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50 min-w-[100px]">
                        <ul className="py-2">
                            {items.map((item, index) => (
                                <li key={index}>
                                    <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white duration-1000" to={item.href}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                )}
            </div>
        </>
    )
}

export default DropDown