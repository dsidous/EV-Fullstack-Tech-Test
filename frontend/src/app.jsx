import React, {useState, useEffect } from "react";
import useApi from "./components/hooks/useApi";

import ClientList from './components/molecules/ClientList';
import AddClient from './components/atoms/AddClient';

const App = () => {

  const apiUrl = "http://localhost:3300/clients";
  
  const [data, isQuerying, api] = useApi(apiUrl);

  useEffect(() => {
    api.list();
  }, []);

  const handleSubmit = (client) => {    
    api.add(client);
  };

  return (
    <div>
      <h1>EVPro Full-stack Tests</h1>
      <ClientList list={data} />
      <AddClient onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
