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
  const [longitude,setLongtitude] = useState(-123.249999)
  const [latitude,setLatitude] = useState(49.2666656)
  

  const {
    query: { destination, startTime, finalMethod },
  } = router;

  const props = {
    destination,
    startTime,
   finalMethod,
  };


  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude:lngLat.lat,
        longitude: lngLat.lng
      }
    }
  }


  const drawRoute = (geoJson, map) => {
    if (map.getLayer('route')) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geoJson
      },
      paint: {
        'line-color': '#4a90e2',
        'line-width': 6
      }
    })
  }


  useEffect(()=> {
    const origin = {
      lng:longitude,
      lat:latitude,

    }
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

   let destinations = []


  const sortDestinations = (locations) => {
    const pointsForDestination = locations.map((destination)=> {
      return convertToPoints(destination)
    })

    const callParameters = {
      key: "kXRDpfhjbToMJKFJj3SJRbhCszqd7Ar9",
      destinations: pointsForDestination,
      origins: [convertToPoints(origin)]
     }

     return new Promise((resolve, reject) => {
      console.log(callParameters)
      ttapi.services
        .matrixRouting(callParameters)
        .then((matrixAPIResults) => {
          const results = matrixAPIResults.matrix[0]
          const resultsArray = results.map((result, index) => {
            return {
              location: locations[index],
              drivingtime: result.response.routeSummary.travelTimeInSeconds,
            }
          })
          resultsArray.sort((a, b) => {
            return a.drivingtime - b.drivingtime
          })
          const sortedLocations = resultsArray.map((result) => {
            return result.location
          })
          resolve(sortedLocations)
        })
      })
    }

    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin)

        ttapi.services
          .calculateRoute({
            key: "kXRDpfhjbToMJKFJj3SJRbhCszqd7Ar9",
            locations: sorted,
          })
          .then((routeData) => {
            const geoJson = routeData.toGeoJson()
            drawRoute(geoJson, map)
        })
      })
    }

  map.on('click',(e)=> {
    destinations.push(e.lngLat)
    recalculateRoutes()
  })
      return () => map.remove()
  },[longitude,latitude])

  return (
    <section   style={{
      backgroundImage:
      `url('/background.png')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
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
            <p>Distance: 10.1km</p>

          </div>
        </div>

        <div ref={mapElement} className = "map" style = {{height: 800}}></div>

      </div>
    </Layout>
    </section>
  );
};

export default map;
