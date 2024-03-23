<template>
    <section class="about-container">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <div class="page-header">
                        <h2 class="pt-5 about-header-text">Transforming Your Outdoor Spaces</h2>
                        <!-- <p>discover the potential with our landscaping services</p> -->
                    </div>
                    <div class="mt-5 px-4 page-about">
                        <p class="mb-5 about-text">At POV Landscaping, we believe that your outdoor space is the canvas
                            where
                            nature
                            reveals its true
                            colors, and we are the artists who bring that vibrant vision to life. Our name, "POV,"
                            reflects
                            our
                            dedication to providing a "Personal Outdoor Vision" that aligns perfectly with your dreams
                            for a
                            serene and beautiful landscape.</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "AboutComponent",
    props: {}
};
</script>

<style scoped>
.about-container {
    //background-color: #333333;
}

.about-header-text {
    font-size: 3rem;
    color: #557C55;
}

.about-text {
    font-size: 1.5rem;
}

.page-header {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
}

.page-about {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
}

@media (max-width: 768px) {
    .about-header-text {
        font-size: 2rem;
    }

    .about-text {
        font-size: 1rem;
    }
}

</style>