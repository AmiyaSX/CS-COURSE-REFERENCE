单向数据流：View>Intent>Model>View
- ui不可直接修改viewModel中的值
![img](https://xys-1253307762.cos.ap-shanghai.myqcloud.com/blog/2020/1w0QeeQqrnISXLhYkYZWoAg.png)
- 保持viewState的不可改变性。不修改viewState的同一个实例，而要修改它的副本。