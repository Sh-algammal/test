import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock"; // Import the CodeBlock component

const programFiveCode = `
#include<iostream>
using namespace std;

struct node{
    int data;
    node* next;
};

// Function to initialize an empty list (redundant, can use NULL directly)
node* initialize(){
    return NULL;
}

// Function to add a node at the beginning
node* addAtBegin(node* list, int x){
    node* p = new node();
    p->data = x;
    p->next = list;
    return p;
}

// Function to traverse and print the list
void traverse(node* list){
    node* p = list;
    if (p == NULL) {
        cout << "List is empty." << endl;
        return;
    }
    while (p != NULL)
    {
        cout << p->data;
        if (p->next != NULL)
        {
            cout << " -> ";
        }
        p = p->next;
    }
    cout << endl;
}

// Function to delete the node at the beginning
node* deleteBegin(node* list){
    if (list == NULL) {
        cout << "List is empty, cannot delete from beginning." << endl;
        return NULL;
    }
    node* p = list;
    list = list->next;
    cout << "Deleted node with value: " << p->data << endl;
    delete p;
    return list;
}

// Function to delete the node at the end
node* deleteEnd(node* list){
    if (list == NULL) {
        cout << "List is empty, cannot delete from end." << endl;
        return NULL;
    }
    // If there's only one node
    if (list->next == NULL)
    {
        cout << "Deleted node with value: " << list->data << endl;
        delete list;
        return NULL;
    }
    node* p = list;
    node* q = NULL; // To keep track of the node before the last one
    // Traverse to the last node
    while (p->next != NULL)
    {
        q = p;
        p = p->next;
    }
    q->next = NULL; // Unlink the last node
    cout << "Deleted node with value: " << p->data << endl;
    delete p; // Delete the last node
    return list;
}

// Function to delete a specific node with value x
node* deleteNode(node* list, int x){
    if (list == NULL) {
         cout << "List is empty, cannot delete node." << endl;
        return NULL;
    }

    node* p = list;
    node* q = NULL; // To keep track of the previous node

    // Traverse to find the node with value x
    while (p != NULL && p->data != x)
    {
        q = p;
        p = p->next;
    }

    // If the node was not found
    if (p == NULL) {
        cout << "Node with value " << x << " not found." << endl;
        return list;
    }

    // If the node to delete is the head node
    if (q == NULL)
    {
        list = list->next; // Move head to the next node
    }
    else // If it's not the head node
    {
        q->next = p->next; // Link the previous node to the node after p
    }
    cout << "Deleted node with value: " << p->data << endl;
    delete p; // Delete the found node
    return list;
}

// Function to delete the entire list
node* deleteWhole(node* list){
    node* p = list;
    node* nextNode = NULL;
    cout << "Deleting whole list..." << endl;
    while (p != NULL)
    {
        nextNode = p->next;
        // cout << "Deleting node with value: " << p->data << endl; // Optional: print each deletion
        delete p;
        p = nextNode;
    }
    cout << "Whole list deleted." << endl;
    return NULL; // The list is now empty
}

int main(){
    node* list = NULL; // Initialize directly with NULL

    list = addAtBegin(list, 40);
    list = addAtBegin(list, 30);
    list = addAtBegin(list, 20);
    list = addAtBegin(list, 10);
    cout << "Original list: ";
    traverse(list);

    list = deleteBegin(list);
    cout << "After deleting the first node: ";
    traverse(list);

    list = deleteEnd(list);
    cout << "After deleting the last node: ";
    traverse(list);

    list = deleteNode(list, 20);
    cout << "After deleting node with value 20: ";
    traverse(list);

    list = deleteWhole(list);
    cout << "After deleting the whole list: ";
    traverse(list);

    return 0;
}
`;

export default function ProgramFivePage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج الخامس: قائمة مرتبطة مع عملية الحذف</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يركز على عمليات الحذف المختلفة في القائمة المرتبطة بلغة C++: حذف العقدة الأولى، حذف العقدة الأخيرة، حذف عقدة بقيمة محددة، وحذف القائمة بأكملها.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programFiveCode} language="cpp" />
        <p className="mt-4 text-sm text-gray-600">
          ملاحظة: تم إضافة تعليقات توضيحية للكود الأصلي، تحسين التعامل مع الحالات الطرفية (مثل القائمة الفارغة)، توحيد أسماء بعض الدوال (مثل `addAtBegin` و `deleteBegin`)، وإضافة رسائل توضيحية عند الحذف.
        </p>
      </div>
    </Layout>
  );
}

