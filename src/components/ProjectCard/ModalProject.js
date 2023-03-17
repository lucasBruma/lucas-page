import React from 'react';
import { Text, Button,
        Link} from '@chakra-ui/react';
import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton} from '@chakra-ui/react';
import { htmlTitles } from '../../resources/data';
import Context from "../../Context/Context";

const ModalProject = ({ isOpen, onClose, title, description, demo}) => {
    const context = React.useContext(Context);

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent bgColor='red.veryDark'>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>{description}</Text>
            </ModalBody>

            <ModalFooter>
                <Button mr={3} onClick={onClose}>
                {htmlTitles[context.language].button__close}
                </Button>
                <Link href={demo} target='_blank'>
                    <Button
                        variant='outline' 
                        _hover={{
                            bg:'gray.veryDark',
                            color:'red.light'
                        }}  
                    >
                        <Text>Demo</Text>
                    </Button>
                </Link>
            </ModalFooter>
        </ModalContent>
    </Modal> 

    )
};

export {ModalProject};