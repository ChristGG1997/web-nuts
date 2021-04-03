import './point.css';
import Ciudad from '../../assets/images/edificios.png';
import Reunion from '../../assets/images/reunion.png';


function Point(){

    return(
        <div class="IndexPoint">
            <img src={Ciudad} class="Ciudad" />
            <img src={Reunion} class="Reunion" />
        </div>
        
    )

}

export default Point