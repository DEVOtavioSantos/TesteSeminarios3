import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

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
            <div>
                <button onClick={ApertarDropDown}>
                    {text}
                    <span>▼</span>
                </button>
                {aberto && (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default DropDown