import {Charts,WidgetSm,WidgetLg} from "../../../components"

import "./home.css"
import { userData } from "../../../dummyData"


const Home = () => {
    return (
        <div className="home">
            
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
      </div>
        </div>
    )
}

export default Home
