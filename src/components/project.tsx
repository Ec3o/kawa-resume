import React from "react";

export default function Project() {
  return (
    <div>      
      <h2 className="text-2xl font-semibold text-blue-700">获奖经历</h2>
      <hr className="border-t-2 border-blue-500 my-1" />
      <div className="border-2 border-blue-500 p-4 rounded-lg">         
        <section className="mb-0">
          <div className="flex justify-between">
            <p className="text-lg text-gray-700 font-semibold">阿里云CTF2024</p>
            <p className="text-lg text-gray-700 font-semibold">第四名</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700 font-semibold">WMCTF2024</p>
            <p className="text-lg text-gray-700 font-semibold">第六名</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700 font-semibold">第七届大学生网络与信息安全竞赛</p>
            <p className="text-lg text-gray-700 font-semibold">一等奖</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700 font-semibold">盘古石杯数据取证竞赛2024</p>
            <p className="text-lg text-gray-700 font-semibold">三等奖</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700 font-semibold">ByteCTF2024</p>
            <p className="text-lg text-gray-700 font-semibold">28/500</p>
          </div>
          {/* <div className="flex justify-between">
            <p className="text-lg text-gray-700 font-semibold">长三角数学建模竞赛</p>
            <p className="text-lg text-gray-700 font-semibold">二等奖</p>
          </div> */}
        </section>
      </div>
    </div>
  );
}
