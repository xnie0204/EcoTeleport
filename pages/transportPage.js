import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button, Input, i, Message } from "semantic-ui-react";
import { useRouter } from "next/router";
import { Link } from "next/link";
import Router from "next/router";

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

  const clickFunction = async (value) => {
    setFinalMethod(value);
    sendPros(value);
  };

  function sendPros(finalMethod) {
    Router.push({
      pathname: "/map",
      query: {
        destination,
        startTime,
        finalMethod,
      },
    });
  }

  return (
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
            <a onClick={async () => await clickFunction(props.method)}>
              <div class="center aligned">
                <p>Transportation mode Suggested:</p>
                <i class={`huge ${method} icon`}></i>
                <div>{method}</div>
              </div>
            </a>
          </div>
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
  );
};

export default Transportation;
