import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative group">
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] max-[340px]:w-[40px] max-[340px]:h-[40px] hover:cursor-pointer">
            <div className="flex flex-col justify-between w-[20px] h-[20px]">
              <div className="dark:bg-white bg-black h-[2px] w-1/2 rounded"></div>
              <div className="dark:bg-white bg-black h-[1px] rounded"></div>
              <div className="dark:bg-white bg-black h-[2px] w-1/2 rounded self-end"></div>
            </div>
          </div>
        </button>
      </SheetTrigger>
      <SheetContent side="top" className='h-[50vh] flex items-center justify-center bg-transparent backdrop-blur border-b-gray-500 dark:border-b-neutral-900'>
        <SheetTitle></SheetTitle>
        <div className="flex flex-col items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button>Get Started - It&apos;s Free</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
