import React, { useState ,useEffect, useRef } from "react";
import classes from "./Map.module.css";

const { kakao } = window;

const KakaoMap = ({ latitude, longitude }) => {
  const container = useRef(null);
  const [places, setPlaces] = useState([]);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    kakao.maps.load(() => {
      const center = new kakao.maps.LatLng(latitude, longitude);
      const options = {
        center,
        level: 4,
      };
      const map = new kakao.maps.Map(container.current, options);

      const markerPosition = new kakao.maps.LatLng(latitude, longitude);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        markers: [marker],
        gridSize: 35,
        averageCenter: true,
        minLevel: 6,
        disableClickZoom: true,
        styles: [
          {
            width: "53px",
            height: "52px",
            background: "url(cluster.png) no-repeat",
            color: "#fff",
            textAlign: "center",
            lineHeight: "54px",
          },
        ],
      });

      const ps = new kakao.maps.services.Places();

      const searchPlaces = (keyword) => {
        ps.keywordSearch(keyword, placesSearchCB);
      };

      const placesSearchCB = (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          setPlaces(data);
          setPagination(pagination);
          displayPlaces(data);
          displayPagination(pagination);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert("검색 결과가 존재하지 않습니다.");
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert("검색 결과 중 오류가 발생했습니다.");
        }
      };

      const displayPlaces = (places) => {
        const listEl = document.getElementById("placesList");
        while (listEl.hasChildNodes()) {
          listEl.removeChild(listEl.lastChild);
        }

        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < places.length; i++) {
          const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
          bounds.extend(placePosition);

          const marker = addMarker(placePosition, i);
          const itemEl = getListItem(i, places[i]);

          listEl.appendChild(itemEl);
        }

        map.setBounds(bounds);
      };

      const addMarker = (position, idx) => {
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
        const imageSize = new kakao.maps.Size(36, 37);
        const imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691),
          spriteOrigin: new kakao.maps.Point(0, (idx * 46) + 10),
          offset: new kakao.maps.Point(13, 37),
        };
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
        const marker = new kakao.maps.Marker({
          position: position,
          image: markerImage,
        });
        marker.setMap(map);
        return marker;
      };

      const getListItem = (index, place) => {
        const el = document.createElement("li");
        const itemStr =
          '<span class="markerbg marker_' +
          (index + 1) +
          '"></span>' +
          '<div class="info">' +
          '   <h5>' +
          place.place_name +
          '</h5>' +
          '   <span>' +
          place.address_name +
          '</span>' +
          '</div>';
        el.innerHTML = itemStr;
        el.className = "item";
        return el;
      };

      const displayPagination = (pagination) => {
        const paginationEl = document.getElementById("pagination");
        while (paginationEl.hasChildNodes()) {
          paginationEl.removeChild(paginationEl.lastChild);
        }

        for (let i = 1; i <= pagination.last; i++) {
          const el = document.createElement("a");
          el.href = "#";
          el.innerHTML = i;

          if (i === pagination.current) {
            el.className = "on";
          } else {
            el.onclick = () => pagination.gotoPage(i);
          }

          paginationEl.appendChild(el);
        }
      };

      // 초기 검색 키워드 설정
      searchPlaces("팝업 스토어");
    });
  }, [latitude, longitude]);

  return { container, places, pagination };
};
const Test = () => {
    const lat = "37.5665";
    const lon = "126.9780";

    const { container, places, pagination } = KakaoMap({ latitude: lat, longitude: lon });
    const [searchKeyword, setSearchKeyword] = useState("팝업 스토어");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchPlaces(searchKeyword);
    
};
  const searchPlaces = (keyword) => {
    KakaoMap({ latitude: lat, longitude: lon }).searchPlaces(keyword);
  };

  return (
    <div>
      <div className={classes.map_wrap} ref={container} style={{ width: "100%", height: "500px" }} />

      <div className={classes.menu_wrap} >
        <div className={classes.option}>
          <div>
            <form onSubmit={handleFormSubmit}>
              키워드 :{" "}
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                size={15}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList">
          {places.map((place, index) => (
            <li key={index} className="item">
              <span className={`markerbg marker_${index + 1}`} />
              <div className={classes.info}>
                <h5>{place.place_name}</h5>
                <span>{place.address_name}</span>
              </div>
            </li>
          ))}
        </ul>
        <div id="pagination">
          {pagination &&
            [...Array(pagination.last).keys()].map((pageNum) => (
              <a
                key={pageNum}
                href="#"
                className={pageNum === pagination.current ? "on" : ""}
                onClick={() => pagination.gotoPage(pageNum + 1)}
              >
                {pageNum + 1}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Test;