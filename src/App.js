import React from 'react';
import {Sidebar} from './Sidebar';
import {Portada} from './Portada';
import { Proyectos } from './Proyectos';
import {About} from './About';
import {Skills} from './Skills';
import {Contact} from './Contact';
import { Box, Button, Icon } from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';
import { Modal } from './Modal';
import Context from './Context/Context'



const App = () => {
  const initialState = window.innerWidth < 768 ? false : true;
  const [showSidebar, setShowSidebar] = React.useState(initialState);
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('en');

  const context = {
    language: language,
    setLanguage: setLanguage,
  }

  document.documentElement.lang = context.language;

  const toggleModal = () =>{
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    function handleResize() {
    if (window.innerWidth < 768) {
        setShowSidebar(false);
    } else {
        setShowSidebar(true);
        setIsOpen(false)
    }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <Context.Provider value={context}>   
      <Box marginLeft={['0','0','210px']} position='relative'>
        {showSidebar ?
          <Sidebar/> :
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
            {isOpen ?
            <Icon as={IoMdClose}></Icon>
            :
            <Icon bgColor='rgba(0,0,0,0.3)' borderRadius='7px' w='3rem' as={GiHamburgerMenu}></Icon>
            }  
          </Button> 
        }
        {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen}/>}
        <Portada />
        <Proyectos/>
        <About/>
        <Skills/>
        <Contact/>
      </Box>
      {/* El resto del contenido de tu aplicación */}
    </Context.Provider>
  );
};

export default App;
