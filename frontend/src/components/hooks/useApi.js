import React, { useState, useRef, useEffect } from "react";

export default function useApi(baseUrl) {  

  const [data, setData] = useState([]);
  const [isQuerying, setIsQuerying] = useState(true);

  const list = async () => {
    setIsQuerying(true);
    const res = await fetch(baseUrl);
    const resData = await res.json();
    setData([...resData]);
    setIsQuerying(false);
  };

  const add = async client => {
    setIsQuerying(true);
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(client)
    });
    const resData = await res.json();
    setData([...data, resData ]);
    setIsQuerying(false);
  };

  const api = {
    list,
    add,
  };

  return [data, isQuerying, api];
}