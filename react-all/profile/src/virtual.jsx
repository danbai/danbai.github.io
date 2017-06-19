<script>
    /*
    1.DOM是HTML,XML,XHTML的一种抽象描述,它会把这些文档转换成树类型的数据结构,被称为DOM tree.
    Virtual DOM是独立React所存在的,只不过React在渲染的时候采用了这个技术来提高效率.
    用轻量级的js数据能完全代替庞杂的DOM结构来表述相同的内容.
    JSX是一种创造ReactElement的便捷写法,而ReactElement是一种轻量级的,无状态的,不可改变的,DOM元素的虚拟表述.
    其实就是用一个js对象来表述DOM元素而已.
    将ReactElement插入真正的DOM中,可以调用ReactDOM的render方法.
    Virtual DOM只不过就是DOM结构的js对象描述,那么它比DOM更高效,当发生任何更新的时候,
    这些变更都会发生在Virtual DOM树上面,这些操作都是对js对象的操作,速度很快.
    当一系列更新完成的时候,就会产生一棵新的Virtual DOM树,为了比较两棵树的异同,引入一种diff算法.
    它的核心在于用js对象来表述DOM结构,使用Diff算法来取得两个对象之间的差异,并且用最少的DOM操作完成更新.
    */
</script>