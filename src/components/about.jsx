import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center s bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-12 max-w-3xl w-full text-center transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-4">About</h1>
        <p className="text-gray-600 text-lg mb-6">This is the about page</p>
        <h1 className="text-3xl font-extrabold text-yellow-500 mb-4">Танилцуулга</h1>
        <p className="text-gray-600 text-lg mb-6">
          Манай дэлгүүр Monhoo нь 2025 оноос эхлэн үйл ажиллагаагаа явуулж байгаа бөгөөд хэрэглэгчдэд чанартай, баталгаат пүүз бүтээгдэхүүнийг хүргэх зорилготой.
        </p>
        <h1 className="text-3xl font-extrabold text-yellow-500 mb-4">Бидний зорилго</h1>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
          <li>✅ Хэрэглэгчдэд хялбар, найдвартай үйлчилгээг үзүүлэх</li>
          <li>✅ Өндөр чанартай бүтээгдэхүүнийг хамгийн боломжийн үнээр санал болгох</li>
          <li>✅ Түргэн шуурхай хүргэлтийн үйлчилгээг хүргэх</li>
        </ul>
      </div>
    </div>
  );
}

export default About;