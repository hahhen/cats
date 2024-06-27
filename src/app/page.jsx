import { Star } from "lucide-react";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import Image from "next/image";

const theCatAPI = new TheCatAPI(process.env.CAT_API_KEY);

export default async function Home() {
  const result1 = await theCatAPI.images.searchImages({ breeds: ["siam"] })
  const result2 = await theCatAPI.images.searchImages({ breeds: ["pers"] })
  const result3 = await theCatAPI.images.searchImages({ breeds: ["sfol"] })
  const result4 = await theCatAPI.images.searchImages({ breeds: ["sphy"] })

  const results = [await result1[0], await result2[0], await result3[0], await result4[0]]
  return (
    <main className="px-8">
      <Image alt="Banner" className="w-full h-[500px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg" width={1200} height={734} />
      <section className="py-4">
        <h2 className="scroll-m-20 text-2xl font-light tracking-tighter">
          The Cat Association of America
        </h2>
        <p className="text-sm">
          The Cat Association of America is a sister company to The Brain Bureau of Research, EMP, The Council, and others! We love cats.
        </p>
      </section>
      <section className="bg-[#62B4E2] w-full gap-4 rounded-lg flex flex-col p-4 items-center">
        <div className="flex gap-2">
          <h4 className=" text-white scroll-m-20 tracking-tighter transition-colors first:mt-0">
            Editor&apos;s Picks
          </h4>
          <Star fill="#FFD900" stroke="#FFD900" />
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
          <Image alt="Black Cat" className="rounded w-full justify-self-center aspect-[20/13] object-cover object-top" src={"https://astrologyinlife.com/wp-content/uploads/2022/07/GettyImages-1175550351.jpg"} width={400} height={260} />
          <Image alt="White Cat" className="rounded w-full justify-self-center aspect-[20/13] object-cover object-top" src={"https://www.boredpanda.com/blog/wp-content/uploads/2023/03/6409d1ecbb973_3ya66rs0hls91__700.jpg"} width={400} height={260} />
          <Image alt="Curl" className="rounded w-full justify-self-center aspect-[20/13] object-cover object-top" src={"https://images.ctfassets.net/440y9b545yd9/1lKmnWj888b98Vp7MrHGrl/e54cdeb2e914e65b36a993af493b5eea/Selkirk-Rex850.jpg"} width={400} height={220} />
        </div>
      </section>
      <section className="w-full gap-4 rounded-lg flex flex-col p-4 items-center">
        <div className="flex gap-2">
          <h4 className="scroll-m-20 tracking-tighter transition-colors first:mt-0">
            Other breeds
          </h4>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {results.map((result, index) => (
            <div key={index} className="flex gap-4">
              <Image alt={result.breeds[0].name} className="rounded justify-self-center aspect-square object-cover object-top" src={result.url} width={200} height={200} />
              <div className="flex flex-col gap-2">
                <h5 className="text-lg font-light tracking-tighter">
                  {result.breeds[0].name}
                </h5>
                <p className="text-sm">
                  {result.breeds[0].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
