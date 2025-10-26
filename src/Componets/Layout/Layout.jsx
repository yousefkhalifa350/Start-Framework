import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
<>
<Navbar/>
<div className="pt-24 md:pt-28">
  <Outlet />
  <Footer />
</div>

</>
  )
}
