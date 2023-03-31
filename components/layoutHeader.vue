<style lang="scss">
.down-select {
    position: relative;
    color: var(--main-color);

    .down-icon {}

    .down-chiose {
        display: none;
        position: absolute;
        top: 23px;
        border: solid 1px red;
        color: var(--main-color);

    }
}
</style>

<template>
    <div class="app-header">
        <div class="app-header-left">
            <span class="app-icon"></span>
            <p class="app-name">Portfolio</p>
            <div class="search-wrapper">
                <input class="search-input" type="text" placeholder="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search"
                    viewBox="0 0 24 24">
                    <defs></defs>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                </svg>
            </div>
        </div>
        <div class="app-header-right">

            <div class="down-select">
                <div class="down-icon" v-on:mouseover="mouseoverTab" v-on:mouseout="mouseoutTab"> 一个下拉选项卡
                   
                </div>
                <div class="down-chiose" ref="tabChiose" v-on:mouseover="mouseoverChiose"
                        v-on:mouseout="mouseoutChiose">
                          <ul>
                             <li>背景动画</li>
                             <li></li>
                          </ul>
                    </div>
            </div>

            <themeSwitch />
            <button class="add-btn" title="Add New Project">
                <svg class="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
            <button class="notification-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
            </button>
            <button class="profile-btn">
                <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
                <span>Aybüke C.</span>
            </button>
        </div>
        <button class="messages-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-message-circle">
                <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        </button>
    </div>
</template>

<script setup >

import { ref } from "vue"
const tabChiose = ref(null)

//鼠标移上去
function mouseoverTab() {
    tabChiose.value.style.display = "block"
    // tabChiose.style.display="block"

}
function mouseoutTab() {
    let str = tabChiose.value.style.cssText
    let regex = /block/;
    regex.test(str) ? tabChiose.value.style.display = 'none' : ""
    console.log(regex.test(str));
}

function mouseoverChiose() {
    tabChiose.value.style.display = "block"
}
//鼠标移出去
function mouseoutChiose() {
    console.log("没生效！！！！！")
    tabChiose.value.style.display = 'none'
}

</script>