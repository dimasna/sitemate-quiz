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
    Input
  } from '@chakra-ui/react'
  import { createIssue } from '../../api';

export default function InputIssue() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initIssue = {
        title: '',
        desc:''
    };
    const [issue, setIssue] = useState(initIssue)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIssue((prevIssue) => ({
          ...prevIssue,
          [name]: value,
        }));
      };


    const handleCreate = async () => {
        try {
          const newIssue = await createIssue(issue);
          console.log('Created:', newIssue);
          setIssue(initIssue);
          onClose();
        } catch (error) {
          alert('Error creating issue:', error);
        }
      };
  
    return (
      <>
        <Button onClick={onOpen}>+ Add Issue</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new issue</ModalHeader>
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
              <Button colorScheme='blue' mr={3} onClick={handleCreate}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }