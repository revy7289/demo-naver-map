import { useEffect, useRef } from "react";
import { appendNaverScript } from "../utils/appendNaverScript";

export function NaverMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    appendNaverScript().then(() => {
      if (!window.naver || !mapRef.current) return;

      let map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng("36.327690", "127.427313"),
        zoom: 20,
      });

      console.log(map);
    });
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "400px" }} ref={mapRef}></div>
  );
}
