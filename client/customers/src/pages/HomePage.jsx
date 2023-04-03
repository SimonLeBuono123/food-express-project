import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";

export default function () {
  return (
    <main>
      <section
        className="
        h-screen
        flex justify-center items-center"
      >
        <LoginButton/>
        <RegisterButton />
      </section>
    </main>
  );
}
