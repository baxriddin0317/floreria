import Sidebar from "../Account/Sidebar"
import AppLayout from "./AppLayout"
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai"
import { useState } from "react"

const AccountLayout = ({children}) => {
  const [ sidebarActive, setSidebarActive ] = useState(false);
  return (
    <AppLayout>
      <section className="max-w-base mx-auto px-6 py-15">
        <div className="flex items-start gap-10">
            {/* sidebar */}
            <div className={`absolute z-100 top-48 ${sidebarActive ? 'left-6' : '-left-full'} lg:static duration-700`}>
              <Sidebar />
            </div>

            <div className="w-full">
              <button 
                onClick={() => setSidebarActive(!sidebarActive)}
                className="mb-5 lg:hidden"
              >
                {!sidebarActive ? <AiOutlineMenuUnfold className="text-3xl text-brand-primary" />
                 : <AiOutlineMenuFold className="text-3xl text-brand-primary" />}
              </button>
                {children}
            </div>
        </div>
      </section>
    </AppLayout>
  )
}

export default AccountLayout
