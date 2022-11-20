import React, {useState} from 'react';
import Navbar from "./components/navbar";
import NavElement from "./components/navElement";
import './theme/nummarit.css'
import './theme/webteema.css'

const MessageSender = () => {
  const [message, setMessage] = useState("")
  const [oneOrList, setOneOrList] = useState(true)
  const [all, setAll] = useState(false)

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
        <form className="m-5 flex flex-col w-1/3 min-w-[300px]" onSubmit={handleSubmit}>
          <h1 className="text-[35px] text-center">Lähetä viesti</h1>
          <label>Viesti:</label>
          <textarea rows={3}
                    onChange={(event) => {
                      setMessage(event.target.value)
                    }}
                    placeholder=" Type your message here..."
                    className="rounded-[5px] bg-gray-100"/>
          <label>
            <input type="checkbox" className="mx-1.5 my-3 checked:accent-mannynvihrea" checked={oneOrList}
                   onClick={() => setOneOrList(!oneOrList)}/>
            Lähetä viesti monille ihmisille
          </label>
          {
            oneOrList ?
              <div>
                <label>
                  Mille ikäkausille viesti lähetetään
                </label><br/>
                <ul>
                  <AgeGroupCheckbox checked={all} onClick={handleAllAgeGroups} agegroup="Kaikki ikäkaudet"/>
                  {/* Api can't yet handle specific age-groups
                    <AgeGroupCheckbox checked={sudarit} onClick={() => setSudarit(!sudarit)} agegroup="Sudenpennut"/>
                    <AgeGroupCheckbox checked={sheikit} onClick={() => setSheikit(!sheikit)} agegroup="Seikkailijat"/>
                    <AgeGroupCheckbox checked={tarpojat} onClick={() => setTarpojat(!tarpojat)} agegroup="Tarpojat"/>
                    <AgeGroupCheckbox checked={samoajat} onClick={() => setSamoajat(!samoajat)} agegroup="Samoajat"/>
                    <AgeGroupCheckbox checked={vaeltajat} onClick={() => setVaeltaja(!vaeltajat)} agegroup="Vaeltajat"/>
                    <AgeGroupCheckbox checked={aikuiset} onClick={() => setAikuiset(!aikuiset)} agegroup="Aikuiset"/>
                  */}
                </ul>
              </div> :
              <div>
                <label>
                  Numero mihin viesti lähetetään
                </label><br/>
                <input className="bg-gray-100 w-full rounded-[5px]" type="tel"/>
              </div>
          }
          <input type="submit" value="SEND THE MESSAGE"
                 className="my-5 bg-mannynvihrea p-2 rounded-[5px] font-passionOne text-white text-xl"/>
        </form>
      </section>
    </div>
  )
}

function AgeGroupCheckbox(props: { checked: boolean, onClick: () => void, agegroup: string }) {
  return <li>
    <input type="checkbox" className="m-1.5 checked:accent-mannynvihrea" checked={props.checked}
           onClick={props.onClick}/>
    <label>{props.agegroup}</label>
  </li>;
}

function App() {
  return (
    <>
      <Navbar>
        <NavElement text="WHATSAPP" linksTo=""/>
        <NavElement text="TAKAISIN" linksTo="https://nummenpojat.fi"/>
      </Navbar>
      <MessageSender/>
    </>
  );
}

export default App;
