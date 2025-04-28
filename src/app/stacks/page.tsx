import Layout from '@/components/Layout';
import Link from 'next/link';

export default function StacksPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">الجزء الثالث: المكدسات (Stacks)</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">التعريف</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          المكدس هو هيكل بيانات يتبع مبدأ LIFO (Last In, First Out - الأخير دخولا، الأول خروجا)، حيث تتم إضافة العناصر إلى الأعلى وإزالتها من الأعلى.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الخصائص</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li><strong>العمليات الرئيسية:</strong> `push` (إضافة عنصر إلى الأعلى)، `pop` (إزالة عنصر من الأعلى)، `peek` أو `top` (عرض العنصر في الأعلى دون إزالته).</li>
          <li><strong>الحالة:</strong> يمكنك فقط الوصول إلى العناصر الموجودة في الأعلى؛ للوصول إلى العناصر الأعمق، يجب عليك إزالة العناصر التي فوقها.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">المزايا</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>مفيد في العديد من التطبيقات مثل تتبع أوامر التراجع (undo) أو التنفيذ العكسي.</li>
          <li>بسيط في الاستخدام وفعال عندما تعتمد العمليات على العنصر العلوي فقط.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">العيوب</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>وصول محدود إلى العناصر مقارنة بهياكل البيانات الأخرى.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">البرامج التوضيحية للمكدسات</h2>
        <div className="space-y-3">
          <p className="text-lg">
            <Link href="/stacks/program-six" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج السادس: تنفيذ المكدس باستخدام مصفوفة
            </Link>
          </p>
          <p className="text-lg">
            <Link href="/stacks/program-seven" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج السابع: تنفيذ المكدس باستخدام قائمة مرتبطة
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

