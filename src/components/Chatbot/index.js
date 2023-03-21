import {React, useEffect, useState, useRef, useContext, createElement} from 'react';
import {VStack, Heading,HStack, Flex, Button, Input, Box } from '@chakra-ui/react';
import Context from "../../Context/Context";
import 'aos/dist/aos.css';
import { htmlTitles } from '../../resources/data';
import { IoMdSend } from 'react-icons/io';
import { createPortal } from 'react-dom';
import {AiFillCloseCircle,AiOutlineQuestion} from 'react-icons/ai';


const Chatbot = ({API_KEY, ANSWERS, EXAMPLES}) => {
    const [question, setQuestion] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const container = useRef(null);
    const context = useContext(Context);
    const [isCollapsed, toggleCollapsed] = useState(true);

    const [messages, setMessages] = useState([{
        id: '1',
        type: 'bot', 
        text: ANSWERS['intro'][context.language].message
    }
])

    async function handleSubmit(e){
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true)
        setMessages((messages)=> messages.concat({id:Date.now(), type: "user", text: question}))
        setQuestion("")

        const {classifications} = await fetch('https://api.cohere.ai/v1/classify',{
            method: 'POST',
            headers:{
                Authorization:`Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                model: 'large',
                inputs: [question],
                examples: EXAMPLES
            })
        }).then(res => res.json())

        setIsLoading(false)

        console.log(classifications)

        const answer = !ANSWERS[classifications[0].prediction] 
        ? ANSWERS['default'][context.language].message 
        : ANSWERS[classifications[0].prediction][context.language].message;

        setMessages((messages)=> messages.concat({id:Date.now(), type: "bot", text: answer}))
        setQuestion("")
    };

    useEffect(()=>{
        container.current?.scrollTo(0, container.current.scrollHeight)
    }, [messages,isCollapsed])


    return createPortal(
        <Box pos='fixed' bottom={0} right={0}>
            {isCollapsed ? 
            (    
            <Button
                onClick={()=>{toggleCollapsed(false)}}
                h='3rem'
                borderRadius='50%'
                pos='absolute'
                bottom='1rem' 
                right='1rem'
                variant='solid'
            >
                <AiOutlineQuestion/>
            </Button>
            )
        :
           (
        <VStack pos='relative' bottom={0} right={0}>
            <Button
                onClick={()=>toggleCollapsed(true)}
                variant='icon'
                pos='absolute'
                left='-34px'
                top='-10px'
                fontSize='4xl'
            >
                <AiFillCloseCircle/>
            </Button>
            <VStack 
                border='1px solid gray' 
                w={['330px',null,'600px']}
                h={['500px',null,'400px']}
                pt='1rem'
                pb='1rem'
                px='1rem'
                spacing={4}
                bg='red.veryDark'
                justifyContent='space-between'
                borderRadius='2xl'
                fontSize='sm'
            >
                <VStack 
                    height='400px'
                    overflowY='auto'
                    w='100%'
                    ref={container}
                >
                    {messages.map((message)=>(
                    <Flex 
                        key={message.id}
                        bg={message.type === 'bot' ? '#232020' : '#181616'}
                        maxW='80%'
                        p={['1rem', '2rem']}
                        alignSelf={message.type === 'bot' ? 'flex-start' : 'flex-end'}
                        borderRadius='3xl'
                        borderBottomLeftRadius={message.type === 'bot' && 'none'}
                        borderBottomRightRadius={message.type === 'user' && 'none'}                        
                    >
                        {message.text}
                    </Flex>
                ))}  
                    {isLoading && 
                        <Flex
                            bg='#232020'
                            maxW='80%'
                            p={['1rem', '2rem']}
                            alignSelf='flex-start'
                            borderRadius='3xl'
                            borderBottomLeftRadius='none'
                        >
                            {htmlTitles[context.language].loading__chatbot}
                        </Flex>
                    }
                </VStack>
      
                <form onSubmit={handleSubmit} noValidate style={{ width: "100%" }}>
                    <HStack spacing={3} flexGrow='1'>
                        <Input
                            value={question}
                            onChange={(event)=> setQuestion(event.target.value)}
                            id='question'
                            name='question'
                            placeholder={htmlTitles[context.language].input__chatbot}
                            borderRadius='10px' 
                            _focusVisible={{
                                borderColor:'aquamarine',
                                boxShadow:'0 0 0 1px aquamarine'
                            }}
                        />
                        <Button
                            type='submit' 
                            p='0.7rem 0.4rem'
                            bgColor={isLoading ? 'blue.light' : 'auto'}
                            disabled={isLoading}
                        ><IoMdSend/></Button>
                    </HStack>
            </form>
            </VStack>

        </VStack>
           ) }
        </Box>
        , document.getElementById('chat'),
    );
};

export {Chatbot};