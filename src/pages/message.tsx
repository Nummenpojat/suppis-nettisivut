import React, {useState} from "react";
import {getIdTokenForApiCall} from "../firebaseConfig";
import axios from "axios";

export default function MessageWrapper() {
  const [message, setMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [toList, setToList] = useState(true)
  const [all, setAll] = useState(true)

  const handleSend = async (event: any) => {
    event.preventDefault()
    if (!toList) {
      try {
        const idToken = await getIdTokenForApiCall()
        const result = await axios.post("http://localhost:3001/whatsapp/send/one", {
          number: phoneNumber,
          message: message
        }, {headers: {idtoken: idToken}})

        alert(result.data)

      } catch (error: any) {

        if (error.data.type == "qr") {
          console.warn(error.data.message)
        }

        console.error(error.message)
      }
    }
  }

  return (
    <div className="w-screen h-[calc(100vh-120px)]">
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
                 className="my-5 bg-mannynvihrea p-2 rounded-[5px] font-passionOne text-white text-xl"/>
        </form>
      </section>
    </div>
  )
}