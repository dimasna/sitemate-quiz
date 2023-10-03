import React, {useState} from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    IconButton
  } from '@chakra-ui/react'
  import { AiFillEdit } from "react-icons/ai";
  import { updateIssue } from '../../api';

export default function EditIssue({updateData, data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [issue, setIssue] = useState(data)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIssue((prevIssue) => ({
          ...prevIssue,
          [name]: value,
        }));
      };


    const handleUpdate = async () => {
        try {
          const newIssue = await updateIssue(issue.id, issue);
          console.log('Updated:', newIssue)
          updateData();
          onClose();
        } catch (error) {
          alert('Error updating issue:', error);
        }
      };
  
    return (
      <>
         <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                      onClick={onOpen}
                    />
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Issue #{data.id}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input name="title" value={issue.title} onChange={handleChange} placeholder='issue title' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input name="desc" value={issue.desc} onChange={handleChange} placeholder='issue description' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleUpdate}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }