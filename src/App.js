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

const sections = [{
  href: 'home',
  name: 'Inicio'
},
{
  href: 'projects',
  name: 'Proyectos'
},
{
  href: 'about',
  name: 'About Us'
},
{
  href: 'skills',
  name: 'Skills'
},
{
  href: 'contact',
  name: 'Contacto'
}]


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
          <Sidebar sections={sections}/> :
          <Button 
            variant='icon' 
            onClick={()=> {toggleModal()}}  
            fontSize='40px' 
            position='fixed' 
            right='10px' 
            top='20px' 
            zIndex='200' 
            width='3rem'
            paddingInlineStart={0}
            paddingEnd={0}
          >
            {openModal ?
            <Icon as={IoMdClose}></Icon>
            :
            <Icon bgColor='rgba(0,0,0,0.3)' borderRadius='7px' w='3rem' as={GiHamburgerMenu}></Icon>
            }  
          </Button> 
        }
        {openModal && <Modal sections={sections} setOpenModal={setOpenModal}/>}
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
