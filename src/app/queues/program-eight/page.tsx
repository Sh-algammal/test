import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock"; // Import the CodeBlock component

const programEightCode = `
#include<iostream>
using namespace std;

#define QUEUE_SIZE 5 // Renamed from 'size' for clarity

class ArrayQueue // Renamed from 'arrayqueue'
{
    int Q[QUEUE_SIZE];
    int front, rear;

public:
    // Constructor
    ArrayQueue()
    {
        front = -1; // Indicates queue is initially empty
        rear = -1;  // Indicates queue is initially empty
    }

    // Check if the queue is full
    bool isFull() {
        // This condition is for a simple linear queue, not circular
        return rear == QUEUE_SIZE - 1;
    }

    // Check if the queue is empty
    bool isEmpty() {
        return front == -1; // Or front > rear in this simple implementation
    }

    // Add an element to the rear of the queue
    void enqueue(int value)
    {
        if (isFull()) // Check for overflow before inserting
        {
            cout << "Queue Overflow! Cannot enqueue." << endl;
            return;
        }
        // If the queue is initially empty, set front to 0
        if (front == -1) 
        {
            front = 0;
        }
        rear = rear + 1; // Increment rear
        Q[rear] = value;   // Insert the value
        cout << "Enqueued: " << value << endl;
    }

    // Remove an element from the front of the queue
    int dequeue() // Changed return type to int to return the dequeued value
    {
        if (isEmpty()) // Check for underflow before deleting
        {
            cout << "Queue Underflow! Cannot dequeue." << endl;
            return -1; // Indicate error
        }
        int dequeuedValue = Q[front];
        cout << "Dequeued: " << dequeuedValue << endl;

        // If this was the last element, reset the queue to empty state
        if (front == rear)
        {
            front = -1;
            rear = -1;
        }
        else
        {
            front = front + 1; // Move front forward
        }
        return dequeuedValue;
    }

    // Display the elements in the queue
    void display()
    {
        if (isEmpty())
        {
            cout << "Queue is empty." << endl;
            return;
        }
        cout << "Queue (front to rear): ";
        for (int i = front; i <= rear; i++)
        {
            cout << Q[i] << " ";
        }
        cout << endl;
    }

    // Peek at the front element (Added function)
    int peekFront() {
        if (isEmpty()) {
            cout << "Queue is empty, cannot peek." << endl;
            return -1;
        }
        return Q[front];
    }
};

int main()
{
    ArrayQueue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    q.display();

    cout << "Front element: " << q.peekFront() << endl;

    q.enqueue(50); // Fill the queue
    q.display();

    q.enqueue(60); // Try to enqueue into a full queue

    q.dequeue();
    q.dequeue();
    q.display();

    q.enqueue(60); // Enqueue after dequeue (possible in this simple version)
    q.display(); 
    // Note: This simple implementation doesn't handle wrap-around (circular queue).
    // Once rear reaches QUEUE_SIZE-1, enqueue fails even if there's space at the beginning.

    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue(); // Dequeue the last element
    q.display();

    q.dequeue(); // Try to dequeue from empty queue

    return 0;
}
`;

export default function ProgramEightPage() {
  return (
    <Layout>
      <div className="prose lg:prose-xl max-w-none bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">البرنامج الثامن: تنفيذ الطابور باستخدام مصفوفة</h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          هذا البرنامج يوضح كيفية تنفيذ هيكل بيانات الطابور (Queue) باستخدام مصفوفة ذات حجم ثابت في لغة C++. يتبع الطابور مبدأ FIFO (الأول دخولا، الأول خروجا). يتضمن العمليات الأساسية مثل `enqueue` و `dequeue`.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">الكود</h2>
        {/* Use the CodeBlock component for syntax highlighting */}
        <CodeBlock code={programEightCode} language="cpp" />
        <p className="mt-4 text-sm text-gray-600">
          ملاحظة: تم إعادة تسمية الكلاس والثابت، إضافة تعليقات، تحسين رسائل الخطأ، إضافة دالة `peekFront`، وتحسين دالة `main` لتوضيح الحالات المختلفة. هذا التنفيذ هو طابور خطي بسيط ولا يستخدم تقنية الطابور الدائري (circular queue) لتحسين استخدام المساحة.
        </p>
      </div>
    </Layout>
  );
}

