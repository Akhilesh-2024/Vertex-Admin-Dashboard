import { Navigate } from "react-router-dom";

const ProtectLogin = ({ children }) => {
  
  const isAuth = localStorage.getItem('isAuth');

  if(isAuth === 'true'){
    return children;
  }
  else{
    return <Navigate to="/" replace />
  }
}

export default ProtectLogin