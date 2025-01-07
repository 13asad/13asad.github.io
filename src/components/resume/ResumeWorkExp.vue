<script setup>
import { ref } from 'vue'

const isWorkExpOpen = ref(true)
</script>

<template>
    <section>
        <h3
            class="text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isWorkExpOpen = !isWorkExpOpen"
        >
            <span style="color: #444440">Experience</span>
            <span v-if="isWorkExpOpen">−</span>
            <span v-else>+</span>
        </h3>
        <ul
            v-if="isWorkExpOpen"
            class="grid grid-cols-1 gap-2 text-gray-600 mb-4"
        >
            <li>
                <h4 class="text-lg font-semibold">IT Engineer</h4>
                <div class="flex items-center gap-2">
                    <p class="text-sm text-gray-500">Tropic Knits Group</p>
                    <span>|</span>
                    <p class="text-sm text-gray-500">June 2024 - Present</p>
                </div>
                <ul class="text-sm text-gray-500 list-disc ml-5">
                    <li>
                        Responsible for managing and maintaining the IT infrastructure of the company.
                    </li>
                    <li>Led three projects at national and international levels.</li>
                    <li>Monitored security systems and Office 365.</li>
                    <li>Managed Active Directory, Group Policy, user accounts, and Linux systems administration.</li>
                    <li>Managed IT infrastructure including networking, telephony systems (PABX), and router setup.</li>
                    <li>Oversaw industrial infrastructure such as digital scales, cutting machines, and barcode scanners.</li>
                    <li>Repaired hardware, set up PCs, and resolved technical issues.</li>
                    <li>Managed the IT ticketing system to ensure prompt issue resolution.</li>
                    <li>Reduced department costs by selecting more efficient software solutions.</li>
                    <li>Maintained printers (Ricoh, Zebra, HP) and related peripherals.</li>
                    <li>Provided on-site and remote support for IT infrastructure.</li>
                </ul>
            </li>
            <li>
                <h4 class="text-lg font-semibold">Software Trainee</h4>
                <div class="flex items-center gap-2">
                    <p class="text-sm text-gray-500">GammaTech Ltd</p>
                    <span>|</span>
                    <p class="text-sm text-gray-500">June 2023 - May 2024</p>
                </div>
                <ul class="text-sm text-gray-500 list-disc ml-5">
                    <li>Supported research, software development, and project design.</li>
                    <li>Provided customer support, addressing multiple inquiries daily.</li>
                    <li>SQL scripting for data querying and analysis.</li>
                    <li>Conducted data analysis.</li>
                    <li>Performed software testing and documented reports.</li>
                    <li>Contributed to software development and automation efforts.</li>
                </ul>
            </li>
        </ul>
    </section>
</template>
