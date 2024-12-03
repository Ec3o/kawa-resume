import React from "react";
<div className="border-2 border-blue-500 p-4 rounded-lg">

        </div>
export default function Intern() {
  return (
    <div>
      <section className="mb-0">
        <h2 className="text-2xl font-semibold text-blue-700 ">个人信息</h2>
        <hr className="border-t-2 border-blue-500 my-2" />
        <p>杭州电子科技大学Vidar-Team信息安全协会战队成员，跟随队伍参加各大CTF比赛，在队中主要负责Web方向.</p>
        
        <h2 className="text-2xl font-semibold text-blue-700 ">教育经历</h2>
        <hr className="border-t-2 border-blue-500 my-2" />
        <div className="border-2 border-blue-500 p-4 rounded-lg">

          <div className="flex justify-between">
            <p className="text-lg text-gray-700 font-semibold">杭州电子科技大学</p>
            <p className="text-lg text-gray-700 font-semibold">2023/9-2027/6</p>
          </div>
          <p className="text-md">本科|计算机科学与技术</p>
        </div>
        <h2 className="text-2xl font-semibold text-blue-700 ">项目经历</h2>
        <hr className="border-t-2 border-blue-500 my-2" />
        
        {/* 诸暨市网络安全赏金行动 */}
        <div className="border-2 border-blue-500 rounded-lg p-4 mb-4">
          <div className="flex items-center bg-blue-50 p-1 h-10 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
              <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path d="M15.833 1.328a2 2 0 0 1 2.333 2.325l-.441 2.423a2 2 0 0 1-.551 1.053l-6.093 6.116a2 2 0 0 1-2.829.005l-1.98-1.972a2 2 0 0 1-.004-2.829l6.093-6.115a2 2 0 0 1 1.05-.555zm-.076 4.39l.442-2.424l-2.422.451l-6.093 6.116l1.98 1.972z"/>
                <path d="M7.777 11.747a.75.75 0 0 1-.002-1.06L11.16 7.29a.75.75 0 1 1 1.063 1.059l-3.384 3.396a.75.75 0 0 1-1.06.002"/>
                <path d="M3.188 8.823a2.44 2.44 0 0 1 3.448-.006l4.076 4.06a2.438 2.438 0 0 1-3.442 3.455l-4.076-4.06a2.44 2.44 0 0 1-.006-3.449m2.037 1.41a.438.438 0 0 0-.619.622l4.076 4.06a.438.438 0 0 0 .618-.62z"/>
                <path d="M5.662 13.313L2.984 16l.62.618l2.679-2.688L7.7 15.343l-2.68 2.688a2 2 0 0 1-2.828.005l-.621-.618a2 2 0 0 1-.005-2.829l2.678-2.688zM4.167 1.328a2 2 0 0 0-2.333 2.325l.441 2.423a2 2 0 0 0 .551 1.053l3.29 3.302l1.417-1.412l-3.29-3.302l-.442-2.423l2.422.451l3.29 3.302l1.416-1.412l-3.29-3.301a2 2 0 0 0-1.05-.555zm10.608 8.906a.438.438 0 0 1 .619.62l-4.076 4.061a.44.44 0 0 1-.62 0l-1.416 1.41c.95.955 2.494.958 3.448.007l4.076-4.06a2.438 2.438 0 0 0-3.442-3.455l-3.479 3.465l1.412 1.417z"/>
                <path d="M14.338 13.313L17.016 16l-.62.618l-2.679-2.688l-1.417 1.412l2.678 2.688a2 2 0 0 0 2.829.005l.621-.618a2 2 0 0 0 .005-2.829L15.755 11.9z"/>
              </g>
            </svg>
            <h3 className="text-xl font-semibold text-blue-500 ">诸暨市网络安全赏金行动|市护</h3>
          </div>
          <p className="text-gray-500">对给出的IP范围内的目标进行渗透攻击，并根据获取的权限、攻击的深浅、数据的重要程度给分</p>
          <h4 className="font-bold">项目成果</h4>
          <ul className="list-disc pl-5">
            <li>重大成果II类 1项，一般成果I类 1 项，共计1100分，排名第9</li>
            <li>突破网络隔离限制进入内网区域进行攻击</li>
          </ul>
          <h4 className="font-bold">项目简述</h4>
          <ul className="list-disc pl-5">
            <li>对敏感端口和服务进行扫描和信息收集，探测到多个未授权访问和信息泄露端点</li>
            <li>利用X-Stream反序列化RCE反弹shell获取Linux主机Root权限</li>
            <li>尝试利用多款C2工具进行持久化，并利用Chisel搭建内网Socks5代理</li>
            <li>免杀对抗：利用脚本循环杀死杀软拉起进程,成功上传Chisel落地</li>
          </ul>
        </div>

        {/* CTF相关 */}
        <div className="border-2 border-blue-500 rounded-lg p-4 mb-4">
          <div className="flex items-center bg-blue-50 p-1 h-10 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
              <g fill="currentColor">
                <path fillRule="evenodd" d="m6.804 2.632l-.637.264A3.51 3.51 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.22 3.22 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.693-.131l-1.482-.613a4 4 0 0 0-3.058 0m4.893 7.543l-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0" clipRule="evenodd"/>
                <rect width="2" height="16" x="4" y="2" rx="1"/>
              </g>
            </svg>
            <h3 className="text-xl font-semibold text-blue-500 ">CTF相关</h3>
          </div>
          <ul className="list-disc pl-5">
            <li>2024强网拟态初赛Web出题</li>
            <li>Hgame 2025 出题</li>
            <li>开源CTF平台CdsCTF前端开发</li>
          </ul>
        </div>

        {/* 漏洞挖掘 */}
        <div className="border-2 border-blue-500 rounded-lg p-4 mb-4">
          <div className="flex items-center bg-blue-50 p-1 h-10 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
              <g fill="currentColor">
                <path fillRule="evenodd" d="M4.828 4.828a6 6 0 1 0 8.486 8.486a6 6 0 0 0-8.486-8.486M11.9 11.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 11.9 11.9" clipRule="evenodd"/>
                <path d="M11.9 14.728a1.5 1.5 0 1 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.121 2.121zm-4.693-4.564a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2z"/>
                <path d="M8.207 7.164a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0z"/>
              </g>
            </svg>
            <h3 className="text-l font-semibold text-blue-500 ">漏洞挖掘</h3>
          </div>
          <ul className="list-disc pl-5">
            <li>阿里云边缘安全加速（ESA）产品众测WAF功能挑战赛旁站XSS</li>
          </ul>
        </div>
      </section>
      <br />
    </div>
  );
}
