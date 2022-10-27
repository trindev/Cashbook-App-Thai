import { Link } from "react-router-dom";
import './HeaderComponent.css'

const HeaderComponent = () => {

  const design = {color:"red", textAlign:"center", fontSize:'1.5rem'}

  return (
    <div>
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
          <div >
            <ul className='horizonaltal-menu'>
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
          </div>
    </div>

  );
}

export default HeaderComponent