import React from 'react';
import { WithComponent, Iprops } from '../../utils/commonsStore'
export default WithComponent((prop: Iprops) => <div>这里是dashboard,获取的id为{prop.query.id}<div>这里如果没有给server.js重定向，并且采用的是动态路由，那么刷新会404</div></div>, prop => {
  console.log(prop.query.id);
  return { a: 6 }
})