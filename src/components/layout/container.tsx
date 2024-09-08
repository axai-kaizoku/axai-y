import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={cn(
          "flex w-[93%] items-center justify-center md:w-[80%] lg:w-[70%]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
