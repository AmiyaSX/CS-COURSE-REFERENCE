![Android Camera2 API 架构_初始化](https://s2.51cto.com/images/blog/202112/28010601_61c9f279396a136522.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_30,g_se,x_10,y_10,shadow_20,type_ZmFuZ3poZW5naGVpdGk=)

### 获取设备，设置属性
#### CameraManager类
通过指定的`cameraId`获取系统所有可用camera设备，可指定camera设备属性
属性储存在CameraCharacteristics类中（属性：前置或后置摄像头、输出分辨率等）
```kotlin
//获取CameraManager实例
cameraManager = this.getSystemService(Context.CAMERA_SERVICE) as CameraManager 
```
##### 两个内部回调
1. CameraManager.AvailabilityCallback
>相机设备可用状态发生变化时，回调这个类的 `onCameraAvailable(String cameraId)` 和 `onCameraUnavailable(String cameraId)` 方法。

2. CameraManager.TorchCallback
>相机设备闪光灯的 Torch 模式可用状态发生变化时，回调这个类的 `onTorchModeChanged(String cameraId, boolean enabled)` 和 `onTorchModeUnavailable(String cameraId)` 方法。

##### 内部方法
1. String[] getCameraIdList()：获取当前连接的**相机设备列表**（id从0开始递增，后置摄像头一般为0，前置摄像头一般为1）
2. CameraCharacteristics getCameraCharacteristics(String cameraId)：根据 `cameraId` 获取对应相机设备的特征。返回一个 `CameraCharacteristics`，封装了相机设备固有的所有属性功能
3. void openCamera(String cameraId, final CameraDevice.StateCallback callback, Handler handler)

#### CameraCharacteristics类
- 后置摄像头：常量值为 `CameraCharacteristics.LENS_FACING_FRONT`
- 前置摄像头：常量值为 `CameraCharacteristics.LENS_FACING_BACK`


### 图像数据处理
- 对于捕获的图像数据使用`SurfaceView`或`SurfaceTexture`进行**预览处理**
- 使用`ImageReader`进行**静态图片处理**
- 使用`MediaRecoder`进行视频录制处理

### 数据接收者
#### Surface


## 基础能力
- 预览
	- 重复不间断的拍摄请求
- 拍照、图片保存
- 录制视频、视频保存

## 进阶能力
- 全景照片
- HDR
- 3A算法

:wq
