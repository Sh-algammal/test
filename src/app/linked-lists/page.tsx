import Layout from '@/components/Layout';
import Link from 'next/link';

export default function LinkedListsPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">الجزء الثاني: القوائم المرتبطة (Linked Lists)</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">التعريف</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          القائمة المرتبطة هي هيكل بيانات يتكون من سلسلة من العقد (nodes)، حيث تحتوي كل عقدة على بيانات ومرجع (أو رابط) إلى العقدة التالية في التسلسل.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الخصائص</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li><strong>الحجم الديناميكي:</strong> يمكنك بسهولة إضافة أو إزالة العناصر دون التأثير على العناصر الأخرى.</li>
          <li><strong>الوصول التسلسلي:</strong> للوصول إلى عنصر معين، يجب عليك اجتياز العقد السابقة.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">المزايا</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>مرونة في إضافة وإزالة العناصر.</li>
          <li>لا حاجة لتخصيص ذاكرة محددة مسبقًا مثل المصفوفات.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">العيوب</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>عمليات بحث أبطأ مقارنة بالمصفوفات.</li>
          <li>تتطلب ذاكرة إضافية لتخزين الروابط.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">البرامج التوضيحية للقوائم المرتبطة</h2>
        <div className="space-y-3">
          <p className="text-lg">
            <Link href="/linked-lists/program-four" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج الرابع: قائمة مرتبطة مع عمليات الإدراج والبحث والعرض
            </Link>
          </p>
          <p className="text-lg">
            <Link href="/linked-lists/program-five" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج الخامس: قائمة مرتبطة مع عملية الحذف
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

