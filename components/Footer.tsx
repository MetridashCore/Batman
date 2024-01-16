import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

const Footer = () => {
  const year = new Date().getFullYear()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  return (
    <footer
      className={`${
        
        router.pathname === "/features"
          ? " rounded-lg shadow m-4 bg-black  md:mt-5"
          : router.pathname === "/"
          
          ? "hidden"
          : router.pathname === "/waitList"
          ? " rounded-lg shadow m-4 bg-black  md:mt-5"
          : router.pathname === "/auth/signin"
          ? " rounded-lg shadow m-4 bg-black mb-[-50px]"
          : router.pathname === "/about"
          ? " rounded-lg shadow m-4 bg-black  md:mt-5"
          : " rounded-lg shadow m-4 bg-black mt-[200px] md:mt-5"
          
          
      }  `}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <Link href="/" className="hover:underline">
            Metridash
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="mr-4 hover:underline md:mr-6">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
