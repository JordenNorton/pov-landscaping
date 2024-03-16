<template>
    <div id="app">
        <HeaderComponent
            :logo="logo"
            :backgroundImage="backgroundImage"
        />
        <!-- Main Content Section -->
        <AboutComponent />
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import AboutComponent from "@/components/AboutComponent.vue";
import logoImage from '@/assets/logo.png'; // Adjust this path to where your actual logo image is located
import bgImage from '@/assets/bg.jpg'; // Adjust this path to where your actual background image is located

export default {
    name: 'App',
    components: {
        HeaderComponent,
        AboutComponent
    },
    data() {
        return {
            logo: logoImage,
            backgroundImage: bgImage,
        };
    },
}
</script>

<style>

</style>
