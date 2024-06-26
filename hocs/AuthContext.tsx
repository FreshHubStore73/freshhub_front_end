import { getUser } from '@/components/authItems/auth';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface IAuthContext {
    user: IUserInfo | null;
    isAuthorized: boolean;
    // isAdmin: boolean;
    signOut: () => void;
    signIn: (newUser: IUserInfo) => void;
}
const initialUser: IAuthContext = {
    user: null,
    isAuthorized: false,
    // isAdmin: false,
    signOut: () => {},
    signIn: () => {},
};
export const AuthContext = createContext<IAuthContext>({
    user: null,
    isAuthorized: false,
    // isAdmin: false,
    signIn: () => {},
    signOut: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUserInfo | null>(null);
    const [isAuthorized, setAuthorized] = useState(false);
    // const [isAdmin, setAdmin] = useState(false);

    const signIn = (newUser: IUserInfo) => {
        setUser(newUser);
        setAuthorized(true);
        // if (newUser.userRole === 'admin') setAdmin(true);
        // cb();
    };

    const signOut = () => {
        setUser(null);
        // setAdmin(false);
        setAuthorized(false);
        // cb();
    };

    useEffect(() => {
        (async () => {
            const data = await getUser();

            if (data.error) {
                // setAuthorized(false);
                signOut();
            }

            if (data.user) {
                signIn(data.user);
            }
        })();
    }, []);

    const value = {
        user,
        isAuthorized,
        // isAdmin,
        signIn,
        signOut,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
