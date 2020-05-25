using System;

namespace AddTwoNumbers
{
    class Node
    {
        public int value { get; set; }
        public Node next { get; set; }

        public Node(int x)
        {
            value = x;
            next = null;
        }
    }

    class Program
    {
        public static Program Instance = new Program();

        static void Main(string[] args)
        {
            Node n1 = new Node(2);
            n1.next = new Node(4);
            n1.next.next = new Node(3);

            Node n2 = new Node(5);
            n2.next = new Node(6);
            n2.next.next = new Node(4);

            Node answer = Instance.addTwoNumbers(n1, n2);

            while (answer != null)
            {
                Console.WriteLine(answer.value);
                answer = answer.next;
            }
        }

        public Node addTwoNumbers(Node n1, Node n2)
        {
            Node a = n1;
            Node b = n2;
            int c = 0;
            Node ret = null;
            Node current = null;

            while(a != null || b != null)
            {
                int value = a.value + b.value + c;
                c = value / 10;

                if(current == null)
                {
                    ret = current = new Node(value % 10);
                }
                else
                {
                    current.next = new Node(value % 10);
                    current = current.next;
                }


                //append zeros on the end of the short list
                if(a.next != null || b.next != null)
                {
                    if(a.next == null)
                    {
                        a.next = new Node(0);
                    }
                    
                    if(b.next == null)
                    {
                        b.next = new Node(0);
                    }
                }
                else if(c != 0)
                {
                    current.next = new Node(c);
                }

                a = a.next;
                b = b.next;
            }

            return ret;
        }
    }
}