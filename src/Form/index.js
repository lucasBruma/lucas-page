import React from 'react';
import { 
    Button,
    FormControl,
    HStack,
    Input,
    VStack,
    useToast,
    Textarea
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Form() {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const toast = useToast();
    const form = React.useRef();

    const onSubmit = (e) =>{
          emailjs.sendForm('service_k46cms9', 'template_l71pywl', form.current, '-OucRu_7vgmbmb-2S')
            .then((result) => {
                toast({
                    title: 'Message sent.',
                    description: `Your message was sent successfully`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right'
                    })
            }, (error) => {
                console.log(error.text);
            });
    }

    const onClick = (errors)=>{
        if(errors.user_email){
            toast({
                title: 'The email was not sent.',
                description: "Check your email",
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }else if (errors.user_name || errors.message){
            toast({
                title: 'The email was not sent.',
                description: "Remember that every field is required",
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }
    }

    return ( 
        <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate style={{ width: "70%" }}>
            <FormControl 
                isInvalid={errors.email} 
                display='flex' 
                alignItems='center' 
                isRequired
                position='relative'
            >   
            <VStack width='100%' alignItems='flex-start'>
                <HStack w='100%'>
                    {/* name */}
                    <Input
                        id='user_name'
                        name="user_name"
                        type='text'
                        placeholder='Name'
                        borderRadius='10px' 
                        py='1.8rem' 
                        bg='white' 
                        color='blue.light' 
                        {...register('user_name', {
                            required: 'This is required',
                        })}
                    />
                    {/* email */}
                    <Input
                        id='user_email'
                        name="user_email"
                        type='email'
                        placeholder='Email'
                        borderRadius='10px' 
                        py='1.8rem' 
                        bg='white' 
                        color='blue.light' 
                        {...register('user_email', {
                            required: 'This is required',
                            pattern: { value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, message: 'This is not an email' }
                        })}
                    />
                </HStack>


                {/* Message */}
                <Textarea
                    id='message'
                    name='message'
                    placeholder='Message'
                    borderRadius='10px' 
                    py='1.8rem' 
                    bg='white' 
                    color='blue.light' 
                    overflowY='hidden'
                    minH='200px'
                    {...register('message', {
                        required: 'This is required',
                    })}
                />
                <Button 
                    type='submit' 
                    variant='solid' 
                    onClick={()=>{ 
                        onClick(errors)
                    }} 
                    marginLeft='1rem'
                >Send message!</Button>
            </VStack>
                  
            </FormControl> 
        </form>

    );
}

export { Form };