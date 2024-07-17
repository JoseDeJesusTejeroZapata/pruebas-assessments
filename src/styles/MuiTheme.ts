import { createTheme } from "@mui/material";


export const theme = createTheme({
	palette: {
		primary: {
			main: '#2535A8'
		},
		secondary: {
			main: '#FF0266'
		},

		// Backgrounds
		bgBody: {
			main: '#F7F7F9',
		},
		bgPaper: {
			main: '#FFFFFF',
		},

		// Texts
		textPrimary: {
			main: '#4D5062',
		},
		textWhite: {
			main: '#FFFFFF',
		},

		// ERROR
		bgError: {
			main: '#E04440',
		},
		textError: {
			main: '#FFEAE9',
		},

		// WARNING
		bgWarning: {
			main: '#EF9713',
		},
		textWarning: {
			main: '#FFF6E9',
		},

		// INFO
		bgInfo: {
			main: '#174BC1',
		},
		textInfo: {
			main: '#E6EDFD',
		},

		// SUCCESS
		bgSuccess: {
			main: '#64C623',
		},
		textSuccess: {
			main: '#EEFBE5',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '8px',
					borderRadius: 8,
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '26px',
					letterSpacing: '0.46px',
					boxShadow: 'box-shadow: 0px 4px 8px -4px #4C4E646B',
					padding: '7px 16px',
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiInputBase-root': {
						borderRadius: 8,
						// backgroundColor: 'transparent',
						// boxShadow: 'none',
						// color: 'white',
						// paddingLeft: 10,
						// paddingTop: 3,
						// paddingBottom: 3,
						// outline: 'none',
						// fontFamily: 'Poppins',
						fontSize: 16,
						lineHeight: '24px',
						letter: '0.15px',
						'&:-webkit-autofill': {
							// boxShadow: '0 0 0 60px #0d1828 inset !important',
							// WebkitTextFillColor: 'white !important',
							// fontSize: 16,
							// // fontFamily: 'Poppins',
							// border: 'none',
							// marginBottom: 10
						}
					}
				}
			}
		}
	}
});


declare module "@mui/material/styles" {
	interface Palette {

	// Texts
	textPrimary: Palette['primary'];
	textWhite: Palette['primary'];
	// Backgrounds
	bgBody: Palette['primary'];
	bgPaper: Palette['primary'];
	
	bgError?: Palette['primary'];
	textError?: Palette['primary'];
	bgWarning?: Palette['primary'];
	textWarning?: Palette['primary'];
	bgInfo?: Palette['primary'];
	textInfo?: Palette['primary'];
	bgSuccess?: Palette['primary'];
	textSuccess?: Palette['primary'];
  }
	interface PaletteOptions {
	
	// Texts
	textPrimary: PaletteOptions['primary'];
	textWhite: PaletteOptions['primary'];
		
	// Backgrounds
	bgBody: PaletteOptions['primary'];
	bgPaper: PaletteOptions['primary'];
	bgError?: PaletteOptions['primary'];
	textError?: PaletteOptions['primary'];
	bgWarning?: PaletteOptions['primary'];
	textWarning?: PaletteOptions['primary'];
	bgInfo?: PaletteOptions['primary'];
	textInfo?: PaletteOptions['primary'];
	bgSuccess?: PaletteOptions['primary'];
	textSuccess?: PaletteOptions['primary'];
  }
}