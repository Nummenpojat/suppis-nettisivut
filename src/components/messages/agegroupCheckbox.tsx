import React from "react";

export default function AgeGroupCheckbox(props: { checked: boolean, onClick: () => void, agegroup: string }) {
  return <li>
    <input type="checkbox" className="m-1.5 checked:accent-mannynvihrea" checked={props.checked}
           onClick={props.onClick}/>
    <label>{props.agegroup}</label>
  </li>;
}