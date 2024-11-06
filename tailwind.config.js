import { nextui } from '@nextui-org/theme';
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,jsx,ts,tsx}',
  './src/components/**/*.{js,jsx,ts,tsx}',
  './node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js',
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

];
export const theme = {
  extend: {
    colors: {
      // Colors set using branding guides from https://brand.jhu.edu/visual-identity/colors/
      darkBlue: 'var(--color-dark-blue, #002D72)',
      lightBlue: 'var(--color-light-blue, #68ACE5)',
      mediumBlue: '#0077D8',
      harborBlue: '#4E97E0',

      primary: ' #002D72',
      secondary: '#68ACE5', 
      
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
  },
};
export const darkMode = 'class';
export const plugins = [
  daisyui,
  function ({ addComponents, theme }) {
    addComponents({
      '.btn-darkBlue': {
        backgroundColor: theme('colors.darkBlue'), // Referencing custom color
        color: theme('colors.white'),
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: theme('colors.darkBlue', '#000070'), // optional fallback
        },
      },
    });
  },
  nextui({
    prefix:'nextui',
    addCommonColors: 'false',
    defaultTheme:'light',
    layout: {
      dividerWeight: '1px', // h-divider the default height applied to the divider component
      disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
      fontSize: {
        tiny: '0.75rem', // text-tiny
        small: '0.875rem', // text-small
        medium: '1rem', // text-medium
        large: '1.125rem', // text-large
      },
      lineHeight: {
        tiny: '1rem', // text-tiny
        small: '1.25rem', // text-small
        medium: '1.5rem', // text-medium
        large: '1.75rem', // text-large
      },
      radius: {
        small: '8px', // rounded-small
        medium: '12px', // rounded-medium
        large: '14px', // rounded-large
      },
      borderWidth: {
        small: '1px', // border-small
        medium: '2px', // border-medium (default)
        large: '3px', // border-large
      },
    },
    themes: {
      light: {
        layout: {
          hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
              '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
            // shadow-medium
            medium:
              '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
            // shadow-large
            large:
              '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
          },
        },
      },
      dark: {
        layout: {
          hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
              '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
            // shadow-medium
            medium:
              '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
            // shadow-large
            large:
              '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
          },
        },
      },
    },
  }),
];
