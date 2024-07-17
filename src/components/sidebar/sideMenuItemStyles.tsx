import { Box, MenuItem, styled } from "@mui/material";

export const MenuItemStyled = styled(MenuItem, {
  shouldForwardProp: (prop) => !['isActive', 'isShortMenu', 'isHoverInShortMenu'].includes(prop as string),
})<{ isActive: boolean, isShortMenu: boolean, isHoverInShortMenu: boolean }>(({ theme, isActive, isShortMenu, isHoverInShortMenu }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: isShortMenu && !isHoverInShortMenu ? 'center' : 'flex-start',
  gap: '8px',
  backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
  color: isActive ? theme.palette.textWhite.main : theme.palette.textPrimary.main,
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: 1.5,
  letterSpacing: '0.15px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  margin: 0,
  borderRadius: '8px',
  padding: isShortMenu ? '8px 8px' : '8px 16px',
  height: '48px',

  '&:hover': {
    ...(isActive ? {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.textWhite.main,

    } : null)
  },

}));


export const IconChildrenContainer = styled(Box, {
	shouldForwardProp: (prop) => !['isOpenChildrenMenu'].includes(prop as string),
})<{ isOpenChildrenMenu: boolean }>
	(({ isOpenChildrenMenu }) => ({

	// backgroundColor: 'tomato',
	flexGrow: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',

		'> div': {
			// backgroundColor: 'tomato',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			transition: 'transform 0.3s ease-in-out',
			transform: isOpenChildrenMenu ? 'rotate(90deg)' : 'rotate(0deg)',
		}
	}));

export const ChildrenMenuContainer = styled(Box, {
	shouldForwardProp: (prop) => !['isOpenChildrenMenu', 'totalChildRoutes'].includes(prop as string),
})<{ isOpenChildrenMenu: boolean, totalChildRoutes: number }>
	(({ isOpenChildrenMenu, totalChildRoutes }) => ({
		// backgroundColor: 'tomato',
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		transition: 'height 0.3s ease-in-out',
		overflow: 'hidden',
		paddingLeft: '12px',
		height: isOpenChildrenMenu ? `${(totalChildRoutes * 56) + 24}px` : '0px',
}));
