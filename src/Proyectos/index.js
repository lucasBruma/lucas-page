import React from 'react';
import { Box, Text, Link, HStack, VStack, Button, Flex, Container, Heading, Grid, GridItem } from '@chakra-ui/react';
// import { useContext } from "react";
// import Context from "../Context/Context";
// import { htmlTitles } from "./datos_proyectos";

const Proyectos = () => {
    // const context = useContext(Context);
    return (
        <VStack pt='3rem' bg='red.veryDark' spacing='4rem'>
            <Heading variant='section'>Proyectos</Heading>
            <Grid templateColumns='repeat(3, 1fr)' gap={4} width='80%' height='500px'>
                {/* <GridItem bg='blue'>chau</GridItem> */}
                <Box bg='blue'>hola</Box>
                <Box bg='red'>hola</Box>
                <Box bg='yellow'>hola</Box>
                <Box bg='gray'>hola</Box>
                <Box bg='green'>hoa</Box>
                <Box bg='brown'>asdf</Box>
            </Grid>
        </VStack>
    );
};

export {Proyectos};