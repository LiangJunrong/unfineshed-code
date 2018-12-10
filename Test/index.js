console.log("Success：新增执行成功！");
// Console：Success：新增执行成功！

console.error(new Error('新增执行失败：'));
/**
 * Console：
 * Error: 新增执行失败：
    at Object.<anonymous> (E:\MyWeb\jsliang-study\unfineshed-code\Test\index.js:3:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
 */

try {
  const m = 1;
  const n = m + z;
} catch(error) {
  console.log(error);
}
/**
 * Console：
 * ReferenceError: z is not defined
    at Object.<anonymous> (E:\MyWeb\jsliang-study\unfineshed-code\Test\index.js:7:17)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
 */