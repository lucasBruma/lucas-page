import React from 'react';
import { Button,FormControl,Stack,Input,VStack,useToast,Textarea} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Context from "../Context/Context";
import { htmlAboutme } from '../resources/datos';

function Form() {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const toast = useToast();
    const form = React.useRef();
    const context = React.useContext(Context);

    const onSubmit = (e) =>{
          emailjs.sendForm('service_k46cms9', 'template_l71pywl', form.current, '-OucRu_7vgmbmb-2S')
            .then((result) => {
                toast({
                    title: htmlAboutme[context.language].form.modal_title,
                    description: htmlAboutme[context.language].form.modal_message,
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
                title: htmlAboutme[context.language].form.modal_error,
                description: htmlAboutme[context.language].form.modal_email,
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }else if (errors.user_name || errors.message){
            toast({
                title: htmlAboutme[context.language].form.modal_error,
                description: htmlAboutme[context.language].form.modal_required,
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
                <Stack direction={['column', null, 'row']} w='100%'>
                    {/* name */}
                    <Input
                        id='user_name'
                        name="user_name"
                        type='text'
                        placeholder={htmlAboutme[context.language].form.name}
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
                        placeholder={htmlAboutme[context.language].form.email}
                        borderRadius='10px' 
                        py='1.8rem' 
                        bg='white' 
                        color='blue.light' 
                        {...register('user_email', {
                            required: 'This is required',
                            pattern: { value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, message: 'This is not an email' }
                        })}
                    />
                </Stack>


                {/* Message */}
                <Textarea
                    id='message'
                    name='message'
                    placeholder={htmlAboutme[context.language].form.message}
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
                >{htmlAboutme[context.language].form.submit}
                </Button>
            </VStack>
                  
            </FormControl> 
        </form>

    );
}

export { Form };