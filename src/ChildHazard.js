import React, { useEffect } from 'react';
import KakaoMap from './KakaoLocation';
const API_KEY = 'W1furKe1dYSm73R6JQMWXOoeY0Kue8NYtY6SEWEXtsV6qOhN8K8jIuRLbbnMr8iQ'
const WeatherApp = () => {
  useEffect(() => {
    const fetchAccidentZones = async () => {
      try {
        const response = await fetch(`https://taas.koroad.or.kr/api/selectChildDataSet.do?ServiceKey=${API_KEY}`);
        const data = await response.json();
        
        // 받아온 데이터를 가공하고 마커를 추가하는 로직 구현
        const accidentZones = data.result.data;
        for (const zone of accidentZones) {
          const latLng = new KakaoMap.LatLng(zone.latitude, zone.longitude);
          const marker = new KakaoMap.Marker({ position: latLng });
          marker.setMap(KakaoMap.getMap()); // 카카오 맵에 마커 추가
        }
      } catch (error) {
        console.error('Error fetching accident zone data:', error);
      }
    };

    fetchAccidentZones();
  }, []);

  return (
    <div id="mapContainer" style={{ width: '100%', height: '500px' }}></div>
  );
};

export default WeatherApp;
