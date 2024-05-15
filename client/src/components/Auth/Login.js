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

const Login = ({ onSignUpClick }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
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
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
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
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    fullWidth
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
            </Box>
        </Box>
    );
}

export default Login;
