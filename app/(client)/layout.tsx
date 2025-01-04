import React from 'react'
import ClientProviders from '@/utils/ClientProviders'

type Props = { children: React.ReactNode }

export default function layout({ children }: Props) {
    return (
        <ClientProviders>{children}</ClientProviders>
    )
}