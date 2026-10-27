This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  favicon.svg
src/
  assets/
    icons/
      bag.svg
      book.svg
      cart.svg
      chat.svg
      headphones.svg
      heart.svg
      home.svg
      laptop.svg
      search.svg
      settings.svg
      smartphone.svg
      user.svg
  components/
    Deco.tsx
    Form.tsx
    Icon.tsx
    Popover.tsx
    ProductCard.tsx
    ProductImage.tsx
    ProductModal.tsx
    ProductTabs.tsx
    Shell.tsx
    ShopPanels.tsx
    Stars.tsx
    ThemeMenu.tsx
  lib/
    api.ts
    compare.test.ts
    compare.ts
    format.ts
    use-api.ts
    use-product-link.ts
  pages/
    CatalogPage.tsx
    ComparePage.tsx
    LoginPage.tsx
    RegisterPage.tsx
    SettingsPage.tsx
  shared/
    specs.ts
    types.ts
  styles/
    app.css
    base.css
    shop.css
  App.tsx
  auth-context.tsx
  auth.ts
  catalog-context.tsx
  i18n-context.tsx
  i18n.ts
  main.tsx
  shop-context.tsx
  theme-context.tsx
  theme.ts
.dockerignore
.env.example
.gitignore
docker-compose.yml
Dockerfile
eslint.config.js
index.html
nginx.conf
package.json
postcss.config.js
README.md
tsconfig.json
vite.config.ts
````

# Files

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4340b8"/><stop offset="1" stop-color="#26215c"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><path d="M18 46L32 16l14 30M23 38h18" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
````

## File: src/assets/icons/bag.svg
````xml
<svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.88928 6H6.51995C5.28946 6 4.67448 6 4.17547 6.21901C3.7356 6.41206 3.36087 6.72298 3.09391 7.11572C2.79106 7.56127 2.68925 8.15482 2.48696 9.34229L1.29446 16.3423L1.29399 16.3449C1.02128 17.9457 0.884855 18.7465 1.1218 19.3706C1.32983 19.9185 1.72822 20.3777 2.24648 20.6686C2.83706 21 3.66668 21 5.32713 21H18.6725C20.333 21 21.1639 21 21.7545 20.6686C22.2728 20.3777 22.6702 19.9185 22.8782 19.3706C23.1151 18.7467 22.9787 17.9463 22.7062 16.3467L22.7052 16.3423L21.5127 9.34229C21.3104 8.15483 21.2091 7.56127 20.9063 7.11572C20.6393 6.72298 20.2643 6.41206 19.8244 6.21901C19.3254 6 18.7108 6 17.4803 6H17.1107M6.88928 6H17.1107M6.88928 6C6.88928 3.23858 9.17742 1 12 1C14.8225 1 17.1107 3.23858 17.1107 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/book.svg
````xml
<svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 17.5002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H13.4002C13.9602 1 14.2407 1 14.4546 1.10899C14.6427 1.20487 14.7948 1.35774 14.8906 1.5459C14.9996 1.75981 15 2.04005 15 2.6001V14.4001C15 14.9601 14.9996 15.2398 14.8906 15.4537C14.7948 15.6419 14.6429 15.7952 14.4548 15.8911C14.2411 16 13.961 16 13.402 16H3.25C2.00736 16 1 17.0074 1 18.25C1 18.6642 1.33579 19 1.75 19H12.402C12.961 19 13.2411 19 13.4548 18.8911C13.6429 18.7952 13.7948 18.642 13.8906 18.4538C13.9996 18.2399 14 17.9601 14 17.4V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/cart.svg
````xml
<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H1.33298C1.92087 1 2.21533 1 2.45511 1.10922C2.66651 1.20552 2.84727 1.36056 2.97761 1.55716C3.1252 1.77977 3.17849 2.07704 3.28487 2.6704L4.62416 10.1408L5.96345 17.6112L18.8953 17.6111C19.4577 17.6111 19.7397 17.6111 19.9726 17.5088C20.1784 17.4184 20.3559 17.272 20.4877 17.0859C20.6367 16.8754 20.6998 16.5936 20.826 16.0306L20.827 16.0266L22.7741 7.33773L22.7745 7.33591C22.9659 6.48187 23.0619 6.05381 22.9565 5.71804C22.8641 5.42344 22.6696 5.17366 22.4116 5.01468C22.1174 4.83333 21.6922 4.83333 20.8396 4.83333H4.10213M19.6128 24C18.9275 24 18.3719 23.4279 18.3719 22.7222C18.3719 22.0165 18.9275 21.4444 19.6128 21.4444C20.2981 21.4444 20.8536 22.0165 20.8536 22.7222C20.8536 23.4279 20.2981 24 19.6128 24ZM7.20426 24C6.51895 24 5.9634 23.4279 5.9634 22.7222C5.9634 22.0165 6.51895 21.4444 7.20426 21.4444C7.88956 21.4444 8.44511 22.0165 8.44511 22.7222C8.44511 23.4279 7.88956 24 7.20426 24Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/chat.svg
````xml
<svg viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.81083 18.1514L4.03288 19.5737C3.06201 20.3504 2.57634 20.7389 2.16781 20.7394C1.81251 20.7398 1.47652 20.5782 1.25487 20.3005C1 19.9812 1 19.3597 1 18.1164V4.73356C1 3.42677 1 2.77289 1.25432 2.27376C1.47802 1.83472 1.83472 1.47802 2.27376 1.25432C2.77289 1 3.42677 1 4.73356 1H18.2669C19.5737 1 20.2262 1 20.7253 1.25432C21.1643 1.47802 21.5222 1.83472 21.7459 2.27376C22 2.7724 22 3.42549 22 4.72973V13.6042C22 14.9084 22 15.5606 21.7459 16.0592C21.5222 16.4982 21.1651 16.8556 20.726 17.0793C20.2274 17.3333 19.5745 17.3333 18.2703 17.3333H8.14242C7.65704 17.3333 7.41524 17.3333 7.18311 17.381C6.97716 17.4232 6.77752 17.4929 6.59029 17.5885C6.38161 17.6952 6.19457 17.8448 5.8239 18.1413L5.81083 18.1514ZM16.1667 9.16667H16.169L16.1689 9.169L16.1667 9.16895V9.16667ZM11.5 9.16667H11.5023L11.5023 9.169L11.5 9.16895V9.16667ZM6.83333 9.16667H6.83567L6.83561 9.169L6.83333 9.16895V9.16667Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/headphones.svg
````xml
<svg viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3335 10.3331C22.3335 5.17858 18.1548 1 13.0001 1C7.84546 1 3.66679 5.17858 3.66679 10.3331M18.3335 14.9997V17.6663C18.3335 18.2858 18.3335 18.5956 18.3847 18.8532C18.5951 19.911 19.4221 20.7384 20.4799 20.9488C20.7375 21 21.0473 21 21.6668 21C22.2863 21 22.5961 21 22.8537 20.9488C23.9115 20.7384 24.7383 19.911 24.9487 18.8532C24.9999 18.5956 25.0001 18.2858 25.0001 17.6663V14.9997C25.0001 14.3802 24.9999 14.0698 24.9487 13.8122C24.7383 12.7544 23.9115 11.9281 22.8537 11.7177C22.5961 11.6664 22.2863 11.6664 21.6668 11.6664C21.0472 11.6664 20.7375 11.6664 20.4799 11.7177C19.4221 11.9281 18.5951 12.7544 18.3847 13.8122C18.3335 14.0698 18.3335 14.3802 18.3335 14.9997ZM7.66679 14.9997V17.6663C7.66679 18.2858 7.6666 18.5956 7.61536 18.8532C7.40494 19.911 6.57815 20.7384 5.5203 20.9488C5.26271 21 4.95305 21 4.33351 21C3.71398 21 3.4042 21 3.14661 20.9488C2.08876 20.7384 1.26178 19.911 1.05136 18.8532C1.00012 18.5956 1.00012 18.2858 1.00012 17.6663V14.9997C1.00012 14.3802 1.00012 14.0698 1.05136 13.8122C1.26178 12.7544 2.08876 11.9281 3.14661 11.7177C3.4042 11.6664 3.71397 11.6664 4.33351 11.6664C4.95305 11.6664 5.26271 11.6664 5.5203 11.7177C6.57815 11.9281 7.40494 12.7544 7.61536 13.8122C7.6666 14.0698 7.66679 14.3802 7.66679 14.9997Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/heart.svg
````xml
<svg viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 6.78651C1 -0.213521 9.16667 -0.796855 11.5 4.67999C13.8333 -0.796855 22 -0.213521 22 6.78651C22 13.7865 11.5 19.6201 11.5 19.6201C11.5 19.6201 1 13.7865 1 6.78651Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/home.svg
````xml
<svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0001 11.0157V18.1447C22.0001 19.3421 22 19.9406 21.8002 20.4129C21.5337 21.0426 21.0232 21.5435 20.38 21.8044C19.8976 22 19.2854 22 18.0623 22C16.8392 22 16.2276 22 15.7452 21.8044C15.102 21.5435 14.5914 21.0427 14.3249 20.413C14.1251 19.9407 14.1251 19.342 14.1251 18.1446V16.8596C14.1251 15.4403 12.9499 14.2897 11.5001 14.2897C10.0504 14.2897 8.87512 15.4403 8.87512 16.8596V18.1446C8.87512 19.342 8.87499 19.9407 8.67517 20.413C8.40875 21.0427 7.8982 21.5435 7.255 21.8044C6.77261 22 6.16038 22 4.93728 22C3.71419 22 3.10264 22 2.62024 21.8044C1.97704 21.5435 1.46636 21.0426 1.19994 20.4129C1.00012 19.9406 1.00012 19.3421 1.00012 18.1447V11.0157C1.00012 10.3291 1.00012 9.98564 1.0854 9.66614C1.16097 9.383 1.28597 9.11507 1.45386 8.87294C1.6433 8.59972 1.90659 8.37315 2.43439 7.92101L8.73647 2.52234C9.71492 1.68415 10.2042 1.26503 10.7552 1.1055C11.241 0.964832 11.7589 0.964832 12.2448 1.1055C12.7962 1.26515 13.2862 1.68467 14.2661 2.52412L20.5661 7.92101C21.0939 8.37315 21.3573 8.59972 21.5467 8.87294C21.7146 9.11506 21.8387 9.383 21.9142 9.66614C21.9995 9.98564 22.0001 10.3291 22.0001 11.0157Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/laptop.svg
````xml
<svg viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.4 15.4H2.8C1.80589 15.4 1 16.2059 1 17.2C1 18.1941 1.80589 19 2.8 19H23.2C24.1941 19 25 18.1941 25 17.2C25 16.2059 24.1941 15.4 23.2 15.4H22.6M3.4 15.4H22.6M3.4 15.4V4.84023C3.4 3.49611 3.4 2.82354 3.66158 2.31016C3.89168 1.85857 4.25857 1.49168 4.71016 1.26158C5.22354 1 5.89611 1 7.24023 1H18.7602C20.1044 1 20.7755 1 21.2889 1.26158C21.7405 1.49168 22.1086 1.85857 22.3387 2.31016C22.6 2.82304 22.6 3.49479 22.6 4.83629V15.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/search.svg
````xml
<svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15L22 22M9.16667 17.3333C4.65634 17.3333 1 13.677 1 9.16667C1 4.65634 4.65634 1 9.16667 1C13.677 1 17.3333 4.65634 17.3333 9.16667C17.3333 13.677 13.677 17.3333 9.16667 17.3333Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/settings.svg
````xml
<svg viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5458 27.9807L20.2325 28.5303L20.2312 28.5329C19.7213 29.427 19.4663 29.8743 19.1037 30.2005C18.7826 30.4894 18.4017 30.7084 17.9872 30.8427C17.5187 30.9944 16.9937 30.9957 15.943 30.998L15.0599 31C14.0144 31.0023 13.4885 31.0035 13.0196 30.8529C12.6023 30.719 12.2197 30.4998 11.8966 30.2094C11.5315 29.881 11.2746 29.4289 10.7619 28.5262L10.4537 27.9836L10.4524 27.9808C10.4055 27.8984 10.382 27.8569 10.3573 27.8166C10.1053 27.4042 9.75536 27.0569 9.33725 26.8037C9.2959 26.7787 9.25318 26.7537 9.16752 26.7054C9.08216 26.6573 9.03896 26.6329 8.99616 26.6106C8.56271 26.3838 8.07921 26.2619 7.58743 26.2548C7.53879 26.2541 7.48958 26.2543 7.39067 26.2559L6.71472 26.267C5.67829 26.284 5.15625 26.2926 4.68791 26.1504C4.27054 26.0237 3.88588 25.8117 3.55911 25.5284C3.19075 25.2092 2.92746 24.7666 2.40238 23.8839L1.96053 23.1411C1.43131 22.2515 1.16602 21.8055 1.06468 21.3321C0.9749 20.9128 0.978822 20.4798 1.07495 20.0617C1.18362 19.5892 1.45526 19.1474 1.99944 18.263L2.34677 17.6986C2.38664 17.6338 2.40934 17.597 2.43037 17.5602C2.66931 17.1419 2.80201 16.6734 2.81779 16.1948C2.81938 16.1466 2.81938 16.0977 2.81938 15.9996C2.81938 15.9017 2.81938 15.8527 2.8178 15.8046C2.80209 15.3271 2.66983 14.8614 2.43187 14.4438C2.40789 14.4017 2.38203 14.3592 2.33048 14.2752L2.00464 13.7442C1.46411 12.8635 1.19352 12.4226 1.08524 11.952C0.989451 11.5357 0.986004 11.1043 1.07464 10.6864C1.17483 10.2141 1.43732 9.76948 1.96276 8.87986L2.40033 8.13901C2.92724 7.24688 3.19084 6.80061 3.56061 6.4787C3.88773 6.19391 4.27312 5.98087 4.69162 5.8534C5.16469 5.70932 5.6929 5.71689 6.74812 5.73427L7.3749 5.74459C7.48097 5.74634 7.53375 5.74708 7.58593 5.74621C8.06886 5.73818 8.54342 5.62034 8.9705 5.40025C9.01665 5.37647 9.06268 5.35016 9.15475 5.29874C9.24797 5.24669 9.29459 5.22065 9.3395 5.19353C9.75522 4.9425 10.1039 4.59825 10.3561 4.18962C10.3833 4.14549 10.4091 4.09944 10.4613 4.00793L10.7679 3.47021C11.2787 2.57435 11.5337 2.12759 11.8966 1.8011C12.2177 1.51225 12.5986 1.29442 13.0131 1.16017C13.4816 1.00842 14.0066 1.00523 15.0574 1.0029L15.9219 1.00098C16.9798 0.998639 17.5087 0.998511 17.9804 1.14992C18.3977 1.28387 18.7809 1.5033 19.1039 1.79377C19.4691 2.12212 19.7257 2.57337 20.2384 3.47607L20.5466 4.01863C20.5945 4.10309 20.6185 4.14608 20.6434 4.18687C20.8955 4.59924 21.2451 4.94621 21.6632 5.19939C21.7046 5.22443 21.7472 5.24782 21.8329 5.29611C21.9185 5.34437 21.9614 5.36853 22.0042 5.39095C22.4377 5.61771 22.9209 5.74162 23.4126 5.74873C23.4613 5.74943 23.5104 5.74661 23.6093 5.74499L24.2625 5.73427C25.3141 5.71701 25.8402 5.70937 26.3119 5.85261C26.7293 5.97933 27.1141 6.19105 27.4409 6.4743C27.8091 6.7935 28.0722 7.23562 28.5969 8.11772L28.602 8.12582L29.0373 8.8576L29.0391 8.86156C29.5686 9.75168 29.8334 10.1967 29.9347 10.6702C30.0245 11.0896 30.0218 11.5223 29.9257 11.9403C29.8171 12.4128 29.5446 12.8556 29.0005 13.7398L28.6717 14.2742C28.6199 14.3583 28.5938 14.4 28.5697 14.4421C28.3307 14.8604 28.1984 15.3275 28.1827 15.8061C28.1811 15.8541 28.1811 15.9051 28.1811 16.0024C28.1811 16.1003 28.1811 16.1493 28.1827 16.1974C28.1984 16.6749 28.3299 17.1411 28.5679 17.5587C28.5919 17.6008 28.6179 17.6433 28.6694 17.7272L28.9952 18.2582L28.9977 18.2631C29.5367 19.1414 29.8063 19.5808 29.9144 20.0507C30.0102 20.467 30.0143 20.8982 29.9257 21.316C29.8255 21.7883 29.5627 22.2333 29.0373 23.1229L28.5996 23.8639C28.0727 24.756 27.8089 25.2015 27.4392 25.5234C27.1121 25.8082 26.7267 26.0215 26.3082 26.149C25.8371 26.2925 25.3121 26.2838 24.2654 26.2667L23.6114 26.2559C23.5111 26.2543 23.4607 26.2541 23.4114 26.2548C22.9206 26.2622 22.4384 26.3845 22.0057 26.6106C21.9623 26.6333 21.9184 26.658 21.8318 26.7068C21.745 26.7557 21.7012 26.7796 21.6593 26.8049C21.2434 27.057 20.8958 27.4024 20.6442 27.8122C20.6189 27.8534 20.5945 27.8954 20.5458 27.9807ZM9.34776 16.001C9.34776 12.686 12.1022 9.99862 15.4999 9.99862C18.8976 9.99862 21.652 12.686 21.652 16.001C21.652 19.316 18.8976 22.0033 15.4999 22.0033C12.1022 22.0033 9.34776 19.316 9.34776 16.001Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/smartphone.svg
````xml
<svg viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 19.9114V5.08914C1 3.65789 1 2.94174 1.28338 2.39507C1.53265 1.91422 1.93011 1.52355 2.41934 1.27854C2.97551 1 3.70412 1 5.16025 1H9.84025C11.2964 1 12.0234 1 12.5796 1.27854C13.0688 1.52355 13.4676 1.91422 13.7169 2.39507C14 2.9412 14 3.65649 14 5.08494V19.9157C14 21.3441 14 22.0584 13.7169 22.6045C13.4676 23.0854 13.0688 23.4767 12.5796 23.7217C12.024 24 11.2973 24 9.84402 24H5.15598C3.70269 24 2.97496 24 2.41934 23.7217C1.93011 23.4767 1.53265 23.0854 1.28338 22.6045C1 22.0579 1 21.3426 1 19.9114ZM7.5 20.1667H7.5026L7.50254 20.1692L7.5 20.1692V20.1667Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/assets/icons/user.svg
````xml
<svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29 32.5C29 27.6675 22.732 23.75 15 23.75C7.26801 23.75 1 27.6675 1 32.5M15 18.5C10.1675 18.5 6.25 14.5825 6.25 9.75C6.25 4.91751 10.1675 1 15 1C19.8325 1 23.75 4.91751 23.75 9.75C23.75 14.5825 19.8325 18.5 15 18.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
````

## File: src/components/Deco.tsx
````typescript
const LAYERS: Array<[string, number]> = [
  ['deco-accent', 0],
  ['deco-light', 34],
  ['deco-accent', 68],
  ['deco-dark', 102],
];

/** Диагональные полосы в правом нижнем углу (как в макетах) */
export function Deco() {
  return (
    <svg className="deco" viewBox="0 0 960 750" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="deco-gradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--deco-dark-from)' }} />
          <stop offset="1" style={{ stopColor: 'var(--deco-dark-to)' }} />
        </linearGradient>
      </defs>
      {LAYERS.map(([cls, o]) => (
        <polygon
          key={`${cls}-${o}`}
          className={cls}
          points={`${o},750 ${o + 960},0 ${o + 1400},0 ${o + 1400},750`}
        />
      ))}
    </svg>
  );
}
````

## File: src/components/Form.tsx
````typescript
import { useId, useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import type { TranslationKey } from '../i18n';
import { useI18n } from '../i18n-context';
import { Icon } from './Icon';

export interface Notice {
  kind: 'error' | 'success';
  key: TranslationKey;
}

/** Поле с «плавающей» подписью; для паролей добавляется кнопка показа */
export function Field({
  label,
  type = 'text',
  className,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  const { t } = useI18n();
  const id = useId();
  const [shown, setShown] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={className ? `field ${className}` : 'field'}>
      <input
        id={id}
        className={isPassword ? 'input has-toggle' : 'input'}
        type={isPassword && shown ? 'text' : type}
        placeholder=" "
        {...props}
      />
      <label htmlFor={id}>{label}</label>
      {isPassword && (
        <button
          className="field-toggle"
          type="button"
          aria-label={shown ? t('field.hide') : t('field.show')}
          aria-pressed={shown}
          onClick={() => setShown((value) => !value)}
        >
          <Icon name={shown ? 'eyeOff' : 'eye'} />
        </button>
      )}
    </div>
  );
}

export function Message({ notice }: { notice: Notice | null }) {
  const { t } = useI18n();
  return (
    <p className="message" role="alert" aria-live="polite" data-kind={notice?.kind}>
      {notice ? t(notice.key) : ''}
    </p>
  );
}
````

## File: src/components/Icon.tsx
````typescript
import home from '../assets/icons/home.svg?raw';
import smartphone from '../assets/icons/smartphone.svg?raw';
import laptop from '../assets/icons/laptop.svg?raw';
import headphones from '../assets/icons/headphones.svg?raw';
import bag from '../assets/icons/bag.svg?raw';
import book from '../assets/icons/book.svg?raw';
import search from '../assets/icons/search.svg?raw';
import settings from '../assets/icons/settings.svg?raw';
import chat from '../assets/icons/chat.svg?raw';
import cart from '../assets/icons/cart.svg?raw';
import heart from '../assets/icons/heart.svg?raw';
import user from '../assets/icons/user.svg?raw';

const ICONS = {
  home,
  smartphone,
  laptop,
  headphones,
  bag,
  book,
  search,
  settings,
  chat,
  cart,
  heart,
  user,
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.5 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7c1.7 0 3.2-.4 4.5-1M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13.2A8.5 8.5 0 1 1 10.8 3a6.7 6.7 0 0 0 10.2 10.2z"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v5M14 11v5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  ask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.7 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12z"/><path d="M9.6 9.4a2.4 2.4 0 1 1 3.4 2.2c-.7.3-1 .8-1 1.5M12 16.2h.01"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
  compare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="7" height="16" rx="2"/><rect x="14" y="4" width="7" height="16" rx="2"/><path d="M6.5 9v6M17.5 11v4"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  heartFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.3S3 14.9 3 8.7C3 5.6 5.4 3.5 8 3.5c1.7 0 3.2.9 4 2.3.8-1.4 2.3-2.3 4-2.3 2.6 0 5 2.1 5 5.2 0 6.2-9 11.6-9 11.6z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
};

export type IconName = keyof typeof ICONS;

/** SVG берётся только из собственных статических файлов проекта, не из пользовательских данных */
export function Icon({ name }: { name: IconName }) {
  return <span className="icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[name] }} />;
}
````

## File: src/components/Popover.tsx
````typescript
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

/** Круглая кнопка в шапке с выпадающей панелью. Закрывается по клику снаружи и по Esc. */
export function Popover({
  label,
  icon,
  badge,
  children,
}: {
  label: string;
  icon: IconName;
  badge?: number;
  children: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="pop" ref={ref}>
      <button
        className="round-btn"
        type="button"
        aria-label={label}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={icon} />
        {badge ? <span className="badge">{badge}</span> : null}
      </button>
      {open && (
        <div className="pop-panel" role="dialog" aria-label={label}>
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

export function PanelHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="pop-header">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
````

## File: src/components/ProductCard.tsx
````typescript
import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n-context';
import { formatMoney } from '../lib/format';
import { useProductLink } from '../lib/use-product-link';
import { useShop } from '../shop-context';
import type { Product } from '../shared/types';
import { Icon } from './Icon';
import { ProductImage } from './ProductImage';
import { Stars } from './Stars';

/** Карточка товара: плоская, без лишних эффектов */
export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { t, lang } = useI18n();
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const productLink = useProductLink();
  const [added, setAdded] = useState(false);
  const timer = useRef<number>(0);
  const favorite = isFavorite(product.id);

  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const badge =
    product.badge === 'sale' && discount ? `-${discount}%` : product.badge === 'hit' ? t('shop.badge.hit') : product.badge === 'new' ? t('shop.badge.new') : null;

  const onAdd = () => {
    addToCart(product.id);
    setAdded(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      className="pcard"
      style={{ '--i': index, '--c1': product.colors[0], '--c2': product.colors[1] } as CSSProperties}
    >
      <div className="pcard-stage">
        <ProductImage product={product} />
        {badge && <span className={`pbadge pbadge-${product.badge}`}>{badge}</span>}
        <button
          type="button"
          className={favorite ? 'pfav on' : 'pfav'}
          aria-pressed={favorite}
          aria-label={favorite ? t('shop.favRemove') : t('shop.favAdd')}
          onClick={() => toggleFavorite(product.id)}
        >
          <Icon name={favorite ? 'heartFill' : 'heart'} />
        </button>
      </div>

      <div className="pcard-body">
        <span className="pbrand">{product.brand}</span>
        <h3 className="pname">
          <Link to={productLink(product.id)} state={{ modal: true }} className="pname-link">
            {product.name}
          </Link>
        </h3>
        <p className="prating">
          {product.reviewCount > 0 ? (
            <>
              <Stars value={product.rating} />
              <span>
                {product.rating.toFixed(1)} <small>({product.reviewCount})</small>
              </span>
            </>
          ) : (
            <small>{t('shop.noRating')}</small>
          )}
        </p>
        <div className="pprice">
          <strong>{formatMoney(product.price, lang)}</strong>
          {product.oldPrice && <s>{formatMoney(product.oldPrice, lang)}</s>}
        </div>
        <button type="button" className="pbuy" data-added={added} onClick={onAdd} aria-label={`${t('shop.addToCart')}: ${product.name}`}>
          <span className="pbuy-idle">
            <Icon name="cart" />
            {t('shop.addToCart')}
          </span>
          <span className="pbuy-done" aria-live="polite">
            <Icon name="check" />
            {t('shop.added')}
          </span>
        </button>
      </div>
    </article>
  );
}
````

## File: src/components/ProductImage.tsx
````typescript
import type { Product } from '../shared/types';
import { Icon } from './Icon';
import type { IconName } from './Icon';

/** Заглушки по категории, пока у товара нет фото */
const PLACEHOLDER: Record<Product['category'], IconName> = {
  smartphones: 'smartphone',
  laptops: 'laptop',
  peripherals: 'headphones',
  accessories: 'bag',
  software: 'book',
};

/** Фото товара (поле image) или нейтральная заглушка по типу товара */
export function ProductImage({ product }: { product: Product }) {
  if (product.image) {
    return <img className="pimg" src={product.image} alt={product.name} loading="lazy" />;
  }
  return (
    <span className="pimg pimg-ph" aria-hidden="true">
      <Icon name={PLACEHOLDER[product.category]} />
    </span>
  );
}
````

## File: src/components/ProductModal.tsx
````typescript
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCatalog } from '../catalog-context';
import { useI18n } from '../i18n-context';
import { formatMoney, specText } from '../lib/format';
import { CATEGORY_ROUTE, SPEC_DEFS } from '../shared/specs';
import type { Product } from '../shared/types';
import { useShop } from '../shop-context';
import { Icon } from './Icon';
import { ProductImage } from './ProductImage';
import { QuestionsTab, ReviewsTab, SpecsTab } from './ProductTabs';
import { Stars } from './Stars';

type Tab = 'specs' | 'reviews' | 'questions';

const NAV_KEY = {
  smartphones: 'nav.smartphones',
  laptops: 'nav.laptops',
  peripherals: 'nav.peripherals',
  accessories: 'nav.accessories',
  software: 'nav.drivers',
} as const;

/** Окно товара открывается параметром ?product=id поверх любой страницы */
export function ProductModalHost() {
  const [params, setParams] = useSearchParams();
  const { byId, status } = useCatalog();
  const id = params.get('product');
  const product = id ? byId.get(id) : undefined;
  const unknown = Boolean(id) && status !== 'loading' && !product;

  // несуществующий id в адресе — просто убираем параметр
  useEffect(() => {
    if (unknown) {
      const next = new URLSearchParams(params);
      next.delete('product');
      setParams(next, { replace: true });
    }
  }, [unknown, params, setParams]);

  return product ? <ProductModal key={product.id} product={product} /> : null;
}

function ProductModal({ product }: { product: Product }) {
  const { t, tf, lang } = useI18n();
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState<Tab>('specs');
  const [askKey, setAskKey] = useState(0);
  const [added, setAdded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const favorite = isFavorite(product.id);

  const close = () => {
    // окно открыто переходом из каталога — возвращаемся назад, иначе просто убираем параметр
    if ((location.state as { modal?: boolean } | null)?.modal) {
      navigate(-1);
      return;
    }
    const next = new URLSearchParams(location.search);
    next.delete('product');
    const search = next.toString();
    navigate(`${location.pathname}${search ? `?${search}` : ''}`, { replace: true });
  };
  const closeRef = useRef(close);
  useEffect(() => {
    closeRef.current = close;
  });

  // блокировка прокрутки страницы, фокус в окне и возврат фокуса при закрытии
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add('modal-open');
    dialogRef.current?.focus();
    return () => {
      document.documentElement.classList.remove('modal-open');
      opener?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') closeRef.current();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Tab не уходит за пределы окна
  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const items = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, textarea, [tabindex="0"]');
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openTab = (next: Tab) => {
    setTab(next);
    tabsRef.current?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
  };
  const onAsk = () => {
    openTab('questions');
    setAskKey((k) => k + 1);
  };
  const onAdd = () => {
    addToCart(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const highlights = SPEC_DEFS[product.category].filter((d) => d.highlight && product.specs[d.key] !== undefined);
  const style = { '--c1': product.colors[0], '--c2': product.colors[1] } as CSSProperties;

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        ref={dialogRef}
        className="modal"
        style={style}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onKeyDown={trapFocus}
      >
        <button type="button" className="modal-close" onClick={close} aria-label={t('modal.close')}>
          <Icon name="close" />
        </button>

        <div className="modal-top">
          <div className="modal-stage">
            <ProductImage product={product} />
            {product.badge === 'hit' && <span className="pbadge pbadge-hit">{t('shop.badge.hit')}</span>}
            {product.badge === 'new' && <span className="pbadge pbadge-new">{t('shop.badge.new')}</span>}
            {discount > 0 && <span className="pbadge pbadge-sale">{tf('modal.discount', { n: discount })}</span>}
          </div>

          <div className="modal-info">
            <Link to={CATEGORY_ROUTE[product.category]} className="modal-crumb" onClick={close}>
              {t(NAV_KEY[product.category])} · {product.brand}
            </Link>
            <div className="modal-titlerow">
              <h2 id="modal-title">{product.name}</h2>
              {/* значок «вопрос о товаре» отличается от иконки чата поддержки в шапке */}
              <button type="button" className="ask-btn" onClick={onAsk} aria-label={t('modal.ask')} title={t('modal.ask')}>
                <Icon name="ask" />
                {product.questionCount > 0 && <span className="badge">{product.questionCount}</span>}
              </button>
            </div>

            <button type="button" className="modal-rating" onClick={() => openTab('reviews')}>
              {product.reviewCount > 0 ? (
                <>
                  <Stars value={product.rating} />
                  <span>
                    {product.rating.toFixed(1)} · {t('modal.tab.reviews')} ({product.reviewCount})
                  </span>
                </>
              ) : (
                <span>{t('shop.noRating')}</span>
              )}
            </button>

            <div className="pprice modal-price">
              <strong>{formatMoney(product.price, lang)}</strong>
              {product.oldPrice && <s>{formatMoney(product.oldPrice, lang)}</s>}
            </div>

            <p className="modal-desc">{product.description[lang]}</p>

            <ul className="chips">
              {highlights.map((def) => (
                <li key={def.key} className="chip">
                  <small>{def.label[lang]}</small>
                  {specText(def, product.specs[def.key], lang, t)}
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              <button type="button" className="pbuy modal-buy" data-added={added} onClick={onAdd}>
                <span className="pbuy-idle">
                  <Icon name="cart" />
                  {t('shop.addToCart')}
                </span>
                <span className="pbuy-done" aria-live="polite">
                  <Icon name="check" />
                  {t('shop.added')}
                </span>
              </button>
              <button
                type="button"
                className={favorite ? 'pfav pfav-lg on' : 'pfav pfav-lg'}
                aria-pressed={favorite}
                aria-label={favorite ? t('shop.favRemove') : t('shop.favAdd')}
                onClick={() => toggleFavorite(product.id)}
              >
                <Icon name={favorite ? 'heartFill' : 'heart'} />
              </button>
            </div>
          </div>
        </div>

        <div className="modal-tabs" ref={tabsRef}>
          <div className="tablist" role="tablist">
            {(['specs', 'reviews', 'questions'] as const).map((name) => (
              <button
                key={name}
                type="button"
                role="tab"
                id={`tab-${name}`}
                aria-selected={tab === name}
                aria-controls={`panel-${name}`}
                className={tab === name ? 'tab on' : 'tab'}
                onClick={() => setTab(name)}
              >
                {t(`modal.tab.${name}` as const)}
                {name === 'reviews' && product.reviewCount > 0 && <span className="tab-count">{product.reviewCount}</span>}
                {name === 'questions' && product.questionCount > 0 && <span className="tab-count">{product.questionCount}</span>}
              </button>
            ))}
          </div>
          <div className="tabpanel" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
            {tab === 'specs' && <SpecsTab product={product} />}
            {tab === 'reviews' && <ReviewsTab product={product} />}
            {tab === 'questions' && <QuestionsTab product={product} focusKey={askKey} />}
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: src/components/ProductTabs.tsx
````typescript
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { useCatalog } from '../catalog-context';
import { useI18n } from '../i18n-context';
import { apiPost } from '../lib/api';
import { formatDate, specText } from '../lib/format';
import { useApiData } from '../lib/use-api';
import { SPEC_DEFS } from '../shared/specs';
import type { Product, Question, Review, ReviewBlock, ReviewSummary } from '../shared/types';
import { Message } from './Form';
import type { Notice } from './Form';
import { Icon } from './Icon';
import { StarPicker, Stars } from './Stars';

const initial = (name: string): string => name.trim().charAt(0).toUpperCase();

/* ---------- Характеристики ---------- */
export function SpecsTab({ product }: { product: Product }) {
  const { t, lang } = useI18n();
  return (
    <dl className="specs">
      {SPEC_DEFS[product.category]
        .filter((def) => product.specs[def.key] !== undefined)
        .map((def) => (
          <div key={def.key} className="spec-row">
            <dt>{def.label[lang]}</dt>
            <dd>{specText(def, product.specs[def.key], lang, t)}</dd>
          </div>
        ))}
    </dl>
  );
}

/* ---------- Отзывы ---------- */
interface ReviewsData {
  reviews: Review[];
  summary: ReviewSummary;
  blocked: ReviewBlock;
}

export function ReviewsTab({ product }: { product: Product }) {
  const { t, lang } = useI18n();
  const { refresh } = useCatalog();
  const { data, reload } = useApiData<ReviewsData>(`/products/${product.id}/reviews`);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  if (!data) return <p className="tab-muted">{t('shop.loading')}</p>;
  if (!data.ok) return <p className="tab-muted">{t(data.error)}</p>;
  const { reviews, summary, blocked } = data;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    const result = await apiPost(`/products/${product.id}/reviews`, { rating, text });
    setBusy(false);
    if (result.ok) {
      setRating(0);
      setText('');
      setNotice({ kind: 'success', key: 'reviews.thanks' });
      reload();
      refresh(); // обновить рейтинг в карточках
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  return (
    <div className="reviews">
      {summary.count > 0 && (
        <div className="rv-summary">
          <div className="rv-score">
            <strong>{summary.rating.toFixed(1)}</strong>
            <Stars value={summary.rating} />
            <small>{summary.count}</small>
          </div>
          <ul className="rv-bars">
            {[5, 4, 3, 2, 1].map((n) => (
              <li key={n}>
                <span>{n}</span>
                <span className="rv-bar">
                  <i style={{ width: `${(summary.distribution[n - 1] / summary.count) * 100}%` }} />
                </span>
                <small>{summary.distribution[n - 1]}</small>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* форма доступна только покупателю; сервер проверяет это независимо от интерфейса */}
      {blocked === null ? (
        <form className="rv-form" onSubmit={onSubmit}>
          <h4>{t('reviews.write')}</h4>
          <StarPicker value={rating} onChange={setRating} />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={2000}
            rows={3}
            placeholder={t('reviews.placeholder')}
            aria-label={t('reviews.placeholder')}
          />
          <Message notice={notice} />
          <button className="btn btn-gradient" type="submit" disabled={busy || rating === 0 || text.trim().length < 3}>
            {t('reviews.submit')}
          </button>
        </form>
      ) : (
        <p className="tab-note">
          <Icon name="lock" />
          <span>
            {t(`reviews.block.${blocked}` as const)}
            {blocked === 'login' && (
              <>
                {' '}
                <Link to="/login">{t('sidebar.login')}</Link>
              </>
            )}
          </span>
        </p>
      )}
      {blocked === 'reviewed' && notice?.kind === 'success' && <Message notice={notice} />}

      {reviews.length === 0 ? (
        <p className="tab-muted">{t('reviews.empty')}</p>
      ) : (
        <ul className="rv-list">
          {reviews.map((review) => (
            <li key={review.id} className={review.isMine ? 'rv-item mine' : 'rv-item'}>
              <span className="avatar-sm">{initial(review.authorName)}</span>
              <div>
                <p className="rv-head">
                  <strong>{review.authorName}</strong>
                  {review.isMine && <em className="tag tag-me">{t('reviews.yours')}</em>}
                  <span className="tag tag-ok">
                    <Icon name="check" />
                    {t('reviews.verified')}
                  </span>
                  <small>{formatDate(review.createdAt, lang)}</small>
                </p>
                <Stars value={review.rating} />
                <p className="rv-text">{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Вопросы по товару ---------- */
export function QuestionsTab({ product, focusKey }: { product: Product; focusKey: number }) {
  const { t, lang } = useI18n();
  const { user } = useAuth();
  const { refresh } = useCatalog();
  const { data, reload } = useApiData<{ questions: Question[] }>(`/products/${product.id}/questions`);
  const [text, setText] = useState('');
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);
  const [answering, setAnswering] = useState<string | null>(null);
  const [answer, setAnswer] = useState('');
  const askRef = useRef<HTMLTextAreaElement>(null);

  // кнопка «Задать вопрос» в шапке окна переводит фокус в поле вопроса
  useEffect(() => {
    if (focusKey > 0) askRef.current?.focus();
  }, [focusKey]);

  async function onAsk(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    const result = await apiPost(`/products/${product.id}/questions`, { text });
    setBusy(false);
    if (result.ok) {
      setText('');
      setNotice({ kind: 'success', key: 'questions.sent' });
      reload();
      refresh();
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  async function onAnswer(event: FormEvent, questionId: string) {
    event.preventDefault();
    const result = await apiPost(`/questions/${questionId}/answers`, { text: answer });
    if (result.ok) {
      setAnswer('');
      setAnswering(null);
      reload();
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  if (!data) return <p className="tab-muted">{t('shop.loading')}</p>;
  if (!data.ok) return <p className="tab-muted">{t(data.error)}</p>;

  return (
    <div className="qa">
      {user ? (
        <form className="qa-form" onSubmit={onAsk}>
          <h4>{t('questions.ask')}</h4>
          <textarea
            ref={askRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={500}
            rows={2}
            placeholder={t('questions.placeholder')}
            aria-label={t('questions.ask')}
          />
          <Message notice={notice} />
          <button className="btn btn-gradient" type="submit" disabled={busy || text.trim().length < 5}>
            {t('questions.submit')}
          </button>
        </form>
      ) : (
        <p className="tab-note">
          <Icon name="ask" />
          <span>
            {t('questions.login')} <Link to="/login">{t('sidebar.login')}</Link>
          </span>
        </p>
      )}

      {data.questions.length === 0 ? (
        <p className="tab-muted">{t('questions.empty')}</p>
      ) : (
        <ul className="qa-list">
          {data.questions.map((q) => (
            <li key={q.id} className="qa-item">
              <p className="qa-q">
                <span className="qa-mark">?</span>
                <span>
                  <strong>{q.authorName}</strong> <small>{formatDate(q.createdAt, lang)}</small>
                  <br />
                  {q.text}
                </span>
              </p>
              {q.answers.map((a) => (
                <p key={a.id} className="qa-a">
                  <span className="avatar-sm">{initial(a.authorName)}</span>
                  <span>
                    <strong>{a.authorName}</strong>
                    {a.isShop && <em className="tag tag-shop">{t('questions.shop')}</em>}
                    {a.isBuyer && <em className="tag tag-ok">{t('questions.buyer')}</em>}
                    <small> {formatDate(a.createdAt, lang)}</small>
                    <br />
                    {a.text}
                  </span>
                </p>
              ))}
              {user &&
                (answering === q.id ? (
                  <form className="qa-reply" onSubmit={(e) => void onAnswer(e, q.id)}>
                    <input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      maxLength={500}
                      placeholder={t('questions.answerPlaceholder')}
                      aria-label={t('questions.answerPlaceholder')}
                      autoFocus
                    />
                    <button className="chip-btn" type="submit" disabled={answer.trim().length < 2}>
                      {t('questions.send')}
                    </button>
                  </form>
                ) : (
                  <button className="link-btn" type="button" onClick={() => setAnswering(q.id)}>
                    {t('questions.answer')}
                  </button>
                ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
````

## File: src/components/Shell.tsx
````typescript
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { useI18n } from '../i18n-context';
import type { TranslationKey } from '../i18n';
import { Deco } from './Deco';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import { ProductModalHost } from './ProductModal';
import { ChatPanel, CartPanel, FavoritesPanel } from './ShopPanels';
import { ThemeMenu } from './ThemeMenu';

interface NavItem {
  path: string;
  label: TranslationKey;
  icon: IconName;
}

/** Эндпоинты — английские технические названия */
export const NAV: NavItem[] = [
  { path: '/home', label: 'nav.home', icon: 'home' },
  { path: '/smartphones', label: 'nav.smartphones', icon: 'smartphone' },
  { path: '/laptops', label: 'nav.laptops', icon: 'laptop' },
  { path: '/peripherals', label: 'nav.peripherals', icon: 'headphones' },
  { path: '/accessories', label: 'nav.accessories', icon: 'bag' },
  { path: '/drivers-software', label: 'nav.drivers', icon: 'book' },
];

function SidebarFooter() {
  const { user } = useAuth();
  const { t } = useI18n();

  if (!user) {
    return (
      <div className="sidebar-footer sidebar-guest">
        <Link to="/login" className="btn btn-gradient">
          {t('sidebar.login')}
        </Link>
        <Link to="/register" className="btn btn-gradient">
          {t('sidebar.register')}
        </Link>
      </div>
    );
  }
  return (
    <div className="sidebar-footer user-card">
      <span className="avatar">
        <Icon name="user" />
      </span>
      <span className="user-info">
        <span className="user-name">{user.login}</span>
        <span className="user-email">{user.email}</span>
      </span>
      <Link to="/settings" className="settings-link" aria-label={t('sidebar.settings')}>
        <Icon name="settings" />
      </Link>
    </div>
  );
}

function Topbar({ onMenu }: { onMenu: () => void }) {
  const { t } = useI18n();
  return (
    <header className="topbar">
      <button className="burger" type="button" aria-label={t('nav.menu')} onClick={onMenu}>
        <Icon name="menu" />
      </button>
      <Link to="/home" className="logo">
        ARC<span>SHOP</span>
      </Link>
      <label className="search">
        <Icon name="search" />
        <input type="search" placeholder={t('header.search')} aria-label={t('header.search')} />
      </label>
      <div className="actions">
        <ThemeMenu />
        <ChatPanel />
        <FavoritesPanel />
        <CartPanel />
      </div>
    </header>
  );
}

/** Основной каркас: сайдбар + шапка + контент */
export function Shell({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  // Shell монтируется заново на каждой странице, поэтому меню закрывается при переходе само
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={menuOpen ? 'app menu-open' : 'app'}>
      <Deco />
      <aside className="sidebar" id="sidebar">
        <nav className="nav">
          {NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              <Icon name={item.icon} />
              <span>{t(item.label)}</span>
            </NavLink>
          ))}
        </nav>
        <SidebarFooter />
      </aside>
      <div className="backdrop" onClick={() => setMenuOpen(false)} />
      <div className="main">
        <Topbar onMenu={() => setMenuOpen((open) => !open)} />
        <main className="content">{children}</main>
      </div>
      <ProductModalHost />
    </div>
  );
}

/** Экраны входа/регистрации (split) и настроек (single): карточка по центру, «Назад» и тема сверху */
export function AuthScreen({
  title,
  subtitle,
  variant = 'split',
  children,
}: {
  title: string;
  subtitle?: string;
  variant?: 'split' | 'single';
  children: ReactNode;
}) {
  const { t } = useI18n();
  const navigate = useNavigate();

  // React Router хранит в history.state порядковый номер записи (idx).
  // idx 0 — первая запись истории: возвращаться некуда, поэтому идём на главную.
  const goBack = () => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) navigate(-1);
    else navigate('/home', { replace: true });
  };

  return (
    <div className="auth-screen">
      <Deco />
      <div className="auth-top">
        <button className="back-btn" type="button" onClick={goBack}>
          <Icon name="back" />
          <span>{t('common.back')}</span>
        </button>
        <div className="actions">
          <ThemeMenu />
        </div>
      </div>
      <section className={variant === 'split' ? 'auth-card auth-split' : 'auth-card auth-single'}>
        {variant === 'split' && (
          <aside className="auth-aside">
            <Link to="/home" className="logo">
              ARC<span>SHOP</span>
            </Link>
            <div className="auth-pitch">
              <h2>{t('auth.tagline')}</h2>
              <ul>
                <li>
                  <Icon name="smartphone" />
                  <span>{t('auth.feature1')}</span>
                </li>
                <li>
                  <Icon name="headphones" />
                  <span>{t('auth.feature2')}</span>
                </li>
                <li>
                  <Icon name="book" />
                  <span>{t('auth.feature3')}</span>
                </li>
              </ul>
            </div>
          </aside>
        )}
        <div className="auth-main">
          <div className="auth-inner">
            <h1>{title}</h1>
            {subtitle && <p className="auth-subtitle">{subtitle}</p>}
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: src/components/ShopPanels.tsx
````typescript
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { useI18n } from '../i18n-context';
import type { TranslationKey } from '../i18n';
import { formatMoney } from '../lib/format';
import { MAX_COMPARE, useShop } from '../shop-context';
import type { OrderSummary, Product } from '../shared/types';
import { Icon } from './Icon';
import { PanelHeader, Popover } from './Popover';
import { ProductImage } from './ProductImage';
import { useProductLink } from '../lib/use-product-link';

function Thumb({ product }: { product: Product }) {
  return (
    <span className="thumb">
      <ProductImage product={product} />
    </span>
  );
}

function Empty({ icon, text }: { icon: 'heart' | 'cart'; text: string }) {
  return (
    <div className="empty">
      <Icon name={icon} />
      <p>{text}</p>
    </div>
  );
}

/* ---------- Чат с поддержкой ---------- */
export function ChatPanel() {
  const { t } = useI18n();
  const { messages, sendMessage } = useShop();
  const [text, setText] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView?.({ block: 'end' });
  }, [messages.length]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage(text);
    setText('');
  };

  return (
    <Popover label={t('chat.title')} icon="chat">
      {() => (
        <>
          <PanelHeader title={t('chat.title')}>
            <span className="status">{t('chat.online')}</span>
          </PanelHeader>
          <div className="pop-body chat-log" aria-live="polite">
            {messages.map((m) => (
              <p key={m.id} className={m.from === 'me' ? 'msg msg-me' : 'msg'}>
                {m.key ? t(m.key) : m.text}
              </p>
            ))}
            <div ref={endRef} />
          </div>
          <form className="chat-form" onSubmit={onSubmit}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={500}
              placeholder={t('chat.placeholder')}
              aria-label={t('chat.placeholder')}
            />
            <button className="send-btn" type="submit" aria-label={t('chat.send')} disabled={!text.trim()}>
              <Icon name="send" />
            </button>
          </form>
        </>
      )}
    </Popover>
  );
}

/* ---------- Избранное ---------- */
export function FavoritesPanel() {
  const { t, lang } = useI18n();
  const { favorites, toggleFavorite, addToCart } = useShop();
  const productLink = useProductLink();

  return (
    <Popover label={t('fav.title')} icon="heart" badge={favorites.length}>
      {(close) => (
        <>
          <PanelHeader title={t('fav.title')} />
          {favorites.length === 0 ? (
            <Empty icon="heart" text={t('fav.empty')} />
          ) : (
            <ul className="pop-body list">
              {favorites.map((product) => (
                <li key={product.id} className="row">
                  <Thumb product={product} />
                  <span className="row-info">
                    <Link to={productLink(product.id)} state={{ modal: true }} className="row-name" onClick={close}>
                      {product.name}
                    </Link>
                    <span className="row-price">{formatMoney(product.price, lang)}</span>
                  </span>
                  <button className="chip-btn" type="button" onClick={() => addToCart(product.id)}>
                    {t('fav.addToCart')}
                  </button>
                  <button
                    className="icon-btn"
                    type="button"
                    aria-label={t('fav.remove')}
                    title={t('fav.remove')}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Icon name="trash" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </Popover>
  );
}

/* ---------- Корзина: оформление заказа и выбор товаров для сравнения ---------- */
export function CartPanel() {
  const { t, tf, lang } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const productLink = useProductLink();
  const { cart, cartCount, cartTotal, setQty, removeFromCart, clearCart, checkout, compareIds, toggleCompare } = useShop();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<TranslationKey | null>(null);
  const [ordered, setOrdered] = useState<OrderSummary | null>(null);

  const compareCategory = compareIds.length ? cart.find((i) => i.product.id === compareIds[0])?.product.category : undefined;
  /** почему товар нельзя добавить к сравнению (null — можно) */
  const compareBlock = (product: Product): TranslationKey | null => {
    if (compareIds.includes(product.id)) return null;
    if (compareIds.length >= MAX_COMPARE) return 'cart.compareMax';
    if (compareCategory && product.category !== compareCategory) return 'cart.compareOther';
    return null;
  };

  async function onCheckout(close: () => void) {
    if (!user) {
      close();
      navigate('/login');
      return;
    }
    setBusy(true);
    setError(null);
    const result = await checkout();
    setBusy(false);
    if (result.ok) setOrdered(result.order);
    else setError(result.error);
  }

  const onCompare = (close: () => void) => {
    close();
    navigate(`/compare?ids=${compareIds.join(',')}`);
  };

  return (
    <Popover label={t('cart.title')} icon="cart" badge={cartCount}>
      {(close) => (
        <>
          <PanelHeader title={t('cart.title')}>
            {cart.length > 0 && (
              <button className="link-btn" type="button" onClick={clearCart}>
                {t('cart.clear')}
              </button>
            )}
          </PanelHeader>

          {cart.length === 0 ? (
            ordered ? (
              <div className="empty ordered" role="status">
                <Icon name="check" />
                <strong>{t('cart.ordered')}</strong>
                <p>{tf('cart.orderedHint', { id: ordered.id.slice(0, 8).toUpperCase() })}</p>
              </div>
            ) : (
              <Empty icon="cart" text={t('cart.empty')} />
            )
          ) : (
            <>
              <ul className="pop-body list">
                {cart.map(({ product, qty }) => {
                  const block = compareBlock(product);
                  return (
                    <li key={product.id} className="row">
                      <label className={block ? 'cmp-check disabled' : 'cmp-check'} title={block ? t(block) : t('cart.compare')}>
                        <input
                          type="checkbox"
                          checked={compareIds.includes(product.id)}
                          disabled={block !== null}
                          onChange={() => toggleCompare(product.id)}
                          aria-label={`${t('cart.compare')}: ${product.name}`}
                        />
                        <Icon name="compare" />
                      </label>
                      <Thumb product={product} />
                      <span className="row-info">
                        <Link to={productLink(product.id)} state={{ modal: true }} className="row-name" onClick={close}>
                          {product.name}
                        </Link>
                        <span className="row-price">{formatMoney(product.price * qty, lang)}</span>
                      </span>
                      <span className="stepper">
                        <button type="button" aria-label={t('cart.dec')} onClick={() => setQty(product.id, qty - 1)}>
                          <Icon name="minus" />
                        </button>
                        <output aria-live="polite">{qty}</output>
                        <button type="button" aria-label={t('cart.inc')} onClick={() => setQty(product.id, qty + 1)}>
                          <Icon name="plus" />
                        </button>
                      </span>
                      <button
                        className="icon-btn"
                        type="button"
                        aria-label={t('cart.remove')}
                        title={t('cart.remove')}
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Icon name="trash" />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="pop-footer">
                {compareIds.length >= 2 ? (
                  <button className="btn btn-outline btn-block" type="button" onClick={() => onCompare(close)}>
                    <Icon name="compare" />
                    {tf('cart.compareN', { n: compareIds.length })}
                  </button>
                ) : (
                  <p className="cmp-hint">
                    <Icon name="compare" />
                    {t('cart.compareHint')}
                  </p>
                )}
                <p className="total">
                  <span>{t('cart.total')}</span>
                  <strong>{formatMoney(cartTotal, lang)}</strong>
                </p>
                {error && (
                  <p className="message" role="alert" data-kind="error">
                    {t(error)}
                  </p>
                )}
                <button className="btn btn-gradient btn-block" type="button" disabled={busy} onClick={() => void onCheckout(close)}>
                  {busy ? t('cart.paying') : user ? t('cart.checkout') : t('cart.loginToCheckout')}
                </button>
              </div>
            </>
          )}
        </>
      )}
    </Popover>
  );
}
````

## File: src/components/Stars.tsx
````typescript
import { useState } from 'react';
import { useI18n } from '../i18n-context';

/** Звёзды рейтинга (дробные значения закрашиваются частично) */
export function Stars({ value }: { value: number }) {
  return <span className="stars" style={{ '--v': value } as React.CSSProperties} role="img" aria-label={`${value} / 5`} />;
}

/** Выбор оценки 1–5 для формы отзыва */
export function StarPicker({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  const { t } = useI18n();
  const [hover, setHover] = useState(0);
  const shown = hover || value;
  return (
    <div className="star-picker" role="radiogroup" aria-label={t('reviews.rating')} onPointerLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={n === value}
          aria-label={`${n}`}
          className={n <= shown ? 'on' : ''}
          onPointerEnter={() => setHover(n)}
          onClick={() => onChange(n)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
          </svg>
        </button>
      ))}
    </div>
  );
}
````

## File: src/components/ThemeMenu.tsx
````typescript
import { useI18n } from '../i18n-context';
import type { Lang } from '../i18n';
import type { ThemeMode } from '../theme';
import { useTheme } from '../theme-context';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import { PanelHeader, Popover } from './Popover';

const THEMES: Array<{ mode: ThemeMode; icon: IconName; label: 'settings.theme.system' | 'settings.theme.dark' | 'settings.theme.light' }> = [
  { mode: 'system', icon: 'monitor', label: 'settings.theme.system' },
  { mode: 'light', icon: 'sun', label: 'settings.theme.light' },
  { mode: 'dark', icon: 'moon', label: 'settings.theme.dark' },
];

const LANGS: Array<{ lang: Lang; label: string }> = [
  { lang: 'ru', label: 'Русский' },
  { lang: 'en', label: 'English' },
];

/** Тема и язык доступны всем, в том числе без входа в аккаунт */
export function ThemeMenu() {
  const { t, lang, setLang } = useI18n();
  const { mode, setMode } = useTheme();
  const current = THEMES.find((item) => item.mode === mode) ?? THEMES[0];

  return (
    <Popover label={t('appearance.title')} icon={current.icon}>
      {() => (
        <>
          <PanelHeader title={t('appearance.title')} />
          <div className="pop-body menu">
            <p className="menu-title">{t('settings.theme')}</p>
            {THEMES.map((item) => (
              <button
                key={item.mode}
                type="button"
                className="menu-item"
                role="menuitemradio"
                aria-checked={item.mode === mode}
                onClick={() => setMode(item.mode)}
              >
                <Icon name={item.icon} />
                <span>{t(item.label)}</span>
                {item.mode === mode && <Icon name="check" />}
              </button>
            ))}
            <p className="menu-title">{t('settings.language')}</p>
            {LANGS.map((item) => (
              <button
                key={item.lang}
                type="button"
                className="menu-item"
                role="menuitemradio"
                aria-checked={item.lang === lang}
                onClick={() => setLang(item.lang)}
              >
                <span className="menu-lang">{item.lang.toUpperCase()}</span>
                <span>{item.label}</span>
                {item.lang === lang && <Icon name="check" />}
              </button>
            ))}
          </div>
        </>
      )}
    </Popover>
  );
}
````

## File: src/lib/api.ts
````typescript
import type { TranslationKey } from '../i18n';

export type ApiResult<T extends object> = ({ ok: true } & T) | { ok: false; error: TranslationKey };

async function request<T extends object>(method: 'GET' | 'POST', path: string, body?: object): Promise<ApiResult<T>> {
  try {
    const response = await fetch(`/api${path}`, {
      method,
      credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    return (await response.json()) as ApiResult<T>;
  } catch {
    return { ok: false, error: 'err.network' };
  }
}

export const apiGet = <T extends object>(path: string): Promise<ApiResult<T>> => request<T>('GET', path);
export const apiPost = <T extends object = object>(path: string, body: object): Promise<ApiResult<T>> =>
  request<T>('POST', path, body);
````

## File: src/lib/compare.test.ts
````typescript
import { describe, expect, it } from 'vitest';
import type { Product } from '../shared/types';
import { compareProducts } from './compare';

const base = { brand: 'T', description: { ru: '', en: '' }, colors: ['#000', '#fff'] as [string, string], rating: 0, reviewCount: 0, questionCount: 0 };
const phone = (id: string, price: number, specs: Product['specs']): Product => ({ ...base, id, name: id, category: 'smartphones', price, specs });

describe('compareProducts', () => {
  const a = phone('a', 60000, { ram: 12, storage: 256, battery: 5000, weight: 190, nfc: true });
  const b = phone('b', 30000, { ram: 8, storage: 128, battery: 5200, weight: 200, nfc: true });

  it('находит лучшие и худшие значения с учётом направления', () => {
    const { rows } = compareProducts([a, b]);
    const get = (key: string) => rows.find((r) => r.def.key === key);
    expect(get('ram')?.best).toEqual([0]);
    expect(get('battery')?.best).toEqual([1]);
    expect(get('weight')?.best).toEqual([0]); // легче — лучше
    expect(get('weight')?.worst).toEqual([1]);
    expect(get('nfc')?.differs).toBe(false); // одинаковые значения не подсвечиваются
  });

  it('считает «лучший выбор», «выгодную покупку» и самый дешёвый', () => {
    const result = compareProducts([a, b]);
    expect(result.bestOverall).toBe('a');
    expect(result.cheapest).toBe('b');
    expect(result.priciest).toBe('a');
    expect(result.bestValue).toBe('b');
    expect(result.scores.find((s) => s.id === 'a')?.wins.length).toBeGreaterThan(0);
  });

  it('не штрафует товар за характеристику, которой у него нет', () => {
    const noBattery = phone('c', 30000, { ram: 12, storage: 256, weight: 190 });
    const result = compareProducts([a, noBattery]);
    const row = result.rows.find((r) => r.def.key === 'battery');
    expect(row?.best).toEqual([]); // сравнивать не с чем
    expect(result.scores.find((s) => s.id === 'c')?.score).toBeGreaterThanOrEqual(0);
  });

  it('определяет полностью одинаковые товары', () => {
    const twin = phone('twin', 60000, a.specs);
    expect(compareProducts([a, twin]).identical).toBe(true);
  });

  it('отказывается сравнивать разные категории и один товар', () => {
    const laptop: Product = { ...a, id: 'l', category: 'laptops' };
    expect(() => compareProducts([a, laptop])).toThrow();
    expect(() => compareProducts([a])).toThrow();
  });
});
````

## File: src/lib/compare.ts
````typescript
import { SPEC_DEFS } from '../shared/specs';
import type { SpecDef, SpecValue } from '../shared/specs';
import type { Product } from '../shared/types';

export interface CompareRow {
  def: SpecDef;
  values: Array<SpecValue | undefined>;
  /** индексы товаров с лучшим / худшим значением (только если значения различаются) */
  best: number[];
  worst: number[];
  differs: boolean;
}

export interface ProductScore {
  id: string;
  /** итоговая оценка 0–100 по характеристикам с учётом их важности */
  score: number;
  /** по каким характеристикам товар лидирует, самые важные первыми */
  wins: SpecDef[];
  /** оценка на каждую 1000 ₽ */
  value: number;
}

export interface CompareResult {
  rows: CompareRow[];
  scores: ProductScore[];
  bestOverall: string;
  bestValue: string;
  cheapest: string;
  priciest: string;
  /** true, если ни одна характеристика не отличается */
  identical: boolean;
}

/** Число для сравнения: булевы значения считаются как 1/0, текстовые не сравниваются */
const numeric = (value: SpecValue | undefined): number | undefined =>
  typeof value === 'number' ? value : typeof value === 'boolean' ? Number(value) : undefined;

const sameText = (a: SpecValue | undefined, b: SpecValue | undefined): boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * Умное сравнение товаров ОДНОЙ категории:
 *  - находит лучшее и худшее значение в каждой строке;
 *  - считает итоговую оценку: каждая характеристика нормируется к 0…1 (с учётом «чем меньше, тем лучше»)
 *    и умножается на вес; нет значения у товара — характеристика для него не учитывается;
 *  - определяет «лучший выбор», «выгодную покупку» (оценка на рубль) и самый дешёвый товар.
 */
export function compareProducts(products: Product[]): CompareResult {
  if (products.length < 2) throw new Error('Для сравнения нужно минимум два товара');
  const category = products[0].category;
  if (products.some((p) => p.category !== category)) throw new Error('Сравнивать можно только товары одной категории');

  const defs = SPEC_DEFS[category];
  const rows: CompareRow[] = [];
  const earned = products.map(() => ({ sum: 0, weight: 0 }));
  const wins: Array<SpecDef[]> = products.map(() => []);

  for (const def of defs) {
    const values = products.map((p) => p.specs[def.key]);
    if (values.every((v) => v === undefined)) continue;

    let best: number[] = [];
    let worst: number[] = [];
    let differs = values.some((v) => !sameText(v, values[0]));

    if (def.better !== 'none') {
      const nums = values.map(numeric);
      const present = nums.filter((n): n is number => n !== undefined);
      const min = Math.min(...present);
      const max = Math.max(...present);
      differs = present.length >= 2 && max !== min;

      if (differs) {
        const top = def.better === 'higher' ? max : min;
        const bottom = def.better === 'higher' ? min : max;
        best = nums.flatMap((n, i) => (n === top ? [i] : []));
        worst = nums.flatMap((n, i) => (n === bottom ? [i] : []));
        if (def.weight > 0) {
          nums.forEach((n, i) => {
            if (n === undefined) return;
            const norm = (n - min) / (max - min);
            earned[i].sum += (def.better === 'higher' ? norm : 1 - norm) * def.weight;
            earned[i].weight += def.weight;
          });
          for (const i of best) wins[i].push(def);
        }
      }
    }
    rows.push({ def, values, best, worst, differs });
  }

  const scores: ProductScore[] = products.map((p, i) => {
    const score = earned[i].weight > 0 ? (earned[i].sum / earned[i].weight) * 100 : 0;
    return {
      id: p.id,
      score: Math.round(score),
      wins: wins[i].sort((a, b) => b.weight - a.weight),
      value: p.price > 0 ? score / (p.price / 1000) : score,
    };
  });

  const byPrice = [...products].sort((a, b) => a.price - b.price);
  // при равенстве оценки побеждает более дешёвый товар
  const bestOverall = [...scores].sort(
    (a, b) => b.score - a.score || (products.find((p) => p.id === a.id)?.price ?? 0) - (products.find((p) => p.id === b.id)?.price ?? 0),
  )[0].id;
  const bestValue = [...scores].sort((a, b) => b.value - a.value)[0].id;

  return {
    rows,
    scores,
    bestOverall,
    bestValue,
    cheapest: byPrice[0].id,
    priciest: byPrice[byPrice.length - 1].id,
    identical: rows.every((r) => !r.differs),
  };
}
````

## File: src/lib/format.ts
````typescript
import type { Lang, TranslationKey } from '../i18n';
import type { L10n, SpecDef, SpecValue } from '../shared/specs';

export const pick = (value: L10n, lang: Lang): string => value[lang];

export function formatMoney(value: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(value);
}

/** Значение характеристики в виде строки: «12 ГБ», «Да», «Arc A17» */
export function specText(
  def: SpecDef,
  value: SpecValue | undefined,
  lang: Lang,
  t: (key: TranslationKey) => string,
): string {
  if (value === undefined) return '—';
  if (typeof value === 'boolean') return value ? t('spec.yes') : t('spec.no');
  if (typeof value === 'number') {
    const number = new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { maximumFractionDigits: 2 }).format(value);
    return def.unit ? `${number} ${pick(def.unit, lang)}` : number;
  }
  return pick(value, lang);
}

export const formatDate = (iso: string, lang: Lang): string =>
  new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { dateStyle: 'medium' }).format(new Date(iso));

/** Подстановка {name} в строку перевода */
export const fill = (template: string, params: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (_m, key: string) => String(params[key] ?? ''));
````

## File: src/lib/use-api.ts
````typescript
import { useCallback, useEffect, useState } from 'react';
import { apiGet } from './api';
import type { ApiResult } from './api';

/** Загружает данные с API и умеет перезагружать их после изменений (новый отзыв, вопрос и т.п.) */
export function useApiData<T extends object>(path: string): { data: ApiResult<T> | null; reload: () => void } {
  const [state, setState] = useState<{ path: string; result: ApiResult<T> | null }>({ path: '', result: null });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void apiGet<T>(path).then((result) => {
      if (!cancelled) setState({ path, result });
    });
    return () => {
      cancelled = true;
    };
  }, [path, tick]);

  const reload = useCallback(() => setTick((value) => value + 1), []);
  return { data: state.path === path ? state.result : null, reload };
}
````

## File: src/lib/use-product-link.ts
````typescript
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/** Ссылка на текущую страницу с открытым окном товара: ?product=id (ссылкой можно делиться) */
export function useProductLink(): (id: string) => string {
  const { pathname, search } = useLocation();
  return useCallback(
    (id: string) => {
      const params = new URLSearchParams(search);
      params.set('product', id);
      return `${pathname}?${params.toString()}`;
    },
    [pathname, search],
  );
}
````

## File: src/pages/CatalogPage.tsx
````typescript
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCatalog } from '../catalog-context';
import { ProductCard } from '../components/ProductCard';
import { Shell } from '../components/Shell';
import { useI18n } from '../i18n-context';
import type { TranslationKey } from '../i18n';
import type { Category } from '../shared/specs';
import type { Product } from '../shared/types';

type Sort = 'popular' | 'priceAsc' | 'priceDesc';

const popularity = (p: Product): number => p.reviewCount * 10 + p.rating + p.questionCount;

function sortProducts(list: Product[], sort: Sort): Product[] {
  const copy = [...list];
  if (sort === 'priceAsc') return copy.sort((a, b) => a.price - b.price);
  if (sort === 'priceDesc') return copy.sort((a, b) => b.price - a.price);
  return copy.sort((a, b) => popularity(b) - popularity(a));
}

function Grid({ products }: { products: Product[] }) {
  return (
    <div className="pgrid">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}

/** Пока каталог грузится, показываем «скелеты» карточек */
function Skeletons() {
  return (
    <div className="pgrid" aria-hidden="true">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="pcard-skel" style={{ '--i': i } as React.CSSProperties} />
      ))}
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{t('home.hero.title')}</h1>
        <p>{t('home.hero.subtitle')}</p>
        <Link to="/smartphones" className="hero-cta">
          {t('home.hero.cta')}
        </Link>
      </div>
    </section>
  );
}

/** Главная (category не задана) и разделы каталога */
export function CatalogPage({ title, category }: { title: TranslationKey; category?: Category }) {
  const { t, tf } = useI18n();
  const { products, status, refresh } = useCatalog();
  const [sort, setSort] = useState<Sort>('popular');

  const list = useMemo(
    () => (category ? sortProducts(products.filter((p) => p.category === category), sort) : []),
    [products, category, sort],
  );

  const sections: Array<{ key: TranslationKey; items: Product[] }> = useMemo(
    () => [
      { key: 'home.hits', items: sortProducts(products.filter((p) => p.badge === 'hit'), 'popular') },
      { key: 'home.new', items: products.filter((p) => p.badge === 'new') },
      { key: 'home.sale', items: products.filter((p) => p.oldPrice !== undefined) },
    ],
    [products],
  );

  let body;
  if (status === 'loading') body = <Skeletons />;
  else if (status === 'error') {
    body = (
      <div className="catalog-state" role="alert">
        <p>{t('shop.loadError')}</p>
        <button type="button" className="btn btn-gradient" onClick={refresh}>
          OK
        </button>
      </div>
    );
  } else if (!category) {
    body = (
      <>
        {sections
          .filter((s) => s.items.length > 0)
          .map((s) => (
            <section key={s.key} className="catalog-section">
              <div className="shead">
                <h2>{t(s.key)}</h2>
              </div>
              <Grid products={s.items} />
            </section>
          ))}
      </>
    );
  } else if (list.length === 0) {
    body = <p className="catalog-state">{t('shop.empty')}</p>;
  } else {
    body = <Grid products={list} />;
  }

  return (
    <Shell>
      <div className="catalog">
        {category ? (
          <div className="shead">
            <div>
              <h1>{t(title)}</h1>
              {status === 'ready' && <small>{tf('shop.count', { n: list.length })}</small>}
            </div>
            <label className="sort">
              <span>{t('shop.sort')}</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                <option value="popular">{t('shop.sort.popular')}</option>
                <option value="priceAsc">{t('shop.sort.priceAsc')}</option>
                <option value="priceDesc">{t('shop.sort.priceDesc')}</option>
              </select>
            </label>
          </div>
        ) : (
          <>
            <h1 className="visually-hidden">{t(title)}</h1>
            <Hero />
          </>
        )}
        {body}
      </div>
    </Shell>
  );
}
````

## File: src/pages/ComparePage.tsx
````typescript
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCatalog } from '../catalog-context';
import { Icon } from '../components/Icon';
import { ProductImage } from '../components/ProductImage';
import { Shell } from '../components/Shell';
import { Stars } from '../components/Stars';
import { useI18n } from '../i18n-context';
import { compareProducts } from '../lib/compare';
import { formatMoney, specText } from '../lib/format';
import { useProductLink } from '../lib/use-product-link';
import { MAX_COMPARE, useShop } from '../shop-context';

/** Сравнение товаров одной категории. Список берётся из ?ids=… (можно делиться ссылкой) или из корзины. */
export function ComparePage() {
  const { t, tf, lang } = useI18n();
  const { byId, status } = useCatalog();
  const { compareIds } = useShop();
  const [params, setParams] = useSearchParams();
  const [onlyDiff, setOnlyDiff] = useState(false);
  const productLink = useProductLink();

  const raw = params.get('ids');
  const ids = raw !== null ? raw.split(',').filter(Boolean) : compareIds;
  const found = ids.flatMap((id) => byId.get(id) ?? []).filter((p, i, all) => all.findIndex((x) => x.id === p.id) === i);
  const category = found[0]?.category;
  const products = found.filter((p) => p.category === category).slice(0, MAX_COMPARE);
  const mixed = products.length < found.length;
  const result = products.length >= 2 ? compareProducts(products) : null;

  const remove = (id: string) =>
    setParams({ ids: products.filter((p) => p.id !== id).map((p) => p.id).join(',') }, { replace: true });
  const nameOf = (id: string): string => byId.get(id)?.name ?? '';

  let verdict: string[] = [];
  if (result) {
    if (result.identical) verdict.push(t('compare.verdict.same'));
    else {
      const top = result.scores.find((s) => s.id === result.bestOverall);
      const wins = (top?.wins ?? []).slice(0, 3).map((d) => d.label[lang].toLowerCase()).join(', ');
      const name = nameOf(result.bestOverall);
      verdict.push(wins ? tf('compare.verdict.best', { name, wins }) : tf('compare.verdict.bestNoWins', { name }));
      if (result.bestValue !== result.bestOverall) verdict.push(tf('compare.verdict.value', { name: nameOf(result.bestValue) }));
    }
    const cheap = byId.get(result.cheapest);
    const pricey = byId.get(result.priciest);
    if (cheap && pricey && cheap.price !== pricey.price) {
      verdict.push(tf('compare.verdict.price', { cheap: cheap.name, pricey: pricey.name, diff: formatMoney(pricey.price - cheap.price, lang) }));
    }
  }
  verdict = verdict.filter(Boolean);

  const rows = result ? result.rows.filter((r) => !onlyDiff || r.differs) : [];

  return (
    <Shell>
      <div className="cmp-page">
        <div className="shead">
          <h1>{t('compare.title')}</h1>
          <Link to="/home" className="btn btn-outline">
            {t('compare.back')}
          </Link>
        </div>

        {status === 'loading' && <p className="catalog-state">{t('shop.loading')}</p>}
        {status !== 'loading' && !result && (
          <div className="empty cmp-empty">
            <Icon name="compare" />
            <p>{t('compare.empty')}</p>
          </div>
        )}

        {result && (
          <>
            {mixed && <p className="cmp-note">{t('compare.mixed')}</p>}

            <div className="cmp-verdict">
              {(
                [
                  ['compare.bestChoice', result.bestOverall],
                  ['compare.bestValue', result.bestValue],
                  ['compare.cheapest', result.cheapest],
                ] as const
              ).map(([label, id], i) => (
                <div key={label} className="vcard" style={{ '--i': i } as React.CSSProperties}>
                  <small>{t(label)}</small>
                  <strong>{nameOf(id)}</strong>
                </div>
              ))}
            </div>
            <ul className="cmp-text">
              {verdict.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <label className="checkbox cmp-toggle">
              <input type="checkbox" checked={onlyDiff} onChange={(e) => setOnlyDiff(e.target.checked)} />
              <span>{t('compare.onlyDiff')}</span>
            </label>

            <div className="cmp-scroll">
              <table className="cmp">
                <thead>
                  <tr>
                    <th scope="col" aria-label={t('compare.title')} />
                    {products.map((p) => (
                      <th key={p.id} scope="col" className="cmp-prod">
                        <button type="button" className="icon-btn cmp-remove" onClick={() => remove(p.id)} aria-label={t('compare.remove')} title={t('compare.remove')}>
                          <Icon name="close" />
                        </button>
                        <span className="cmp-art">
                          <ProductImage product={p} />
                        </span>
                        <Link to={productLink(p.id)} state={{ modal: true }} className="cmp-name">
                          {p.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{t('compare.price')}</th>
                    {products.map((p) => (
                      <td key={p.id} className={p.id === result.cheapest && result.cheapest !== result.priciest ? 'best' : ''}>
                        <strong>{formatMoney(p.price, lang)}</strong>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">{t('compare.rating')}</th>
                    {products.map((p) => (
                      <td key={p.id}>
                        {p.reviewCount > 0 ? (
                          <span className="cmp-rating">
                            <Stars value={p.rating} /> {p.rating.toFixed(1)}
                          </span>
                        ) : (
                          <span className="muted">{t('shop.noRating')}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="cmp-scorerow">
                    <th scope="row">{t('compare.score')}</th>
                    {result.scores.map((s) => (
                      <td key={s.id} className={s.id === result.bestOverall ? 'best' : ''}>
                        <span className="cmp-score">
                          <b>{s.score}</b>
                          <span className="cmp-bar">
                            <i style={{ width: `${s.score}%` }} />
                          </span>
                        </span>
                        {s.wins.length > 0 && (
                          <small className="cmp-leads">
                            {tf('compare.leadsIn', { wins: s.wins.slice(0, 3).map((d) => d.label[lang]).join(', ') })}
                          </small>
                        )}
                      </td>
                    ))}
                  </tr>
                  {rows.map((row) => (
                    <tr key={row.def.key}>
                      <th scope="row">{row.def.label[lang]}</th>
                      {row.values.map((value, i) => {
                        const isBest = row.best.includes(i);
                        return (
                          <td key={products[i].id} className={isBest ? 'best' : ''}>
                            {specText(row.def, value, lang, t)}
                            {isBest && (
                              <span className="best-mark">
                                <Icon name="check" />
                                {t('compare.best')}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              {rows.length === 0 && <p className="catalog-state">{t('compare.nothingDiff')}</p>}
            </div>
          </>
        )}
      </div>
    </Shell>
  );
}
````

## File: src/pages/LoginPage.tsx
````typescript
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { Field, Message } from '../components/Form';
import type { Notice } from '../components/Form';
import { AuthScreen } from '../components/Shell';
import { useI18n } from '../i18n-context';

export function LoginPage() {
  const { t } = useI18n();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBusy(true);
    const result = await login(
      String(data.get('identifier') ?? ''),
      String(data.get('password') ?? ''),
      data.get('remember') === 'on',
    );
    setBusy(false);
    if (result.ok) navigate('/home', { replace: true });
    else setNotice({ kind: 'error', key: result.error });
  }

  return (
    <AuthScreen title={t('login.title')} subtitle={t('login.subtitle')}>
      <form className="form" noValidate onSubmit={onSubmit}>
        <Field name="identifier" label={t('login.identifier')} autoComplete="username" />
        <Field name="password" type="password" label={t('login.password')} autoComplete="current-password" />
        <label className="checkbox">
          <input type="checkbox" name="remember" />
          <span>{t('login.remember')}</span>
        </label>
        <Message notice={notice} />
        <div className="form-actions">
          <button className="btn btn-gradient btn-block" type="submit" disabled={busy}>
            {t('login.submit')}
          </button>
        </div>
        <p className="form-hint">
          {t('login.noAccount')} <Link to="/register">{t('sidebar.register')}</Link>
        </p>
      </form>
    </AuthScreen>
  );
}
````

## File: src/pages/RegisterPage.tsx
````typescript
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { Field, Message } from '../components/Form';
import type { Notice } from '../components/Form';
import { AuthScreen } from '../components/Shell';
import { useI18n } from '../i18n-context';

export function RegisterPage() {
  const { t } = useI18n();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (name: string): string => String(data.get(name) ?? '');
    setBusy(true);
    const result = await register({
      firstName: get('firstName'),
      lastName: get('lastName'),
      phone: get('phone'),
      login: get('login'),
      email: get('email'),
      password: get('password'),
      password2: get('password2'),
    });
    setBusy(false);
    if (result.ok) navigate('/home', { replace: true });
    else setNotice({ kind: 'error', key: result.error });
  }

  return (
    <AuthScreen title={t('register.title')} subtitle={t('register.subtitle')}>
      <form className="form form-grid" noValidate onSubmit={onSubmit}>
        <Field name="firstName" label={t('register.firstName')} autoComplete="given-name" />
        <Field name="lastName" label={t('register.lastName')} autoComplete="family-name" />
        <Field name="phone" type="tel" label={t('register.phone')} autoComplete="tel" />
        <Field name="login" label={t('register.login')} autoComplete="username" />
        <Field className="span-2" name="email" type="email" label={t('register.email')} autoComplete="email" />
        <Field name="password" type="password" label={t('register.password')} autoComplete="new-password" />
        <Field name="password2" type="password" label={t('register.password2')} autoComplete="new-password" />
        <div className="span-2">
          <Message notice={notice} />
        </div>
        <div className="form-actions span-2">
          <button className="btn btn-gradient btn-block" type="submit" disabled={busy}>
            {t('register.submit')}
          </button>
        </div>
        <p className="form-hint span-2">
          {t('register.haveAccount')} <Link to="/login">{t('sidebar.login')}</Link>
        </p>
      </form>
    </AuthScreen>
  );
}
````

## File: src/pages/SettingsPage.tsx
````typescript
import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { Field, Message } from '../components/Form';
import type { Notice } from '../components/Form';
import { AuthScreen } from '../components/Shell';
import { useI18n } from '../i18n-context';
import type { Lang, TranslationKey } from '../i18n';
import type { ThemeMode } from '../theme';
import { useTheme } from '../theme-context';

/** Сегментированный переключатель на радио-кнопках */
function Segmented<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: Array<{ value: T; label: string }>;
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="segmented" role="radiogroup">
      {options.map((option) => (
        <label key={option.value} className="segment">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={() => onChange(option.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: TranslationKey; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <section className="settings-section">
      <h2>{t(title)}</h2>
      {children}
    </section>
  );
}

export function SettingsPage() {
  const { t, lang, setLang } = useI18n();
  const { user, logout, changePassword } = useAuth();
  const navigate = useNavigate();
  const { mode: theme, setMode: onTheme } = useTheme();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    const result = await changePassword(
      String(data.get('current') ?? ''),
      String(data.get('next') ?? ''),
      String(data.get('next2') ?? ''),
    );
    setBusy(false);
    if (result.ok) {
      form.reset();
      setNotice({ kind: 'success', key: 'settings.passwordChanged' });
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  return (
    <AuthScreen title={t('settings.title')} variant="single">
      <div className="settings">
        <Section title="settings.account">
          <p className="account-line">
            <strong>{user?.login}</strong> · {user?.email}
          </p>
        </Section>

        <Section title="settings.language">
          <Segmented<Lang>
            name="lang"
            value={lang}
            onChange={setLang}
            options={[
              { value: 'ru', label: 'Русский' },
              { value: 'en', label: 'English' },
            ]}
          />
        </Section>

        <Section title="settings.theme">
          <Segmented<ThemeMode>
            name="theme"
            value={theme}
            onChange={onTheme}
            options={[
              { value: 'system', label: t('settings.theme.system') },
              { value: 'dark', label: t('settings.theme.dark') },
              { value: 'light', label: t('settings.theme.light') },
            ]}
          />
        </Section>

        <Section title="settings.password">
          <form className="form" noValidate onSubmit={onSubmit}>
            <Field name="current" type="password" label={t('settings.currentPassword')} autoComplete="current-password" />
            <Field name="next" type="password" label={t('settings.newPassword')} autoComplete="new-password" />
            <Field name="next2" type="password" label={t('settings.newPassword2')} autoComplete="new-password" />
            <Message notice={notice} />
            <div className="form-actions">
              <button className="btn btn-gradient" type="submit" disabled={busy}>
                {t('settings.changePassword')}
              </button>
            </div>
          </form>
        </Section>

        <div className="logout-row">
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => {
              logout();
              navigate('/home', { replace: true });
            }}
          >
            {t('settings.logout')}
          </button>
        </div>
      </div>
    </AuthScreen>
  );
}
````

## File: src/shared/specs.ts
````typescript
/**
 * Общие для клиента и сервера типы каталога и описание характеристик по категориям.
 * Именно по этому описанию строятся таблица характеристик и «умное» сравнение.
 */
export type Category = 'smartphones' | 'laptops' | 'peripherals' | 'accessories' | 'software';

export const CATEGORIES: Category[] = ['smartphones', 'laptops', 'peripherals', 'accessories', 'software'];

/** Адрес раздела сайта для каждой категории */
export const CATEGORY_ROUTE: Record<Category, string> = {
  smartphones: '/smartphones',
  laptops: '/laptops',
  peripherals: '/peripherals',
  accessories: '/accessories',
  software: '/drivers-software',
};

export interface L10n {
  ru: string;
  en: string;
}

export type SpecValue = number | boolean | L10n;

export interface SpecDef {
  key: string;
  label: L10n;
  unit?: L10n;
  /** higher — чем больше, тем лучше; lower — чем меньше, тем лучше; none — просто информация */
  better: 'higher' | 'lower' | 'none';
  /** вес в итоговом балле, 0 — в баллах не участвует */
  weight: number;
  /** показывать в «коротких» характеристиках в карточке и окне товара */
  highlight?: boolean;
}

const u = (ru: string, en = ru): L10n => ({ ru, en });
const WARRANTY: SpecDef = {
  key: 'warranty',
  label: u('Гарантия', 'Warranty'),
  unit: u('мес.', 'mo.'),
  better: 'higher',
  weight: 1,
};

export const SPEC_DEFS: Record<Category, SpecDef[]> = {
  smartphones: [
    { key: 'chip', label: u('Процессор', 'Chip'), better: 'none', weight: 0, highlight: true },
    { key: 'screen', label: u('Диагональ экрана', 'Screen size'), unit: u('"', '"'), better: 'none', weight: 0 },
    { key: 'refresh', label: u('Частота экрана', 'Refresh rate'), unit: u('Гц', 'Hz'), better: 'higher', weight: 1 },
    { key: 'ram', label: u('Оперативная память', 'RAM'), unit: u('ГБ', 'GB'), better: 'higher', weight: 2, highlight: true },
    { key: 'storage', label: u('Встроенная память', 'Storage'), unit: u('ГБ', 'GB'), better: 'higher', weight: 2, highlight: true },
    { key: 'camera', label: u('Основная камера', 'Main camera'), unit: u('Мп', 'MP'), better: 'higher', weight: 2 },
    { key: 'battery', label: u('Аккумулятор', 'Battery'), unit: u('мА·ч', 'mAh'), better: 'higher', weight: 3, highlight: true },
    { key: 'charging', label: u('Зарядка', 'Charging'), unit: u('Вт', 'W'), better: 'higher', weight: 1 },
    { key: 'weight', label: u('Вес', 'Weight'), unit: u('г', 'g'), better: 'lower', weight: 1 },
    { key: 'nfc', label: u('NFC', 'NFC'), better: 'higher', weight: 0.5 },
    WARRANTY,
  ],
  laptops: [
    { key: 'cpu', label: u('Процессор', 'Processor'), better: 'none', weight: 0, highlight: true },
    { key: 'cores', label: u('Ядер процессора', 'CPU cores'), better: 'higher', weight: 2 },
    { key: 'gpu', label: u('Видеокарта', 'Graphics'), better: 'none', weight: 0 },
    { key: 'ram', label: u('Оперативная память', 'RAM'), unit: u('ГБ', 'GB'), better: 'higher', weight: 3, highlight: true },
    { key: 'storage', label: u('Накопитель SSD', 'SSD storage'), unit: u('ГБ', 'GB'), better: 'higher', weight: 2, highlight: true },
    { key: 'screen', label: u('Диагональ экрана', 'Screen size'), unit: u('"', '"'), better: 'none', weight: 0 },
    { key: 'refresh', label: u('Частота экрана', 'Refresh rate'), unit: u('Гц', 'Hz'), better: 'higher', weight: 1 },
    { key: 'battery', label: u('Время работы', 'Battery life'), unit: u('ч', 'h'), better: 'higher', weight: 3, highlight: true },
    { key: 'weight', label: u('Вес', 'Weight'), unit: u('кг', 'kg'), better: 'lower', weight: 1.5 },
    WARRANTY,
  ],
  peripherals: [
    { key: 'type', label: u('Тип', 'Type'), better: 'none', weight: 0, highlight: true },
    { key: 'connection', label: u('Подключение', 'Connection'), better: 'none', weight: 0, highlight: true },
    { key: 'latency', label: u('Задержка', 'Latency'), unit: u('мс', 'ms'), better: 'lower', weight: 3 },
    { key: 'battery', label: u('Автономность', 'Battery life'), unit: u('ч', 'h'), better: 'higher', weight: 2, highlight: true },
    { key: 'weight', label: u('Вес', 'Weight'), unit: u('г', 'g'), better: 'lower', weight: 1.5 },
    { key: 'rgb', label: u('RGB-подсветка', 'RGB lighting'), better: 'higher', weight: 0.5 },
    WARRANTY,
  ],
  accessories: [
    { key: 'type', label: u('Тип', 'Type'), better: 'none', weight: 0, highlight: true },
    { key: 'power', label: u('Мощность', 'Power'), unit: u('Вт', 'W'), better: 'higher', weight: 3, highlight: true },
    { key: 'ports', label: u('Количество портов', 'Ports'), better: 'higher', weight: 1.5 },
    { key: 'cable', label: u('Длина кабеля', 'Cable length'), unit: u('м', 'm'), better: 'higher', weight: 1 },
    { key: 'weight', label: u('Вес', 'Weight'), unit: u('г', 'g'), better: 'lower', weight: 1 },
    WARRANTY,
  ],
  software: [
    { key: 'platforms', label: u('Платформы', 'Platforms'), better: 'none', weight: 0, highlight: true },
    { key: 'version', label: u('Версия', 'Version'), better: 'none', weight: 0, highlight: true },
    { key: 'devices', label: u('Устройств на лицензию', 'Devices per license'), better: 'higher', weight: 3 },
    { key: 'support', label: u('Поддержка', 'Support'), unit: u('мес.', 'mo.'), better: 'higher', weight: 2 },
    { key: 'size', label: u('Размер установщика', 'Installer size'), unit: u('МБ', 'MB'), better: 'lower', weight: 1 },
  ],
};
````

## File: src/shared/types.ts
````typescript
import type { Category, L10n, SpecValue } from './specs';

export type Badge = 'hit' | 'new' | 'sale';

/** Товар, как его отдаёт API (вместе с агрегатами по отзывам и вопросам) */
export interface Product {
  id: string;
  category: Category;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  badge?: Badge;
  /** два цвета «обложки» товара */
  colors: [string, string];
  /** Адрес фото товара. Если не задан — показывается заглушка по категории */
  image?: string;
  description: L10n;
  specs: Record<string, SpecValue>;
  rating: number;
  reviewCount: number;
  questionCount: number;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  createdAt: string;
  isMine: boolean;
}

export interface ReviewSummary {
  rating: number;
  count: number;
  /** distribution[0] — число оценок «1», distribution[4] — «5» */
  distribution: number[];
}

/** Почему пользователь не может оставить отзыв (null — может) */
export type ReviewBlock = 'login' | 'purchase' | 'reviewed' | null;

export interface Answer {
  id: string;
  authorName: string;
  text: string;
  createdAt: string;
  isMine: boolean;
  isBuyer: boolean;
  /** ответ от имени магазина */
  isShop: boolean;
}

export interface Question {
  id: string;
  authorName: string;
  text: string;
  createdAt: string;
  isMine: boolean;
  answers: Answer[];
}

export interface OrderSummary {
  id: string;
  total: number;
  createdAt: string;
}
````

## File: src/styles/app.css
````css
/* ---------- Каркас ---------- */
.app {
  --sidebar-w: clamp(240px, 21vw, 408px);

  position: relative;
  display: grid;
  grid-template-columns: var(--sidebar-w) minmax(0, 1fr);
  gap: clamp(20px, 2.5vw, 47px);
  min-height: 100vh;
  padding: 20px;

  & > .main {
    position: relative;
    z-index: 1;
  }
}

.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
  padding-right: 8px;
}

/* ---------- Сайдбар ---------- */
.sidebar {
  position: sticky;
  top: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  padding: 12px 8px 8px;
  overflow-y: auto;
  color: var(--nav-fg);
  background: var(--nav-bg);
  border-radius: 24px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0; /* пункты меню идут вплотную друг к другу */
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: clamp(52px, 8vh, 74px);
  padding: 0 22px;
  font-size: clamp(17px, 1.25vw, 24px);
  border-radius: 14px;
  transition: background 0.15s;

  &:hover {
    background: var(--nav-hover);
  }

  &.active {
    color: var(--nav-active-fg);
    font-weight: 500;
    background: var(--nav-active-bg);
    box-shadow: var(--nav-active-shadow);
  }

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
  }

  & .icon {
    justify-content: center;
    width: 28px;
  }
}

.sidebar-footer {
  margin-top: auto;
  border-radius: 18px;
}

.sidebar-guest {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 4px;
}

/* вторая кнопка («Зарегистрироваться») спокойнее первой */
.sidebar-guest .btn:last-child {
  color: var(--nav-fg);
  background: var(--nav-hover);
}

.user-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  color: var(--text);
  background: var(--card);
  border: 1px solid var(--line);
}

.avatar {
  display: grid;
  flex: none;
  place-items: center;
  width: 60px;
  height: 60px;
  color: #fff;
  background: var(--accent);
  border-radius: 50%;

  & .icon {
    width: 28px;
    height: 28px;
  }
}

.user-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  line-height: 1.25;
}

.user-name,
.user-email {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-name {
  font-size: clamp(16px, 1.25vw, 22px);
}

.user-email {
  font-size: clamp(14px, 1.1vw, 20px);
  color: var(--text-muted);
}

.settings-link {
  display: grid;
  flex: none;
  place-items: center;
  width: 52px;
  height: 52px;
  color: var(--text);
  background: var(--surface);
  border-radius: 50%;
  transition: background 0.15s;

  &:hover {
    color: var(--btn-fg);
    background: var(--btn-bg);
  }

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
  }

  & .icon {
    width: 28px;
    height: 28px;
  }
}

/* ---------- Шапка ---------- */
.topbar {
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 46px;
}

.logo {
  flex: none;
  font-size: 40px;
  line-height: 1;
  letter-spacing: 0.01em;

  & span {
    color: var(--accent);
  }
}

:root[data-theme='dark'] .logo span {
  color: var(--link);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) .logo span {
    color: var(--link);
  }
}

.search {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
  height: 46px;
  padding: 0 14px;
  color: #fff;
  background: var(--input);
  border-radius: 23px;

  & .icon {
    width: 22px;
    height: 22px;
  }

  & input {
    flex: 1;
    min-width: 0;
    font-size: 18px;
    color: var(--input-text);
    background: none;
    border: 0;
    outline: 0;

    &::placeholder {
      color: var(--text-muted);
    }
  }

  &:focus-within {
    outline: 2px solid var(--focus);
  }
}

.actions {
  display: flex;
  flex: none;
  gap: 17px;
}

.round-btn {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  padding: 0;
  position: relative;
  color: var(--btn-fg);
  background: var(--round-bg);
  border: 0;
  border-radius: 50%;
  transition: transform 0.15s, background 0.15s, color 0.15s, box-shadow 0.15s;

  &:hover {
    filter: brightness(1.12);
  }

  /* нажата или открыта панель: цвет зависит от темы */
  &:active,
  &[aria-expanded='true'] {
    color: var(--press-fg);
    background: var(--press-solid);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--press-solid) 35%, transparent);
    transform: none;
  }

  & .icon {
    width: 24px;
    height: 24px;
  }
}

.burger {
  display: none;
  flex: none;
  place-items: center;
  width: 46px;
  height: 46px;
  padding: 0;
  color: var(--text);
  background: var(--surface);
  border: 0;
  border-radius: 14px;

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
  }
}

.backdrop {
  display: none;
}

/* ---------- Контент ---------- */
.section {
  display: flex;
  flex-direction: column;
  gap: 42px;
}

.skeleton {
  background: var(--surface);
  border-radius: 28px;
}

.banner {
  height: clamp(160px, 30vh, 318px);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 19px;
}

.card {
  aspect-ratio: 335 / 495;
}

/* ---------- Кнопки ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 28px;
  font-size: 18px;
  color: var(--btn-fg);
  background: var(--btn-bg);
  border: 0;
  border-radius: 999px;
  transition: filter 0.15s, transform 0.1s;

  &:hover {
    filter: var(--btn-hover);
  }

  /* нажатие: цвет зависит от темы (тёмный индиго в светлой, светлая лаванда в тёмной) */
  &:active:not(:disabled) {
    color: var(--press-fg);
    background: var(--press-bg);
    filter: none;
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
}

.btn-danger {
  color: #fff;
  background: #c62828;
}

/* ---------- Экраны входа / регистрации / настроек ---------- */
.auth-screen {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px 28px 40px;
}

.auth-top {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1040px, 100%);
  margin-bottom: 20px;
}

.auth-card {
  position: relative;
  z-index: 1;
  width: min(1040px, 100%);
  margin: auto 0;
  overflow: hidden;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 32px;
  box-shadow: var(--shadow);
}

.auth-split {
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
  min-height: 600px;
}

.auth-single {
  width: min(680px, 100%);
}

.auth-aside {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 36px;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(160deg, var(--side-1) 0%, var(--side-3) 70%, var(--side-4) 100%);

  /* мягкие световые пятна */
  &::before,
  &::after {
    position: absolute;
    content: '';
    pointer-events: none;
    border-radius: 50%;
  }

  &::before {
    right: -90px;
    bottom: -90px;
    width: 280px;
    height: 280px;
    background: rgb(255 255 255 / 8%);
  }

  &::after {
    top: -60px;
    right: 30px;
    width: 140px;
    height: 140px;
    background: rgb(255 255 255 / 6%);
  }

  & .logo {
    position: relative;
    z-index: 1;
    color: #fff;

    & span {
      color: #b9b6ff;
    }
  }
}

:root[data-theme='dark'] .auth-aside .logo span {
  color: #b9b6ff;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) .auth-aside .logo span {
    color: #b9b6ff;
  }
}

.auth-pitch {
  position: relative;
  z-index: 1;

  & h2 {
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.25;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & li {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 17px;
  }

  & .icon {
    display: grid;
    flex: none;
    place-items: center;
    width: 44px;
    height: 44px;
    padding: 11px;
    background: rgb(255 255 255 / 14%);
    border-radius: 14px;
  }
}

.auth-main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 56px;
  background: var(--card);
}

.auth-single .auth-main {
  padding: 40px 48px 44px;
}

.auth-inner {
  width: min(460px, 100%);

  & > h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 1.2;
  }
}

.auth-single .auth-inner {
  width: 100%;
}

.auth-subtitle {
  margin: 6px 0 28px;
  color: var(--text-muted);
}

.auth-single .auth-inner > h1 {
  margin-bottom: 24px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px 10px 14px;
  font-size: 17px;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: #fff;
    background: var(--accent);
  }

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
  }

  & .icon {
    width: 22px;
    height: 22px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  & .span-2 {
    grid-column: 1 / -1;
  }
}

/* Поле с плавающей подписью */
.field {
  position: relative;

  & label {
    position: absolute;
    top: 50%;
    left: 18px;
    max-width: calc(100% - 36px);
    overflow: hidden;
    font-size: 16px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    transform: translateY(-50%);
    transition: top 0.15s, font-size 0.15s, transform 0.15s, color 0.15s;
  }

  & .input:focus + label,
  & .input:not(:placeholder-shown) + label,
  & .input:-webkit-autofill + label {
    top: 9px;
    font-size: 12px;
    transform: none;
  }

  & .input:focus + label {
    color: var(--link);
  }
}

.input {
  width: 100%;
  height: 54px;
  padding: 20px 18px 6px;
  font-size: 16px;
  color: var(--input-text);
  background: var(--input);
  border: 1.5px solid transparent;
  border-radius: 16px;
  outline: 0;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: var(--line);
  }

  &:focus {
    border-color: var(--focus);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--focus) 20%, transparent);
  }

  &.has-toggle {
    padding-right: 52px;
  }
}

.field-toggle {
  position: absolute;
  top: 50%;
  right: 8px;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  color: var(--text-muted);
  background: none;
  border: 0;
  border-radius: 12px;
  transform: translateY(-50%);

  &:hover {
    color: var(--text);
  }

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
  }

  & .icon {
    width: 22px;
    height: 22px;
  }
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  cursor: pointer;

  & input {
    flex: none;
    width: 24px;
    height: 24px;
    margin: 0;
    appearance: none;
    cursor: pointer;
    background: transparent center / 70% no-repeat;
    border: 2px solid var(--text-muted);
    border-radius: 7px;
    transition: background 0.15s, border-color 0.15s;

    &:hover {
      border-color: var(--link);
    }

    &:checked {
      background-color: var(--accent);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5'/%3E%3C/svg%3E");
      border-color: var(--accent);
    }
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.btn-block {
  width: 100%;
  min-height: 50px;
  font-size: 17px;
}

.form-hint {
  font-size: 15px;
  color: var(--text-muted);
  text-align: center;

  & a {
    font-weight: 500;
    color: var(--link);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.message {
  margin: 0;
  font-size: 15px;
  color: var(--error);

  &:not(:empty) {
    padding: 10px 14px;
    background: color-mix(in srgb, var(--error) 14%, transparent);
    border-radius: 12px;
  }

  &[data-kind='success'] {
    color: var(--success);

    &:not(:empty) {
      background: color-mix(in srgb, var(--success) 14%, transparent);
    }
  }
}

/* ---------- Настройки ---------- */
.settings-section {
  margin-bottom: 26px;

  & h2 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
  }
}

.account-line {
  padding: 12px 16px;
  font-size: 17px;
  background: var(--surface);
  border-radius: 14px;
  overflow-wrap: anywhere;
}

.segmented {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px;
  background: var(--input);
  border-radius: 999px;
}

.segment {
  cursor: pointer;

  & input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  & span {
    display: block;
    padding: 8px 20px;
    font-size: 17px;
    border-radius: 999px;
    transition: background 0.15s;
  }

  & input:checked + span {
    color: var(--btn-fg);
    background: var(--btn-bg);
  }

  &:active span {
    color: var(--press-fg);
    background: var(--press-bg);
  }

  & input:focus-visible + span {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
}

.logout-row {
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

/* ---------- Адаптив ---------- */
@media (width <= 1200px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (width <= 820px) {
  .auth-split {
    grid-template-columns: minmax(0, 1fr);
    min-height: 0;
  }

  .auth-aside {
    padding: 22px 24px;
  }

  .auth-pitch {
    display: none;
  }
}

@media (width <= 900px) {
  .app {
    grid-template-columns: minmax(0, 1fr);
    padding: 14px;
  }

  .burger {
    display: grid;
  }

  .sidebar {
    position: fixed;
    top: 14px;
    bottom: 14px;
    left: 14px;
    z-index: 20;
    width: min(320px, calc(100vw - 28px));
    height: auto;
    transform: translateX(calc(-100% - 28px));
    transition: transform 0.25s;
  }

  .menu-open .sidebar {
    transform: none;
  }

  .menu-open .backdrop {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: block;
    background: rgb(0 0 0 / 45%);
  }

  .main {
    padding-right: 0;
  }

  .topbar {
    flex-wrap: wrap;
    gap: 12px;
  }

  .logo {
    font-size: 30px;
  }

  .search {
    flex: 1 1 100%;
    order: 5;
  }

  .actions {
    gap: 10px;
    margin-left: auto;
  }
}

@media (width <= 560px) {
  .logo {
    font-size: 24px;
  }

  .actions {
    gap: 6px;
  }

  .round-btn,
  .burger {
    width: 36px;
    height: 36px;
  }

  .round-btn .icon {
    width: 20px;
    height: 20px;
  }

  .topbar {
    gap: 8px;
  }

  .pop-panel {
    top: 62px;
  }

  .grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .auth-screen {
    padding: 12px 12px 28px;
  }

  .auth-main,
  .auth-single .auth-main {
    padding: 28px 20px 32px;
  }

  .auth-card {
    border-radius: 24px;
  }

  .form-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}


/* ---------- Выпадающие панели в шапке ---------- */
.pop {
  position: relative;
}

.badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 19px;
  height: 19px;
  padding: 0 5px;
  font-size: 11px;
  font-weight: 500;
  line-height: 19px;
  color: #fff;
  text-align: center;
  background: #e5484d;
  border: 2px solid var(--bg);
  border-radius: 10px;
  box-sizing: content-box;
}

.pop-panel {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  width: min(390px, calc(100vw - 28px));
  max-height: min(560px, calc(100vh - 110px));
  overflow: hidden;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  animation: pop-in 0.16s ease-out;
}

@keyframes pop-in {
  from {
    opacity: 0;
    transform: translateY(-6px) scale(0.98);
  }
}

.pop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--line);

  & h2 {
    font-size: 18px;
    font-weight: 500;
  }
}

.pop-body {
  flex: 1;
  min-height: 0;
  padding: 8px;
  margin: 0;
  overflow-y: auto;
}

.pop-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 20px 18px;
  border-top: 1px solid var(--line);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--success);

  &::before {
    width: 8px;
    height: 8px;
    content: '';
    background: currentcolor;
    border-radius: 50%;
  }
}

.link-btn {
  padding: 4px 0;
  font-size: 14px;
  color: var(--link);
  background: none;
  border: 0;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.6;
  }
}

/* меню темы и языка */
.menu-title {
  padding: 10px 12px 4px;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  text-transform: uppercase;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  text-align: left;
  background: none;
  border: 0;
  border-radius: 12px;
  transition: background 0.12s;

  & > span:not(.icon):not(.menu-lang) {
    flex: 1;
  }

  &:hover {
    background: var(--surface);
  }

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
  }

  &[aria-checked='true'] {
    font-weight: 500;
    color: var(--link);
  }

  & .icon {
    width: 22px;
    height: 22px;
  }
}

.menu-lang {
  display: inline-block;
  width: 22px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
}

/* чат */
.chat-log {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 200px;
  padding: 16px;
}

.msg {
  max-width: 82%;
  padding: 10px 14px;
  margin: 0;
  overflow-wrap: anywhere;
  background: var(--input);
  border-radius: 16px 16px 16px 4px;

  &.msg-me {
    align-self: flex-end;
    color: var(--btn-fg);
    background: var(--btn-bg);
    border-radius: 16px 16px 4px;
  }
}

.chat-form {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid var(--line);

  & input {
    flex: 1;
    min-width: 0;
    height: 44px;
    padding: 0 16px;
    color: var(--input-text);
    background: var(--input);
    border: 1.5px solid transparent;
    border-radius: 22px;
    outline: 0;

    &::placeholder {
      color: var(--text-muted);
    }

    &:focus {
      border-color: var(--focus);
    }
  }
}

.send-btn {
  display: grid;
  flex: none;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  color: var(--btn-fg);
  background: var(--btn-bg);
  border: 0;
  border-radius: 50%;

  &:hover:not(:disabled) {
    filter: var(--btn-hover);
  }

  &:active:not(:disabled) {
    color: var(--press-fg);
    background: var(--press-solid);
  }

  &:disabled {
    opacity: 0.45;
  }

  & .icon {
    width: 20px;
    height: 20px;
  }
}

/* списки избранного и корзины */
.list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
}

.row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 14px;

  &:hover {
    background: var(--surface);
  }
}

.thumb {
  display: grid;
  flex: none;
  place-items: center;
  width: 48px;
  height: 48px;
  color: var(--link);
  background: var(--surface);
  border-radius: 12px;

  & .icon {
    width: 24px;
    height: 24px;
  }
}

.row:hover .thumb {
  background: var(--input);
}

.row-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  line-height: 1.3;
}

.row-name {
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.row-price {
  font-size: 14px;
  font-weight: 500;
  color: var(--link);
}

.chip-btn {
  flex: none;
  padding: 7px 12px;
  font-size: 13px;
  color: var(--link);
  background: transparent;
  border: 1.5px solid var(--link);
  border-radius: 999px;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: color-mix(in srgb, var(--link) 14%, transparent);
  }

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
    border-color: var(--press-solid);
  }
}

.icon-btn {
  display: grid;
  flex: none;
  place-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  color: var(--text-muted);
  background: none;
  border: 0;
  border-radius: 10px;

  &:hover {
    color: var(--error);
    background: color-mix(in srgb, var(--error) 12%, transparent);
  }

  &:active {
    color: var(--press-fg);
    background: var(--press-solid);
  }

  & .icon {
    width: 20px;
    height: 20px;
  }
}

.stepper {
  display: inline-flex;
  flex: none;
  align-items: center;
  background: var(--surface);
  border-radius: 999px;

  & output {
    min-width: 22px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  & button {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    padding: 0;
    color: var(--text);
    background: none;
    border: 0;
    border-radius: 50%;

    &:hover {
      color: var(--link);
    }

    &:active {
      color: var(--press-fg);
      background: var(--press-solid);
    }

    & .icon {
      width: 16px;
      height: 16px;
    }
  }
}

.total {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0;

  & strong {
    font-size: 22px;
    font-weight: 500;
  }
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px;
  color: var(--text-muted);

  & .icon {
    width: 44px;
    height: 44px;
    opacity: 0.6;
  }
}

@media (width <= 900px) {
  .pop {
    position: static;
  }

  .pop-panel {
    top: 76px;
    right: 14px;
    left: 14px;
    width: auto;
  }
}
````

## File: src/styles/base.css
````css
:root {
  --accent: #4340b8;
  --accent-dark: #26215c;

  --bg: #f5f5f7;
  --text: #14142b;
  --text-muted: #6a6a80;
  --surface: #e9e9ef;
  --input: #e9e9ef;
  --input-text: #000000;
  --panel: #ffffff;
  --card: #ffffff;
  --border: #000000;
  --line: #e3e3ea;
  --link: #4340b8;
  --error: #c62828;
  --success: #2e7d32;
  --focus: #4340b8;
  --shadow: 0 8px 28px rgb(20 20 43 / 12%);
  --shadow-card: 0 1px 2px rgb(20 20 43 / 6%), 0 6px 18px rgb(20 20 43 / 6%);
  --sale: #c0392b;
  --success-solid: #2e7d32;
  --star: #e0a100;

  /* градиент кнопок и «нажатое» состояние */
  --btn-bg: #4340b8;
  --btn-fg: #e6e6f8;
  --btn-hover: brightness(1.15);
  --press-bg: linear-gradient(90deg, #1b1745, #0f0c2e);
  --press-fg: #ffffff;
  --press-solid: #1b1745;
  --round-bg: #4340b8;

  /* боковая панель */
  --side-1: #4340b8;
  --side-2: #342f94;
  --side-3: #26215c;
  --side-4: #201c52;

  /* диагональные полосы */
  --deco-light: #d9d9d9;
  --deco-dark-from: #3d3a8c;
  --deco-dark-to: #28235f;

  color-scheme: light;
  font-family: 'Roboto', system-ui, -apple-system, 'Segoe UI', sans-serif;
  /* меню в боковой панели */
  --nav-bg: #e8e8ee;
  --nav-fg: #2a2a40;
  --nav-hover: rgb(20 20 43 / 6%);
  --nav-active-bg: #ffffff;
  --nav-active-fg: #4340b8;
  --nav-active-shadow: 0 1px 3px rgb(20 20 43 / 15%);
}

/* Тёмная тема «Полночный индиго»: включается вручную... */
:root[data-theme='dark'] {
  --bg: #0b0b17;
  --text: #ecebfa;
  --text-muted: #9b9abd;
  --surface: #17172c;
  --input: #20203c;
  --input-text: #ecebfa;
  --panel: #12122a;
  --card: #15152b;
  --border: #2c2c52;
  --line: #26264a;
  --link: #a19eff;
  --error: #ff8f9d;
  --success: #6fe0a0;
  --focus: #a19eff;
  --shadow: 0 24px 70px rgb(0 0 0 / 55%);
  --shadow-card: none;
  --sale: #ff8f9d;
  --success-solid: #2f9e6b;
  --star: #ffc233;

  --btn-bg: #7a77f0;
  --btn-fg: #0b0b17;
  --btn-hover: brightness(1.12);
  --press-bg: linear-gradient(90deg, #c7c5ff, #a19eff);
  --press-fg: #14123a;
  --press-solid: #b3b0ff;
  --round-bg: #7a77f0;

  --side-1: #35318f;
  --side-2: #29256f;
  --side-3: #1a1750;
  --side-4: #120f3a;

  --deco-light: #3a3a66;
  --deco-dark-from: #2d2a6a;
  --deco-dark-to: #15123b;
  color-scheme: dark;
  --nav-bg: #1c1c2b;
  --nav-fg: #d4d4e4;
  --nav-hover: rgb(255 255 255 / 7%);
  --nav-active-bg: #4a46c8;
  --nav-active-fg: #ffffff;
  --nav-active-shadow: none;
}

/* ...или системной настройкой, если ручной выбор не сделан */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --bg: #0b0b17;
    --text: #ecebfa;
    --text-muted: #9b9abd;
    --surface: #17172c;
    --input: #20203c;
    --input-text: #ecebfa;
    --panel: #12122a;
    --card: #15152b;
    --border: #2c2c52;
    --line: #26264a;
    --link: #a19eff;
    --error: #ff8f9d;
    --success: #6fe0a0;
    --focus: #a19eff;
    --shadow: 0 24px 70px rgb(0 0 0 / 55%);
    --shadow-card: none;
    --sale: #ff8f9d;
    --success-solid: #2f9e6b;
    --star: #ffc233;

    --btn-bg: #7a77f0;
    --btn-fg: #0b0b17;
    --btn-hover: brightness(1.12);
    --press-bg: linear-gradient(90deg, #c7c5ff, #a19eff);
    --press-fg: #14123a;
    --press-solid: #b3b0ff;
    --round-bg: #7a77f0;

    --side-1: #35318f;
    --side-2: #29256f;
    --side-3: #1a1750;
    --side-4: #120f3a;

    --deco-light: #3a3a66;
    --deco-dark-from: #2d2a6a;
    --deco-dark-to: #15123b;
    color-scheme: dark;
    --nav-bg: #1c1c2b;
    --nav-fg: #d4d4e4;
    --nav-hover: rgb(255 255 255 / 7%);
    --nav-active-bg: #4a46c8;
    --nav-active-fg: #ffffff;
    --nav-active-shadow: none;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  background: var(--bg);
  color: var(--text);
  font-size: 16px;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.icon {
  display: inline-flex;
  flex: none;
  width: 26px;
  height: 26px;

  & svg {
    width: 100%;
    height: 100%;
  }
}

/* Диагональные полосы в углу */
.deco {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: min(52vw, 1000px);
  height: auto;
  aspect-ratio: 960 / 750;
  pointer-events: none;

  & .deco-accent {
    fill: var(--accent);
  }

  & .deco-light {
    fill: var(--deco-light);
  }

  & .deco-dark {
    fill: url('#deco-gradient');
  }
}
````

## File: src/styles/shop.css
````css
/* ===== Каталог, карточки, окно товара, отзывы, сравнение ===== */

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.muted { color: var(--text-muted); }

.btn-gradient { /* базовый вид задаёт .btn */ }
.btn-outline {
  color: var(--link);
  background: transparent;
  box-shadow: inset 0 0 0 2px var(--link);
  font-size: 16px;
  &:hover { filter: none; background: color-mix(in srgb, var(--link) 12%, transparent); }
}

@keyframes shimmer {
  to { background-position: -200% 0; }
}
@keyframes fade-in { from { opacity: 0; } }

/* ---------- Страница каталога ---------- */
.catalog, .cmp-page { padding: 8px 4px 40px; }
.shead {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin: 8px 0 20px;

  h1, h2 { margin: 0; font-size: clamp(24px, 3vw, 34px); }
  small { color: var(--text-muted); }
}
.catalog-section { margin-bottom: 36px; }
.catalog-state {
  padding: 40px 16px;
  text-align: center;
  color: var(--text-muted);
  display: grid;
  gap: 14px;
  justify-items: center;
}
.sort {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);

  select {
    min-height: 38px;
    padding: 0 14px;
    color: var(--input-text);
    background: var(--input);
    border: 1px solid var(--line);
    border-radius: 999px;
    font: inherit;
  }
}

.hero {
  display: flex;
  align-items: center;
  min-height: 180px;
  margin: 8px 0 28px;
  padding: clamp(22px, 3.5vw, 40px);
  color: var(--text);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;

  h1 { margin: 0 0 8px; font-size: clamp(26px, 3.4vw, 38px); line-height: 1.15; }
  p { margin: 0 0 18px; max-width: 480px; color: var(--text-muted); }
}
.hero-cta {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 26px;
  font-weight: 500;
  color: var(--btn-fg);
  background: var(--btn-bg);
  border-radius: 999px;
  &:hover { filter: brightness(1.1); }
  &:active { color: var(--press-fg); background: var(--press-solid); }
}

/* ---------- Сетка и карточка ---------- */
.pgrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
.pcard-skel {
  height: 380px;
  border-radius: 22px;
  background: linear-gradient(100deg, var(--surface) 30%, var(--panel) 50%, var(--surface) 70%) 0 0 / 200% 100%;
  animation: shimmer 1.6s linear infinite;
}

.pcard {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--text);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow-card);
  transition: border-color 0.15s;

  &:hover, &:focus-within { border-color: var(--accent); }
}
.pcard-stage {
  position: relative;
  display: grid;
  place-items: center;
  margin: 10px;
  padding: 14px;
  background: var(--surface);
  border-radius: 12px;
}
.pimg { display: block; width: 100%; aspect-ratio: 1; object-fit: contain; }
.pimg-ph {
  display: grid;
  place-items: center;
  color: color-mix(in srgb, var(--text-muted) 55%, transparent);
  .icon { width: 34%; height: 34%; }
}

.pbadge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 2px 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 999px;
  &.pbadge-sale { color: #fff; background: var(--sale); border-color: var(--sale); }
}

.pfav {
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 10px;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  color: var(--text);
  background: color-mix(in srgb, var(--card) 80%, transparent);
  border: 1px solid var(--line);
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;

  .icon { width: 20px; height: 20px; }
  &:hover { border-color: var(--accent); }
  &:active { background: var(--press-solid); color: var(--press-fg); }
  &.on { color: #e5384f; }
}
.pfav-lg { position: static; width: 48px; height: 48px; flex: none; margin: 0; }

.pcard-body { display: flex; flex-direction: column; gap: 6px; padding: 2px 16px 16px; flex: 1; }
.pbrand { font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-muted); }
.pname { margin: 0; font-size: 17px; line-height: 1.25; }
.pname-link {
  color: inherit;
  text-decoration: none;
  /* вся карточка кликабельна */
  &::before { content: ''; position: absolute; inset: 0; z-index: 1; }
}
.pprice {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-top: auto;
  padding-top: 6px;
  strong { font-size: 21px; font-weight: 600; }
  s { color: var(--text-muted); font-size: 14px; }
}
.prating { display: flex; align-items: center; gap: 8px; margin: 0; font-size: 14px; color: var(--text-muted); min-height: 20px; }

.pbuy {
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 42px;
  margin-top: 10px;
  padding: 0;
  font: inherit;
  font-weight: 500;
  color: var(--btn-fg);
  background: var(--btn-bg);
  border: 0;
  border-radius: 999px;
  cursor: pointer;

  &:hover { filter: brightness(1.1); }
  &:active { color: var(--press-fg); background: var(--press-solid); filter: none; }

  .pbuy-idle, .pbuy-done {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .icon { width: 20px; height: 20px; }
  }
  .pbuy-done { visibility: hidden; }
  &[data-added='true'] {
    background: var(--success-solid);
    .pbuy-idle { visibility: hidden; }
    .pbuy-done { visibility: visible; }
  }
}

/* ---------- Звёзды ---------- */
.stars {
  --v: 0;
  display: inline-block;
  width: 5em;
  height: 1em;
  font-size: 15px;
  background:
    linear-gradient(90deg, var(--star) calc(var(--v) / 5 * 100%), color-mix(in srgb, var(--text-muted) 35%, transparent) 0);
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cg id='s'%3E%3Cpath d='M10 1l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 14.6 4.7 17.5l1.1-6L1.4 7.3l6-.8z'/%3E%3C/g%3E%3Cuse href='%23s' x='20'/%3E%3Cuse href='%23s' x='40'/%3E%3Cuse href='%23s' x='60'/%3E%3Cuse href='%23s' x='80'/%3E%3C/svg%3E") center / 100% 100% no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cg id='s'%3E%3Cpath d='M10 1l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 14.6 4.7 17.5l1.1-6L1.4 7.3l6-.8z'/%3E%3C/g%3E%3Cuse href='%23s' x='20'/%3E%3Cuse href='%23s' x='40'/%3E%3Cuse href='%23s' x='60'/%3E%3Cuse href='%23s' x='80'/%3E%3C/svg%3E") center / 100% 100% no-repeat;
}
.star-picker {
  display: flex;
  gap: 4px;
  button {
    width: 38px;
    height: 38px;
    padding: 4px;
    background: none;
    border: 0;
    cursor: pointer;
    svg { width: 100%; height: 100%; fill: color-mix(in srgb, var(--text-muted) 35%, transparent); transition: fill 0.15s; }
    &.on svg { fill: var(--star); }
  }
}

/* ---------- Окно товара ---------- */
html.modal-open { overflow: hidden; }
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgb(8 6 28 / 55%);
  animation: fade-in 0.15s;
  overflow-y: auto;
}
.modal {
  position: relative;
  width: min(940px, 100%);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  outline: none;
}
.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 50%;
  cursor: pointer;
  &:hover { border-color: var(--accent); }
  &:active { background: var(--press-solid); color: var(--press-fg); }
  svg { width: 20px; height: 20px; }
}
.modal-top { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); }
.modal-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 320px;
  padding: 36px;
  margin: 14px;
  border-radius: 14px;
  background: var(--surface);
  .pimg { max-width: 300px; }
}
.modal-info { display: flex; flex-direction: column; gap: 12px; padding: 32px 32px 24px 28px; }
.modal-crumb { font-size: 14px; color: var(--link); text-decoration: none; &:hover { text-decoration: underline; } }
.modal-titlerow { display: flex; align-items: flex-start; gap: 12px; padding-right: 36px; h2 { margin: 0; font-size: clamp(22px, 3vw, 30px); line-height: 1.15; flex: 1; } }

/* значок вопроса о товаре: не совпадает с чатом поддержки */
.ask-btn {
  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: 44px;
  height: 44px;
  padding: 0;
  color: #fff;
  background: var(--accent);
  border: 0;
  border-radius: 14px 14px 14px 4px;
  cursor: pointer;
  svg { width: 24px; height: 24px; }
  &:hover { filter: brightness(1.12); }
  .badge {
    position: absolute;
    top: -6px;
    right: -6px;
    min-width: 20px;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    background: #e03131;
    border-radius: 999px;
  }
}
.modal-rating {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  padding: 0;
  font: inherit;
  color: var(--text-muted);
  background: none;
  border: 0;
  cursor: pointer;
  &:hover { color: var(--link); }
}
.modal-price { margin: 0; strong { font-size: 32px; } s { font-size: 18px; } }
.modal-desc { margin: 0; line-height: 1.55; color: var(--text-muted); }
.chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.chip {
  display: grid;
  padding: 7px 13px;
  font-size: 14px;
  font-weight: 600;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  small { font-weight: 400; color: var(--text-muted); font-size: 12px; }
}
.modal-actions { display: flex; align-items: center; gap: 12px; margin-top: auto; padding-top: 8px; }
.modal-buy { flex: 1; height: 48px; margin: 0; font-size: 17px; }

.modal-tabs { padding: 0 32px 32px; }
.tablist {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  gap: 4px;
  margin-bottom: 18px;
  padding-top: 8px;
  overflow-x: auto;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}
.tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  font: inherit;
  font-weight: 600;
  white-space: nowrap;
  color: var(--text-muted);
  background: none;
  border: 0;
  cursor: pointer;
  transition: color 0.2s;
  &::after {
    content: '';
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: -1px;
    height: 3px;
    border-radius: 3px;
    background: var(--accent);
    transform: scaleX(0);
  }
  &:hover { color: var(--text); }
  &.on { color: var(--text); &::after { transform: scaleX(1); } }
}
.tab-count { padding: 1px 8px; font-size: 12px; color: var(--text); background: var(--surface); border-radius: 999px; }
.tabpanel { min-height: 120px; }
.tab-muted { color: var(--text-muted); text-align: center; padding: 24px 0; }
.tab-note {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 18px;
  padding: 14px 16px;
  color: var(--text-muted);
  background: var(--surface);
  border: 1px dashed var(--line);
  border-radius: 16px;
  svg { width: 22px; height: 22px; flex: none; color: var(--link); }
  a { color: var(--link); font-weight: 600; }
}

.specs { margin: 0; }
.spec-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 11px 4px;
  border-bottom: 1px solid var(--line);
  dt { color: var(--text-muted); }
  dd { margin: 0; font-weight: 600; text-align: right; }
}

/* ---------- Отзывы ---------- */
.rv-summary { display: flex; align-items: center; gap: 28px; margin-bottom: 20px; padding: 18px; background: var(--surface); border-radius: 20px; flex-wrap: wrap; }
.rv-score { display: grid; justify-items: center; gap: 2px; strong { font-size: 44px; line-height: 1; } small { color: var(--text-muted); } }
.rv-bars {
  flex: 1;
  min-width: 180px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 5px;
  li { display: grid; grid-template-columns: 14px 1fr 28px; align-items: center; gap: 8px; font-size: 13px; }
  small { color: var(--text-muted); text-align: right; }
}
.rv-bar { height: 8px; overflow: hidden; background: var(--line); border-radius: 8px; i { display: block; height: 100%; background: var(--star); border-radius: 8px; } }
.rv-form, .qa-form {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
  padding: 18px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  h4 { margin: 0; }
  textarea, input {
    width: 100%;
    padding: 12px 14px;
    font: inherit;
    color: var(--input-text);
    background: var(--input);
    border: 1px solid transparent;
    border-radius: 14px;
    resize: vertical;
    &:focus { outline: 2px solid var(--focus); }
  }
  .btn { justify-self: start; }
}
.rv-list, .qa-list { display: grid; gap: 14px; margin: 0; padding: 0; list-style: none; }
.rv-item {
  display: flex;
  gap: 14px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 18px;
  &.mine { border-color: var(--link); }
  > div { flex: 1; min-width: 0; }
}
.avatar-sm {
  display: grid;
  place-items: center;
  flex: none;
  width: 38px;
  height: 38px;
  font-weight: 700;
  color: #fff;
  background: var(--round-bg);
  border-radius: 50%;
}
.rv-head { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin: 0 0 4px; small { color: var(--text-muted); margin-left: auto; } }
.rv-text { margin: 6px 0 0; line-height: 1.5; overflow-wrap: anywhere; }
.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 9px;
  font-size: 12px;
  font-style: normal;
  border-radius: 999px;
  svg { display: block; width: 12px; height: 12px; flex: none; }
}
.tag-me { color: #fff; background: var(--accent); }
.tag-ok { color: var(--success); background: color-mix(in srgb, var(--success) 16%, transparent); }
.tag-shop { color: #fff; background: var(--accent); }

/* ---------- Вопросы ---------- */
.qa-item { padding: 16px; border: 1px solid var(--line); border-radius: 18px; display: grid; gap: 10px; }
.qa-q, .qa-a { display: flex; gap: 12px; margin: 0; line-height: 1.5; overflow-wrap: anywhere; small { color: var(--text-muted); } }
.qa-mark { display: grid; place-items: center; flex: none; width: 38px; height: 38px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 12px 12px 12px 3px; }
.qa-a { margin-left: 24px; padding: 10px 12px; background: var(--surface); border-radius: 14px; }
.qa-reply { display: flex; gap: 8px; margin-left: 24px; input { flex: 1; min-width: 0; padding: 9px 14px; font: inherit; color: var(--input-text); background: var(--input); border: 0; border-radius: 999px; } }

/* ---------- Корзина: сравнение ---------- */
.cmp-check { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-muted); cursor: pointer; }
.cmp-hint { font-size: 12px; color: var(--text-muted); margin: 4px 0; }

/* ---------- Страница сравнения ---------- */
.cmp-empty { display: grid; justify-items: center; gap: 10px; padding: 48px 16px; svg { width: 48px; height: 48px; color: var(--link); } }
.cmp-note { padding: 10px 14px; background: var(--surface); border-left: 4px solid var(--star); border-radius: 10px; }
.cmp-verdict { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px; margin-bottom: 14px; }
.vcard {
  display: grid;
  gap: 4px;
  padding: 16px 18px;
  color: var(--btn-fg);
  background: var(--accent);
  border-radius: 16px;
  small { opacity: 0.75; }
  strong { font-size: 17px; }
}
.cmp-text { margin: 0 0 14px; padding-left: 20px; line-height: 1.6; color: var(--text-muted); }
.cmp-toggle { margin-bottom: 12px; }
.cmp-scroll { overflow-x: auto; background: var(--bg); border: 1px solid var(--line); border-radius: 20px; }
.cmp {
  width: 100%;
  min-width: 720px;
  table-layout: fixed; /* все колонки товаров одной ширины, расстояния между ними равны */
  border-collapse: collapse;
  thead th:first-child, tbody th { width: 170px; }
  td { text-align: center; }
  th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--line); vertical-align: top; }
  tbody th { color: var(--text-muted); font-weight: 500; white-space: nowrap; }
  tbody tr:last-child > * { border-bottom: 0; }
  tbody tr:hover > * { background: color-mix(in srgb, var(--link) 6%, transparent); }
  thead th:first-child, tbody th { position: sticky; left: 0; background: var(--bg); z-index: 1; }
  td { background: var(--bg); text-align: center; }
  .cmp-score { justify-content: center; }
  td.best { background: color-mix(in srgb, var(--success) 14%, transparent); font-weight: 700; }
}
.cmp-prod { position: relative; text-align: center !important; }
.cmp-art { display: block; width: 84px; margin: 0 auto; }
.cmp-name { display: block; margin-top: 4px; font-weight: 700; color: var(--text); text-decoration: none; &:hover { color: var(--link); } }
.cmp-remove { position: absolute; top: 6px; right: 6px; width: 28px; height: 28px; .icon { width: 14px; height: 14px; } }
.best-mark { display: inline-flex; align-items: center; gap: 3px; margin-left: 8px; font-size: 12px; font-weight: 600; color: var(--success); white-space: nowrap; svg { display: block; width: 13px; height: 13px; } }
.cmp-rating { display: inline-flex; align-items: center; gap: 8px; }
.cmp-score { display: flex; align-items: center; gap: 10px; b { font-size: 20px; } }
.cmp-bar { flex: 1; min-width: 50px; height: 8px; overflow: hidden; background: var(--line); border-radius: 8px; i { display: block; height: 100%; background: var(--accent); border-radius: 8px; } }
.cmp-leads { display: block; margin-top: 4px; font-weight: 400; color: var(--text-muted); }

/* ---------- Адаптив ---------- */
@media (width <= 760px) {
  .modal-top { grid-template-columns: 1fr; }
  .modal-stage { min-height: 220px; padding: 24px; .pimg { max-width: 190px; } }
  .modal-info { padding: 20px 18px 16px; }
  .modal-tabs { padding: 0 18px 24px; }
  .modal-backdrop { padding: 0; align-items: end; }
  .modal { max-height: 96dvh; border-radius: 24px 24px 0 0; }
  .pgrid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
  .pname { font-size: 15px; }
  .pprice strong { font-size: 18px; }
  .qa-a, .qa-reply { margin-left: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .pcard-skel { animation: none; }
}

.thumb .pimg-ph .icon { width: 58%; height: 58%; }
````

## File: src/App.tsx
````typescript
import type { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './auth-context';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { CatalogPage } from './pages/CatalogPage';
import { ComparePage } from './pages/ComparePage';
import { SettingsPage } from './pages/SettingsPage';

/** Только для вошедших */
function RequireAuth({ children }: { children: ReactNode }) {
  const { user, ready, signedOut } = useAuth();
  if (!ready) return null;
  // после явного выхода — на главную, иначе гостя просим войти
  return user ? children : <Navigate to={signedOut ? '/home' : '/login'} replace />;
}

/** Только для гостей */
function GuestOnly({ children }: { children: ReactNode }) {
  const { user, ready } = useAuth();
  if (!ready) return null;
  return user ? <Navigate to="/home" replace /> : children;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<CatalogPage title="nav.home" />} />
      <Route path="/smartphones" element={<CatalogPage title="nav.smartphones" category="smartphones" />} />
      <Route path="/laptops" element={<CatalogPage title="nav.laptops" category="laptops" />} />
      <Route path="/peripherals" element={<CatalogPage title="nav.peripherals" category="peripherals" />} />
      <Route path="/accessories" element={<CatalogPage title="nav.accessories" category="accessories" />} />
      <Route path="/drivers-software" element={<CatalogPage title="nav.drivers" category="software" />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/login" element={<GuestOnly><LoginPage /></GuestOnly>} />
      <Route path="/register" element={<GuestOnly><RegisterPage /></GuestOnly>} />
      <Route path="/settings" element={<RequireAuth><SettingsPage /></RequireAuth>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
````

## File: src/auth-context.tsx
````typescript
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import * as api from './auth';
import type { RegisterData, Result, User } from './auth';

interface AuthValue {
  user: User | null;
  /** false, пока не получен ответ сервера о текущей сессии */
  ready: boolean;
  /** true, если пользователь только что сам вышел из аккаунта */
  signedOut: boolean;
  register: (data: RegisterData) => Promise<Result>;
  login: (identifier: string, password: string, remember: boolean) => Promise<Result>;
  logout: () => void;
  changePassword: (current: string, next: string, next2: string) => Promise<Result>;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [signedOut, setSignedOut] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void api.fetchCurrentUser().then((current) => {
      if (cancelled) return;
      setUser(current);
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<AuthValue>(() => {
    const accept = (result: Result): Result => {
      if (result.ok && result.user) {
        setUser(result.user);
        setSignedOut(false);
      }
      return result;
    };
    return {
      user,
      ready,
      signedOut,
      register: async (data) => accept(await api.register(data)),
      login: async (id, pw, remember) => accept(await api.login(id, pw, remember)),
      logout: () => {
        setUser(null);
        setSignedOut(true);
        void api.logout();
      },
      changePassword: api.changePassword,
    };
  }, [user, ready, signedOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
````

## File: src/auth.ts
````typescript
import type { TranslationKey } from './i18n';

/**
 * Тонкий клиент к серверному API (/api/*, см. server/auth-api.ts).
 * Здесь нет ни хеширования, ни хранения пользователей: всё это живёт на сервере,
 * а сессия — в HttpOnly-cookie, которую JavaScript страницы прочитать не может.
 */
export interface User {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  phone: string;
  login: string;
  email: string;
  password: string;
  password2: string;
}

export type Result = { ok: true; user?: User } | { ok: false; error: TranslationKey };

interface ApiResponse {
  ok: boolean;
  error?: TranslationKey;
  user?: User;
}

async function call(path: string, method: 'GET' | 'POST', body?: object): Promise<ApiResponse> {
  try {
    const response = await fetch(`/api${path}`, {
      method,
      credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    return (await response.json()) as ApiResponse;
  } catch {
    return { ok: false, error: 'err.network' };
  }
}

function toResult(data: ApiResponse): Result {
  return data.ok ? { ok: true, user: data.user } : { ok: false, error: data.error ?? 'err.server' };
}

export async function fetchCurrentUser(): Promise<User | null> {
  const data = await call('/me', 'GET');
  return data.ok ? (data.user ?? null) : null;
}

export const register = async (data: RegisterData): Promise<Result> => toResult(await call('/register', 'POST', data));

/** identifier — логин или электронная почта */
export const login = async (identifier: string, password: string, remember: boolean): Promise<Result> =>
  toResult(await call('/login', 'POST', { identifier, password, remember }));

export const logout = async (): Promise<void> => {
  await call('/logout', 'POST', {});
};

export const changePassword = async (current: string, next: string, next2: string): Promise<Result> =>
  toResult(await call('/change-password', 'POST', { current, next, next2 }));
````

## File: src/catalog-context.tsx
````typescript
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { apiGet } from './lib/api';
import type { Product } from './shared/types';

interface CatalogValue {
  products: Product[];
  byId: Map<string, Product>;
  status: 'loading' | 'ready' | 'error';
  /** перечитать каталог (после нового отзыва или вопроса меняются рейтинг и счётчики) */
  refresh: () => void;
}

const CatalogContext = createContext<CatalogValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<CatalogValue['status']>('loading');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void apiGet<{ products: Product[] }>('/products').then((result) => {
      if (cancelled) return;
      if (result.ok) {
        setProducts(result.products);
        setStatus('ready');
      } else {
        setStatus('error');
      }
    });
    return () => {
      cancelled = true;
    };
  }, [tick]);

  const refresh = useCallback(() => setTick((value) => value + 1), []);
  const value = useMemo<CatalogValue>(
    () => ({ products, byId: new Map(products.map((p) => [p.id, p])), status, refresh }),
    [products, status, refresh],
  );
  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog(): CatalogValue {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error('useCatalog must be used inside <CatalogProvider>');
  return ctx;
}
````

## File: src/i18n-context.tsx
````typescript
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { detectLang, dictionaries, saveLang } from './i18n';
import { fill } from './lib/format';
import type { Lang, TranslationKey } from './i18n';

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  /** перевод с подстановкой {параметров} */
  tf: (key: TranslationKey, params: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    saveLang(next);
    setLangState(next);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key) => dictionaries[lang][key],
      tf: (key, params) => fill(dictionaries[lang][key], params),
    }),
    [lang, setLang],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
````

## File: src/i18n.ts
````typescript
const ru = {
  'nav.home': 'Главная',
  'nav.smartphones': 'Смартфоны',
  'nav.laptops': 'Ноутбуки',
  'nav.peripherals': 'Периферия',
  'nav.accessories': 'Аксессуары',
  'nav.drivers': 'Драйверы и софт',
  'nav.menu': 'Меню',
  'header.search': 'Поиск...',
  'header.chat': 'Чат',
  'header.favorites': 'Избранное',
  'header.cart': 'Корзина',
  'sidebar.login': 'Войти',
  'sidebar.register': 'Зарегистрироваться',
  'sidebar.settings': 'Настройки',
  'content.empty': 'Товары скоро появятся',
  'common.back': 'Назад',
  'login.title': 'Вход',
  'login.identifier': 'Логин или электронная почта',
  'login.password': 'Пароль',
  'login.remember': 'Оставаться в системе',
  'login.submit': 'Войти',
  'login.noAccount': 'Нет аккаунта?',
  'register.title': 'Регистрация',
  'register.firstName': 'Имя',
  'register.lastName': 'Фамилия',
  'register.phone': 'Номер телефона',
  'register.login': 'Логин',
  'register.email': 'Электронная почта',
  'register.password': 'Пароль',
  'register.password2': 'Пароль x2',
  'register.submit': 'Зарегистрироваться',
  'register.haveAccount': 'Уже есть аккаунт?',
  'settings.title': 'Настройки',
  'settings.account': 'Аккаунт',
  'settings.language': 'Язык',
  'settings.theme': 'Тема',
  'settings.theme.system': 'Системная',
  'settings.theme.dark': 'Тёмная',
  'settings.theme.light': 'Светлая',
  'settings.password': 'Смена пароля',
  'settings.currentPassword': 'Текущий пароль',
  'settings.newPassword': 'Новый пароль',
  'settings.newPassword2': 'Повторите новый пароль',
  'settings.changePassword': 'Сменить пароль',
  'settings.passwordChanged': 'Пароль изменён',
  'settings.logout': 'Выйти из аккаунта',
  'err.required': 'Заполните все поля',
  'err.email': 'Некорректная электронная почта',
  'err.login': 'Логин: 3–32 символа, латиница, цифры и . _ - (без @)',
  'err.phone': 'Некорректный номер телефона',
  'err.passwordShort': 'Пароль должен быть не короче 8 символов',
  'err.passwordMismatch': 'Пароли не совпадают',
  'err.loginTaken': 'Этот логин уже занят',
  'err.emailTaken': 'Эта почта уже зарегистрирована',
  'err.invalidCredentials': 'Неверный логин/почта или пароль',
  'err.wrongPassword': 'Текущий пароль указан неверно',
  'err.samePassword': 'Новый пароль совпадает с текущим',
  'err.notAuthorized': 'Требуется вход в аккаунт',
  'err.tooMany': 'Слишком много попыток, попробуйте через минуту',
  'err.notFound': 'Не найдено',
  'err.reviewNeedsPurchase': 'Отзыв можно оставить только после покупки этого товара',
  'err.alreadyReviewed': 'Вы уже оставили отзыв на этот товар',
  'err.reviewInvalid': 'Поставьте оценку и напишите отзыв (от 3 символов)',
  'err.questionInvalid': 'Текст должен быть не короче 5 символов (ответ — от 2)',
  'err.orderInvalid': 'Не удалось оформить заказ, проверьте корзину',
  'spec.yes': 'Да',
  'spec.no': 'Нет',
  'shop.addToCart': 'В корзину',
  'shop.added': 'Добавлено',
  'shop.favAdd': 'Добавить в избранное',
  'shop.favRemove': 'Убрать из избранного',
  'shop.badge.hit': 'Хит',
  'shop.badge.new': 'Новинка',
  'shop.noRating': 'Нет оценок',
  'shop.sort': 'Сортировка',
  'shop.sort.popular': 'Популярные',
  'shop.sort.priceAsc': 'Дешевле',
  'shop.sort.priceDesc': 'Дороже',
  'shop.empty': 'Здесь пока нет товаров',
  'shop.loading': 'Загружаем каталог...',
  'shop.loadError': 'Не удалось загрузить каталог',
  'shop.count': 'Товаров: {n}',
  'home.hero.title': 'Техника, которую приятно выбирать',
  'home.hero.subtitle': 'Смартфоны, ноутбуки, периферия и софт — с отзывами покупателей и умным сравнением.',
  'home.hero.cta': 'Смотреть смартфоны',
  'home.hits': 'Хиты продаж',
  'home.new': 'Новинки',
  'home.sale': 'Скидки',
  'modal.close': 'Закрыть',
  'modal.tab.specs': 'Характеристики',
  'modal.tab.reviews': 'Отзывы',
  'modal.tab.questions': 'Вопросы',
  'modal.ask': 'Задать вопрос о товаре',
  'modal.discount': 'Скидка {n}%',
  'reviews.empty': 'Пока нет отзывов',
  'reviews.write': 'Ваш отзыв',
  'reviews.rating': 'Оценка',
  'reviews.placeholder': 'Расскажите о товаре: что понравилось, чего не хватило...',
  'reviews.submit': 'Отправить отзыв',
  'reviews.verified': 'Покупка подтверждена',
  'reviews.block.login': 'Войдите в аккаунт, чтобы оставить отзыв.',
  'reviews.block.purchase': 'Отзыв можно оставить только после покупки этого товара.',
  'reviews.block.reviewed': 'Вы уже оставили отзыв об этом товаре. Спасибо!',
  'reviews.thanks': 'Спасибо за отзыв!',
  'reviews.yours': 'Ваш отзыв',
  'questions.ask': 'Задайте вопрос о товаре',
  'questions.placeholder': 'Например: есть ли в комплекте зарядка?',
  'questions.submit': 'Спросить',
  'questions.empty': 'Вопросов пока нет — спросите первым',
  'questions.login': 'Войдите в аккаунт, чтобы задать вопрос.',
  'questions.answer': 'Ответить',
  'questions.answerPlaceholder': 'Ваш ответ...',
  'questions.send': 'Отправить',
  'questions.shop': 'Магазин',
  'questions.buyer': 'Покупатель',
  'questions.sent': 'Вопрос отправлен',
  'cart.compare': 'Сравнить',
  'cart.compareN': 'Сравнить ({n})',
  'cart.compareHint': 'Отметьте 2–4 товара одной категории, чтобы сравнить их',
  'cart.compareOther': 'Сравнение возможно только внутри одной категории',
  'cart.compareMax': 'Можно сравнить не больше 4 товаров',
  'cart.paying': 'Оформляем...',
  'cart.loginToCheckout': 'Войти и оформить',
  'cart.ordered': 'Заказ оформлен!',
  'cart.orderedHint': 'Заказ № {id}. Теперь вы можете оставить отзыв о купленных товарах.',
  'compare.title': 'Сравнение товаров',
  'compare.empty': 'Выберите в корзине минимум два товара одной категории, чтобы сравнить их',
  'compare.onlyDiff': 'Только различия',
  'compare.score': 'Итоговая оценка',
  'compare.bestChoice': 'Лучший выбор',
  'compare.bestValue': 'Выгодная покупка',
  'compare.cheapest': 'Дешевле всего',
  'compare.leadsIn': 'Лидирует: {wins}',
  'compare.verdict': 'Вывод',
  'compare.verdict.best': '{name} лучше остальных по характеристикам: {wins}.',
  'compare.verdict.bestNoWins': '{name} набирает больше всего баллов по характеристикам.',
  'compare.verdict.value': '{name} даёт лучшее соотношение цены и качества.',
  'compare.verdict.price': '{cheap} дешевле, чем {pricey}, на {diff}.',
  'compare.verdict.same': 'Характеристики товаров почти не отличаются — ориентируйтесь на цену и отзывы.',
  'compare.remove': 'Убрать из сравнения',
  'compare.best': 'лучшее',
  'compare.price': 'Цена',
  'compare.rating': 'Рейтинг',
  'compare.back': 'В каталог',
  'compare.nothingDiff': 'Все показанные характеристики совпадают',
  'compare.mixed': 'Сравниваются только товары одной категории — лишние убраны',
  'err.network': 'Нет связи с сервером',
  'err.server': 'Ошибка сервера, попробуйте позже',
  'auth.tagline': 'Техника, которую приятно выбирать',
  'auth.feature1': 'Смартфоны и ноутбуки',
  'auth.feature2': 'Игровая периферия и аксессуары',
  'auth.feature3': 'Драйверы и софт в одном месте',
  'login.subtitle': 'С возвращением! Войдите, чтобы продолжить',
  'register.subtitle': 'Создайте аккаунт — это займёт минуту',
  'field.show': 'Показать пароль',
  'field.hide': 'Скрыть пароль',
  'appearance.title': 'Оформление',
  'panel.close': 'Закрыть',
  'chat.title': 'Чат с поддержкой',
  'chat.online': 'Онлайн',
  'chat.greeting': 'Здравствуйте! Чем можем помочь?',
  'chat.reply': 'Спасибо за обращение! Оператор ответит в ближайшее время.',
  'chat.placeholder': 'Напишите сообщение...',
  'chat.send': 'Отправить',
  'fav.title': 'Избранное',
  'fav.empty': 'В избранном пока пусто',
  'fav.addToCart': 'В корзину',
  'fav.remove': 'Убрать из избранного',
  'cart.title': 'Корзина',
  'cart.empty': 'Корзина пуста',
  'cart.total': 'Итого',
  'cart.checkout': 'Оформить заказ',
  'cart.soon': 'Скоро',
  'cart.remove': 'Удалить',
  'cart.clear': 'Очистить корзину',
  'cart.inc': 'Больше',
  'cart.dec': 'Меньше',
};

export type TranslationKey = keyof typeof ru;
export type Lang = 'ru' | 'en';

const en: Record<TranslationKey, string> = {
  'nav.home': 'Home',
  'nav.smartphones': 'Smartphones',
  'nav.laptops': 'Laptops',
  'nav.peripherals': 'Peripherals',
  'nav.accessories': 'Accessories',
  'nav.drivers': 'Drivers & Software',
  'nav.menu': 'Menu',
  'header.search': 'Search...',
  'header.chat': 'Chat',
  'header.favorites': 'Favorites',
  'header.cart': 'Cart',
  'sidebar.login': 'Log in',
  'sidebar.register': 'Sign up',
  'sidebar.settings': 'Settings',
  'content.empty': 'Products coming soon',
  'common.back': 'Back',
  'login.title': 'Log in',
  'login.identifier': 'Username or email',
  'login.password': 'Password',
  'login.remember': 'Keep me signed in',
  'login.submit': 'Log in',
  'login.noAccount': 'No account yet?',
  'register.title': 'Sign up',
  'register.firstName': 'First name',
  'register.lastName': 'Last name',
  'register.phone': 'Phone number',
  'register.login': 'Username',
  'register.email': 'Email',
  'register.password': 'Password',
  'register.password2': 'Repeat password',
  'register.submit': 'Sign up',
  'register.haveAccount': 'Already have an account?',
  'settings.title': 'Settings',
  'settings.account': 'Account',
  'settings.language': 'Language',
  'settings.theme': 'Theme',
  'settings.theme.system': 'System',
  'settings.theme.dark': 'Dark',
  'settings.theme.light': 'Light',
  'settings.password': 'Change password',
  'settings.currentPassword': 'Current password',
  'settings.newPassword': 'New password',
  'settings.newPassword2': 'Repeat new password',
  'settings.changePassword': 'Change password',
  'settings.passwordChanged': 'Password changed',
  'settings.logout': 'Log out',
  'err.required': 'Please fill in all fields',
  'err.email': 'Invalid email address',
  'err.login': 'Username: 3–32 chars, letters, digits and . _ - (no @)',
  'err.phone': 'Invalid phone number',
  'err.passwordShort': 'Password must be at least 8 characters',
  'err.passwordMismatch': 'Passwords do not match',
  'err.loginTaken': 'This username is already taken',
  'err.emailTaken': 'This email is already registered',
  'err.invalidCredentials': 'Wrong username/email or password',
  'err.wrongPassword': 'Current password is incorrect',
  'err.samePassword': 'New password matches the current one',
  'err.notAuthorized': 'Please log in first',
  'err.tooMany': 'Too many attempts, try again in a minute',
  'err.notFound': 'Not found',
  'err.reviewNeedsPurchase': 'You can only review a product after buying it',
  'err.alreadyReviewed': 'You have already reviewed this product',
  'err.reviewInvalid': 'Pick a rating and write a review (3+ characters)',
  'err.questionInvalid': 'Text must be at least 5 characters (answers: 2)',
  'err.orderInvalid': 'Could not place the order, check your cart',
  'spec.yes': 'Yes',
  'spec.no': 'No',
  'shop.addToCart': 'Add to cart',
  'shop.added': 'Added',
  'shop.favAdd': 'Add to favorites',
  'shop.favRemove': 'Remove from favorites',
  'shop.badge.hit': 'Best seller',
  'shop.badge.new': 'New',
  'shop.noRating': 'No ratings',
  'shop.sort': 'Sort by',
  'shop.sort.popular': 'Popular',
  'shop.sort.priceAsc': 'Price: low',
  'shop.sort.priceDesc': 'Price: high',
  'shop.empty': 'No products here yet',
  'shop.loading': 'Loading catalog...',
  'shop.loadError': 'Could not load the catalog',
  'shop.count': 'Products: {n}',
  'home.hero.title': 'Tech that is a pleasure to choose',
  'home.hero.subtitle': 'Phones, laptops, gear and software — with buyer reviews and smart comparison.',
  'home.hero.cta': 'Browse smartphones',
  'home.hits': 'Best sellers',
  'home.new': 'New arrivals',
  'home.sale': 'On sale',
  'modal.close': 'Close',
  'modal.tab.specs': 'Specifications',
  'modal.tab.reviews': 'Reviews',
  'modal.tab.questions': 'Questions',
  'modal.ask': 'Ask about this product',
  'modal.discount': '{n}% off',
  'reviews.empty': 'No reviews yet',
  'reviews.write': 'Your review',
  'reviews.rating': 'Rating',
  'reviews.placeholder': 'Tell us about the product: what you liked, what was missing...',
  'reviews.submit': 'Submit review',
  'reviews.verified': 'Verified purchase',
  'reviews.block.login': 'Log in to leave a review.',
  'reviews.block.purchase': 'You can leave a review only after buying this product.',
  'reviews.block.reviewed': 'You have already reviewed this product. Thank you!',
  'reviews.thanks': 'Thanks for your review!',
  'reviews.yours': 'Your review',
  'questions.ask': 'Ask a question about this product',
  'questions.placeholder': 'For example: is a charger included?',
  'questions.submit': 'Ask',
  'questions.empty': 'No questions yet — be the first to ask',
  'questions.login': 'Log in to ask a question.',
  'questions.answer': 'Reply',
  'questions.answerPlaceholder': 'Your answer...',
  'questions.send': 'Send',
  'questions.shop': 'Store',
  'questions.buyer': 'Buyer',
  'questions.sent': 'Question sent',
  'cart.compare': 'Compare',
  'cart.compareN': 'Compare ({n})',
  'cart.compareHint': 'Select 2–4 products of one category to compare',
  'cart.compareOther': 'Comparison works only within one category',
  'cart.compareMax': 'You can compare up to 4 products',
  'cart.paying': 'Placing order...',
  'cart.loginToCheckout': 'Log in to checkout',
  'cart.ordered': 'Order placed!',
  'cart.orderedHint': 'Order #{id}. You can now review the products you bought.',
  'compare.title': 'Product comparison',
  'compare.empty': 'Select at least two products of one category in your cart to compare them',
  'compare.onlyDiff': 'Differences only',
  'compare.score': 'Overall score',
  'compare.bestChoice': 'Best choice',
  'compare.bestValue': 'Best value',
  'compare.cheapest': 'Lowest price',
  'compare.leadsIn': 'Leads in: {wins}',
  'compare.verdict': 'Verdict',
  'compare.verdict.best': '{name} is ahead on specs: {wins}.',
  'compare.verdict.bestNoWins': '{name} scores the most points on specs.',
  'compare.verdict.value': '{name} offers the best value for the price.',
  'compare.verdict.price': '{cheap} is {diff} cheaper than {pricey}.',
  'compare.verdict.same': 'The products are nearly identical — decide by price and reviews.',
  'compare.remove': 'Remove from comparison',
  'compare.best': 'best',
  'compare.price': 'Price',
  'compare.rating': 'Rating',
  'compare.back': 'Back to catalog',
  'compare.nothingDiff': 'All shown specifications are identical',
  'compare.mixed': 'Only products of one category are compared — the rest were removed',
  'err.network': 'Cannot reach the server',
  'err.server': 'Server error, please try again later',
  'auth.tagline': 'Tech that is a pleasure to choose',
  'auth.feature1': 'Smartphones and laptops',
  'auth.feature2': 'Gaming gear and accessories',
  'auth.feature3': 'Drivers and software in one place',
  'login.subtitle': 'Welcome back! Log in to continue',
  'register.subtitle': 'Create an account — it takes a minute',
  'field.show': 'Show password',
  'field.hide': 'Hide password',
  'appearance.title': 'Appearance',
  'panel.close': 'Close',
  'chat.title': 'Support chat',
  'chat.online': 'Online',
  'chat.greeting': 'Hello! How can we help you?',
  'chat.reply': 'Thanks for reaching out! An operator will reply shortly.',
  'chat.placeholder': 'Type a message...',
  'chat.send': 'Send',
  'fav.title': 'Favorites',
  'fav.empty': 'No favorites yet',
  'fav.addToCart': 'Add to cart',
  'fav.remove': 'Remove from favorites',
  'cart.title': 'Cart',
  'cart.empty': 'Your cart is empty',
  'cart.total': 'Total',
  'cart.checkout': 'Checkout',
  'cart.soon': 'Soon',
  'cart.remove': 'Remove',
  'cart.clear': 'Clear cart',
  'cart.inc': 'More',
  'cart.dec': 'Less',
};

export const dictionaries: Record<Lang, Record<TranslationKey, string>> = { ru, en };
const STORAGE_KEY = 'arcshop:lang';

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ru' || saved === 'en') return saved;
  } catch {
    /* storage unavailable */
  }
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage unavailable */
  }
}
````

## File: src/main.tsx
````typescript
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import './styles/base.css';
import './styles/app.css';
import './styles/shop.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthProvider } from './auth-context';
import { CatalogProvider } from './catalog-context';
import { I18nProvider } from './i18n-context';
import { ShopProvider } from './shop-context';
import { ThemeProvider } from './theme-context';
import { applyTheme, getTheme } from './theme';

applyTheme(getTheme());

// Чистим данные старой версии: раньше пользователи и сессия лежали в браузере
for (const storage of [localStorage, sessionStorage]) {
  storage.removeItem('arcshop:users');
  storage.removeItem('arcshop:session');
}

const root = document.getElementById('root');
if (!root) throw new Error('#root not found');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <AuthProvider>
            <CatalogProvider>
              <ShopProvider>
                <App />
              </ShopProvider>
            </CatalogProvider>
          </AuthProvider>
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
````

## File: src/shop-context.tsx
````typescript
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useCatalog } from './catalog-context';
import type { TranslationKey } from './i18n';
import { apiPost } from './lib/api';
import type { OrderSummary, Product } from './shared/types';

export interface CartItem {
  product: Product;
  qty: number;
}

/** Сообщение чата: либо текст пользователя, либо ключ перевода (ответ поддержки) */
export interface ChatMessage {
  id: number;
  from: 'me' | 'support';
  text?: string;
  key?: TranslationKey;
}

export const MAX_COMPARE = 4;

interface ShopValue {
  favorites: Product[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;

  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  /** оформляет заказ из корзины; цены считает сервер */
  checkout: () => Promise<{ ok: true; order: OrderSummary } | { ok: false; error: TranslationKey }>;

  /** товары из корзины, отмеченные для сравнения (все одной категории) */
  compareIds: string[];
  toggleCompare: (id: string) => void;

  messages: ChatMessage[];
  sendMessage: (text: string) => void;
}

const ShopContext = createContext<ShopValue | null>(null);

const FAV_KEY = 'arcshop:favorites';
const CART_KEY = 'arcshop:cart';

function readStored<T>(key: string, parse: (raw: unknown) => T, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? parse(JSON.parse(raw)) : fallback;
  } catch {
    return fallback;
  }
}

const parseIds = (raw: unknown): string[] =>
  Array.isArray(raw) ? raw.filter((x): x is string => typeof x === 'string') : [];

const parseCart = (raw: unknown): Array<{ id: string; qty: number }> =>
  Array.isArray(raw)
    ? raw.flatMap((x: { id?: unknown; qty?: unknown }) =>
        typeof x?.id === 'string' && typeof x.qty === 'number' && x.qty >= 1 ? [{ id: x.id, qty: Math.min(Math.floor(x.qty), 99) }] : [],
      )
    : [];

export function ShopProvider({ children }: { children: ReactNode }) {
  const { byId } = useCatalog();
  // В корзине и избранном лежат только id: данные о товаре всегда берутся из актуального каталога
  const [favIds, setFavIds] = useState<string[]>(() => readStored(FAV_KEY, parseIds, []));
  const [cartLines, setCartLines] = useState(() => readStored(CART_KEY, parseCart, []));
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 0, from: 'support', key: 'chat.greeting' }]);
  const nextId = useRef(1);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  // корзина и избранное сохраняются в браузере (это не секретные данные)
  useEffect(() => {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(favIds));
      localStorage.setItem(CART_KEY, JSON.stringify(cartLines));
    } catch {
      /* storage unavailable */
    }
  }, [favIds, cartLines]);

  const favorites = useMemo(() => favIds.flatMap((id) => byId.get(id) ?? []), [favIds, byId]);
  const cart = useMemo<CartItem[]>(
    () => cartLines.flatMap((line) => (byId.has(line.id) ? [{ product: byId.get(line.id) as Product, qty: line.qty }] : [])),
    [cartLines, byId],
  );

  const toggleFavorite = useCallback(
    (id: string) => setFavIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id])),
    [],
  );
  const isFavorite = useCallback((id: string) => favIds.includes(id), [favIds]);

  const addToCart = useCallback((id: string) => {
    setCartLines((lines) =>
      lines.some((l) => l.id === id)
        ? lines.map((l) => (l.id === id ? { ...l, qty: Math.min(l.qty + 1, 99) } : l))
        : [...lines, { id, qty: 1 }],
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartLines((lines) => lines.filter((l) => l.id !== id));
    setCompareIds((ids) => ids.filter((x) => x !== id));
  }, []);

  const setQty = useCallback(
    (id: string, qty: number) => {
      if (qty <= 0) return removeFromCart(id);
      setCartLines((lines) => lines.map((l) => (l.id === id ? { ...l, qty: Math.min(qty, 99) } : l)));
    },
    [removeFromCart],
  );

  const clearCart = useCallback(() => {
    setCartLines([]);
    setCompareIds([]);
  }, []);

  const toggleCompare = useCallback(
    (id: string) => {
      setCompareIds((ids) => {
        if (ids.includes(id)) return ids.filter((x) => x !== id);
        const category = ids.length ? byId.get(ids[0])?.category : undefined;
        // сравнивать можно только товары одной категории, не больше MAX_COMPARE штук
        if (ids.length >= MAX_COMPARE || (category && byId.get(id)?.category !== category)) return ids;
        return [...ids, id];
      });
    },
    [byId],
  );

  const checkout = useCallback(async () => {
    const result = await apiPost<{ order: OrderSummary }>('/orders', {
      items: cartLines.map((l) => ({ productId: l.id, qty: l.qty })),
    });
    if (!result.ok) return result;
    setCartLines([]);
    setCompareIds([]);
    return { ok: true as const, order: result.order };
  }, [cartLines]);

  const sendMessage = useCallback((text: string) => {
    const clean = text.trim().slice(0, 500);
    if (!clean) return;
    setMessages((list) => [...list, { id: nextId.current++, from: 'me', text: clean }]);
    // имитация ответа оператора
    timers.current.push(
      window.setTimeout(() => {
        setMessages((list) => [...list, { id: nextId.current++, from: 'support', key: 'chat.reply' }]);
      }, 900),
    );
  }, []);

  const value = useMemo<ShopValue>(
    () => ({
      favorites,
      isFavorite,
      toggleFavorite,
      cart,
      cartCount: cart.reduce((sum, i) => sum + i.qty, 0),
      cartTotal: cart.reduce((sum, i) => sum + i.product.price * i.qty, 0),
      addToCart,
      setQty,
      removeFromCart,
      clearCart,
      checkout,
      compareIds: compareIds.filter((id) => cart.some((i) => i.product.id === id)),
      toggleCompare,
      messages,
      sendMessage,
    }),
    [favorites, isFavorite, toggleFavorite, cart, addToCart, setQty, removeFromCart, clearCart, checkout, compareIds, toggleCompare, messages, sendMessage],
  );
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopValue {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside <ShopProvider>');
  return ctx;
}
````

## File: src/theme-context.tsx
````typescript
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { getTheme, setTheme } from './theme';
import type { ThemeMode } from './theme';

interface ThemeValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(getTheme);
  const setMode = useCallback((next: ThemeMode) => {
    setTheme(next);
    setModeState(next);
  }, []);
  const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
````

## File: src/theme.ts
````typescript
export type ThemeMode = 'system' | 'dark' | 'light';
const STORAGE_KEY = 'arcshop:theme';

export function getTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    /* storage unavailable */
  }
  return 'system';
}

/** system → атрибут убирается и работает prefers-color-scheme */
export function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement;
  if (mode === 'system') delete root.dataset.theme;
  else root.dataset.theme = mode;
}

export function setTheme(mode: ThemeMode): void {
  try {
    if (mode === 'system') localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* storage unavailable */
  }
  applyTheme(mode);
}
````

## File: .dockerignore
````
node_modules
dist
.git
.env
.env.*
server/data
npm-debug.log
````

## File: .env.example
````
# Адрес будущего бэкенда (пока фронтенд использует встроенный server/ на Vite)
VITE_API_URL=http://localhost:5000/api/v1
````

## File: .gitignore
````
node_modules
dist
*.local
server/data
````

## File: docker-compose.yml
````yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        # Передаем адрес работающего бэкенда
        VITE_API_URL: http://localhost:5000/api/v1
    container_name: arcshop_frontend
    restart: always
    ports:
      - '5173:80'
    environment:
      - NODE_ENV=production
````

## File: Dockerfile
````dockerfile
# 1. Этап сборки (Builder)
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем манифесты зависимостей
COPY package*.json ./

# Чистая установка всех зависимостей
RUN npm ci

# Копируем исходники проекта
COPY . .

# Аргумент для передачи URL бэкенда во время сборки (если используется)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Собираем production-бандл (tsc + vite build -> папка dist)
RUN npm run build

# 2. Этап раздачи статики (Runner на Nginx)
FROM nginx:alpine AS runner

# Копируем кастомный конфиг Nginx для поддержки SPA-роутинга
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранный проект из билдера
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт HTTP
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
````

## File: eslint.config.js
````javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'backend', 'server/data'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['*.js', '*.ts', 'server/**/*.ts'],
    languageOptions: { globals: globals.node },
  },
);
````

## File: index.html
````html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ARCSHOP</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <script>
      // Применяем тему до отрисовки, чтобы не было вспышки
      (function () {
        try {
          var t = localStorage.getItem('arcshop:theme');
          if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
        } catch (e) { /* ignore */ }
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: nginx.conf
````ini
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    # Сжатие gzip для ускорения загрузки статики
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Любой путь отдаёт index.html (SPA routing)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Кэширование статических ассетов (картинки, шрифты, стили)
    location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff2?|eot|ttf|otf)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public, max-age=15552000, immutable";
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
````

## File: package.json
````json
{
  "name": "arcshop",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^26.6.5",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.2",
    "autoprefixer": "^10.6.1",
    "eslint": "^10.12.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "globals": "^17.13.0",
    "postcss": "^8.5.29",
    "postcss-nesting": "^14.0.3",
    "typescript": "^6.0.3",
    "typescript-eslint": "^8.71.1",
    "vite": "^8.3.4",
    "vitest": "^5.0.4"
  },
  "dependencies": {
    "@fontsource/roboto": "^5.3.0",
    "react": "^19.3.0",
    "react-dom": "^19.3.0",
    "react-router-dom": "^7.18.4"
  }
}
````

## File: postcss.config.js
````javascript
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [postcssNesting(), autoprefixer()],
};
````

## File: README.md
````markdown
# ARCSHOP

Vite + React + TypeScript + ESLint (flat config) + PostCSS (nesting, autoprefixer).

```bash
npm install
npm run dev       # разработка (фронт + API авторизации)
npm run build     # tsc + сборка
npm run preview   # предпросмотр сборки (API тоже работает)
npm run lint      # ESLint
```

## Маршруты
`/home` · `/smartphones` · `/laptops` · `/peripherals` · `/accessories` · `/drivers-software`
`/login` · `/register` · `/settings` (только для вошедших)

## Авторизация и безопасность
Вся логика авторизации живёт на сервере — `server/auth-api.ts` (Vite-плагин, работает в `dev` и `preview`).
В браузер он не попадает: клиент (`src/auth.ts`) только вызывает `/api/*`.

- пароли — только scrypt-хеш с солью; пользователи в `server/data/users.json` (в `.gitignore`);
- сессия — случайный токен в HttpOnly + SameSite=Strict cookie, JS страницы его не видит;
- проверка Origin и Content-Type (CSRF), ограничение попыток входа, одинаковая ошибка для «нет такого пользователя» и «неверный пароль»;
- после смены пароля остальные сессии пользователя закрываются.

Важно: всё, что выполняется в браузере, пользователь может увидеть во вкладке Network/Sources — это неизбежно.
Поэтому секреты и проверки держим только на сервере. В продакшене `server/auth-api.ts` нужно вынести в отдельный
Node-сервер (Express/Fastify) с настоящей БД: `vite build` выдаёт только статику.

## Каталог, отзывы, вопросы, сравнение

- Карточки товаров с анимацией (появление, 3D-наклон, блик, «В корзину» → «Добавлено»), окно товара по адресу `?product=id` (можно делиться ссылкой, Esc закрывает).
- **Отзывы только после покупки.** Правило проверяется на сервере (`POST /api/products/:id/reviews` → 403 без покупки, 409 при повторном отзыве); форма в интерфейсе — лишь удобство.
- Вопросы по товару (иконка «вопрос» в окне товара отличается от чата поддержки) и ответы на них.
- Сравнение товаров одной категории (2–4 шт.): отметьте галочки в корзине → «Сравнить» → `/compare`.
- Оформление заказа в корзине создаёт заказ (цены берутся из каталога на сервере) и открывает возможность оставить отзыв.

## База данных (заготовка)

`server/db/types.ts` — интерфейс `Repo`, `server/db/json-repo.ts` — реализация на JSON-файле (`server/data`, в git не попадает), `server/db/schema.sql` — схема SQL, `server/db/seed.ts` — демо-товары. Для перехода на PostgreSQL/SQLite достаточно написать другую реализацию `Repo`.

## Темы
Светлая, тёмная («Полночный индиго») и системная. Переключатель в шапке доступен без входа;
токены цветов — в `src/styles/base.css`. Цвет нажатой кнопки зависит от темы (`--press-*`).

## Демо-данные
Списки избранного и корзины и чат поддержки работают на демо-данных (`src/data/demo-products.ts`,
`src/shop-context.tsx`) — каталога и бэкенда для них пока нет.

## Структура
- `src/App.tsx` — маршруты и охранники (`RequireAuth`, `GuestOnly`)
- `src/*-context.tsx` — язык, тема, пользователь, магазин (избранное/корзина/чат)
- `src/components/` — `Shell`, `AuthScreen`, `Popover`, `ThemeMenu`, `ShopPanels`, `Form`, `Icon`, `Deco`
- `server/auth-api.ts` — серверная авторизация

## Бэкенд и БД (заготовка, пока не подключено)

- `backend/` — отдельный Express + Prisma бэкенд (запуск: `cd backend && npm i`, см. его `README.md`, `docker-compose.yml`, `prisma/schema.prisma`).
- `docs/API_SPECIFICATION.md` — спецификация эндпоинтов (`/api/v1`, Bearer-токен + refresh в httpOnly cookie).
- `.env.example` — `VITE_API_URL` для будущего подключения фронтенда.
- Сейчас фронтенд работает со встроенным `server/` (JSON-файл). Переход: заменить вызовы в `src/lib/api.ts` на эндпоинты из спецификации; встроенный `server/` тогда можно удалить.
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noEmit": true,
    "allowImportingTsExtensions": true,
    "jsx": "react-jsx",
    "types": ["vite/client", "node"]
  },
  "include": ["src", "server", "vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
````
