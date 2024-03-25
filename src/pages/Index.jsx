import React from "react";
import { Box, VStack, Heading, Text, Image, Divider, Stack, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <VStack spacing={8} align="center" py={12} px={6}>
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1580129958560-c5e47d47a677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBXJTIwQnVzaCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTM0ODY1Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="George W Bush" />
        <Heading as="h1" size="2xl">
          George W. Bush
        </Heading>
        <Text fontSize="xl" textAlign="center">
          43rd President of the United States
        </Text>
        <Divider />
        <Text fontSize="lg" textAlign="center" maxW="3xl">
          George Walker Bush served as the 43rd president of the United States from 2001 to 2009. He previously served as the 46th governor of Texas from 1995 to 2000. Born into the Bush family, his father, George H. W. Bush, served as the 41st president of the United States from 1989 to 1993.
        </Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://www.bushcenter.org/" isExternal>
            <IconButton aria-label="Bush Center" icon={<FaFacebook />} size="lg" variant="ghost" />
          </Link>
          <Link href="https://twitter.com/TheBushCenter" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" />
          </Link>
          <Link href="https://www.instagram.com/thebushcenter/" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" />
          </Link>
        </Stack>
      </VStack>

      <VStack spacing={8} align="start" py={12} px={6}>
        <Heading as="h2" size="xl">
          Biography
        </Heading>
        <Text fontSize="lg">George W. Bush was born on July 6, 1946, in New Haven, Connecticut. He grew up in Midland and Houston, Texas, with his four siblings. He received a bachelor's degree in history from Yale University in 1968 and a master's degree in business administration from Harvard Business School in 1975.</Text>
        <Text fontSize="lg">Bush married Laura Welch in 1977 and unsuccessfully ran for the U.S. House of Representatives shortly thereafter. He later co-owned the Texas Rangers baseball team before defeating Ann Richards in the 1994 Texas gubernatorial election. As governor, Bush successfully sponsored legislation for tort reform, increased education funding, set higher standards for schools, and reformed the criminal justice system.</Text>
        <Text fontSize="lg">Bush was elected president in 2000 when he defeated Democratic incumbent Vice President Al Gore after a narrow and contested win that involved a Supreme Court decision to stop a recount in Florida. He became the fourth person to be elected president without a popular vote victory.</Text>
      </VStack>

      <VStack spacing={8} align="start" py={12} px={6}>
        <Heading as="h2" size="xl">
          Presidency
        </Heading>
        <Text fontSize="lg">Upon taking office, Bush pushed through a $1.3 trillion tax cut program and the No Child Left Behind Act, a major education reform bill. He also pushed for socially conservative efforts, such as the Partial-Birth Abortion Ban Act and faith-based welfare initiatives.</Text>
        <Text fontSize="lg">After the terrorist attacks on September 11, 2001, Bush declared a global "War on Terror" and ordered an invasion of Afghanistan to overthrow the Taliban, destroy the terrorist group al-Qaeda, and capture Osama bin Laden. He signed the Patriot Act in order to authorize surveillance of suspected terrorists.</Text>
        <Text fontSize="lg">In 2003, Bush ordered an invasion of Iraq, with the administration arguing that Iraq possessed weapons of mass destruction and that its government posed an immediate threat to the United States. No such weapons were ever found.</Text>
        <Text fontSize="lg">Bush was re-elected to a second term in 2004, defeating Democratic Senator John Kerry. During his second term, Bush reached multiple free trade agreements and successfully nominated John Roberts and Samuel Alito to the Supreme Court. He sought major changes to Social Security and immigration laws but both efforts failed.</Text>
      </VStack>

      <VStack spacing={8} align="start" py={12} px={6}>
        <Heading as="h2" size="xl">
          Post-Presidency
        </Heading>
        <Text fontSize="lg">Since leaving office, Bush has returned to Texas. He has written a memoir, Decision Points, and pursued painting. He has largely stayed out of politics, though he and his father publicly condemned the January 6, 2021 storming of the U.S. Capitol.</Text>
        <Text fontSize="lg">Bush has been involved in various humanitarian activities. He has worked with the Clinton Foundation to provide relief after the 2010 Haiti earthquake, and he has supported the fight against AIDS, especially in Africa, through the President's Emergency Plan for AIDS Relief (PEPFAR) program.</Text>
      </VStack>
    </Box>
  );
};

export default Index;
