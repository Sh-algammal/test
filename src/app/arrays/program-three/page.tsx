import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock"; // Import the CodeBlock component

const programThreeCode = `
#include<iostream>
using namespace std;
int main()
{
int arr[10], j, tot, i, elem, found = 0;
// Initialize tot based on user input or a fixed size if needed
cout << "Enter the size of the array (max 10): ";
cin >> tot;
if (tot > 10 || tot <= 0) {
    cout << "Invalid size." << endl;
    return 1;
}

cout << "Enter the elements of the array (" << tot << " elements): ";
for (i = 0; i < tot; i++)
{
    cin >> arr[i];
}

cout << "Enter element to delete = ";
cin >> elem;

for (i = 0; i < tot; i++)
{
    if (arr[i] == elem)
    {
        // Shift elements to the left to overwrite the deleted element
        for (j = i; j < (tot - 1); j++)
        {
            arr[j] = arr[j + 1];
        }
        found++;
        tot--; // Decrease the effective size of the array
        i--; // Re-check the current index as it now holds the next element
    }
}

if (found == 0)
{
    cout << "Element " << elem << " not found in the array.\n";
}
else
{
    cout << "Element(s) deleted successfully.\n";
    cout << "The new array is:\n";
    if (tot == 0) {
        cout << "(Array is now empty)" << endl;
    } else {
        for (i = 0; i < tot; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
}
return 0;
}
`;

export default function ProgramThreePage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج الثالث: حذف عنصر من المصفوفة وطباعته</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يوضح كيفية حذف عنصر محدد (أو كل مرات ظهوره) من مصفوفة في لغة C++. يتضمن البحث عن العنصر ثم إزاحة العناصر اللاحقة لملء الفراغ الناتج عن الحذف.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programThreeCode} language="cpp" />
        <p className="mt-4 text-sm text-gray-600">
          ملاحظة: تم تعديل الكود الأصلي ليشمل إدخال حجم المصفوفة من المستخدم، وإضافة تعليقات توضيحية لشرح منطق الحذف، وتحسين رسائل الإخراج.
        </p>
      </div>
    </Layout>
  );
}

