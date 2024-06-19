"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const { signOut } = await import("auth-astro/client");

export default function AvatarUser(avatar: any) {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={avatar.image}/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent><button id="logout" onClick={() => signOut()} className="py-2 px-4 bg-slate-400/80">Cerrar Sesión</button></PopoverContent>
    </Popover>
  );
}
