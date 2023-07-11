import React, { useEffect } from 'react';
import KakaoMap from '카카오맵_라이브러리_임포트_경로';
import { getAccidentZones } from 'API_요청_함수_경로';

const AccidentZonesMap = () => {
  useEffect(() => {
    const loadAccidentZones = async () => {
      try {
        const accidentZones = await getAccidentZones();
        
        // 받아온 데이터를 가공하고 마커를 추가하는 로직 구현
        for (const zone of accidentZones) {
          const latLng = new KakaoMap.LatLng(zone.latitude, zone.longitude);
          const marker = new KakaoMap.Marker({ position: latLng });
          marker.setMap(KakaoMap.getMap()); // 카카오 맵에 마커 추가
        }
      } catch (error) {
        console.error('Error loading accident zones:', error);
      }
    };

    loadAccidentZones();
  }, []);

  return (
    <div id="mapContainer" style={{ width: '100%', height: '500px' }}></div>
  );
};

export default AccidentZonesMap;
