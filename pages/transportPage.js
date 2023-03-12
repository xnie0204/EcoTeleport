import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button, Input, i, Message } from "semantic-ui-react";
import { useRouter } from "next/router";
import { Link } from "next/link";
import Router from "next/router";
import helpers from "../helper";
const axios = require("axios");

const Transportation = () => {
  const router = useRouter();
  const {
    query: { destination, departure, method },
  } = router;

  const props = {
    destination,
    departure,
    method,
  };
  const [startTime, setStartTime] = useState("");
  const [finalMethod, setFinalMethod] = useState(props.method);
  const [direction, setDirection] = useState({});
  const [showCongra,setShowCongra] = useState(false);

  const clickFunction = async (value) => {
    setFinalMethod(value);
    sendPros(value,false);
  };

  const clickGralution = async (value) => {
    setFinalMethod(value);
    setShowCongra(true);
    sendCongralation(value,true)
  } 
  function sendCongralation(finalMethod) {
    Router.push({
      pathname: "/congralution",
      query: {
        destination,
        startTime,
        finalMethod,
      },
    });
  }

  function sendPros(finalMethod , isShowCongra) {
    Router.push({
      pathname: "/map",
      query: {
        destination,
        startTime,
        finalMethod,
        isShowCongra
      },
    });
  }


  useEffect(() => {
    const axiosGetDirection = async (url) => {
      const result = await helpers.axiosGet(url);
      await setDirection(result);
    };
    console.log(direction);
    axiosGetDirection(
      "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Disneyland&key=AIzaSyDdU38J3ZgO2CW7AgMubfjHAJzXRcFU_WY"
    );
  }, []);


  return (
   
      <section
        style={{
          backgroundImage:
          `url('/background.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
         <Layout>
        <div style={{ fontSize: 20, fontFamily: "Itim" }}>
          <div style={{ fontSize: 30 }}>
            <div>To: {destination}</div>
          </div>

          <div class="ui labeled input" style={{ marginTop: 30, height: 50 }}>
            <div class="ui label">start time:</div>
            <Input
              style={{ width: 400 }}
              type="text"
              placeholder="start time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          <div class="ui cards" style={{ marginTop: 30, marginLeft: 150 }}>
            <div class="card " style={{ marginRight: 100, padding: 100 }}>
              <a onClick={async () => await clickFunction(props.method)}>
                <div class="center aligned ">
                  <p>Transportation mode selected:</p>
                  <i class={`huge ${props.method} icon`}></i>
                  <div>{method}</div>
                </div>
              </a>
            </div>
            
            <div class="card " style={{ marginRight: 100, padding: 100 }}>
              <a onClick={async () => await clickGralution("subway")}>
                <div class="center aligned">
                  <p>Transportation mode Suggested:</p>
                  <i class={`huge subway icon`}></i>
                  <div>subway</div>
                </div>
              </a>
            </div>

            <div> <image src='congralation.png' /></div>
          </div>
         
            
          
          <br />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Message
              style={{ textAlign: "center" }}
              compact
              header="Carbon emission Saved!"
              content="When choosing suggested transportation mode!"
            />
          </div>
        </div>
        </Layout>
      </section>
   
  );
};

export default Transportation;
