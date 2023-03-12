import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button, Card, Image,Message,Container} from "semantic-ui-react";
import Router from "next/router"

import { useRouter } from "next/router";
import { Link } from "next/link";
import helpers from "../helper";
const axios = require("axios");


const congralution = () => {
    const router = useRouter();
    const {
        query: { destination, startTime, finalMethod },
      } = router;
    
      const props = {
        destination,
        startTime,
        finalMethod,
      };

      const rdestination = props.destination;
      const rstartTime = props.startTime;
      const rfinalMethod = props.finalMethod;

      function sendPros(method) {
        const destination = rdestination;
        const startTime = rstartTime;
        const finalMethod = rfinalMethod 
        Router.push({
          pathname: "/map",
          query: {
            destination,
            startTime,
            finalMethod
          },
        });
      }

      
    return (
        <Layout>
                <Image src="congralation.png"/>
                <a onClick={async () => await sendPros()}>
                <Button>Go to the next page!</Button>
                </a>
        </Layout>
    )
    

}

export default congralution