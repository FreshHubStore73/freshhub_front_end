import React, { useCallback, useEffect } from 'react';

export default function useTimeout(callback: () => void, timeout: number) {
    const timeoutRef = React.useRef<NodeJS.Timeout>();

    const startTimer = useCallback(() => {
        timeoutRef.current = setTimeout(callback, timeout);
    }, [callback, timeout]);

    const cancelTimer = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    useEffect(() => {
        return () => {
            cancelTimer();
        };
    }, [cancelTimer]);

    return { startTimer, cancelTimer };
}
