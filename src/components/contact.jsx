import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100 pt-6 pb-6">
      <div className="bg-white shadow-xl rounded-2xl p-12 max-w-3xl w-full text-center transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-4">Contact</h1>
        <p className="text-gray-600 text-lg">Feel free to reach out to me.</p>
        <div className="mt-6 text-gray-700 space-y-3 text-lg">
          <p><strong>📞 Phone:</strong> 123-456-7890</p>
          <p><strong>📧 Email:</strong> monhbaatar0327@icloud.com</p>
          <p><strong>🎓 Student ID:</strong> c24io1131@ufe.edu.mn</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;