import { isProd } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* section 1 */}
      <section className="flex h-dvh justify-center items-center w-full flex-col gap-8">
        <h1 className="text-7xl/9 font-black font-mono">Akshay Yelle.</h1>
        <p>Full Stack Dev.</p>
        <Image
          width={200}
          height={200}
          src={isProd() ? "/axai-y/star.svg" : "/star.svg"}
          alt="star"
        />
      </section>
      {/* section 2 */}
      <section id="about" className="w-[80%] pl-20 space-y-8">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi rem
          magnam nisi quaerat corrupti sequi temporibus, vel in id suscipit ex
          accusamus fugiat voluptas ullam beatae sapiente quidem nulla laborum.
        </div>
        <div>
          Lorem ipsum, dolor sit amelorem Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Maiores ipsam natus quae eos magni.
          Mollitia voluptatum iure tempora autem maxime beatae et officiis
          nesciunt perferendis dolorum, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam inventore modi qui accusantium obcaecati
          voluptate veritatis minus delectus tempora soluta? Consequuntur,
          incidunt voluptatibus. Quae iusto, repellat repellendus consequatur
          aliquid eveniet?perspiciatis, quam dolore ipsam.ae sapiente quidem
          nulla laborum.
        </div>
        <div>
          Lorem igiat voluptas ullam beatae sapiente quidem nulla laborum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          numquam totam neque et aspernatur sapiente tatibus ipsam molestiae!
          Nulla reiciendis hic sapiente, quidem corporis excepturi laboriosam
          ducimus natus. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Porro obcaecati maxime voluptatum temporibus in p
        </div>
      </section>
    </>
  );
}
