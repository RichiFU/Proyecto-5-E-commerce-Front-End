import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import './signInSide.css'

const theme = createTheme();

export default function SignInSide() {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState(false)
    const { loginUser, registerUser } = useContext(UserContext)
    const initialValues = {
        name: "",
        age: "",
        email: "",
        password: ""
    }
    const [user, setUser] = useState(initialValues)

    const handleChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const nameRegex = /^[A-Za-z]+$/

    // Validación separada para un mínimo de 3 letras
    const isNameValid = (name) => {
        return name.length >= 3;
    };

    // Validaciones de inputs
    const handleValidation = () => {

        if (signUp) {
            // Validar nombre solo si es un registro
            if (user.name === "") {
                alert('El nombre es requerido');
                return false;
            } else if (!nameRegex.test(user.name)) {
                alert('El nombre solo debe contener solo letras de la A a la Z');
                return false;
            } else if (!isNameValid(user.name)) {
                alert('El nombre debe tener al menos 3 letras');
                return false;
            } else if (user.age === "" || user.age < 16) {
                alert('La edad debe ser mayor o igual a 16 años');
                return false;
            }
        }



        if (user.email === "") {
            alert('El correo es requerido');
            return false;
        } else if (!user.email.includes("@")) {
            alert('El correo no es válido (falta @)');
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            alert('El correo no es válido');
            return false;
        } else if (user.password === "") {
            alert('La contraseña es requerida');
            return false;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(user.password)) {
            alert('La contraseña no es válida. Debe tener al menos 6 caracteres, incluyendo letras y números');
            return false;
        }
        return true;

    };

    // validacion de usuario o contraseña incorrecto en login
    const handleLogin = async () => {
        try {
            await loginUser(user);
            setUser(initialValues);
            navigate("/");
        } catch (error) {
            if (error.message === "Email o contraseña incorrecta!") {
                alert('Email o contraseña incorrecta!');
            } else {
                console.error(error);
            }
        }
    };

    //registrar un nuevo usuario
    const handleRegister = async () => {
        try {
            // Intenta registrar el usuario
            await registerUser(user); // Muestra la respuesta del backend en la consola
            setUser(initialValues);
            alert('Usuario registrado exitosamente');
            navigate("/");
        } catch (error) {
            if (error.message === "Email en uso!") {
                alert('El correo electrónico ya está en uso. Por favor, elige otro.');
            } else {
                console.error(error);
                alert('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
            }
        }
    };

    // maneja el evento del envio del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        if (handleValidation()) {
            if (signUp) {
                handleRegister();
            } else {
                handleLogin();
            }
        }
    };

    const changeMode = () => {
        setSignUp(!signUp)
        setUser(initialValues)
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '800px' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={5}
                    sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1500468756762-a401b6f17b46?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                    }}
                />
                <Grid item xs={12} sm={8} md={7} component={Paper} elevation={9} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar className="custom-avatar mb-2" sx={{ m: 1 }} />

                        <Typography className="mb-2" component="h1" variant="h5">
                            {signUp ? "Registrar Usuario" : "Iniciar Sesión"}
                        </Typography>
                        <Box className="name-input-box p-5" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            {signUp && (
                                <>
                                    <TextField
                                        margin="normal"
                                        className="name-input-tf"
                                        required
                                        id="name"
                                        fullWidth
                                        autoFocus
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Nombre"
                                        name="name"
                                        label="Nombre"
                                        value={user.name}
                                    />
                                    <TextField
                                        margin="normal"
                                        className="age-input-tf"
                                        required
                                        id="age"
                                        fullWidth
                                        autoFocus
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="Edad"
                                        name="age"
                                        label="Edad"
                                        value={user.age}
                                    />
                                </>
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo Electrónico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                value={user.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                value={user.password}
                            />
                            <Button
                                className="custom-buttom-login"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {signUp ? "Registrar" : "Iniciar Sesión"}
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Button onClick={changeMode}>
                                        {signUp ? "¿Ya tienes una cuenta? Inicia sesión" : "¿No tienes una cuenta? Registrate"}
                                    </Button>
                                    <div className="ml-2">
                                        <Typography className="mt-4 fs-6" variant="h6">
                                            Al iniciar sesión o registrarte, aceptas nuestros <a href="/terms">Términos y Condiciones</a>
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
