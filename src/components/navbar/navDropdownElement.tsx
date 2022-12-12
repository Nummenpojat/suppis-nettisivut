import React from 'react';

const NavDropdownElement = (props: { text: string, linksTo: string }) => {
  return (
    <li className="py-[10px] px-[20px] hover:bg-[#eaeaea] ">
      <a href={props.linksTo} className=" text-[16px] font-passionOne text-[#515151] hover:text-mannynvihrea">
        { props.text }
      </a>
    </li>
  );
};

export default NavDropdownElement;