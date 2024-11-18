export const ScreenSize = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[1000] flex h-12 w-12 items-center justify-center rounded-md border">
      <div className="block sm:hidden">sm</div>
      {/* Small screens (smaller than 640px) */}
      <div className="hidden sm:block md:hidden">md</div>
      {/* Medium screens (640px - 768px) */}
      <div className="hidden md:block lg:hidden">lg</div>
      {/* Large screens (768px - 1024px) */}
      <div className="hidden lg:block xl:hidden">xl</div>
      {/* Extra large screens (1024px - 1280px) */}
      <div className="hidden xl:block 2xl:hidden">2xl</div>
      {/* 2X large screens (1280px - 1536px) */}
      <div className="hidden 2xl:block">2xl+</div>
      {/* 2X large and above (1536px and up) */}
    </div>
  )
}
