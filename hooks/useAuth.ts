import { useContext } from 'react';
import { AuthContext } from '../hocs/AuthContext';

export const useAuth = () => {
    return useContext(AuthContext);
};
