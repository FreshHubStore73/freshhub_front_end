'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useMemo } from 'react';
import { useAuthStore } from '@/stores/Stores-providers';

export const useObserveUserData = () => {
    const session = useSession();

    // const [error, setError] = useState<string | null>(null);

    const setUser = useAuthStore((state) => state.setUser);
    const clearUser = useAuthStore((state) => state.clearUser);

    useEffect(() => {
        if (session.status === 'unauthenticated') {
            clearUser();
            return;
        }
        if (session.status === 'authenticated') {
            // setError(null);
            const { id, ...rest } = session.data.user;
            setUser(rest);
        }
    }, [session, setUser, clearUser]);

    return useMemo(
        () => ({ loading: session.status === 'loading' /*error*/ }),
        [session.status /*error*/],
    );
};
