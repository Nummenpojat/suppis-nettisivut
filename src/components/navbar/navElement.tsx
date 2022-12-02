import React from "react";

export default function NavElement(props: { text: string, linksTo: string}) {
  return <li className="">
    <a href={props.linksTo}>
      <h1 className="text-tausta text-[19px] hover:text-mannynvihrea duration-100">
        {
          props.text
        }
      </h1>
    </a>
  </li>;
}