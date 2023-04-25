import Link from "next/link"
export default function Singup() {
  return (
    <>
    
    
            <h2>Registration</h2>
    
        Username<input type="text" name="uname" id="uname" ></input><br></br>
        Phonenumber<input type="text" name="phnname" id="phnname" ></input><br></br>
        Emailid<input type="text" name="emailid" id="emailid"></input><br></br>
        Address<input type="text" name="adress" id="adress"></input><br></br>
        Password<input type="password" name="pass" id="pass"></input><br></br>
        Confirm<input type="password" name="cpass" id="cpass"></input><br></br>
        <input type="radio" name="tname" value="admin" id="admin"></input>
        Admin
        <input type ="radio" name="tname" value="user" id="user"></input>
        user
        <br></br>
        <input type="submit" class="submit-button btn_action" name="submit"></input>
        <Link href="/">Back</Link>
  
  
  
     
    </>
  )
}
