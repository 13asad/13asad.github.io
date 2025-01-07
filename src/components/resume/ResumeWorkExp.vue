<script setup>
import { ref } from 'vue'

const isWorkExpOpen = ref(true)
const bullet = '•' // Define the bullet symbol here
</script>

<template>
    <section>
        <h3
            class="text-2xl md:text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isWorkExpOpen = !isWorkExpOpen"
        >
            <span style="color: #444440">Experience</span>
            <span v-if="isWorkExpOpen">−</span>
            <span v-else>+</span>
        </h3>
        <ul
            v-if="isWorkExpOpen"
            class="grid grid-cols-1 gap-4 text-gray-600 mb-4"
        >
            <li class="bg-white shadow-md rounded-lg p-4">
                <h4 class="text-lg md:text-xl font-semibold mb-2">
                    IT Engineer
                </h4>
                <div
                    class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm mb-2"
                >
                    <p>Tropic Knits Group</p>
                    <span class="hidden sm:block">|</span>
                    <p>June 2024 - Present</p>
                </div>
                <ul class="text-sm text-gray-500 list-none ml-5 mt-4">
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Responsible for managing and maintaining the IT
                            infrastructure of the company.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Led three projects at national and international
                            levels.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span>Monitored security systems and Office 365.</span>
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Managed Active Directory, Group Policy, user
                            accounts, and Linux systems administration.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Managed IT infrastructure including networking,
                            telephony systems (PABX), and router setup.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Oversaw industrial infrastructure such as digital
                            scales, cutting machines, and barcode
                            scanners.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Repaired hardware, set up PCs, and resolved
                            technical issues.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Managed the IT ticketing system to ensure prompt
                            issue resolution.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Reduced department costs by selecting more
                            efficient software solutions.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Maintained printers (Ricoh, Zebra, HP) and related
                            peripherals.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Provided on-site and remote support for IT
                            infrastructure.</span
                        >
                    </li>
                </ul>
            </li>
            <li class="bg-white shadow-md rounded-lg p-4">
                <h4 class="text-lg md:text-xl font-semibold mb-2">
                    Software Trainee
                </h4>
                <div
                    class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm mb-2"
                >
                    <p>GammaTech Ltd</p>
                    <span class="hidden sm:block">|</span>
                    <p>June 2023 - May 2024</p>
                </div>
                <ul class="text-sm text-gray-500 list-none ml-5 mt-4">
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Supported research, software development, and
                            project design.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Provided customer support, addressing multiple
                            inquiries daily.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >SQL scripting for data querying and analysis.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span>Conducted data analysis.</span>
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Performed software testing and documented
                            reports.</span
                        >
                    </li>
                    <li class="flex items-start">
                        <span class="bullet mr-2">{{ bullet }}</span>
                        <span
                            >Contributed to software development and automation
                            efforts.</span
                        >
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.bullet {
    /* Define the bullet symbol styling here */
    color: #4b5563; /* Tailwind gray-600 */
    font-size: 1rem;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
