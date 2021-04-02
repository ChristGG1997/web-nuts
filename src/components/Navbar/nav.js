import logo from '../logo.png';
import './nav.css';

function Nav(){

    return(
        <header class="header">
            <nav class="nav navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid col-6">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" width="240" height="100" class="d-inline-block align-text-top"/>
                        </a>
                    </div>
            <div class="navbar-collapse">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Servicios </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre Nosotros </a>
                    </li>
                </ul>
            </div>
            <div class="navbar-collapse">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <button type="button" class="btn cotizar">COTIZAR AHORA</button>
                    </li>
                </ul>
            </div>
            </nav>
      </header>
        
    )

}

export default Nav