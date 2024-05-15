import React from 'react';
import {
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
    Grid,
    Box,
    Typography
} from '@mui/material';
import { Facebook, Twitter, Google, GitHub } from '@material-ui/icons';

const Login = () => {
    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                Sign in with:
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button color="primary" startIcon={<Facebook />} />
                </Grid>
                <Grid item>
                    <Button color="primary" startIcon={<Twitter />} />
                </Grid>
                <Grid item>
                    <Button color="primary" startIcon={<Google />} />
                </Grid>
                <Grid item>
                    <Button color="primary" startIcon={<GitHub />} />
                </Grid>
            </Grid>
            <Typography variant="body1" align="center" gutterBottom>
                or:
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth label="Email Address" autoComplete="email" autoFocus />
                <TextField margin="normal" required fullWidth label="Password" type="password" autoComplete="current-password" />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Button href="#" variant="body2">
                            Forgot password?
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Login;
