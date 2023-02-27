import React from "react";
import {
    Box,
    Flex,
    Text,
    useDisclosure,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";

import { HiMenu, HiSearch, HiFilter, } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("left");
    const dataUsername = useSelector(
        (state) => state.authReducer.data.username
    );
    return (
        <Flex bgColor={"#222831"} mt={"4"} ml={"4"}>
            <Box>
                <Button
                    rounded={"md"}
                    h={"10"}
                    bgColor="#00ADB5"
                    color="#EEEEEE"
                    _hover={""}
                    p={"2.5"}
                    variant={"link"}
                    justifyItems={"self-start"}
                    onClick={onOpen}
                    mr={"16"}
                >
                    <HiMenu color="#EEEEEE" />
                </Button>
            </Box>
            <Box>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder={"Search for a product..."}
                        color={"#EEEEEE"}
                        bgColor={"#393E46"}
                        variant={"link"}
                        justifyItems={"self-end"}
                        h={"10"}
                        w={"lg"}
                    />
                    <InputRightElement>
                        <Button
                            display={"flex"}
                            alignSelf={"center"}
                            size={"md"}
                            bgColor={"transparent"}
                            variant={"link"}
                            py={"2.5"}
                        >
                            <HiSearch color="#00ADB5" />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Button
                rounded={"md"}
                h={"10"}
                bgColor="#00ADB5"
                color="#EEEEEE"
                _hover={""}
                p={"2.5"}
                variant={"link"}
                // onClick={}
                ml={"4"}
            >
                <HiFilter color="#EEEEEE" />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader
                        borderBottomWidth="1px"
                        fontWeight={"bold"}
                        fontSize={"larger"}
                    >
                        Welcome, {dataUsername}
                    </DrawerHeader>
                    <DrawerBody>
                        <Box display={"block"}>
                            <Link to={"/landing"}>
                                <Text my={"4"}>
                                    <Button
                                        bgColor={"#00adb5"}
                                        _hover="none"
                                        w={"full"}
                                        color={"#222831"}
                                    >
                                        Home
                                    </Button>
                                </Text>
                            </Link>
                            <Link to={"/products"}>
                                <Text my={"4"}>
                                    <Button
                                        bgColor={"#00adb5"}
                                        _hover="none"
                                        w={"full"}
                                        color={"#222831"}
                                    >
                                        Manage Products
                                    </Button>
                                </Text>
                            </Link>
                            <Link to={"/accounts"}>
                                <Text my={"4"}>
                                    <Button
                                        bgColor={"#00adb5"}
                                        _hover="none"
                                        w={"full"}
                                        color={"#222831"}
                                    >
                                        Manage Accounts
                                    </Button>
                                </Text>
                            </Link>
                            <Link to={"/products"}>
                                <Text my={"4"}>
                                    <Button
                                        bgColor={"#00adb5"}
                                        _hover="none"
                                        w={"full"}
                                        color={"#222831"}
                                    >
                                        Statistics
                                    </Button>
                                </Text>
                            </Link>
                            <Link to={"/"}>
                                <Text my={"4"}>
                                    <Button
                                        bgColor={"#00adb5"}
                                        _hover="none"
                                        w={"full"}
                                        color={"#222831"}
                                    >
                                        Logout
                                    </Button>
                                </Text>
                            </Link>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Navbar;
