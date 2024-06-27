import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg" width={80} height={59.5} priority />
    </main>
  );
}
