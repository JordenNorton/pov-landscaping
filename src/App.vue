<template>
    <div id="app">
        <HeaderComponent
            :logo="logo"
            :backgroundImage="backgroundImage"
        />
        <!-- Main Content Section -->
        <AboutComponent/>
        <PortfolioComponent
            :portfolioOne="portfolioOne"
            :portfolioTwo="portfolioTwo"
            :portfolioThree="portfolioThree"
            :portfolioFour="portfolioFour"
        />
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import AboutComponent from "@/components/AboutComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";
import logoImage from '@/assets/logo.png'; // Adjust this path to where your actual logo image is located
import bgImage from '@/assets/bg.jpg'; // Adjust this path to where your actual background image is located
import portfolioOne from '@/assets/portfolio/image1.jpeg';
import portfolioTwo from '@/assets/portfolio/image2.jpeg';
import portfolioThree from '@/assets/portfolio/image3.jpeg';
import portfolioFour from '@/assets/portfolio/image4.jpeg';

export default {
    name: 'App',
    components: {
        HeaderComponent,
        AboutComponent,
        PortfolioComponent
    },
    data() {
        return {
            logo: logoImage,
            backgroundImage: bgImage,
            portfolioOne: portfolioOne,
            portfolioTwo: portfolioTwo,
            portfolioThree: portfolioThree,
            portfolioFour: portfolioFour,
        };
    },
}
</script>

<style>

</style>
