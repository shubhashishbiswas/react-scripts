export const light = {
  alternate: {
    main: '#f7faff',
    dark: '#edf1f7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: {
    main: '#5931c2', /* purple*/
    main2: '#377dff', /* blue 1 */
    light: '#467de3', /* blue light */
    dark: '#2f6ad9',
    contrastText: '#fff', 
    main70Opacity: 'rgba(89, 49, 194, 0.7)' /* purple with opacity*/,
    main50Opacity: 'rgba(89, 49, 194, 0.5)' /* purple with opacity*/,
    main30Opacity: 'rgba(89, 49, 194, 0.3)' /* purple with opacity*/,
    main20Opacity: 'rgba(89, 49, 194, 0.2)' /* purple with opacity*/,

  },
  secondary: {
    light: '#ff8057',  /* salmon */
    main: '#ff955a', /* light salmon */
    dark: '#f5b840', /* light yellow */
    /*
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#FF9800',
    */
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788',
    light: '#f5f5f5',
    semilight: '#bababa',
    dark: '#000000',
    semidark:'#333333',

  },
  divider: 'rgba(0, 0, 0, 0.12)',
  
  dividergrey: 'rgba(105, 105, 105, 0.5)',
  dividergreyBody: 'rgba(105, 105, 105, 0.15)',
  
  background: {
    paper: '#ede7f6',
    /* paper: '#ffffff',*/
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#000000',
    light: '#f5f5f5',
    dark: '#000000',
    white: '#ffffff',
    footerdark: '#191919',
  },
};

export const dark = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark',
  primary: {
    main: '#1976d2',
    light: '#2196f3',
    dark: '#0d47a1',
    contrastText: '#fff',
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748',
  },
};
