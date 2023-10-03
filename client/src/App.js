import { useEffect, useState } from 'react';
import { readIssueAll } from './api';
import {
  Flex
} from "@chakra-ui/react";
import './App.css';
import InputIssue from './components/InputIssue';
import IssueTable from './components/IssueTable';

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    const respData = await readIssueAll();
    setData(respData);
  }

  useEffect(()=>{
      getData();
  },[]);


  return (
    <div className="App">
      <Flex justify={'end'} mb={2}>
      <InputIssue updateData={getData}/>
      </Flex>
    {data && <IssueTable data={data} updateData={getData} />}
    </div>
  );
}

export default App;
