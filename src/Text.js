import { useEffect, useState } from "react";

function Text() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`);
  
  }, [val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]); //can put val as well b4 val2

  return(
    <>
    <label>
      Favourite Phrase:
      <input
      value={val}
      onChange={e => setVal(e.target.value)}
      />
    </label>
    <br/>
    <label>
      Second Favourite Phrase:
      <input
      value={val2}
      onChange={e => setVal2(e.target.value)}
      />
    </label>
    </>
  );
}

export default Text;