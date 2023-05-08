
import './Header.css';


function Header(props){
    return  <div className="header">
                <img src = "./img/logo.png" alt="logo" className="logo"/>
                <button className="botonNuevo" onClick={props.cambiarEstado}>Nuevo Video</button>
            </div> 
}

export default Header;