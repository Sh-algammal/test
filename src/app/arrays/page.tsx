import Layout from '@/components/Layout';
import Link from 'next/link';

export default function ArraysPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">الجزء الأول: المصفوفات (Arrays)</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">التعريف</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          المصفوفة هي هيكل بيانات يخزن مجموعة من العناصر من نفس النوع في كتلة متجاورة من الذاكرة. يمكن الوصول إلى كل عنصر في المصفوفة مباشرة باستخدام فهرس (index).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الخصائص</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li><strong>الحجم الثابت:</strong> لا يمكن تغيير حجم المصفوفة بمجرد إنشائها.</li>
          <li><strong>الوصول العشوائي:</strong> يمكن الوصول إلى كل عنصر مباشرة عن طريق فهرسه.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">المزايا</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>سهولة الوصول إلى العناصر.</li>
          <li>سرعة في العمليات التي تتطلب وصولاً عشوائيًا، مثل البحث.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">العيوب</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>الحجم الثابت، لذا لا يمكن تغيير الحجم.</li>
          <li>قد يؤدي إلى إهدار الذاكرة إذا لم يكن الحجم دقيقًا.</li>
          <li>إذا لم يكن الحجم معروفًا مسبقًا، فقد يؤدي ذلك إلى استخدام غير فعال للذاكرة.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">البرامج التوضيحية للمصفوفات</h2>
        <div className="space-y-3">
          <p className="text-lg">
            <Link href="/arrays/program-one" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج الأول: إدراج عنصر في نهاية المصفوفة
            </Link>
          </p>
          <p className="text-lg">
            <Link href="/arrays/program-two" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج الثاني: إدراج عنصر في أي موضع بالمصفوفة
            </Link>
          </p>
          <p className="text-lg">
            <Link href="/arrays/program-three" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج الثالث: حذف عنصر من المصفوفة وطباعته
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

