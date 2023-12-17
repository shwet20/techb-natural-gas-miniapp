import React from 'react';
import axios from "axios";

const Apimethods = async(type,url) => {
    if (type==="get"){
        try {
            const response = await axios.get(url);
            return (response.data)
          } catch (error) {
            console.log(error);
          }
    } else if (type ==="post"){
        try {
            reqbody = {
                "customerNumber":"",
                "name": "",
                "address": "",
                "meterSerialNumber" :""
            }
            const response = await axios.get(url,reqbody);
            return (response.data)
        } catch (error) {
            console.log(error)
        }
    } else if (type ==="delete"){
        try {
            const response = await axios.get(`url ${id}`);
            return (response.data)
        } catch (error) {
            console.log(error)
        }
    }
};

export  {Apimethods};