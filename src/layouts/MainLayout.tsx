import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexGrow: '1' }}>
        {/* < Sidebar /> */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
          {/* <Topbar /> */}
          <MainContent>
            <Outlet />
            {/* <Box sx={{height:'120vh'}}></Box>
						<span>scroll</span> */}
          </MainContent>
          {/* <MainFooter /> */}
        </Box>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: theme.palette.bgBody.main,
}));

const MainContent = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  padding: '20px',
}));
