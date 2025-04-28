import Layout from '@/components/Layout';
import CodeBlock from '@/components/CodeBlock'; // Import the CodeBlock component

const programTwoCode = `
#include<iostream>
using namespace std;
int main()
{
int arr[50],i ,elem, pos, tot;
cout << "enter the size of the array=";
cin >> tot;
cout << "enter the array elements=";
for (i = 0;i < tot;i++)
{
cin >> arr[i];
}
cout << "enter element to insert";
cin >> elem;
cout << "enter the position";
cin>>pos;
// Shift elements to make space for the new element
for (i = tot;i >= pos;i--)
{
arr[i] = arr[i - 1];
}
// Insert the element at the specified position
arr[pos - 1] = elem; // Corrected index: position is usually 1-based
tot++;
cout << "\\n the new array is= ";
for (i = 0;i < tot;i++)
{
cout << arr[i]<<"\\n";
}
cout << endl;
return 0;
}
`;

export default function ProgramTwoPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج الثاني: إدراج عنصر في أي موضع بالمصفوفة</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يوضح كيفية إدراج عنصر جديد في موضع محدد داخل مصفوفة موجودة في لغة C++. يتطلب ذلك إزاحة العناصر الموجودة لإفساح المجال للعنصر الجديد.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programTwoCode} language="cpp" />
        <p className="mt-4 text-sm text-gray-600">
          ملاحظة: تم تعديل الكود الأصلي لتصحيح فهرس الإدراج (عادةً ما تكون المواضع التي يدخلها المستخدم قائمة على 1، بينما فهارس المصفوفة قائمة على 0) وإضافة تعليق توضيحي.
        </p>
      </div>
    </Layout>
  );
}

