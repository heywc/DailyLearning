<!--
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-05-06 09:27:47
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-06-16 13:32:10
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

### React Diff 算法

React Diff 算法是 React 在进行虚拟 DOM 对比时使用的一种算法，用于找出前后两个虚拟 DOM 树之间的差异，并将这些差异应用到真实的 DOM 上，以完成页面的更新。

React Diff 算法的基本思想是尽量减少 DOM 操作的数量，只对真正需要更新的部分进行操作，以提高性能。它通过以下步骤来进行对比和更新：

- 比较树的根节点：首先，React Diff 算法会比较前后两个虚拟 DOM 树的根节点，如果它们类型不同，说明整个树需要被替换，React 会创建一个新的树并完全替换原来的树。

- 比较子节点：如果根节点的类型相同，React 会对比它们的子节点。React Diff 算法会使用一种称为 "key" 的特殊属性来匹配和排序子节点。在对比子节点时，React Diff 算法会尽可能地复用已有的 DOM 节点，减少 DOM 操作。

- 递归对比子节点：对比子节点时，React Diff 算法会使用一种深度优先的递归方式，对比每个子节点及其子树。React Diff 算法会根据节点的 "key" 属性来判断节点的增、删、移动等操作，以确定需要进行的 DOM 操作。

- 更新差异：在对比过程中，React Diff 算法会记录下需要进行的 DOM 操作，例如插入、删除、替换、移动等。然后，React 会将这些操作批量应用到真实的 DOM 上，以完成页面的更新。

React Diff 算法的核心思想是通过虚拟 DOM 的对比，最小化对真实 DOM 的操作。它通过对节点进行 "key" 属性的匹配和排序，以及使用深度优先的递归方式，能够高效地找出前后两个虚拟 DOM 树之间的差异，并只对需要更新的部分进行操作。

需要注意的是，React Diff 算法并不是完美的，它有时也会出现一些不够理想的情况，例如当列表中的项发生变化时可能会导致重新渲染整个列表。为了优化 Diff 算法的性能和精确度，开发者可以合理使用 "key" 属性，并避免频繁地修改 "key"。

总结起来，React Diff 算法是 React 在虚拟 DOM 对比过程中使用的一种算法，通过比较前后两个虚拟 DOM 树的差异，最小化对真实 DOM 的操作，以提高性能和效率。

### React fiber 架构的理解
 React fiber 是 React v16 引入的一种新的调度算法和协调机制，用于实现增量式的、可中断的、优先级高的渲染。

 Fiber 的主要特点包括：

- **引入了 Fiber 数据结构**：Fiber 是一种轻量级的数据结构，用于表示组件树中的每个节点。它包含了组件的类型、props、state 等信息，并且可以用于保存渲染的中间状态，以便在中断和恢复渲染过程时能够准确地恢复到之前的状态。

- **改进了调度算法**：Fiber 使用了一种基于优先级的调度算法，可以根据任务的优先级来安排任务的执行顺序。这使得 React 能够根据优先级动态地分配计算资源，从而更好地响应用户的交互，并避免页面的阻塞。

- **支持增量式渲染**：Fiber 允许 React 将渲染过程分成多个小的任务单元（即工作单元），并可以中断和恢复这些任务单元的执行。这样，React 可以根据需要在多个渲染周期中分配和执行工作单元，从而实现增量式的渲染。

- **支持可中断的渲染**：Fiber 使得 React 在渲染过程中可以中断渲染任务，处理更高优先级的任务，然后恢复到之前的渲染任务。这种可中断的渲染使得 React 能够更好地响应用户的交互，并提供更流畅的用户体验。


### react 性能优化的手段
- 使用 React.memo 或 shouldComponentUpdate：通过使用 React.memo 函数或在类组件中实现 shouldComponentUpdate 生命周期方法，可以避免不必要的组件重新渲染。这些方法可以用来比较新旧的 props 或 state，并确定组件是否需要重新渲染。

- 使用 useCallback 和 useMemo：使用 useCallback 来缓存函数，以便在依赖项不变时避免函数的重新创建。使用 useMemo 来缓存计算结果，以避免在每次渲染时重新计算。这可以减少不必要的计算和函数创建，提高性能。

- 使用 React.PureComponent 或 PureComponent 扩展类组件：PureComponent 实现了 shouldComponentUpdate 生命周期方法的浅比较逻辑，当 props 或 state 没有变化时，可以避免组件的重新渲染。

- 使用合理的键（Keys）：在渲染列表或动态生成的元素时，为每个元素提供一个稳定且唯一的键。这样 React 可以更高效地更新和重用元素，而不是重新创建它们。

- 使用虚拟化：对于大型列表或长表格等需要渲染大量数据的情况，可以使用虚拟化库（如 react-virtualized 或 react-window）来仅渲染可见部分，并在滚动或导航时动态加载和卸载内容，从而提高性能。

- 使用 Webpack 或其他打包工具进行代码优化：通过使用代码分割、懒加载和按需加载等技术，可以减少初始加载的文件大小，并延迟加载不必要的代码，从而加快应用的初始加载速度。

- 避免在渲染函数中执行昂贵的操作：将复杂的计算、网络请求或其他昂贵的操作移到 useEffect 钩子函数中，在组件渲染之外执行。这样可以避免阻塞渲染，并提高用户界面的响应性能。

- 使用 React DevTools 进行性能分析：React DevTools 是一个浏览器扩展，可以帮助你分析和调试 React 应用的性能问题。它提供了一些有用的工具和功能，例如检查组件的重新渲染次数、跟踪组件的更新路径等，以帮助你识别和解决性能瓶颈
### setState是同步的还是异步的
从表面上看，setState 函数被调用时会触发组件的重新渲染，这似乎是一个同步的过程。然而，React 在内部对 setState 进行了一些优化，使其变成了异步操作，而不是立即执行。

当你调用 setState 函数时，React 会将新的状态合并到组件的状态队列中，并标记组件为需要更新。然后，React 会等到适当的时机（例如当前任务结束或浏览器空闲时）才会开始执行状态更新过程，并触发组件的重新渲染。

这种异步的 setState 机制有助于提高性能和优化渲染过程。React 会根据需要对多个 setState 调用进行批处理，避免不必要的重复渲染。这样可以有效地减少渲染次数，并提升应用程序的性能。

需要注意的是，尽管 setState 是异步的，但在同一个事件处理函数中的多个 setState 调用是同步执行的。React 会将这些调用合并为一个单一的更新，并在合适的时机才执行。

如果你需要在 setState 之后立即获取更新后的状态，可以使用回调函数的形式，将状态更新的逻辑放在回调函数中。这样可以确保在状态更新完成后再执行相应的操作。

**总结起来，setState 函数在表面上看是同步的，但实际上是异步执行的。它将状态更新推迟到适当的时机，以提高性能并优化渲染过程。**

### React合成事件
在 React 中，合成事件（Synthetic Event）是 React 提供的一种跨浏览器兼容的事件系统。它是在原生浏览器事件基础上进行封装的，提供了一致的 API 和行为。

React 的合成事件有以下特点和用法：

- 跨浏览器兼容性：React 的合成事件屏蔽了浏览器之间的差异，使得你可以在不同浏览器上一致地处理事件。

- 事件委托：React 的合成事件使用了事件委托机制。它将事件处理函数绑定到组件的最外层 DOM 节点上，然后通过冒泡机制来处理内部子元素的事件。这样可以减少事件处理函数的数量，提高性能。

- 事件池：React 使用了事件池机制来管理合成事件对象。当事件被触发时，React 会从事件池中获取一个合成事件对象，并将其传递给事件处理函数。在事件处理函数执行完毕后，合成事件对象会被重置和归还到事件池中，以供下次使用。

- 合成事件的属性：合成事件对象具有与原生事件相似的属性，如 event.target、event.type、event.stopPropagation() 等。但是需要注意的是，由于事件池的重用机制，合成事件对象的属性在异步代码中可能会被重置，因此如果需要在异步代码中访问事件对象的属性，请先保存需要的属性值。

- 使用驼峰命名：React 的合成事件使用了驼峰命名规则，与原生事件的小写字母加下划线不同。例如，onClick、onKeyDown

**总结起来，React 的合成事件是一个跨浏览器兼容的事件系统，它提供了一致的 API 和行为。使用合成事件可以简化事件处理逻辑，并提高性能。**
### 如何理解虚拟DOM

虚拟 DOM（Virtual DOM）是 React 中的一个概念，用于描述一个轻量级的、以 JavaScript 对象形式表示的 DOM 层次结构。

在传统的 Web 应用中，当数据发生变化时，通常需要直接操作 DOM 来更新页面的显示。这种直接操作 DOM 的方式效率较低，因为对 DOM 的频繁操作会导致页面的重新布局和重绘，影响性能。

虚拟 DOM 的出现解决了这个问题。React 使用虚拟 DOM 来代表真实的 DOM 树，在数据发生变化时，React 会先通过对比前后两个虚拟 DOM 的差异，然后只更新发生变化的部分到真实的 DOM 上，从而减少了对真实 DOM 的操作次数，提高了性能。

虚拟 DOM 的工作原理如下：

- 初始渲染：当组件首次渲染时，React 会通过调用组件的 render 方法来创建一个虚拟 DOM 树。

- 虚拟 DOM 对比：当数据发生变化时，React 会再次调用 render 方法创建一个新的虚拟 DOM 树，并将其与之前的虚拟 DOM 树进行对比，找出两者之间的差异。

- 差异更新：React 通过一种高效的算法，比较新旧虚拟 DOM 树的差异，得到一系列需要更新的操作，然后将这些操作应用到真实的 DOM 上，完成页面的更新。

通过使用虚拟 DOM，React 可以在内存中对虚拟 DOM 进行操作和对比，避免了直接操作真实 DOM 所带来的性能开销。虚拟 DOM 还具有跨平台的优势，因为虚拟 DOM 只是 JavaScript 对象的形式，可以在不同的环境中使用，例如服务器端渲染、移动端开发等。

需要注意的是，虚拟 DOM 并不意味着它就一定比直接操作真实 DOM 快，而是通过差异对比的方式减少了不必要的 DOM 操作，从而提高了性能。

**总结起来，虚拟 DOM 是 React 的一种优化机制，通过在内存中创建、对比和更新虚拟 DOM 树，减少对真实 DOM 的操作次数，提高了性能和效率。**


### 什么是 React 的错误边界（Error Boundary）？如何使用它来处理组件的错误？
React 的错误边界（Error Boundary）是一种 React 组件，用于捕获和处理其子组件（子树）中发生的 JavaScript 错误，以防止整个应用崩溃。它可以将错误限制在错误边界组件内部，并显示备用的 UI 或错误信息，使应用能够继续正常运行。

使用错误边界可以有效处理以下类型的错误：
- 渲染错误：当子组件在渲染过程中发生错误时，错误边界可以捕获并处理这些错误。
- 生命周期方法错误：当子组件在生命周期方法（如 componentDidCatch、componentDidUpdate 等）中发生错误时，错误边界可以捕获并处理这些错误。
- 事件处理器错误：当子组件中的事件处理器中发生错误时，错误边界可以捕获并处理这些错误

要使用错误边界，需要创建一个继承自 React 组件的新组件，并实现 componentDidCatch 生命周期方法。componentDidCatch 方法会在其子组件中发生错误时被调用，可以在此方法中进行错误处理。 例如：

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // 可以在这里记录错误日志或发送错误报告
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // 自定义错误界面或显示备用 UI
      return <h1>Oops! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// 使用错误边界包裹子组件
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>

```

在上述示例中，ErrorBoundary 组件作为一个错误边界，包裹了 MyComponent 组件。当 MyComponent 组件或其子组件发生错误时，错误会被 ErrorBoundary 组件捕获，并通过 componentDidCatch 方法进行处理。在 render 方法中，可以根据需要显示备用的 UI 或错误信息。

需要注意的是，错误边界只能捕获其子组件中的错误，无法捕获其自身发生的错误或异步代码中的错误。因此，建议在应用中合理使用错误边界，并在重要的组件层级中使用它们，以提高应用的稳定性和可靠性


<!-- 错误边界 函数组件形式 -->
```js
import React, { useState } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  // 错误边界的错误处理函数
  const handleError = (error, errorInfo) => {
    // 可以在这里记录错误信息或发送错误报告
    console.error(error, errorInfo);
    setHasError(true);
  };

  // 渲染子组件
  const renderChildren = () => {
    try {
      return props.children;
    } catch (error) {
      handleError(error, null);
      return null;
    }
  };

  // 如果发生错误，渲染错误提示信息
  if (hasError) {
    return <div>Something went wrong.</div>;
  }

  // 正常渲染子组件
  return <React.Fragment>{renderChildren()}</React.Fragment>;
}

// 使用错误边界包裹需要捕获错误的组件
function MyComponent() {
  // ...

  return (
    <ErrorBoundary>
      {/* 需要捕获错误的组件 */}
      <ChildComponent />
    </ErrorBoundary>
  );
}

```

### React 中如何处理动画效果

1. CSS 过渡和动画：使用 CSS 过渡属性（如 `transition`）和关键帧动画（如 `@keyframes`）来实现简单的动画效果。通过添加或删除 CSS 类名来触发动画，并使用 React 的状态管理来控制类名的变化。可以使用 CSS-in-JS 库（如 styled-components、emotion）来方便地在 React 组件中定义和使用动画样式。

2. CSS 库：使用现有的 CSS 动画库，如 `react-transition-group`、`react-spring`、`framer-motion` 等。这些库提供了更高级的动画功能和 API，可以处理复杂的动画场景，并提供更多的控制选项。

3. JavaScript 动画库：使用独立的 JavaScript 动画库，如 `gsap`、`anime.js` 等。这些库提供了更灵活和强大的动画控制，可以实现复杂的动画效果，包括元素的移动、旋转、缩放等。

4. React 动画库：使用专门为 React 开发的动画库，如 `react-spring`、`framer-motion` 等。这些库提供了针对 React 组件的动画功能，可以方便地在组件生命周期中添加动画效果，支持物理动画和弹簧效果等。

5. 使用 Hooks 和 `useEffect`：通过使用 React Hooks（如 `useState`、`useEffect`）和原生 JavaScript 动画 API（如 `requestAnimationFrame`）来实现动画效果。可以使用 `useEffect` 监听状态变化，并在状态变化时更新动画属性或触发动画效果。

6. 使用第三方库：除了上述提到的库之外，还有其他许多第三方库可用于处理动画效果，具体取决于需求和项目要求。一些常见的库包括 Velocity.js、GreenSock（GSAP）、React Move 等。

选择合适的动画处理方式取决于项目需求、开发者熟悉程度和个人偏好。建议根据动画复杂度、性能需求和团队技术栈选择合适的方法，并注意性能优化和动画的流畅性。


## Suspense

用于实现延迟加载（lazy loading）和代码分割（code splitting）。<Suspense> 组件可以包裹异步加载的组件，在组件加载完成之前显示一个加载指示器或占位内容。

<Suspense> 组件的使用通常与 React.lazy() 和 import() 结合使用。 React.lazy() 是一个懒加载函数，用于动态导入组件

基本使用方法:
1. 定义一个异步加载的组件，例如： 
```js
const MyComponent = React.lazy(() => import('./MyComponent'));
```
2. 在使用异步加载组件的父组件中，使用 <Suspense> 组件包裹需要延迟加载的组件，并设置 fallback 属性，指定在组件加载过程中显示的加载指示器或占位内容

```js
function App() {
    return (
        <div>
        <Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
        </Suspense>
        </div>
    );
}
``