import { ChallangeH1, ChallangeH2, ChallangeH3, ChallangeH4 } from './Badge'
import Footer from './BottomPart'
import { Appear } from './Bodyy'
import AppHeader from './TopPart'
export default function App() {
    return (
        <div>
            {/* <AppHeader></AppHeader> */}
            
            <ChallangeH1  BgAndText1="badge bg-secondary fs-1"></ChallangeH1>
            <ChallangeH2   BgAndText2="badge bg-primary fs-2" ></ChallangeH2>
            <ChallangeH3    BgAndText3="badge bg-danger fs-3"></ChallangeH3>
            <ChallangeH4    BgAndText4="badge bg-info fs-4"></ChallangeH4>
            {/* <Appear></Appear>
            <Footer></Footer> */}
        </div>
    )
}