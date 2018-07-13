# react-native-demo

## How to use?

### 使用`yarn`:

``` bash
yarn 
react-native link       #link资源文件
yarn start              #先运行项目
yarn run-ios            #在iOS上启动（保证yarn start是在运行中）
yarn run-android        #在Android上启动（保证yarn start是在运行中）
```

### 使用`npm`

``` bash
npm install
react-native link          #link资源文件
npm run start              #先运行项目
npm run run-ios            #在iOS上启动（保证npm run start是在运行中）
npm run run-android        #在Android上启动（保证npm run start是在运行中）
```

## 使用到的第三方库

* [UI toolkit](https://shoutem.github.io/docs/ui-toolkit/components/typography)：开源的React Native的UI库。
* [react-native-elements](https://github.com/react-native-training/react-native-elements)：Cross Platform React Native UI Toolkit。
* [react-native-img-cache](https://github.com/wcandillon/react-native-img-cache)：Image Cache for React Native。
* [react-native-fetch-blob](https://github.com/wkh237/react-native-fetch-blob)：A project committed to making file access and data transfer easier, efficient for React Native developers.使用react-native-img-cache必须用到这个库。
* [eact-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)：Tabbed navigation that you can swipe between, each tab can have its own ScrollView and maintain its own scroll position between swipes. Pleasantly animated. 
* [react-native-snap-carousel](https://github.com/archriss/react-native-snap-carousel)：Swiper component for React Native with previews, multiple layouts, parallax images, performant handling of huge numbers of items, and RTL support. Compatible with Android & iOS.
* [react-navigation](https://github.com/react-navigation/react-navigation)：Routing and navigation for your React Native apps.
* [styled-components](https://github.com/styled-components/styled-components)：Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅.

## 安卓离线打包

### 生成离线bundle包

离线包就是把 ReactNative 和你写的 js文件、图片等资源都打包放入 App ，不需要走网络下载。

首先看一下官方给的参数(中文版)：

``` bash
react-native bundle [参数]
```

参数：
``` bash
    -h, --help                   输出如何使用的信息
    --entry-file <path>          RN入口文件的路径, 绝对路径或相对路径
    --platform [string]          ios 或 andorid
    --transformer [string]       Specify a custom transformer to be used
    --dev [boolean]              如果为false, 警告会不显示并且打出的包的大小会变小
    --prepack                    当通过时, 打包输出将使用Prepack格式化
    --bridge-config [string]     使用Prepack的一个json格式的文件__fbBatchedBridgeConfig 例如: ./bridgeconfig.json
    --bundle-output <string>     打包后的文件输出目录, 例: /tmp/groups.bundle
    --bundle-encoding [string]   打离线包的格式 可参考链接https://nodejs.org/api/buffer.html#buffer_buffer.
    --sourcemap-output [string]  生成Source Map，但0.14之后不再自动生成source map，需要手动指定这个参数。例: /tmp/groups.map
    --assets-dest [string]       打包时图片资源的存储路径
    --verbose                    显示打包过程
    --reset-cache                移除缓存文件
    --config [string]            命令行的配置文件路径
```

接下来,就开始我们的离线包打包命令:

``` bash
react-native bundle --entry-file index.js --platform android --dev false --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/
```

### 用Android Studio 生成签名文件

也可以使用命令打包，有兴趣的可以自己了解下。

点击Android Studio菜单栏中的build，找到“Generate Signed APK”，然后点击“Create New...”创建一个新的签名文件。如果存在一个签名文件可以直接点击“Choose existing...”选择一个已经存在的签名文件。

点击“Create New...”按钮后会有一个弹窗，需要填写如下的信息：

```
Key store path : 签名文件路径
Password : 签名密码
Confirm : 确认密码
Alias : 别名
Validity ( years ) : 有限期 （年）
First and Last Name : 全名
Organizational Unit : 组织单位
Organization : 组织
City or Locality : 城市或地方
State or Province : 州或省
Country Code(XX) : 国家代码
```

填写完上面的信息后回到上一个页面，你填写的信息将会生成一个签名文件。

### 设置gradle变量

编辑`~/.gradle/gradle.properties`文件（没有就创建一个），添加如下代码（其中***对应你自己设置的相应的密码）。
> ~表示用户目录，比如windows上可能是C:\Users\用户名，而mac上可能是/Users/用户名。

``` bash
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

上面的这些会作为全局的gradle变量，我们在后面的步骤中可以用来给应用签名。

### 编辑签名到项目的gradle配置文件

编辑你项目下的`android/app/build.gradle`，添加如下的签名配置：

``` bash
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

### 生成签名APK

在RN项目根目录运行:

``` bash
cd android && ./gradlew assembleRelease     ---生产包
cd android && ./gradlew assembleDebug       ---测试包
```

如果你已经在android目录中了那就不用输入`cd android`了。

> ./gradlew assembleRelease在macOS、Linux或是windows的PowerShell环境中表示执行当前目录下的名为gradlew的脚本文件，且其运行参数为assembleRelease，注意这个./不可省略；而在windows的传统CMD命令行下则需要去掉./。

生成的APK文件位于`android/app/build/outputs/apk/app-release.apk`，它已经可以用来发布了。

也可以通过命令行直接安装到手机上：
``` bash
adb install (apk在PC上的路径/)*.apk
```