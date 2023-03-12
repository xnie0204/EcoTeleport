import React, { useEffect, useState,useRef } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Link } from "next/link";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import * as tt from '@tomtom-international/web-sdk-maps'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import * as ttapi from '@tomtom-international/web-sdk-services'


const map = () => {
  const router = useRouter();
  const mapElement = useRef()
  const [map,setMap] = useState({});
  const [longitude,setLongtitude] = useState(-0.112869)
  const [latitude,setLatitude] = useState( 51.504)


  useEffect(()=> {
    let map = tt.map({
      key: "kXRDpfhjbToMJKFJj3SJRbhCszqd7Ar9",
      container: mapElement.current,
      center: [longitude,latitude],
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      zoom: 14
    })

    setMap(map)
  },[])


  const {
    query: { destination, startTime, finalMethod },
  } = router;

  const props = {
    destination,
    startTime,
   finalMethod,
  };

   
  const element = document.createElement('div')
  element.className = 'marker'
  element.style= {
    backgroundImage: `url('https://i.imgur.com/oz3r3Wq.png')`,
    backgroundSize: "cover",
    width: "22px",
    height: "22px",
    backgroundColor :"yellow"
  }
   const addMarker = () => {
    const marker = new tt.Marker({
      draggable:true,
      element:element
    })
    .setLngLat([longitude,latitude])
    //.addTo(map.current)

    marker.on('dragend',()=> {
     const lngLat =  marker.getLngLat();
     setLongtitude(lngLat.lng);
     setLatitude(lngLat.lat)
    })
   }
   addMarker()

   const callParameters = {
    key = "kXRDpfhjbToMJKFJj3SJRbhCszqd7Ar9",
    destination:
    origin:
   }

   return new Promise((resolve,reject)=> {
    ttapi.services.matrixRouting(callParameters)

   })

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

        <div ref={mapElement} className = "map" style = {{height: 800}}></div>

      </div>
    </Layout>
  );
};

export default map;
