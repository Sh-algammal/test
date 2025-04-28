import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock"; // Import the CodeBlock component

const programSevenCode = `
#include <iostream>
using namespace std;

// Define the structure for a stack node
struct Node { // Renamed from 'node' to follow C++ conventions
    int data;
    Node* next;
};

// Function to create a new node
Node* createNode(int value) { // Renamed from create_node
    Node* newNode = new Node(); // Renamed from newnode
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Check if the stack is empty
bool isStackEmpty(Node* top) { // Renamed from isstackempty
    return top == NULL;
}

// Push an element onto the stack (using pass-by-reference for top)
void push(Node*& top, int value) {
    Node* newNode = createNode(value);
    newNode->next = top; // New node points to the current top
    top = newNode;       // Update top to be the new node
    cout << "Pushed: " << value << endl;
}

// Pop an element from the stack (using pass-by-reference for top)
int pop(Node*& top) {
    if (isStackEmpty(top)) {
        cout << "Stack Underflow! Cannot pop element." << endl;
        return -1; // Indicate error (or use exceptions)
    }
    Node* temp = top;
    int poppedValue = temp->data; // Get data from the top node
    top = top->next;             // Move top to the next node
    delete temp;                 // Delete the old top node
    return poppedValue;
}

// Get the current size of the stack
int getSize(Node* top) { // Renamed from size
    int count = 0;
    Node* current = top; // Use a temporary pointer to traverse
    while (current != NULL) {
        count++;
        current = current->next;
    }
    return count;
}

// Print the elements of the stack (from top to bottom)
void print(Node* top) {
    if (isStackEmpty(top)) {
        cout << "Stack is empty." << endl;
        return;
    }
    cout << "Stack elements (top to bottom): ";
    Node* current = top; // Use a temporary pointer
    while (current != NULL) {
        cout << current->data << " ";
        current = current->next;
    }
    cout << endl;
}

// Peek at the top element without removing it (Added function)
int peek(Node* top) {
    if (isStackEmpty(top)) {
        cout << "Stack is empty, cannot peek." << endl;
        return -1; // Or throw an exception
    }
    return top->data;
}

int main() {
    Node* top = NULL; // Initialize top pointer to NULL

    push(top, 10);
    push(top, 20);
    push(top, 30);

    cout << "Current stack size: " << getSize(top) << endl;
    print(top);

    cout << "Top element is: " << peek(top) << endl;

    cout << "Popped: " << pop(top) << endl;
    cout << "Stack size after pop: " << getSize(top) << endl;
    print(top);

    cout << "Popped: " << pop(top) << endl;
    cout << "Popped: " << pop(top) << endl;

    // Try to pop from empty stack
    cout << "Popped: " << pop(top) << endl;
    print(top);

    // No need to explicitly delete the whole stack if using smart pointers,
    // but with raw pointers, ensure all nodes are deleted if the stack isn't empty at the end.
    // Example cleanup (could be a destructor in a class implementation):
    cout << "Cleaning up remaining nodes (if any)..." << endl;
    while (!isStackEmpty(top)) {
       // Pop remaining elements to free memory
       int val = pop(top); 
       // Avoid printing the 'Popped: ' message during cleanup
       // cout << "Cleaned up: " << val << endl; 
    }
    print(top);

    return 0;
}
`;

export default function ProgramSevenPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج السابع: تنفيذ المكدس باستخدام قائمة مرتبطة</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يوضح كيفية تنفيذ هيكل بيانات المكدس (Stack) باستخدام قائمة مرتبطة ديناميكية في لغة C++. هذا النهج يتجنب قيود الحجم الثابت للمصفوفات. يتضمن العمليات الأساسية مثل `push` و `pop`.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programSevenCode} language="cpp" />
        <p className="mt-4 text-sm text-gray-600">
          ملاحظة: تم إعادة تسمية الهيكل والدوال لاتباع اصطلاحات C++، إضافة تعليقات توضيحية، تحسين رسائل الخطأ، إضافة دالة `peek`، وتضمين مثال لتنظيف الذاكرة في نهاية `main` عن طريق إفراغ المكدس.
        </p>
      </div>
    </Layout>
  );
}

