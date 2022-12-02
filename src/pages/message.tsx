import React, {useState} from "react";
import MessageInput from "../components/messages/messageInput";
import OneOrListSelector from "../components/messages/oneOrListSelector";
import AgegroupSelectors from "../components/messages/agegroupSelectors";
import axios from "axios";
import {getIdTokenForApiCall} from "../firebaseConfig";

export default function MessageWrapper() {
  const [message, setMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [toList, setToList] = useState(true)
  const [all, setAll] = useState(true)

  // TODO When API can handle specific age-groups add functionality to support them in frontend
  /*const [sudarit, setSudarit] = useState(false)
  const [sheikit, setSheikit] = useState(false)
  const [tarpojat, setTarpojat] = useState(false)
  const [samoajat, setSamoajat] = useState(false)
  const [vaeltajat, setVaeltaja] = useState(false)
  const [aikuiset, setAikuiset] = useState(false)*/

  const handleSend = (event: any) => {
    event.preventDefault()
    if (toList) {
      if (all) {
        getIdTokenForApiCall((idToken) => {
          axios.post("http://localhost:3001/modules/whatsapp/send/list", {
            message: message
          }, {
            headers: {
              idtoken: idToken
            }
          })
            .then((response) => {
              alert(response.data)
            })
            .catch((reason) => {
              console.error(reason.response)
            })
        })
      }
    } else {
      getIdTokenForApiCall((idToken) => {
        axios.post("http://localhost:3001/modules/whatsapp/send/one", {
          message: message,
          number: phoneNumber
        }, {
          headers: {
            idtoken: idToken
          }
        })
          .then((response) => {
            alert(response.data)
          })
          .catch((reason) => {
            console.error(reason.response)
          })
      })
    }
  }

  const handleAllAgeGroups = () => {
    if (!all) {
      setAll(true)
      /*setAikuiset(true)
      setSheikit(true)
      setSudarit(true)
      setTarpojat(true)
      setSamoajat(true)
      setVaeltaja(true)*/
      return;
    }
    setAll(false)
    /*setAikuiset(false)
    setSheikit(false)
    setSudarit(false)
    setTarpojat(false)
    setSamoajat(false)
    setVaeltaja(false)*/
    return;
  }

  return (
    <div className="w-screen h-[calc(100vh-120px)]">
      <section className="h-full flex place-content-center">
        <form className="m-5 flex flex-col w-1/3 min-w-[300px]" onSubmit={handleSend}>
          <h1 className="text-[35px] text-center">Lähetä viesti</h1>
          <MessageInput onChange={(event) => {
            setMessage(event.target.value)
          }}/>
          <OneOrListSelector checked={toList} onClick={() => {
            setToList(!toList)
          }}/>
          {
            toList ?
              <AgegroupSelectors checked={all} onClick={() => {
                handleAllAgeGroups()
              }}/>
              :
              <>
                <label>
                  Numero mihin viesti lähetetään
                </label><br/>
                <input onChange={(event) => setPhoneNumber(event.target.value)}
                       className="bg-gray-100 w-full rounded-[5px] p-0.5"
                       type="tel"
                       placeholder=" Esim +3581234567"/>
              </>
          }
          <input type="submit" value="LÄHETÄ VIESTI"
                 className="my-5 bg-mannynvihrea p-2 rounded-[5px] font-passionOne text-white text-xl"/>
        </form>
      </section>
    </div>
  )
}