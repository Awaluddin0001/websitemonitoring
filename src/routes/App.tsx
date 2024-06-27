// import { Routes, Route, useLocation } from "react-router-dom";
// import Desktopdash from "@/components/navbar/Desktopdash";
// import { Suspense } from "react";
// import routes from "@/routes/routes"; // Assuming you have defined your routes here

// const App = () => {
//   const location = useLocation();
//   const isLoginRoute = location.pathname.startsWith("/login");
//   const isRoomManagementRoute = location.pathname.startsWith("/roomManagement");

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         {isLoginRoute &&
//           routes
//             .filter((route) => route.path.startsWith("/login"))
//             .map(({ path, element }) => (
//               <Route key={path} path={path} element={element} />
//             ))}

//         {isRoomManagementRoute &&
//           routes
//             .filter((route) => route.path.startsWith("/roomManagement"))
//             .map(({ path, element }) => (
//               <Route key={path} path={path} element={element} />
//             ))}

//         {!isLoginRoute && !isRoomManagementRoute && (
//           <Route element={<Desktopdash />}>
//             <Routes>
//               {routes.map(({ path, element }) => (
//                 <Route key={path} path={path} element={element} />
//               ))}
//             </Routes>
//           </Route>
//         )}
//       </Routes>
//     </Suspense>
//   );
// };

// export default App;
