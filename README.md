# 项目说明
-------
&emsp;&emsp;_Axure导出文件夹用于将**css -> wxss**

&emsp;&emsp;pages文件夹用于存放wxml，<font color=red>需求：将每个wxml单独放在*[组件英文]/[组件名]/*的子目录下，微信开发者工具（需要在app.json中将页面路径添加到pages中，运行一下）会自动生成wxss，js与json。将每个json文件添加"pageOrientation": "landscape"</font>

&emsp;&emsp;images文件有每个页面所需的图像，且每个组件都有唯一的id，**如果发现页面没有正常显示，需要查找images文件中组件是否编号正确，其次是wxss是否导入正确**。

&emsp;&emsp;其余文件均为自动生成，不用理会。

#### PS：遇到问题及时反馈哈

# 全局变量说明

目前已知：
排行榜开发  ->  主界面需实现当前用户user的全局变量