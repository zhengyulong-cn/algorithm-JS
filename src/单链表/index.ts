import ListNode from './LinkNode'
// 尾插法创建单链表
export const initList = <T>(initData: Array<T>): ListNode<T> | null => {
  let p: ListNode<T> | null = null
  let head: ListNode<T> | null = p
  for (const val of initData) {
    const node = new ListNode<T>(val)
    if (head === null) {
      head = node
      p = node
    } else {
      p.next = node
      p = node
    }
  }
  return head
}

// 扁平输出单链表
export const flatList = <T>(head: ListNode<T>): Array<T> => {
  let p: ListNode<T> | null = head
  const arr: Array<T> = []
  while (p !== null) {
    arr.push(p.val)
    p = p.next
  }
  return arr
}

// 单链表插入节点
export const insertNode = <T>(head: ListNode<T> | null, val: T, pos: number): ListNode<T> | null => {
  let p: ListNode<T> | null = head
  while (pos--) {
    p = p.next
  }
  const node = new ListNode<T>(val)
  node.next = p.next
  p.next = node
  return head
}

// 单链表删除节点
export const deleteNode = <T>(head: ListNode<T> | null, val: T): ListNode<T> | null => {
  let p: ListNode<T> | null = head
  let pre: ListNode<T> | null = head
  while (p.val !== val) {
    
  }
  return head
}