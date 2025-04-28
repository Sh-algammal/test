import Layout from '@/components/Layout';
import Link from 'next/link';

export default function QueuesPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">الجزء الرابع: الطوابير (Queues)</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">التعريف</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          الطابور هو هيكل بيانات يتبع مبدأ FIFO (First In, First Out - الأول دخولا، الأول خروجا)، حيث تتم إضافة العناصر إلى الخلف (rear) وإزالتها من الأمام (front).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الخصائص</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li><strong>العمليات الرئيسية:</strong> `enqueue` (إضافة عنصر إلى الخلف)، `dequeue` (إزالة عنصر من الأمام)، `front` أو `peek` (عرض العنصر الأمامي دون إزالته).
          </li>
          <li><strong>الحالة:</strong> يمكن الوصول فقط إلى العنصر الأول الذي تم إضافته (للحذف).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">المزايا</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>مفيد في التطبيقات التي تتطلب معالجة الطلبات بالترتيب الذي وصلت به، مثل طوابير الطباعة أو نقل البيانات في الشبكات.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">العيوب</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
          <li>لا يسمح بالوصول السهل إلى العناصر الموجودة في المنتصف.
          </li>
           <li>التنفيذ البسيط باستخدام مصفوفة قد يكون غير فعال إذا لم يتم التعامل مع التفاف المؤشرات (circular queue).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">البرامج التوضيحية للطوابير</h2>
        <div className="space-y-3">
          <p className="text-lg">
            <Link href="/queues/program-eight" className="text-blue-600 hover:text-blue-800 hover:underline">
              البرنامج الثامن: تنفيذ الطابور باستخدام مصفوفة
            </Link>
          </p>
          {/* Add links to other queue programs if they existed in the book */}
        </div>
      </div>
    </Layout>
  );
}

