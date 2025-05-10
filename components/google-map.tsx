"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const chicago = { lat: 41.85, lng: -87.65 }

    function createCenterControl(map: google.maps.Map) {
      const controlButton = document.createElement("button")
      controlButton.classList.add("buttonStyle")
      controlButton.textContent = "Center Map"
      controlButton.title = "Click to recenter the map"
      controlButton.type = "button"
      controlButton.addEventListener("click", () => {
        map.setCenter(chicago)
      })
      return controlButton
    }

    function initMap() {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 4,
          center: { lat: 49.496675, lng: -102.65625 },
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        })

        const georssLayer = new window.google.maps.KmlLayer({
          url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
          suppressInfoWindows: true,
        })
        georssLayer.setMap(map)

        const centerControlDiv = document.createElement("div")
        const centerControl = createCenterControl(map)
        centerControlDiv.appendChild(centerControl)
        map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)
      }
    }

    window.initMap = initMap

    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly&solution_channel=GMP_CCS_customcontrols_v2`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return <div id="map" ref={mapRef} />
}
