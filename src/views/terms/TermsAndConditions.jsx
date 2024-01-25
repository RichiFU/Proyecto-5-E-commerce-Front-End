import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArticleIcon from '@mui/icons-material/Article';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container'>
            <div className="container-title3 capitalize mt-5" style={{ display: 'flex', justifyContent: 'space-between', textTransform: 'capitalize', marginTop: '5px' }}>
                <div>
                    <p className='mt-3 fs-4'>Terminos y condiciones</p>
                </div>
                <div className="ml-4">
                    <ArticleIcon className="mt-3" sx={{ fontSize: "40px", color: '#155e75' }} />
                </div>
            </div>

            <Box className="mt-2 pb-5 mb-5"
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "60vh" }}
            >
                <Tabs


                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 2, borderColor: '#155e75', display: 'left', flexDirection: 'column' }}
                    style={{ minWidth: '35%' }}
                >
                    <Tab className='fs-6 fw-bold mt-3' label="1. Registro y Cuenta de Usuario" {...a11yProps(0)} />
                    <Tab className='fs-6 fw-bold' label="2. Sitio Web y Propiedad intelectual" {...a11yProps(1)} />
                    <Tab className='fs-6 fw-bold' label="3. Pedidos, Pagos y Devoluciones" {...a11yProps(2)} />
                    <Tab className='fs-6 fw-bold' label="4. Modificaciones" {...a11yProps(3)} />
                    <Tab className='fs-6 fw-bold' label="5. Ley Aplicable" {...a11yProps(4)} />
                    <Tab className='fs-6 fw-bold' label="6. Limitación de Responsabilidad" {...a11yProps(5)} />

                </Tabs>
                <TabPanel value={value} index={0} className="ml-5" style={{ minWidth: "50%", overflowY: 'scroll', maxHeight: '100%' }}>
                    1.1. Para acceder a ciertas funciones de nuestro sitio web, deberás registrarte y crear una cuenta de usuario.
                    <br />
                    <br />
                    1.2. Al registrarte, garantizas que la información proporcionada es precisa, actual y completa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y aceptas notificarnos inmediatamente cualquier uso no autorizado de tu cuenta.
                    <br />
                    <br />
                    1.3. La información personal proporcionada durante el registro y el uso de nuestro sitio web estará sujeta a nuestra Política de Privacidad. Al utilizar nuestro sitio web, aceptas nuestras prácticas de privacidad.
                </TabPanel>
                <TabPanel value={value} index={1} className="ml-5" style={{ minWidth: "50%", overflowY: 'scroll', maxHeight: '100%' }}>
                    2.1. Al utilizar nuestro sitio web, te comprometes a cumplir con todas las leyes aplicables y estos términos y condiciones.
                    <br />
                    <br />
                    2.2. No deberás utilizar el sitio web de manera que pueda dañar, desactivar, sobrecargar o perjudicar nuestra plataforma.
                    <br />
                    <br />
                    2.3. Todo el contenido en nuestro sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, está protegido por derechos de propiedad intelectual.
                </TabPanel>
                <TabPanel value={value} index={2} className="ml-5" style={{ minWidth: "50%", overflowY: 'scroll', maxHeight: '100%' }}>
                    3.1. Los pedidos de productos están sujetos a disponibilidad y a nuestra aprobación.
                    <br />
                    <br />
                    3.2. Los precios y la disponibilidad de productos están sujetos a cambios sin previo aviso. Nos reservamos el derecho de modificar o cancelar pedidos en cualquier momento.
                    <br />
                    <br />
                    3.3. Al realizar un pedido, aceptas pagar el monto total especificado, incluidos los impuestos y gastos de envío.
                    <br />
                    <br />
                    3.4. Consulta nuestra política de cancelación y devolución para obtener información sobre los procedimientos y las condiciones aplicables.
                </TabPanel>
                <TabPanel value={value} index={3} className="ml-5" style={{ minWidth: "50%", overflowY: 'scroll', maxHeight: '100%' }}>
                    4. Nos reservamos el derecho de realizar modificaciones y actualizaciones en estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. Se recomienda revisar periódicamente estos términos y condiciones para estar al tanto de cualquier cambio. Al continuar utilizando nuestro sitio web después de la publicación de modificaciones, aceptas y te comprometes a cumplir con las versiones actualizadas de los términos y condiciones.
                </TabPanel>
                <TabPanel value={value} index={4} className="ml-5" style={{ minWidth: "50%", overflowY: 'scroll', maxHeight: '100%' }}>
                    5.1. Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes vigentes en Chile
                    <br />
                    <br />
                    5.2.   Al registrarte como usuario en nuestro sitio web, reconoces haber leído, comprendido y aceptado estos términos y condiciones.
                </TabPanel>
                <TabPanel value={value} index={5} className="ml-5" style={{ minWidth: "50%", overflowY: 'scroll', maxHeight: '100%' }}>
                    6.1. En la medida permitida por la ley, no seremos responsables de daños directos, indirectos, incidentales, especiales o consecuentes resultantes del uso de nuestro sitio web.
                    <br />
                    <br />
                    Gracias por unirte a Marathon.
                </TabPanel>

            </Box>
        </div >
    );
}
