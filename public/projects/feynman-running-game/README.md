# Feynman 跑酷游戏 v2.0

## 项目简介

Feynman 跑酷游戏是一个简单而有趣的网页游戏，玩家控制一个角色在不断移动的场景中奔跑和跳跃，躲避障碍物并获得分数。游戏支持中英文双语，包含多种特殊能力和开发者模式。当得分达到50分时即可通关。

## 功能特点

### 基础功能
- 简单易上手的游戏玩法
- 角色可以跑动和跳跃（包括二段跳）
- 随机生成的障碍物和云朵
- 实时计分系统
- 游戏暂停/继续功能
- 响应式设计，适应不同屏幕尺寸

### 高级功能
- 中英文双语支持
- 聊天系统和历史记录
- 特殊能力系统（飞行、无敌等）
- 开发者模式和命令系统
- 云朵平台系统
- 难度动态调整
- 通关系统（50分通关）

## 游戏控制

### 基础控制
- 空格键：跳跃（可二段跳）
- A键/←：向左移动
- D键/→：向右移动
- P键：暂停/继续游戏
- R键：刷新页面

### 聊天和命令
- T键：打开聊天输入
- /键：打开命令输入
- H键：查看聊天历史
- K键：切换开发者模式

### 开发者命令
- `/score=数字`：设置分数（-1设置为无限）
- `/score+数字`：增加分数
- `/score-数字`：减少分数
- `/score*数字`：分数乘以数字
- `/score//数字`：分数除以数字
- `/effect no_die 秒数`：获得无敌时间（-1为永久无敌）
- `/effect clean`：清除所有效果
- `/skin set 皮肤名`: 切换角色皮肤
- `/skin reset`: 重置为默认皮肤

可用皮肤:
- default: 默认角色
- redball: 红球
- worker: 工人
- mom: 厨师
- player: 玩家

## 游戏机制

### 通关条件
- 达到50分即可通关
- 通关后显示胜利界面
- 可以选择返回菜单重新开始

### 得分奖励
- 10分：获得5秒无敌时间
- 20分：解锁一次性飞行能力
- 40分：获得10秒无敌时间
- 60分：障碍物减速10秒

### 云朵系统
- 随机生成的云朵可作为临时平台
- 云朵会周期性消失和出现
- 即将消失时会有警告提示

### 飞行系统
- 获得飞行能力后按空格启动
- 飞行时按住空格上升，按住Shift下降
- 飞行持续20秒
- 每局游戏只能使用一次

### 皮肤系统
- 多种可选角色皮肤
- 通过开发者命令切换
- 每个皮肤具有独特外观
- 可随时切换回默认皮肤(/skin reset)

## 安装和运行

1. 克隆或下载此仓库到本地机器
2. 使用现代网页浏览器打开 `index.html` 文件
3. 选择游戏语言
4. 选择关卡开始游戏

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)

## 文件结构

- `index.html`: 游戏的主HTML文件
- `style.css`: 游戏的样式表
- `game.js`: 游戏的主要逻辑和功能
- `assets/`: 包含游戏中使用的图像和图标
  - `mario.svg`: 角色图像
  - `tree.svg`: 障碍物图像
  - `cloud.svg`: 云朵图像

## 版本历史

### v2.1
- 添加通关系统（50分通关）
- 添加开发者模式和命令系统
- 添加聊天功能和历史记录
- 改进云朵系统
- 优化游戏性能和用户体验

## 贡献

欢迎提出建议和改进意见！如果您想为这个项目做出贡献，请遵循以下步骤：

1. Fork 这个仓库
2. 创建您的特性分支
3. 提交您的更改
4. 推送到分支
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请见 `LICENSE` 文件。

## 联系方式

如果您有任何问题或建议，请通过以下方式联系我：
- Email: [woshixieruiman@gmail.com]

感谢您对 Feynman 跑酷游戏的关注！