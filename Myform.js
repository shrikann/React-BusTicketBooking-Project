import {useState} from "react";


function Myform() {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <center>
    <form onSubmit={handleSubmit}>
      <label>Enter your name: 
        <input 
          type="text" 
          value={name}
          onChange={(e1) => setName(e1.target.value)}
        />
        <p/>
        Enter your password: 
        <input
        type="password"
        value={password}
        onChange={(e1) => setPassword(e1.target.value)}/>
      </label>
      <p/>
      <input type="submit"/>
    </form>
    </center>
  )
}
export default Myform