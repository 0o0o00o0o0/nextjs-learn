import React from 'react';
import { Input, Button } from 'antd';
import { WithComponent, Iprops } from '../../utils/commonsStore';
import Header from '../../components/HtmlHeader';
import Link from 'next/link';
import './index.sass';
interface IuserProps extends Iprops {
    userAgent: string;
    user: { name: string };
}
const Home = (prop: IuserProps) => {
    return <div className="user">
        <Header title="用户页" />
        <Link href='/'>
                <a>back</a>
            </Link>
        <p>这里是user</p>
        <p>页面渲染前查询的浏览器信息：{prop.userAgent}</p>
        <p>全局状态中user的名字：{prop.user.name}</p>
        <Button onClick={() => prop.dispatch({ type: 'user/change' })}>改变一下名字</Button>
    </div>
}

export default WithComponent(Home, ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
});