import React from 'react';  
import styled from 'styled-components';  

const HeaderContainer = styled.header`  
  max-width: 2000px; /* عرض هدر دو برابر */  
  width: 100%; /* عرض کامل */  
  margin: 0 auto; /* قرار دادن در مرکز */  
  background-color: #007bff; /* رنگ آبی */  
  color: white;  
  padding: 24px; /* فضای داخلی هدر */  
  text-align: center;  
  font-size: 4.5rem; /* اندازه فونت */  
  position: fixed; /* هدر در بالای صفحه ثابت */  
  top: 0; /* قرار دادن هدر در بالاترین قسمت */  
  left: 0; /* قرار دادن در سمت چپ */  
  z-index: 1000; /* بالاتر از سایر محتوا */  
`;   

const Header = () => {  
  return (  
    <HeaderContainer>  
      To-Do List App  
    </HeaderContainer>  
  );  
};  

export default Header;