import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function useTimeout(callback: () => void, timeout: number) {
    const timeoutRef = useRef<NodeJS.Timeout>();
    const savedCb = useRef(callback);

    useEffect(() => {
        savedCb.current = callback;
    }, [callback]);

    const startTimer = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            savedCb.current();
        }, timeout);
    }, [timeout]);

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

    return {
        startTimer,
        cancelTimer,
    };
}
