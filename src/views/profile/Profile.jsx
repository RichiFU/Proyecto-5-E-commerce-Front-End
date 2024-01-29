import { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';

// Estilo
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Profile = () => {
  const { infoUser, editUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [userForm, setUserForm] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    });
  };

  const sendData = () => {
    const userId = infoUser._id;
    editUser(userId, userForm);
    setOpen(false);
    alert('Usuario editado exitosamente');
  };

  useEffect(() => {
    setUserForm({
      name: infoUser.name,
      age: infoUser.age || '',
      email: infoUser.email
    });
  }, [infoUser]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const nameRegex = /^[A-Za-z]+$/;

  const isNameValid = (name) => {
    return name.length >= 3;
  };

  const handleValidation = () => {
    if (userForm.name === "") {
      alert('El nombre es requerido');
      return false;
    } else if (!nameRegex.test(userForm.name)) {
      alert('El nombre solo debe contener solo letras de la A a la Z');
      return false;
    } else if (!isNameValid(userForm.name)) {
      alert('El nombre debe tener al menos 3 letras');
      return false;
    } else if (userForm.age === "") {
      alert('La edad es requerida');
      return false;
    } else if (userForm.age < 16){
      alert ('La edad debe ser mayor o igual a 16 años ')
      return false;
    }

    if (userForm.email === "") {
      alert('El correo es requerido');
      return false;
    } else if (!userForm.email.includes("@")) {
      alert('El correo no es válido (falta @)');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userForm.email)) {
      alert('El correo no es válido');
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      sendData();
    }
  };

  return (
    <div className='container bg-profile'>
      <div className="container-title3 capitalize mt-5" style={{ display: 'flex', justifyContent: 'space-between', textTransform: 'capitalize', marginTop: '5px' }}>
        <div>
          <p className='mt-3 fs-4'>{`Perfil de usuario: ${infoUser.name}`}</p>
        </div>
        <div className="ml-4">
          <PersonIcon className="mt-2" sx={{ fontSize: "50px", color: '#155e75' }} />
        </div>
      </div>

      <div className='row mb-5'>

        {/* Imagen */}
        <div className='coupon col-lg-6 cold-md-6 col12 mb-4'>
          <div >
            <Card className='shadow' sx={{ maxWidth: 500, borderRadius: 0, border: "1px solid", borderColor: "#155e75" }}>
              <CardMedia
                sx={{
                  height: 300,
                  marginTop: 4,
                  backgroundSize: 'contain', // Configura la propiedad backgroundSize
                  backgroundImage: 'url(https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png)',

                }}
                title="Perfil de usuario"
              />
              <Typography
                className='mt-2 capitalize'
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                {`${infoUser.name}`}
              </Typography>
              <CardContent className='ml-3' >

                <Typography className="mt-1" variant="h6" color="text.secondary" align="start">
                  <b>Edad:</b> {` ${infoUser.age} años`}
                </Typography>
                <Typography variant="h6" color="text.secondary" align="start">
                  <b>Correo:</b> {`${infoUser.email}`}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Caracteristicas */}
        <div className='total col-lg-6 cold-md-6 col12'>
          <div>
            <div className="product-carac">
              <CardActions sx={{ justifyContent: "center" }}>
                <Button onClick={handleOpen}>Editar Usuario</Button>
                {/* <Button size="small">Eliminar Usuario</Button> */}
              </CardActions>
            </div>
            <div className="mt-4 product-carac mb-4">
              <Box
                component="form"
                onSubmit={handleSubmit}
                display={!open ? "none" : "flex"}
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "20px",
                  flexDirection: "column",
                  marginBottom: "20px"
                }}
                noValidate
                autoComplete="off"
              >
                <Typography id="modal-modal-title" variant="h5" align="center" className='justify-center mb-2'>
                  Editar usuario
                </Typography>
                <TextField
                  id="outlined-disabled"
                  label="Nombre"
                  value={userForm.name}
                  name="name"
                  onChange={handleChange}
                  type="text"
                />
                <TextField
                  id="outlined-disabled"
                  label="Edad"
                  value={userForm.age}
                  type="number"
                  onChange={handleChange}
                  name="age"
                />
                <TextField
                  id="outlined-disabled"
                  label="Correo Electrónico"
                  value={userForm.email}
                  type="email"
                  onChange={handleChange}
                  name="email"
                />
                <div className='dflex justify-center text-center'>
                  <Button type="submit">Enviar</Button>
                  <Button onClick={() => setOpen(false)}>Cancelar</Button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
