import React, {useState} from "react";
import {getIdTokenForApiCall} from "../firebaseConfig";
import axios, {AxiosResponse} from "axios";

export default function MessageWrapper() {
  const [message, setMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [qr, setQr] = useState("")
  const [toList, setToList] = useState(true)
  const [all, setAll] = useState(true)
  const [showQr, setShowQr] = useState(true)

  const handleSend = async (event: any) => {
    event.preventDefault()
    if (!toList) {
      try {

        //
        const idToken = await getIdTokenForApiCall()
        const result: AxiosResponse = await axios.post("http://localhost:3001/whatsapp/send/one", {
          number: phoneNumber,
          message: message
        }, {headers: {idtoken: idToken}})

        alert(result.data)

      } catch (error: any) {

        if (error.response.status == 409) {

          // Regex replaces all + with %2B because + can't be used in urls parameter values, so they are converted to %2B which is equivalent
          setQr(error.response.data.replace(/\+/g, "%2B"))

          setShowQr(true)
          return
        } else {
          alert(error.response.data)
        }
      }
    }
  }

  return (
    <div className="w-screen h-[calc(100vh-120px)]">
      {showQr ?
        <section className="place-items-center flex flex-col">
          <h1 className="text-[35px]">KIRJAA WHATSAPP SISÄÄN</h1>
          {qr == "" ?
            <p>Lataa...</p>
            :
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qr}`}
                 className="p-1.5 bg-white rounded-2xl h-[50%] aspect-square" alt="qr code"/>
          }
          <button
            className="nummari-button"
            onClick={() => setShowQr(false)}>
            SULJE
          </button>
        </section>
        :
        <section className="h-full flex place-content-center">
          <form className="m-5 flex flex-col w-1/3 min-w-[300px]">
            <h1 className="text-[35px] text-center">Lähetä viesti</h1>
            <label>Viesti:</label>
            <textarea rows={3} onChange={(event) => setMessage(event.target.value)}
                      placeholder=" Kirjoita viesti tähän . . . " className="rounded-[5px] bg-gray-100 p-0.5"/>
            <label>
              <input type="checkbox" className="mx-1.5 my-3 checked:accent-mannynvihrea" defaultChecked={toList}
                     onClick={() => setToList(!toList)}/>
              Lähetä viesti monelle ihmisille
            </label>
            {
              toList ?
                <>
                  <label>
                    Mille ikäkausille viesti lähetetään
                  </label><br/>
                  <ul>
                    <li>
                      <input type="checkbox" className="m-1.5 checked:accent-mannynvihrea" defaultChecked={all}
                             onClick={() => setAll(!all)}/>
                      <label>Kaikki ikäkaudet</label>
                    </li>
                  </ul>
                </>
                :
                <>
                  <label>
                    Numero mihin viesti lähetetään
                  </label><br/>
                  <input onChange={(event) => setPhoneNumber(event.target.value)}
                         className="bg-gray-100 w-full rounded-[5px] p-0.5" type="tel" placeholder=" Esim +3581234567"
                         autoComplete="on"/>
                </>
            }
            <input onClick={handleSend} type="submit" value="LÄHETÄ VIESTI"
                   className="nummari-button m-auto"/>
          </form>
        </section>
      }

    </div>
  )
}