'use client';

import React from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider, SimplePaletteColorOptions, createTheme } from '@mui/material/styles';
import { Oswald, Lato } from 'next/font/google';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        h1_Oswald: React.CSSProperties;
        h2_Oswald: React.CSSProperties;
        header: React.CSSProperties;
        text: React.CSSProperties;
    }
    interface Palette {
        accent: SimplePaletteColorOptions;
        peach: SimplePaletteColorOptions;
        beige: SimplePaletteColorOptions;
    }
    interface PaletteOptions {
        accent?: SimplePaletteColorOptions;
        peach?: SimplePaletteColorOptions;
        beige?: SimplePaletteColorOptions;
    }
    interface TypographyVariantsOptions {
        h1_Oswald?: React.CSSProperties;
        h2_Oswald?: React.CSSProperties;
        header?: React.CSSProperties;
        text?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1_Oswald: true;
        h2_Oswald: true;
        header: true;
        text: true;
        h1: false;
        subtitle1: false;
        subtitle2: false;
        body1: false;
        body2: false;
        caption: false;
        overline: false;
    }
}

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['500', '700'],
});

export const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#F15C30',
        },
        accent: {
            main: '#F15C30',
        },
        peach: {
            main: '#FFC182',
        },
        beige: {
            main: '#E1D5C9',
        },
        text: {
            primary: '#3E3B3B',
            secondary: '#040705',
        },
    },
    typography: {
        fontFamily: [lato.style.fontFamily, oswald.style.fontFamily, 'sans-serif'].join(','),
        fontSize: 14,
        h1_Oswald: {
            fontFamily: oswald.style.fontFamily,
            fontSize: '98px',
            fontWeight: 700,
            lineHeight: '145.24px',
        },
        h2_Oswald: {
            fontFamily: oswald.style.fontFamily,
            fontSize: '62px',
            fontWeight: 500,
            lineHeight: '91.88px',
        },
        h1: undefined,
        h2: {
            fontFamily: lato.style.fontFamily,
            fontSize: '52px',
            fontWeight: 400,
            lineHeight: '62.4px',
            color: 'primary',
        },
        h3: {
            fontFamily: lato.style.fontFamily,
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: '33.6px',
        },
        button: {
            fontFamily: lato.style.fontFamily,
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: '33.6px',
        },
        header: {
            fontFamily: lato.style.fontFamily,
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '24px',
            textDecoration: 'none',
        },
        text: {
            fontFamily: lato.style.fontFamily,
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '24px',
        },
        subtitle1: undefined,
        subtitle2: undefined,
        body1: undefined,
        body2: undefined,
        caption: undefined,
        overline: undefined,
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '111px !important',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    borderBottom: '1px solid',
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                color: '#3E3B3B',
            },
        },
        MuiButton: {
            styleOverrides: {
                containedSuccess: {
                    backgroundColor: '#F15C30',
                },
                root: {
                    // backgroundColor: '#F15C30',
                    textTransform: 'none',
                },
            },
        },
        MuiBadge: {
            styleOverrides: {
                colorPrimary: '#E1D5C9',
            },
        },
    },
});

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
    return (
        <ThemeProvider theme={theme}>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProvider>
    );
}
