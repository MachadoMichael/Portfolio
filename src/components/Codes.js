import React from "react";

export default function Codes(props) {
  const codes = props.codes;
  const blockcode = codes.map((code, index) => (
    <div key={index} className="code" id={"code" + index}>
      {code}
    </div>
  ));

  return <div className="codes">{blockcode}</div>;
}
