---
author: 王耀
---
# lonbon-common-plus 使用文档

## 一、修订历史
|版本号|	更新时间|	作者|	备注|
| :----: | :----: | :----: |:----:|
|V10.1.0|	2024-01-30|	王耀|	接入文档|

## 二、安装插件

```bash
npm i lonbon-common@latest -S
```

::: tip
当前仍使用`lonbon-common`进行安装
:::

## 三、组件介绍

::: tip
以下仅针对vue3版本的内容介绍
:::

### 1、全局组件

说明：无需引入，直接使用

#### lp-header 搜索筛选

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  | show-action | 是否显示搜索、重置按钮组 | Boolean | true |
- 事件：
  | 事件名 | 说明 | 回调参数 |
  | ------------- | :----: | :----: |
  | search | 点击搜索按钮时触发 | 无 |
  | reset | 点击重置按钮时触发 | 无 |

#### lp-field 搜索筛选字段

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |label |标签文本| String| 空|
  |label-suffix| 标签文本的后缀| String |空|

#### lp-row 左右布局

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |left-width |左侧区域宽度，如 25em |String| 16.6429em|
  |show-left-border |是否显示左侧区域边框| Boolean |true|
  |show-left |是否显示左侧区域、展开 1/收起 2/完全隐藏 0|Number | 1|

- 事件：
  | 事件名 | 说明 | 回调参数 |
  | ------------- | :----: | :----: |
  |show-left-change |左侧区域变化时触发|show-left 值|

#### lp-mini-pager 迷你分页器

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |page-size| 每页条数| Number |10|
  |total| 总条数 |Number| 0|
  |current-page| 当前页数| Number| 1|

- 事件：
  | 事件名 | 说明 | 回调参数 |
  | :----: | :----: | :----: |
  | current-change | `current-page` 改变时触发 | `current-page` 值 |

#### lp-export 导出

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |max |最大导出数量 |Number| 500|
- 方法：
  | 方法名 | 说明 | 回调参数 |
  | :----: | :----: | :----: |
  |open| 打开导出弹框| 无|
- 事件：
  | 事件名 | 说明 | 回调参数 |
  | :----: | :----: | :----: |  
  |download-excel| 点击确定导出时触发| 开始序号, 导出条数|

#### lp-search 远程搜索下拉选

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |disabled| 是否禁用| Boolean| false|
  |placeholder| 占位文本| String| 空|
  |request| 接口请求函数| Function| null|
  |model-value| 绑定值| Object| {}|
  |props| 配置选项 |Object| `{ label, value }`|
- 事件：
  | 事件名 | 说明 | 回调参数 |
  | :----: | :----: | :----: |  
  |change| model-value 改变时触发| modelValue 值|

#### lp-subtle 脱敏输入框

- 属性：
  | 属性名 | 说明 | 类型 | 默认值 |
  | :---------: | :---------------------------------------------------: | :-----: | :------: |
  | disabled | 是否禁用 | Boolean | false |
  | model-value | 绑定值 | String | 空 |
  | type | 类型：手机号 telphone/座机号 fixphone/身份证号 idcard | String | telphone |

#### lp-tree 树形控件

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |show-checkbox |是否显示复选框| Boolean |false|
  |check-half |是否将半选转换成勾选| Boolean |false|
  |request |接口请求函数 |Function| null|
  |props| 配置选项 |Object |`{ children, label, key, disabled, suffix, icon}`|

- 方法：
  | 方法名 | 说明 | 回调参数 |
  | :----: | :----: | :----: |  
  |init| 初始化| 无|
  |getData |展示数据 |无|
  |getCheckedKeys|获取勾选项 key 值|无|
  |getCheckedNodes| 获取勾选项| 无|
  |setCheckedKeys |设置勾选项 |keys 数组|
  |setDisabledKeys| 禁用勾选项 |keys 数组，禁用/启用|
  |getCurrentNode| 获取选中项| 空|
  |setCurrentKey| 设置选中项| key 值|
  |setFirst| 设置第一个数据为选中项| 无|
- 事件：
  | 事件名 | 说明 | 回调参数 |
  | :----: | :----: | :----: |  
  |node-expand |节点展开时触发 当前节点数据 |data|
  |node-click| 节点点击时触发 当前节点数据| data|

### 2、应用组件

说明：引入方式为 lonbon-common/plus/components/\*\*.vue

#### addressCascader 行政区域级联

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |disabled |是否禁用 |Boolean| false|
  |placeholder| 占位文本|String |空|
  |request |接口请求函数| Function| v1.0 接口|
  |auto-load |初始化时加载 true、点击时加载 false| Boolean| true|
  |free-check4| 第 4 级是否显示 暂不选择 |Boolean| true|
- 方法：

  |  方法名  |                   说明                   |         回调参数         |
  | :------: | :--------------------------------------: | :----------------------: |
  |   init   |                  初始化                  | `{regionId, regionDesc}` |
  |  reset   |                   重置                   |            无            |
  | getReset | 获取行政区域结果`{regionId, regionDesc}` |            无            |

- 事件：

  | 事件名 |        说明        |         回调参数         |
  | :----: | :----------------: | :----------------------: |
  | change | 行政区域改变时触发 | `{regionId, regionDesc}` |

#### addressSelect 行政区域下拉选（横向）

- 属性：

  |   属性名    |     说明     |   类型   |  默认值   |
  | :---------: | :----------: | :------: | :-------: |
  |  show-town  | 是否显示乡镇 | Boolean  |   true    |
  | show-county | 是否显示区县 | Boolean  |   true    |
  |  show-city  |  是否显示市  | Boolean  |   true    |
  |   request   | 接口请求函数 | Function | v1.0 接口 |

- 方法：

  |  方法名  |                   说明                    | 回调参数 |
  | :------: | :---------------------------------------: | :------: |
  |   init   |           初始化 regionIds 数组           |    无    |
  |  reset   |                   重置                    |    无    |
  | getReset | 获取行政区域结果 `{regionId, regionDesc}` |    无    |

- 事件：

  | 事件名 |                     说明                     | 回调参数 |
  | :----: | :------------------------------------------: | :------: |
  | change | 行政区域改变时触发 `{regionId, regionDesc} ` |    无    |

#### addressSelect2 行政区域下拉选（竖向）
- 同上

#### uploadFile 文件上传

- 属性：

  |   属性名    |           说明           |   类型   |       默认值       |
  | :---------: | :----------------------: | :------: | :----------------: |
  |    title    |           标题           |  String  |        附件        |
  |     max     |     文件上传最大数量     |  Number  |         2          |
  |  max-size   |     文件上传最大尺寸     |  Number  |        20M         |
  |   request   |       接口请求函数       | Function |     v1.0 接口      |
  |  disabled   |         是否禁用         | Boolean  |       false        |
  | format-list | 支持的格式列表，详见代码 |  Array   | 文件、视频、音频等 |

- 方法：

  |      方法名       |                 说明                 |                 回调参数                  |
  | :---------------: | :----------------------------------: | :---------------------------------------: |
  |       init        |                初始化                | 非必填，文件数组`[{attname, remotePath}]` |
  |       reset       |                 重置                 |                    无                     |
  |     getReset      |       获取文件上传结果，含文件       |                    无                     |
  |  getSimpleResult  |      获取文件上传结果，不含文件      |                    无                     |
  | getUploadedResult | 获取已上传服务器的文件结果，不含文件 |                    无                     |

- 事件：

  | 事件名 |                   说明                    | 回调参数 |
  | :----: | :---------------------------------------: | :------: |
  | change | 文件上传结果集改变时触发 文件上传的结果集 |    无    |

#### uploadFile2 文件上传（特殊）

- 属性：

  |   属性名    |           说明           |   类型   |       默认值       |
  | :---------: | :----------------------: | :------: | :----------------: |
  |    title    |           标题           |  String  |        附件        |
  |  max-size   |     文件上传最大尺寸     |  Number  |        20M         |
  |   request   |       接口请求函数       | Function |     v1.0 接口      |
  |  disabled   |         是否禁用         | Boolean  |       false        |
  | format-list | 支持的格式列表，详见代码 |  Array   | 文件、视频、音频等 |
  | name-label  |       名称列表头名       |  String  |        名称        |
  |  att-label  |       文件列表头名       |  String  |        文件        |

- 方法：
  | 方法名 | 说明 | 回调参数 |
  | :---------------: | :----------------------------------: | :---------------------------------------: |
  |init |初始化 非必填，文件数组`[{attname, remotePath}]`|
  |reset |重置 |无|
  |getReset |获取文件上传结果，含文件| 无|
  |getSimpleResult |获取文件上传结果，不含文件 |无|
- 事件：
  | 事件名 | 说明 | 回调参数 |
  | :----: | :---------------------------------------: | :------: |
  |change| 文件上传结果集改变时触发 文件上传的结果集|无|

#### uploadImage 图片上传

- 属性：

  |  属性名   |             说明             |   类型   |  默认值   |
  | :-------: | :--------------------------: | :------: | :-------: |
  | auto-load | 自动上传 true/手动上传 false | Boolean  |   true    |
  |    max    |       文件上传最大数量       |  Number  |    10     |
  |  request  |         接口请求函数         | Function | v1.0 接口 |
  | disabled  |           是否禁用           | Boolean  |   false   |
  |   width   |           图片宽度           |  String  |    8em    |
  |  height   |           图片高度           |  String  |    8em    |

- 方法：

  |      方法名       |                 说明                 |                 回调参数                  |
  | :---------------: | :----------------------------------: | :---------------------------------------: |
  |       init        |                初始化                | 非必填，文件数组`[{attname, remotePath}]` |
  |       reset       |                 重置                 |                    无                     |
  |     getResult      |       获取文件上传结果，含文件       |                    无                     |
  |  getSimpleResult  |      获取文件上传结果，不含文件      |                    无                     |
  | getUploadedResult | 获取已上传服务器的文件结果，不含文件 |                    无                     |

- 事件：
  | 事件名 | 说明 | 回调参数 |
  | :----: | :---------------------------------------: | :------: |
  |change| 文件上传结果集改变时触发 |文件上传的结果集|

#### uploadPoster 头像上传

- 属性：

  |   属性名    |     说明     |   类型   |  默认值   |
  | :---------: | :----------: | :------: | :-------: |
  | model-value | 文件远程路径 |  String  |    空     |
  |   request   | 接口请求函数 | Function | v1.0 接口 |

- 事件：

  | 事件名 |           说明           |     回调参数     |
  | :----: | :----------------------: | :--------------: |
  | change | `model-value` 改变时触发 | `model-value` 值 |

#### mapSearch 地图选点

- 属性

  |  属性名  |   说明   |  类型   | 默认值 |
  | :------: | :------: | :-----: | :----: |
  |  title   |   标题   | String  |  查找  |
  | disabled | 是否禁用 | Boolean | false  |

- 方法：

  | 方法名 |    说明    |             回调参数             |
  | :----: | :--------: | :------------------------------: |
  |  init  | 初始化组件 | 地图点信息`{lng, lat, coordsys}` |

- 事件：

  | 事件名 |        说明        |    回调参数    |
  | :----: | :----------------: | :------------: |
  | change | 点击确定按钮时触发 | 地图所选点信息 |

#### voicePlayer 音频播放

- 属性：
  | 属性名 | 说明 | 类型 |默认值 |
  | :----: | :----: | :----: |:----:|
  |voice-url| 音频文件路径| String |空|
  |error-msg| 错误提示语| String |当前音频文件不存在，请稍后再试|
- 方法：

  | 方法名 |   说明   | 回调参数 |
  | :----: | :------: | :------: |
  | doPlay | 开始播放 |    无    |
  | doStop | 结束播放 |    无    |

- 事件：

  |   事件名   |        说明        | 回调参数 |
  | :--------: | :----------------: | :------: |
  | voice-play | 音频开始播放时触发 |    无    |

## 四、指令介绍

### 1、全局指令

- v-integer 整数
  :::tip
    v-integer="'allowZero'" 表示可输入 0
  :::
- v-decimal 小数

## 五、公共方法

### 1、工具方法

使用方式如下：

```js
import { useCommonUtil } from 'lonbon-common/plus';
const { $setTimeout } = useCommonUtil();
```

- $setTimeout 异步定时器
- $LonbonConfirm 二次确认框
- $trim 去除空格
- $formatMoney 格式化金额
- $queryUrlParams 解析 url 中的参数
- $jsonToUrlParams json 对象转换为 url 中的参数
- $getPathFileName 根据路径获取文件名（不含后缀名）
- $transTime 转换时间，精确到秒或分钟
- $countDuration 计算时长
- $getSearchTime 获取当前日期和前一个月日期的时间戳
- $compareToday 计算时间戳距离今天的
- $formatSeconds 将秒转化为 00:00:00
- $formatSeconds1 将秒转化为时分秒
- $DealIdcard 身份证号脱敏
- $DealTelphone 手机号码脱敏
- $DealFixphone 固定电话脱敏
- $getInfoByIdentity 身份证号解析
- $toTree 数组数据转树形数据
- $toTimestamp 字符串转时间戳
- $GenderUtil 性别转换工具方法
- $formatFile 文件路径格式化
- $getRouteName 获取路由路径全称
- $convertFrom 地图坐标转换
- $calc 浮点计算
- $showLoading 显示弱加载提示
- $hideLoading 隐藏弱加载提示
- $getAlarmDuration 计算已处理报警的响应时间
- $dealPosition 处理位置信息
- $dealAlarmInfo 处理报警信息
- $dealTrackInfo 处理轨迹信息
- $dealMeasure 处理测量数据
- $checkGpsIsDetail 判断是否为精确定位
- $checkForbidCenterDeal 判断是否禁止守护中心处理
- $checkActiveHeartError 判断是否为非静止（活动）状态下触发的心率异常报警

### 2、校验方法

- 使用方式如下

```js
import { useValidateUtil } from 'lonbon-common/plus';
const { $validate } = useValidateUtil();

const rules = ref({
	phone: [
		{ validator: $validate.empty, trigger: 'blur' },
		{ validator: $validate.phone, trigger: 'blur' },
	],
});
```

- $validate.empty 空值校验
- $validate.special 特殊字符校验
- $validate.decimal 小数校验
  - rule.max 整数最大位数，默认 8
  - rule.precisionMax 小数最大位数，默认 1
  - rule.allowZero 是否可输入 0，允许 true / 不允许 false，默认 false
- $validate.integer 整数校验
  - rule.max 最大位数，默认 8
  - rule.allowZero 是否可输入 0，允许 true / 不允许 false，默认 false
- $validate.phone 手机号校验
- $validate.fixphone 固定电话校验
- $validate.idcard 身份证校验
  - rule.identityType 身份证类型，大陆 0 / 香港 1 / 澳门 2 / 台湾 3，默认 0
- $validate.username 用户名校验
- $validate.password 密码校验

### 3、应用 hooks

- 列表查询

```js
import { useListHook, useSearchTime } from 'lonbon-common/plus';

const searchTime = useSearchTime({ searchForm, timeType: 'month'})
const { beginDateChange, endDateChange, disabledDate } = searchTime

const searchTime2 = useSearchTime({ searchForm, timeType: 'date', keys: ['startT2', 'endT2', 'startTime2', 'endTime2'] })
const { beginDateChange2, endDateChange2, disabledDate2 } = searchTime2

const { page, limit, total, tabLoading, dataList, selectList, beginDateChange, endDateChange, disabledDate, getNo, resetList, searchList, loadList, handleSelectionChange, handleSizeChange, handleCurrentChange, sortChange } = useListHook({
  size: 20,
  searchForm,
  searchTime: [searchTime, searchTime2],
  url: '/api/v3.0/integrate/inventory/warehouse',
  beforeRequest(e) {
    e.startTime = moment(e.startT).format('YYYY-MM');
    e.endTime = moment(e.endT).format('YYYY-MM');
    return e;
  },
  afterRequest(e) {},
});
```

- axios 请求相关

```js
import { useAxiosHook } from 'lonbon-common/plus';
const { $axios, $cancelRequest, $appRequest } = useAxiosHook();
```

- tab 选项卡相关

```js
import { useRouterHook } from 'lonbon-common/plus';
const { removeCurrentTab, routerPush } = useRouterHook();

function openTab() {
	routerPush({
    title, //打开新的选项卡时必传
    path, //路由地址
    app, //子应用名称，不传默认当前子应用
    query //携带参数
  })
}
function closeTab() {
	removeCurrentTab(() => {
		routerPush({
			app: 'microcivil',
			path: '/communityElder',
			query: {
				a: 1,
				b: 2,
			},
		});
	});
}
```

- websocket 推送相关

```js
import { useSocketHook } from 'lonbon-common/plus';
const { onSocketData } = useSocketHook();
onSocketData(e => {
	console.log(e);
});
```

- 呼叫中心相关

```js
import { useCallHook } from 'lonbon-common/plus';
const { onCallData, onCallPhone, callInstance, callPhone } = useCallHook();
onCallData(e => {
	console.log(e);
});
onCallPhone(e => {
	console.log(e);
});
```

## 五、项目配置示例

```js
import { createApp } from 'vue'
import App from './App.vue'
import { useAppMessages } from './assets/langs'
import { useAppRoutes } from './assets/routers'
import { useMicroComponents } from './assets/micros'
import { useAppRequests } from './assets/requests'
import { createAxiosPlus, createRouterPlus, createI18nPlus, createDirectivePlus, createGlobalComponent } from 'lonbon-common/plus'
import "lonbon-common/plus/styles/index.scss"
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

let app = null
function render(props = {}) {
    const { store } = props;
    app = createApp(App)
    app.config.warnHandler = () => null
    app.config.globalProperties.$store = store
    app.use(createRouterPlus(), {
        routePrefix: window.__MICRO_APP_BASE_ROUTE__ || '', 
        routes: useAppRoutes,
        micros: useMicroComponents
    })
    app.use(createI18nPlus(), {
        messages: useAppMessages
    })
    app.use(createAxiosPlus(), {
        baseURL: sessionStorage.cmsURL,
        requests: useAppRequests
    })
    app.use(createDirectivePlus())
    app.use(createGlobalComponent())
    app.use(ElementPlus, {
        locale: zhCn,
        zIndex: 3000
    })
    app.use(Viewer);
    app.mount('#app');
}

if (window.__MICRO_APP_ENVIRONMENT__) {
    window.mount = () => {
        window._ = window.rawWindow._
        window.$ = window.rawWindow.$
        window.AMap = window.rawWindow.AMap
        window._AMapSecurityConfig = window.rawWindow._AMapSecurityConfig
        window._globalProperties = window.rawWindow._globalProperties
        window.accountStorage = window.rawWindow.accountStorage
        const props = window.microApp.getData()
        render(props);
    }
    window.unmount = () => {
        app.unmount()
        app._container.innerHTML = ''
        app = null
    }
    window.microApp.addDataListener(async ({action, data}) => {
        if(action == 'Route') {
            const router = app.config.globalProperties.$router
            router.replace(data)
            return
        }
    })
} else {
    render()
}
```