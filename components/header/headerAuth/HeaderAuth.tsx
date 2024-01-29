import { AppBar, Toolbar } from '@mui/material';
import Logo from '../logo';

import styles from './headerAuth.module.scss';

export default function HeaderAuth() {
    return (
        <AppBar position="fixed">
            <div className="container">
                <Toolbar disableGutters>
                    <>
                        <Logo />
                    </>
                </Toolbar>
            </div>
        </AppBar>
    );
}
