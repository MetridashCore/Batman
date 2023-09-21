import Link from "next/link"
import { useRouter } from "next/router"

const Footer = () => {
  const year = new Date().getFullYear()
  const router = useRouter()

  return (
    <footer
      className={`${
        router.pathname === "/features"
          ? "bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-[1400px] md:mt-5"
          : router.pathname === "/"
          ? "hidden"
          : router.pathname === "/homepage"
          ? "bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-[800px] md:mt-10"
          : router.pathname === "/auth/signin"
          ? "bg-white rounded-lg shadow m-4 dark:bg-gray-800 mb-[-50px]"
          : router.pathname === "/auth/signup"
          ? "bg-white rounded-lg shadow m-4 dark:bg-gray-800 mb-[-50px]"
          : "bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-[200px] md:mt-5"
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
