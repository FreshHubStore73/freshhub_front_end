'use client';
import { Palette } from '@mui/icons-material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import {
    ThemeProvider,
    ThemeOptions,
    createTheme,
    PaletteColorOptions,
} from '@mui/material/styles';
import { Oswald, Lato } from 'next/font/google';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        h1_Oswald: React.CSSProperties;
        h2_Oswald: React.CSSProperties;
        header: React.CSSProperties;
        text: React.CSSProperties;
    }
    interface PaletteOptions {
        accent?: PaletteColorOptions;
        peach?: PaletteColorOptions;
        beige?: PaletteColorOptions;
    }
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        h1_Oswald?: React.CSSProperties;
        h2_Oswald?: React.CSSProperties;
        header?: React.CSSProperties;
        text?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
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
declare module '@mui/material/styles/createPalette' {
    // interface Palette {
    //     accent: PaletteOptions;
    //     peach: PaletteOptions;
    //     beige: PaletteOptions;
    // }

    interface PaletteOptions {
        accent?: {
            main: string;
        };
        peach?: {
            main: string;
        };
        beige?: {
            main: string;
        };
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
            main: '#dbdbdf',
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
                root: {
                    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    // border: 0,
                    // borderRadius: 3,
                    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    // color: 'white',
                    // height: 48,
                    // padding: '0 30px',
                    // textTransform: 'none',
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

import React from 'react';

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
    return (
        <ThemeProvider theme={theme}>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProvider>
    );
}
