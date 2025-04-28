import Layout from '@/components/Layout';
import CodeBlock from '@/components/CodeBlock'; // Import the CodeBlock component

const programOneCode = `
#include<iostream>
using namespace std;
int main()
{
int arr[60], elem, size,i;
cout << "size=";
cin >> size;
cout << "enter array elements";
for ( i = 0;i < size;i++)
{
cin >> arr[i];
}
cout << "\\n enter element to insert";
cin >> elem;
arr[i] = elem; // Note: This inserts after the last entered element, assuming i is size
size++;
cout << "\\n the new arrayis=";
for ( i = 0;i < size;i++)
{
cout << arr[i] << "\\n";
}
cout << endl;
return 0;
}
`;

export default function ProgramOnePage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج الأول: إدراج عنصر في نهاية المصفوفة</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يوضح كيفية إضافة عنصر جديد إلى نهاية مصفوفة موجودة في لغة C++.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programOneCode} language="cpp" />
         <p className="mt-4 text-sm text-gray-600">
          ملاحظة: الكود الأصلي يدرج العنصر بعد آخر عنصر تم إدخاله، بافتراض أن قيمة `i` بعد الحلقة الأولى هي `size`.
        </p>
      </div>
    </Layout>
  );
}

