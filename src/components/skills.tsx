import React from "react";

export default function Skills() {
  return (
    <div>
      <section className="mb-0">
        <h2 className="text-xl font-semibold text-blue-700 ">专业技能</h2>
        <hr className="border-t-2 border-blue-500 my-1" />
        <ul className="list-disc pl-5">
          <li>了解渗透测试的基本流程和常见漏洞的原理</li>
          <li>能基础使用Cobalt Strike进行木马生成、机器上线和控制</li>
          <li>关注并会定期复现新漏洞（<strong>CVE-2024-21096 CVE-2024-49362 CVE-2023-2317</strong>）</li>
          <li>具备基础后端开发能力（<strong>Golang Node.js Python</strong>）喜欢自己搭建一些小型工具项目
          </li>
        </ul>
      </section>
    </div>
  );
}
