import {  Stack } from "@mantine/core"
import { HeroBanner } from "./components/HeroBanner"
import { ShirtPickerSection} from "./components/ShirtPickerSection"
import { OrderSection } from "./components/OrderSection"

function App() {

  return (
    <Stack>
      <HeroBanner />
      <ShirtPickerSection />
      <OrderSection/>
    </Stack>
  )
}

export default App
