import axios from "axios";
import Toast from "./components/toast";
import Routers from "./Routes";

function App() {


  // const checkAuth = ['/login', '/forgot'];
  // axios.interceptors.request.use(request => {
  //   // const isAuth = checkAuth.includes(window.location.pathname);
  //   // console.log('LOGG ', userData)
  //   // let token = userData.jwttoken;
  //   let token = localStorage.getItem('customer.token');
  //   // console.log('token ', localStorage.getItem('customer.token'))
  //   // if (!isAuth && userData.jwtToken) {
  //   request.headers['Authorization'] = `Bearer ${token ?? '123'}`;
  //   request.headers['Access-Control-Allow-Origin'] = `*`;
  //   // }
  //   return request;
  // });

  return (
    <>
      <Toast />
      <Routers />
    </>
  );
}

export default App;
