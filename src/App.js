import React from 'react';
import {Sidebar} from './Sidebar';
import {Portada} from './Portada';
import { Proyectos } from './Proyectos';
import {About} from './About';
import {Skills} from './Skills';
import {Contact} from './Contact';
import { Box, Text, Link, HStack, VStack, Button, Flex } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <Sidebar/>
      <Box marginLeft='210px'>
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
