import Image from "next/image"
import Link from "next/link"
import AccountArea from "@/components/accountArea/accountbtn"

export default function Header() {
    return (
        <header className="justify-between flex items-center px-8 border-border">
            <div className="flex gap-4 items-center text-xs text-muted-foreground">
                <Image src="/cataoc.png" width={130} height={59.5} quality={100} priority />
                <Link className="hover:text-foreground transition-all" href={"/home"}>Home</Link>
                <Link className="hover:text-foreground transition-all" href={"/gallery"}>Gallery</Link>
                <Link className="hover:text-foreground transition-all" href={"/breeds"}>Breeds</Link>
                <Link className="hover:text-foreground transition-all" href={"/join"}>Join</Link>
            </div>
            <div>
              <AccountArea />
            </div>
        </header>
    )
}