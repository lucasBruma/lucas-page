import React from 'react';
import {Sidebar} from './Sidebar';
import {Portada} from './Portada';
import { Proyectos } from './Proyectos';
import {About} from './About';
import {Skills} from './Skills';
import {Contact} from './Contact';
import { Box, Text, Link, HStack, VStack, Button, Flex, Icon } from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';
import { Modal } from './Modal';

{/* <Button variant='icon' onClick={()=> {toggleModal()}} paddingInlineStart='0' paddingInlineEnd='0' minWidth='0'>
{openModal ?
<Image src={closeIcon} position='relative' zIndex='100'></Image>
:
<Image src={hamburgerIcon}></Image>
}  
</Button> */}


const App = () => {
  const initialState = window.innerWidth < 768 ? false : true;
  const [showSidebar, setShowSidebar] = React.useState(initialState);
  const [openModal, setOpenModal] = React.useState(false);

  const toggleModal = () =>{
    setOpenModal(!openModal)
  }

  React.useEffect(() => {
    function handleResize() {
    if (window.innerWidth < 768) {
        setShowSidebar(false);
    } else {
        setShowSidebar(true);
    }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <>

      
      <Box marginLeft={['0','0','210px']} position='relative'>
        {showSidebar ?
          <Sidebar/> :
          <Button variant='icon' onClick={()=> {toggleModal()}}  fontSize='40px' position='absolute' right='10px' top='30px' zIndex='200' >
            {openModal ?
            <Icon position='fixed' right='20px' top='30px' zIndex='200' as={IoMdClose}></Icon>
            :
            <Icon  as={GiHamburgerMenu}></Icon>
            }  
          </Button> 
        }
        {openModal && <Modal/>}
        <Portada />
        <Proyectos/>
        <About/>
        <Skills/>
        <Contact/>
      </Box>
      {/* El resto del contenido de tu aplicación */}
    </>
  );
};

export default App;
