import { cn } from "@/lib/utils";

export default async function Home() {
  return (
    <Container className="pt-40">
      <div className="flex h-[200vh] flex-col gap-8">
        <h1 className="text-4xl font-black">{`HEYY I'm AKSHAY YELLE`}</h1>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          similique quibusdam est eum libero ab maiores earum cum minus?
          Officiis veniam eos est rem optio suscipit distinctio laborum, nulla
          autem?
        </div>
        <div className="text-blue-500 dark:text-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          distinctio unde accusantium adipisci sequi facilis, deleniti modi,
          placeat ad repudiandae iure quod aspernatur eius eveniet nulla
          doloremque labore accusamus commodi?
        </div>
        <div>
          damage weigh brush experience five sold same plus matter log origin
          elephant paragraph foot fully development seat ear reason including
          rising needs symbol trackk
        </div>
        <div className="text-red-500 dark:text-red-400">
          date return worse south consonant shout bigger exact wet his silent
          attached somewhere yes pride hang hung copy president lungs instead
          hunter highest Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ab exercitationem voluptatem earum illum minus error impedit
          corrupti, provident temporibus eius neque dicta cumque beatae incidunt
          saepe aut iusto excepturi facilis. hungry
        </div>
        <div className="text-yellow-400">
          damage weigh brush experience five sold same plus matter log origin
          elephant paragraph foot fully development seat ear reason including
          risihant paragraph foot fully development seat ear reason including
          risihant paragraph foot fully development seat ear reason including
          risihant paragraph foot fully development seat ear reason including
          rising needs symbol trackk
        </div>
      </div>
    </Container>
  );
}

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={cn("flex w-[70%] items-center justify-center", className)}
      >
        {children}
      </div>
    </div>
  );
};
