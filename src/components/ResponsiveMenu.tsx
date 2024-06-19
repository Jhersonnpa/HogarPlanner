import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuIcon from "@/components/icons/MenuIcon";
import {Logo} from "@/components/Logo.tsx";

const ResponsiveMenu = () => {
  return (
    <Sheet key="left">
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-secondary">
        <SheetHeader>
          <SheetTitle><Logo /></SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveMenu;
