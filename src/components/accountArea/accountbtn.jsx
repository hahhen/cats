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

export default function AccountArea() {
    const auth = useSession()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" ><User color="hsl(var(--muted-foreground))" size={18} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {auth.data ?
                    <>
                        <DropdownMenuLabel className="pb-0">Meowcome, {auth.data?.user?.name}!</DropdownMenuLabel>
                        <DropdownMenuLabel className="text-xs pt-0 text-muted-foreground">{auth.data?.user?.email}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
                        <DropdownMenuItem className="text-xs" onClick={e => SignOut({})}>
                            Sign out
                        </DropdownMenuItem>
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