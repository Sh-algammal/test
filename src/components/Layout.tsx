import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-blue-200">
            هياكل البيانات التفاعلية
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-200">المقدمة</Link>
            <Link href="/arrays" className="hover:text-blue-200">المصفوفات</Link>
            <Link href="/linked-lists" className="hover:text-blue-200">القوائم المرتبطة</Link>
            <Link href="/stacks" className="hover:text-blue-200">المكدسات</Link>
            <Link href="/queues" className="hover:text-blue-200">الطوابير</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-6 flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        تم إنشاؤه بواسطة Manus AI
      </footer>
    </div>
  );
};

export default Layout;

