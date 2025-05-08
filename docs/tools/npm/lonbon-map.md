---
author: 王耀
---
# lonbon-map 使用文档

## 一、修订历史
|版本号|	更新时间|	作者|	备注|
| :----: | :----: | :----: |:----:|
|v1.1.50|	2024-04-03|	王耀|	接入文档v1.1.50|
|v1.1.56|	2024-10-18|	王耀|	1、增加Image图片管理<br>2、增加常见错误码<br>3、`createMap`增加`onHttpResponse`回调|
|v1.1.57|	2024-10-23|	王耀|	兼容莱迅地图，扩展`重置视角`方法|


## 二、使用插件
### 1、安装
```bash
npm i lonbon-map@latest -S
```
### 2、引入
- 说明：引入后挂载在`window`对象中，通过`window.lbmap`即可访问
```js
import 'lonbon-map'
```

## 三、全局地图对象API
### 1、注册地图服务
- 说明：创建地图实例前需要先注册
```js
await lbmap.registerMap(object)
```
- 参数：object
  | 属性名 | 类型 | 必填 |说明 | 
  | :----: | :----: | :----: |:----:|
  |server| String| 是 | 地图服务器地址|
  |token| String| 是| 访问令牌，由对接方服务端提供并维护|
  |appId| String| 否| 登录账号，仅可调试时使用|
  |appSecret| String| 否| 登录密码，仅可调试时使用|
  |resource| String |否| 静态资源路径，仅可调试时使用|
- 返回结果：无

### 2、创建地图实例
```js
this.map = await lbmap.createMap(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |container|String|是|绑定dom节点id|
    |defaultViewport|	Object	|是	|默认视图，详见参数defaultViewport|
    |show3Dimension|	Boolean	|否	|true显示3D，false显示2D，默认值true|
    |background|	String|	否|	背景图，可传色号或图片url|
    |enableZoomController|	Boolean|	否|	是否显示缩放控件，默认true|
    |enableFullscreenController|	Boolean|	否|	是否显示全屏控件，默认true|
    |enableDimensionController|	Boolean|	否|	是否显示3D控件，默认true|
    |onInitSuccess|	Function|	否|	初始化成功回调函数|
    |onInitFail|	Function|	否|	初始化失败回调函数，可参照`常见错误码`|
    |onSingleClick|	Function|	否|	单击地图事件回调函数|
    |onHttpResponse|	Function|	否|	接口请求响应回调函数|

- 返回结果：地图实例
- 参数：defaultViewport
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |spaceId|	String|	是|	当前楼栋ID|
    |floor|	String|	是|	当前楼层ID|
    |minZoom|	Number|	否|	地图最小缩放值,取值0-24，默认18|
    |maxZoom|	Number|	否|	地图最大缩放值,取值0-24，默认24|


### 3、刷新token
- 说明：用于token失效时使用，一般由对接方服务端检测到token失效后通知前端刷新token
```js
lbmap.refreshToken(token)
```
- 参数：token
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |token|	String|	是|	访问令牌，由对接方服务端提供并维护|

  
## 四、常用地图实例API
::: tip
以下API兼容自研地图、莱迅地图
:::

### 1、更新地图（切换楼栋楼层）
```js
let result = await this.map.updateViewport(object)
```
- 参数：object，详见参数defaultViewport
- 返回结果：true成功/false失败

### 2、重置视角
```js
this.map.reset()
```

### 3、创建图层
```js
this.map.addLayer(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |id|	String|	是|	图层ID，用于图层更新和删除|
    |type|	String|	否|	图层类型，默认 'overlay'<br>可选值：<br>'overlay' 常用自定义点标记<br>'popup' 弹框<br>'line' 折线<br>'geojsonEditor' 可编辑的多边形<br>'polygon' 不可编辑的多边形|
    |anchor|	String|	否|	点标记锚点，默认'bottom'<br>`适用于type为 'overlay'时`|
    |longitude|	String|	否|	坐标经度<br>`适用于type为 'overlay'或'popup' 时`|
    |latitude|	String|	否|	坐标纬度<br>`适用于type为 'overlay'或'popup' 时`|
    |floor|	String|	否|	图层所在楼层，与当前地图楼层不匹配时不会渲染该图层<br>`适用于type为 'overlay'时`|
    |children|	String|	否|	图层展示内容，可传入html<br>`适用于type为 'overlay'或'popup' 时`|
    |mode|	Number|	否|	可编辑的多边形的显示模式，<br>可选值：<br>1 预览模式<br>2 新增模式<br>3 编辑模式<br>`适用于type为 'geojsonEditor'时`|
    |data|	Array|	否|	图层展示geojson数据<br>`适用于type为 'line'或'geojsonEditor' 或'polygon'时`|
    |onEdit|	Function|	否|	图层展示数据更新事件<br>`适用于type为 'geojsonEditor'时`|
    |getColor|	String|	否|	图层颜色，可传入色号<br>`适用于type为 'line'或'polygon'时`|
    |getWidth|	Number|	否|	图层宽度<br>`适用于type为 'line'时`|
    |getElevation|	Number|	否|	图层高度<br>`适用于type为 'polygon'时`|
    |animation|	Boolean/Number|	否|	图层坐标更新时的动画效果，默认false，<br>可选值：<br>true 开启动画效果，动画时间2000ms<br>false 关闭动画效果<br>number 动画时间<br>`适用于type为 'overlay'时`|


### 4、更新图层
```js
this.map.updateLayer(object)
```
- 参数：创建图层

### 5、删除图层
```js
this.map.removeLayer(id)
```
- 参数：图层id，同创建图层 的图层id

## 五、更多地图实例API
::: tip
以下API仅支持自研地图
:::

### 1、Marker点标记管理
#### 创建点标记
```js
this.map.createMarker(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	否|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |content|	String|	是|	展示内容，可传入html|
    |position|	Array|	是|	坐标经纬度，如：[117.30141069116291, 31.814799894745548]|
    |positionType|	String|	否|	坐标类型，默认'lnglat'，<br>可选值：<br>'lnglat' 经纬度<br>'pixel' 地图视口的像素点|
    |minZoom|	Number|	否|	最小缩放显示，小于该值不显示|
    |maxZoom|	Number|	否|	最大缩放显示，大于该值不显示|

- 返回结果：点标记实例
#### 更新点标记
```js
this.map.updateMarker(object)
```
- 参数：同上创建点标记
#### 获取点标记
```js
this.map.getMarker(lbid)
```
- 参数：lbid 点标记唯一标识
#### 删除点标记
```js
this.map.removeMarker(lbid)
```
- 参数：lbid 点标记唯一标识
#### 清空所有点标记
```js
this.map.clearMarker()
```

### 2、3D模型管理
#### 创建3D模型
```js
this.map.createModel(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	否|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |url|	String|	是|	模型路径地址|
    |objType|	String|	否|	模型类型，默认'gltf'，<br>可选值：<br>'gltf'<br>'fbx'<br>'mtl'<br>`建议使用gltf模型`|
    |objMtl|	String|	否|	模型材质路径地址|
    |position|	Array|	是|	坐标经纬度，如：[117.30141069116291, 31.814799894745548]|
    |positionType|	String|	否|	坐标类型，默认'lnglat'，<br>可选值：<br>'lnglat' 经纬度<br>'pixel' 地图视口的像素点|
    |scale|	Array|	否|	缩放比例，如：[1,1,1]|
    |rotation|	Array|	否|	旋转角度，如：[90,90,90]|
- 返回结果：3D模型实例
#### 获取3D模型
```js
this.map.getModel(lbid)
```
- 参数：lbid 唯一标识
#### 删除3D模型
```js
this.map.removeModel(lbid)
```
- 参数：lbid 唯一标识
#### 清空所有3D模型
```js
this.map.clearModel()
```

### 3、Popup弹出窗口管理
#### 创建弹出窗口
```js
this.map.createPopup(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	否|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |content|	String|	是|	展示内容，可传入html|
    |position|	Array|	是|	坐标经纬度，如：[117.30141069116291, 31.814799894745548]|
    |positionType|	String|	否|	坐标类型，默认'lnglat'，<br>可选值：<br>'lnglat' 经纬度<br>'pixel' 地图视口的像素点|
- 返回结果：3D模型实例
#### 更新弹出窗口
```js
this.map.updatePopup(object)
```
- 参数：同上创建弹出窗口
#### 获取弹出窗口
```js
this.map.getPopup(lbid)
```
- 参数：lbid 弹出窗口唯一标识
#### 删除弹出窗口
```js
this.map.removePopup(lbid)
```
- 参数：lbid 弹出窗口唯一标识
#### 清空所有弹出窗口
```js
this.map.clearPopup()
```

### 4、Polygon多边形管理
#### 创建多边形
```js
this.map.createPolygon(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	否|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |data|	Array|	是|	geojson数据|
    |base|	Number|	否|	基础高度，默认0，相对于地面的高度|
    |height|	Number|	否|	模型高度，默认2，模型的拉伸高度|
    |color|	String|	否|	颜色色号，默认'#F0A4B0'|
    |opacity|	Number|	否|	颜色透明度，默认0.8|
- 返回结果：Polygon多边形实例
#### 获取多边形
```js
this.map.getCustom(lbid)
```
- 参数：lbid 唯一标识
#### 删除多边形
```js
this.map.removeCustom(lbid)
```
- 参数：lbid 唯一标识

### 5、Line折线管理
#### 创建折线
```js
this.map.createLine(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	否|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |data|	Array|	是|	geojson数据|
    |width|	Number|	否|	折线宽度，默认4|
    |color|	String|	否|	颜色色号，默认'#F0A4B0'|
- 返回结果：3D模型实例
#### 获取折线
```js
this.map.getCustom(lbid)
```
- 参数：lbid 唯一标识
#### 删除折线
```js
this.map.removeCustom(lbid)
```
- 参数：lbid 唯一标识

### 6、Arrow箭头折线管理
#### 创建箭头折线
```js
this.map.createArrow(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	否|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |data|	Array|	是|	geojson数据|
    |spacing|	Number|	否|	箭头间隔距离，默认50|
    |size|	Number|	否|	箭头图标大小，默认0.5|
    |rotate|	Number|	否|	箭头旋转角度，默认0|
- 返回结果：Arrow箭头折线实例
#### 获取箭头折线
```js
this.map.getCustom(lbid)
```
- 参数：lbid 唯一标识
#### 删除箭头折线
```js
this.map.removeCustom(lbid)
```
- 参数：lbid 唯一标识

### 7、Image图片管理
#### 创建图片
```js
this.map.createImage(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	否|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |data|	Array|	是|	geojson数据|
    |url|	String|	是|	图片url|
- 返回结果：Image图片实例
#### 更新图片
```js
this.map.updateImage(object)
```
- 参数：object
    | 属性名 | 类型 | 必填 |说明 | 
    | :----: | :----: | :----: |:----:|
    |lbid|	String|	是|	唯一标识，不传默认会随机生成，可用于更新获取和删除|
    |data|	Array|	是|	geojson数据|
#### 获取图片
```js
this.map.getCustom(lbid)
```
- 参数：lbid 唯一标识
#### 删除图片
```js
this.map.removeCustom(lbid)
```
- 参数：lbid 唯一标识

### 7、地图管理
#### 切换3D/2D视角
```js
let view = this.map.transView()
```
- 参数：无
- 返回结果：切换后的当前视角
#### 自适应缩放
```js
this.map.fitBounds()
```
#### 销毁
```js
this.map.destroy()
```

## 六、地图服务API
### 1、地图数据相关
#### 获取所有楼栋楼层树型数据
```js
let result = await lbmap.requestMap.loadTree()
```
#### 获取所有楼栋数据
```js
let result = await lbmap.requestMap.loadSpace()
```
#### 获取指定楼栋下所有楼层数据
```js
let result = await lbmap.requestMap.loadFloor(spaceId)
```
#### 获取指定楼层数据
```js
let result = await lbmap.requestMap.getFloorById(floorId)
```
#### 搜索指定楼层下的所有区域数据
```js
let result = await lbmap.requestMap.searchAddress({ areaName, floorId })
```
#### 搜索指定楼层下的坐标所在区域数据
```js
let result = await lbmap.requestMap.searchPoint({ longitude, latitude, floorId })
```

### 2、地图工具相关
#### 路径导航
```js
let result = await lbmap.requestMap.navigation({strategy, points})
```

## 七、常见错误码

| 错误码 | 释义 | 
| :----: | :----: |
| 10001 | 浏览器版本过低，请升级最新版本 |
| 10002 | 接口请求失败 |
| 10003 | 接口请求异常或超时 |
| 20001 | 注册失败，未配置地图服务 |
| 20002 | 注册失败，未获取到地图服务token |
| 30001 | 地图加载失败，访问地址或token有误 |
| 30002 | 地图加载失败，未获取到地图配置信息 |
| 30003 | 地图加载失败，地图状态异常 |
| 30004 | 地图加载失败，未获取到地图图层信息 |
| 30005 | 地图加载失败，defaultViewport不存在 |
| 30006 | 地图加载失败，当前楼层不存在 |
| 30004 | 地图加载失败，未获取到地图图层信息 |
| 30007 | 地图加载失败，地图初始化异常（莱迅） |
| 30008 | 地图加载失败，地图初始化异常!（自研） |
| 40001 | 轨迹查询参数不全 |
| 40002 | 未查询到轨迹数据 |
| 40003 | 轨迹数据有误 |