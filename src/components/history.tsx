import React from "react";

export default function History() {
  return (
    <div>
      <section className="mb-0">
        <h2 className="text-2xl font-semibold text-blue-700 ">学习经历</h2>
        <hr className="border-t-2 border-blue-500 my-1" />
        <h2 className="text-xl font-semibold text-blue-700 ">漏洞复现</h2>
        <p className="text-lg text-gray-700 font-semibold"><strong>CVE-2024-21096</strong> mysqldump命令注入漏洞</p>
        <p>mysqldump版本&lt;8.0.36的版本存在版本号命令注入漏洞，可以注入\!行并导入mysql时会触发任意命令执行.<br />可用于部署Mysql蜜罐攻击自动化攻击Mysql蜜罐的自动化程序.</p>
        <p className="text-lg text-gray-700 font-semibold"><strong>CVE-2024-49362 CVE-2023-2317</strong> Electron应用XSS To RCE漏洞分析</p>
        <p>Electron构建的应用程序在未设置上下文隔离和node集成选项时,XSS执行任意Javascript会调用node.js API升级为任意命令执行.</p>
        <hr className="border-t-2 border-blue-500 my-1" />
        <p className="text-lg text-gray-700 font-semibold"><strong>CVE-2024-42327</strong>Zabbix SQL注入漏洞</p>
        <p>Zabbix 6.0.31版本前存在SQL注入漏洞，攻击者可以通过构造特定的SQL语句，获取数据库中的敏感信息。在配置写入文件路径项错误时，可能导致服务器被写入恶意密钥被远程登录或写入webshell导致远程代码执行.</p> 
        <h2 className="text-xl font-semibold text-blue-700 ">赛题履历</h2>
      </section>
    </div>
  );
}
