# wloc-qx

Quantumult X 的 Apple WLOC 定位修改重写自用镜像。

## Quantumult X 重写订阅

```text
https://raw.githubusercontent.com/sbc2fjbdn5-prog/wloc-qx/refs/heads/main/modules/wloc.conf
```

仓库内同时保存了重写所依赖的脚本，`wloc.conf` 中的脚本地址已全部改为本仓库，因此上游仓库变动不会影响这些 Raw GitHub 文件。

## 文件

- `modules/wloc.conf`：Quantumult X 重写配置
- `dist/wloc.js`：WLOC 响应处理脚本
- `dist/wloc-settings.js`：坐标设置脚本

## 来源与说明

- 上游项目：<https://github.com/Yu9191/wloc>
- 原作者：Yu9191
- 本仓库仅作个人备份镜像，保留原作者署名。

使用前请在 Quantumult X 中启用 MITM，并信任相应证书。导入或更新时请自行核对脚本内容。
