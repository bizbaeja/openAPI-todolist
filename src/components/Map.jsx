// import React, { useEffect, useRef } from "react";
// import Kakao from "./KakaoMap";
// import classes from "./Map.module.css";
// const lat = "37.5665";
// const lon = "126.9780";
// function Map() {

//     const { container } = Kakao(lat, lon);

//     return (
//       <div
//       className={classes.map_wrap}
//         ref={container}
//         style={{ width: "1265px", height: "350px", border: "1px solid black" }}
//       >
//         <div className={classes.map} style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}></div>


//         <div className={`${classes.menu_wrap} ${classes.bg_white}`}>
//             <div className={classes.option}>
//                 <div>
//                     <form onsubmit="searchPlaces(); return false;">
//                       <input type="text" value="팝업스토어" id="keyword" size="15"/> 
//                         <button type="submit">검색하기</button> 
//                     </form>
//                 </div>
//             </div>

//             <ul id="placesList"></ul>
//             <div id="pagination"></div>
//         </div>

//       </div>
//     );
// }

// export default Map;
