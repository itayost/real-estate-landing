// Theme configuration for the Real Estate Landing Page

const theme = {
  // Colors
  colors: {
    primary: {
      main: '#1a365d',
      dark: '#0f2442',
      light: '#2c5282',
      contrast: '#ffffff',
    },
    secondary: {
      main: '#d69e2e',
      dark: '#b7791f',
      light: '#ecc94b',
      contrast: '#ffffff',
    },
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
      light: '#718096',
      white: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f7fafc',
      gray: '#edf2f7',
      dark: '#2d3748',
    },
    border: {
      default: '#e2e8f0',
      focus: '#1a365d',
    },
    status: {
      success: '#48bb78',
      error: '#f56565',
      warning: '#ed8936',
      info: '#4299e1',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      body: "'Open Sans Hebrew', 'Open Sans', sans-serif",
      heading: "'Heebo', 'Assistant', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.6,
      relaxed: 1.8,
    },
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },

  // Breakpoints
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Border Radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
    timing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Z-index
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    tooltip: 1060,
  },
};

// Media query helpers
export const mediaQueries = {
  xs: `@media (min-width: ${theme.breakpoints.xs})`,
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  '2xl': `@media (min-width: ${theme.breakpoints['2xl']})`,
};

// Utility functions
export const getSpacing = multiplier => {
  return `calc(${theme.spacing.md} * ${multiplier})`;
};

export const getColor = colorPath => {
  const keys = colorPath.split('.');
  let result = theme.colors;

  for (const key of keys) {
    result = result[key];
  }

  return result;
};

// Component-specific styles
export const componentStyles = {
  button: {
    base: {
      padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
      fontSize: theme.typography.fontSize.base,
      fontWeight: theme.typography.fontWeight.semibold,
      fontFamily: theme.typography.fontFamily.heading,
      borderRadius: theme.borderRadius.md,
      transition: theme.transitions.base,
      cursor: 'pointer',
      border: 'none',
      textAlign: 'center',
      display: 'inline-block',
      whiteSpace: 'nowrap',
    },
    variants: {
      primary: {
        backgroundColor: theme.colors.primary.main,
        color: theme.colors.primary.contrast,
        '&:hover': {
          backgroundColor: theme.colors.primary.dark,
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows.lg,
        },
      },
      secondary: {
        backgroundColor: theme.colors.secondary.main,
        color: theme.colors.secondary.contrast,
        '&:hover': {
          backgroundColor: theme.colors.secondary.dark,
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows.lg,
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.colors.primary.main}`,
        color: theme.colors.primary.main,
        '&:hover': {
          backgroundColor: theme.colors.primary.main,
          color: theme.colors.primary.contrast,
        },
      },
    },
    sizes: {
      sm: {
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.sm,
      },
      lg: {
        padding: `${theme.spacing.md} ${theme.spacing.xl}`,
        fontSize: theme.typography.fontSize.lg,
      },
    },
  },

  card: {
    base: {
      backgroundColor: theme.colors.background.primary,
      borderRadius: theme.borderRadius.lg,
      boxShadow: theme.shadows.md,
      padding: theme.spacing.lg,
      transition: theme.transitions.base,
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows.xl,
      },
    },
  },

  input: {
    base: {
      width: '100%',
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      fontSize: theme.typography.fontSize.base,
      fontFamily: theme.typography.fontFamily.body,
      border: `1px solid ${theme.colors.border.default}`,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.background.primary,
      transition: theme.transitions.fast,
      '&:focus': {
        outline: 'none',
        borderColor: theme.colors.border.focus,
        boxShadow: `0 0 0 3px ${theme.colors.primary.main}20`,
      },
    },
  },
};

export default theme;
