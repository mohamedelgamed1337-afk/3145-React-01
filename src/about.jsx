import GalaxyImg from './pictures/galaxy.jpg'
import IphoneImg from "./pictures/iphone.jpg"
import SamsungImg from "./pictures/Samsung.jpg"
import "./css.css"
export function AboutMe () {
    return (
    <div>

    <h1>Producttts</h1>
    <br></br>
    <ul><li><h3>About</h3></li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias praesentium illEst praesentium exercitationem cumque?
                    Repellendus quasi, cumque minus est quibusdam ducimus perferendis earum tenetur assumenda tempora expedita esse illo voluptate modi facere obcaecati recusandae reprehenderit quidem suscipit voluptates quo distinctio vel? Culpa, nihil blanditiis.
                    ione labore. Quod, dolorum numquam repellendus itaque beatae cum temporibus.
                    Ne  cessitatibus modi consequatur atque delmo sunt consequatur sequi, libero quos debitis architecto laboriosam? Iure, libero minus.
                    Minus et quod consequatur natus ut, nihil fuga omnis consectetur, quosmmodi repudianedit officiis nisi vitae! Necessitatibus vitae est debitis vel, nobis ipsa quidem quod recusandae! Porro nostrum illo culpa assumenda ipsum?
                    Molestiae impedit molestias exercitationemtibus aut architecto consequuntur iure fugiat!
                    Vitae consequatur natus adipisci, dolore esse possimus voluptates. Et provident repudiandae iure officia! Similique aliquam harum impedit facilis, obcaecati, explicabo atque consectetur, iure hic repudiandae ex accusamus cupiditate recusandae voluptas.
                    Saepe natus nobis ex quod iusto similique voluptate sequi, aperiam sunt eligendi fuga! Porro ipsum o. Ex iure dolore labore in facilis nobis eius hic illo?
                    Hic dolore quasi fugiat nisi perspiciatis, sit dignissimos nostrum ad ducimus corrupti. Quod molestias illum dolorum? Culpa magnam repellendus sequi nemo minus autem consequatur, maxime ea labore impedit quas ducimus.
    <h3><li>Products</li></h3>
    <ol>
    <li>Product 1</li>
    <li>Product 2</li>
    <li>Product 3</li>
    <li>Product 4</li>
    </ol>
    </ul>
  <div className='container'>
    <div className='row g-3'>
        <div  className='col-4'>
          <div  className='card h-100 shadow border-danger'>
            <div className='card-body d-flex flex-column'>
              <div className='card-title  fw-bold fs-1'>Iphone 17 Pro</div>
              <img  src={IphoneImg} alt='Samsunggg'/>
              <div   className='card-title fs-2 fw-bold'>50$/<span  className='text-dark text-opacity-50'>mounth</span></div>
              <div  className='card-text'>poor people can't buy Iphone 17, that's why poor people can't be happy</div>
              <div    class="card-footer text-muted">Last update 3 minutes ago</div>
              <button className='btn btn-success   w-100 mt-auto'>Add to card</button>
        </div>
        </div>
        </div>
        <div className='col-4'>
          <div className='card h-100 shadow border-danger'>
            <div className='card-body d-flex flex-column'>
              <div className='card-title fs-1 fw-bold text-dark text-opacity-50'>Samsung</div>
              <img src={SamsungImg} alt='Samsunggg' />
              <div  className='card-title fs-2 fw-bold'>15$/<span className='text-dark text-opacity-50'>mounth</span></div>
              <div className='card-text'>Samsung's Law "Old But Gold" it's easy to get Samsung, But Hard to Lose it</div>
              <div    class="card-footer text-muted">Last update 3 minutes ago</div>
              <button className='btn btn-success w-100 pt-3rem mt-auto'>Add to card</button>
            </div>
          </div>
        </div>
          <div  className='col-4'>
            <div className='card shadow h-100 border-danger'>
              <div  className='card-body d-flex flex-column'>
                <div className='card-title fs-1 fw-bold text-info'>Galaxy X Cover</div>
                <img src={GalaxyImg} alt='Galaxyyyy' style={{height:350}}/>
                <div><span  className='text-muted text-decoration-line-through fs-2'>EGP 10000</span>  <span className='text-danger fs-2'>EGP 8000</span></div>
                <div  className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eius.</div>
                <div    class="card-footer text-muted">Last update 3 minutes ago</div>
                <button className='btn btn-success w-100 mt-auto'>Add to card</button>
              </div>
            </div>
          </div>
          </div>
    </div>
  </div>
    )
}