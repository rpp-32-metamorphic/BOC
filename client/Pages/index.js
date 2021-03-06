import { View } from "react-native";
import { useSelector } from 'react-redux';

import Authorized from "./Authorized";
import UnAuthorized from "./UnAuthorized";

// replace return statement w/ Authorized to bypass
const App = function() {
  const user = useSelector(state => state.user);
  console.log(user.userInfo.username)

  return (
    user.username ? (
      <Authorized />
    ) : (
      <UnAuthorized />
    )
  )
  // return <Authorized />
}

export default App;