import React, {useState} from "react";
import MessageInput from "./messageInput";
import OneOrListSelector from "./oneOrListSelector";
import AgegroupSelectors from "./agegroupSelectors";
import PhoneNumberInput from "./phoneNumberInput";
import SendMessageForm from "./sendMessageForm";

export default function MessageWrapper () {
  const [message, setMessage] = useState("")
  const [oneOrList, setOneOrList] = useState(true)
  const [all, setAll] = useState(true)

  // TODO When API can handle specific age-groups add functionality to support them in frontend
  /*const [sudarit, setSudarit] = useState(false)
  const [sheikit, setSheikit] = useState(false)
  const [tarpojat, setTarpojat] = useState(false)
  const [samoajat, setSamoajat] = useState(false)
  const [vaeltajat, setVaeltaja] = useState(false)
  const [aikuiset, setAikuiset] = useState(false)*/

  const handleSubmit = (event: any) => {
    event.preventDefault()
    alert("kissa")
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
        <SendMessageForm sendMessage={handleSubmit}>
          <MessageInput onChange={(event) => {setMessage(event.target.value)}}/>
          <OneOrListSelector checked={oneOrList} onClick={() => {setOneOrList(!oneOrList)}}/>
          {
            oneOrList ?
              <AgegroupSelectors checked={all} onClick={() => {handleAllAgeGroups()}}/>
              :
              <PhoneNumberInput/>
          }
        </SendMessageForm>
      </section>
    </div>
  )
}