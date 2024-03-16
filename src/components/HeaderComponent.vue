<template>
    <div class="header" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="overlay">
            <img :src="logo" alt="Logo" class="logo">
            <div>
                <v-btn rounded="xl" color="green-darken-4" class="mx-3 text-white">
                    Portfolio
                </v-btn>
                <v-btn rounded="xl" color="green-darken-4" class="mx-3 text-white">
                    <p class="text-button-colour">Get a Quote</p>
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
    //margin-bottom: 5%;
    margin-bottom: 60px;
    
}

@media (max-width: 768px) {
    .logo {
        max-width: 400px;
        margin-bottom: 50px;
    }
}

</style>
