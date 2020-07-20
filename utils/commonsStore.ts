import WithDva from './store';
interface Initialprops {
    pathname: string;
    query: { [key: string]: any };
    asPath: string;
    req?: any;
    res?: any;
    err: string;
    isServer: boolean;
    store: {
        [key: string]: any;
        dispatch?: (prop: { type: string, [key: string]: any }) => void;
    };

}
export interface Iprops {
    [key: string]: any;
    query: { [key: string]: any };
    pathname: string;
    isServer: boolean;
    dvaStore: any;
    dispatch: (prop: { type: string, [key: string]: any }) => void;
}
export const WithComponent = (Components: {
    (props: any): JSX.Element;
    getInitialProps?: (props: any) => Promise<{
        [key: string]: any;
        pathname: string;
        query: { [key: string]: any };
        isServer: boolean;
        dvaStore: { [key: string]: any };
    }>
}, initData?: (props?: Initialprops) => Promise<{ [key: string]: any }> | { [key: string]: any }) => {
    Components.getInitialProps = async (props: Initialprops) => {
        const {
            pathname, query, isServer, store,
        } = props;
        let result: { [key: string]: any } = {};
        // 扩展初始化数据
        if (initData) {
            result = await initData(props);
        }
        return {
            pathname, query, isServer, dvaStore: store, ...result
        };
    };
    return WithDva((state) => state)(Components)
}