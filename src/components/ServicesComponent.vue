<template>
    <section class="services-container">
        <v-container>
            <v-row justify="center" class="mb-5">
                <v-col cols="12" lg="6" xl="3" class="page-header">
                    <h2 class="services-header-text">Our Services</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="8" lg="10">
                    <div class="services-cards-container">
                        <v-row>
                            <v-col cols="12" md="4" class="mb-4" v-for="(service, index) in services" :key="index">
                                <v-card class="service-card" elevation="2">
                                    <v-card-title class="service-title">{{ service.title }}</v-card-title>
                                    <v-card-text>{{ service.description }}</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "ServicesComponent",
    data() {
        return {
            services: [
                {
                    title: "Landscaping",
                    description: "Transform your outdoor spaces with our comprehensive landscaping services. From design to execution, we create beautiful, sustainable gardens and outdoor areas."
                },
                {
                    title: "Hardcore Removal",
                    description: "Efficiently clear your site with our hardcore removal services. We handle the heavy lifting, ensuring your land is ready for new projects."
                },
                {
                    title: "Garden Maintenance",
                    description: "Keep your garden looking its best all year round with our garden maintenance services. Our expert team ensures your garden thrives in every season."
                }
            ]
        };
    }
};
</script>

<style scoped>
.page-header {
    background-color: #557C55;
    color: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.services-container {
    text-align: center;
}

.services-cards-container .service-card {
    height: 100%;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
}

.service-title {
    color: #557C55; /* Deep, elegant blue for titles */
}

@media (min-width: 960px) {
    .services-cards-container {
        padding: 1rem 5rem; /* Adds more horizontal padding on larger screens */
    }
}
</style>
