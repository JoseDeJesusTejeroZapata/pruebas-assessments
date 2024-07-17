import { Box, keyframes, styled } from "@mui/material";


const animationSidebarAppear = keyframes`
	from {
		transform: translateX(calc(-216px + 68px));
  	}
  	to {
		transform: translateX(0);
  	}
`;

// const animationSidebarDisappear = keyframes`
// 	from {
// 		transform: translateX(calc(-216px + 68px));
//   	}
//   	to {
// 		transform: translateX(0);
//   	}
// `;


export const SidebarContainer = styled(Box, {
	shouldForwardProp: (prop) => !['isShortMenu', 'isHoverInShortMenu'].includes(prop as string)
})<{ isShortMenu: boolean, isHoverInShortMenu: boolean}>(({ theme, isShortMenu, isHoverInShortMenu }) => ({

	backgroundColor: theme.palette.bgPaper.main,
	position: 'relative',

	transition: 'all 0.3s ease-in-out',
	width: isShortMenu ? '68px' : '216px',


	[theme.breakpoints.down('md')]: {
		width: '0px',
	},

	'.sidebar-header': {
		justifyContent: isShortMenu ? 'center' : 'space-between',
		padding: isShortMenu ? '8px 8px' : '8px 22px',

		'.sidebar-logo-container': {
			opacity: isShortMenu ? 0 : 1,
			width: isShortMenu ? '0px' : '100%',
			// transform: isShortMenu ? 'translateX(-150%)' : 'translateX(0)',
			// position: isShortMenu ? 'absolute' : 'relative',
		},

		'.sidebar-toggle-button': {
			transition: 'transform 0.3s ease-in-out',
			transform: isShortMenu ? 'rotate(180deg)' : 'rotate(0deg)',
		}
	},



	...(isHoverInShortMenu ? {

		'> div': {
			// backgroundColor: 'tomato',
			transition: 'width 0.3s ease-in-out',
			animation: `${animationSidebarAppear} 0.3s ease-in-out`,
			backgroundColor: theme.palette.bgPaper.main,
			boxShadow: '2px 0px 18px 0px #4c4e6445',
			with: '216px',
			height: '100%',
			position: 'fixed',
			zIndex: 500,
			
		},
		'.sidebar-header': {
			justifyContent: 'space-between',
			padding: '8px 22px',

			'.sidebar-logo-container': {
				width: '100%',
			},
			'.sidebar-toggle-button': {
				transform: 'rotate(180deg)',
			}
		}
	} : null)

	/*: isShortMenu ? {
		'> div': {
			transition: 'width 0.3s ease-in-out',
			animation: `${animationSidebarAppear} 0.3s ease-in-out`,
			backgroundColor: theme.palette.bgPaper.main,
			boxShadow: '2px 0px 18px 0px #4c4e6445',
			with: '216px',
			height: '100%',
			position: 'fixed',
			zIndex: 500,
			
		},
	} */

}));

export const Content = styled(Box)(({ theme }) => ({
	// backgroundColor: 'tomato',

	display: 'flex',
	flexDirection: 'column',

	position: 'sticky',
	top: 0,

	transition: 'transform 0.3s ease-in-out',
	width: '100%',
	maxWidth: '216px',
	height: '100%',

	[theme.breakpoints.down('md')]: {
		transform: 'translateX(-100%)',
		position: 'absolute',
	}

}));

export const Header = styled(Box)(()  => ({
	display: 'flex',
	alignItems: 'center',
	height: '56px',
}));

export const LogoContainer = styled(Box)(() => ({
	transition: 'all 0.3s ease-in-out',
	overflow: 'hidden',
	width: '100%',
}));
