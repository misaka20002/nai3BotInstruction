---
title: 绘画nai4模型
# description: A guide in my new Starlight docs site.11
sidebar:
  # 为链接设置自定义标签
#   label: 自定义侧边栏 label
  # 为链接设置自定义顺序（数字越小显示在上方）
  order: 2.5
  # 为链接添加徽章
  badge:
    text: New
    variant: tip
---

## 基于nai4预览版

:::note[绘画公式]
#绘画nai4模型2girl, loli, amazing quality, very aesthetic, absurdres, 

{人物 nahida (genshin impact), {位置左} 人物}, 

{人物 klee (genshin impact), t-shirt, white pantyhose, {位置右}, ntags = hat, bag 人物}

:::

### 多角色提示 解析：
- 除了定义整体的画面之外，还可以独立指定每个角色
- `{人物 [tags], {位置xx}, ntags = [ntags] 人物}`
  - **多角色提示输入框**：每个角色用 `{人物 [tags] 人物}` 包裹起来，最多可指定`6名`角色
  - **定义角色特征**：在 `[tags]` 中写入你所定义的角色特征——画风、动作、神态、外貌等等
  - **定义人物位置**： `{位置中}` `{位置左}` `{位置左上}` `{位置左下}` `{位置左左}` `{位置右}` `{位置右下}`  `{位置右右下下}` 等，共定义 `5*5=25` 个位置
  - **定义反面词条**：与定义整体相同，直接在 `{人物 [tags] 人物}` 中使用 `ntags = [ntags]` 即可

### 同时定义6个小可爱！
:::tip[绘画公式]
```
#绘画nai4模型 6girls, loli, amazing quality, very aesthetic, absurdres, 

{人物 paimon (genshin impact) 人物}, 

{人物 nahida (genshin impact), {位置左} 人物}, 

{人物 klee (genshin impact), t-shirt, white pantyhose, {位置右}, ntags = hat, bag 人物}

{人物 sayu (genshin impact)， {位置左左下下} 人物}, 

{人物 diona (genshin impact), {位置右右下下} 人物}, 

{人物 yaoyao (genshin impact), black pantyhose, {位置上上}, ntags = bag 人物}

ntags = blurry, lowres, error, film grain, scan artifacts, worst quality, bad quality, jpeg artifacts, very displeasing, chromatic aberration, logo, dated, signature, multiple views, gigantic breasts
```
:::


:::danger[注意]
- nai4模型预览版 暂不支持：smea、引用图片、局部重画，输入将报错
:::