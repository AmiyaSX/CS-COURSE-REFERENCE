### 属性初始化
1. 在类声明中直接为变量赋值；
2. 在初始化块中初始化：
	```kotlin
	class LoginFragment : Fragment() {
	    val index: Int   
	     
	    init {       
		     index = 12   
	     }
	}
	```
3. 延迟初始化：
	在 Kotlin 中，必须在==声明对象时==初始化对象的属性，使用 `lateinit` 推迟属性初始化
```kotlin
class LoginFragment : Fragment() { 

	private lateinit var usernameEditText: EditText    
	private lateinit var passwordEditText: EditText    
	private lateinit var loginButton: Button    
	private lateinit var statusTextView: TextView   
	 
	override fun onViewCreated(view: View, savedInstanceState: Bundle?) {    
		super.onViewCreated(view, savedInstanceState)      
		  
		usernameEditText = view.findViewById(R.id.username_edit_text)       
		passwordEditText = view.findViewById(R.id.password_edit_text)        
		loginButton = view.findViewById(R.id.login_button)        
		statusTextView = view.findViewById(R.id.status_text_view)    
	}    
	...
}
```
### 伴生对象
> 用于定义在概念上与某个类型相关但不与某个特定对象关联的变量或函数。

类似于对变量和方法使用 Java 的 `static` 关键字。

### 属性委托

通过属性委托初始化属性，实现在整个应用中的对象复用机制

机制：反射（性能开销大）

```kotlin
//template
class Example {
    var p: String by Delegate()
}

//example
private val viewModel: LoginViewModel by viewModels()
```
在 `by`后面的表达式是委托， 属性对应的 `get()`与 `set()`会被委托给它的 `getValue()` 与 `setValue()` 方法
属性的委托不必实现任何的接口，但是需要提供一个 `getValue()` 方法（对于 _var_ 属性还要提供 `setValue()`方法）

#### Lazy properties
第一次使用到变量时才进行初始化，即进入`lazy`块：
```kotlin
val lazyValue: String by lazy {
    println("computed!")
    "Hello"
}
```

#### observable properties
监听器会收到有关此属性变更的通知：
```kotlin
class User {
	//Delegates.observable(初始值) { 修改时处理程序（handler） }
    var name: String by Delegates.observable("name") {
	    //闭包的三个参数：被赋值的属性、旧值与新值：
        prop, old, new ->
        println("$old -> $new")
    }
}
```

### Kotlin协程

#### 作用域构建器
- runBlocking 方法：阻塞当前线程来等待
- coroutineScope 方法：挂起，释放底层线程用于其他用途

外部协程直到在其作用域中启动的所有协程都执行完毕后才会结束。

#### 结构化的并发
>在执行操作所在的指定作用域内启动协程

可以有效防止资源消耗，协程完成任务后就释放资源。而不是像通常使用线程（线程总是全局的）那样在 [GlobalScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-global-scope/index.html) 中启动

reference: [Kotlin Develop.doc](https://www.kotlincn.net/docs/reference/android-overview.html)

