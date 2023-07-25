import NavBar from "../components/nav"
import { cookies } from "next/headers"

export default function DashboardLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    const isToken = cookies().has("token");
    return (
      <section>
        <NavBar isLogin={isToken} />
        {children}
      </section>
    )
}