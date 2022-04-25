import { useState, useEffect } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  })

  return(
    <>
    <input 
    type="checkbox" 
    value={checked}
    onChange={() => setChecked(checked => !checked)}
    />
    {checked ? "checked" : "not checked"}
    <br/>
    </>
  );
}


export default Checkbox;