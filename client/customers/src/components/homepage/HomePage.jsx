import LoginButton from "../loginpage/LoginButton";
import RegisterButton from "./RegisterButton";


export default function () {
  
  return (
    <main>
      <section className=" h-screen flex justify-center items-center gap-2">
        <LoginButton />
        <RegisterButton />
      </section>
    </main>
  );
}
