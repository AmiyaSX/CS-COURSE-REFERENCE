### 4.1.4 与页表操作相关的重要函数

实验二与页表操作相关的函数都放在kernel/vmm.c文件中，其中比较重要的函数有：

-   int map_pages(pagetable_t page_dir, uint64 va, uint64 size, uint64 pa, int perm);
    

该函数的第一个输入参数page_dir为根目录所在物理页面的首地址，第二个参数va则是将要被映射的逻辑地址，第三个参数size为所要建立映射的区间的长度，第四个参数pa为逻辑地址va所要被映射到的物理地址首地址，最后（第五个）的参数perm为映射建立后页面访问的权限。

总的来说，该函数将在给定的page_dir所指向的根目录中，建立[va，va+size]到[pa，pa+size]的映射。

-   pte_t *page_walk(pagetable_t page_dir, uint64 va, int alloc);
    

该函数的第一个输入参数page_dir为根目录所在物理页面的首地址，第二个参数va为所要查找（walk）的逻辑地址，第三个参数实际上是一个bool类型：当它为1时，如果它所要查找的逻辑地址并未建立与物理地址的映射（图4.1中的Page Medium Directory）不存在，则通过分配内存空间建立从根目录到页表的完整映射，并最终返回va所对应的页表项；当它为0时，如果它所要查找的逻辑地址并未建立与物理地址的映射，则返回NULL，否则返回va所对应的页表项。

-   uint64 lookup_pa(pagetable_t pagetable, uint64 va);
    

查找逻辑地址va所在虚拟页面地址（即va将低12位置零）对应的物理页面地址。如果没有与va对应的物理页面，则返回NULL；否则，返回va对应的物理页面地址。



> nvidia-smi