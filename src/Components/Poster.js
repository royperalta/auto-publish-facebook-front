import logos from '../logo.jpg'
import '../App.css';

export default function Poster({ id, title, content }) {
    console.log(id)
    return (
        <div>
            <div className="take"
                style={{
                    backgroundImage: `url(http://localhost:5000/images/${id}.jpg)`,
                    backgroundRepeat: `no-repeat`,

                    backgroundSize: '130%'
                }}>
                <div className="gradiente">
                    <div className="box-header">
                        <img className="logito" src={logos} alt="logo" />
                    </div>
                    <div className="box-body">
                        <center><div className="titulo">{title}</div></center>
                        {/*show && <Box></Box>*/}

                    </div>

                </div>
                <div className="cinta"><center><p>Noticias de último minuto</p></center></div>
            </div>
            <div class="id">{id}</div>

            <p>{content}</p>
            <br></br>

        </div >
    )
}