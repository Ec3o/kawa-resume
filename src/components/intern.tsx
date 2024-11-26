import React from "react";

export default function Intern() {
  return (
    <div>
      <section className="mb-0">
        <h2 className="text-2xl font-semibold text-blue-700 ">项目经历</h2>
        <hr className="border-t-2 border-blue-500 my-2" />
        <div>
          <div className="flex items-center bg-blue-50 p-1 h-10 rounded-md">
            <img
              src="https://img.icons8.com/?size=100&id=59335&format=png&color=385a64"
              alt="Bilibili Logo"
              className="w-50 h-8 mr-3"
            />
            <h3 className="text-l font-semibold text-blue-500 ">
              诸暨市网络安全赏金行动|市护
            </h3>
          </div>
          <p className="text-gray-500">对给出的IP范围内的目标进行渗透攻击，并根据获取的权限、攻击的深浅、数据的重要程度给分</p>
          <h4 className="font-bold">项目成果</h4>
          <li>重大成果II类 1项，一般成果I类 1 项，共计1100分，排名第9</li>
          <li>突破网络隔离限制进入内网区域进行攻击</li>
          <h4 className="font-bold">项目简述</h4>
          <li>对敏感端口和服务进行扫描和信息收集，探测到多个未授权访问和信息泄露端点</li>
          <li>利用X-Stream反序列化RCE反弹shell获取Linux主机Root权限</li>
          <li>尝试利用多款C2工具进行持久化，并利用Chisel搭建内网Socks5代理</li>
          <li>免杀对抗：利用脚本循环杀死杀软拉起进程</li>
          <h4 className="font-bold">渗透工具</h4>
          <p>扫描器:<strong>fscan</strong>|<strong>gogo</strong></p>
          <p>C2类:<strong>Metasploit</strong>|<strong>Sliver</strong></p>
          <p>内网代理:<strong>Chisel</strong></p>

        </div>
      </section>
      <br />
    </div>
  );
}
