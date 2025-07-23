// 防止复制和查看源码的通用JavaScript
(function () {
  // 禁用右键菜单
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // 禁用常见的查看源码快捷键
  document.addEventListener("keydown", function (e) {
    if (
      // 禁用F12
      e.keyCode === 123 ||
      // 禁用Ctrl+Shift+I
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
      // 禁用Ctrl+Shift+J
      (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
      // 禁用Ctrl+U
      (e.ctrlKey && e.keyCode === 85)
    ) {
      e.preventDefault();
    }
  });

  // 对输入和输出区域启用选择
  document.querySelectorAll(".input-area, .output-area").forEach(function (el) {
    el.classList.add("allow-select");
  });

  // 添加版权信息水印
  function addWatermark() {
    const watermark = document.createElement("div");
    watermark.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.1;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #666;
        `;
    watermark.innerHTML = "© 2025 MyNameWax";
    document.body.appendChild(watermark);
  }
  addWatermark();

  // 混淆关键函数名称
  const _0x4f8d = ["log", "warn"];
  window["console"][_0x4f8d[0]] = function () {}; // 禁用console.log
  window["console"][_0x4f8d[1]] = function () {}; // 禁用console.warn
})();
