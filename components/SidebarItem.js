import Link from "next/link"
function SidebarItem({title, Icon, url}) {
  return (
    <Link href={url}>
      <div className="flex flex-row items-center group text-gray-500 hover:text-blue-500 cursor-pointer mb-6">
          <Icon className="h-6 group-hover:animate-bounce"/>
          <p className="visible sm:hidden md:hidden ml-2">{title}</p>
      </div>
    </Link>
  )
}

export default SidebarItem