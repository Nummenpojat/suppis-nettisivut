import React from "react";

export default function MessageInput(props: { onChange: (event: any) => void }) {
  return <>
    <label>Viesti:</label>
    <textarea rows={3}
              onChange={props.onChange}
              placeholder=" Type your message here..."
              className="rounded-[5px] bg-gray-100 p-0.5"/>
  </>;
}