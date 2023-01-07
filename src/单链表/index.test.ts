import ListNode from './LinkNode'
import { initList, flatList, insertNode } from './index'
import { deepClone } from '../utils/index'

const initArr: Array<number> = [1, 2, 3, 4, 5]
const list: ListNode<number> = initList<number>(initArr)

describe('链表操作', () => {
  test('创建单链表和输出单链表', () => {
    expect(flatList(list)).toStrictEqual([1, 2, 3, 4, 5])
  })

  test('在指定位置插入节点', () => {
    const val = -100
    const pos = 1
    const newList = insertNode<number>(list, val, pos)
    const newArr = deepClone(initArr)
    newArr.splice(2, 0, val)
    expect(flatList(newList)).toStrictEqual(newArr)
  })
})

test('jest/mock Test', () => {
  const myMock = jest.fn(x => x + 100)
  const res1 = myMock(52)
  const res2 = myMock(88)
  console.log(res1, res2, myMock(1), myMock.mock)
})
