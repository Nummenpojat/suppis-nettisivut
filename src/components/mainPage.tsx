import React, {useEffect, useState} from "react";
import {auth, signInWithGoogle, signOut} from "../firebaseConfig";
import {onAuthStateChanged} from "firebase/auth";

const MainPage = () => {

  const [signedInAs, setSignedInAs] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setSignedInAs(user.displayName)
      } else {
        setSignedInAs("")
      }
    })
  }, [])

  return (
    <div className="w-screen flex place-content-center place-items-center h-[calc(100vh-120px)]">
      {signedInAs != "" ?
        <div className="flex flex-col w-1/3 min-w-[300px]">
          <h1 className="text-[40px] text-center">
            {`OLET KIRJATUNUT KÄYTTÄJÄLLÄ: ${signedInAs}`}
          </h1>
          <button onClick={signOut} className="my-5 bg-mansikanpunainen p-2 m-2 rounded-[5px] font-passionOne text-white text-xl">
            KIRJAUDU ULOS
          </button>
        </div>

        :
        <button onClick={signInWithGoogle} className="my-5 bg-mannynvihrea p-2 rounded-[5px] font-passionOne text-white text-xl w-1/3 min-w-[300px]">
          KIRJAUDU SISÄÄN
        </button>
      }
    </div>
  )
}
export default MainPage