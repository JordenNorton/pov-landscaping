<template>
    <div class="header" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="overlay">
            <img :src="logo" alt="Logo" class="logo">
            <div class="py-1">
                <v-btn rounded="xl" class="mx-3 text-white custom-gradient" dark>
                    Portfolio
                </v-btn>
                <v-btn rounded="xl" class="mx-3 text-white custom-gradient-cta" dark>
                    Get a Quote
                </v-btn>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        logo: String,
        backgroundImage: String
    }
};
</script>

<style scoped>
.header {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
}

.overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.logo {
    max-width: 500px; /* Adjust based on your logo's size */
    margin-bottom: 60px;
    animation: logo-appear 0.5s ease-out forwards;
    opacity: 0; /* Initial state for animation */
    transform: scale(0.95); /* Initial scale */
    
}

@keyframes logo-appear {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.custom-gradient {
    background: rgb(102,187,106);
    background: linear-gradient(135deg, rgba(102,187,106,1) 0%, rgba(67,160,71,1) 100%);
    border: none; /* Remove any default borders */
    color: white; /* Ensure text color is white for high contrast */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow for depth */
    transition: all 0.3s ease; /* Smooth transition for effects */
}

.custom-gradient:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Enhanced shadow on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
}
.custom-gradient-cta {
    background: rgb(203,185,55);
    background: linear-gradient(90deg, rgba(203,185,55,1) 0%, rgba(209,146,9,1) 100%);
}



@media (max-width: 768px) {
    .logo {
        max-width: 200px;
        margin-bottom: 50px;
    }
}

</style>
