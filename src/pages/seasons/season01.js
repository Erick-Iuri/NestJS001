/* chakra content */
import {
    Button,
    Flex,
    Img,
    Text,
    Box
} from "@chakra-ui/react" /* */

/* Menu Q&A */
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react' /*  */

import React from "react"

export default function S01() {
    return (
        <>
            <Flex
                justify={"center"}
                direction={{ base: "column", lg: "row" }}
            >

                <Flex
                    w={{ base: "100%", lg: "40%" }}
                    pt="100px"
                    mr="4%"
                    direction={"column"}
                >
                    <Text
                        fontWeight={"bold"}
                        fontSize={"30px"}
                    >Transformando ideias em experiências digitais excepcionais.</Text>

                    <Text
                        fontSize={"20px"}>Que tal conversarmos sobre seu projeto?
                        mande uma mensagem. 😆</Text>
                </Flex>

                <Flex
                    w={{ base: "100%", lg: "40%" }}
                    pt="100px"
                    direction={"column"}
                    fontSize={"20px"}
                >
                    <Accordion allowToggle>
                        <AccordionItem border={"none"} >
                            <h2>
                                <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
                                    <Box as="span"
                                        flex='1'
                                        textAlign='left'
                                        fontSize={"20px"}
                                        fontWeight={"bold"}
                                    >
                                        Por que Design?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eum officia illum dicta in, cum maxime ipsa, sequi natus optio quod molestias.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion allowToggle>
                        <AccordionItem border={"none"}>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'black', color: 'white' }} fontWeight={"bold"}>
                                    <Box as="span" flex='1' textAlign='left' fontSize={"20px"}>
                                        Como começou a programar?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eum officia illum dicta in, cum maxime ipsa, sequi natus optio quod molestias.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion allowToggle>
                        <AccordionItem border={"none"}>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'black', color: 'white' }} fontWeight={"bold"}>
                                    <Box as="span" flex='1' textAlign='left' fontSize={"20px"}>
                                        Quais foram suas experiencias com o mercado?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eum officia illum dicta in, cum maxime ipsa, sequi natus optio quod molestias.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>


            </Flex>
        </>
    )
}