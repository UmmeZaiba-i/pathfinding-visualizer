import { Grid } from "./components/Grid"
import { PathFindingProvider } from "./context/PathFindingContext"
import { SpeedProvider } from "./context/SpeedContext"
import { TileProvider } from "./context/TileContext"

function App() {
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex flex-col">
            <Grid/>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  )
}

export default App
