import Image from "next/image"
import Link from "next/link"
import AccountArea from "@/components/accountArea/accountbtn"

export default function Header() {
    return (
        <header className="justify-between flex items-center p-4 border-border">
            <div className="flex gap-4 items-center text-xs text-muted-foreground">
                <Image src="/cataoc.png" width={80} height={59.5} priority />
                <Link className="hover:text-foreground" href={"/home"}>Home</Link>
                <Link className="hover:text-foreground" href={"/gallery"}>Gallery</Link>
                <Link className="hover:text-foreground" href={"/breeds"}>Breeds</Link>
                <Link className="hover:text-foreground" href={"/join"}>Join</Link>
            </div>
            <div>
              <AccountArea />
            </div>
        </header>
    )
}