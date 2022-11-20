import React from "react";

export default function SendMessageForm({children}: any, props: { sendMessage: any }) {
  return <form className="m-5 flex flex-col w-1/3 min-w-[300px]" onSubmit={props.sendMessage}>
    <h1 className="text-[35px] text-center">Lähetä viesti</h1>
    {
      children
    }
    <input type="submit" value="LÄHETÄ VIESTI"
           className="my-5 bg-mannynvihrea p-2 rounded-[5px] font-passionOne text-white text-xl"/>
  </form>;
}