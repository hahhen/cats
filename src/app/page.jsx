import Image from "next/image";

export default function Home() {
  return (
    <main className="px-8">
      <Image className="w-full h-[500px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg" width={1200} height={734} />
      <section className="py-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The Cat Association of America
        </h2>
      </section>
    </main>
  );
}
