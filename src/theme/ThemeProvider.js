import React from 'react'
import { ThemeProvider } from 'styled-components'

const SCREEN_BREAKPOINTS = {
  xs: 576,
  mobile: 768,
  tablet: 992,
  tabletLarge: 1024,
  desktop: 1200,
}

const base = {
  typography: {
    headerFont: 'HK Grotesk',
    bodyFont: 'HK Grotesk',
    h1: {
      weight: 700,
      size: '2em',
    },
    h2: {
      weight: 600,
      size: '1.4em',
      opacity: 0.7,
    },
    h3: {
      weight: 600,
      size: '1em',
      opacity: 0.5,
    },
  },
  opacity: {
    disabled: 0.5,
  },
  mediaQueries: {
    xs: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.xs}px)`,
    mobile: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.mobile}px)`,
    tablet: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tablet}px)`,
    tabletLarge: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tabletLarge}px)`,
    desktop: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.desktop}px)`,
  },
}

const nwTheme = {
  ...base,
  name: 'nwHacks',
  colors: {
    background: '#2D2937',
    card: '#2D2937', // todo: update to proper colour
    border: 'rgba(255, 255, 255, 0.3)',
    secondaryBackgroundTransparent: '#1D1B24bb',
    secondaryBackground: '#1D1B24',
    error: '#ff0033',
    errorText: '#fff',
    foreground: '#4F4A59',
    primary: '#06C1C0',
    default: '#BEBEBE',
    warning: '#F18383',
    secondaryWarning: '#EF6C6C',
    highlight: 'rgba(255, 255, 255, 0.6)',
    text: '#fff',
    link: '#fff',
    linkHover: '#31E0E0', //TODO
    primaryGradient: 'linear-gradient(180deg, #4DE8C2 0%, #18CDCD 100%, #19CBCB 100%)', // button
    primaryGradientHover: 'linear-gradient(180deg, #76F4D6 0%, #18CDCD 100%, #44D0D0 100%)', // button hover
    tertiaryHover: '#1EEDC8', // button hover
    selects: {
      hover: 'rgba(77, 232, 194, 0.2)',
      focus: 'rgba(77, 232, 194, 0.4)',
    },
    hover: '#D9FFF9',
    scrollbar: '#4F4A59',
    banner: 'rgba(75, 65, 130, 0.2)',
    login: {
      googleHover: '#fafafa',
      githubHover: '#545159',
    },
    greetingBorder: '#000000',
    applicationCard: 'rgba(75, 65, 130, 0.2)',
  },
}

const hackcampTheme = {
  ...base,
  name: 'hackCamp',
  colors: {
    background: '#2A3C4A',
    card: '#2A3C4A', // todo: update
    border: 'rgba(255, 255, 255, 0.3)',
    secondaryBackground: '#577079',
    secondaryBackgroundTransparent: '#577079bb',
    foreground: '#FFBC96',
    error: '#ff0033',
    errorText: '#fff',
    warning: '#FF8989',
    secondaryWarning: '#EF6C6C',
    primary: '#FFBC96',
    default: '#BEBEBE',
    highlight: 'rgba(255, 255, 255, 0.6)',
    text: '#fff',
    link: '#fff',
    linkHover: '#FFBC96',
    tertiaryHover: '#AD795E', // button hover
    selects: {
      hover: 'rgba(201, 149, 119, 0.2)',
      focus: 'rgba(201, 149, 119, 0.5)',
    },
    hover: '#A0B9C0',
    scrollbar: '#80959B',
    banner: '#2A3C4A',
    login: {
      googleHover: '#fafafa',
      githubHover: '#545159',
    },
    greetingBorder: '#000000',
    applicationCard: 'rgba(75, 65, 130, 0.2)', // TODO
  },
}

const cmdfTheme = {
  ...base,
  typography: {
    ...base.typography,
    headerFont: 'Fira Code',
    bodyFont: 'DM Sans',
  },
  name: 'cmdf',
  colors: {
    background: '#F9F6EF',
    card: '#EFEDEA',
    border: 'rgba(0, 0, 0, 0.3)',
    cardSecondary: '#C8BFB6',
    secondaryBackground: '#B7C2B4',
    secondaryBackgroundTransparent: '#B7C2B4',
    foreground: '#FFBC96',
    error: '#ff0033',
    errorText: '#fff',
    warning: '#FF8989',
    secondaryWarning: '#EF6C6C',
    primary: '#B95D1D',
    default: '#FFBC96',
    highlight: '#192825',
    text: '#192825',
    link: '#192825',
    linkHover: '#fff',
    tertiaryHover: '#AD795E', // button hover
    selects: {
      hover: 'rgba(201, 149, 119, 0.2)',
      focus: 'rgba(201, 149, 119, 0.5)',
    },
    hover: '#A0B9C0',
    scrollbar: '#80959B',
    banner: '#F9F6EF',
    login: {
      googleHover: '#C8BFB6',
      githubHover: '#577079',
    },
    greetingBorder: '#000000',
    applicationCard: 'rgba(75, 65, 130, 0.2)', // TODO
  },
}

const THEMES = { nwTheme, hackcampTheme, cmdfTheme }
let selectedTheme = cmdfTheme

if (process.env.NODE_ENV !== 'production' || process.env.REACT_APP_ENV === 'STAGING') {
  const localTheme = window.localStorage.getItem('localTheme')
  selectedTheme = localTheme ? THEMES[localTheme] : selectedTheme
}

export default ({ children }) => <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
