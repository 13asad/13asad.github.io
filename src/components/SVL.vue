<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">SVL</h2>

    <!-- Slide 1: Why Me As SVL -->
    <div
      v-if="currentSlide === 0"
      class="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto h-96 flex items-center"
    >
      <div class="w-full text-center">
        <h1 class="text-3xl font-bold mb-4 text-black">
          Computer Science & Systems Engineering
        </h1>
        <h2 class="text-2xl font-semibold text-red-500 mb-4">Why Me As SVL?</h2>
        <p class="text-xl text-gray-700">
          <span class="font-mono text-lg text-black"> &lt;Mohammad Asad Atterkhan/&gt; </span>
        </p>
      </div>
    </div>

    <!-- Slide 2: About Me -->
    <div
      v-if="currentSlide === 1"
      class="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto h-96 flex items-center"
    >
      <div class="w-full text-center">
        <h1 class="text-3xl font-bold mb-4 text-black">About Me</h1>
        <p class="text-xl text-gray-700">
          Hi, I'm Mohammad Asad Atterkhan, a final-year Computer Science & Systems Engineering
          student with a passion for IT and teaching.
        </p>
      </div>
    </div>

    <!-- Slide 3: Skills -->
    <div
      v-if="currentSlide === 2"
      class="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto h-96 flex items-center"
    >
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-4 text-center text-black">Skills</h1>
        <ul class="list-disc pl-6 text-xl text-gray-700">
          <li>Leadership & Team Management</li>
          <li>Problem Solving</li>
          <li>Coding</li>
          <li>IT Systems & Networking</li>
        </ul>
      </div>
    </div>

    <!-- Slide 4: Experience & Achievements -->
    <div
      v-if="currentSlide === 3"
      class="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto h-96 flex items-center"
    >
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-4 text-center text-black">Experience & Achievements</h1>
        <ul class="list-disc pl-6 text-xl text-gray-700">
          <li>Current IT Engineer: Leading 2 major projects at my workplace.</li>
          <li>Employability Champion: Created an attendance project for the Career Fair.</li>
          <li>SVL (First Year): Represented students as SVL in my first year.</li>
        </ul>
      </div>
    </div>

    <!-- Slide 5: Goal as SVL -->
    <div
      v-if="currentSlide === 4"
      class="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto h-96 flex items-center"
    >
      <div class="w-full text-left">
        <h1 class="text-3xl font-bold mb-4 text-black">Goal as SVL</h1>
        <ul class="list-disc pl-6 text-xl text-gray-700">
          <li>Bridge communication between staff and students.</li>
          <li>Ensure that students have access to the right resources.</li>
          <li>Support students in academic learning and career development.</li>
        </ul>
      </div>
    </div>

    <!-- Slide 6: Conclusion -->
    <div
      v-if="currentSlide === 5"
      class="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto h-96 flex items-center"
    >
      <div class="w-full text-center">
        <h1 class="text-3xl font-bold mb-4 text-black">Thank You!</h1>
        <p class="text-xl text-gray-700">Questions?</p>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between mt-4 w-full max-w-3xl mx-auto space-x-4">
      <button
        @click="prevSlide"
        class="bg-transparent text-red-500 font-semibold py-2 px-4 rounded border border-red-500 hover:bg-red-500 hover:text-white transition duration-200 ease-in-out"
        :disabled="currentSlide === 0"
      >
        Previous
      </button>
      <button
        @click="nextSlide"
        class="bg-transparent text-red-500 font-semibold py-2 px-4 rounded border border-red-500 hover:bg-red-500 hover:text-white transition duration-200 ease-in-out"
        :disabled="currentSlide === slides.length - 1"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PresentationSlide',
  data() {
    return {
      currentSlide: 0,
      slides: [0, 1, 2, 3, 4, 5]
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    }
  }
}
</script>

<style scoped>
/* Add small gap between the navigation buttons */
.space-x-4 > * + * {
  margin-left: 1rem;
}
</style>
