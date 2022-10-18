
import { useState } from "react"
import CategoryHead from "../../components/Category/CategoryHead"
import AppLayout from "../../components/Layouts/AppLayout"
import CalendarModal from "../../components/Modals/CalendarModal"
import SearchByCategory from "../../components/sections/SearchByCategory"

export default function index() {
  const [ openCalendar, setOpenCalendar ] = useState(true);
  return (
    <AppLayout >
      <CategoryHead />
      <SearchByCategory />
      {openCalendar && <CalendarModal setOpenCalendar={setOpenCalendar} />}
    </AppLayout>
  )
}
