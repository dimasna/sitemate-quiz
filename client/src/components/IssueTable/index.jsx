import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteIssue } from '../../api';
import EditIssue from "../EditIssue";

export default function IssueTable({data, updateData}){

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.700");

  const handleDelete = async (id) => {
    try {
  await deleteIssue(id);
      updateData();
    } catch (error) {
      alert('Error deleting issue:', error);
    }
  };


  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      rounded="lg" 
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg }}
        shadow="lg"
        rounded="lg" 
      >

            <Flex rounded="lg" direction={{ base: "row", md: "column" }} bg={bg2} key={0}>
              <SimpleGrid
                spacingY={3}
                roundedTop="lg"
                columns={{ base: 1, md: 4 }}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg3}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>ID</span>
                <span>Title</span>
                <span>Description</span>
                <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
              </SimpleGrid>
              {data?.map((issue, tid) => {
                return (
              <SimpleGrid
              key={tid}
                spacingY={3}
                columns={{ base: 1, md: 4 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{issue.id}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {issue.title}
                </chakra.span>

                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {issue.desc}
                </chakra.span>

                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                
                   <EditIssue updateData={updateData} data={issue}/>
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                      onClick={() => handleDelete(issue.id)}
                    />
                  </ButtonGroup>
                </Flex>
              </SimpleGrid>
                )
              })}
            </Flex>
          
        
      </Stack>
    </Flex>
  );
};

