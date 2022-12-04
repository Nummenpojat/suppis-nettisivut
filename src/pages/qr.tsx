import React, {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {getIdTokenForApiCall} from "../firebaseConfig";

const Qr = () => {

  const [qr, setQr] = useState("")
  const [error, setError] = useState("Loading...")

  useEffect(() => {
    getIdTokenForApiCall((idToken) => {
      axios.get("http://localhost:3001/modules/whatsapp/new", {
        headers: {
          idtoken: idToken
        }
      })
        .then((response) => {

          // Regex replaces all + with %2B because + can't be used in urls parameter values, so they are converted to %2B which is equivalent
          setQr(response.data.replace(/\+/g, "%2B"))

        })
        .catch((reason: AxiosError) => {
          setError(reason.message)
          throw `Error: "${reason.message}" -- Application was not able to reach the server`
        })
    })
  }, [])

  return (
    <>
      <div className="w-screen h-[calc(100vh-120px)] place-items-center flex flex-col">
        <h1 className="text-[35px]">GENERATING NEW QR CODE</h1>
        {qr == "" ?
          <p>{error}</p>
          :
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qr}`}
               className="m-5 h-full aspect-square" alt="qr code"/>
        }
      </div>
    </>
  )
}
export default Qr