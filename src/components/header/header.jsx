import Image from "next/image"

export default function Header() {
    return (
        <header className="justify-between px-2">
            <div>
                <Image src="/cataoc.png" width={100} height={59.5} priority />
            </div>
        </header>
    )
}