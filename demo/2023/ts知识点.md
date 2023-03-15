<!--
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-03-15 17:58:13
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-03-15 18:05:43
 * @FilePath: /DailyLearning/demo/2023/ts知识点.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
1. 什么是 TypeScript？它有哪些优点？

TypeScript是一种由微软开发的开源编程语言，它是JavaScript的超集，可以为JavaScript代码添加静态类型检查和更多的面向对象编程特性。TypeScript的优点包括：提供更严格的类型检查，减少错误和调试时间；提高代码的可读性和可维护性；增加了面向对象编程的特性，如接口、类、泛型等；具有更好的IDE支持，提高了开发效率。

2. TypeScript 与 JavaScript 有哪些区别？如何将 JavaScript 代码迁移到 TypeScript 代码？

TypeScript与JavaScript的主要区别在于静态类型检查和面向对象编程特性。JavaScript是一种动态类型语言，而TypeScript支持静态类型检查，这意味着在编译时就可以检查代码中的类型错误。此外，TypeScript支持更多的面向对象编程特性，如接口、类、泛型等。将JavaScript代码迁移到TypeScript代码可以通过逐步添加类型注解和使用TypeScript的特性来实现。

3. 什么是类型注解？如何使用类型注解？

类型注解是在变量、函数、参数等声明中添加类型信息，以告诉编译器变量的类型或函数参数和返回值的类型。在TypeScript中，可以使用冒号语法在变量或函数声明后面添加类型注解，例如：let name: string = "John";。类型注解可以提高代码的可读性和可维护性，同时也可以帮助编译器发现类型错误。

4. 什么是接口（interface）？如何使用接口？与类型别名（type alias）有何区别？
6. 什么是类（class）？如何使用类？与接口有何区别？
7. 什么是泛型（generic）？如何使用泛型？泛型在 TypeScript 中有何作用？
8. 如何在 TypeScript 中声明变量、常量和函数？有哪些不同的声明方式？
9. 什么是类型推断（type inference）？TypeScript 如何进行类型推断？
10. 如何在 TypeScript 中使用可选属性和默认属性？
11. 如何在 TypeScript 中使用只读属性？
12. 如何在 TypeScript 中使用联合类型（union type）和交叉类型（intersection type）？
13. 什么是枚举类型（enum）？如何使用枚举类型？
14. 什么是类型别名（type alias）？如何使用类型别名？与接口有何区别？
15. 什么是命名空间（namespace）？如何使用命名空间？与模块有何区别？
16. 如何在 TypeScript 中使用装饰器（decorator）？装饰器有哪些常见的使用场景？
17. 如何在 TypeScript 中使用命名参数和可变参数？
18. 什么是元组（tuple）类型？如何使用元组类型？
19. 如何在 TypeScript 中使用箭头函数和普通函数？
20. 如何在 TypeScript 中使用 async 和 await？
21. 如何在 TypeScript 中使用类的访问修饰符（public、private、protected）？
22. 如何在 TypeScript 中使用模块（module）？有哪些不同的模块化方案？
23. 如何在 TypeScript 中使用接口继承和类继承？
24. 如何在 TypeScript 中使用类型守卫（type guard）？
25. 如何在 TypeScript 中使用字面量类型（literal type）？
26. 如何在 TypeScript 中使用命名空间别名（namespace alias）？
27. 如何在 TypeScript 中使用类型映射（mapped type）？
28. 如何在 TypeScript 中使用条件类型（conditional type）？
29. 如何在 TypeScript 中使用 infer 关键字？
30. 如何在 TypeScript 中使用递归类型（recursive type）？
31. 如何在 TypeScript 中使用类型转换（type assertion）？
32. 什么是装饰器工厂（decorator factory）？如何使用装饰器工厂？
33. 如何在 TypeScript 中使用默认导出（default export）？
34. 如何在 TypeScript 中使用命名导出（named export）？
35. 什么是高阶类型（higher-order type）？如何使用高阶类型？
36. 如何在 TypeScript 中使用枚举类型的反向映射（reverse mapping）