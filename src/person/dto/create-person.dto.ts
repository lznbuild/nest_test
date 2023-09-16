/*
 * @Author: Jeffrey
 * @Date: 2023-07-30 12:32:25
 * @LastEditors: Jeffrey
 * @LastEditTime: 2023-09-16 11:16:06
 * @Description: Do not edit
 */

// DTO是一个对象，它定义了如何通过网络发送数据。我们可以通过使用 TypeScript 接口（Interface）或简单的类（Class）来定义 DTO 模式。有趣的是，我们在这里推荐使用类。为什么？类是 JavaScript ES6 标准的一部分，因此它们在编译后的 JavaScript 中被保留为实际实体。另一方面，由于 TypeScript 接口在转换过程中被删除，所以 Nest 不能在运行时引用它们。这一点很重要，因为诸如管道（Pipe）之类的特性为在运行时访问变量的元类型提供更多的可能性。
// data transfer object 数据传输对象
export class CreatePersonDto {
  name: string;
  age: number;
}
