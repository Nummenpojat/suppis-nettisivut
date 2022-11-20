import React from "react";

export default function PhoneNumberInput() {
  return <>
    <label>
      Numero mihin viesti lähetetään
    </label><br/>
    <input className="bg-gray-100 w-full rounded-[5px] p-0.5" type="tel" placeholder=" Esim +3581234567"/>
  </>;
}