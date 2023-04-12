import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";


export default function () {
  
  return (
    <main>
      <section className="w-full flex flex-row gap-2 items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <LoginButton />
        <RegisterButton />
      </section>
    </main>
  );
}
