import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock"; // Import the CodeBlock component

const programSixCode = `
#include<iostream>
using namespace std;

#define MAX_SIZE 100 // Define a constant for the maximum stack size

class Stack // Renamed from 'stack' to follow C++ naming conventions
{
private:
    int arr[MAX_SIZE];
    int top; // Index of the top element

public:
    // Constructor to initialize the stack
    Stack()
    {
        top = -1; // Initialize top to -1, indicating an empty stack
    }

    // Check if the stack is empty
    bool isEmpty() // Renamed from is_empty
    {
        return top == -1;
    }

    // Check if the stack is full
    bool isFull() // Renamed from is_full
    {
        return top == MAX_SIZE - 1;
    }

    // Push an element onto the stack
    void push(int value)
    {
        if (isFull())
        {
            cout << "Stack Overflow! Cannot push element." << endl; // More descriptive message
            return;
        }
        arr[++top] = value; // Increment top, then insert value
        cout << "Pushed: " << value << endl;
    }

    // Pop an element from the stack
    int pop()
    {
        if (isEmpty())
        {
            cout << "Stack Underflow! Cannot pop element." << endl; // More descriptive message
            return -1; // Return an indicator value (could use exceptions)
        }
        int poppedValue = arr[top--]; // Get value, then decrement top
        return poppedValue;
    }

    // Get the current size of the stack
    int getSize() // Renamed from size
    {
        return top + 1;
    }

    // Print the elements of the stack
    void print()
    {
        if (isEmpty())
        {
            cout << "Stack is empty." << endl;
            return;
        }
        cout << "Stack elements (bottom to top): ";
        for (int i = 0; i <= top; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }

    // Peek at the top element without removing it (Added function)
    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty, cannot peek." << endl;
            return -1; // Or throw an exception
        }
        return arr[top];
    }
};

int main()
{
    Stack s; // Use the class name Stack

    s.push(10);
    s.push(20);
    s.push(30);

    cout << "Current stack size: " << s.getSize() << endl;
    s.print();

    cout << "Top element is: " << s.peek() << endl; // Using peek

    cout << "Popped: " << s.pop() << endl;
    cout << "Stack size after pop: " << s.getSize() << endl;
    s.print();

    cout << "Popped: " << s.pop() << endl;
    cout << "Popped: " << s.pop() << endl;

    // Try to pop from empty stack
    cout << "Popped: " << s.pop() << endl;
    s.print();

    // Try to push to full stack (if MAX_SIZE is small for testing)
    // for(int i = 0; i < MAX_SIZE + 1; ++i) { s.push(i * 10); }

    return 0;
}
`;

export default function ProgramSixPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج السادس: تنفيذ المكدس باستخدام مصفوفة</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يوضح كيفية تنفيذ هيكل بيانات المكدس (Stack) باستخدام مصفوفة ذات حجم ثابت في لغة C++. يتضمن العمليات الأساسية مثل `push` و `pop` و `isEmpty` و `isFull`.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programSixCode} language="cpp" />
        <p className="mt-4 text-sm text-gray-600">
          ملاحظة: تم إعادة تسمية الكلاس والدوال لاتباع اصطلاحات تسمية C++ الشائعة، إضافة تعليقات توضيحية، تحسين رسائل الخطأ (Overflow/Underflow)، وإضافة دالة `peek` لعرض العنصر العلوي دون إزالته، وتوسيع دالة `main` لتوضيح الاستخدام.
        </p>
      </div>
    </Layout>
  );
}

