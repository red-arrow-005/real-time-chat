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
import { signUp } from '../../actions/authActions';
import { toast } from 'react-toastify';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Passwords do not match";
        }
        return tempErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tempErrors = validate();
        if (Object.keys(tempErrors).length === 0) {
            const { username, email, password } = formData;
            const result = await dispatch(signUp({ username, email, password }, navigate));
            if (result.success) {
                toast.success(result.message);
                setFormData({ username: '', email: '', password: '', confirmPassword: '' });
                setErrors({});
                setSuccessMessage('Registration successful!');
            } else {
                // Handle signup error if needed
                toast.error(result.message);
                setSuccessMessage('');
                setErrors({ signup: result.error });
                console.error('Sign-up failed:', result.error);
            }
        } else {
            toast.error(tempErrors.confirmPassword);
            setErrors(tempErrors);
            setSuccessMessage('');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                Sign up with:
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
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    autoFocus
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '#D2DBC8', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#D2DBC8', // Border color when focused
                            },
                        },
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '#D2DBC8', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#D2DBC8', // Border color when focused
                            },
                        },
                    }}
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
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '#D2DBC8', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#D2DBC8', // Border color when focused
                            },
                        },
                    }}
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="current-password"
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '#D2DBC8', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#D2DBC8', // Border color when focused
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <FormControlLabel control={<Checkbox value="terms" color="primary" />} label="I have read and agree to the terms" />
                <Button fullWidth variant="contained" sx={{
                    mt: 3,
                    mb: 2,
                    background: 'linear-gradient(to right, #4A5D5E, #3E4851)', // Gradient background
                    color: 'white', // Text color
                    '&:hover': {
                        background: 'linear-gradient(to right, #3E4851, #4A5D5E)', // Gradient background on hover
                    }
                }} type="submit">
                    Sign Up
                </Button>
                {successMessage && (
                    <Typography variant="body1" align="center" color="success">
                        {successMessage}
                    </Typography>
                )}
                {errors.signup && (
                    <Typography variant="body2" color="error" align="center">
                        {errors.signup}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default Register;
