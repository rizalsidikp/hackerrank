/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
    if(head == null || head.next == null) return false;
    Node n = head;
 
    for(int i = 0; i < 100; i++) {
        if(n == null) {
            return false;
        } else {
            n = n.next;
        }
    }
    
    return true;
}

