## 9 / 20  [最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/)

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

```c++
class Solution {

public:
/**  
 * 1.特判输入字符串为 "" 时  
 * */
 string longestCommonPrefix(vector<string>& strs) {  
    string prefix;  
    int index = 0;  
    for (string str = strs[0]; index < str.size(); index++) {  
        char c = str[index];  
        for (string str : strs) {  
            if (str == "") return "";  
            if (c != str[index] || index >= str.size()) {  
                return prefix;  
            }  
        }  
        prefix.push_back(c);  
    }  
    return prefix;  
}

};
```

## 9/21 [不同路径](https://leetcode.cn/problems/unique-paths/)
一个机器人位于一个 m x n 网格的左上角，机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角，问总共有多少条不同的路径？
```C++
/**  
 * 不同路径  
 * （动态规划）
 * a[m][n] = a[m-1][n] + a[m][n-1] * */
 int a[101][101];  
int uniquePaths(int m, int n) {  
    a[0][0] = a[1][1] = a[1][0] = a[0][1] = 0;  
    for (int i = 1; i <= m; ++i) {  
        a[i][1] = 1;  
    }  
    for (int i = 1; i <= n; ++i) {  
        a[1][i] = 1;  
    }  //两个特殊初始化很重要，因为后面计算会用到，不初始化会少算路径
    for (int i = 2; i <= m; ++i) {  
        for (int j = 2; j <= n; ++j) {  
            a[i][j] = a[i-1][j] + a[i][j-1];  
        }  
    }  
    return a[m][n];  
}
```

## 9 / 25 #### [不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)
给你一个整数 `n` ，求恰由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的 **二叉搜索树** 有多少种？返回满足题意的二叉搜索树的种数。
```c++
/**  
 * 动态规划  
 * G[n] = f[1] + f[2] ... + f[n] * f[i] = G[i-1] * G[n-i] （左右子树）  
 * */int G[20];  
int numTrees(int n) {  
    G[0] = 1, G[1] = 1;  
    for (int i = 2; i <= n; ++i) {  
        for (int j = 1; j <= i; ++j) {  
            G[i] += G[j-1] * G[i-j];  
        }  
    }  
    return G[n];  
}
```

## 9/22  [通配符匹配](https://leetcode.cn/problems/wildcard-matching/)
给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'\*' 可以匹配任意字符串（包括空字符串）
```c++
/**  大模拟好难QAQ
 * 通配符匹配(hard)  
 * （双指针）  
 * */bool isMatch(string s, string p) {  
    int i, j = 0;  
    if(p.size() == 0) { //防止空字符串  
        return s.size() == 0;  
    }  
    for (i = 0; i < p.size(); ) {  
        if (j == s.size()) {  
            if (p[i]!='*')  
                return false;  
            else i++;  
        }  
        for ( ; j < s.size(); ) {  
            if(i >= p.size())  
                return false;  
            if (p[i] != '*' && p[i] != '?') {  
                if (p[i] == s[j]) {  
                    i++, j++;  
                    continue;                } else {  
                    return false;  
                }  
            }  
            if (p[i] == '?') {  
                i++,j++;  
                continue;            }  
            if (p[i] == '*') {  
                if (i == p.size()-1) {  
                    return true;  
                }  
                //匹配到p的最后一个字符时是'*'，返回真  
                while (i < p.size() && p[i] == '*') {  
                    i++;  
                }  
                char c;  
                if (i == p.size()) {  
                    return true;  
                } else {  
                    c = p[i];  
                }  
                //匹配到p前面的字符是'*'，将i移到不是'*'或'?'的字符，保存在c中，如果全是'*'则匹配成功  
                while (j < s.size()) {  
                    if (s[j] == c || c == '?') {  
                        if (isMatch(s.substr(j,s.size()), p.substr(i,p.size()))) {  
                            return true;  
                        } //有效解决*的多情况匹配问题  
                    }  
                    j++;  
                }  
                if (j == s.size()) {  
                    return false;  
                }  
                //用p的非'*'字符往下进行匹配，只要接下来有相应字符就可以继续匹配，否则匹配错误  
//                i++, j++;  //s[j]==c  
            }  
  
        }  
    }  
    return true;  
}
```

## 9 / 23 [Excel 表列序号](https://leetcode.cn/problems/excel-sheet-column-number/)
给你一个字符串 `columnTitle` ，表示 Excel 表格中的列名称。返回 _该列名称对应的列序号_ 。
```c++
/**
* 26进制转10进制
**/
int titleToNumber(string columnTitle) {  
    int num = 0, n = columnTitle.size();  
    for (int i = 0; i < n; ++i) {  
        num = num * 26 + (columnTitle[i] - 'A' + 1) ;  
    }  
    return num;  
}
```

## 9 / 27 [连续数组](https://leetcode.cn/problems/contiguous-array/)
给定一个二进制数组 `nums` , 找到含有相同数量的 `0` 和 `1` 的最长连续子数组，并返回该子数组的长度。
```c++
/**  
 * 将所有0置-1，sum[i] = sum[j] 满足i～j是一个满足条件的数组
 * */
int res = 0;  
map<int, int> idMap = map<int, int>();  
int findMaxLength(vector<int>& nums) {  
    int sum = 0;  
    for (int i = 0; i < nums.size(); ++i) {  
        if (nums[i]==0) nums[i] = -1;  
    }  
    for (int i = 0; i < nums.size(); ++i) {  
        sum += nums[i];  
        if (sum == 0) {  
            res = i + 1;  
            continue;        }  
        if (idMap.count(sum)) {  
            res = max(i-idMap[sum], res);  
        } else {  
            idMap.insert(pair<int, int>(sum, i));  
        }  
    }  
    return res;  
}
```