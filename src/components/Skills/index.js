import React from 'react';
import { Box, Text,Icon, VStack, Flex, Heading, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Context from "../../Context/Context";
import { htmlTitles, skills } from '../../resources/data'

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.2) rotate(-5deg); border-radius: 20%; }
  50% { transform: scale(1.2) rotate(5deg); border-radius: 50%; }
  75% { transform: scale(1.2) rotate(-5deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 1.5s ease-in-out infinite`;

const Skills = () => {
    const context = React.useContext(Context);

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
    <VStack py='3rem' bg='red.veryDark' spacing='4rem' id='skills'>
        <Heading variant='section' data-aos='flip-down'>{htmlTitles[context.language].title_skills}</Heading>
        <Flex flexWrap='wrap' gap='2rem' maxWidth={['85%',null,'55%']} justifyContent='center'>
            {skills.map((skill, index)=>{
                return <VStack 
                    key={index}
                    _hover={{
                        color:'aquamarine'
                    }}
                    transition='0.5s linear'
                >
                    <Box 
                        as={motion.div}
                        _hover={{
                            color: 'aquamarine',
                            animation:animation,
                            filter: 'drop-shadow(0 0 0.75rem crimson)'
                        }}
                        transition='0.5s linear'
                    >
                        <Icon 
                            w='4rem' 
                            h='4rem' 
                            as={skill.logo}
                        ></Icon>
                    </Box>
                    <Text fontWeight='700'>{skill.nombre}</Text>
                </VStack>
            })}
        </Flex>
    </VStack>
    );
};

export {Skills};