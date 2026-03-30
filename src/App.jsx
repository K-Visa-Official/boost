import { FlexColumnAllCenter , FlexColumnStartStart , FlexRowBetweenCenter , FlexRow  , FlexColumn} from './css/common'
import instagram from "./assets/common/footer/instagram.png"
import tube from "./assets/common/footer/tube.png"

function App() {
 const width = window.innerWidth;
   
  return (
    <>
      <FlexColumnAllCenter style={{ display: "flex", height: "100%", width: "100%" }}>
        <iframe
          src="/iframe/landing/index.html"
          title="D-2 D-4 유학생 시간제취업 안내"
          style={{
            width: "100%",
            height: "100vh",
            border: "none"
          }}
        />

    

      </FlexColumnAllCenter>    </>
  )
}

export default App
