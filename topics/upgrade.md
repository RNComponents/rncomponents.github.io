Upgrade react-native version
---

[Official doc](http://facebook.github.io/react-native/docs/upgrading.html)

运行 `react-native upgrade` 会让你选择是否覆盖原有项目中的文件，这个过程有以下需要注意的点：

1. 就现在从 v0.12.0 => v0.16.0-rc 的经验来看，除了 ${project_name}Tests.m 需要替换之外，其他均可以保留原有文件。
2. 如果没有在 XCode 中引入其他的项目文件或包，所有文件都可以执行替换的操作。
