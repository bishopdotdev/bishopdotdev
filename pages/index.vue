<template>
    <div class="min-h-screen">
        <div class="flex justify-center">
            <div class="relative w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg mt-16 mb-8 group">
                <NuxtImg
                    src="/profile.jpg"
                    alt="Portfolio Image"
                    class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    width="192"
                    height="192"
                />
                <NuxtImg
                    src="/funny_profile.jpg"
                    alt="Alternate Portfolio Image"
                    class="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    width="192"
                    height="192"
                />
            </div>
        </div>

        <ULandingGrid class="max-w-7xl w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mx-auto">

            <ULandingCard 
            class="col-span-6 sm:col-span-3 lg:col-span-6 row-span-2" 
            icon="fa-duotone fa-solid fa-file-user fa-2x" 
            title="About" 
            description="Interested in learning more about me? Check out my resume and some information about me."
            color="emerald"
            to="/about"
            />


            <ULandingCard class="col-span-6 sm:col-span-3 lg:col-span-6 row-span-4" 
            icon="fa-duotone fa-solid fa-blog fa-2x" title="Developer Blog" 
            description="A collection of my thoughts on software development and cybersecurity. I write about my experiences and opinions on the latest technologies and trends in the industry, as well as tutorials on the latest tools and techniques." 
            to="/blog"
            color="emerald"
            />
            
            <!-- TODO: Add this back in once I have a portfolio site -->
            <!-- <ULandingCard class="col-span-6 sm:col-span-3 lg:col-span-6 row-span-4" 
            icon="fa-duotone fa-solid fa-chess-bishop fa-2x" 
            title="Hire Me" 
            description="Need a developer to build an app? Looking for assistance with your Shopify store, business website, or automation? I'm here to help! Hire my team at Bishop Labs."
            to="https://www.bishoplabs.ca"
            target="_blank"
            color="emerald"
            /> -->

            <ULandingCard class="col-span-6 sm:col-span-3 lg:col-span-6 row-span-4" 
            icon="fa-duotone fa-solid fa-chess-bishop fa-2x" 
            title="Hire Me" 
            description="Need a developer to build an app? Looking for assistance with your Shopify store, business website, or automation? I'm here to help! Hire my team at Bishop Labs."
            to="/contact"
            color="emerald"
            />
            
            <ULandingCard class="col-span-6 sm:col-span-3 lg:col-span-6 row-span-2" 
            icon="fa-duotone fa-solid fa-address-card fa-2x" 
            title="Contact" 
            description="Want to get in touch? Check out my contact page for more information on how to connect." 
            to="/contact"
            color="emerald"
            />


            <div class="col-span-full flex justify-center gap-4 text-center">
                <a href="https://github.com/bishopdotdev" target="_blank" class="inline-flex items-center justify-center p-2 rounded-md text-emerald-400 hover:text-white hover:bg-emerald-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors duration-200">
                    <i class="fab fa-brands fa-github text-4xl"></i>
                </a>
                <a href="https://x.com/bishopdotdev" target="_blank" class="inline-flex items-center justify-center p-2 rounded-md text-emerald-400 hover:text-white hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors duration-200">
                    <i class="fab fa-brands fa-x-twitter text-4xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/bishopdotdev" target="_blank" class="inline-flex items-center justify-center p-2 rounded-md text-emerald-400 hover:text-white hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors duration-200">
                    <i class="fab fa-brands fa-linkedin text-4xl"></i>
                </a>
                <a href="https://www.youtube.com/@bishopdotdev" target="_blank" class="inline-flex items-center justify-center p-2 rounded-md text-emerald-400 hover:text-white hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors duration-200">
                    <i class="fab fa-brands fa-youtube text-4xl"></i>
                </a>
   
            </div>

        </ULandingGrid>
    </div>
</template>

<script setup lang="ts">
// No additional setup needed as Announcement component is auto-imported
// Force theme to be dark
const colorMode = useColorMode()
colorMode.preference = 'dark'

</script>

<style scoped>
/* Add any page-specific styles here if needed */
</style>
