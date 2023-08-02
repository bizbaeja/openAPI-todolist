import React from "react";
import Kakao from "./KakaoMap";
const lat = "37.5665";
const lon = "126.9780";

function Map() {

    const { container } = Kakao(lat, lon);

    return (
      <div
        ref={container}
        style={{ width: "1265px", height: "350px", border: "1px solid black" }}
      />
    );
}

export default Map;
