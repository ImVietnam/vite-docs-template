---
sidebar: false
---

# Thông báo Vite 2.0

_February 16, 2021_ - Kiểm tra [Thông báo Vite 3.0](./announcing-vite3.md)

<p style="text-align:center">
  <img src="/logo.svg" style="height:200px">
</p>

Hôm nay chúng tôi rất vui mừng thông báo về việc phát hành chính thức Vite 2.0!

Vite (từ tiếng Pháp có nghĩa là "nhanh", phát âm là `/vit/`) là một loại công cụ xây dựng mới để phát triển web frontend. Hãy nghĩ đến sự kết hợp giữa máy chủ nhà phát triển + bộ đóng gói được định cấu hình sẵn, nhưng tinh gọn hơn và nhanh hơn. Nó tận dụng [các mô-đun ES gốc của trình duyệt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) hỗ trợ và các công cụ được viết bằng các ngôn ngữ biên dịch thành ngôn ngữ gốc như [esbuild](https://esbuild.github.io/) để mang lại trải nghiệm phát triển linh hoạt và hiện đại.

Để biết Vite nhanh như thế nào, hãy xem [so sánh video này](https://twitter.com/amasad/status/1355379680275128321) khởi động ứng dụng React trên Repl.it bằng Vite vs. `create-react-app` (CRA).

Nếu bạn chưa từng nghe nói về Vite trước đây và muốn tìm hiểu thêm về nó, hãy xem [lý do đằng sau dự án](https://vitejs.dev/guide/why.html). Nếu bạn quan tâm đến việc Vite khác với các công cụ tương tự khác như thế nào, hãy xem [so sánh](https://vitejs.dev/guide/comparisons.html).

## Có gì mới trong 2.0

Vì chúng tôi đã quyết định tái cấu trúc hoàn toàn các phần bên trong trước khi 1.0 ra khỏi RC, nên trên thực tế, đây là bản phát hành ổn định đầu tiên của Vite. Điều đó nói rằng, Vite 2.0 mang lại nhiều cải tiến lớn so với phiên bản trước:

### Framework Agnostic Core

Ý tưởng ban đầu của Vite bắt đầu như một [nguyên mẫu hacky phục vụ các thành phần tệp đơn Vue trên ESM gốc](https://github.com/vuejs/vue-dev-server). Vite 1 là sự tiếp nối của ý tưởng đó với HMR được triển khai ở trên cùng.

Vite 2.0 sử dụng những gì chúng tôi đã học được trong quá trình thực hiện và được thiết kế lại từ đầu với kiến trúc bên trong mạnh mẽ hơn. Giờ đây, nó hoàn toàn không thể tin vào framework và tất cả hỗ trợ dành riêng cho framework được ủy quyền cho các plugin. Hiện đã có [các mẫu chính thức cho Vue, React, Preact, Lit Element](https://github.com/vitejs/vite/tree/main/packages/create-vite) và cộng đồng đang nỗ lực tích hợp Svelte.

### Định dạng Plugin và API mới

Lấy cảm hứng từ [WMR](https://github.com/preactjs/wmr), hệ thống plugin mới mở rộng giao diện plugin của Rollup và [tương thích với nhiều plugin Rollup](https://vite-rollup-plugins.patak.dev/) từ ban đầu. Các plugin có thể sử dụng các hook tương thích với Rollup, với các hook và thuộc tính bổ sung dành riêng cho Vite để điều chỉnh hành vi chỉ dành cho Vite (ví dụ: phân biệt nhà phát triển với bản dựng hoặc xử lý HMR tùy chỉnh).
​

[API có lập trình](https://vitejs.dev/guide/api-javascript.html) cũng đã được cải tiến rất nhiều để hỗ trợ các công cụ/framework khổ cấp cao hơn được xây dựng trên Vite.

### Gói trước Dep được hỗ trợ bởi esbuild

Vì Vite là một máy chủ dành cho nhà phát triển ESM gốc, nên nó gói sẵn các dependency để giảm số lượng yêu cầu trình duyệt và xử lý chuyển đổi CommonJS sang ESM. Trước đây, Vite đã làm điều này bằng cách sử dụng Rollup và trong 2.0, Vite hiện sử dụng `esbuild`, dẫn đến gói trước dependency nhanh hơn 10-100 lần. Để tham khảo, việc khởi động nguội một ứng dụng thử nghiệm có nhiều dependency như React Material UI trước đây mất 28 giây trên MacBook Pro hỗ trợ M1 và hiện mất ~1,5 giây. Mong đợi những cải tiến tương tự nếu bạn đang chuyển từ thiết lập dựa trên gói truyền thống.

### Hỗ trợ CSS hạng nhất

Vite coi CSS là công dân hạng nhất của biểu đồ mô-đun và hỗ trợ những điều sau đây:

- **Tăng cường trình giải quyết**: các đường dẫn `@import` và `url()` trong CSS được cải tiến với trình phân giải của Vite để tôn trọng các bí danh và dependency npm.
- **Khởi động lại URL**: các đường dẫn `url()` sẽ tự động được khởi động lại bất kể tệp được nhập từ đâu.
- **Tách mã CSS**: một chunk JS được phân tách mã cũng phát ra một tệp CSS tương ứng, tệp này sẽ tự động được tải song song với chunk JS khi được yêu cầu.

### Hỗ trợ Render phía máy chủ (SSR trong tiếng Anh)

Vite 2.0 xuất xưởng với [hỗ trợ SSR thử nghiệm](https://vitejs.dev/guide/ssr.html). Vite cung cấp các API để tải và cập nhật hiệu quả mã nguồn dựa trên ESM trong Node.js trong quá trình phát triển (gần giống như HMR phía máy chủ) và tự động mở rộng các phụ thuộc tương thích với CommonJS để cải thiện tốc độ phát triển và xây dựng SSR. Máy chủ sản xuất có thể được tách rời hoàn toàn khỏi Vite và có thể dễ dàng điều chỉnh thiết lập tương tự để thực hiện kết xuất trước / SSG.

Vite SSR is provided as a low-level feature and we are expecting to see higher level frameworks leveraging it under the hood.

### Opt-in Legacy Browser Support

Vite targets modern browsers with native ESM support by default, but you can also opt-in to support legacy browsers via the official [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy). The plugin automatically generates dual modern/legacy bundles, and delivers the right bundle based on browser feature detection, ensuring more efficient code in modern browsers that support them.

## Give it a Try!

That was a lot of features, but getting started with Vite is simple! You can spin up a Vite-powered app literally in a minute, starting with the following command (make sure you have Node.js >=12):

```bash
npm init @vitejs/app
```

Then, check out [the guide](https://vitejs.dev/guide/) to see what Vite provides out of the box. You can also check out the source code on [GitHub](https://github.com/vitejs/vite), follow updates on [Twitter](https://twitter.com/vite_js), or join discussions with other Vite users on our [Discord chat server](http://chat.vitejs.dev/).
