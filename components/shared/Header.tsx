import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b flex-col md:flex-row bg-linear-90 from-(--rich-black) to-(--chambray) text-(--stardust-white) text-lg lg:h-20 px-7">
      <p className="font-extrabold text-3xl text-(--chambray) max-md:text-(--silver-lake-blue) max-md:mb-3">Pixel Pulse News</p>
      <nav className="space-x-4">
        <ul className="flex space-x-8 lg:space-x-12 flex-wrap text-center font-semibold">
          <Link href="/" className="hover:underline hover:underline-offset-4 hover:decoration-(--silver-lake-blue) hover:decoration-2">Home</Link>
          <Link href="/team" className="hover:underline hover:underline-offset-4 hover:decoration-(--silver-lake-blue) hover:decoration-2">Team</Link>
          <Link href="/research" className="hover:underline hover:underline-offset-4 hover:decoration-(--silver-lake-blue) hover:decoration-2">Research</Link>
          <Link href="/newsletters" className="hover:underline hover:underline-offset-4 hover:decoration-(--silver-lake-blue) hover:decoration-2">Newsletters</Link>
          <Link href="/contact" className="hover:underline hover:underline-offset-4 hover:decoration-(--silver-lake-blue) hover:decoration-2">Contact</Link>
        </ul>
      </nav>
    </header>
  )
}
