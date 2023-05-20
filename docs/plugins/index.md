# Plugin

:::tip LƯU Ý
Vite nhằm mục đích cung cấp hỗ trợ vượt trội cho các mẫu phát triển web phổ biến. Trước khi tìm kiếm plugin Vite hoặc Rollup tương thích, hãy xem [Hướng dẫn tính năng](../guide/features.md). Rất nhiều trường hợp cần có plugin trong dự án Rollup đã được đề cập trong Vite.
:::

Xem qua [Sử dụng plugin](../guide/using-plugins) để biết thông tin về cách sử dụng plugin

## Plugin chính thức

### [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)

- Cung cấp hỗ trợ Vue 3 Single File Components.

### [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

- Cung cấp hỗ trợ Vue 3 JSX (thông qua [biến đổi Babel chuyên dụng](https://github.com/vuejs/jsx-next)).

### [@vitejs/plugin-vue2](https://github.com/vitejs/vite-plugin-vue2)

- Cung cấp hỗ trợ Vue 2 Single File Components.

### [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)

- Sử dụng esbuild và Babel, đạt được HMR nhanh với dấu chân gói nhỏ và tính linh hoạt khi có thể sử dụng quy trình chuyển đổi Babel. Không có plugin Babel bổ sung, chỉ esbuild được sử dụng trong quá trình xây dựng.

### [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)

- Thay thế Babel bằng SWC trong quá trình phát triển. Trong quá trình xây dựng, SWC+esbuild được sử dụng khi sử dụng plugin và chỉ esbuild nếu không. Đối với các dự án lớn không yêu cầu tiện ích mở rộng React không chuẩn, khởi động nguội và Thay thế mô-đun nóng (HMR hay Hot Module Replacement) có thể nhanh hơn đáng kể.

### [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

- Cung cấp hỗ trợ trình duyệt cũ cho bản dựng sản xuất.

## Plugin cộng đồng

Xem qua [awesome-vite](https://github.com/vitejs/awesome-vite#plugins) - bạn cũng có thể gửi PR để liệt kê các plugin của mình ở đó.

## Plugin Rollup

[Plugin vite](../guide/api-plugin) là một phần mở rộng của giao diện plugin của Rollup. Xem qua phần [Khả năng tương thích plugin Rollup](../guide/api-plugin#rollup-plugin-compatibility) để biết thêm thông tin.
