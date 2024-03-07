(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{380:function(n,t,s){"use strict";s.r(t);var e=s(0),a=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"链表的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链表的实现"}},[n._v("#")]),n._v(" 链表的实现")]),n._v(" "),t("p",[n._v("/**")]),n._v(" "),t("ul",[t("li",[n._v("实现一个链表结构")]),n._v(" "),t("li",[n._v("@author guofeng")]),n._v(" "),t("li",[n._v("添加元素：")]),n._v(" "),t("li",[n._v("链表头： O(1)")]),n._v(" "),t("li",[n._v("链表尾： O(n)")]),n._v(" "),t("li",[n._v("删除头: O(1)")]),n._v(" "),t("li",[n._v("删除尾： O(n)")]),n._v(" "),t("li",[n._v("修改： O(n)")]),n._v(" "),t("li",[n._v("查找：O(n)")]),n._v(" "),t("li")]),n._v(" "),t("p",[n._v("*/")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('public class LinkedList<E> {\n\tprivate class Node {\n\t\tprivate E e;\n\t\tprivate Node next;\n\t\t\n\t\tpublic Node(E e, Node next) {\n\t\t\tthis.e = e;\n\t\t\tthis.next = next;\n\t\t}\n\t\tpublic Node(E e) {\n\t\t\tthis(e, null);\n\t\t}\n\t\tpublic Node() {\n\t\t\tthis(null, null);\n\t\t}\n\t\t\n\t\t@Override\n\t\tpublic String toString() {\n\t\t\treturn e.toString();\n\t\t}\n\t}\n\t\n\t// 为链表添加一个元素，在链表头添加是最方便的\n\tprivate int size = 0;\n//\tprivate Node head = null;\n\tprivate Node dummyHead; \n\tpublic LinkedList () {\n\t\tdummyHead = new Node(null, null);\n\t\tsize = 0;\n\t}\n\t\n\tpublic int getSize() {\n\t\treturn size;\n\t}\n\t\n\tpublic boolean isEmpty() {\n\t\treturn size == 0;\n\t}\n\t\n\t// 为链表头添加一个元素\n\tpublic void addFirst(E e) {\n\t\tadd(0, e);\n\t}\n\t\n\t// 在其它位置添加链表\n\tpublic void add(int index, E e) {\n\t\tif(index < 0 || index > size) {\n\t\t\tthrow new IllegalArgumentException("Add failed. Illegal index.");\n\t\t}\n\t\tNode prev = dummyHead;\n\t\tfor(int i = 0; i < index; i ++) {\n\t\t\tprev = prev.next;\n\t\t}\n//\t\tNode node = new Node(e);\n//\t\tnode.next = prev.next;\n//\t\tprev.next = node;\n//\t\t上面写法等于下面写法\n\t\tprev.next = new Node(e, prev.next);\n\t\t// 维护下size\n\t\tsize ++;\n\t}\n\t\n\t// 在链表末尾添加元素\n\tpublic void addLast(E e) {\n\t\tadd(size, e);\n\t}\n\t\n\t// 获取链表中的第 index 个位置的元素\n\t// 不常用，只是练习用\n\t\n\tpublic E get(int index) {\n\t\tNode cur = dummyHead.next;\n\t\tfor(int i = 0; i < index; i ++) {\n\t\t\tcur = cur.next;\n\t\t}\n\t\treturn cur.e;\n\t}\n\t\n\t// 获取链表的第一个元素\n\tpublic E getFirst() {\n\t\treturn get(0);\n\t}\n\t\n\t// 获取链表中的最后一个元素\n\tpublic E getLast() {\n\t\treturn get(size - 1);\n\t}\n\t\n\t// 修改链表中第index 个元素\n\tpublic void set(int index, E e) {\n\t\tif(index < 0 || index >= size) {\n\t\t\tthrow new IllegalArgumentException("set failed, Illegal index.");\n\t\t}\n\t\t\n\t\tNode cur = dummyHead.next;\n\t\tfor(int i = 0; i < index; i ++) {\n\t\t\tcur = cur.next;\n\t\t}\n\t\tcur.e = e;\n\t}\n\t\n\t// 查找链表中是否有元素e\n\tpublic boolean contains(E e) {\n\t\tNode cur = dummyHead.next;\n\t\twhile(cur != null) {\n\t\t\tif(cur.e.equals(e)) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tcur = cur.next;\n\t\t}\n\t\treturn false;\n\t}\n\t\n\t// 删除链表中第index个元素\n\tpublic E remove(int index) {\n\t\tNode pre = dummyHead;\n\t\tif(index < 0 || index >= size) {\n\t\t\tthrow new IllegalArgumentException("set failed, Illegal index.");\n\t\t}\n\t\tfor(int i = 0; i < index; i ++) {\n\t\t\tpre = pre.next;\n\t\t}\n\t\tNode retNode = pre.next;\n\t\tpre.next = retNode.next;\n\t\tretNode.next = null;\n\t\tsize --;\n\t\treturn retNode.e;\n\t}\n\t\n\t// 删除链表中的第一个元素\n\tpublic E removeFirst() {\n\t\treturn remove(0);\n\t}\n\t\n\t// 删除链表中的最后一个元素\n\tpublic E removeLast() {\n\t\tSystem.out.println("size: "+ size);\n\t\treturn remove(size - 1);\n\t}\n\t\n\t// 链表的遍历\n\t@Override\n\tpublic String toString() {\n\t\tStringBuilder sb = new StringBuilder();\n\t\tNode cur = dummyHead.next;\n\t\twhile(cur != null) {\n\t\t\tsb.append(cur + "->");\n\t\t\tcur = cur.next;\n\t\t}\n\t\tsb.append("NULL");\n\t\treturn sb.toString();\n\t}\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br"),t("span",{staticClass:"line-number"},[n._v("57")]),t("br"),t("span",{staticClass:"line-number"},[n._v("58")]),t("br"),t("span",{staticClass:"line-number"},[n._v("59")]),t("br"),t("span",{staticClass:"line-number"},[n._v("60")]),t("br"),t("span",{staticClass:"line-number"},[n._v("61")]),t("br"),t("span",{staticClass:"line-number"},[n._v("62")]),t("br"),t("span",{staticClass:"line-number"},[n._v("63")]),t("br"),t("span",{staticClass:"line-number"},[n._v("64")]),t("br"),t("span",{staticClass:"line-number"},[n._v("65")]),t("br"),t("span",{staticClass:"line-number"},[n._v("66")]),t("br"),t("span",{staticClass:"line-number"},[n._v("67")]),t("br"),t("span",{staticClass:"line-number"},[n._v("68")]),t("br"),t("span",{staticClass:"line-number"},[n._v("69")]),t("br"),t("span",{staticClass:"line-number"},[n._v("70")]),t("br"),t("span",{staticClass:"line-number"},[n._v("71")]),t("br"),t("span",{staticClass:"line-number"},[n._v("72")]),t("br"),t("span",{staticClass:"line-number"},[n._v("73")]),t("br"),t("span",{staticClass:"line-number"},[n._v("74")]),t("br"),t("span",{staticClass:"line-number"},[n._v("75")]),t("br"),t("span",{staticClass:"line-number"},[n._v("76")]),t("br"),t("span",{staticClass:"line-number"},[n._v("77")]),t("br"),t("span",{staticClass:"line-number"},[n._v("78")]),t("br"),t("span",{staticClass:"line-number"},[n._v("79")]),t("br"),t("span",{staticClass:"line-number"},[n._v("80")]),t("br"),t("span",{staticClass:"line-number"},[n._v("81")]),t("br"),t("span",{staticClass:"line-number"},[n._v("82")]),t("br"),t("span",{staticClass:"line-number"},[n._v("83")]),t("br"),t("span",{staticClass:"line-number"},[n._v("84")]),t("br"),t("span",{staticClass:"line-number"},[n._v("85")]),t("br"),t("span",{staticClass:"line-number"},[n._v("86")]),t("br"),t("span",{staticClass:"line-number"},[n._v("87")]),t("br"),t("span",{staticClass:"line-number"},[n._v("88")]),t("br"),t("span",{staticClass:"line-number"},[n._v("89")]),t("br"),t("span",{staticClass:"line-number"},[n._v("90")]),t("br"),t("span",{staticClass:"line-number"},[n._v("91")]),t("br"),t("span",{staticClass:"line-number"},[n._v("92")]),t("br"),t("span",{staticClass:"line-number"},[n._v("93")]),t("br"),t("span",{staticClass:"line-number"},[n._v("94")]),t("br"),t("span",{staticClass:"line-number"},[n._v("95")]),t("br"),t("span",{staticClass:"line-number"},[n._v("96")]),t("br"),t("span",{staticClass:"line-number"},[n._v("97")]),t("br"),t("span",{staticClass:"line-number"},[n._v("98")]),t("br"),t("span",{staticClass:"line-number"},[n._v("99")]),t("br"),t("span",{staticClass:"line-number"},[n._v("100")]),t("br"),t("span",{staticClass:"line-number"},[n._v("101")]),t("br"),t("span",{staticClass:"line-number"},[n._v("102")]),t("br"),t("span",{staticClass:"line-number"},[n._v("103")]),t("br"),t("span",{staticClass:"line-number"},[n._v("104")]),t("br"),t("span",{staticClass:"line-number"},[n._v("105")]),t("br"),t("span",{staticClass:"line-number"},[n._v("106")]),t("br"),t("span",{staticClass:"line-number"},[n._v("107")]),t("br"),t("span",{staticClass:"line-number"},[n._v("108")]),t("br"),t("span",{staticClass:"line-number"},[n._v("109")]),t("br"),t("span",{staticClass:"line-number"},[n._v("110")]),t("br"),t("span",{staticClass:"line-number"},[n._v("111")]),t("br"),t("span",{staticClass:"line-number"},[n._v("112")]),t("br"),t("span",{staticClass:"line-number"},[n._v("113")]),t("br"),t("span",{staticClass:"line-number"},[n._v("114")]),t("br"),t("span",{staticClass:"line-number"},[n._v("115")]),t("br"),t("span",{staticClass:"line-number"},[n._v("116")]),t("br"),t("span",{staticClass:"line-number"},[n._v("117")]),t("br"),t("span",{staticClass:"line-number"},[n._v("118")]),t("br"),t("span",{staticClass:"line-number"},[n._v("119")]),t("br"),t("span",{staticClass:"line-number"},[n._v("120")]),t("br"),t("span",{staticClass:"line-number"},[n._v("121")]),t("br"),t("span",{staticClass:"line-number"},[n._v("122")]),t("br"),t("span",{staticClass:"line-number"},[n._v("123")]),t("br"),t("span",{staticClass:"line-number"},[n._v("124")]),t("br"),t("span",{staticClass:"line-number"},[n._v("125")]),t("br"),t("span",{staticClass:"line-number"},[n._v("126")]),t("br"),t("span",{staticClass:"line-number"},[n._v("127")]),t("br"),t("span",{staticClass:"line-number"},[n._v("128")]),t("br"),t("span",{staticClass:"line-number"},[n._v("129")]),t("br"),t("span",{staticClass:"line-number"},[n._v("130")]),t("br"),t("span",{staticClass:"line-number"},[n._v("131")]),t("br"),t("span",{staticClass:"line-number"},[n._v("132")]),t("br"),t("span",{staticClass:"line-number"},[n._v("133")]),t("br"),t("span",{staticClass:"line-number"},[n._v("134")]),t("br"),t("span",{staticClass:"line-number"},[n._v("135")]),t("br"),t("span",{staticClass:"line-number"},[n._v("136")]),t("br"),t("span",{staticClass:"line-number"},[n._v("137")]),t("br"),t("span",{staticClass:"line-number"},[n._v("138")]),t("br"),t("span",{staticClass:"line-number"},[n._v("139")]),t("br"),t("span",{staticClass:"line-number"},[n._v("140")]),t("br"),t("span",{staticClass:"line-number"},[n._v("141")]),t("br"),t("span",{staticClass:"line-number"},[n._v("142")]),t("br"),t("span",{staticClass:"line-number"},[n._v("143")]),t("br"),t("span",{staticClass:"line-number"},[n._v("144")]),t("br"),t("span",{staticClass:"line-number"},[n._v("145")]),t("br"),t("span",{staticClass:"line-number"},[n._v("146")]),t("br"),t("span",{staticClass:"line-number"},[n._v("147")]),t("br"),t("span",{staticClass:"line-number"},[n._v("148")]),t("br"),t("span",{staticClass:"line-number"},[n._v("149")]),t("br"),t("span",{staticClass:"line-number"},[n._v("150")]),t("br"),t("span",{staticClass:"line-number"},[n._v("151")]),t("br"),t("span",{staticClass:"line-number"},[n._v("152")]),t("br"),t("span",{staticClass:"line-number"},[n._v("153")]),t("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);