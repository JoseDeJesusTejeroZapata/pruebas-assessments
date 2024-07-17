import { Box, styled } from "@mui/material";


export const Topbar = () => {
  return (
	<Container>
		Topbar
	</Container>
  )
}

const Container = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	minHeight: '64px',
	padding: '0 16px',

	position: 'sticky',
	top: 0,

}));
