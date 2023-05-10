<!--
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-05-06 09:27:47
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-05-10 10:24:52
 * @FilePath: /DailyLearning/demo/2023/react知识点.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 如何理解 React
React是由Facebook开发的JavaScript库，用于构建用户界面。它提供了一种声明式的编程模型，使得开发者可以更加轻松地构建复杂的交互式UI组件。

**React主要的特点包括：**
1. 组件化：React基于组件化的开发模型，将UI界面拆分成多个独立的组件，每个组件都有自己的状态和属性，可以被复用和组合。
2. 虚拟DOM：React采用虚拟DOM技术来提高渲染效率。当组件状态发生变化时，React会在虚拟DOM中计算出最小的DOM操作，然后批量更新实际DOM。
3. 单向数据流：React使用单向数据流的模型来管理组件的状态和属性。组件只能通过props（属性）和回调函数来传递数据，避免了数据的混乱和不可控。
4. JSX语法：React使用JSX语法来描述组件的结构和行为。JSX是一种类似HTML的语法，可以在JavaScript代码中直接使用，使得组件的开发更加直观和简单。

React还有一系列相关的工具和库，如React Router用于实现客户端路由，Redux用于管理应用状态等。React已经成为当今最流行的前端框架之一，被广泛应用于各种Web应用和移动应用的开发中。

### React与Vue的异同

**异同点：**
1. 组件化：React和Vue都是基于组件化的开发模型，将UI界面拆分成多个独立的组件，可以被复用和组合。
2. 虚拟DOM：React和Vue都采用虚拟DOM技术来提高渲染效率。
3. 单向数据流：React和Vue都使用单向数据流的模型来管理组件的状态和属性。
4. 生态系统：React和Vue都有庞大的生态系统，有很多相关的工具和库可以使用。

**不同点：**
1. 语法：React使用JSX语法来描述组件的结构和行为，Vue使用模板语法来描述组件。
2. 学习曲线：相对于Vue，React的学习曲线较陡峭，需要掌握的概念较多。
3. 灵活性：React提供的API较为简洁和灵活，可以自由地组织和管理应用的状态和行为。Vue则提供了一些内置的功能和语法糖，使得开发者可以更加快速地开发应用。
4. 性能：React在渲染大型列表和处理大量数据时表现较为出色，而Vue在渲染中小型应用时表现更好。

### React 生命周期

**老版本**
1. 挂载阶段：
   - constructor(): 初始化组件状态和绑定事件。
   - componentWillMount(): 组件挂载前调用，可以进行一些初始化操作。
   - render():渲染组件结构。
   - componentDidMount():组件挂载到DOM上后调用，可以进行异步数据请求等操作。
2. 更新阶段：
   - componentWillReceiveProps()：组件接收到新的props时调用，可以根据新的props更新组件状态。
   - shouldComponentUpdate()：决定是否需要重新渲染组件，可以优化组件渲染性能。
   - componentWillUpdate()：组件即将更新时调用，可以进行一些操作，如动画效果等。
   - render()：渲染组件结构。
   - componentDidUpdate()：组件更新后调用，可以进行DOM操作等操作。
3. 卸载阶段：
   - componentWillUnmount()：组件卸载前调用，可以进行一些清理工作。
4. 错误处理阶段
   - componentDidCatch()：处理子组件抛出的错误信息，通常用于记录错误信息和显示错误页面。

**新版本**
1. 挂载阶段：
   - constructor(): 初始化组件状态和绑定事件。
   - static getDerivedStateFromProps()：根据props更新组件状态。
   - render():渲染组件结构。
   - componentDidMount():组件挂载到DOM上后调用，可以进行异步数据请求等操作。
2. 更新阶段：
   - static getDerivedStateFromProps()：根据props更新组件状态。
   - shouldComponentUpdate()：决定是否需要重新渲染组件，可以优化组件渲染性能。
   - render()：渲染组件结构。
   - getSnapshotBeforeUpdate()：获取更新前的DOM快照，通常用于处理一些DOM操作。
   - componentDidUpdate()：组件更新后调用，可以进行DOM操作等操作。
3. 卸载阶段：
   - componentWillUnmount()：组件卸载前调用，可以进行一些清理工作。
4. 错误处理阶段
   - static getDerivedStateFromError()：处理子组件抛出的错误信息，更新组件状态。
   - componentDidCatch()：处理子组件抛出的错误信息，通常用于记录错误信息和显示错误页面。

**具体生命周期函数解释**

- **getDerivedStateFromProps：** 是 React 16.3 版本引入的生命周期函数，用于在组件更新前根据新的 props 和当前的 state 计算出一个新的 state，并返回它。它的作用是让组件在接收到新的 props 时能够更新自己的 state，从而重新渲染组件。
```js
    static getDerivedStateFromProps(props, state) {
    // 在这里计算新的 state 并返回它
    // 如果不需要更新 state，则返回 null
    }
```
**优点:**  它可以帮助开发者避免因为 props 改变而导致的一些问题，例如组件的内部状态与 props 不同步。使用这个函数可以在 props 改变时自动更新组件的状态，避免出现一些错误。
**缺点:** 它会增加组件的复杂性，使代码更加难以理解和维护,应该尽量避免使用
- **getDerivedStateFromError：** 帮助我们在组件渲染期间捕获和处理 JavaScript 错误。但是，需要注意的是，它只在开发模式下生效，在生产模式下不会被调用。在生产环境中，应该使用错误边界来处理错误。

### React 状态复用的方式
1. Render Props: 它通过将一个函数作为 prop 传递给组件，从而使组件可以使用该函数来获取状态数据。例如，我们可以编写一个 <Mouse> 组件，该组件将一个函数作为 prop 传递给它，用于获取鼠标的位置。
```jsx
class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

const App = () => (
  <div style={{ height: '100%' }}>
    <Mouse>{({ x, y }) => <p>Mouse position: {x}, {y}</p>}</Mouse>
  </div>
);

```


2. Higher-Order Components（HOC）: 它通过将组件作为参数传递给一个函数，并返回一个新的组件来实现状态复用。例如，我们可以编写一个 withTheme 函数，该函数接受一个组件作为参数，并返回一个新的组件，该组件可以访问主题信息。

    ```jsx
    const withTheme = (Component) => {
    return class WithTheme extends React.Component {
        render() {
        return <Component {...this.props} theme={theme} />;
        }
    };
    };

    const Button = ({ theme }) => (
    <button style={{ backgroundColor: theme.background, color: theme.color }}>
        Click me
    </button>
    );

    const ThemedButton = withTheme(Button);
    ```

1. Props
通过组件的 props 属性传递状态数据，让父组件向子组件传递数据，从而实现状态的复用。这是 React 中最基本的状态复用方式，可以通过 props 实现父组件和子组件之间的通信。

2. Context
使用 React 的 Context 可以实现跨组件的状态共享。Context 是一种在组件树中传递数据的方法，它可以在不经过中间组件的情况下，将数据传递给任何需要它的组件。

3. Redux
Redux 是一个状态管理库，可以在 React 应用程序中使用。通过 Redux，可以将应用程序的状态保存在一个全局的 store 中，这样，所有组件都可以访问和修改这个状态。Redux 可以方便地管理大型应用程序的状态，同时也支持时间旅行等高级特性。

4. useState 和 useReducer
React 16.8 引入了 Hooks，其中包含两个与状态相关的 Hook：useState 和 useReducer。useState 允许在函数式组件中使用状态，而 useReducer 则可以用于更复杂的状态管理场景。通过使用这些 Hook，可以在组件内部管理状态，并避免使用全局状态管理库。
### 如何理解 React Hooks
传统的 React 类组件使用生命周期函数和 this 来处理组件的状态和副作用。但这种方式存在一些问题，例如组件嵌套深度过大时，状态管理变得很困难，而且重复逻辑也很难复用。React Hooks 提供了一种更简单、更直接的方式来处理组件的状态和副作用，让你可以更容易地编写可复用的代码。

使用 React Hooks，你可以在函数组件中使用 state、效果（effects）、上下文（context）和 ref 等 React 特性。Hooks 允许你在不编写 class 组件的情况下将这些特性添加到你的组件中。它们可以让你在组件之间共享状态和行为，使你的代码更易于阅读和测试。

常用的 React Hooks 包括：

useState：让你在函数组件中使用 state。
useEffect：让你在函数组件中处理副作用，例如网络请求、订阅和定时器等。
useContext：让你在函数组件中使用上下文。
useRef：让你在函数组件中使用 ref。
useReducer：让你在函数组件中使用 reducer 模式来管理 state。
useCallback 和 useMemo：用于性能优化，让你可以在函数组件中缓存函数和计算结果。

### 
### React Diff 算法

### React fiber 架构的理解

### react 性能优化的手段

### setState是同步的还是异步的

### React合成事件

### 如何理解虚拟DOM

