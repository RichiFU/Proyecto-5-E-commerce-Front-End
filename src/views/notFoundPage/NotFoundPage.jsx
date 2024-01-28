import { Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    const volverA = useNavigate()

    const manejoBoton = () => {
        // dentro del parentesis puedo escribir la ruta a la que quiero ir
        volverA("/")
    }

    return (
        <section>
            {/* Imagen de error al escribir ruta no correspondiente en url */}
            <div className=" container d-flex flex-column align-items-center justify-content-center h-100 pt-5 ">
                <div className="text-center">
                    <Image
                        src="../../../Error-404 oops.png"
                        alt="Error 404"
                        fluid
                        className="error404"
                        style={{ width: "800px", height: "auto" }}
                    />
                </div>
            </div>

            {/* Boton "Volver a Inicio" */}
            <div className="p-4 text-center mb-5">
                <Button onClick={manejoBoton} className="custom-button fs-5" variant="outlined" color="inherit">
                    Volver
                </Button>
            </div>

        </section>
    );
};

export default NotFoundPage;