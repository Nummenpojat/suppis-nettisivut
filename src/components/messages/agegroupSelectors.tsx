import React from "react";
import AgeGroupCheckbox from "./agegroupCheckbox";

export default function AgegroupSelectors(props: { checked: boolean, onClick: () => void }) {
  return <>
    <label>
      Mille ikäkausille viesti lähetetään
    </label><br/>
    <ul>
      <AgeGroupCheckbox checked={props.checked} onClick={props.onClick} agegroup="Kaikki ikäkaudet"/>
      {/* Api can't yet handle specific age-groups
                    <AgeGroupCheckbox checked={sudarit} onClick={() => setSudarit(!sudarit)} agegroup="Sudenpennut"/>
                    <AgeGroupCheckbox checked={sheikit} onClick={() => setSheikit(!sheikit)} agegroup="Seikkailijat"/>
                    <AgeGroupCheckbox checked={tarpojat} onClick={() => setTarpojat(!tarpojat)} agegroup="Tarpojat"/>
                    <AgeGroupCheckbox checked={samoajat} onClick={() => setSamoajat(!samoajat)} agegroup="Samoajat"/>
                    <AgeGroupCheckbox checked={vaeltajat} onClick={() => setVaeltaja(!vaeltajat)} agegroup="Vaeltajat"/>
                    <AgeGroupCheckbox checked={aikuiset} onClick={() => setAikuiset(!aikuiset)} agegroup="Aikuiset"/>
                  */}
    </ul>
  </>;
}