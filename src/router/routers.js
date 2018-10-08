import Home from '@/components/Home'//引入Home组件文件
import Shopp from '@/components/Shopp'//引入Shopp组件文件
import Kind from '@/components/Kind'//引入Kind组件文件
import User from '@/components/User'//引入User组件文件
import HomeHead from '@/components/HomeHead'
import ShoppHead from '@/components/ShoppHead'
import KindHead from '@/components/KindHead'
import UserHead from '@/components/UserHead'
import Minfooter from '@/components/Minfooter'
import Clearance from '@/components/Clearance'
import ClearanceHead from '@/components/ClearanceHead'
const routes = [//定义路由
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path:'/Home',
      components:{
        header:HomeHead,
        content:Home,
        footer:Minfooter
      }
    },
    {
      path:'/Shopp',
      components:{
        header:ShoppHead,
        content:Shopp
      }
    },
    {
      path:'/Kind',
      components:{
        header:KindHead,
        content:Kind,
        footer:Minfooter
      }
    },
    {
      path:'/User',
      components:{
        header:UserHead,
        content:User
      }
    },
    {
      path:'/Clearance',
      components:{
        header:ClearanceHead,
        content:Clearance
      }
    }
  ]
  export default routes
  