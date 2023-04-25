import Link from "next/link"
export default function SingIn() {
  return (
    <>
      <form     >
        <h2>LOG  IN</h2>
        Username <input type="text" ></input><br></br>
        Password <input type="password"  ></input> <br></br> 
       <input type="submit"></input><br></br>
        <Link href="/" class="b1">back</Link>
    </form>
    </>
  )
}
