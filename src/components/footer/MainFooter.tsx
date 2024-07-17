import { Box, styled } from "@mui/material";


export const MainFooter = () => {
  return (
	<Container>Made with ❤️ by RocketCode</Container>
  )
}


const Container = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	padding: '8px 16px',
}));