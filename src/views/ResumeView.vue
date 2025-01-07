<script setup>
import ResumeAbout from '@/components/resume/ResumeAbout.vue'
import ResumeSkills from '@/components/resume/ResumeSkills.vue'
import ResumeWorkExp from '@/components/resume/ResumeWorkExp.vue';
import ResumeEducation from '@/components/resume/ResumeEducation.vue';
import ResumeCerts from '@/components/resume/ResumeCerts.vue';
</script>

<template>
  <div class="bg-[#fdfcfb] p-6">
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="mb-4 p-2 rounded underline flex items-center inline-block">
      <font-awesome-icon :icon="['fas', 'download']" class="mr-2" />
      Download PDF
    </a>
    <section>
      <ResumeAbout />
      <ResumeSkills />
      <ResumeWorkExp />
      <ResumeEducation />
      <ResumeCerts />
    </section>
  </div>
</template>