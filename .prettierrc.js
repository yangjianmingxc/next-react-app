/*
 * @Brief: 
 * @Description: 
 * @Author: yangjianming
 * @Date: 2023-10-31 16:27:53
 */
module.exports = {
  tabWidth: 4, // 缩进4个字符
  printWidth: 120, //超过多少换行
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  semi: false, //行位是否使用分号，默认为true
  trailingComma: "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"
  arrowParens: "avoid", // x => x
  jsxBracketSameLine: true,
  requirePragma: false, //顶部注释
  bracketSpacing: true, // 对象中的空格 默认true
  htmlWhitespaceSensitivity: "ignore",
  vueIndentScriptAndStyle: true, // .vue 文件，缩进 <script> 和 <style> 里的内容
};
