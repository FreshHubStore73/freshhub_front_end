'use client';

import React from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider, SimplePaletteColorOptions, createTheme } from '@mui/material/styles';
import { Oswald, Lato } from 'next/font/google';
import { AuthProvider } from '@/hocs/AuthContext';

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
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        desktop: true;
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
        error: {
            main: '#F15C30',
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
        // h2_Oswald: {
        //     fontFamily: oswald.style.fontFamily,
        //     fontSize: '62px',
        //     fontWeight: 500,
        //     lineHeight: '91.88px',
        // },
        h1: undefined,
        // h2: {
        //     fontFamily: lato.style.fontFamily,
        //     fontSize: '52px',
        //     fontWeight: 400,
        //     lineHeight: '62.4px',
        //     color: 'primary',
        // },
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
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    borderBottom: '1px solid',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                containedSuccess: {
                    backgroundColor: '#F15C30',
                },
                root: {
                    backgroundColor: '#F15C30',
                    color: '#fff',
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
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            desktop: 1200,
        },
    },
});

theme.typography.h2_Oswald = {
    [theme.breakpoints.up('mobile')]: {
        fontFamily: oswald.style.fontFamily,
        fontWeight: 500,
        fontSize: '32px',
        lineHeight: '47.42px',
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: '46px',
        lineHeight: '68.17px',
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '62px',
        lineHeight: '91.88px',
    },
};
theme.typography.h2 = {
    [theme.breakpoints.up('mobile')]: {
        fontFamily: lato.style.fontFamily,
        fontWeight: 400,
        color: 'primary',
        fontSize: '26px',
        lineHeight: '31.2px',
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: '36px',
        lineHeight: '43.2px',
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '52px',
        lineHeight: '62.4px',
    },
};

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
    return (
        <ThemeProvider theme={theme}>
            <AppRouterCacheProvider>
                <AuthProvider>{children}</AuthProvider>
            </AppRouterCacheProvider>
        </ThemeProvider>
    );
}
