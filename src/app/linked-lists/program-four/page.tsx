import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock"; // Import the CodeBlock component

const programFourCode = `
#include <iostream>
using namespace std;

struct node {
    int data;
    node* next;
};

// Function to initialize an empty list
node* initialize() {
    return NULL;
}

// Function to add a node at the beginning of the list
node* addAtBegin(node* list, int x) {
    node* p = new node();
    p->data = x;
    p->next = list;
    return p;
}

// Function to add a node at the end of the list
node* addAtEnd(node* list, int x) {
    node* p = new node();
    p->data = x;
    p->next = NULL;
    if (list == NULL) { // If the list is empty, the new node is the list
        return p;
    }
    node* q = list;
    while (q->next != NULL) { // Traverse to the last node
        q = q->next;
    }
    q->next = p; // Link the last node to the new node
    return list;
}

// Function to insert a node before a specific node (with value y)
node* insertBefore(node* list, int x, int y) {
    node* p = new node();
    p->data = x;
    p->next = NULL;

    if (list == NULL) { // Cannot insert before if list is empty
        cout << "List is empty, cannot insert before." << endl;
        delete p;
        return list; // Or return p if you want to insert anyway
    }

    // If the node to insert before is the head
    if (list->data == y) {
        p->next = list;
        return p;
    }

    node* prev = NULL;
    node* curr = list;
    // Traverse to find the node with value y
    while (curr != NULL && curr->data != y) {
        prev = curr;
        curr = curr->next;
    }

    // If node with value y was not found
    if (curr == NULL) {
        cout << "Element " << y << " not found, cannot insert before." << endl;
        delete p;
        return list;
    }

    // Insert the new node
    prev->next = p;
    p->next = curr;
    return list;
}

// Function to search for a value in the list
bool search(node* list, int x) {
    node* p = list;
    while (p != NULL) {
        if (p->data == x) {
            return true; // Found
        }
        p = p->next;
    }
    return false; // Not found
}

// Function to traverse and print the list
void traverse(node* list) {
    node* p = list;
    if (p == NULL) {
        cout << "List is empty." << endl;
        return;
    }
    while (p != NULL) {
        cout << p->data;
        if (p->next != NULL) {
            cout << " -> ";
        }
        p = p->next;
    }
    cout << endl;
}

int main() {
    node* list = initialize();
    cout << "Initial list: ";
    traverse(list);

    list = addAtBegin(list, 10);
    cout << "After adding 10 at beginning: ";
    traverse(list);

    list = addAtBegin(list, 20);
    cout << "After adding 20 at beginning: ";
    traverse(list);

    list = addAtBegin(list, 30);
    cout << "After adding 30 at beginning: ";
    traverse(list);

    list = insertBefore(list, 15, 10);
    cout << "After inserting 15 before 10: ";
    traverse(list);

    list = addAtEnd(list, 5);
    cout << "After adding 5 at end: ";
    traverse(list);

    cout << "Search for 15: " << (search(list, 15) ? "Found" : "Not Found") << endl;
    cout << "Search for 40: " << (search(list, 40) ? "Found" : "Not Found") << endl;

    // Clean up memory (important in C++, though not shown in original code)
    cout << "Cleaning up memory..." << endl;
    node* current = list;
    node* nextNode = NULL;
    while (current != NULL) {
        nextNode = current->next;
        delete current;
        current = nextNode;
    }
    list = NULL; // Set list to NULL after cleanup
    cout << "Memory cleaned up." << endl;

    return 0;
}
`;

export default function ProgramFourPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج الرابع: قائمة مرتبطة مع عمليات الإدراج والبحث والعرض</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يوضح العمليات الأساسية على القائمة المرتبطة البسيطة في لغة C++، بما في ذلك إنشاء القائمة، إضافة عناصر في البداية والنهاية وقبل عنصر محدد، البحث عن عنصر، وعرض محتويات القائمة.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programFourCode} language="cpp" />
        <p className="mt-4 text-sm text-gray-600">
          ملاحظة: تم إضافة تعليقات توضيحية للكود الأصلي وتحسينات طفيفة مثل التعامل مع قائمة فارغة عند الإدراج قبل عنصر، وإضافة جزء لتنظيف الذاكرة في نهاية دالة `main` (وهو أمر مهم في C++).
        </p>
      </div>
    </Layout>
  );
}

