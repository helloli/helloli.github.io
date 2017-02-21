## 一个支持es6和less的gulp环境

支持的功能有：

- .es6文件通过babel编译生成ES5规范的.js文件
- .less文件编译和压缩生成.min.css文件
- 其他文件会直接copy
- gulp会监听文件变化，进行增量编译

使用说明：

- 在gulpfile.js所在目录下新建名字为es6的文件夹，在es6中编写源代码，运行gulp编译后的代码会生成到amd文件夹中
- 请不要将其他文件夹命名为es6或者amd