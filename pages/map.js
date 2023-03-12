import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Link } from "next/link";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const map = () => {
  const router = useRouter();

  const {
    query: { destination, startTime, finalMethod },
  } = router;

  const props = {
    destination,
    startTime,
   finalMethod,
  };


  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: "AIzaSyDdU38J3ZgO2CW7AgMubfjHAJzXRcFU_WY",
  // });
   


  // if(!isLoaded) {
  //   return <p>Not loaded</p>
  // }

  const GoogleMapConfig = {
    key: "AIzaSyDdU38J3ZgO2CW7AgMubfjHAJzXRcFU_WY",
    libraries: 'places',
  };

  return (
    <Layout>
      <hr />
      <div style={{ fontSize: 20, fontFamily: "Itim", marginTop: 20 }}>
        <div style={{ fontSize: 30 }}>
          <div>To: {destination}</div>
          <br />
          <div>startTime: {startTime}</div>

          <br />

          <div style={{ fontSize: 20 }}>
            <p>
              Transportation mode selected: <i class={`${props.finalMethod} icon`}></i>
            </p>
            <p>Distance:</p>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default map;
