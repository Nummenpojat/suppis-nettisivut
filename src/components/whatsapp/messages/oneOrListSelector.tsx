import React from "react";

export default function OneOrListSelector(props: { checked: boolean, onClick: () => void }) {
  return <label>
    <input type="checkbox" className="mx-1.5 my-3 checked:accent-mannynvihrea" checked={props.checked}
           onClick={props.onClick}/>
    Lähetä viesti monille ihmisille
  </label>;
}