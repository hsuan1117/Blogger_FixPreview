// ==UserScript==
// @name         Blogger 解決預覽無法點擊
// @namespace    https://www.cotpear.com/
// @version      1.0
// @description  Blogger 解決預覽模式下無法點擊的問題
// @author       張睿玹
// @downloadURL  https://github.com/dwcoop/Blogger_FixPreview/raw/master/Blogge_FixPreview-zh-TW.user.js
// @match        https://*.blogspot.com/b/post-preview?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".blogger-clickTrap").remove()
})();