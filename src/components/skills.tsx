import React from "react";

export default function Skills() {
  return (
    <div>
      <section className="mb-0">
        <h2 className="text-2xl font-semibold text-blue-700 ">专业技能</h2>
        <hr className="border-t-2 border-blue-500 my-1" />
        <div className="border-2 border-blue-500 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
            <li>掌握渗透测试的基本流程，包括信息收集、漏洞扫描、漏洞验证和报告生成</li>
            <li>熟悉常见渗透工具的使用（如Burp Suite, Nmap, Nessus），能够完成目标环境的基础渗透测试</li>
            <li>具备基础的漏洞分析能力，能够根据公开漏洞（如CVE-2024-21096）进行复现和简单的利用</li>
            <li>了解红队技术栈中的核心概念，如Web漏洞利用、内网渗透基础、基本权限提升手法等</li>
            <li>熟悉常见的漏洞类型（如XSS, SQL注入, 文件上传漏洞），并具备一定的手工测试能力</li>
            <li>拥有基础后端开发能力（Golang, Python），能够根据需求编写小型辅助工具</li>
            <li>了解内网渗透的基础手法，如简单的端口转发、隧道代理工具（如Chisel）的使用</li>
            <li>具备编写爬虫的经验，能够使用BeautifulSoup和Requests库爬取静态网页并进行简单的分析</li>
            <li>了解基本的安全防护机制（如WAF, IDS/IPS），并尝试过通过基础绕过手法进行验证</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
