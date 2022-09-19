
import CategoryHead from "../../components/Category/CategoryHead"
import AppLayout from "../../components/Layouts/AppLayout"
import SearchByCategory from "../../components/sections/SearchByCategory"

export default function index() {
  return (
    <AppLayout >
      <CategoryHead />
      <SearchByCategory />
    </AppLayout>
  )
}
