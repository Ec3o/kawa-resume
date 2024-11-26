import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWeixin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Info() {
  return (
    <div>
      <header className="text-center mb-0 flex items-center justify-between">
        <div className="text-left">
          <h1 className="text-3xl font-bold">王梓茗</h1>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            19012711416
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            2499302531@qq.com
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon={faWeixin} className="mr-2" />
            Echo_wangziming
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <a href="https://github.com/LofiSu" className="">
              Ec3o
            </a>
            <span className="mx-2">|</span>
            <p className="text-l bg-yellow-100 inline-block">
              Developer
            </p>
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon={faBlog} className="mr-2" />
            <a href="http://www.lofisu.chat" className="text-blue-500">
              博客：tech.ec3o.fun
            </a>
          </p>
          <p>
            <strong>杭州电子科技大学 | 计算机科学与技术 | 大二</strong>
          </p>
          <p>本科 | 27届 | 立即到岗可实习六个月</p>
        </div>
        <img src="logo.jpg" alt="证件照" className="w-30 h-40 object-cover" />
      </header>
    </div>
  );
}
