import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                'bb-red': {
                    DEFAULT: '#D42B2B',
                    50: '#FEF2F2',
                    100: '#FDE8E8',
                    200: '#F9BFBF',
                    300: '#F49696',
                    400: '#E45454',
                    500: '#D42B2B',
                    600: '#B91C1C',
                    700: '#991B1B',
                    800: '#7F1D1D',
                    900: '#651A1A',
                },
                'bb-orange': {
                    DEFAULT: '#E8842A',
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#E8842A',
                    600: '#D97706',
                    700: '#B45309',
                    800: '#92400E',
                    900: '#78350F',
                },
                'bb-gold': {
                    DEFAULT: '#F0D9A0',
                    light: '#F7EBCF',
                    dark: '#C4A96B',
                },
                'bb-dark': {
                    DEFAULT: '#1C1210',
                    50: '#3D2E2B',
                    100: '#2E201E',
                    200: '#1C1210',
                    300: '#0F0A09',
                },
                'bb-cream': {
                    DEFAULT: '#FAF8F5',
                    dark: '#F0EDE8',
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                display: ['Playfair Display', 'serif'],
            },
        },
    },

    plugins: [forms],
};
