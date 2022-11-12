c++版本

## 常见提问

1. struct & class
	成员变量和函数：
	struct：默认public
	class：默认private
	内存分配：
	struct：值类型，在栈上分配内存
	class：引用类型，在堆上分配内存

2. 设计单例模式（singleton）
	单线程：
```c++
public class A {
	private A() {} //构造函数私有化
	private static A instance = null;
	
	public static A Instance {
		get{
			if(instance == null) 
				instance = new A();
			return instance;
		}
	}
}
```
	多线程1：
```c++
public class A {
	private A() {} //构造函数私有化
	private static object syncObj = new object();
	private static A instance = null;
	
	public static A Instance {
		get {
			lock(syncObj) { //耗时操作
				if(instance == null) 
				instance = new A();
			}
			return instance;
		}
	}
}
```

## 数据结构

### 数组

1. 找出数组中重复的数字(任意一个)



























