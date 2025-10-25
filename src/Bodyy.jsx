
import { SamsungImg, IphoneImg, GalaxyImg } from './Imgs'
import {EmptyButton, Product1Button, Product2Button, Product3Button} from "./Buttons"
import "./css.css"
export function Appear () {
    return (
    <div> 

    
  <div className='container'>
    <div className='row g-3'>
        <div  className='col-4'>
          <div  className='card h-100 shadow border-danger'>
            <div className='card-body d-flex flex-column'>
              <div className='card-title  fw-bold fs-1'>Iphone 17 Pro</div>
              <IphoneImg></IphoneImg>
              <div   className='card-title fs-2 fw-bold'>50$/<span  className='text-dark text-opacity-50'>mounth</span></div>
              <div  className='card-text'>poor people can't buy Iphone 17, that's why poor people can't be happy</div>
              <div    class="card-footer text-muted">Last update 3 minutes ago</div>
              <Product1Button></Product1Button>
        </div>
        </div>
        </div>
        <div className='col-4'>
          <div className='card h-100 shadow border-danger'>
            <div className='card-body d-flex flex-column'>
              <div className='card-title fs-1 fw-bold text-dark text-opacity-50'>Samsung</div>
              <SamsungImg></SamsungImg>
              <div  className='card-title fs-2 fw-bold'>15$/<span className='text-dark text-opacity-50'>mounth</span></div>
              <div className='card-text'>Samsung's Law "Old But Gold" it's easy to get Samsung, But Hard to Lose it</div>
              <div    class="card-footer text-muted">Last update 3 minutes ago</div>
              <Product2Button></Product2Button>
            </div>
          </div>
        </div>
          <div  className='col-4'>
            <div className='card shadow h-100 border-danger'>
              <div  className='card-body d-flex flex-column'>
                <div className='card-title fs-1 fw-bold text-info'>Galaxy X Cover</div>
                <GalaxyImg></GalaxyImg>
                <div><span  className='text-muted text-decoration-line-through fs-2'>EGP 10000</span>  <span className='text-danger fs-2'>EGP 8000</span></div>
                <div  className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eius.</div>
                <div    class="card-footer text-muted">Last update 3 minutes ago</div>
                  <Product3Button></Product3Button>
              </div>
            </div>
          </div>
          </div>
    </div>
  </div>
    )
}