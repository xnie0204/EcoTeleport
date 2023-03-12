import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button, Input, i } from "semantic-ui-react";
import Link from "next/link";
import Router from "next/router"

const index = () => {
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [method, setMethod] = useState("");

  function sendPros(method) {
    Router.push({
      pathname: "/transportPage",
      query: {
        destination,
        departure,
        method,
      },
    });
  }

  const clickFunction = async (value) =>{
   setMethod(value)
    sendPros(value);
   }
 
    
  
  return (
    <Layout>
      <div style={{ fontFamily: "Itim", fontSize: 20 }}>
        <div class="ui labeled input" style={{ marginTop: 10, height: 50 }}>
          <div class="ui label">To:</div>
          <Input
            style={{ width: 400, marginRight: 100 }}
            type="text"
            placeholder="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <div class="ui label">From:</div>
          <Input
            style={{ width: 400 }}
            type="text"
            placeholder="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 30 }}>Transportation mode:</p>
          <div class="ui cards" style={{ size: 20 }}>
           
              <div class="card" style={{ padding: 100, marginRight: 100 }}>
              <a onClick={async () =>  await clickFunction("car")}>
                <div class="center aligned ">
                  <i class="huge car icon"></i>
                  <div class="center aligned header">Car</div>
                </div>
                </a>
              </div>
            
           
            
            <div class="card" style={{ padding: 100, marginRight: 100 }}>
            <a onClick={async () =>  await clickFunction("bus")}>
              <div class="center aligned ">
                <i class="huge bus icon"></i>
                <div class="center aligned header">Bus</div>
              </div>
              </a>
            </div>
            
           
           
            <div class="card" style={{ padding: 100 }}>
            <a onClick={async () =>  await clickFunction("plane")}>
              <div class="center aligned ">
                <i class="huge plane icon"></i>
                <div class="center aligned header">Plane</div>
              </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
  }

export default index;
