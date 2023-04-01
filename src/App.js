import React from 'react';
import {Sidebar} from './components/Sidebar';
import {Homepage} from './components/Homepage';
import { Projects } from './components/Projects';
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Contact} from './components/Contact';
import { Modal } from './components/Modal';
import { Chatbot } from './components/Chatbot';
import Context from './Context/Context'
import { Box, Button, Icon } from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';

import { EXAMPLES } from './utils/examples';
import { ANSWERS } from './utils/answers';
 

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = 'J8RW4gATO0DzsOi2cSzmVJRtZF5UFnhX9pF9ioY2';

const App = () => {
  const initialState = window.innerWidth < 768 ? false : true;
  const [showSidebar, setShowSidebar] = React.useState(initialState);
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('es');

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
        <Homepage />
        <Projects />
        <About/>
        <Skills/>
        <Contact/>
        <Chatbot API_KEY={API_KEY} ANSWERS={ANSWERS} EXAMPLES={EXAMPLES}/>
      </Box>
    </Context.Provider>
  );
};

export default App;