import React from 'react';
import { Box, Text, Button, Flex, Heading, keyframes, VStack, HStack } from '@chakra-ui/react';
import Context from "../../Context/Context";
import { htmlTitles } from "../../resources/data.js";
import fondoPortada from '../../resources/images/fondoPortada.png'
import {AiOutlineArrowDown} from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";
import {HiOutlineDownload} from 'react-icons/hi'


const animationKeyframes = keyframes`
  0% { transform: translateY(0) rotate(90deg) }
  50% { transform: translateY(-15px) rotate(90deg)}
  100% { transform: translateY(0) rotate(90deg)}
`;

const animation = `${animationKeyframes} 1.5s ease-in-out infinite`;

const pdfUrl = 'https://www.lucasbrumatti.com/CV-en-Lucas_Brumatti-Frontend.pdf'

const Homepage = () => {
    const context = React.useContext(Context);

    return (
        <Box 
            bgImage={`${fondoPortada}`} 
            bgRepeat='repeat' 
            height='100vh' 
            width='100%' 
            id='home' 
            position='relative'
            overflow='hidden'
        >
            <Flex 
                height='100%' 
                justifyContent='center' 
                width='fit-content' 
                m='0 auto' 
                alignItems='flex-start' 
                direction='column'
                marginLeft={['2rem','2rem','auto']}
                pb={['3rem','0','0']}
            >
                <Text fontSize={['xl',null,'2xl',null,null, '4xl']}>{htmlTitles[context.language].presentation_text}</Text>
                <Heading variant='primary' mt='0' lineHeight='.9' fontSize={['6xl', null, 'auto',null, '7xl']}>
                    <Box as='span' color='aquamarine'>L</Box>ucas <Box as='span' color='aquamarine'>B</Box>rumatti
                </Heading>
                <Text fontSize={['xl',null,'2xl',null,null,'4xl']} w={['65%',null,'100%']} mt='.8rem'>
                    <Box as='span'>&lt;p&gt;</Box>
                        {htmlTitles[context.language].intro}
                    <Box as='span'>&lt;/p&gt;</Box>
                </Text>
                    
                    <HStack gap='.5rem' alignItems='flex-end'>
                        
                        <Link
                            to='contact'
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                        >
                            <Button variant='solid' mt='2rem'>
                                {htmlTitles[context.language].button__contact}
                            </Button>
                        </Link>
                        <Button variant='solid' mt='2rem'>
                            <a href={pdfUrl} download> 
                                <HStack alignItems='center' gap='2px'>
                                    <Text>CV</Text>
                                    <HiOutlineDownload/>  
                                </HStack>
                            </a> 
                        </Button>             
                    </HStack>

            </Flex>
            <VStack 
                position='absolute'
                bottom='1rem'
                spacing='3rem'
                left='-20px'
            >
                <Box animation={animation}>scroll down</Box>
                <AiOutlineArrowDown/>
            </VStack>
        </Box>
    );
};

export {Homepage};