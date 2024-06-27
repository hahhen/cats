"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { User } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignIn, SignOut } from "@/lib/authaction";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function AccountArea() {
    const auth = useSession()
    console.log(auth)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" ><User color="hsl(var(--muted-foreground))" size={18} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen max-w-[250px] ">
                {auth.data ?
                    <>
                        <div className="flex items-center justify-between">
                            <div>
                                <DropdownMenuLabel className="pb-0">Meowcome, {auth.data?.user?.name}!</DropdownMenuLabel>
                                <DropdownMenuLabel className="text-xs pt-0 text-muted-foreground">{auth.data?.user?.email}</DropdownMenuLabel>
                            </div>
                            <div>
                                <Image src={auth.data?.user?.image} width={30} height={30} className="rounded-full" />
                            </div>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
                        <DropdownMenuItem onClick={e => SignOut({})}>Sign out</DropdownMenuItem>
                    </>
                    :
                    <div className="flex flex-col text-sm p-4 gap-4">
                        Become a member of the CATAOC today!
                        <button className={buttonVariants()} size="sm" onClick={e => SignIn({})}>Sign In</button>
                    </div>
                }

            </DropdownMenuContent>
        </DropdownMenu>
    )
}