import "./NavBar.css"
import DropDown from "./DropDown/DropDown"
function NavBar() {

    const menuItems = [
    { text: 'Perfil', href: 'TesteSeminarios3/sobre' },
    { text: 'Configurações', href: '/config' },
    { text: 'Sair', href: '/logout' },
  ];

    return (
        <nav className="Container">
            <>
                <h1 className="Logo">Logo</h1>
                <div className="Colection-DropDown">
                    <DropDown text="Quem Somos" />
                    <DropDown text="Microsoft" items={menuItems}/>
                </div>
            </>
        </nav>
    )
}

export default NavBar