import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import Header from "../components/HtmlHeader";
import { WithComponent, Iprops } from "../utils/commonsStore";
import "./index.sass";
const Home = (props: Iprops) => {
  // const [count, setCount] = useState(0);
  const { index } = props;
  const { name, count } = index;
  return (
    <div className="index">
      <Link href="/user">
        <a>去user</a>
      </Link>
      <br />
      <Link href="/dashboard?id=90" as="/dashboard/90">
        <a>去dashboard,id假设为90</a>
      </Link>
      <Header title="主页" />
      <p>hello world</p>
      <Button
        onClick={() => props.dispatch({ type: "index/caculate", delta: -1 })}
      >
        减1
      </Button>
      全局状态中的count:{count}
      <Button
        onClick={() => props.dispatch({ type: "index/caculate", delta: 1 })}
      >
        加1
      </Button>
      <div>
        index-name:{name}{" "}
        <Button
          onClick={() =>
            props.dispatch({ type: "index/asyncGetData", pageindex: 1 })
          }
        >
          改变indexName
        </Button>
      </div>
      <div>同时可以获取user的name:{props.user.name}</div>
    </div>
  );
};
export default WithComponent(
  Home,
  (props) =>
    new Promise((res) => {
      setTimeout(async () => {
        // 这里可以触发effect中的预处理数据，事先全局渲染
        // await props.store.dispatch({ type: 'index/init' })
        res({ a: 67 });
      }, 0);
    })
);
