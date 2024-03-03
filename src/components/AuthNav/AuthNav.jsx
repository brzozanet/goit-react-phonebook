import {NavLink} from 'react-router-dom';
import {Button } from '@mui/material';

export const AuthNav = () => {
    return (
        <div>
            <Button
                to="/register"
                component={NavLink} 
                sx={{
                    '&.active': {
                        color: '#00B4E5',
                        fontWeight: 600,
                        textDecoration: 'underline',
                    },
                }}
            >
                Register
            </Button>
            <Button
                to="/login"
                component={NavLink}
                sx={{
                    '&.active': {
                        color: '#00B4E5',
                        fontWeight: 600,
                        textDecoration: 'underline',
                    },
                }}
            >
                Login
            </Button>
        </div>
    );
};
