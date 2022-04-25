import { useState, useEffect } from "react";

function GitHubUser({ login }) {
const [data, setData] = useState(null);
useEffect(() => {
  fetch(`https://api.github.com/users/${login}`)
  .then(res => res.json())
  .then(setData)
  .catch(console.error);
}, []);

if (data) {
  return (
  <div>
    <h1>{data.login}</h1>
    <img src={data.avatar_url} width={100} alt="some person"/>
  </div>
  );
}

return null;
};


function FetchDataWithUseEffect() {
  return
    <GitHubUser login="eveporcello" />;
  
}






export default FetchDataWithUseEffect;
