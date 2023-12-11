// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    // Thêm các quy tắc hoặc chỉnh sửa quy tắc theo nhu cầu
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Tắt quy tắc mặc định
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Nếu trong trường hợp sử dụng console.log sẽ warning để tránh trường hợp quên không xoá
  },
}
