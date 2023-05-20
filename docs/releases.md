# Phát hành

Bản phát hành Vite tuân theo [Phiên bản ngữ nghĩa](https://semver.org/). Bạn có thể xem phiên bản ổn định mới nhất của Vite trong [trang gói Vite npm](https://www.npmjs.com/package/vite).

Nhật ký thay đổi đầy đủ của các bản phát hành trước đây [có sẵn trên GitHub](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md).

::: tip note
Bản phát hành Vite Chính tiếp theo sẽ diễn ra sau Node 16 EOL vào tháng 9.

Xem qua [Thảo luận Vite 5](https://github.com/vitejs/vite/discussions/12466) để biết thêm thông tin.
:::

## Chu kỳ phát hành

Vite không có chu kỳ phát hành cố định.

- **Vá** bản phát hành được phát hành khi cần thiết.
- **Phụ** các bản phát hành luôn chứa các tính năng mới và cũng được phát hành khi cần thiết. Các bản phát hành nhỏ luôn trải qua giai đoạn phát hành trước beta.
- **Chính** các bản phát hành thường phù hợp với [lịch trình EOL của Node.js](https://endoflife.date/nodejs), và sẽ được thông báo trước. Các bản phát hành này sẽ trải qua giai đoạn thảo luận ban đầu và cả giai đoạn tiền phát hành alpha và beta.

Vite chính trước sẽ tiếp tục nhận được các bản sửa lỗi và bản vá bảo mật quan trọng. Sau đó, nó sẽ chỉ nhận được các bản cập nhật nếu có lo ngại về bảo mật. Chúng tôi khuyên bạn nên cập nhật Vite thường xuyên. Kiểm tra [Hướng dẫn di chuyển](https://vitejs.dev/guide/migration.html) khi bạn cập nhật lên mỗi phiên bản chính.

Nhóm Vite hợp tác với các dự án chính trong hệ sinh thái để thử nghiệm các phiên bản Vite mới trước khi chúng được phát hành thông qua dự án [vite-ecosystem-ci](https://github.com/vitejs/vite-ecosystem-ci). Hầu hết các dự án sử dụng Vite sẽ có thể nhanh chóng cung cấp hỗ trợ hoặc chuyển sang phiên bản mới ngay khi chúng được phát hành.

## Các trường hợp đặc biệt phiên bản ngữ nghĩa

### Định nghĩa TypeScript

Chúng tôi có thể gửi các thay đổi không tương thích đối với các định nghĩa TypeScript giữa các phiên bản phụ. Điều này là do:

- Đôi khi, bản thân TypeScript gửi các thay đổi không tương thích giữa các phiên bản phụ và chúng tôi có thể phải điều chỉnh các loại để hỗ trợ các phiên bản TypeScript mới hơn.
- Đôi khi, chúng tôi có thể cần áp dụng các tính năng chỉ có trong phiên bản TypeScript mới hơn, nâng cao phiên bản TypeScript tối thiểu yêu cầu.
- Nếu đang sử dụng TypeScript, bạn có thể sử dụng một phạm vi định kỳ để khóa phiên bản phụ hiện tại và nâng cấp theo cách thủ công khi phiên bản phụ mới của Vite được phát hành.

### esbuild

[esbuild](https://esbuild.github.io/) là phiên bản trước 1.0.0 và đôi khi nó có thay đổi đột phá mà chúng tôi có thể cần đưa vào để có quyền truy cập vào các tính năng mới hơn và cải tiến hiệu suất. Chúng tôi có thể nâng cấp phiên bản của esbuild trong Vite Phụ.

### Các phiên bản không phải LTS của Node.js

Các phiên bản Node.js không phải LTS (được đánh số lẻ) không được kiểm tra như một phần CI của Vite, nhưng chúng vẫn sẽ hoạt động trước [EOL] của chúng(https://endoflife.date/nodejs).

## Bản phát hành trước

Các bản phát hành nhỏ thường trải qua một số lượng bản phát hành beta không cố định. Các bản phát hành chính sẽ trải qua giai đoạn alpha và giai đoạn beta.

Các bản phát hành trước cho phép những người dùng sớm và người bảo trì từ Hệ sinh thái thực hiện thử nghiệm tích hợp và độ ổn định, đồng thời cung cấp phản hồi. Đừng sử dụng bản phát hành trước trong sản xuất. Tất cả các bản phát hành trước được coi là không ổn định và có thể gửi các thay đổi phá vỡ giữa chúng. Luôn ghim vào các phiên bản chính xác khi sử dụng bản phát hành trước.

## Ngừng sử dụng

Chúng tôi định kỳ ngừng sử dụng các tính năng đã được thay thế bằng các lựa chọn thay thế tốt hơn trong các bản phát hành phụ. Các tính năng không dùng nữa sẽ tiếp tục hoạt động với một loại hoặc cảnh báo đã ghi. Chúng sẽ bị xóa trong bản phát hành chính tiếp theo sau khi chuyển sang trạng thái không dùng nữa. [Hướng dẫn di chuyển](https://vitejs.dev/guide/migration.html) cho từng chuyên ngành sẽ liệt kê những lần xóa này và ghi lại lộ trình nâng cấp cho chúng.

## Tính năng thử nghiệm

Một số tính năng được đánh dấu là thử nghiệm khi được phát hành trong phiên bản ổn định của Vite. Các tính năng thử nghiệm cho phép chúng tôi thu thập trải nghiệm trong thế giới thực để tác động đến thiết kế cuối cùng của chúng. Mục tiêu là cho phép người dùng cung cấp phản hồi bằng cách thử nghiệm chúng trong quá trình sản xuất. Bản thân các tính năng thử nghiệm được coi là không ổn định và chỉ nên được sử dụng một cách có kiểm soát. Các tính năng này có thể thay đổi giữa các phiên bản phụ, vì vậy người dùng phải ghim phiên bản Vite của họ khi họ dựa vào chúng.
