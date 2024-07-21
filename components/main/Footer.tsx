import { MountainIcon } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-muted py-12 w-full">
    <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-start gap-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc.</span>
        </Link>
      </div>
      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Resources</h3>
        <nav className="grid gap-2">
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Guides
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Support
          </Link>
        </nav>
      </div>
      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Legal</h3>
        <nav className="grid gap-2">
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Cookie Policy
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Trademark
          </Link>
        </nav>
      </div>
      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Navigation</h3>
        <nav className="grid gap-2">
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
    <div className="container max-w-7xl mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>&copy; 2024 Acme Inc. All rights reserved.</p>
      <p>
        Built with{" "}
        <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
          Vercel
        </Link>
      </p>
    </div>
  </footer>
  )
}

export default Footer