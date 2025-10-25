import Galaxy from "./pictures/galaxy.jpg"
import Iphone from "./pictures/Iphone.jpg"
import Samsung from "./pictures/Samsung.jpg"
export function IphoneImg(){
    return (
    <img  src={Iphone} alt='Samsunggg'/>
)
}
export function GalaxyImg(){
    return (
    <img src={Galaxy} alt='Galaxyyyy' style={{height:350}}/>
)
}
export function SamsungImg(){
    return(
    <img src={Samsung} alt='Samsunggg' />
)
}