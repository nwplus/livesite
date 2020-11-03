import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import MobileMenuBar from './MobileMenuBar';
import { mediaQueries } from './Common';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Content = styled.div`
  padding: 24px 60px;
  box-sizing: border-box;
  width: 100%;
`;



const Page = ({ children }) => {
  const SidebarContainer = styled.div`
    min-height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    transition: opacity 1s ease-out;
    ${[mediaQueries[0]]} {
      ${props => props.showMobileSidebar ? 'visibility: visible' : 'visibility: hidden; display: none'};
      
    }
  `;


  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  return (
    <Container>
      <SidebarContainer showMobileSidebar={showMobileSidebar}>
        <Sidebar />
      </SidebarContainer>
      <LeftColumn>
        <MobileMenuBar showMobileSidebar={showMobileSidebar} setShowMobileSidebar={setShowMobileSidebar} />
        <Content>{children}</Content>
      </LeftColumn>
    </Container>
  );
}

export default Page; 