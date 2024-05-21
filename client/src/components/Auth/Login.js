import React, { useState } from 'react';
import {
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
    Grid,
    Box,
    Typography,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Facebook, Twitter, Google, GitHub, Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/authActions'; // Import your login action

const Login = ({ onSignUpClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ usernameOrEmail: '', password: '' });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login(formData,navigate)); // Dispatch login action with form data
            // Clear form data and errors upon successful login
            setFormData({ usernameOrEmail: '', password: '' });
            setErrors({});
        } catch (error) {
            // Handle login errors, such as displaying error messages
            setErrors({ login: error.message });
            console.error('Login failed:', error);
        }
    };

    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                Sign in with:
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button color="primary" startIcon={<Facebook style={{ color: '#4267B2' }} />} />
                </Grid>
                <Grid item>
                    <Button color="primary" startIcon={<Twitter style={{ color: '#1DA1F2' }} />} />
                </Grid>
                <Grid item>
                    <Button color="primary" startIcon={<Google style={{ color: '#DB4437' }} />} />
                </Grid>
                <Grid item>
                    <Button color="primary" startIcon={<GitHub style={{ color: '#24292E' }} />} />
                </Grid>
            </Grid>
            <Typography variant="body1" align="center" gutterBottom>
                or:
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Username or Email"
                    name="usernameOrEmail"
                    value={formData.usernameOrEmail}
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        background: 'linear-gradient(to right, #4A5D5E, #3E4851)', // Gradient background
                        color: 'white', // Text color
                        '&:hover': {
                            background: 'linear-gradient(to right, #3E4851, #4A5D5E)', // Gradient background on hover
                        }
                    }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Button href="#" variant="body2">
                            Forgot password?
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button href="#" variant="body2" onClick={onSignUpClick}>
                            {"Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
                {/* Display login error */}
                {errors.login && (
                    <Typography variant="body2" color="error" align="center">
                        {errors.login}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default Login;
