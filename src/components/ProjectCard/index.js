import { AiOutlineArrowRight, AiFillInfoCircle } from 'react-icons/ai';
import React from 'react';
import { Box, Card, Text,Heading,
        Icon, CardFooter, CardHeader,
        Tag, Container, VStack, Button,
        Link, useDisclosure, Wrap, Flex} from '@chakra-ui/react';
import { ModalProject } from './ModalProject';

const ProjectCard = ({ title, image, techs, bg, demo, repo, description}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [rotateCard, setRotateCard] = React.useState(false);

    const handleClick = () => {
        setRotateCard(!rotateCard);
    }

    return (
        <Box position='relative' 
            height='100%'
            sx={{
                transformStyle:'preserve-3d',
                perspective: "2000px"
            }}
            cursor='pointer'
            transform={rotateCard && 'rotateY(-180deg)'}
            onClick={handleClick}
            transition='.7s'
            >
            {/* front */}
            <Card 
                position='absolute'
                w='100%'
                h='100%'
                bgColor='gray.veryDark'
                color='white'
                border='2px solid white'
                alignItems='center'
                textAlign='center'
                justifyContent='space-between'
                sx={{
                    backfaceVisibility:'hidden'
                }}
            > 
                <CardHeader>
                    <Heading variant='card'>{title}</Heading>
                </CardHeader>
                <Box w='6rem' h='6rem'>
                    <Icon as={image} w='100%' h='100%'></Icon> 
                </Box>
                <Flex flexWrap={'wrap'} gap='10px' maxH='100px' maxW={'200px'} py='15px' justifyContent='center'>
                    {techs.map((tech, index) => {
                        return <Tag key={index}>{tech}</Tag>;
                    })}
                </Flex>
            </Card>
            {/* back */}
            <Card 
                bgImage={bg}
                bgPosition='center'
                bgSize='cover'
                border='2px solid white'
                position='absolute'
                w='100%'
                h='100%'
                transform=' rotateY(-180deg)'
                sx={{
                    backfaceVisibility:'hidden'
                }}
            >
                <Container bgColor='rgba(0, 0, 0, 0.651)' h='100%'>
                    <VStack h='100%' justifyContent='center' pos='relative'>
                        <Link href={demo} target='_blank'>
                            <Button 
                                variant='solid' 
                                w='150px' 
                                justifyContent='space-around'   
                            >
                                <Text>Demo</Text>
                                <Icon as={AiOutlineArrowRight}/>
                            </Button>
                        </Link>
                        <Link href={repo} target='_blank'>
                            <Button 
                                variant='solid' 
                                w='150px' 
                                justifyContent='space-around'   
                            >
                                <Text>Repo</Text>
                                <Icon as={AiOutlineArrowRight}/>
                            </Button>
                        </Link>
                        <Button 
                            variant='solid' 
                            w='150px' 
                            justifyContent='space-around'
                            onClick={onOpen}   
                        >
                            <Text mt='2px'>Info</Text>
                            <Icon as={AiFillInfoCircle}/>
                        </Button>
                        <ModalProject isOpen={isOpen} onClose={onClose} title={title} description={description} demo={demo}/>
                    </VStack>
                </Container>
            </Card>
        </Box>

    );
};

export {ProjectCard};