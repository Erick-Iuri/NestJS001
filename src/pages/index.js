import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import React from "react";

/* this is the Navbar */
import Navbar from "./seasons/navbar";

/* this is the S01 import */
import S01 from "./seasons/season01";

export default function Index() {
  return (
   <>
      <Flex>

      <Flex direction={"column"}>
        <Navbar />
      </Flex>

      <Flex w="100%" direction={"column"}>
        <S01 />
      </Flex>

    </Flex>
   </>
  );
}
