(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/responsive.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/responsive.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\r\n\r\n\r\n@media (max-width: 767px), (min-width: 768px) and (max-width: 1023px), (min-width: 1024px) and (max-width: 1439px) {\r\n  .main-grid>* {\r\n    max-height: 100vh;\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .main-grid>* {\r\n    max-height: 100vh;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .main-grid {\r\n    display: grid;\r\n    grid-template-areas: \"side-a main side-b\";\r\n    grid-template-columns: -webkit-min-content 1fr auto;\r\n    grid-template-columns: min-content 1fr auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .main-grid {\r\n    --private-block-margins: 0px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px){\r\n  .user-profile {\r\n    max-width: 320px;\r\n}\r\n\r\n.user-profile-blog ul li label {\r\n    max-width: 80px;\r\n}\r\n\r\n.user-profile-blog input#title,\r\n.gender,\r\n.user-profile-blog input#birthday,\r\n.discription\r\n {\r\n    max-width: 70% !important;\r\n}\r\n\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .main-grid.is-main-info-open .main-side {\r\n    display: none;\r\n  }\r\n  .main-grid.is-main-info-open .main-content {\r\n    display: none;\r\n  }\r\n  .main-grid.is-main-info-open .main-info {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .main-side{\r\n    max-width: 100%;\r\n  }\r\n\r\n  .common-message .common-message-image > img,\r\n  .common-message .common-message-video {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .commaon-message-preview-modal button.close{\r\n    top: 10px;\r\n    right: 10px;\r\n  }\r\n\r\n  .main-grid.is-message-open .main-content {\r\n    transform: translateX(-100%);\r\n  }\r\n\r\n  .main-content {\r\n    position: fixed;\r\n    right: -100%;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    transition: transform 0.4s;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1023px) {\r\n  .main-grid.is-main-info-open {\r\n    grid-template-areas: \"side-a side-b\";\r\n    grid-template-columns: minmax(260px, 300px) 1fr;\r\n  }\r\n  .main-grid.is-main-info-open .main-content {\r\n    display: none;\r\n  }\r\n  .main-grid.is-main-info-open .main-info {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .common-message {\r\n    max-width: 85%;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .common-header {\r\n    padding: 5px;\r\n  }\r\n  .main-content .common-header {\r\n    align-content: center;\r\n  }\r\n  .common-button {\r\n    padding: 0;\r\n  }\r\n  .common-message {\r\n    max-width: 90%;\r\n  }\r\n  .u-margin-end {\r\n    margin-right: 5px !important;\r\n  }\r\n  .common-header-title {\r\n    font-size: 15px;\r\n  }\r\n  .common-nav-list {\r\n    padding-top: 13px;\r\n  }\r\n  .profile-image {\r\n    height: 30px;\r\n  }\r\n  p.common-header-status {\r\n    font-size: 12px;\r\n  }\r\n  /*.profile-image{width: 25px; height: 25px;}*/\r\n  .common-header-content {\r\n    margin: auto 9px;\r\n  }\r\n  p.common-message-content {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n/* @media(max-width:414px){\r\n\r\n} */\r\n\r\n@media(max-width:320px){\r\n  .user-profile-blog button.btn.btn-primary{\r\n    margin-bottom: 15px;\r\n  }\r\n  .user-profile {\r\n    max-width: 90%;\r\n  }\r\n\r\n  .user-profile-blog ul li label {\r\n    max-width: 100%;\r\n    text-align: left;\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n\r\n  .user-profile-blog input#title, \r\n  .gender, \r\n  .user-profile-blog input#birthday, \r\n  .discription {\r\n    width: 100% !important;\r\n    float: left;\r\n    max-width: 100% !important;\r\n  }\r\n}\r\n\r\n.main-side {\r\n  grid-area: side-a;\r\n}\r\n\r\n.main-content {\r\n  grid-area: main;\r\n}\r\n\r\n.main-info {\r\n  grid-area: side-b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3Jlc3BvbnNpdmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBR0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsbURBQTJDO0lBQTNDLDJDQUEyQztFQUM3QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7Ozs7SUFLSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0lBQ3BDLCtDQUErQztFQUNqRDtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0EsNkNBQTZDO0VBQzdDO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTs7OztJQUlFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL3Jlc3BvbnNpdmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSxcclxuKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpLFxyXG4obWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxNDM5cHgpIHtcclxuICAubWFpbi1ncmlkPioge1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLm1haW4tZ3JpZD4qIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1haW4tZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlLWEgbWFpbiBzaWRlLWJcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLm1haW4tZ3JpZCB7XHJcbiAgICAtLXByaXZhdGUtYmxvY2stbWFyZ2luczogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudXNlci1wcm9maWxlIHtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGUtYmxvZyB1bCBsaSBsYWJlbCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGUtYmxvZyBpbnB1dCN0aXRsZSxcclxuLmdlbmRlcixcclxuLnVzZXItcHJvZmlsZS1ibG9nIGlucHV0I2JpcnRoZGF5LFxyXG4uZGlzY3JpcHRpb25cclxuIHtcclxuICAgIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm1haW4tZ3JpZC5pcy1tYWluLWluZm8tb3BlbiAubWFpbi1zaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tYWluLWdyaWQuaXMtbWFpbi1pbmZvLW9wZW4gLm1haW4tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWFpbi1ncmlkLmlzLW1haW4taW5mby1vcGVuIC5tYWluLWluZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYWluLXNpZGV7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29tbW9uLW1lc3NhZ2UgLmNvbW1vbi1tZXNzYWdlLWltYWdlID4gaW1nLFxyXG4gIC5jb21tb24tbWVzc2FnZSAuY29tbW9uLW1lc3NhZ2UtdmlkZW8ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbW1hb24tbWVzc2FnZS1wcmV2aWV3LW1vZGFsIGJ1dHRvbi5jbG9zZXtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tZ3JpZC5pcy1tZXNzYWdlLW9wZW4gLm1haW4tY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgLm1haW4tZ3JpZC5pcy1tYWluLWluZm8tb3BlbiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNpZGUtYSBzaWRlLWJcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI2MHB4LCAzMDBweCkgMWZyO1xyXG4gIH1cclxuICAubWFpbi1ncmlkLmlzLW1haW4taW5mby1vcGVuIC5tYWluLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1haW4tZ3JpZC5pcy1tYWluLWluZm8tb3BlbiAubWFpbi1pbmZvIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmNvbW1vbi1tZXNzYWdlIHtcclxuICAgIG1heC13aWR0aDogODUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvbW1vbi1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAubWFpbi1jb250ZW50IC5jb21tb24taGVhZGVyIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbW1vbi1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmNvbW1vbi1tZXNzYWdlIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxuICAudS1tYXJnaW4tZW5kIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb21tb24taGVhZGVyLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmNvbW1vbi1uYXYtbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICB9XHJcbiAgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBwLmNvbW1vbi1oZWFkZXItc3RhdHVzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLyoucHJvZmlsZS1pbWFnZXt3aWR0aDogMjVweDsgaGVpZ2h0OiAyNXB4O30qL1xyXG4gIC5jb21tb24taGVhZGVyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvIDlweDtcclxuICB9XHJcbiAgcC5jb21tb24tbWVzc2FnZS1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEBtZWRpYShtYXgtd2lkdGg6NDE0cHgpe1xyXG5cclxufSAqL1xyXG5cclxuQG1lZGlhKG1heC13aWR0aDozMjBweCl7XHJcbiAgLnVzZXItcHJvZmlsZS1ibG9nIGJ1dHRvbi5idG4uYnRuLXByaW1hcnl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAudXNlci1wcm9maWxlIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItcHJvZmlsZS1ibG9nIHVsIGxpIGxhYmVsIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItcHJvZmlsZS1ibG9nIGlucHV0I3RpdGxlLCBcclxuICAuZ2VuZGVyLCBcclxuICAudXNlci1wcm9maWxlLWJsb2cgaW5wdXQjYmlydGhkYXksIFxyXG4gIC5kaXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWFpbi1zaWRlIHtcclxuICBncmlkLWFyZWE6IHNpZGUtYTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG59XHJcblxyXG4ubWFpbi1pbmZvIHtcclxuICBncmlkLWFyZWE6IHNpZGUtYjtcclxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/styles.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\r\n\r\n*, *::before, *::after {box-sizing: border-box; }\r\n\r\nul, li, ol {margin: 0; padding: 0; list-style-type: none }\r\n\r\np{margin-bottom: 0;}\r\n\r\n.border-bottom {\r\n    border-bottom: 1px solid #f8f8f8!important;\r\n}\r\n\r\n.main-grid {\r\n  --private-block-margins: 0;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: var(--private-block-margins);\r\n  bottom: var(--private-block-margins);\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n  margin-top: 50px !important;\r\n}\r\n\r\n.info-text {\r\n  font-size: 14px;\r\n  color: rgba(0, 0, 0, 0.45);\r\n  text-align:'center'\r\n}\r\n\r\n/*side notes*/\r\n\r\n.main-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--white);\r\n  min-width: 300px;\r\n  max-width: 420px;\r\n}\r\n\r\n.chats {\r\n    padding: 16px;\r\n  margin-bottom: 30px;\r\n  height: 1500px; \r\n  overflow-y: auto;\r\n  scrollbar-width: thin;\r\n  background-color: var(--white);\r\n  \r\n}\r\n\r\n.chats-item {\r\n  position: relative;\r\n}\r\n\r\n.chats-item:hover {\r\n  cursor: pointer;\r\n  background: #f2f4f4;\r\n}\r\n\r\n.chats-item.active {\r\n  background: rgba(90, 141, 238, 0.2);\r\n}\r\n\r\n.chats-item-button {\r\n  display: grid;\r\n  grid-template-columns: 50px 1fr;\r\n  grid-column-gap: 5px;\r\n  padding: 0 15px;\r\n  cursor: pointer;\r\n  grid-template-areas: \"image header\" \"image content\";\r\n}\r\n\r\n.chats-item-button:focus {\r\n  background-color: #ebebeb;\r\n  outline: none;\r\n}\r\n\r\n.chats-item-header {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  display: block;\r\n  display: flex;\r\n  padding-top: 10px;\r\n  grid-area: header;\r\n  align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.chats-item-title {\r\n  text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    display: block;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    margin-top: 0;\r\n    text-transform: capitalize;\r\n    margin-bottom: 0;\r\n    color: #475F7B;\r\n}\r\n\r\n.chats-item-last {\r\n  flex: 1;\r\n    margin-bottom: 0;\r\n    width: 250px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #828D99 !important;\r\n    font-size: 14px;\r\n}\r\n\r\n.chats-item-content {\r\n  display: flex;\r\n  padding-bottom: 10px;\r\n  grid-area: content;\r\n\r\n}\r\n\r\n.chats-item-info {\r\n  display: flex;\r\n}\r\n\r\n.chats-item:last-child .chats-item-content {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n/*******Nav bar**************/\r\n\r\n.fixed-header, .fixed-footer{\r\n        width: 100%;\r\n        position: fixed;        \r\n        background: #e9ecef;\r\n        padding: 10px 0;\r\n        color: #fff;\r\n    }\r\n\r\n.fixed-header{\r\n        top: 0;\r\n    }\r\n\r\n#addBtn\r\n    {\r\n    color: black;\r\n    font-size: xx-large;\r\n    }\r\n\r\n#deleteBtn{\r\n color: red;\r\n    font-size: xx-large;\r\n    }\r\n\r\n.search{\r\n margin-left: 190px;\r\n    font-size: large;\r\n}\r\n   \r\n   \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOztBQUVoQix3QkFBd0Isc0JBQXNCLEVBQUU7O0FBRWhELFlBQVksU0FBUyxFQUFFLFVBQVUsRUFBRSxzQkFBc0I7O0FBQ3pELEVBQUUsZ0JBQWdCLENBQUM7O0FBRW5CO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsMkVBQTJFO0VBQzNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCO0FBQ0Y7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7SUFDSSxhQUFhO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDhCQUE4Qjs7QUFFaEM7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7RUFDZixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtJQUNqQiw4QkFBOEI7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUNBO0VBQ0UsT0FBTztJQUNMLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsNkJBQTZCOztBQUM1QjtRQUNPLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0FBQ0E7UUFDSSxNQUFNO0lBQ1Y7O0FBQ0E7O0lBRUEsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQjs7QUFDQTtDQUNILFVBQVU7SUFDUCxtQkFBbUI7SUFDbkI7O0FBQ0o7Q0FDQyxrQkFBa0I7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcclxuXHJcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge2JveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuXHJcbnVsLCBsaSwgb2wge21hcmdpbjogMDsgcGFkZGluZzogMDsgbGlzdC1zdHlsZS10eXBlOiBub25lIH1cclxucHttYXJnaW4tYm90dG9tOiAwO31cclxuXHJcbi5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOGY4IWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tZ3JpZCB7XHJcbiAgLS1wcml2YXRlLWJsb2NrLW1hcmdpbnM6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiB2YXIoLS1wcml2YXRlLWJsb2NrLW1hcmdpbnMpO1xyXG4gIGJvdHRvbTogdmFyKC0tcHJpdmF0ZS1ibG9jay1tYXJnaW5zKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmZvLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxuICB0ZXh0LWFsaWduOidjZW50ZXInXHJcbn1cclxuXHJcbi8qc2lkZSBub3RlcyovXHJcbi5tYWluLXNpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDQyMHB4O1xyXG59XHJcbi5jaGF0cyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgaGVpZ2h0OiAxNTAwcHg7IFxyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBcclxufVxyXG4uY2hhdHMtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2hhdHMtaXRlbTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmMmY0ZjQ7XHJcbn1cclxuXHJcbi5jaGF0cy1pdGVtLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5MCwgMTQxLCAyMzgsIDAuMik7XHJcbn1cclxuXHJcbi5jaGF0cy1pdGVtLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZSBoZWFkZXJcIiBcImltYWdlIGNvbnRlbnRcIjtcclxufVxyXG5cclxuLmNoYXRzLWl0ZW0tYnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGF0cy1pdGVtLWhlYWRlciB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNoYXRzLWl0ZW0tdGl0bGUge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICM0NzVGN0I7XHJcbn1cclxuLmNoYXRzLWl0ZW0tbGFzdCB7XHJcbiAgZmxleDogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgY29sb3I6ICM4MjhEOTkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNoYXRzLWl0ZW0tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4uY2hhdHMtaXRlbS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2hhdHMtaXRlbTpsYXN0LWNoaWxkIC5jaGF0cy1pdGVtLWNvbnRlbnQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi8qKioqKioqTmF2IGJhcioqKioqKioqKioqKioqL1xyXG4gLmZpeGVkLWhlYWRlciwgLmZpeGVkLWZvb3RlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5maXhlZC1oZWFkZXJ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgI2FkZEJ0blxyXG4gICAge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIH1cclxuICAgICNkZWxldGVCdG57XHJcbiBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIH1cclxuLnNlYXJjaHtcclxuIG1hcmdpbi1sZWZ0OiAxOTBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuICAgXHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/css/responsive.css":
/*!***************************************!*\
  !*** ./src/assets/css/responsive.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./responsive.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/responsive.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*************************************************************************!*\
  !*** multi ./src/assets/css/styles.css ./src/assets/css/responsive.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Dell\Desktop\notesApp\src\assets\css\styles.css */"./src/assets/css/styles.css");
module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\notesApp\src\assets\css\responsive.css */"./src/assets/css/responsive.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map