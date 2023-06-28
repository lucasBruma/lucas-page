import React from 'react';
import { Text, HStack, Stack, VStack, Button, Flex, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";
import Context from "../../Context/Context";
import { htmlTitles, sections } from '../../resources/data';

const Sidebar = () => {
  const context = React.useContext(Context);

  const handleClickLanguage = (e) => {
    context.setLanguage(e.target.value);
  };

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="210px"
      height="100vh"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      borderRight='1px solid #ffffff'
    >
      <VStack 
        bg='#000000'
        alignItems='center'
        justifyContent='center'
        h='150px'
        w='100%'
        borderBottom='1px solid #ffffff'
        p='20px 10px'
      >
        <VStack alignItems='flex-start' spacing='0'>
          <Link 
            to='home'
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
          >
              <Text fontWeight='700' cursor='pointer'>Lucas Brumatti</Text>
          </Link>
          <Link 
            to='home'
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
          >
            <Text fontSize='14px' cursor='pointer'>{htmlTitles[context.language].intro}</Text> 
          </Link>
        </VStack>

        <HStack>
            <Button 
              variant='outline'
              onClick={handleClickLanguage}
              aria-label="English"
              lang="en"
              value="en"
            >EN</Button>
            <Button 
              variant='outline'
              onClick={handleClickLanguage}
              aria-label="Español"
              lang="es"
              value="es"
            >ES</Button>
        </HStack>
      </VStack>
      <VStack
        bg='red.veryDark'
        flexGrow='1'
        w='100%'
        justifyContent='space-around'
      >
        <VStack spacing={['1rem',null,null,null,null,'2rem']} alignItems='flex-start' w='107px'>
            {sections.map((section, index)=>{
                return <Link 
                        key={index} 
                        to={`${section.href}`} 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                    >
                      <Button 
                        variant='sidebar' 
                        paddingInlineStart={0} 
                        paddingInlineEnd={0}
                        fontWeight='200'           
                      >
                        {section[context.language].name}
                      </Button>
                    </Link>
                })}
        </VStack>
        <Stack direction={['row',null,null,null,null,'column']} spacing='1rem' alignItems={'center'}>
            <a href='https://github.com/lucasBruma' target='blank'>
              <Icon as={FaGithub} w={6} h={6} color='white'/>
            </a>
            <a href='https://www.linkedin.com/in/lucas-brumatti-50bb9a1b3/' target='blank'>
              <Icon as={FaLinkedin} w={6} h={6} color='white'/>
            </a>
            <a href='mailto:lucasbrumatti99@gmail.com' target='blank'>
              <Icon as={AiFillMail} w={6} h={6} color='white'/>
            </a>
        </Stack>
      </VStack>
    </Flex>
  );
};

export {Sidebar};
