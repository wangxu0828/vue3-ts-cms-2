#### 验证失败的方式

- 1. http 的 code(err.response.status)
     2xx 成功
     400 失败
     ...
     通过服务器的错误码显示不同的信息

- 2. 请求失败可能还会返回 200
     但是是返回的数据{data: "",success:false, returnCode: -1001}
     通过 returnCode 知道错误的信息

#### .browserslistrc

设置要适配的浏览器的

#### tsconfig.json

---

#### 将什么代码提取到 hook 里面

用到 ref/reactive/useStore/onMounted 的可以提取到 hooks 里面

#### <InstanceType<typeof xxx>>

typeof xxx 拿到这个组件的类型, InstanceType<typeof xxx>拿到这个组件的实例类型
accountRef.value?.xxx 加一个可选链, 因为 accountRef.value 可能没值

#### vuex 对 typescript 的支持非常差

比如用 store.state.取子模块数据的时候会没有提示
解决方法: 在 vuex 里面导出一个 useStore 方法, 返回 vuex 的 useStore()
在 vuex 的 type 文件里面设置一个接口,把所有模块的类型放进去比如
import { Ilogin } from './module/login/type.ts'
interface IrootAndModule {
login: Ilogin
}
再重新定义一个类型
type Ioot = IrootAndModule & Istore

在 index 文件
import { useStore as useOriginStore } form 'vuex'
export const useStore<Ioot> = () => {
return useOriginStore
}
