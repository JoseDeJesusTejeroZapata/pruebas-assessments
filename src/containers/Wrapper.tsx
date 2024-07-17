import styled from 'styled-components';

export interface IWrapperProps {
   children: React.ReactNode;
}

export default function Wrapper({ children }: IWrapperProps) {
   const isMobile = JSON.parse(localStorage.getItem('isMobile') || 'false');
   return (
      <>
         {/* <Header /> */}
         <Container isMobile={isMobile}>{children}</Container>
         {/* <FooterSignUp /> */}
      </>
   );
}

const Container = styled.div<{ isMobile?: boolean }>`
   padding-top: 99px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (max-width: 1199px) {
      height: 100%;
      padding-bottom: ${(props) => (props.isMobile ? '220px' : '0px')};
   }
`;
