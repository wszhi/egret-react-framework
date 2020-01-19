这个项目主要关于微信网页游戏和react集成的框架的。

## 启动项目
安装所有依赖，然后在本地启动。

```sh
npm i 
```

```sh
npm start
```

开发时运行项目前需要创建一个`.env`文件在根目录
如(请各自替换OPEN_ID,CHANNEL_ID)：
```
OPEN_ID=XXXXX
CHANNEL_ID=XXXXX
ACCESS_TOKEN=DEV_ACCESS_TOKEN
```

可能需要清除hardsource cache
```sh
rm -r ./node_modules/.cache/hard-source
```

## 测试
当前项目的单元测试包含以下几个分类
1. 组件测试
2. 通用方法测试: 该测试涵盖utils文件内的文件。

#### 运行测试
npm run test

## Build
运行npm run build:dev来构建本地的项目

## 代码规范
1. 所有的页面和组件都以其目录名来命名，具体实现放在目录内部的index.tsx文件。
2. 所有的页面目录名须小写，所谓页面目录名指：src/pages下的第一层目录。
3. 除页面外的所有组件必须大写。
4. 本项目集成了 tslint 和 prettier 
