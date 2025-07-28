import Header from "./header";
import NavBar from "./navbar";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-neutral-300 mx-auto max-w-screen-2xl">
      <Header />

      <section className="w-full md:p-8 gap-10 flex justify-center">
        <NavBar />
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
}

export default Wrapper;
