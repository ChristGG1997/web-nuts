import React from 'react'
import LogoContacto from '../assets/images/logo-contacto.png'
import '../assets/css/ContactUs.css'

function ContactUs(){

    return(
        <div className="container">
            <div className="mt-5 m-3">
                <img src={LogoContacto} class="logo" />
            </div>
            <div className="mt-4 m-3">
                <p>Contactenos con informacion mas detallada:</p>
            </div>
            <form>
                <div className="input-group">
                    <input type="text" name="name" className="form-control m-3" placeholder="Nombre" aria-label="Nombre" />
                    <input type="text" name="phone" className="form-control m-3" placeholder="Telefono" aria-label="Telefono" />
                </div>
                <div className="input-group">
                    <input type="email" name="email" className="form-control m-3" placeholder="Email" aria-label="Email" />
                    <input type="text" name="type" className="form-control m-3" placeholder="Tipo de desarrollo" aria-label="Tipo de desarrollo" />
                </div>
                <div className="form-floating m-3">
                    <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea" />
                    <label for="floatingTextarea">Descripcion</label>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-send m-3" type="button">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs