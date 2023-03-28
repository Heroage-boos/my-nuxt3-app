<template>
    <LayoutHeader />
    <div class="app-content">
        <LayoutContentLeft />
        <div class="projects-section">
            <slot />
        </div>
        <LayoutContentRigth />
    </div>
    <LayoutFooter/>
</template>